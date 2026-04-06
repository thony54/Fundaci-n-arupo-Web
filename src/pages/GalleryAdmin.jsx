import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import PageTransition from '../components/motion/PageTransition';

const DEFAULT_GALLERY_DATA = {
    "Fundación Arupo": [
        { id: 1, category: 'Comunidad', title: 'Talleres Sociales', color: 'accent-500' },
        { id: 2, category: 'Educación', title: 'Apoyo Escolar', color: 'primary-500' },
        { id: 3, category: 'Eventos', title: 'Día de la Familia', color: 'secondary-500' },
        { id: 4, category: 'Voluntariado', title: 'Jornadas de Limpieza', color: 'accent-400' },
    ],
    "Centro Terapéutico Integral Arupo": [
        { id: 5, category: 'Terapia Ocupacional', title: 'Motricidad Fina', color: 'primary-400' },
        { id: 6, category: 'Psicología', title: 'Terapia de Juego', color: 'secondary-400' },
        { id: 7, category: 'Lenguaje', title: 'Comunicación Asertiva', color: 'accent-300' },
        { id: 8, category: 'Fisioterapia', title: 'Rehabilitación Física', color: 'primary-300' },
    ]
};

export default function GalleryAdmin() {
    const [galleryData, setGalleryData] = useState(DEFAULT_GALLERY_DATA);
    const [newItem, setNewItem] = useState({
        section: 'Fundación Arupo',
        category: '',
        title: '',
        imageUrl: '',
        color: 'accent-500'
    });
    const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
    const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
    const [showConfig, setShowConfig] = useState(false);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('gallery_items')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            // Organizamos los datos en las dos secciones
            const organized = {
                "Fundación Arupo": data.filter(item => item.section === "Fundación Arupo"),
                "Centro Terapéutico Integral Arupo": data.filter(item => item.section === "Centro Terapéutico Integral Arupo")
            };
            setGalleryData(organized);
        } catch (e) {
            console.error("Error fetching gallery:", e);
            showStatus('Error al cargar la galería desde la nube', 'error');
            setGalleryData(DEFAULT_GALLERY_DATA);
        } finally {
            setLoading(false);
        }
    };

    // Centralizamos el guardado en Supabase
    const handleAddItem = async (e) => {
        e.preventDefault();
        if (!newItem.title || !newItem.category || !newItem.imageUrl) {
            showStatus('Por favor, complete todos los campos y suba una imagen', 'error');
            return;
        }

        setLoading(true);
        try {
            // 1. Convertir Base64 a Blob para subir a Storage
            const response = await fetch(newItem.imageUrl);
            const blob = await response.blob();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.jpg`;
            const filePath = `gallery/${fileName}`;

            // 2. Subir a Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from('gallery-images')
                .upload(filePath, blob, { contentType: 'image/jpeg' });

            if (uploadError) throw uploadError;

            // 3. Obtener URL Pública
            const { data: { publicUrl } } = supabase.storage
                .from('gallery-images')
                .getPublicUrl(filePath);

            // 4. Guardar en la Base de Datos
            const { error: dbError } = await supabase
                .from('gallery_items')
                .insert([{
                    section: newItem.section,
                    category: newItem.category,
                    title: newItem.title,
                    image_url: publicUrl,
                    color: newItem.color
                }]);

            if (dbError) throw dbError;

            showStatus('¡Elemento guardado en la nube con éxito!', 'success');
            setNewItem({ ...newItem, title: '', category: '', imageUrl: '' });
            fetchGallery(); // Recargar datos
        } catch (e) {
            console.error("Error saving to Supabase:", e);
            showStatus('Error al subir a la nube. ¿Creaste el bucket "gallery-images" en Supabase?', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteItem = async (id, imageUrl) => {
        if (!confirm('¿Estás seguro de eliminar este elemento para siempre?')) return;

        setLoading(true);
        try {
            // 1. Eliminar de la Database
            const { error: dbError } = await supabase
                .from('gallery_items')
                .delete()
                .eq('id', id);

            if (dbError) throw dbError;

            // 2. Eliminar del Storage (opcional pero recomendado)
            // Extraer el nombre del archivo de la URL
            const fileName = imageUrl.split('/').pop();
            await supabase.storage.from('gallery-images').remove([`gallery/${fileName}`]);

            showStatus('Elemento eliminado de la nube', 'success');
            fetchGallery();
        } catch (e) {
            console.error("Error deleting from Supabase:", e);
            showStatus('Error al eliminar el elemento', 'error');
        } finally {
            setLoading(false);
        }
    };

    const colors = [
        { name: 'Naranja', value: 'accent-500' },
        { name: 'Azul', value: 'primary-500' },
        { name: 'Verde', value: 'secondary-500' },
        { name: 'Cian', value: 'accent-400' },
        { name: 'Índigo', value: 'primary-400' }
    ];

    return (
        <PageTransition>
            <section className="pt-32 pb-20 bg-dark-950 min-h-screen text-white">
                <div className="mx-auto max-w-5xl px-4">
                    <header className="mb-12 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                                Administrador de Galería
                            </h1>
                            <div className="flex gap-4 mt-2">
                                <button
                                    onClick={() => setShowConfig(!showConfig)}
                                    className="text-dark-400 hover:text-white text-sm transition-colors flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    Configuración
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="text-red-400 hover:text-red-300 text-sm transition-colors flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {statusMessage.text && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}
                                >
                                    {statusMessage.text}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </header>

                    {/* Password Change Form */}
                    <AnimatePresence>
                        {showConfig && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mb-12"
                            >
                                <div className="bg-dark-900 border border-dark-800 rounded-3xl p-8 shadow-xl">
                                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <span className="w-2 h-6 bg-primary-500 rounded-full" />
                                        Cambiar Contraseña
                                    </h2>
                                    <form onSubmit={handleChangePassword} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-dark-300">Contraseña Actual</label>
                                            <input
                                                type="password"
                                                className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-colors"
                                                value={passwords.current}
                                                onChange={e => setPasswords({ ...passwords, current: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-dark-300">Nueva Contraseña</label>
                                            <input
                                                type="password"
                                                className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-colors"
                                                value={passwords.new}
                                                onChange={e => setPasswords({ ...passwords, new: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-dark-300">Confirmar Nueva</label>
                                            <input
                                                type="password"
                                                className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-colors"
                                                value={passwords.confirm}
                                                onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
                                            />
                                        </div>
                                        <div className="md:col-span-3 flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-primary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-400 transition-colors"
                                            >
                                                Actualizar Contraseña
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* New Item Form */}
                    <div className="bg-dark-900 border border-dark-800 rounded-3xl p-8 mb-12 shadow-xl">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-accent-500 rounded-full" />
                            Agregar Nuevo Elemento
                        </h2>
                        <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-dark-300">Sección Principal</label>
                                <select
                                    className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors"
                                    value={newItem.section}
                                    onChange={e => setNewItem({ ...newItem, section: e.target.value })}
                                >
                                    <option>Fundación Arupo</option>
                                    <option>Centro Terapéutico Integral Arupo</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-dark-300">Categoría (Etiqueta)</label>
                                <input
                                    type="text"
                                    placeholder="Ej: Comunidad, Terapia..."
                                    className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors"
                                    value={newItem.category}
                                    onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-dark-300">Título</label>
                                <input
                                    type="text"
                                    placeholder="Nombre del proyecto o actividad"
                                    className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors"
                                    value={newItem.title}
                                    onChange={e => setNewItem({ ...newItem, title: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-dark-300">Imagen (Vertical 1080x1920 recomendado)</label>
                                <div className="flex gap-6 items-start">
                                    <div className="flex-1">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dark-700 border-dashed rounded-2xl cursor-pointer bg-dark-800/50 hover:bg-dark-800 hover:border-accent-500/50 transition-all group">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-3 text-dark-500 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                                <p className="mb-2 text-sm text-dark-400 font-medium tracking-tight">Selecciona una foto de tu PC</p>
                                                <p className="text-xs text-dark-600">JPG, PNG o WEBP</p>
                                            </div>
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                        </label>
                                    </div>
                                    {newItem.imageUrl && (
                                        <div className="w-24 aspect-[9/16] bg-dark-800 rounded-xl overflow-hidden border border-accent-500/50 shadow-lg shadow-accent-500/10">
                                            <img src={newItem.imageUrl} className="w-full h-full object-cover" alt="Vista previa" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="md:col-span-2 flex justify-between items-center bg-dark-800/50 p-4 rounded-2xl border border-dark-700/50">
                                <div className="flex gap-3">
                                    {colors.map(color => (
                                        <button
                                            key={color.value}
                                            type="button"
                                            onClick={() => setNewItem({ ...newItem, color: color.value })}
                                            className={`w-8 h-8 rounded-full bg-${color.value} border-2 transition-all ${newItem.color === color.value ? 'scale-125 border-white shadow-lg shadow-white/20' : 'border-transparent'}`}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-accent-500 text-dark-900 px-8 py-3 rounded-xl font-bold hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/20"
                                >
                                    Agregar a Galería
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Manage Items Table */}
                    <div className="space-y-8">
                        {Object.entries(galleryData || {}).map(([sectionTitle, items]) => (
                            <div key={sectionTitle} className="bg-dark-900 border border-dark-800 rounded-3xl overflow-hidden shadow-xl">
                                <div className="p-6 border-b border-dark-800 flex justify-between items-center bg-dark-800/20">
                                    <h2 className="text-lg font-bold">{sectionTitle}</h2>
                                    <span className="text-xs font-bold text-dark-400 bg-dark-800 px-3 py-1 rounded-full">{items.length} elementos</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-xs uppercase tracking-widest text-dark-500 bg-dark-900/50">
                                                <th className="px-6 py-4">Visual</th>
                                                <th className="px-6 py-4">Información</th>
                                                <th className="px-6 py-4">Categoría</th>
                                                <th className="px-6 py-4 text-right">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-dark-800">
                                            {(Array.isArray(items) ? items : []).map(item => (
                                                <tr key={item.id} className="group hover:bg-dark-800/30 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-800 flex items-center justify-center border border-dark-700">
                                                            {item.image_url ? (
                                                                <img src={item.image_url} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <svg className="w-6 h-6 text-dark-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <p className="font-bold text-sm text-white">{item.title}</p>
                                                        <p className="text-xs text-dark-500 mt-1 truncate max-w-[200px]">{item.image_url || 'Usa silueta predeterminada'}</p>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-dark-800 border border-dark-700 text-dark-300">
                                                            {item.category}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button
                                                            onClick={() => handleDeleteItem(item.id, item.image_url)}
                                                            className="text-dark-500 hover:text-red-400 p-2 transition-colors rounded-lg hover:bg-red-400/10"
                                                            title="Eliminar elemento"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {(!items || items.length === 0) && (
                                                <tr>
                                                    <td colSpan="4" className="px-6 py-8 text-center text-dark-500 italic">No hay elementos en esta sección.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}

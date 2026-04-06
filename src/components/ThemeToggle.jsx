import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={() => {
                console.log('Theme toggle clicked');
                toggleTheme();
            }}
            className="group rounded-full p-2 text-dark-300 transition-all duration-300 hover:bg-dark-800 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Alternar tema oscuro"
            title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
        >
            <div className="relative h-6 w-6">
                {/* Sun Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`pointer-events-none absolute inset-0 h-full w-full transform transition-all duration-500 ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                        }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                </svg>

                {/* Moon Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`pointer-events-none absolute inset-0 h-full w-full transform transition-all duration-500 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                        }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                </svg>
            </div>
        </button>
    );
}

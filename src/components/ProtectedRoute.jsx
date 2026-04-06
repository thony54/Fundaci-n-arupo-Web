import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const isAuthenticated = sessionStorage.getItem('arupo_admin_auth') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

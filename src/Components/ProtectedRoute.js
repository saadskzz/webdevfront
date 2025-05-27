import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const authenticated = useSelector(state => state.authentication.isAuthenticated);
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '../contexts/AuthContext';
import AppContainer from '../components/AppContainer';
import Login from '../components/Login';
import { useAuth } from '../contexts/AuthContext';

/**
 * Hlavní stránka aplikace
 * @returns {JSX.Element} Hlavní stránka
 */
function HomePage() {
  const { user } = useAuth();

  return (
    <GoogleOAuthProvider clientId="967451125866-u5kemj2ph7ucf36qgkrsntre674sqsjv.apps.googleusercontent.com">
      {user ? <AppContainer /> : <Login />}
    </GoogleOAuthProvider>
  );
}

/**
 * Wrapper komponenta pro poskytnutí AuthProvider
 * @returns {JSX.Element} Wrapper komponenta
 */
export default function Home() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
} 
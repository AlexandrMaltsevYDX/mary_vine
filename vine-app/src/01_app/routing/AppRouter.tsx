import AuthenticatedRouter from './AuthenticatedRouter';
// import UnauthenticatedRouter from './UnauthenticatedRouter';
// import { useAuth } from '../features/auth/AuthProvider';

const AppRouter = () => {
  const isAuth = true;

  // const { isAuth } = useAuth();
  if (isAuth) {
    return <AuthenticatedRouter />;
  }
  return null;
}

export default AppRouter;
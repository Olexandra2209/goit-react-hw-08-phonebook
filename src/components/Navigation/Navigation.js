import { Nav } from 'components/AuthNav/AythNav.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Nav to="/">Home</Nav>
      {isLoggedIn && <Nav to="/contacts">Contacts</Nav>}
    </nav>
  );
};

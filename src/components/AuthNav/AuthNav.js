import { Nav } from './AythNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Nav to="/register">Register</Nav>
      <Nav to="/login">Log In</Nav>
    </div>
  );
};

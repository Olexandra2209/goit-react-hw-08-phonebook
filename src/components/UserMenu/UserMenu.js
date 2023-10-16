import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Div, Username } from './UserMenu.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Div>
  );
};

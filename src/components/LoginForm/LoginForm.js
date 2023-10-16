import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, FormLebel } from './LoginForm.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLebel>
        Email
        <input type="email" name="email" />
      </FormLebel>
      <FormLebel>
        Password
        <input type="password" name="password" />
      </FormLebel>
      <Button type="submit">Log In</Button>
    </Form>
  );
};

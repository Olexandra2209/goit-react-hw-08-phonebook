import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

export const Button = styled.button`
  background-color: #cb6d6d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c82333;
  }
`;

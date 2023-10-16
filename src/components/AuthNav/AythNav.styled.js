import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #071a02;
    cursor: pointer;
  }
`;

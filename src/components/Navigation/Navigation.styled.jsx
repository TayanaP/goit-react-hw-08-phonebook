import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;

  margin-right: 114px;

  color: #000000;

  :hover,
  :focus {
    color: #e1cd9a;
  }
`;

export const Contacts = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  margin-right: 114px;
  color: #000000;

  :hover,
  :focus {
    color: #e1cd9a;
  }
`;

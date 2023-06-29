import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export const NavItem = styled.li`
  display: block;
  font-weight: 600;
  font-size: 18px;

  padding: 12px 20px;

  color: #ffffff;
  background-color: #bfd0df;

  border-radius: 9px;

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
  }
`;

export const NavLink = styled.link``;

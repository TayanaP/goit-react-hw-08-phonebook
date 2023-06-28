import { NavList, NavItem } from 'components/AuthNav/AuthNav.styled';
import { NavLink } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="login">LogIn</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="register">Register</NavLink>
      </NavItem>
    </NavList>
  );
};

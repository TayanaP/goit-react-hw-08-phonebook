import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Logo, Contacts } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Logo to="/">PhoneBook</Logo>

      {isLoggedIn && <Contacts to="/contacts">Contacts</Contacts>}
    </nav>
  );
};

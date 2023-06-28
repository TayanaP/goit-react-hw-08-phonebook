import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { ContactList } from 'components/ContactsList/ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactList>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactList>
  );
};

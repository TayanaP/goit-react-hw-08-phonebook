import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  Button,
  Table,
  THName,
  THNumber,
  TR,
  THButton,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const visibleContacts = [
  //   ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  // ];

  return (
    <Table>
      <tbody>
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <TR key={id}>
              <THName>{name}</THName>
              <THNumber>{number}</THNumber>
              <THButton>
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </Button>
              </THButton>
            </TR>
          );
        })}
      </tbody>
    </Table>
  );
};

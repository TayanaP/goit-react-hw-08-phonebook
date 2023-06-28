import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contacts/filtersSlice';
import { Label, Input } from 'components/ContactsForm/ContactsForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const normalizedValue = e.target.value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        title="Enter name or surname"
        required
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

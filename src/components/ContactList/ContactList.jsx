import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selector.js';
import { deleteContact } from '../../redux/contactSlice.js';
import PropTypes from 'prop-types';
import { Ul, Li, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

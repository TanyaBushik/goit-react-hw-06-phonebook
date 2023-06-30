import React from 'react';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  //   toast.success('Contact deleted');
  // };

  // const handleAddContact = (name, number) => {
  //   const newContact = { id: nanoid(), name, number };
  //   const find = contacts.find(
  //     element => element.name.toLowerCase() === name.toLowerCase()
  //   );

  //   if (find) {
  //     toast.error(`Contact ${find.name} is already in contacts.`);
  //     return;
  //   }
  //   toast.success('Contact added');
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleFilter = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleFilter = getVisibleFilter();

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {/* <ToastContainer autoClose={3000} /> */}
    </Container>
  );
};

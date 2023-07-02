import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as Yup from 'yup';
import {
  Container,
  Input,
  Label,
  Wrapper,
  ErrorMsg,
  Btn,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { Formik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactSlice';

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.id === newContact.name)) {
      return toast.error(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Container>
          <Wrapper>
            <Label htmlFor="name">Name:</Label>
            <Input name="name" type="text" id="name" />
            <ErrorMsg name="name" component="div" />
          </Wrapper>

          <Wrapper>
            <Label htmlFor="number">Number:</Label>
            <Input name="number" type="tel" id="number" />
            <ErrorMsg name="number" component="div" />
          </Wrapper>

          <Btn type="submit">Add contact</Btn>
        </Container>
      </Formik>
      <ToastContainer />
    </>
  );

  // return (
  //   <Form onSubmit={handleSubmit}>
  //     <LabelName>
  //       Name
  //       <NameInput
  //         type="text"
  //         name="name"
  //         pattern="^[a-zA-Zа-яА-Я]+((['
  //           -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //         title="Name may contain only
  //           letters, apostrophe, dash and spaces. For example Adrian, Jacob
  //           Mercer, Charles de Batz de Castelmore d'Artagnan"
  //         required
  //         value={contacts.name}
  //         // onChange={handleInputChange}
  //       ></NameInput>
  //     </LabelName>

  //     <LabelNumber>
  //       Number
  //       <NumberInput
  //         type="tel"
  //         name="number"
  //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //         required
  //         value={contacts.value}
  //         // onChange={handleInputChange}
  //       ></NumberInput>
  //     </LabelNumber>

  //     <AddBtn type="submit">Add Contact</AddBtn>
  //     <ToastContainer />
  //   </Form>
  // );
};

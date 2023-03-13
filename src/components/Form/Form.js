import React, { useState } from "react";
import { nanoid } from 'nanoid';
import './form.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/contacts-operations";
import { getContacts } from "redux/contacts/contacts-selector";
import { Input, Button, FormLabel, useToast, VStack } from '@chakra-ui/react';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const isDuplicate = ({ name, number }) => {
    const resullt = contacts.find(item => item.name === name || item.number  === number);
    return resullt;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isDuplicate({ name, number })) {

      toast({
        title: `Contact with name ${name} or number ${number} is already in list`,
        status: 'error',
        duration: 5000,
        position: 'top',
        isClosable: true
      })
      return;
    }

    const action = addContact({ name, number });
    dispatch(action);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <VStack borderColor='gray.100'
      borderWidth='2px'
      padding='4'
      borderRadius='lg'
      width='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='center'>
   <form onSubmit={handleSubmit} className='form1'>
     <FormLabel htmlFor={nameId} color='orange.500' ml='18'>Name</FormLabel>
        <Input
          type="text"
          name="name" //name cовпадает с полем в state.name!!
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="input_field"
          value={name}
          onChange={handleInputChange}
          id={nameId} />
      <FormLabel htmlFor={numberId} color='orange.500' ml='18'>Number</FormLabel>
        <Input
          type="tel"
          name="number" //name cовпадает с полем в state.name!!
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="input_field"
          value={number}
          onChange={handleInputChange}
          id={numberId} />
        <Button type="submit" colorScheme="orange" px="16" ml='18' mr='auto'>Add contact</Button>
      </form>
      </VStack>
  );
}

export default Form;


import './contact.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

export const ContactList = () => {
    
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = (id) => {
        const action = deleteContact(id);    
        dispatch(action);
    }
    
    const elements = filteredContacts.map(({ name, number, id }) => {  
        return <HStack key={id}>
            <Text>{name}: {number}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => onRemoveContact(id)} isRound='true'/>
        </HStack>
    }
    
    )
    return (
        <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            padding='4'
            borderRadius='lg'
            width='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            alignItems="stretch"
        >{elements}</VStack>
    )
}
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { ListContainer, ListItem } from './ContactList.styled';
import { selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };
  const filteredContacts = contacts.filter(contact => {
    if (
      contact.name &&
      typeof contact.name === 'string' &&
      filter &&
      typeof filter === 'string'
    ) {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return true;
  });

  return (
    <ListContainer>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button onClick={() => deleteContactHandler(contact.id)}>
            Delete
          </button>
        </ListItem>
      ))}
    </ListContainer>
  );
};

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from "../contacts.json";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";

const LOCAL_STORAGE_KEY = 'contacts';

const loadContacts = () => {
  const saved = localStorage.getItem("contacts");
  if (!saved || saved === "[]"){
    return initialContacts;
  }
  return JSON.parse(saved);
};


export default function App() {
  const [contacts, setContacts] = useState(loadContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
    return (
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    );
  }
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";



export default function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList />
    </div>
  );
}

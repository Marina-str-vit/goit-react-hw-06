import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactLisct";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

export default function App() {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}
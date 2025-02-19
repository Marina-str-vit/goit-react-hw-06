import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactLisct";
import SearchBox from "../components/SearchBox/SearchBox";
import s from "../App/App.module.css";

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
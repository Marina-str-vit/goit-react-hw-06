import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";



export default function ContactList() {
  const items = useSelector(state => state.contacts.items)
  
  const filteredCont = useSelector(state => state.contacts.filter);
  
  const filteredData = () =>
    items.filter(item =>
      item.name.toLowerCase().includes(filteredCont.toLowerCase())
    );
 
  
  return (
    <ul className={s.menuList}>
     <Contact className={s.item} contacts={filteredData()} />
    </ul>
  );
}
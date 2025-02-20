import { useSelector } from "react-redux";
import Contact  from "../Contact/Contact";
import s from "./ContactList.module.css";

 const ContactList = () => {
  const items = useSelector(state => state.contacts.items)
  console.log(items);
  
  
  const filteredCont = useSelector(state => state.filters.filters.name);
  console.log(filteredCont);
  
  
  const filteredData = items.filter(item =>
      item.name.toLowerCase().includes(filteredCont)
    );
 
  
  return (
    <ul className={s.menuList}>
       {filteredData.map((item) => (
        <li className={s.item} key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";

export function Contact({ contacts }) {
  const dispatch = useDispatch();
  return contacts.map(({ id, name, number }) => (
      <li key={id} id={id} className={s.contacts}>
        {name}: {number}
        <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </li>
    ));
}

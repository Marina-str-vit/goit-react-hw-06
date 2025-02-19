import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filterSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  // const filteredCont = useSelector(state => state.contacts.filter);
  
  const filterFind = e => {
    dispatch(setFilter(e.target.value.trim().toLowerCase()));
  };

  return (
    <div className={s.filter}>
      <p>Find contacts:</p>
			<input
				className={s.input}
        type="text"
        onChange={filterFind}
        placeholder="Search..."
      />
    </div>
  );
}

// value={filteredCont}
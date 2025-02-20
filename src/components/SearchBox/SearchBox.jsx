import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filteredCont = useSelector(state => state.filters.filters.name);

  const filterFind = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.filter}>
      <p>Find contacts:</p>
			<input
     	className={s.input}
       value={filteredCont}
        type="text"
        onChange={filterFind}
        placeholder="Search..."
      />
    </div>
  );
}

// value={filteredCont}

// value={filteredCont}
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../redux/filtersSlice';
import css from "./SearchBox.module.css";

export default function SearchBox(){
   const dispatch = useDispatch();
   const filter = useSelector(state => state.filters.name);
   
   const handleChange = event => {
      dispatch(changeFilter(event.target.value));
   };
   
   return (
      <div className={css.wrapper}>
          <label htmlFor="search" className={css.label}>Find contacts by name</label>
          <input 
             id="search"
             type="text"
             value={filter}
             onChange={handleChange}/>
      </div>
   );
  }

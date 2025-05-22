import css from "./SearchBox.module.css";

export default function SearchBox({value, onChange}){
   return (
      <div className={css.wrapper}>
          <label htmlFor="search" className={css.label}>Find contacts by name</label>
          <input 
             id="search"
             type="text"
             value={value}
             onChange={event => onChange(event.target.value)}/>
      </div>
   );
  }

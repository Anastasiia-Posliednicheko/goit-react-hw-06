import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';


export default function Contact({id, name, number }){
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{name}</h3>
            <p>{number}</p>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    );

}
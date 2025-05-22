export default function Contact({id, name, number, onDelete}){
    return (
        <div>
            <h3>{name}</h3>
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );

}
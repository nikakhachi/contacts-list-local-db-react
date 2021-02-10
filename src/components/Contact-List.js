
function List({contacts, remove}){
    return(
        <div>
            {contacts.map(contact => (
                <p key={contact.id}>{contact.name} - {contact.number} <button id={contact.id} onClick={remove}>Delete</button></p>
            ))}
        </div>
    )
}

export default List;
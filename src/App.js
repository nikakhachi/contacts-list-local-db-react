import ContactList from './components/Contact-List';
import ContactForm from './components/Contact-Form';
import { useState, useEffect } from 'react';
import services from './services/services';
import uuid from 'react-uuid';

function App(){

    const [data, setData] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNum, setNewNum] = useState('');

    useEffect(() => {
        services.get()
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);

    function nameHandler(e){
        setNewName(e.target.value);
    }

    function numHandler(e){
        setNewNum(e.target.value);
    }

    function addContact(e){
        e.preventDefault();
        if(data.find(item => item.name === newName)){
            let confirm = window.confirm(`${newName} is already in your contact list, Do you want to overwrite the number ?`);
            if(confirm){

                let selectedObject = data.find(item => item.name === newName);
                let changedObject = {...selectedObject, number: newNum}

                services.update(changedObject)
                .then(response => {
                    let index = data.indexOf(selectedObject);
                    let newArray = [...data];
                    newArray.splice(index, 1, changedObject);
                    setData(newArray);
                    setNewName('');
                    setNewNum('');
                })
                .catch(error => console.log(error));
            }
        }else{
            let newContact = {
            name: newName,
            number: newNum,
            id: uuid()
            }
            services.add(newContact)
            .then(response => response.json())
            .then(object => {
                setData(data.concat(object));
                setNewName('');
                setNewNum('');
            })
            .catch(error => console.log(error));
        }
    }

    function deleteContact(e){
        e.preventDefault();
        services.remove(e.target.id)
        .then(response => {
            let deletedContact = data.find(item => item.id === e.target.id);
            let deletedIndex = data.indexOf(deletedContact);
            let newArray = [...data];
            newArray.splice(deletedIndex, 1);
            setData(newArray);
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <h1>CONTACT LIST</h1>
            <ContactForm submit={addContact} name={newName} num={newNum} nameHandler={nameHandler} numHandler={numHandler}/>
            <ContactList contacts={data} remove={deleteContact}/>
        </div>
    )
}

export default App;
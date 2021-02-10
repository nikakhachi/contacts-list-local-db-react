
function Form(props){
    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' value={props.name} onChange={props.nameHandler}/>
                <label htmlFor="number">Number</label>
                <input type="number" id='number' value={props.num} onChange={props.numHandler}/>
                <button onClick={props.submit}>Add</button>
            </form>
        </div>
    )
}

export default Form;
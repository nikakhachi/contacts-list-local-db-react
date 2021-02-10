
const Notification = props => {

    let style = {
        border: "5px solid green",
        margin: "10px",
        padding: "10px 5px",
        fontSize: "20px"
    }

    if(/deleted/.test(props.message)){
        style.border = '5px solid red';
    };

    if(props.message !== ''){
        return <div style={style}>{props.message}</div>
    }else{
        return <></>
    }
}

export default Notification;
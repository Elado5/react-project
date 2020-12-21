import DatePicker from 'react-date-picker';


const FormField = (props) => {

//אבות טיפוס של פריטים בטופס הרשמה שלנו

    if (props.type === 'list') {
        return (
            <div className="field">
                <label>{props.name}</label>
                <datalist id={props.listId}>
                    {props.data.map(item => <option value={item.name}> {item.name} </option>)}
                </datalist>
                <input type="text" list={props.listId} onInput={(event) => { props.action(event.target.value) }} />
            </div>
        )
    }

    else if (props.type === 'file'){ //נוסף כאן תנאי לקבל רק קבצי jpeg
        return (
            <div className="field">
                <label>{props.name}</label>
                <input type={props.type} accept="image/jpeg" onInput={(event) => { props.action(event.target.value) }} />
            </div>
        )
    }

    else if (props.type === 'number'){
        return(
        <div className="field">
                <label>{props.name}</label>
                <input type={props.type} max="0599999999" onInput={(event) => { props.action(event.target.value) }} />
            </div>)
    }

    
    else {
        return (
            <div className="field">
                <label>{props.name}</label>
                <input type={props.type} onInput={(event) => { props.action(event.target.value) }} />
            </div>
        )
    }
}

export default FormField;
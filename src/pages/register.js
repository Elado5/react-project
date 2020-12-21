//import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
//import Button from 'react-bootstrap/Button';
import '../cssFiles/register.css';
import FormField from "../components/formField";
import DatePicker from 'react-date-picker';



const Register = (props) => {

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [picture, setpicture] = useState(null)
const [surname, setsurname] = useState('')
const [lastName, setlastName] = useState('')
const [email, setemail] = useState('')
const [birthdate, setbirthdate] = useState(new Date())
const [city, setCity] = useState('')
const [street, setstreet] = useState('')
const [phoneNumber, setphoneNumber] = useState('')

    //list of cities
    const [cities, setCities] = useState([])

    //udate the list of cities once the page load
    useEffect(() => {
        getCitiesFromJson();
    }, []);

    //get all the cities from the JSON file
    const getCitiesFromJson = async () => {
        let response = await fetch('./data/israel-cities.json');
        let data = await response.json(); //the values
        setCities(data);
    }

    //validate the register form
    const checkForm = () => {
        //#region == vs === הסבר
        /*
        == -> בודק את הערך
        === -> בודק את הערך ואת הטיפוס

        5 == '5' true
        5 === '5' false
        */
       //#endregion

        if (userName === '' || password === '' || confirmPassword === '' || city === '' || picture === '' || surname === '' || lastName === '' || email === '' || birthdate === '' || street === '' || phoneNumber === '') {
            alert('יש למלא את כל השדות')
            return false;
        }

        if (!(password === confirmPassword))
        {
            alert(`הסיסמאות לא תואמות`)
            return false;
        }

        if(!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[c]{1}[o]{1}[m]{1}$/i.test(email))) // i = case insensitive, {n} - only n letters/numbers, [range-range2] is the range of input available
        {
            alert('תצורת מייל לא נכונה, נסה שנית')
            return false;
        }
        
        if(!(/^[\u0590-\u05fe]+$/i.test(surname))){ //regex של עברית
            alert ('הזן שם בעברית בלבד')
            return false;
        }
        
        if(!(/^[\u0590-\u05fe]+$/i.test(lastName))){
            alert ('הזן שם משפחה בעברית בלבד')
            return false;
        }
        let newDate = new Date();
        let min = new Date(1,1,1901);
        let max = new Date(newDate.getDate());

        if(birthdate>max || birthdate<min){
            alert('אנא הזן תאריך הגיוני')
            return false;
        }


        if(!(/[0-9]{10}/.test(phoneNumber)))
        {
            alert('הזן מספר פלאפון תקין')
            return false;
        }
        return true;
    }

    //signup function -> לאחר הקלקה על כפתור ההרשמה
    const signup = (event) => {
        event.preventDefault(); //ביטול ניקוי הטופס באופן דיפולטיבי
        if (checkForm()) {
            let user = { userName, password, city } //deconstructure
            /* same thing as:
            let user = {
                userName: userName,
                password: password,
                city: city
            }
            */
            localStorage.setItem('user', JSON.stringify(user))
            alert(`נרשמת בהצלחה!`)
        }
    }

    /*
        let --> משתנה מקומי שנוצר רק לאחר השמה של ערך
        var --> משתנה גלובלי
        const --> קבוע
    */

//<FormField type="date" name="תאריך לידה" action={setbirthdate}/> בינתיים בחוץ
    return (
        

        <div className="container">
            <form onSubmit={signup}>
                <FormField type="text" name="שם משתמש" action={setUserName} />
                <FormField type="password" name="סיסמה" action={setPassword} />
                <FormField type="password" name="אימות סיסמה" action={setConfirmPassword} />
                <FormField type="file" name="העלאת תמונה שלך" action={setpicture}/>
                <FormField type="text" name="שם פרטי" action={setsurname}/>
                <FormField type="text" name="שם משפחה" action={setlastName}/>
                <FormField type="email" name="דואר אלקטרוני" action={setemail}/>
                
                <div className="field">
                <label>"date"</label>
                <DatePicker
                selected={birthdate}
                onChange={birthdate => setbirthdate(birthdate)}
                minDate={new Date(1901, 1, 1)}
                maxDate={new Date(2020, 12, 31)}
                placeholderText="Select a date in February 2020"
                />
                </div>
                <FormField type="list" listId="listOfCities" data={cities} name="עיר" action={setCity} />
                <FormField type="text" name="רחוב" action={setstreet}/>
                <FormField type="number" name="מספר פלאפון" action={setphoneNumber}/>
                <button type="submit">הרשמה</button>
                <button type="reset">ניקוי</button>
            </form>
        </div>
    )

    //#region react-bootstrap
/*
<Form>

    <FormGroup controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type = "text" placeholder="Enter Username"/>
        <Form.Text className="text-muted">
            Make sure it's a cool one ;)
        </Form.Text>
    </FormGroup>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formPasswordCheck">
        <Form.Label>Verify Password</Form.Label>
        <Form.Control type="password" placeholder="Password">
    </Form.Control>
    </Form.Group>

    <Form.Group>
    <Form.File id="userPicture" label="Upload your picture" />
  </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="date">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" value="2020-12-01"/> 
    </Form.Group>

    <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <CityFilter></CityFilter>
    </Form.Group>

    <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control type="text"/>
    </Form.Group>

    <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel"/>
   </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>



    <Button variant="primary" type="submit">
        Submit
    </Button>

</Form>
*/
//#endregion

}

export default Register;
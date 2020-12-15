import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../cssFiles/register.css';
import '../components/cityFilter';
import CityFilter from '../components/cityFilter';
import PhoneInput from 'react-phone-input-2'



const Register = (props) => {

const [userName, setUserName] = useState('')
const [password, setpassword] = useState('')
const [confirmPassword, setconfirmPassword] = useState('')
const [city, setcity] = useState('')
return(

<Form>

    <Form.Group controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type = "text" placeholder="Enter Username"/>
        <Form.Text className="text-muted">
            Make sure it's a cool one ;)
        </Form.Text>
    </Form.Group>

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
        <Form.Control> <CityFilter></CityFilter> </Form.Control>
              
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
)
}

export default Register;
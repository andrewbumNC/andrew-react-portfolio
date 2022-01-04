

import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { checkPassword, validateEmail } from '../components/utils/helpers'


function Contactme () {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("")
const [errorMessage, setErrorMessage] = useState("");


const handleInputChange = (event) => {

const { target } = event;

const inputType = target.name;
const inputValue = target.value;

if (inputType === 'email') {
    setEmail(inputValue);
} else if (inputType === "firstName"){
    setFirstName(inputValue); 
} else if (inputType === "lastName"){
    setLastName(inputValue);
} else {
    setMessage(inputValue);
}

};

const handleFormSubmit = (event) => {
event.preventDefault();

if(!validateEmail(email)) {
    setErrorMessage("Email is invalid");
    return;
}

if(validateEmail(email)) {
    setErrorMessage("Success! Andrew will be in touch")
}

setFirstName("");
setLastName("");
setEmail("");
setMessage("");



}


return (
    
    <Form className="allForms">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control 
    type="text" 
    value={firstName} 
    name="firstName"
    onChange={handleInputChange}
    placeholder=""
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Last Name</Form.Label>
    <Form.Control 
    type="text" 
    value={lastName} 
    name="lastName"
    onChange={handleInputChange}
    placeholder=""
     />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="text" 
    value={email}
    name="email"
    onChange={handleInputChange}
    placeholder=""
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
    <Form.Label>Message</Form.Label>
    <Form.Control 
    type="text" 
    value={message}
    name="message"
    onChange={handleInputChange}
    placeholder=""
    as="textarea"
     rows={3} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={handleFormSubmit}>
    Submit
  </Button>
  {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
</Form>

 )
} 

export default Contactme
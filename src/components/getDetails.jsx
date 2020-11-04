import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/all.css'


const GetDetails = () => {
   
   const [details, setDetails] = useState({
       name:"",
       age:"",
       school:"",
       email:"",
       emailList: []
   });

   const addName = (event) =>
   {
       setDetails({
        ...details,   
        name:event.target.value})
   }

   const submit = (event) => {
        event.preventDefault();
        let newArray = [...details.emailList];
        newArray.push(details.name);
        
        setDetails({
            ...details,
            emailList : newArray
        });

        document.getElementById("frm").reset();
   }

   
   
   
   
    return (
      <div>
 <Container className="main">
        <Form id="frm" onSubmit={submit}>

        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={addName}/> 
        </Form.Group>

        <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter age" /> 
        </Form.Group>

        <Form.Group>
            <Form.Label>School</Form.Label>
            <Form.Control type="text" placeholder="Enter school" /> 
        </Form.Group>


        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
          
    </Container>
    
    <br/>
    <Container>

        <Row>
            <Col className="bordert">
    {details.emailList.map(x => (<h3>{x}</h3>))}
            </Col>
            <Col className="border">

            </Col>
            <Col className="border">

            </Col>
        </Row>
       
    </Container>
    </div>
    )
}

export default GetDetails;
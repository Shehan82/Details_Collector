import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Names from './names'
import './css/all.css'


const GetDetails = () => {
   
   const [details, setDetails] = useState({
       name:"",
       school:"",
       email:"",
       nameList: [],
       schoolList:[],
       emailList:[]
   });

   const addName = (event) =>
   {
       setDetails({
        ...details,   
        name:event.target.value})
   }

   const addSchool = (event) =>
   {
       setDetails({
        ...details,   
        school:event.target.value})
   }

   const addEmail = (event) =>
   {
       setDetails({
        ...details,   
        email:event.target.value})
   }

   const submit = (event) => {
        event.preventDefault();
        let newArray = [...details.nameList];
        newArray.push(details.name);

        let newArray1 = [...details.schoolList];
        newArray1.push(details.school);

        let newArray2 = [...details.emailList];
        newArray2.push(details.email);
        
        setDetails({
            ...details,
            nameList : newArray,
            schoolList : newArray1,
            emailList : newArray2
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
            <Form.Label>School</Form.Label>
            <Form.Control type="text" placeholder="Enter school" onChange={addSchool} /> 
        </Form.Group>


        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"onChange={addEmail} />
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
              <br/>  <h4>Name</h4> <br/>
    {details.nameList.map(x => (<Names List={x}/>))}
            </Col>
            <Col className="bordert">
            <br/>  <h4>School</h4> <br/>
    {details.schoolList.map(x => (<Names List={x}/>))}
            </Col>
            <Col className="bordert">
            <br/>  <h4>Email</h4> <br/>
            {details.emailList.map(x => (<Names List={x}/>))}

            </Col>
        </Row>
       
    </Container>
    </div>
    )
}

export default GetDetails;
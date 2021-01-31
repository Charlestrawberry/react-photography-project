import React from 'react';
import { Form, Button } from "react-bootstrap";
import styled from 'styled-components';



const Styles = styled.div`



.Perspective{
    width: 100%;
}
@media screen and (max-width: 1200px){
    .form{
        dispaly: block;
    }

 

    .perspective{
        perspective: 500px;
        font-size: 14px;
        margin-left:50px;
    }
}
`;



const LoginForm = () => {
    return(
        <Styles>
        <div className='container mr-5 pl-auto form'>
        <Form name="contact" type="file" method="POST" data-netlify="true">
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Full Names</Form.Label>
                <Form.Control type="text" name="name" placeholder="John Doe" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group>
                    <Form.Label> Enter Your password</Form.Label>
                    <Form.Control type="password" name="password" placeholder= "Enter Your password" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Contact</Form.Label>
                <Form.Control type="number" placeholder="Phone contact" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select">
                <option value="male" >Male</option>
                <option value="female" >Female</option>
                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder='Write your message here' />
            </Form.Group>
            <Button className='form-btn perspective' type="submit"
            style={{
                backgroundColor: 'rgb(77, 10, 23)',
                border: 'none',

            }}
            >
                Submit </Button>
        </Form>
        </div>
        </Styles>
    );  
};

export default LoginForm; 
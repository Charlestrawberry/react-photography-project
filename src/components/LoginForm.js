import React from 'react';
import { Form, Button } from "react-bootstrap";
import styled from 'styled-components';



const Styles = styled.div`
@media screen and (max-width: 1200px){
    .form{
        dispaly: block;
    }

    .form-btn{
        font-size: 14px;
    }
}
`;



const LoginForm = () => {
    return(
        <Styles>
        <div className='container mr-5 pl-auto form'>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Full Names</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group>
                    <Form.Label> Enter Your password</Form.Label>
                    <Form.Control type="password" placeholder= "Enter Your password" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Contact</Form.Label>
                <Form.Control type="number" placeholder="Phone contact" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select">
                <option>Male</option>
                <option>Female</option>
                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Write your message here' />
            </Form.Group>
            <Button className='form-btn' type="submit"
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
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import ContactLeft from './components/ContactLeft';
import Footer from './components/Footer';

export const Contact = () => {
    return (
        <>
        <div className='container'>
            <h1 className='text-center mt-5'>CONTACT US</h1>
        </div>
            
        <div className='container-fluid'>
            <Row>
                <Col> <ContactLeft title = 'Contact Us Today'
                
                /> </Col>
                <Col> <LoginForm /> </Col>
            </Row>
            <br></br><br></br><br></br>
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
}

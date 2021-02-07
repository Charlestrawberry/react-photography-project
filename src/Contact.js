import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import ContactLeft from './components/ContactLeft';
import Footer from './components/Footer';
import styled from 'styled-components';




const Styles = styled.div`
.vibrate-1 {
	-webkit-animation: vibrate-1 0.3s linear infinite both;
	        animation: vibrate-1 0.3s linear infinite both;
}

@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}


container{
    padding-right: 70px;
}

`;


export const Contact = () => {

    return (
        <Styles>
            <Container>
        <div className='container'>
            <h1 className='vibrate-1  text-center mt-5'>CONTACT US</h1>
        </div>
            
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-6'> <ContactLeft /> </div> 
                <br />
                <br />
                <div className='col-sm-6'> <LoginForm />  </div>
            </div>
            <br></br><br></br><br></br>
            <div>
                <Footer />
            </div>
        </div>
        </Container>
        </Styles>
    )
}

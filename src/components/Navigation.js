import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import './Navigation.css'



const Styles = styled.div`
.navbar-brand{
    font-size: 30px;
    font-family: 'Mali', cursive;
    margin-right: 40px;
    font-weight: bolder;
    &:hover {
        color: rgb(163, 69, 29);
    }
}


@media screen and (max-width: 768px){
    .navbar-brand{
        font-size: 20px
    }
}

.navbar-nav .nav-link{
    color: black;

    &:hover {
        color: rgb(180, 13, 13);

        border-bottom: 3px initial red;
    }

}


    
`;

export const Navigation = () =>(

        <div className='Navigation'>
            <div className='box'>
                <ul className='box-items'>
                    <li className='box-items-links'><a href='www.instagram.com'></a> <i className='fab fa-instagram' aria-hidden='true'></i></li>
                    <li className='box-items-links'><a href='http/:wwww.facebook.com'></a> <i className='fab fa-facebook' aria-hidden='true'></i></li>
                </ul>
                <h5 style={{alignItems:'center'}}> Unlimited Joy when you CHOOSE us as your photoshoot plug!!</h5>
            </div>

            <div className="Navbar">

                <Styles>
                <Navbar expand= "lg">
                <Navbar.Brand href= "/">GmeeJay <font>Media</font></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nabvabr-nav" />
                <Navbar.Collapse id= "basic-nabvabr-nav">
                    
                <Nav className="Navbar-items ml-auto">
                <Nav.Item> <Nav.Link  href= "/">Home</Nav.Link></Nav.Item>
                <Nav.Item> <Nav.Link  href= "/Portfolio">Portfolio</Nav.Link></Nav.Item>
                <Nav.Item> <Nav.Link  href= "/About">About</Nav.Link></Nav.Item>
                <Nav.Item> <Nav.Link  href= "/Contact">Contact</Nav.Link></Nav.Item>
                </Nav>

                </Navbar.Collapse>
                </Navbar>
                </Styles>
                <div className='icon'>
                    <i className='fa fa-search' aria-hidden='true'></i>
                    <i className='fa fa-user' aria-hidden='true'></i>
                </div>
                

            </div>

            </div>
)
import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import photo4 from '../assets/photo4.jpg';

const Styles = styled.div`
    .jumbotron{
        background: url(${photo4}) no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-image: url(${photo4}) cover;
        color: #bbb;
        height: 200px;
        width: 100%;
        position: relative;
        z-index: -1      
    }

    .Jumbo h1 {
        font-size: 40px;
        color: white;
        align-items: center;
        text-align: center;

    @media screen and (max-width: 768px){
        font-size: 30px
    }

`;
export const JumbotronHome = () =>(
    <Styles>
        <Jumbo className= "Jumbo">
            <div className="overlay"></div>
            <Container>
                <h1> WELCOME TO MY STUDIO</h1>
            </Container>
        </Jumbo>
    </Styles>
)
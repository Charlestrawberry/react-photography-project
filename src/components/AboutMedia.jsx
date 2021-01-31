import React, {useEffect} from 'react';
import Aos from 'aos';
import {Media, Container } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .media img{
        height: 300px;
        width: 400px;
        margin-bottom: 80px;
        background-color: rgb(240, 229, 229);
        &:hover{

        }
    }
    @media screen and (max-width: 880px){
        .media img{
            width: 50%;
            height: 50%;
            display: flex;
        }
    }



`;




function AboutMedia() {
    useEffect(()  => {
        
        Aos.init ({ duration: 2000 });
      }, []);

    return (
        <Styles>
            <Container>
            <h2 data-aos='slide-down'>About GmeeJay Media</h2>
        <div className='row'>
              <div className='col-10'>
        <Media className='media'>
            <img
                className="mr-3 download"
                src="./images/wedding.jpg"
                alt="pics"
                title='JIMMY JOHNSON'
            />
            <Media.Body>
                
                <p>
                "The beauty of marriage is not always seen from the very beginning—but rather as love grows and develops over time....."<cite>Fawn Weaver</cite>
                </p>
            </Media.Body>
        </Media>
        </div>
        </div>
        <hr></hr>
        </Container>
        </Styles>
        
    )
}

export default AboutMedia;

import React, { useEffect } from 'react';
import Aos from 'aos';
import { JumbotronHome } from './components/JumbotronHome';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import Footer from './components/Footer';
import AboutMedia from './components/AboutMedia'
import './About.css';


const Styles= styled.div`
h2{
    text-align: center;
    margin-top : 70px;
    margin-bottom: 40px:
    color: rgb(180, 13, 13);
    font-size: 44px;
    text-transform: uppercase;
}




`;



export const About = () => {
    useEffect(()  => {
        
        Aos.init ({ duration: 2000 });
      }, []);

    return (
        <Styles>
        <div>
            <JumbotronHome />
        </div>
        <Container>
        <div>
            <AboutMedia />
        </div>


            
        <section className='section-about animated'>
            <div className='container'>
            <div className='row'>
                <div className='col-sm-10'>

                <section className='card' data-aos='flip-up'>
                    
                    <img src='/images/about.jpg' height ={600}
                    alt='' />
                    <div>
                        <h3>JIMMY JOHNSON</h3>
                        <p>
                            Hi, my name is Jimmy Johnson. I am a bloke photographer. 
                            I love to take nice and wonderful shots of event. When I am not working I play my draft game and have lots of fun.
                            I will like to be your main photography plug. Please call me for your next event.
        
                        </p>
                        <a href='/Portfolio' className='btn'>Check Out My Portfolio</a>
                    </div>
                </section>

                </div>
                
            </div>
            </div>
            </section>
                        
            <section className='container text-pop-up-top'>
                <div className='row'>
                <div className='col-sm-4'>
                <a href="https://www.facebook.com/Jimmkason" 
                         
                        className="icon-link"
                        target="_blank" rel="noreferrer" 
                        aria-label="Facebook" >
                            <i className="fab fa-facebook-f" /> </a>
                        
                </div>
                <div className='col-sm-4'>
                        <a href='https://www.instagram.com/official_gmeejay'
                        className="icon-link"
                        target="_blank" rel="noreferrer" 
                        aria-label="instagram" >
                            <i className="fab fa-instagram" />
                        </a>
                </div>

                <div className='col-sm-4'>
                        <a href='https://twitter.com/officialgmeejay'
                        className="icon-link"
                        target="_blank" rel="noreferrer" 
                        aria-label="twitter" >
                            <i className="fab fa-twitter" />
                        </a>
                </div>
                </div>
            </section>

            <hr />
            <Container>
            <section className='container ping'>
                    <div>
                        <h3 className=''>Testimonials</h3>
                    </div>
            </section>
            </Container>

            <section className='container testimonial'>
            <div className='row'>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/black1.jpg' alt='tetimonial'  />
                <p><cite>"Hi, my name is Cynthia. I have been working closely with Gmeejay for over 3years now and without any regret. Absolutely love his work and him as a person. Great human"</cite></p>
            </div>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/black2.jpg' alt='tetimonial'  />
                <p><cite>My name is Ugo. I am a studio guy. All I can say about my friend Jimmy is that he takes his job seriously. Stay absolutely blessed.</cite></p>
            </div>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/black3.jpg' alt='tetimonial'  />
                <p><cite>Glad to have met Mr Jimmy. He is my sure photo gig guy. I always look forward to have him around my family and he is my family go to photo gig <em>guy.</em> </cite> </p>
            </div>
            </div>
            </section>
        
            </Container>
        <div>
            <Footer />
        </div>
        </Styles>
    )
}

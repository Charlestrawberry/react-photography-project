import React, { useEffect } from 'react';
import Aos from 'aos';
import { JumbotronHome } from './components/JumbotronHome';
import styled from 'styled-components';
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

        <div>
            <AboutMedia />
        </div>


            
        <section className='section-about animated'>
            <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>

                <section className='card' data-aos='flip-up'>
                    
                    <img src='/images/about.jpg' height ={600}
                    alt='' />
                    <div>
                        <h3>JIMMY JOHNSON</h3>
                        <p>
                            Hi, my name is Jimmy Johnson. I am a bloke photographer. 
                            I love to take nice and wonderful shots of event. When I am not working a play my draft game and have lots of fun.
                            I will like to be your main photography plug. Please call me for your next event.
        
                        </p>
                        <a href='/Portfolio' className='btn'>Check Out My Portfolio</a>
                    </div>
                </section>

                </div>
                
            </div>
            </div>
            </section>

            <section className='container testimonial'>
            <div className='row'>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/photo2.jpg' alt=''  />
                <p>Glad to have met Mr Jimmy. hes my sure person</p>
            </div>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/photo2.jpg' alt=''  />
                <p>Glad to have met Mr Jimmy. hes my sure person</p>
            </div>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/photo2.jpg' alt=''  />
                <p>Glad to have met Mr Jimmy. hes my sure person</p>
            </div>
            </div>
            </section>
        

        



        <div>
            <Footer />
        </div>
        </Styles>
    )
}

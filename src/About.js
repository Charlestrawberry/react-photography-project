import React from 'react';
import { JumbotronHome } from './components/JumbotronHome';
import styled from 'styled-components';
import Footer from './components/Footer';
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
    return (
        <Styles>
        <div>
            <JumbotronHome />
        </div>
            <h2>About GmeeJay Media</h2>
        <section className='section-about animated'>
            <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>

                <section className='card'>
                    
                    <img src='/images/about.jpg' height ={600}
                    alt='' />
                    <div>
                        <h3>JIMMY JOHNSON</h3>
                        <p>
                            Birthday comes with happiness. However, birthday without pictures leave you with fading memories. the good thing about birthday is that with pictures you tend to look back into past memories and appreciate those who stood by you in your past. Don't celebrate your day without a photographer,
                        </p>
                        <a href='/Portfolio' className='btn'>Check Out My Portfolio</a>
                    </div>
                </section>

                </div>
                
            </div>
            </div>
            </section>
            <div className='row'>
            <div className='col-sm-4 section-testimonials container'> 
                <img src= './images/photo2.jpg' alt=''  />
                <p>Glad to have met Mr Jimmy. hes my sure person</p>
            </div>
            </div>
        

        <div className='container map'>
            <div id="map-container-google-1" class="z-depth-1-half map-container" >
            <iframe src="https://maps.app.goo.gl/pyN22VuFaLTfU2VD9" frameborder="0"
                 allowfullscreen></iframe>
            </div>
        </div>



        <div>
            <Footer />
        </div>
        </Styles>
    )
}

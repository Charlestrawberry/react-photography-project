import React, {useEffect} from 'react';
import Aos from 'aos';
import styled from 'styled-components';
import './HomeStyle.css';
import {Link} from 'react-router-dom';





const Styles = styled.div`
    .cover{
        position: relative;
        background-image: url(./images/photo2.jpg) ;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 250px 0 200px;
    }

    .cover h1{
        margin: 0;
        padding: 0;
        font-size: 3.8rem;
        color: white;
        font-family: 'Mali', cursive;
        font-weight: lighter; bolder;
    }

    .cover p{
        margin: 1rem 0 0;
        padding: 0;
        font-size: 18px;
        color: white;
        font-family: 'Roboto' sans-serif;
        text-align: left;
        font-weight: lighter;
    }

    .btn-1{
        background-color: rgb(77, 10, 23);
        color: whitesmoke;
        padding: 10px 30px;
        margin: 1rem 0 0;
        cursor: pointer;
        display: inline-block;
        border-radius: 15px;
        border: none;
        font-size: 1.3rem;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;

        &:hover{
            padding: 12px 40px;
            cursor: pointer;
            transition: 0.1s;
            color: rgb(77, 10, 23);
            background-color: whitesmoke;
            font-weight: bold;
        }
    }


    @media screen and (max-width: 1200px){
        .cover h1{
            margin: 0;
            padding: 0;
            font-size: 2.8rem;
            
        }
    
        .cover p{
            margin: 1rem 0 0;
            padding: 0;
            font-size: 16px;
            
        }
    
        
    }
    @media screen and (max-width: 760px){
        .cover h1{
            margin: 0;
            padding: 0;
            font-size: 2rem;
            
        }
    
        .cover p{
            margin: 1rem 0 0;
            padding: 0;
            font-size: 16px;
            
        }
    }



    

`;                     
 
export const Home = () => {
    useEffect(()  => {
        
        Aos.init ({ duration: 2000 });
      }, []);

    return (
        <Styles>
            
            <section className='cover'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-8'>
                        <h1 data-aos='slide-right'>GMEEJAY MEDIA </h1>
                        <p data-aos='slide-left'> We are currently available for freelance photo and video work. I specialize lifestyle, indoor and outdoor photography but also have professional experience with brand and product photography.</p>

                        <Link to='./contact' className='btn-1' data-aos='zoom-in-down'>Contact Us</Link>
                        </div>
                    </div>
        
                  </div>
            </section>


        <div className='section-footers'>
        <sections className='soc-media'>
                <div className="soc-media-wraps">
                    <div className="section-footer-logo">
                        <Link to="/" className="section-logo">
                            GmeeJay Media <img src="/" alt="" />
                        </Link>
                    </div>
                
                    <small className="website-right">Website created: Charlnz Studio <i class="far fa-copyright"></i> 2021</small>
                    
                </div>
            </sections>
            </div>
        
        </Styles>
        
    )
}

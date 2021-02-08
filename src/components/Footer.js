import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our latest info!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form action ='/Received. We get back to you soon' name="contact" type="file" method="POST" data-netlify="true">
                        <input type='email' name='email' placeholder='enter email'
                        className='footer-input'
                        /> 
                        <Button buttonStyle='btn--outline' className='btn-submit'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className= "footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2> About Us</h2>
                        <Link to='/About' className='footer-link-'>Meet our team</Link>
                        <Link to='/Contact' className='footer-link'>Contact</Link>
                        <Link to='/Portfolio' className='footer-link'> Our exotic works</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Social Media</h2>

                        
                        <a href="https://www.facebook.com/Jimmkason" 
                         
                        className="footer-link"
                        target="_blank" rel="noreferrer" 
                        aria-label="Facebook" >
                            Facebook </a>


                            <a href='https://twitter.com/officialgmeejay'
                        className="footer-link"
                        target="_blank" rel="noreferrer" 
                        aria-label="twitter" >
                            Twitter
                        </a>


                        <a href="https://www.facebook.com/Jimmkason" 
                         
                        className="footer-link"
                        target="_blank" rel="noreferrer" 
                        aria-label="Facebook" >
                            LinkedIn </a>
                    </div>
                </div>
            </div>
            <sections className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/Home" className="social-logo">
                            GmeeJay Media 
                        </Link>
                    </div>
                    
                    <small   className="website-rights"> <a href=' https://www.instagram.com/iam_strawb' > Website Created by Charlnz Creative Studio<i class="far fa-copyright"></i> 2021 </a></small>
                    <div className="social-icons">


                        <a href="https://www.facebook.com/Jimmkason" 
                         
                        className="social-icon-link facebook"
                        target="_blank" rel="noreferrer" 
                        aria-label="Facebook" >
                            <i className="fab fa-facebook-f" /> </a>
                        


                        <a href='https://www.instagram.com/official_gmeejay'
                        className="social-icon-link instagram"
                        target="_blank" rel="noreferrer" 
                        aria-label="instagram" >
                            <i className="fab fa-instagram" />
                        </a>

                        <a href='https://twitter.com/officialgmeejay'
                        className="social-icon-link twitter"
                        target="_blank" rel="noreferrer" 
                        aria-label="twitter" >
                            <i className="fab fa-twitter" />
                        </a>

                    </div>
                </div>
            </sections>
        </div>
    )
}

export default Footer

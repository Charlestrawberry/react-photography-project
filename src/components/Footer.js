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
                    <form name="contact" type="file" method="POST" data-netlify="true">
                        <input type='email' name='email' placeholder='Enter Email'
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
                        <Link to='/'className='footer-link'>Facebook</Link>
                        <Link to='/' className='footer-link'>Twitter</Link>
                        <Link to='/' className='footer-link'>LinkedIn</Link>
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
                    <small className="website-rights">Website Created by Charlnz Studio <i class="far fa-copyright"></i> 2021</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook" >
                            <i className="fab fa-facebook-f" />
                        </Link>


                        <Link 
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="instagram" >
                            <i className="fab fa-instagram" />
                        </Link>

                        <Link 
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="twitter" >
                            <i className="fab fa-twitter" />
                        </Link>

                    </div>
                </div>
            </sections>
        </div>
    )
}

export default Footer

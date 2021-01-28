import React, { useEffect } from 'react';
import Aos from 'aos';
import { JumbotronHome } from './components/JumbotronHome';
import {Container } from 'react-bootstrap';
import './Portfolio.css';
import Footer from './components/Footer';
import { Carousel, Image } from 'react-bootstrap';
import {Link }from 'react-router-dom';




export const Portfolio = () => {
    useEffect(()  => {
        
        Aos.init ({ duration: 2000 });
      }, []);

    return (
        
        <div>
            <JumbotronHome />
            <div className='header container'>
                <h2 data-aos= 'flip-up'>MY PORTFOLIO</h2>
                <p>Check out our amazing portfolio</p>
            </div>
            <Container>
            
            <main>
                <section className='card'>
                    <img src='/images/portfolio2.jpg' alt='' />
                    <div>
                        <h3>Wedding Ceremony</h3>
                        <p>
                            Birthday comes with happiness. However, birthday without pictures leave you with fading memories. the good thing about birthday is that with pictures you tend to look back into past memories and appreciate those who stood by you in your past. Don't celebrate your day without a photographer,
                        </p>
                        <a href='/' className='btn'>Wedding Events</a>
                    </div>
                </section>
                <section className='card' 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                
                >
                    <img src='/images/portfolio1.jpg' alt='' />
                    <div>
                        <h3>Outdoor Events</h3>
                        <p>
                            Birthday comes with happiness. However, birthday without pictures leave you with fading memories. the good thing about birthday is that with pictures you tend to look back into past memories and appreciate those who stood by you in your past. Don't celebrate your day without a photographer,
                        </p>
                        <a href='/' className='btn'>Outdoor Buzz</a>
                    </div>
                </section>
                <section className='card'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                
                >
                    <img src='/images/portfolio3.jpg' alt='' />
                    <div>
                        <h3>Birthday Ceremony</h3>
                        <p>
                            Birthday comes with happiness. However, birthday without pictures leave you with fading memories. the good thing about birthday is that with pictures you tend to look back into past memories and appreciate those who stood by you in your past. Don't celebrate your day without a photographer,
                        </p>
                        <a href='/' className='btn'>Birthday Ceremony</a>
                    </div>
                </section>
                <section className='card'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                
                >
                    <img src='/images/portfolio5.jpg' alt='' />
                    <div>
                        <h3>Cooperate Events</h3>
                        <p>
                            Birthday comes with happiness. However, birthday without pictures leave you with fading memories. the good thing about birthday is that with pictures you tend to look back into past memories and appreciate those who stood by you in your past. Don't celebrate your day without a photographer,
                        </p>
                        <a href='/' className='btn'>Cooperate Events</a>
                    </div>
                </section>
                <section className='card'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <img src='/images/portfolio4.jpg' alt='' />
                    <div>
                        <h3>Reality TV Shows</h3>
                        <p>
                            Birthday comes with happiness. However, birthday without pictures leave you with fading memories. the good thing about birthday is that with pictures you tend to look back into past memories and appreciate those who stood by you in your past. Don't celebrate your day without a photographer,
                        </p>
                        <a href='/' className='btn'>Reality TV Shows</a>
                    </div>
                </section>
            </main>
            
            </Container>
        
            <Container>
            <div className='section-video'>
              <h4 data-aos='slide-up'> Have a glance of our quality video services.</h4>
            <div className="embed-responsive embed-responsive-16by9 mt-5 mb-5 autoplay loop controls muted">
            <iframe className="embed-responsive-item" src="./video/mobile.mp4"></iframe>
            </div>
            </div>

            </Container>
          

        <div className="container carousel">
            <div>
                <h4 data-aos="zoom-in">Here are some exotic pictures</h4>
                <p> <Link to='/contact' ></Link>Contact us. We are ready to deliver quality work </p>
            </div>
        <Carousel>

  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="./images/slide/slide1.jpg"  height ={450}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100"
      src="./images/slide/slide2.jpg" height ={450}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide3.jpg" height ={450}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide4.jpg" height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide5.jpg" height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide6.jpg" height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img 
      className="d-block w-100 "
      src="./images/slide/slide7.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img 
      className="d-block w-100 "
      src="./images/slide/slide8.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img 
      className="d-block w-100 "
      src="./images/slide/slide9.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img 
      className="d-block w-100 "
      src="./images/slide/slide10.jpg"  height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100 h-75"
      src="./images/slide/slide11.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100 "
      src="./images/slide/slide12.jpg" height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100 "
      src="./images/slide/slide13.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide14.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide15.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide16.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide17.jpg" height ={500}
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide18.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide19.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100 "
      src="./images/slide/slide20.jpg" height ={450}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100 "
      src="./images/slide/slide21.jpg" height ={450}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide22.jpg" height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide23.jpg" height ={550}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide24.jpg" height ={500}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image 
      className="d-block w-100 "
      src="./images/slide/slide25.jpg" height ={400}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>GmeeJay Media</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <Footer />
        </div>
        
        
    )
}

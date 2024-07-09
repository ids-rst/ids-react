import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Slide from '../assets/images/PNG.webp';
import Slide2 from '../assets/images/slide2.png';

const Carousels = () => {
  return (
    <>
       <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Container className='text-white py-5'>
            <Row className='align-items-center justify-content-center'> 
              <Col>
                <h1 className='lh-base'>Building Mobile and Web Apps that will help you Drive Business Growth</h1>
                <p className='fs-5'>We are Building Mobile, Web Apps, and Software to Drive Business Growth for our clients
                  with our huge impact strategies, Techniques, Resources, and Holistic Approaches.</p>
              </Col>
              <Col className='d-none d-md-block'>
                <img src={Slide} alt='slide'/>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className='text-white py-5'>
            <Row className='align-items-center justify-content-center'> 
              <Col>
                <h1 className='lh-base'>Customized Software and Web Development Services</h1>
                <h5 className='mb-3'>Software for your business-specific requirements</h5>
                <p className='fs-5'>We specialize in all the customized software and Web development Services with all the latest technologies to take your businesses to next level.
               </p>
              </Col>
              <Col className='d-none d-md-block'>
                <img src={Slide2} alt='slide'/>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carousels;
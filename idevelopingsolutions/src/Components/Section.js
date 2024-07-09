import React from 'react'
import {Container, Col, Row } from 'react-bootstrap';
import round from '../assets/images/round.png';
import about1 from '../assets/images/about1.png';

const Section = () => {
  return (
    <>
      <Container fluid className='py-5'>
          <Container>
            <Row className='align-items-center'>
              <Col md={6}>
                <div className='sec_title'>
                  <div className="sub_text">IDeveloping Solutions</div>
                  <div className="title mb-4">
                    A new wave of automation will transform your business
                  </div>
                  <div className="cs_description">
                    We are offering a range of services to suit the needs of every client. We pride
                    ourselves on offering excellent customer services and we’re always looking for new
                    ways to improve our product and service offerings. We offer IT expertise in software,
                    website, and application (Android &amp; iOS) development, UI/UX design. Currently, we are
                    Working with a team of highly skilled IT professionals that works round the clock to
                    ensure that IDS stays true to its offerings.
               </div>
                </div>
              </Col>
              <Col md={6} className='position-relative text-center'>
                <img src={round} alt="Round" />
                <div className="middle-img">
                  <img className="dance3" src={about1} alt="" />
               </div>
              </Col>
            </Row>
          </Container>
      </Container>
    </>
  )
}
export default Section;

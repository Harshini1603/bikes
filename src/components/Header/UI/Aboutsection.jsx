import React from 'react'
import "../../../styles/aboutsection.css"
import activa from "../../../Assets/Images/activa.png"
import { Container,Row,Col } from 'reactstrap'
const Aboutsection = () => {
  return (
    <section className='about-section'>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="about-section-content">
                        <h4 className="section-subtitle">
                            About Us
                        </h4>
                        <h2 className="section-title">
                            Welcome To Garuda Motors
                        </h2>
                        <p className="section-description">
                            Garuda Motors provides you with the best services and best offers.
                            We work for your safety
                            Come visit our showroom and you'll definitely recommend others to take vehicle here.
                                                    </p>
                    
                    </div>
                </Col>
                

                <Col lg="6" md="6">
                    <div className="about-section-image">
                        <img src={activa} className='activa-blue'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Aboutsection
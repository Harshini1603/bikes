import React from 'react'
import HeroSlider from "../components/Header/UI/HeroSlide"
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Findbikeform from '../components/Header/UI/Findbikeform'
import Aboutsection from '../components/Header/UI/Aboutsection'
function Home() {
  return (
    <Helmet title='Home'>
      <section className='p-0 hero-slider-section'>
        <HeroSlider />
        <div className='hero-form'>
          <Container>
            <Row className='form-row'>
              <Col lg="4" md="4">

                <div className="find-bike-left">
                  <Link to="/bikes"><h2>
                    Find Best Bikes Here
                  </h2>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Aboutsection/>

      
    </Helmet>
  )
}

export default Home
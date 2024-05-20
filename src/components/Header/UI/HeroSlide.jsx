import React from 'react'
import {Container} from "reactstrap"
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import "../../../styles/heroslider.css"

const HeroSlide = () => {
  const settings={
    fade:true,
    speed:2000,
    autoplaySpeed:3000,
    infinitw:true,
    autoplay:true,
    slideToShow:1,
    slideToScroll:1,
    pauseOnHover:false,

  }
  return (
    <Slider {...settings} className='hero-slider'>
      <div className="slider-item slider-item-01 mt0" >
        <Container>
          <div className='slider-content'>
            <h4 className='text-light mb-3'>For Best Service</h4>
          <h1 className='text-light mb-4'>Garuda Motors</h1>
          <button  className="btn reserve-btn mt-4">
            <Link to="/bikes">Look now</Link>
          </button>
          </div>
        </Container>
      </div>

      <div className="slider-item slider-item-02 mt0" >
        <Container>
          <div className='slider-content'>
            <h4 className='text-light mb-3'>For Best Service</h4>
          <h1 className='text-light mb-4'>Garuda Motors</h1>
          <button  className="btn reserve-btn mt-4">
            <Link to="/bikes">Look now</Link>
          </button>
          </div>
        </Container>
      </div>

      <div className="slider-item slider-item-03 mt0" >
        <Container>
          <div className='slider-content'>
            <h4 className='text-light mb-3'>For Best Service</h4>
          <h1 className='text-light mb-4'>Garuda Motors</h1>
          <button  className="btn reserve-btn mt-4">
            <Link to="/bikes">Look now</Link>
          </button>
          </div>
        </Container>
      </div>

      <div className="slider-item slider-item-04 mt0" >
        <Container>
          <div className='slider-content'>
            <h4 className='text-light mb-3'>For Best Service</h4>
          <h1 className='text-light mb-4'>Garuda Motors</h1>
          <button  className="btn reserve-btn mt-4">
            <Link to="/bikes">Look now</Link>
          </button>
          </div>
        </Container>
      </div>
    </Slider>
  )
}

export default HeroSlide
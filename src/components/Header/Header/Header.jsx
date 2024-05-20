import React from 'react'
import { Container, Row, Col } from "reactstrap"
import { Link, NavLink } from "react-router-dom"
import "../../../styles/header.css"
const navLinks =
  [
    {
      path: '/home',
      display: "Home"
    },
    {
      path: '/about',
      display: "About"
    },
    {
      path: '/bikes',
      display: "Bikes"
    },
    // {
    //   path: '/blogs',
    //   display: "Blog"
    // },
    {
      path: '/contact',
      display: "Contact"
    },
  ]

function Header() {
  return (
    <header className='header'>
      <div className='header-top'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className='header-top-left'>
                {/* <span>Need Help?</span> */}

                <div className="header-midle">
                  <h1>Garuda Motors</h1>
                  <span className='header-top-help'>
                    <i class="ri-phone-fill"></i> +91 99999999
                  </span>
                </div>
              </div>

            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className='header-top-right'>
                <Link to='https://www.google.com/maps?q=17.4081382751465,78.5697860717773' target='_blank'><i class='ri-map-pin-line'>Map</i>
                </Link>

                {/* <Link to='#'><i class='ri-user-line'>Register</i>
                </Link> */}


              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg='4' md='3' sm='4'>
              <div className='logo'>
                <h1>
                  <Link to="/home" className='d-flex align-items-center gap-3'>
                    <i class="ri-bike-line"></i>
                    <span>Bike<br />Service</span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className='header-location d-flex align-items-center gap-2'>
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className='header-location-content'>
                  <h4>India</h4>
                  <h6>Hyderabad,Telangana</h6>

                </div>
              </div>
            </Col>


            <Col lg='3' md='3' sm='4'>
              <div className='header-location d-flex align-items-center gap-2'>
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className='header-location-content'>
                  <h4>Sun-Mon</h4>
                  <h6>9am-9pm</h6>
                </div>
              </div>
            </Col>


            <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-center'>
              <button className="header-btn btn d-flex 
align-items-center justify-content-end text-end">
                
                  <a href='tel:+91 9000278794'>
                  <i class="ri-phone-line">Request a call</i>
                  </a></button>
            </Col>




          </Row>
        </Container>
      </div>


      <div className="main-navbar">
        <Container>
          <div className='nav-wrapper d-flex align-items-center justify-content-between'>
            <span className='mobile-menu'>
              <i class="ri-menu-line"></i>
            </span>
            <div className="navigation">
              <div className="menu">
                {
                  navLinks.map((item, index) => (
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "nav-active nav-items" : "nav-items"} key={index}>{item.display}</NavLink>
                  ))
                }
              </div>
            </div>
            {/* <div className="nav-right">
              <div className="search-box">
                <input type="text" placeholder='Search' />
                <span>

                  <i class="ri-search-line"></i>

                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>




    </header>
  )
}

export default Header
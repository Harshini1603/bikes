// import React from 'react'
// import { Col } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import hero from "../Assets/Images/hero.png"
// import "../styles/bikelist.css"
// const Bikelist = (props) => {
//   const {id, imgUrl,model,bikeName,speed,price}=props.item
//   return (
    
//     <Col lg="4" md="4" sm="6">
//       <div className='bike-item'>
//         <div className='bike-img'>
//           <img src={hero} className='w-100'/>
//         </div>
//         <div className="bike-itemcontent mt-4">
//           <h4 className='section-title text-center'>{bikeName}</h4>
//           <h6 className="bikeprice mt-4">{price}.00</h6>
//           <div className="bike-item-info d-flex align-items-center
//           justify-content-between mt-3 mb-4">
//             <span className='d-flex align-items-center gap-1'><i class="ri-bike-line"></i>{model}</span>
//             <span className='d-flex align-items-center gap-1'><i class="ri-timer-flash-line"></i>{speed}</span>

//           </div>
//           <button className="w-50 bike-item-btn">
//             <Link to="/bikes/${bikeName}">Look</Link>
//           </button>
//           </div>
//       </div>
//     </Col>
//   )
// }

// export default Bikelist

import React from 'react'

const Bikelist = () => {
  return (
    <div>Bikelist</div>
  )
}

export default Bikelist
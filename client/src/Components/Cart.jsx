import React from 'react'
import './Cart.css'

 const Cart = (props) => {
  return (
    <>
    <div  className='Cart' >
        <h1>{props.data.topic}</h1>
        <p>{props.data.summery}
        </p>
     
    </div>
    </>
  )
}

export default Cart
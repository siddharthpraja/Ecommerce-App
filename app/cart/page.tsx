
import Cart from '@/components/Cart/Cart'
import CheckoutForm from '@/components/Cart/CheckoutForm'
import React from 'react'

const Cartpage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 2xl:px-32' >
      <Cart/>
      <CheckoutForm/>
    </div>
  )
}

export default Cartpage

import React from 'react'
import BreadCrumb from '../../components/Global/Breadcrumb'
import ShoppingCart from '../../components/Global/ShoppingCart/ShoppingCart'

function CartPage() {
    return (
      <>
       <BreadCrumb />
    <section className='bg-light my-5'>
          <div className="container">
              <div className="row">
                 <ShoppingCart/>
              </div>
      </div>
    </section>
      </>
  )
}

export default CartPage

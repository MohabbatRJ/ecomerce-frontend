import React from 'react'
import BreadCrumb from '../../components/Global/Breadcrumb'
import Sidebar from '../../components/Global/Sidebar/Sidebar'
import Products from '../../components/ProductComponents/Products'

function ProductsPage() {
  return (
    <>
          <BreadCrumb />
          <section>
              <div className="container">
                  <div className="row">
                      <Sidebar />
                      <Products/>
                  </div>
              </div>
          </section>
    </>
  )
}

export default ProductsPage

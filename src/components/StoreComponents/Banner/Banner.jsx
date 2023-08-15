import React from 'react'

function Banner() {
  return (
    <section className='bg-color py-5'>
          <div className="container py-5 text-white text-start">
              <h1>
                  Best products &amp; <br /> brands in our store </h1>
              <p>
                  Trendy Products, Factory Prices, Excellent Service
              </p>
              <button type="button" className="btn btn-outline-light px-3 me-2 border-2">
                  Learn more
              </button>

              <button type="button" className="btn btn-light shadow-0 text-primary pt-2 border border-white px-2">
                  <span className="pt-1">Purchase now</span>
              </button>
      </div>
    </section>
  )
}

export default Banner

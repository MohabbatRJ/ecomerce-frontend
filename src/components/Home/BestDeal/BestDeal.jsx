import React from 'react'
import { bestDealProduct } from '../../../constant'
import './style.css';

function BestDeal() {
  return (
    <section className='mt-3'>
          <div className="container">
              <div className="card py-2 px-3">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="flex-column text-start">
                              {
                                  bestDealProduct.map((bestDeal, index) => (
                                      <a href="" key={index} className='nav-link my-0 py-1 my-1 ps-3 bg-white dealLinks'>{ bestDeal.title}</a>
                                  ))
                              }
                          </div>
                      </div>
                      
                      <div className="col-lg-9 text-start align-self-center">
                          <div className="card-banner h-auto p-5 bg-color rounded-2" style={{height: "350px;"}}>
                              <div className=''>
                                  <h2 className="text-white">
                                      Great products with <br />
                                      best deals
                                  </h2>
                                  <p className="text-white">No matter how far along you are in your  sophistication as an amateur astronomer, there is always one.</p>
                                  <a href="#" className="btn btn-light shadow-0 text-primary"> View more </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
    </section>
  )
}

export default BestDeal

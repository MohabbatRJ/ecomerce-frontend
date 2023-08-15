import React from 'react'
import { infos } from '../../../constant'

function Info() {
  return (
      <section className='my-2'>
          <div className="container">
              <div className="px-4 pt-3 border">
                  <div className="row pt-1">
                          {
                              infos.map((info, index) => (
                                  <div key={index} className="col-lg-3 col-md-6 mb-3 d-flex">
                                  <div className="d-flex align-items-center">
                                      <div className="badge badge-warning p-2 rounded-4 me-3 text-dark">
                                          <i className={`${info.icon} fa-3x fa-fw`}></i>
                                      </div>
                                      <span className="info text-start">
                                          <h6 className="title">{info.title}</h6>
                                          <p className="mb-0">{info.desc}</p>
                                      </span>
                                  </div>
                      </div>
                              ))
                          }
                          
                  </div>
              </div>
          </div>
      </section>
      
  )
}

export default Info

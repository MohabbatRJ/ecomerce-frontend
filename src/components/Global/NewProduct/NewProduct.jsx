import React from 'react'
import { newProducts } from '../../../constant'
import { NavLink } from 'react-router-dom'

function NewProduct() {
    return (
        <section>
            <div className="container my-5">
                <header className="mb-4 text-start ">
                    <h2 className=''>New products</h2>
                </header>

                <div className="row">
                    {
                        newProducts.map((newProduct, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 text-start">


                                <div className="card my-2 shadow-0 border-0">
                                    <NavLink to="/product" className="img-wrap">
                                        <div className="mask" style={{ height: "50px;" }}>
                                            <div className="d-flex justify-content-start align-items-start h-100 m-2">
                                                <span className="badge bg-success pt-2">{newProduct.offer}</span>
                                            </div>
                                        </div>
                                        <img src={newProduct.img} className="card-img-top object-fit-cover" style={{ "aspect-ratio": "1 / 1" }} />
                                    </NavLink>
                                    <div className="card-body p-0 pt-3">
                                        <a href="#!" className="btn btn-light border px-2 pt-2 pull-right icon-hover">
                                            <i className="fa fa-heart px-1 text-secondary">
                                            </i>
                                        </a>
                                        <h5 className="card-title">{newProduct.price}</h5>
                                        <p className="card-text mb-0">{newProduct.title}</p>
                                        <p className="text-muted">
                                            {newProduct.modal ? `Modal : ${newProduct.modal}` : null}
                                            {newProduct.material ? `Material : ${newProduct.material}` : null}
                                            {newProduct.color ? `Color : ${newProduct.color}` : null}
                                            {newProduct.size ? `Size : ${newProduct.size}` : null}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default NewProduct

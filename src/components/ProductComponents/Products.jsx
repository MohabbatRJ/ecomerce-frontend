import React from 'react'
import { pageProduct } from '../../constant'
import './style.css'
import { NavLink } from 'react-router-dom';

function Products() {
    const StarRating = ({ count }) => {
        const stars = Array.from({ length: count }, (_, index) => (
            <i key={index} className="me-1 text-opacity-50 fa fa-star text-warning"></i>
        ));

        return <>{stars}</>;
    };

    return (
        <>
            <div className="col-lg-9">
                <div className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                    <strong className="d-block py-2">
                        Item Found
                    </strong>
                </div>
                {pageProduct.map((product, index) => (


                    <div key={index} className="row justify-content-center mb-3 text-start">
                        <div className="col-md-12">
                            <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <div className="row g-0">
                                        <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                                            <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                                                <img src={product.img} className="w-100 prodImg" />
                                                <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div className="mask" ></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-5 col-sm-7">
                                            <h5>{product.title}</h5>
                                            <div className="d-flex flex-row">
                                                <div className="fw-lg mb-1 me-2">
                                                    <StarRating count={product.stars} />

                                                    <span className="ms-1 text-warning">
                                                        {product.stars}
                                                    </span>
                                                </div>
                                                <span className="text-muted">{product.orders} Orders</span>
                                            </div>

                                            <p className="text mb-4 mb-md-0">
                                                {product.desc}
                                            </p>
                                        </div>
                                        <div className="col-xl-3 col-md-3 col-sm-5">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">{product.salePrice}</h4>
                                                <span className="text-danger"><s>{product.orignalPrice}</s></span>
                                            </div>
                                            <h6 className={product.color}>{product.shipping}</h6>
                                            <div className="mt-4">
                                                <NavLink to={`/product-detail/${product.title}`}
                                                >
                                                <button className="btn btn-primary shadow-0 me-2" type="button">{product.buttonTitle}</button>
                                            </NavLink>
                                            <a href="#" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fa fa-heart fa-md px-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      </div>
                  ))}

        </div >
    </>
  )
}

export default Products

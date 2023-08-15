import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Lightboxs from '../Lightbox/Lightbox';
import { pageProduct } from '../../../constant';

function ProductDetail() {
    const StarRating = ({ count }) => {
        const stars = Array.from({ length: count }, (_, index) => (
            <i key={index} className="me-1 text-opacity-50 fa fa-star text-warning"></i>
        ));

        return <>{stars}</>;
    };

    const { title } = useParams();
    const getProductByTitle = (matchTitle) => {
        return pageProduct.filter((product) => {
            return product.title === matchTitle;
        });
    }

    const matchedProducts = getProductByTitle(title);
    console.log(matchedProducts);

    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };


    return (
        <section className='py-5'>
            <div className="container">
                {
                    matchedProducts.map((product, index) => (

                        <div key={index} className="row">
                            <div className="col-lg-6 my-5">
                                <div className="border rounded-4 mb-3 d-flex justify-content-center align-items-center h-100">
                                    <a href="">
                                        <img src={product.img} alt="" />
                                    </a>
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                        {
                                            product.lightboxImg && product.lightboxImg.map((lightImg, index) => (
                                                <a href="" key={index}>
                                                <Lightboxs 
                                                    thumbnailSrc={lightImg.img}
                                                    largeSrc={lightImg.img}
                                                />
                                    </a>
                                            ))
                                        }
                                </div>
                            </div>
                            <div className="col-lg-6 text-start">
                                <div className="ps-lg-3">
                                    <h4 className="title text-dark">{product.title}</h4>
                                    <div className="d-flex flex-column my-3">
                                        <div className="text-warning mb-1 me-2">
                                            <StarRating count={product.stars} />
                                            <span className="ms-1">{product.stars}</span>
                                            <span className="text-muted">
                                                <i className="fa fa-shopping-basket fa-sm mx-1"></i> {product.orders} orders
                                            </span>
                                            <span className={`${product.stockColor} ms-2`}>{product.stock}</span>
                                        </div>
                                        <div className="mb-3">
                                            <span className='h5'>{product.salePrice}</span>
                                            <span className="text-muted">/per box</span>
                                        </div>

                                        <p>
                                            {product.desc}
                                        </p>

                                        {
                                            product.specfication.map((specs, index) => (


                                                <div key={index} className="row ">
                                                    <dt className="col-3 text-capitalize">{specs.id}:</dt>
                                                    <dd className="col-9">{specs.type}</dd>
                                                </div>
                                            ))
                                        }

                                        <div className="row mb-4">
                                            <div className="col-md-4 col-6">
                                                <label className="mb-2">Size</label>
                                                <select className="form-select border border-secondary" style={{ height: "35px" }}>
                                                    {
                                                        product.sizes.map((size, index) => (

                                                            <option key={index}>{size.size}</option>

                                                        ))
                                                    }
                                                </select>
                                            </div>

                                            <div className="col-md-4 col-6 mb-3">
                                                <label className="mb-2 d-block">Quantity</label>
                                                <div className="input-group mb-3" style={{ width: "170px" }}>
                                                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={decrementQuantity}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" value={quantity} />
                                                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={incrementQuantity}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-3">
                                                <a href="#" className="btn btn-warning shadow-0 px-3 fs-6"> Buy now </a>
                                                <a href="#" className="btn btn-primary shadow-0 px-3 fs-6"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                                <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-md"></i> Save </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </section>
    )
}

export default ProductDetail

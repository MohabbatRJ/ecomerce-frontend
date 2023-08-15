import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { pageProduct } from '../../../constant'

function Wishlist() {

    const [quantities, setQuantities] = useState(pageProduct.map(() => 1));

    const decrementQuantity = (index) => {
        if (quantities[index] > 1) {
            const newQuantities = [...quantities];
            newQuantities[index] = quantities[index] - 1;
            setQuantities(newQuantities);
        }
    };

    const incrementQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] = quantities[index] + 1;
        setQuantities(newQuantities);
    };
    return (
        <div className='bg-color py-5'>
            <div className='d-md-block d-none'>
            <table className=" container table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                </table>
            </div>
            {pageProduct.map((product, index) => (
                <div key={index} className="container border py-3 bg-light">
                    <div className="d-flex justify-content-between align-items-center flex-md-row flex-column gap-md-0 gap-3 ">
                        <div className="col">
                            <img src={product.img} alt="" className='img-fluid w-50'/>
                        </div>
                        <div className="col">
                            <span className='fw-bold fs-5'>{product.title}</span>
                        </div>
                        <div className="col">
                            <span className='fw-bold fs-5'>{product.salePrice }</span>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="input-group" style={{ width: "170px" }}>
                                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={() => decrementQuantity(index)}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" value={quantities[index]} />
                                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={() => incrementQuantity(index)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            {/* <div className="row"> */}
                                <a href="#" className="btn btn-primary shadow-0 px-2 fs-6"> Add to cart </a>
                            {/* </div> */}
                        </div>

                        <div className="col">
                            <a href="#"><i className="fa fa-trash-o fs-3"></i></a>
                        </div>
                   </div>
                </div>


            ))}
        </div>
    )
}

export default Wishlist

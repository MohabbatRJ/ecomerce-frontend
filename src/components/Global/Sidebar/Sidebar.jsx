import { Brands, bestDealProduct } from '../../../constant';
import './style.css'

function Sidebar() {
    return (
        <>
            <div className="col-lg-3">
                <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                    Related items
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body text-start">
                                    <ul className="list-unstyled">
                                        {
                                            bestDealProduct.map((bestDeal, index) => (


                                                <li key={index}>
                                                    <a href="#" className="text-dark text-decoration-none">{bestDeal.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Brands
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                                <div className="accordion-body">
                                    <div>
                                        {
                                            Brands.map((brand, index) => (
                                                <div key={index} className="form-check text-start">
                                                    <input className="form-check-input" type="checkbox" value="" id={brand.id} checked />
                                                    <label className="form-check-label" htmlFor={brand.id}>{brand.name}</label>
                                                    <span className="px-2 badges-pill bg-secondary-subtle float-end rounded">{brand.badge}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Price
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                                <div className="accordion-body">
                                    <div className="range">
                                        <input type="range" className="form-range" id="customRange1" />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <p className="mb-0">
                                                Min
                                            </p>
                                            <div className="form-outline">
                                                <input type="number" id="typeNumber" className="form-control outline-none border-0 shadow-none " />
                                                <label className="form-label" htmlFor="typeNumber">$0</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="mb-0">
                                                Max
                                            </p>
                                            <div className="form-outline">
                                                <input type="number" id="typeNumber" className="form-control outline-none border-0 shadow-none" />
                                                <label className="form-label" htmlFor="typeNumber">$1,0000</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-white w-100 border border-secondary">apply</button>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Ratings
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                                <div className="accordion-body text-start">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                        </label>
                                    </div>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-secondary"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-secondary"></i>
                                            <i className="fa fa-star text-secondary"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-secondary"></i><i className="fa fa-star text-secondary"></i>
                                            <i className="fa fa-star text-secondary"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar

import React from 'react'
import './style.css'
import { FeatureCards } from '../../../constant'
function Feature() {
    return (
        <section className="feature">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="card-banner bg-gray h-100 bg-img">
                            <div className="p-3 p-lg-5 text-start" style={{ maxWidth: "70%;" }}>
                                <h3 className="text-dark">Best products & <br /> brands in our store at <br/> 80% off</h3>
                                <p>That's true but not always</p>
                                <button className="btn btn-warning shadow-0 text-white" href="#"> Claim offer </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mb-3 mb-sm-4 g-3 g-sm-4 align-align-items-center">
                            {FeatureCards.map((FeatureCard, index) => (
                                <div key={index} className="col-6 d-flex">
                                    <div className={`card w-100 ${FeatureCard.bgClr}`} style={{
                                        minHeight: "200px"
                                    }}>
                                        <div className="card-body border-2 border-black  text-start">
                                            <h5 className="text-white">{FeatureCard.title}</h5>
                                            <p className="text-white-50">{FeatureCard.desc}</p>
                                            <a className="btn btn-outline-light btn-sm bg-transparent border-2 hover-none" href="#">{FeatureCard.linkTitle}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <div className="card bg-success" style={{
                            "min-height": "200px;"}}>
                            <div className="card-body">
                                <h5 className="text-white">Buy 2 items, With special gift</h5>
                                <p className="text-white-50" style={{
                                    "max-width": "400px;"}}>Buy one, get one free marketing strategy helps your business improves the brand by sharing the profits</p>
                                <a className="btn btn-outline-light btn-sm" href="#">Learn more</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature

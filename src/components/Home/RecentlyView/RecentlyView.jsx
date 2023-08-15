import React from 'react'
import { recentlyView } from '../../../constant'

function RecentlyView() {
    return (
        <section className="mt-5 mb-4">
            <div className="container text-dark">
                <header className="text-start">
                    <h3 className="section-title ">Recently viewed</h3>
                </header>

                <div className="row gy-3">
                    {
                        recentlyView.map((recently, index) => (
                            <div key={index} className="col-lg-2 col-md-4 col-4 " >
                                <a href={recently.link} className="img-wrap " style={{ boxShadow: '4px 4px 100px 4px rgb(0, 0, 0)' }}>
                                    <img height="200" width="200" className="img-thumbnail" alt={recently.title} src={recently.img} />
                                </a>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default RecentlyView

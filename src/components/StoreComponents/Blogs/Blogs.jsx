import React from 'react'
import { BlogsPosts } from '../../../constant'

function Blogs() {
    return (
        <section className='mt-5 mb-4'>
            <div className="container text-dark text-start">
                <div className="mb-4">
                    <h3>Blog Posts</h3>
                </div>

                <div className="row">
                    {
                        BlogsPosts.map((blog, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-12 md:mb-0 mb-3">
                                <div className="card text-start">
                                    <img className="card-img-top object-fit-cover" src={blog.img} alt={blog.title} style={{height:'150px'}} />
                                    <div className="card-body mt-2 text-muted small d-block mb-1">
                                        <span>
                                            <i className={`${blog.dateIcon} fa-sm`}></i> {blog.date}
                                        </span>
                                        <a href="" className='text-decoration-none'>
                                            <h6 className="text-dark">{blog.title}</h6>
                                        </a>
                                        <p className="card-text">{blog.excerpt}</p>
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

export default Blogs

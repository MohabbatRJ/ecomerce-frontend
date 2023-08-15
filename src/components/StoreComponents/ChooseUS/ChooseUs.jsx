import { ChooseItems } from '../../../constant'

function ChooseUs() {
    return (
        <section className='mt-5 bg-light'>
            <div className="container text-dark pt-3 text-start">
                <div className="pt-3 pb-4">
                    <h3>Why choose us</h3>
                </div>

                <div className="row mb-4">
                    {
                        ChooseItems.map((choose, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="">
                                        <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                                            <i className={`${choose.icon} fa-2x fafw text-primary floating`}></i>
                                        </span>
                                    </div>
                                    <div className="info">
                                        <h6>{choose.title}</h6>
                                        <p>{choose.desc}</p>
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

export default ChooseUs

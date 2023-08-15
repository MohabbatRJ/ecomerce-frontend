import React from 'react'
import { footerMenus } from '../../../constant'
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    const isStore = location.pathname === '/store';
    return (
        <footer className={`text-center text-lg-start text-muted ${isStore ? 'bg-secondary-subtle' : 'bg-color '} mt-3`}>
            <section className="">
                <div className={`container text-center text-md-start pt-4 pb-4 ${isStore ? 'text-dark' : 'text-white '}`}>
                    {
                        footerMenus.map((footerMenu, index) => (

                            <div key={index} className="row mt-3">
                                <div className="col-12 col-lg-3 col-sm-12 mb-2">
                                    <a href="#" target="_blank" className=" h2 text-decoration-none">
                                        {footerMenu.name}
                                    </a>
                                    <p className="mt-1 fs-6">
                                        {footerMenu.copyright} : <a className={` ${isStore ? 'text-dark' : 'text-white '} text-decoration-none `} href={footerMenu.linkSrc}>{footerMenu.linkTitle}</a>
                                    </p>
                                </div>



                                <div className="col-6 col-sm-4 col-lg-2">
                                    <h6 className="text-uppercase  fw-bold mb-2">
                                        Store
                                    </h6>
                                        <ul  className="list-unstyled mb-4">
                                    {footerMenu.storeMenu.map((storeLink, index) => (
                                        <li key={index}>
                                            <a className={` ${isStore ? 'text-body-secondary' : 'text-white-50 '}  text-decoration-none font-bolder fs-6`} href={storeLink.id}>{storeLink.title}</a>
                                        </li>
                                            ))}
                                        </ul>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <h6 className="text-uppercase fw-bold mb-2">
                                        information
                                    </h6>
                                        <ul  className="list-unstyled mb-4">
                                    {footerMenu.informationMenu.map((informationLink, index) => (
                                        <li key={index}>
                                            <a className={` ${isStore ? 'text-body-secondary' : 'text-white-50 '}  text-decoration-none font-bolder fs-6`} href={informationLink.id}>{informationLink.title}</a>
                                        </li>
                                            ))}
                                        </ul>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <h6 className="text-uppercase  fw-bold mb-2">
                                        Supports
                                    </h6>
                                        <ul  className="list-unstyled mb-4">
                                    {footerMenu.supportMenu.map((supportLink, index) => (
                                        <li key={index}>
                                            <a className={` ${isStore ? 'text-body-secondary' : ' text-white-50'}  text-decoration-none font-bolder fs-6`} href={supportLink.id}>{supportLink.title}</a>
                                        </li>
                                            ))}
                                        </ul>
                                </div>




                                <div className="col-12 col-sm-12 col-lg-3">
                                    <h6 className="text-uppercase  fw-bold mb-2">Newsletter</h6>
                                    <p className="">Stay in touch with latest updates about our products and offers</p>
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                                        <button className="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </section>
        </footer>
    )
}

export default Footer

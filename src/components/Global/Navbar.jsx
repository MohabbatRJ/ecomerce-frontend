import { logo } from '../../assets' 
import { secNavLinks, topNavLinks } from '../../constant'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();

    const isHome = location.pathname === '/';
    return (
        <>
            <header className='container-fluid gx-0 '>
                <div className="row align-items-center justify-content-around w-100 border-bottom m-0">
                    {/* left  */}
                    <div className='col-lg-1 col-sm-4 col-4 text-start'>
                        <NavLink to="/">
                            <img src={logo} alt="" style={{ width: '80px' }} />
                        </NavLink>
                    </div>
                    {/* left  */}

                    {/* center  */}
                    <div className="order-lg-last col-lg-4 col-sm-8 col-8">
                        <div className="d-flex float-end">
                            {
                                topNavLinks.map((topLink, index) => (
                                    <NavLink key={index} to={`${topLink.id}`} className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" >
                                        <i className={`${topLink.iconClass} m-1 me-md-2`} />
                                        <p className="d-none d-md-block mb-0">{topLink.title}</p>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    {/* center  */}

                    {/* right */}
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="input-group  w-100">
                            <input type="search" id="form1" className="form-control shadow-none border-0 outline-none " placeholder='Search' />
                            {/* <label className="form-label" htmlFor="form1">Search</label> */}

                            <button type="button" className="btn bg-color shadow-0 h-100">
                                <i className="fa fa-search text-white" />
                            </button>
                        </div>
                    </div>

                    {/* right */}
                </div>

                {/* Navbar  */}
                <nav className={`navbar navbar-expand-lg navbar-dark ${!isHome ? 'bg-white' : 'bg-color '} m-0`}>
                    <div className="container-fluid justify-content-center justify-content-md-between ps-5">
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-3 ">
                                {
                                    secNavLinks.map((navLink, index) => (
                                        <li key={index} className="nav-item">
                                            <NavLink className={`nav-link ${isHome ? 'text-light' : 'text-dark '}`} to={navLink.id}>{navLink.title}</NavLink>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Navbar  */}
            </header>
        </>
    )
}

export default Navbar

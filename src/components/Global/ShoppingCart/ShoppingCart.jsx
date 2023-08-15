
import { ShoppingCartItems } from '../../../constant'
import SideBar from './SideBar'

function ShoppingCart() {
    return (
      <>
    <div className='col-lg-9 text-start'>
          <div className="card border shadow-0">
              <div className="m-4">
                  <h4 className='card-title mb-4'>Your Shopping Cart</h4>
                  {
                      ShoppingCartItems.map((cartItem,index) => (
                          
                     
                  <div key={index} className="row gy-3 mb-4">
                      <div className="col-lg-5">
                          <div className="me-lg-5">
                              <div className="d-flex">
                                          <img src={cartItem.img} className="border rounded me-3" style={{width: '96px', height:   '96px'}}/>
                                      <div className="">
                                              <a href="#" className="nav-link">{cartItem.title}</a>
                                              <p className="text-muted">{cartItem.specs}</p>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                          <div className="">
                              <select style={{width: "100px"}} className="form-select me-4">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                              </select>
                          </div>
                          <div className="">
                              <text className="h6 d-block">$1156.00</text> 
                                      <small className="text-muted text-nowrap"> ${cartItem.price} / per item </small>
                          </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                          <div className="float-md-end">
                              <a href="#!" className="btn btn-light border px-2 icon-hover-primary me-2"><i className="fa fa-heart fa-sm px-1 text-secondary"></i></a>
                              <a href="#" className="btn btn-light border text-danger icon-hover-danger"> Remove</a>
                          </div>
                      </div>
                          </div>
                      ))
                  }
              </div>
              <div className="border-top pt-4 mx-4 mb-4">
                  <p><i className="fa fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                  <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip
                  </p>
              </div>
      </div>
            </div>
            <SideBar/>
        </>
  )
}

export default ShoppingCart

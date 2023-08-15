import React from 'react'
import Banner from '../../components/StoreComponents/Banner/Banner'
import NewProduct from '../../components/Global/NewProduct/NewProduct'
import ChooseUs from '../../components/StoreComponents/ChooseUS/ChooseUs'
import Blogs from '../../components/StoreComponents/Blogs/Blogs'

function StorePage() {
  return (
    <>
      <Banner />
      <NewProduct />
      <ChooseUs />
      <Blogs/>
    </>
  )
}

export default StorePage

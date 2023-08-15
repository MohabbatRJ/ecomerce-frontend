import React from 'react'
import ProductDetail from '../../components/Global/ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/Global/Breadcrumb';

function ProductDetailPage() {
  return (
    <>
      <BreadCrumb  />
     <ProductDetail/> 
    </>
  )
}

export default ProductDetailPage

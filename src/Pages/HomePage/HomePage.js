import React from 'react'
import Footer from '../../components/Layouts/footer/Footer'
import ProductListing from '../../components/Layouts/ProductListing/ProductListing'
import ShowCase from '../../components/Layouts/showcase/ShowCase'

const HomePage = () => {
  return (
    <section>
      <ShowCase />
      <ProductListing />
      <Footer />
    </section>
  )
}

export default HomePage

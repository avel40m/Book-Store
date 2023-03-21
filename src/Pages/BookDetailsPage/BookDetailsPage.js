import React from 'react'
import DetailsSection from '../../components/Layouts/DetailsSection/DetailsSection';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/footer/Footer';

const BookDetailsPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <DetailsSection />
      <Footer />
    </section>
  )
}

export default BookDetailsPage

import React from 'react'
import Navbar from '../../Components/Navbar'
import Nav2 from '../../Components/Nav2'
import Banner from '../../Components/Banner'
import Products from '../../Components/Products'
import Subscribe from '../../Components/Subscribe'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Nav2 />
      <Banner />
      <Products/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Home
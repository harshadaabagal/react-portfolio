import React from 'react'
import Header from './components/Header/header.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Services from './components/Services/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
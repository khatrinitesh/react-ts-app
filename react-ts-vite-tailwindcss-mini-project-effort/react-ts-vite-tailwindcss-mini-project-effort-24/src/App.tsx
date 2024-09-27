import { useState } from 'react'
import Navbar from './../public/layout/Navbar';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {

  return (
    <>
    <GlobalStyles/>
     <Navbar/>
     <div style={{paddingTop:'60px'}}>
     <Home />
        <About />
        <Services />
        <Contact />
     </div>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './section/navbar/Navbar'
import Header from './section/header/Header';
import About from './section/about/About';
import Service from './section/service/Service';
import Profolio from './section/profilo/Profolio';
import Faqs from './section/Faqs/Faqs';
import Contact from './section/contact/Contact';
import Footer from './section/footer/Footer';


const App = () => {
  return (
   <main>
    <Navbar/>
    <Header/>
    <About/>
    <Service/>
    <Profolio/>
    <Faqs/>
    <Contact/>

    <Footer/>

    
    
     </main>
  )
}

export default App

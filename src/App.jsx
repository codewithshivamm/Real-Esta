import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Home/Home'
import Companies from './Components/Companies/Companies'
import Carosel from './Components/Carosel/Carosel'
import Faq from './Components/Faq/Faq'
import Contact from './Components/Contact/Contact'
import GetStarted from './Components/GetStarted/Getstarted'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Companies />
      <Carosel/>
      <Faq />
      <Contact/>
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Topnav from './component/Topnav'
import Nav from './component/Nav'
import Tursection from './component/Tursection'
import Faqsection from './component/Faqsection'
import Contactsection from './component/Contactsection'
import Footer from './component/Footer'
import People from './component/People'
import Newsection from './component/Newsection'
import City from './component/City'
import Slider from './component/Slider'
import Photo from './component/Photo'
function App() {


  return (
    <>
     <Topnav/>
      <Nav/>
      <Slider/>
      <Tursection/>
      <Newsection/>
      <City/>
      <Contactsection/>
      <Faqsection/>
      <Photo/>
      <People/>
      <Footer/>

    </>
  )
}

export default App

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Section from './Section';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
BrowserRouter

function Home() {
  return (
    <main>
    {/* <BrowserRouter> */}
      <Navbar />
      <Hero />
      <Section />
      <Footer />
    {/* </BrowserRouter> */}
   </main>
  )
}

export default Home
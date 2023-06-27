import React from 'react';
import Navbar from './Navbar';
// import { ReactDOM } from 'react';
// import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Section from './Section';
Section

function Home() {
  return (
    <main>
    {/* <BrowserRouter> */}
      <Navbar />
      <Hero />
      <Section />
    {/* </BrowserRouter> */}
   </main>
  )
}

export default Home
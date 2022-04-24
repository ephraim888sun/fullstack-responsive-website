import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, Toggle } from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
        {/* <Toggle /> */}
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;

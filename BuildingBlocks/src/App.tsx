import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
const links = [
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/contact', text: 'Contact' },
];

const App: React.FC = () => {
  return (
    <div className='flex flex-col h-screen' >
      <Navbar links={links} />
      <div className='flex-1 mt-16'>
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;


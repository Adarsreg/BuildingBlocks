import React from 'react';
import Navbar from './components/Navbar';

const links = [
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/contact', text: 'Contact' },
];

const App: React.FC = () => {
  return (
    <div>
      <Navbar links={links} />
    </div>
  );
};

export default App;


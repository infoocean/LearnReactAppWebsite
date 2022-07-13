import React from 'react';
import './style.css';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import Myroutes from './Myroutes/Myroutes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Myroutes />
      <Footer />
    </div>
  );
}

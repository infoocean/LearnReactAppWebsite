import React from 'react';
import './style.css';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import Homepage from './MyComponents/Mypagecomponents/HomePage';

export default function App() {
  return (
    <div className="App">
      <Header
        navitem1="Home"
        navitem2="About"
        navitem3="Contact"
        navitem4="Portfolio"
        navitem5="Content"
        navitem6="Learn React"
      />
      <Homepage />
      <Footer />
    </div>
  );
}

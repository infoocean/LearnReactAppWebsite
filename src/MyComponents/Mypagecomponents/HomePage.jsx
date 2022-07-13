import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GetAPIdata from '../../MyComponents/Mypagecomponents/GetAPIdata';

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <GetAPIdata />
      </div>
    );
  }
}

export default Homepage;

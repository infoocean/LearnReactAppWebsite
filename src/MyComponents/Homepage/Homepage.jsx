import React from 'react';
import LandingPage from '../../MyComponents/Homepage/HomePageComp/LandingPage';
import Mainpage from '../../MyComponents/Homepage/HomePageComp/MainComponent';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <LandingPage />
        <Mainpage />
      </>
    );
  }
}

export default Homepage;

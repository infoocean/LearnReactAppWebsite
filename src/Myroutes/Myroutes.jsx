import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Aboutpage from '../MyComponents/Aboutpage/aboutpage';
import TryCatchMethod from '../MyComponents/GetAPIData/TryCatchMethod';
import Homepage from '../MyComponents/Homepage/Homepage';

export default function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      {/* get api data component */}
      <Route path="/trycatchmethod" element={<TryCatchMethod />} />
    </Routes>
  );
}

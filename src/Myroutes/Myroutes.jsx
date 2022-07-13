import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../MyComponents/Homepage/Homepage';

export default function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/about" element={<Recipespage />} />
    </Routes>
  );
}

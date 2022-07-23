import React from 'react';
import './App.css';
import Carousel from './Components/Carousel/Carousel'

function App() {
  return (
    <>
      <Carousel Slides='1' Infinite='false' />
      <Carousel Slides='4' Infinite='true' />
      <Carousel Slides='10' Infinite='false' />
    </>
  );
}

export default App;

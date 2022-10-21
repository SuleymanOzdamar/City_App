import './App.scss';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import TourList from './Components/TourList';



class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TourList/>
      </>
    )
  }
}

export default App

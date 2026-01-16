import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsLetter from './Components/NewsLetter';





export default class App extends Component {
  render() {
    return (
      <div>
      
      <Navbar/>
      <NewsLetter/>
      </div>
    )
  }
}

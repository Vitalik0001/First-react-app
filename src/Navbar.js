import React from 'react';
import './navbar.css';
import logo from './img/reactjs-icon.svg';


export default function Navbar() {
  return (
    <div className='header'>
      <div>
        <img alt='logo' src={logo} />
        <h1>React Facts</h1>
      </div>
      <h2>React Course - Project 1</h2>
    </div>
  )
}
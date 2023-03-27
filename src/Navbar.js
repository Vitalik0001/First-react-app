import React from 'react';
import './navbar.css';
import logo from './img/reactjs-icon.svg';
import lightToggler from './img/light-mode.svg';
import darkToggler from './img/dark-mode.svg';


export default function Navbar(props) {
  let mode = props.darkMode ? lightToggler : darkToggler;

  return (
    <div className='header' style={{backgroundColor: props.darkMode ? "#ababab" : "#21252c", color: props.darkMode ? "black" : "white"}}>
      <div>
        <img alt='logo' src={logo} />
        <h1 style={{color: props.darkMode ? "black" : "#61DAFB"}}>React Facts</h1>
      </div>
      <h2>React Course - Project 1</h2>
      <div  className='toggler'>
        <img onClick={props.toggleDarkMode} alt='toggler' src={mode} className="toggler__slider" />
      </div>
    </div>
  )
}
import React from 'react';
import './main.css';
import react_img from './img/reactjs-icon 2.svg';

export default function Main() {
  return (
    <div className='main'>
      <h1>Fun facts about React</h1>
      <div className='main__text text'>
        <div className='text__facts'>        
          <p>Was first released in 2013</p>
          <p>Was originally created by Jordan Walke</p>
          <p>Has well over 100K stars on GitHub</p>
          <p>Is maintained by Facebook</p>
          <p>Powers thousands of enterprise apps, including mobile apps</p>
        </div>
        <img className='text__img' alt='react-logo' src={react_img} />
      </div>
    </div>
  )
}
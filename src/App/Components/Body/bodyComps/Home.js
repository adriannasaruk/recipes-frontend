import React, { useEffect } from 'react';

import './home.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Home(props) {
  const { push } = useHistory();
  const redirect = (e) => {
    e.preventDefault();
    push('/signup');
  };
  return (
    <div className='home'>
      <section className='header'>
        <div className='banner'>
          <img src='headerimagelogo.png' alt='rustic kitchen' />
        </div>
        <div className='header-info'>
          <h1>The Silent Cook</h1>
          <h4>Store your families secret recipes with us!</h4>
        </div>
        <button className='signup' onClick={redirect}>
          Signup Here!
        </button>
      </section>
      <section className='top-info'>
        <div className='top-img'>
          <img src='salad.jpg' alt='salad' />
        </div>
        <div className='top-para'>
          <p className='app-info'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className='bottom-info'>
        <div className='bottom-para'>
          <p className='bottom app-info'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='bottom-img'>
          <img src='cake.jpg' alt='cake' />
        </div>
      </section>
    </div>
  );
}

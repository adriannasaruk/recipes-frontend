import React from 'react';

import './home.css';
import { useHistory } from 'react-router-dom';

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
          Do you have a cookbook that is falling apart because of wear and tear? Or even recipes that are on scatter sheets of paper? Well we got your back. Here at The Silent Cook we have it so that you can put all your recipes in one place.
          </p>
        </div>
      </section>
      <section className='bottom-info'>
        <div className='bottom-para'>
          <p className='bottom app-info'>
          Searching for your own or grandma’s secret recipes can be very time-consuming and frustrating. This app allows you to save all your recipes on your personal dashboard. No more searching for old recipe books and no more reading from page to page. Save your recipes here and make your next cooking or baking experience easier.
          </p>
        </div>
        <div className='bottom-img'>
          <img src='cake.jpg' alt='cake' />
        </div>
      </section>
    </div>
  );
}

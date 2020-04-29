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
          Image goes here
          <img src='' alt='' />
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
          <img src='' alt='' />
        </div>
        <div className='top-para'>
          <p className='app-info'></p>
        </div>
      </section>
      <section className='bottom-info'>
        <div className='bottom-para'>
          <p className='bottom app-info'></p>
        </div>
        <div className='bottom-img'>
          <img src='' alt='' />
        </div>
      </section>
    </div>
  );
}

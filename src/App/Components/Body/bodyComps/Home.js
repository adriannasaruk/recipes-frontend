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
          <img src='' />
        </div>
        <div className='header-info'>
          <h1>The Silent Cook</h1>
          <h4>Store your families secret recipes with us!</h4>
        </div>
        <button className='signup' onClick={redirect}>
          Signup Here!
        </button>
      </section>
    </div>
  );
}

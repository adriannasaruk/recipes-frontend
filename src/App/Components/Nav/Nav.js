import React from 'react';
import NavBar from './navComps/NavBar';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
  const token = localStorage.getItem('token');
  return (
    <div>
      <NavBar>
        <section className='left'>
          {token ? (
            <li>
              <Link style={styles.link} to='/user'>
                Home
              </Link>
            </li>
          ) : (
            <li>
              <Link style={styles.link} to='/'>
                Home
              </Link>
            </li>
          )}
          <li>
            <Link style={styles.link} to='public'>
              Recipes
            </Link>
          </li>
        </section>
        <section className='right'>
          <li>
            <Link style={styles.link} to='/login'>
              Login
            </Link>
          </li>
          {!token ? (
            <li>
              <Link style={styles.link} to='/signup'>
                Signup
              </Link>
            </li>
          ) : null}
        </section>
      </NavBar>
    </div>
  );
}

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
  },
};

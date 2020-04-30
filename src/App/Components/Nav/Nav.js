import React from 'react';
import NavBar from './navComps/NavBar';
import { Link, useHistory } from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
  const token = localStorage.getItem('token');
  const { push } = useHistory();
  const logout = (e) => {
    localStorage.clear();
    push('/');
  };
  return (
    <div>
      <NavBar>
        <section className='left'>
          {token ? (
            <li>
              <Link style={styles.link} to='/userpage'>
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
            <Link style={styles.link} to='/recipes'>
              Recipes
            </Link>
          </li>
        </section>
        <section className='right'>
          <li>
            {token ? (
              <Link onClick={logout} style={styles.link} to='/'>
                Logout
              </Link>
            ) : (
              <Link style={styles.link} to='/login'>
                Login
              </Link>
            )}
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

import React from 'react';

export default function NavBar(props) {
  return (
    <nav className='nav-bar'>
      <ul className='navbar-nav'> {props.children} </ul>
    </nav>
  );
}

import React, { useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import axios from 'axios';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Body />
    </div>
  );
}

export default App;

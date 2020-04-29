import React, { useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios
      .get('https://secretfamilyrecipes1.herokuapp.com/api/public')
      .then((res) => console.log({ res }));
  }, []);
  return (
    <div className='App'>
      <Nav />
      <Body />
    </div>
  );
}

export default App;

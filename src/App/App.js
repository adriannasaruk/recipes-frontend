import React from 'react';
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import Signup from './Components/Body/bodyComps/Forms/SingupForm';


function App() {
  

  return (
    <div className='App'>
    
      <Signup/>
      <Nav />
      <Body />
    </div>
  );
  }

export default App;

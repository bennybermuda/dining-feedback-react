import React, {useState} from 'react';
import './App.css';
import './style.css';
import Chat from './chat';

import {Dashboard} from './landing';



export default function App() {
  var [authenticated, setAuthenticated] = useState(false);
  //authenticated can be set to true if the student option is selected, or DA option is selected AND right password

  var [hall, setHall] = useState('');
  var [userType, setType] = useState('');
  //let hall = '';
  //let usertype = '';
  
  return (
    <div className="App">
      {!authenticated && <Dashboard setHall={setHall} setType={setType} onLogin={() => setAuthenticated(true)} />}
      {!!authenticated && <Chat hall={hall} usertype={userType} goHome={() => setAuthenticated(false)} />}
    </div>  
  );
  
}



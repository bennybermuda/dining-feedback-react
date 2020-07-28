import React, {useState} from 'react';
import './App.css';
import './style.css';
import Chat from './chat';

import {Dashboard} from './landing';

//we export default so i can use what's inside in other js files
export default function App() {
  var [authenticated, setAuthenticated] = useState(false);
  //authenticated can be set to true if the student option is selected, or DA option is selected AND right password

  return (
    <div className="App">
      {!authenticated && <Dashboard onLogin={() => setAuthenticated(true)} />}
      {!!authenticated && <Chat goHome={() => setAuthenticated(false)} />}
    </div>  
  );
  
}



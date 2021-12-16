import React, {useState, Component} from 'react';
import './App.css';
import './style.css';
import { Route, Redirect, Switch } from "react-router-dom";
import Chat from './chat';
import Dashboard from './landing';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Dashboard} />
        <Route path="/chat" component={Chat} />
      </Switch>
    );
  }
}

export default App;

/*
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
*/



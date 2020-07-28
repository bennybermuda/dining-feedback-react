import React, {useState} from 'react';
import { login } from "./api";

export default function Login(props) {
    
    var [password, setPassword] = useState("");
    var [error, setError] = useState("");
    async function handleSubmit() {
      if (!password) {
        setError("You can't have an empty Password input");
        return;
      }
      var result = await login({ password });
      if (!result.token) {
        setError("Incorrect Password");
        return;
      }
      props.onLogin();
    }
    return (
      <div className="Login">
        <input
          id="pass"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
        <div>{error}</div>
      </div>
    );
    }

//<button onClick={handleSubmit}>Login</button> --> Line 28
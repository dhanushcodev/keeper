import { useState } from 'react';
import './App.css';
import Login from './Login';
import Todo from './Todo';
import Keeper from './Keeper';
const now = new Date().toLocaleTimeString();

function App() {

  const [login, setLogin] = useState(false);

  
  function loginconfirm(value){
    setLogin(value);
  }


  return (
    <div >
      {/* {
      login ? */}
      <Keeper /> 
      {/* :
      <Login loginconfirm={loginconfirm} />
      } */}
    </div>
  );

}


export default App;

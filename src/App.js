
import { useState } from 'react';
import './App.css';
import User from "./component/User.jsx"

function App() {
  const[toggle,setToggle]=useState(false);
  
  const toggleFunc=()=>{
    setToggle(true);
  }

  
  return (
    <>
    <div className='main'>
      <div className='navbar'>
       <h1> NIKE</h1>
       <button className='getUser'onClick={toggleFunc}>Get Users</button>
      </div>
    </div>
    {toggle && <User />}
    </>
  );
}

export default App;

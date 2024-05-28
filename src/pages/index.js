// pages/index.js

import React from 'react';


const Home = () => {
  const handleFormSubmit = () => {
    // Clear the username and password fields
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="password"]').value = '';
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center' // Add this line to center the text
      }}
    >
     <div className="App">
       <div className="Log in">
         <h3>Log In</h3> 
         <input type="text" placeholder="Username"></input>
         <input type="password" placeholder="Password"></input>
         <button onClick={handleFormSubmit}>Submit</button>
       </div>
     </div>

    </div>
  );
};

export default Home;

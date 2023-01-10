import React, { useState } from 'react';
import './style.css';

const App = () => {
  return (
    <div className="mainContent">
      <h1>{count}</h1>
      <button onClick={NumIncr}>Click Me</button>
    </div>
  );
};

export default App;

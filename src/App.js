import React from 'react';
import './style.css';

const NumIncr = () => {
  alert();
};

const App = () => {
  return (
    <div className="mainContent">
      <h1>1</h1>
      <button onClick={NumIncr}>Click Me</button>
    </div>
  );
};

export default App;

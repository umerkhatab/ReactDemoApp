import React from 'react';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      {/* <Dinner></Dinner> */}
      {/* Now Ia am going to pass data from parent to child */}
      <Dinner dishName="Chicken karahi" sweetDish="kheer" />
      <hr />
      <Dinner dishName="Chicken Biryani" sweetDish="Jaleebi" />
    </div>
  );
}

export default App;

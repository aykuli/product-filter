import React from 'react';

import './App.scss';

import Products from './components/products/products';

// https://ru.reactjs.org/docs/thinking-in-react.html
function App() {
  return (
    <div className="app">
      <Products />
    </div>
  );
}

export default App;
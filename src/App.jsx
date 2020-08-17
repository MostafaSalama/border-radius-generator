import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./components/Box";
import BorderContext from "./app-context";

function App() {
  const [borderValues,updateBorderValues] = useState(['50%','50%','50%','50%']);
  function updateBorderIndex(index,value) {
        const newBorderValues = [...borderValues] ;
        newBorderValues[index] = value;
        updateBorderValues(newBorderValues)
  }
  return (
    <div>
      <BorderContext.Provider value={{borderValues,updateBorderValues}}>

      </BorderContext.Provider>
    </div>
  );
}

export default App;

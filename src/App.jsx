import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./components/Box";
import BorderContext from "./app-context";
import InputRangeContainer from "./components/InputRangeContainer";
import BorderBoxText from "./components/BorderBoxText";

function App() {
  const [borderValues,updateBorderValues] = useState(['50%','50%','50%','50%']);
  function updateBorderAtIndex(index,value) {
        const newBorderValues = [...borderValues] ;
        newBorderValues[index] = value;
        updateBorderValues(newBorderValues)
  }
  return (
    <div className='app'>
      <BorderContext.Provider value={{borderValues,updateBorderAtIndex}}>
          <Box/>
          <InputRangeContainer/>
          <BorderBoxText/>
      </BorderContext.Provider>
    </div>
  );
}

export default App;

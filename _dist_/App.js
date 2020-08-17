import React, { useState } from '../web_modules/react.js';
import logo from './logo.svg.proxy.js';
import './App.css.proxy.js';
import Box from "./components/Box.js";
import BorderContext from "./app-context.js";
import InputRangeContainer from "./components/InputRangeContainer.js";
import BorderBoxText from "./components/BorderBoxText.js";

function App() {
  const [borderValues, updateBorderValues] = useState(['50%', '50%', '50%', '50%']);

  function updateBorderAtIndex(index, value) {
    const newBorderValues = [...borderValues];
    newBorderValues[index] = value;
    updateBorderValues(newBorderValues);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(BorderContext.Provider, {
    value: {
      borderValues,
      updateBorderAtIndex
    }
  }, /*#__PURE__*/React.createElement(Box, null), /*#__PURE__*/React.createElement(InputRangeContainer, null), /*#__PURE__*/React.createElement(BorderBoxText, null)));
}

export default App;
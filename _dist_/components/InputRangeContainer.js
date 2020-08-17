import React from '../../web_modules/react.js';
import InputRange from "./InputRange.js";
import style from './InputRangeContainer.module.css.proxy.js';

const InputRangeContainer = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: style.container
  }, /*#__PURE__*/React.createElement(InputRange, {
    index: 0,
    key: 0
  }), /*#__PURE__*/React.createElement(InputRange, {
    index: 1,
    key: 1
  }), /*#__PURE__*/React.createElement(InputRange, {
    index: 2,
    key: 2
  }), /*#__PURE__*/React.createElement(InputRange, {
    index: 3,
    key: 3
  }));
};

export default InputRangeContainer;
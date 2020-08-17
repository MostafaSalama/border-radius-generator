import React, { useContext } from '../../web_modules/react.js';
import BorderContext from "../app-context.js";
import style from './BorderBoxTest.module.css.proxy.js';

const BorderBoxText = () => {
  const {
    borderValues
  } = useContext(BorderContext);
  return /*#__PURE__*/React.createElement("div", {
    className: style.container
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: style.quote
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: style.text
  }, "border-radius"), ": ", borderValues.join(' '), ";")));
};

export default BorderBoxText;
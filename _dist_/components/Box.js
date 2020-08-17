import React, { useContext } from '../../web_modules/react.js';
import styles from './box.module.css.proxy.js';
import BorderContext from "../app-context.js";

const Box = () => {
  const {
    borderValues
  } = useContext(BorderContext);
  const borderRadius = borderValues.join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.box,
    style: {
      borderRadius
    }
  }));
};

export default Box;
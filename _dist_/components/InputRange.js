import React, { useContext } from '../../web_modules/react.js';
import BorderContext from "../app-context.js";
import PropTypes from '../../web_modules/prop-types.js';

function InputRange({
  index
}) {
  const {
    updateBorderAtIndex
  } = useContext(BorderContext);

  function handleChange(e) {
    const {
      value
    } = e.target;
    updateBorderAtIndex(index, `${value}%`);
  }

  return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    onChange: handleChange
  }));
}

InputRange.propTypes = {
  index: PropTypes.number.isRequired
};
export default InputRange;
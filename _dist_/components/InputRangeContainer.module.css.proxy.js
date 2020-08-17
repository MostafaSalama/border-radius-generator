
export let code = "._dist_components_InputRangeContainer_module__container {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n";
let json = {"container":"_dist_components_InputRangeContainer_module__container"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);

export let code = "._dist_components_BorderBoxTest_module__container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n._dist_components_BorderBoxTest_module__quote {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    border: 2px solid #b0b2b0;\r\n    border-left-width: 8px;\r\n    width: max-content;\r\n    padding: 0 20px;\r\n}\r\n._dist_components_BorderBoxTest_module__text {\r\n    color: #C92C2C;\r\n}\r\n";
let json = {"container":"_dist_components_BorderBoxTest_module__container","quote":"_dist_components_BorderBoxTest_module__quote","text":"_dist_components_BorderBoxTest_module__text"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
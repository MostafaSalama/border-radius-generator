
export let code = "._dist_components_box_module__box {\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 1px solid #2F3494;\r\n    background-color: #4550B7;\r\n    box-shadow: 5px 5px 15px 5px rgba(33,33,33,0.3);\r\n}\r\n._dist_components_box_module__container{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n";
let json = {"box":"_dist_components_box_module__box","container":"_dist_components_box_module__container"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
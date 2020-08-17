
const code = "* {\r\n  box-sizing: border-box;\r\n}\r\n.app {\r\n  margin-top: 5%;\r\n}\r\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
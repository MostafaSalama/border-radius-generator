const code=`* {\r
  box-sizing: border-box;\r
}\r
.app {\r
  margin-top: 5%;\r
}\r
`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);

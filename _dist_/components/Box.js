import e,{useContext as s}from"../../web_modules/react.js";import o from"./box.module.css.proxy.js";import a from"../app-context.js";const c=()=>{const{borderValues:t}=s(a),r=t.join(" ");return e.createElement("div",{className:o.container},e.createElement("div",{className:o.box,style:{borderRadius:r}}))};export default c;
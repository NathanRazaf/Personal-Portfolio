(()=>{"use strict";var e,t,n,r,o,i,a,c,s,p,l,d,u,f,m={137:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,'header{background-color:#24153b;height:60px;width:100%;position:fixed;top:0;left:0;z-index:100;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);display:flex;justify-content:space-around;align-items:center}header nav{display:flex;align-items:center}header nav ul{display:flex;list-style:none}header nav ul li{margin-left:20px}header nav ul li a{text-decoration:none;color:#dedede;font-weight:600;font-size:14px}header nav ul li a:hover{text-decoration:underline}.presentation{margin-top:100px;display:flex;align-items:center;justify-content:space-evenly;width:100%}.presentation #name{color:#b968c7}.presentation img{max-height:450px}.purple{color:#94539f}.bio{width:50%;text-align:center;font-size:18px;margin-bottom:50px}.bio h2{margin-top:50px;margin-bottom:50px}.projects{width:100%;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}.project{display:flex;flex-direction:column;align-self:center;justify-self:center;margin:20px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.28);background-color:#6832a2}.project img{width:100%;height:200px;object-fit:cover}.project-info{padding:10px;display:flex;flex-direction:column}.project-info .top{padding-left:20px;padding-right:20px;display:flex;justify-content:space-between;align-items:center}.project-info .top .links a{text-decoration:none}.project-info .top .links img{width:30px;height:30px;margin:5px;transition:all .3s ease-in-out}.project-info .top .links img:hover{cursor:pointer;transform:rotate(360deg) scale(1.2)}html,body{margin:0;padding:0;height:100%;width:100%;font-family:"Roboto",sans-serif}body{background-color:#1b1726;color:#fff;display:flex;flex-direction:column;align-items:center}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),p=0;p<i.length;p++){var l=n(i[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function x(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return m[e](n,n.exports,x),n.exports}x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},x.d=(e,t)=>{for(var n in t)x.o(t,n)&&!x.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),x.nc=void 0,e=x(379),t=x.n(e),n=x(795),r=x.n(n),o=x(569),i=x.n(o),a=x(565),c=x.n(a),s=x(216),p=x.n(s),l=x(589),d=x.n(l),u=x(137),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();
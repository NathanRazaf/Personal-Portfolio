(()=>{"use strict";var t,e,n,i,o,a,r,c,p,s,d,l,f,u,x={137:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(81),o=n.n(i),a=n(645),r=n.n(a)()(o());r.push([t.id,'header{background-color:#24153b;height:60px;width:100%;position:fixed;top:0;left:0;z-index:100;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);display:flex;justify-content:space-around;align-items:center}header nav{display:flex;align-items:center}header nav ul{display:flex;list-style:none}header nav ul li{margin-left:20px}header nav ul li a{text-decoration:none;color:#dedede;font-weight:600;font-size:14px}header nav ul li a:hover{text-decoration:underline}@media(max-width: 600px){header h1{padding-left:20px;font-size:18px}header nav{padding-right:20px;font-size:12px}}@media(max-width: 1200px){header h1{padding-left:20px}header nav{padding-right:20px}}.presentation{margin-top:100px;display:flex;align-items:center;justify-content:space-evenly;width:100%}.presentation #name{color:#b968c7}.presentation img{max-height:450px}.purple{color:#94539f}.bio{width:50%;text-align:center;font-size:18px;margin-bottom:50px}.bio h2{margin-top:80px;margin-bottom:50px}@media(max-width: 600px){.presentation{flex-direction:column}.presentation .left{padding:20px;text-align:center}.presentation img{max-height:300px}.bio{width:100%}}@media(max-width: 1200px){.presentation .left{padding-left:30px}.presentation img{max-height:400px;width:100%}}.projects{width:100%;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}.project{display:flex;flex-direction:column;align-self:center;justify-self:center;margin:20px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.28);background-color:#6832a2}.project img{width:100%;height:200px;object-fit:cover}.project-info{padding:10px;display:flex;text-shadow:2px 2px 2px rgba(0,0,0,.28);flex-direction:column}.project-info .top{padding-left:20px;padding-right:20px;display:flex;justify-content:space-between;align-items:center}.project-info .top .links a{text-decoration:none}.project-info .top .links img{width:30px;height:30px;margin:5px;transition:all .3s ease-in-out}.project-info .top .links img:hover{cursor:pointer;transform:rotate(360deg) scale(1.2)}.contacts{background-color:#0a0416;padding-top:50px;padding-bottom:50px;margin-top:100px;display:flex;width:100%;align-items:center;justify-content:space-around}.contacts .contact{display:flex;align-items:center}.contacts .contact img{width:20px;height:20px;margin:10px 10px 10px 0}.contacts .right img{max-width:500px}.contacts .contact-links{padding-top:15px;display:flex;align-items:center;gap:10px}.contacts .contact-links img{width:30px;height:30px}.contacts .contact-links img:hover{transform:scale(1.1)}@media(max-width: 600px){.contacts{flex-direction:column}.contacts .left{padding:20px}.contacts .right{display:flex;align-items:center;justify-content:center}.contacts .right img{width:100%}}@media(max-width: 1200px){.contacts .left{padding:30px}.contacts .right img{width:90%}}html{scroll-behavior:smooth}html,body{margin:0;padding:0;height:100%;width:100%;font-family:"Roboto",sans-serif}body{background-color:#1b1726;color:#fff;display:flex;flex-direction:column;align-items:center}',""]);const c=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(r[p]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);i&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var a={},r=[],c=0;c<t.length;c++){var p=t[c],s=i.base?p[0]+i.base:p[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var f=n(l),u={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var x=o(u,i);i.byIndex=c,e.splice(c,0,{identifier:l,updater:x,references:1})}r.push(l)}return r}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=i(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var c=n(a[r]);e[c].references--}for(var p=i(t,o),s=0;s<a.length;s++){var d=n(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=p}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},h={};function m(t){var e=h[t];if(void 0!==e)return e.exports;var n=h[t]={id:t,exports:{}};return x[t](n,n.exports,m),n.exports}m.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return m.d(e,{a:e}),e},m.d=(t,e)=>{for(var n in e)m.o(e,n)&&!m.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},m.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),m.nc=void 0,t=m(379),e=m.n(t),n=m(795),i=m.n(n),o=m(569),a=m.n(o),r=m(565),c=m.n(r),p=m(216),s=m.n(p),d=m(589),l=m.n(d),f=m(137),(u={}).styleTagTransform=l(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=s(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();
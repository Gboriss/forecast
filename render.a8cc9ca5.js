parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hVsF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=273.15,t=document.getElementById("sunsetP"),n=document.getElementById("sunriseP"),r=function(r){var s=r.main.temp;document.getElementById("current-temp").innerHTML="".concat(Math.floor(s-e),"°C");var o=r.weather[0].main;document.getElementById("description").innerHTML=o;var u=r.sys.sunrise,d=new Date(1e3*u).getHours(),i=Math.floor(u/1e3/60%60);document.getElementById("sunrise").innerHTML=d+":"+i,t.innerHTML="sunset",n.innerHTML="sunrise";var a=r.sys.sunset,m=new Date(1e3*a).getHours(),c=Math.floor(a/1e3/60%60);document.getElementById("sunset").innerHTML=m+":"+c},s=r;exports.default=s;
},{}]},{},["hVsF"], null)
//# sourceMappingURL=/render.a8cc9ca5.js.map
!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["/client/d55ea8c7b4f6b7d1973b/board.0.js","/client/d55ea8c7b4f6b7d1973b/board0.1.js","/client/d55ea8c7b4f6b7d1973b/board1.2.js","/client/d55ea8c7b4f6b7d1973b/board2.3.js","/client/d55ea8c7b4f6b7d1973b/board3.4.js","/client/d55ea8c7b4f6b7d1973b/board4.5.js","/client/d55ea8c7b4f6b7d1973b/board5.6.js","/client/d55ea8c7b4f6b7d1973b/board6.7.js","/client/d55ea8c7b4f6b7d1973b/board7.8.js","/client/d55ea8c7b4f6b7d1973b/board7_Btn.9.js","/client/d55ea8c7b4f6b7d1973b/board8.10.js","/client/d55ea8c7b4f6b7d1973b/index.11.js","/client/d55ea8c7b4f6b7d1973b/main.js","/client/d55ea8c7b4f6b7d1973b/vendors~board2.13.js","/client/d55ea8c7b4f6b7d1973b/vendors~board5.14.js","/client/d55ea8c7b4f6b7d1973b/vendors~board8.15.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/icons/maskable_icon_x1.png","/icons/maskable_icon_x128.png","/icons/maskable_icon_x144.png","/icons/maskable_icon_x152.png","/icons/maskable_icon_x512.png","/icons/maskable_icon_x72.png","/icons/maskable_icon_x96.png","/manifest.json"]),a=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1611685935842").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1611685935842"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&a.has(t.pathname),r="only-if-cached"===e.request.cache&&!o;!n||c||r||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1611685935842");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())})}]);
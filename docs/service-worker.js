!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["/client/5c74b63f80d6d875cc4e/board0.0.js","/client/5c74b63f80d6d875cc4e/board1.1.js","/client/5c74b63f80d6d875cc4e/board2.2.js","/client/5c74b63f80d6d875cc4e/board3.3.js","/client/5c74b63f80d6d875cc4e/board4.4.js","/client/5c74b63f80d6d875cc4e/index.5.js","/client/5c74b63f80d6d875cc4e/main.js","/client/5c74b63f80d6d875cc4e/vendors~board2.7.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/icons/maskable_icon_x1.png","/icons/maskable_icon_x128.png","/icons/maskable_icon_x144.png","/icons/maskable_icon_x152.png","/icons/maskable_icon_x512.png","/icons/maskable_icon_x72.png","/icons/maskable_icon_x96.png","/manifest.json"]),o=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1611509213883").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1611509213883"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,a=t.host===self.location.host&&o.has(t.pathname),r="only-if-cached"===e.request.cache&&!a;!n||c||r||e.respondWith((async()=>a&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1611509213883");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())})}]);
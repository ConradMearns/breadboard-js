!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["/client/19a30f2734b8faca9d71/about.0.js","/client/19a30f2734b8faca9d71/blog.1.js","/client/19a30f2734b8faca9d71/blog_$slug.2.js","/client/19a30f2734b8faca9d71/index.3.js","/client/19a30f2734b8faca9d71/main.js","/client/1a7995d9ba835edd2e10b82db7371a3f.jpg"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/icons/maskable_icon_x1.png","/icons/maskable_icon_x128.png","/icons/maskable_icon_x144.png","/icons/maskable_icon_x152.png","/icons/maskable_icon_x512.png","/icons/maskable_icon_x72.png","/icons/maskable_icon_x96.png","/manifest.json"]),c=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1611102636809").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1611102636809"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&c.has(t.pathname),i="only-if-cached"===e.request.cache&&!o;!n||a||i||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1611102636809");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const a=await t.match(e);if(a)return a;throw n}}(e.request))())})}]);
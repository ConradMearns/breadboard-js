(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",(function(){return o}));var n=c(0);function s(t){let e,c,s,o,i,r,a=t[0].title+"",l=t[0].html+"";return document.title=e=t[0].title,{c(){c=Object(n.G)(),s=Object(n.q)("h1"),o=Object(n.I)(a),i=Object(n.G)(),r=Object(n.q)("div"),this.h()},l(t){Object(n.B)('[data-svelte="svelte-1uty71u"]',document.head).forEach(n.p),c=Object(n.j)(t),s=Object(n.i)(t,"H1",{});var e=Object(n.g)(s);o=Object(n.k)(e,a),e.forEach(n.p),i=Object(n.j)(t),r=Object(n.i)(t,"DIV",{class:!0}),Object(n.g)(r).forEach(n.p),this.h()},h(){Object(n.e)(r,"class","content svelte-emm3f3")},m(t,e){Object(n.x)(t,c,e),Object(n.x)(t,s,e),Object(n.c)(s,o),Object(n.x)(t,i,e),Object(n.x)(t,r,e),r.innerHTML=l},p(t,[c]){1&c&&e!==(e=t[0].title)&&(document.title=e),1&c&&a!==(a=t[0].title+"")&&Object(n.F)(o,a),1&c&&l!==(l=t[0].html+"")&&(r.innerHTML=l)},i:n.A,o:n.A,d(t){t&&Object(n.p)(c),t&&Object(n.p)(s),t&&Object(n.p)(i),t&&Object(n.p)(r)}}}async function o({params:t}){const e=await this.fetch(`blog/${t.slug}.json`),c=await e.json();if(200===e.status)return{post:c};this.error(e.status,c.message)}function i(t,e,c){let{post:n}=e;return t.$$set=t=>{"post"in t&&c(0,n=t.post)},[n]}class r extends n.a{constructor(t){var e;super(),document.getElementById("svelte-emm3f3-style")||((e=Object(n.q)("style")).id="svelte-emm3f3-style",e.textContent=".content.svelte-emm3f3 h2{font-size:1.4em;font-weight:500}.content.svelte-emm3f3 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-emm3f3 pre code{background-color:transparent;padding:0}.content.svelte-emm3f3 ul{line-height:1.5}.content.svelte-emm3f3 li{margin:0 0 0.5em 0}",Object(n.c)(document.head,e)),Object(n.w)(this,t,i,s,n.D,{post:0})}}e.default=r}}]);
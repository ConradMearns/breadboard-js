(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",(function(){return j}));var l=c(0);function n(t,e,c){const l=t.slice();return l[1]=e[c],l}function s(t){let e,c,n,s,b=t[1].title+"";return{c(){e=Object(l.q)("li"),c=Object(l.q)("a"),n=Object(l.I)(b),this.h()},l(t){e=Object(l.i)(t,"LI",{});var s=Object(l.g)(e);c=Object(l.i)(s,"A",{rel:!0,href:!0});var j=Object(l.g)(c);n=Object(l.k)(j,b),j.forEach(l.p),s.forEach(l.p),this.h()},h(){Object(l.e)(c,"rel","prefetch"),Object(l.e)(c,"href",s="blog/"+t[1].slug)},m(t,s){Object(l.x)(t,e,s),Object(l.c)(e,c),Object(l.c)(c,n)},p(t,e){1&e&&b!==(b=t[1].title+"")&&Object(l.F)(n,b),1&e&&s!==(s="blog/"+t[1].slug)&&Object(l.e)(c,"href",s)},d(t){t&&Object(l.p)(e)}}}function b(t){let e,c,b,j,o,r=t[0],O=[];for(let e=0;e<r.length;e+=1)O[e]=s(n(t,r,e));return{c(){e=Object(l.G)(),c=Object(l.q)("h1"),b=Object(l.I)("Recent posts"),j=Object(l.G)(),o=Object(l.q)("ul");for(let t=0;t<O.length;t+=1)O[t].c();this.h()},l(t){Object(l.B)('[data-svelte="svelte-hfp9t8"]',document.head).forEach(l.p),e=Object(l.j)(t),c=Object(l.i)(t,"H1",{});var n=Object(l.g)(c);b=Object(l.k)(n,"Recent posts"),n.forEach(l.p),j=Object(l.j)(t),o=Object(l.i)(t,"UL",{class:!0});var s=Object(l.g)(o);for(let t=0;t<O.length;t+=1)O[t].l(s);s.forEach(l.p),this.h()},h(){document.title="Blog",Object(l.e)(o,"class","svelte-1frg2tf")},m(t,n){Object(l.x)(t,e,n),Object(l.x)(t,c,n),Object(l.c)(c,b),Object(l.x)(t,j,n),Object(l.x)(t,o,n);for(let t=0;t<O.length;t+=1)O[t].m(o,null)},p(t,[e]){if(1&e){let c;for(r=t[0],c=0;c<r.length;c+=1){const l=n(t,r,c);O[c]?O[c].p(l,e):(O[c]=s(l),O[c].c(),O[c].m(o,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=r.length}},i:l.A,o:l.A,d(t){t&&Object(l.p)(e),t&&Object(l.p)(c),t&&Object(l.p)(j),t&&Object(l.p)(o),Object(l.o)(O,t)}}}function j(){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function o(t,e,c){let{posts:l}=e;return t.$$set=t=>{"posts"in t&&c(0,l=t.posts)},[l]}class r extends l.a{constructor(t){var e;super(),document.getElementById("svelte-1frg2tf-style")||((e=Object(l.q)("style")).id="svelte-1frg2tf-style",e.textContent="ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",Object(l.c)(document.head,e)),Object(l.w)(this,t,o,b,l.D,{posts:0})}}e.default=r}}]);
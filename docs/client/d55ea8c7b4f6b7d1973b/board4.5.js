(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{264:function(t,e,c){"use strict";c.r(e);var n=c(0),b=c(72);const O="pomodoro",j="sprint";class l{constructor(t="new event"){this.name=t,this.created=void 0,this.used=[],this.hide=!1,this.starred=!1,this.type=O}}const{document:o}=n.B;function a(t,e,c){const n=t.slice();return n[24]=e[c],n[25]=e,n[26]=c,n}function r(t,e,c){const n=t.slice();return n[27]=e[c],n}function d(t){let e,c,O,j,l,o,a,r;function d(){t[10].call(O,t[25],t[26])}let i=t[24].created&&s(t);return{c(){e=Object(n.w)("div"),c=Object(n.V)("Name: "),O=Object(n.w)("input"),j=Object(n.T)(),i&&i.c(),this.h()},l(t){e=Object(n.l)(t,"DIV",{});var b=Object(n.j)(e);c=Object(n.n)(b,"Name: "),O=Object(n.l)(b,"INPUT",{type:!0}),j=Object(n.m)(b),i&&i.l(b),b.forEach(n.v),this.h()},h(){Object(n.f)(O,"type","text")},m(b,l){Object(n.F)(b,e,l),Object(n.d)(e,c),Object(n.d)(e,O),Object(n.S)(O,t[24].name),Object(n.d)(e,j),i&&i.m(e,null),o=!0,a||(r=Object(n.H)(O,"input",d),a=!0)},p(c,b){t=c,1&b&&O.value!==t[24].name&&Object(n.S)(O,t[24].name),t[24].created?i?i.p(t,b):(i=s(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i(t){o||(Object(n.b)(()=>{l||(l=Object(n.q)(e,b.a,{},!0)),l.run(1)}),o=!0)},o(t){l||(l=Object(n.q)(e,b.a,{},!1)),l.run(0),o=!1},d(t){t&&Object(n.v)(e),i&&i.d(),t&&l&&l.end(),a=!1,r()}}}function s(t){let e,c,b,l,o,a,d,s,h,v,p,f,m,g,F,w,T,y,N;function k(){return t[11](t[26])}let E=t[24].used[0]&&i(t);function B(){return t[12](t[24],t[25],t[26])}let x=t[24].used,H=[];for(let e=0;e<x.length;e+=1)H[e]=u(r(t,x,e));function U(){t[13].call(h,t[25],t[26])}function S(){return t[14](t[24],t[25],t[26])}function V(){return t[15](t[24],t[25],t[26])}return{c(){e=Object(n.w)("button"),c=Object(n.V)("Use"),b=Object(n.T)(),E&&E.c(),l=Object(n.T)(),o=Object(n.w)("button"),a=Object(n.V)("Hide"),d=Object(n.T)();for(let t=0;t<H.length;t+=1)H[t].c();s=Object(n.V)("\n\t\tStarred: \n\t\t"),h=Object(n.w)("input"),v=Object(n.T)(),p=Object(n.w)("button"),f=Object(n.V)("pomodoro"),g=Object(n.T)(),F=Object(n.w)("button"),w=Object(n.V)("sprint"),this.h()},l(t){e=Object(n.l)(t,"BUTTON",{});var O=Object(n.j)(e);c=Object(n.n)(O,"Use"),O.forEach(n.v),b=Object(n.m)(t),E&&E.l(t),l=Object(n.m)(t),o=Object(n.l)(t,"BUTTON",{});var j=Object(n.j)(o);a=Object(n.n)(j,"Hide"),j.forEach(n.v),d=Object(n.m)(t);for(let e=0;e<H.length;e+=1)H[e].l(t);s=Object(n.n)(t,"\n\t\tStarred: \n\t\t"),h=Object(n.l)(t,"INPUT",{type:!0}),v=Object(n.m)(t),p=Object(n.l)(t,"BUTTON",{class:!0});var r=Object(n.j)(p);f=Object(n.n)(r,"pomodoro"),r.forEach(n.v),g=Object(n.m)(t),F=Object(n.l)(t,"BUTTON",{class:!0});var i=Object(n.j)(F);w=Object(n.n)(i,"sprint"),i.forEach(n.v),this.h()},h(){Object(n.f)(h,"type","checkbox"),Object(n.f)(p,"class",m=Object(n.K)(t[24].type===O?"selected":"")+" svelte-1408av9"),Object(n.f)(F,"class",T=Object(n.K)(t[24].type===j?"selected":"")+" svelte-1408av9")},m(O,j){Object(n.F)(O,e,j),Object(n.d)(e,c),Object(n.F)(O,b,j),E&&E.m(O,j),Object(n.F)(O,l,j),Object(n.F)(O,o,j),Object(n.d)(o,a),Object(n.F)(O,d,j);for(let t=0;t<H.length;t+=1)H[t].m(O,j);Object(n.F)(O,s,j),Object(n.F)(O,h,j),h.checked=t[24].starred,Object(n.F)(O,v,j),Object(n.F)(O,p,j),Object(n.d)(p,f),Object(n.F)(O,g,j),Object(n.F)(O,F,j),Object(n.d)(F,w),y||(N=[Object(n.H)(e,"click",k),Object(n.H)(o,"click",B),Object(n.H)(h,"change",U),Object(n.H)(p,"click",S),Object(n.H)(F,"click",V)],y=!0)},p(e,c){if((t=e)[24].used[0]?E?E.p(t,c):(E=i(t),E.c(),E.m(l.parentNode,l)):E&&(E.d(1),E=null),1&c){const e=x.length;let c;for(x=t[24].used,c=e;c<x.length;c+=1){const e=r(t,x,c);H[c]||(H[c]=u(e),H[c].c(),H[c].m(s.parentNode,s))}for(c=x.length;c<e;c+=1)H[c].d(1);H.length=x.length}1&c&&(h.checked=t[24].starred),1&c&&m!==(m=Object(n.K)(t[24].type===O?"selected":"")+" svelte-1408av9")&&Object(n.f)(p,"class",m),1&c&&T!==(T=Object(n.K)(t[24].type===j?"selected":"")+" svelte-1408av9")&&Object(n.f)(F,"class",T)},d(t){t&&Object(n.v)(e),t&&Object(n.v)(b),E&&E.d(t),t&&Object(n.v)(l),t&&Object(n.v)(o),t&&Object(n.v)(d),Object(n.u)(H,t),t&&Object(n.v)(s),t&&Object(n.v)(h),t&&Object(n.v)(v),t&&Object(n.v)(p),t&&Object(n.v)(g),t&&Object(n.v)(F),y=!1,Object(n.O)(N)}}}function i(t){let e,c,b=t[7](t[24].used[t[24].used.length-1],t[2])+"";return{c(){e=Object(n.V)("Last used \n\t\t\t"),c=Object(n.V)(b)},l(t){e=Object(n.n)(t,"Last used \n\t\t\t"),c=Object(n.n)(t,b)},m(t,b){Object(n.F)(t,e,b),Object(n.F)(t,c,b)},p(t,e){5&e&&b!==(b=t[7](t[24].used[t[24].used.length-1],t[2])+"")&&Object(n.R)(c,b)},d(t){t&&Object(n.v)(e),t&&Object(n.v)(c)}}}function u(t){let e,c;return{c(){e=Object(n.w)("span"),c=Object(n.V)("✔️")},l(t){e=Object(n.l)(t,"SPAN",{});var b=Object(n.j)(e);c=Object(n.n)(b,"✔️"),b.forEach(n.v)},m(t,b){Object(n.F)(t,e,b),Object(n.d)(e,c)},d(t){t&&Object(n.v)(e)}}}function h(t){let e,c,b=!t[24].hide&&d(t);return{c(){b&&b.c(),e=Object(n.x)()},l(t){b&&b.l(t),e=Object(n.x)()},m(t,O){b&&b.m(t,O),Object(n.F)(t,e,O),c=!0},p(t,c){t[24].hide?b&&(Object(n.C)(),Object(n.Y)(b,1,1,()=>{b=null}),Object(n.i)()):b?(b.p(t,c),1&c&&Object(n.X)(b,1)):(b=d(t),b.c(),Object(n.X)(b,1),b.m(e.parentNode,e))},i(t){c||(Object(n.X)(b),c=!0)},o(t){Object(n.Y)(b),c=!1},d(t){b&&b.d(t),t&&Object(n.v)(e)}}}function v(t){let e,c,b,O,j,l,o,r,d,s,i,u,v,m=p&&function(t){let e,c,b,O,j,l,o,a,r,d,s;return{c(){e=Object(n.w)("button"),c=Object(n.V)("Save"),b=Object(n.T)(),O=Object(n.w)("input"),j=Object(n.T)(),l=Object(n.w)("button"),o=Object(n.V)("Load"),a=Object(n.T)(),r=Object(n.w)("hr"),this.h()},l(t){e=Object(n.l)(t,"BUTTON",{});var d=Object(n.j)(e);c=Object(n.n)(d,"Save"),d.forEach(n.v),b=Object(n.m)(t),O=Object(n.l)(t,"INPUT",{type:!0,accept:!0}),j=Object(n.m)(t),l=Object(n.l)(t,"BUTTON",{});var s=Object(n.j)(l);o=Object(n.n)(s,"Load"),s.forEach(n.v),a=Object(n.m)(t),r=Object(n.l)(t,"HR",{}),this.h()},h(){Object(n.f)(O,"type","file"),Object(n.f)(O,"accept",".json")},m(i,u){Object(n.F)(i,e,u),Object(n.d)(e,c),Object(n.F)(i,b,u),Object(n.F)(i,O,u),Object(n.F)(i,j,u),Object(n.F)(i,l,u),Object(n.d)(l,o),Object(n.F)(i,a,u),Object(n.F)(i,r,u),d||(s=[Object(n.H)(e,"click",t[3]),Object(n.H)(O,"change",t[8]),Object(n.H)(l,"click",t[4])],d=!0)},p:n.J,d(t){t&&Object(n.v)(e),t&&Object(n.v)(b),t&&Object(n.v)(O),t&&Object(n.v)(j),t&&Object(n.v)(l),t&&Object(n.v)(a),t&&Object(n.v)(r),d=!1,Object(n.O)(s)}}}(t),g=f&&function(t){let e,c;return{c(){e=Object(n.V)("Ctrl+S to save. Ctrl+L to load.\n\t"),c=Object(n.w)("hr")},l(t){e=Object(n.n)(t,"Ctrl+S to save. Ctrl+L to load.\n\t"),c=Object(n.l)(t,"HR",{})},m(t,b){Object(n.F)(t,e,b),Object(n.F)(t,c,b)},d(t){t&&Object(n.v)(e),t&&Object(n.v)(c)}}}(),F=t[0],w=[];for(let e=0;e<F.length;e+=1)w[e]=h(a(t,F,e));const T=t=>Object(n.Y)(w[t],1,1,()=>{w[t]=null});return{c(){m&&m.c(),e=Object(n.T)(),c=Object(n.w)("input"),O=Object(n.T)(),g&&g.c(),j=Object(n.T)();for(let t=0;t<w.length;t+=1)w[t].c();l=Object(n.T)(),o=Object(n.w)("br"),r=Object(n.T)(),d=Object(n.w)("button"),s=Object(n.V)("Add"),this.h()},l(t){m&&m.l(t),e=Object(n.m)(t),c=Object(n.l)(t,"INPUT",{hidden:!0,id:!0,type:!0,accept:!0}),O=Object(n.m)(t),g&&g.l(t),j=Object(n.m)(t);for(let e=0;e<w.length;e+=1)w[e].l(t);l=Object(n.m)(t),o=Object(n.l)(t,"BR",{}),r=Object(n.m)(t),d=Object(n.l)(t,"BUTTON",{});var b=Object(n.j)(d);s=Object(n.n)(b,"Add"),b.forEach(n.v),this.h()},h(){c.hidden=b=!0,Object(n.f)(c,"id","loadEvents"),Object(n.f)(c,"type","file"),Object(n.f)(c,"accept",".json")},m(b,a){m&&m.m(b,a),Object(n.F)(b,e,a),Object(n.F)(b,c,a),Object(n.F)(b,O,a),g&&g.m(b,a),Object(n.F)(b,j,a);for(let t=0;t<w.length;t+=1)w[t].m(b,a);Object(n.F)(b,l,a),Object(n.F)(b,o,a),Object(n.F)(b,r,a),Object(n.F)(b,d,a),Object(n.d)(d,s),i=!0,u||(v=[Object(n.H)(c,"change",t[9]),Object(n.H)(d,"click",t[5])],u=!0)},p(t,[e]){if(p&&m.p(t,e),197&e){let c;for(F=t[0],c=0;c<F.length;c+=1){const b=a(t,F,c);w[c]?(w[c].p(b,e),Object(n.X)(w[c],1)):(w[c]=h(b),w[c].c(),Object(n.X)(w[c],1),w[c].m(l.parentNode,l))}for(Object(n.C)(),c=F.length;c<w.length;c+=1)T(c);Object(n.i)()}},i(t){if(!i){for(let t=0;t<F.length;t+=1)Object(n.X)(w[t]);i=!0}},o(t){w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)Object(n.Y)(w[t]);i=!1},d(t){m&&m.d(t),t&&Object(n.v)(e),t&&Object(n.v)(c),t&&Object(n.v)(O),g&&g.d(t),t&&Object(n.v)(j),Object(n.u)(w,t),t&&Object(n.v)(l),t&&Object(n.v)(o),t&&Object(n.v)(r),t&&Object(n.v)(d),u=!1,Object(n.O)(v)}}}let p=!0,f=!1;function m(t,e,c){document.addEventListener("keydown",t=>{var e;t.ctrlKey&&"s"===t.key&&(t.preventDefault(),o()),t.ctrlKey&&"l"===t.key&&(t.preventDefault(),(e=document.getElementById("loadEvents")).click(),e.addEventListener("change",t=>{a()}))});let n,{eventData:b=[d("")]}=e;function o(){var t,e,c,n,O;t=JSON.stringify(b,null," "),e="events.json",c="text/plain",n=document.createElement("a"),O=new Blob([t],{type:c}),n.href=URL.createObjectURL(O),n.download=e,n.click()}function a(){r.readAsText(n.item(0))}var r=new FileReader;function d(t){return e=new l(t),JSON.parse(JSON.stringify(e,null,""));var e}function s(t){c(0,b[t].used=[...b[t].used,new Date],b)}r.onload=function(t){console.log(t);var e=JSON.parse(t.target.result);c(0,b=e)};let i=0;new Date;setInterval(()=>{c(2,i++,i)},1e3);return t.$$set=t=>{"eventData"in t&&c(0,b=t.eventData)},[b,n,i,o,a,function(){c(0,b[b.length-1].created=new Date,b),c(0,b=[...b,d("")])},s,function(t,e){var c=Math.abs(((new Date).getTime()-new Date(t).getTime())/1e3);return(c=Math.round(c))<=5?"just now":c<=60?"less than a minute ago":c<=3600?"less than an hour ago":c<=86400?"less than a day ago":Math.round(c/86400)+" days ago"},function(){n=this.files,c(1,n)},function(){n=this.files,c(1,n)},function(t,e){t[e].name=this.value,c(0,b)},t=>s(t),(t,e,n)=>c(0,e[n].hide=!0,b),function(t,e){t[e].starred=this.checked,c(0,b)},(t,e,n)=>c(0,e[n].type=O,b),(t,e,n)=>c(0,e[n].type=j,b)]}class g extends n.a{constructor(t){var e;super(),o.getElementById("svelte-1408av9-style")||((e=Object(n.w)("style")).id="svelte-1408av9-style",e.textContent=".selected.svelte-1408av9{background-color:#a3a3a3;color:white}",Object(n.d)(o.head,e)),Object(n.E)(this,t,m,v,n.P,{eventData:0})}}e.default=g},72:function(t,e,c){"use strict";c.d(e,"a",(function(){return b}));c(0);function n(t){const e=t-1;return e*e*e+1}function b(t,{delay:e=0,duration:c=400,easing:b=n}){const O=getComputedStyle(t),j=+O.opacity,l=parseFloat(O.height),o=parseFloat(O.paddingTop),a=parseFloat(O.paddingBottom),r=parseFloat(O.marginTop),d=parseFloat(O.marginBottom),s=parseFloat(O.borderTopWidth),i=parseFloat(O.borderBottomWidth);return{delay:e,duration:c,easing:b,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*j};height: ${t*l}px;padding-top: ${t*o}px;padding-bottom: ${t*a}px;margin-top: ${t*r}px;margin-bottom: ${t*d}px;border-top-width: ${t*s}px;border-bottom-width: ${t*i}px;`}}}}]);
import{S as C,i as I,s as P,k as _,y as d,l as p,m as $,z as v,h as f,n as B,b,A as k,g as c,d as u,B as y,v as S,f as w,H as A,M as D}from"../chunks/index.9dc8c717.js";import{C as E,B as T}from"../chunks/ContentSection.759a5e55.js";function m(s,t,o){const n=s.slice();return n[2]=t[o],n}function h(s){let t,o;return t=new T({props:{title:s[2].title,coverImage:s[2].coverImage,excerpt:s[2].excerpt,readingTime:s[2].readingTime,slug:s[2].slug,tags:s[2].tags}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,e){k(t,n,e),o=!0},p:D,i(n){o||(c(t.$$.fragment,n),o=!0)},o(n){u(t.$$.fragment,n),o=!1},d(n){y(t,n)}}}function V(s){let t,o,n=s[0],e=[];for(let a=0;a<n.length;a+=1)e[a]=h(m(s,n,a));const i=a=>u(e[a],1,1,()=>{e[a]=null});return{c(){t=_("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=p(a,"DIV",{class:!0});var r=$(t);for(let l=0;l<e.length;l+=1)e[l].l(r);r.forEach(f),this.h()},h(){B(t,"class","grid svelte-1mrrl9u")},m(a,r){b(a,t,r);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null);o=!0},p(a,r){if(r&1){n=a[0];let l;for(l=0;l<n.length;l+=1){const g=m(a,n,l);e[l]?(e[l].p(g,r),c(e[l],1)):(e[l]=h(g),e[l].c(),c(e[l],1),e[l].m(t,null))}for(S(),l=n.length;l<e.length;l+=1)i(l);w()}},i(a){if(!o){for(let r=0;r<n.length;r+=1)c(e[r]);o=!0}},o(a){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)u(e[r]);o=!1},d(a){a&&f(t),A(e,a)}}}function q(s){let t,o,n;return o=new E({props:{title:"All Blog Posts",$$slots:{default:[V]},$$scope:{ctx:s}}}),{c(){t=_("div"),d(o.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var i=$(t);v(o.$$.fragment,i),i.forEach(f),this.h()},h(){B(t,"class","container")},m(e,i){b(e,t,i),k(o,t,null),n=!0},p(e,[i]){const a={};i&32&&(a.$$scope={dirty:i,ctx:e}),o.$set(a)},i(e){n||(c(o.$$.fragment,e),n=!0)},o(e){u(o.$$.fragment,e),n=!1},d(e){e&&f(t),y(o)}}}function z(s,t,o){let{data:n}=t,{posts:e}=n;return s.$$set=i=>{"data"in i&&o(1,n=i.data)},[e,n]}class j extends C{constructor(t){super(),I(this,t,z,q,P,{data:1})}}export{j as component};

import{S as V,i as q,s as S,C as y,k as r,a as k,l as m,m as h,c as b,h as c,n as v,N as p,b as g,G as d,D as F,E as G,F as N,g as j,d as w,q as D,r as E,u as I}from"./index.b2354961.js";function B(o){let e,i;return{c(){e=r("div"),i=D(o[0]),this.h()},l(s){e=m(s,"DIV",{class:!0});var l=h(e);i=E(l,o[0]),l.forEach(c),this.h()},h(){v(e,"class","filename svelte-1pkpsrg")},m(s,l){g(s,e,l),d(e,i)},p(s,l){l&1&&I(i,s[0])},d(s){s&&c(e)}}}function C(o){let e,i;return{c(){e=r("div"),i=D(o[1]),this.h()},l(s){e=m(s,"DIV",{class:!0});var l=h(e);i=E(l,o[1]),l.forEach(c),this.h()},h(){v(e,"class","lang svelte-1pkpsrg")},m(s,l){g(s,e,l),d(e,i)},p(s,l){l&2&&I(i,s[1])},d(s){s&&c(e)}}}function z(o){let e,i,s,l,n=o[0]&&B(o),f=o[1]&&C(o);const u=o[4].default,t=y(u,o,o[3],null);return{c(){e=r("div"),n&&n.c(),i=k(),f&&f.c(),s=k(),t&&t.c(),this.h()},l(a){e=m(a,"DIV",{class:!0});var _=h(e);n&&n.l(_),i=b(_),f&&f.l(_),s=b(_),t&&t.l(_),_.forEach(c),this.h()},h(){v(e,"class","code-block svelte-1pkpsrg"),p(e,"full-bleed",o[2])},m(a,_){g(a,e,_),n&&n.m(e,null),d(e,i),f&&f.m(e,null),d(e,s),t&&t.m(e,null),l=!0},p(a,[_]){a[0]?n?n.p(a,_):(n=B(a),n.c(),n.m(e,i)):n&&(n.d(1),n=null),a[1]?f?f.p(a,_):(f=C(a),f.c(),f.m(e,s)):f&&(f.d(1),f=null),t&&t.p&&(!l||_&8)&&F(t,u,a,a[3],l?N(u,a[3],_,null):G(a[3]),null),(!l||_&4)&&p(e,"full-bleed",a[2])},i(a){l||(j(t,a),l=!0)},o(a){w(t,a),l=!1},d(a){a&&c(e),n&&n.d(),f&&f.d(),t&&t.d(a)}}}function A(o,e,i){let{$$slots:s={},$$scope:l}=e,{filename:n}=e,{lang:f}=e,{fullBleed:u=void 0}=e;return o.$$set=t=>{"filename"in t&&i(0,n=t.filename),"lang"in t&&i(1,f=t.lang),"fullBleed"in t&&i(2,u=t.fullBleed),"$$scope"in t&&i(3,l=t.$$scope)},[n,f,u,l,s]}class J extends V{constructor(e){super(),q(this,e,A,z,S,{filename:0,lang:1,fullBleed:2})}}export{J as C};

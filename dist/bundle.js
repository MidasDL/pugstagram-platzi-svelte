(()=>{"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}function a(t,n,e,s){return t[1]&&s?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](s(n))):e.ctx}new Set;let c,l=!1;function d(t,n,e,s){for(;t<n;){const o=t+(n-t>>1);e(o)<=s?t=o+1:n=o}return t}function u(t,n){l?(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),s=new Int32Array(n.length);e[0]=-1;let o=0;for(let t=0;t<n.length;t++){const r=d(1,o+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;s[t]=e[r]+1;const i=r+1;e[i]=t,o=Math.max(i,o)}const r=[],i=[];let a=n.length-1;for(let t=e[o]+1;0!=t;t=s[t-1]){for(r.push(n[t-1]);a>=t;a--)i.push(n[a]);a--}for(;a>=0;a--)i.push(n[a]);r.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<i.length;n++){for(;e<r.length&&i[n].claim_order>=r[e].claim_order;)e++;const s=e<r.length?r[e]:null;t.insertBefore(i[n],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function f(t,n,e){l&&!e?u(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function p(){return t=" ",document.createTextNode(t);var t}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t){c=t}new Set;const v=[],y=[],b=[],_=[],x=Promise.resolve();let w=!1;function C(t){b.push(t)}let k=!1;const H=new Set;function T(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];g(n),M(n.$$)}for(g(null),v.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];H.has(n)||(H.add(n),n())}b.length=0}while(v.length);for(;_.length;)_.pop()();w=!1,k=!1,H.clear()}}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const S=new Set;let E;function L(t,n){t&&t.i&&(S.delete(t),t.i(n))}function A(t,n,e,s){if(t&&t.o){if(S.has(t))return;S.add(t),undefined.c.push((()=>{S.delete(t),s&&(e&&t.d(1),s())})),t.o(n)}}function N(t){t&&t.c()}function P(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:d}=t.$$;a&&a.m(e,r),i||C((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),d.forEach(C)}function j(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(n,o,r,i,a,d,u=[-1]){const f=c;g(n);const m=n.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:o.context||[]),callbacks:e(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=r?r(n,o.props||{},((t,e,...s)=>{const o=s.length?s[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),p&&function(t,n){-1===t.$$.dirty[0]&&(v.push(t),w||(w=!0,x.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],m.update(),p=!0,s(m.before_update),m.fragment=!!i&&i(m.ctx),o.target){if(o.hydrate){l=!0;const t=(h=o.target,Array.from(h.childNodes));m.fragment&&m.fragment.l(t),t.forEach($)}else m.fragment&&m.fragment.c();o.intro&&L(n.$$.fragment),P(n,o.target,o.anchor,o.customElement),l=!1,T()}var h;g(f)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(o);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){j(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class D{$destroy(){j(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="Header-container"><div class="Header-content"><div class="Header-logo"><h1>Pugstagram</h1></div></div> \n        <div class="Header-nav"><ul><li><i class="fas fa-heart"></i></li> \n                <li><i class="fas fa-user-alt"></i></li></ul></div></div>',h(e,"class","Header")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&$(e)}}}const O=class extends D{constructor(t){super(),B(this,t,null,I,r,{})}};function q(t){let n,e,s;const o=t[1].default,r=function(t,n,e,s){if(t){const s=a(t,n,e,null);return t[0](s)}}(o,t,t[0]);return{c(){n=m("div"),e=m("div"),r&&r.c(),h(e,"class","Main-container"),h(n,"class","Main")},m(t,o){f(t,n,o),u(n,e),r&&r.m(e,null),s=!0},p(t,[n]){r&&r.p&&(!s||1&n)&&function(t,n,e,s,o,r,i){const c=function(t,n,e,s){if(t[2]&&s){const o=t[2](s(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let s=0;s<e;s+=1)t[s]=n.dirty[s]|o[s];return t}return n.dirty|o}return n.dirty}(n,s,o,null);if(c){const o=a(n,e,s,null);t.p(o,c)}}(r,o,t,t[0],s?n:-1)},i(t){s||(L(r,t),s=!0)},o(t){A(r,t),s=!1},d(t){t&&$(n),r&&r.d(t)}}}function z(t,n,e){let{$$slots:s={},$$scope:o}=n;return t.$$set=t=>{"$$scope"in t&&e(0,o=t.$$scope)},[o,s]}const F=class extends D{constructor(t){super(),B(this,t,z,q,r,{})}};function G(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="Comments-content"><div class="Comments-users"><h3>Crispeta</h3> \n            <span>Hola Elmo</span></div> \n        <div class="Comments-add"><form action=""><input type="text" class="Comments-input" placeholder="Agregar Comentario..." id="text"/></form> \n            <button type="submit">Post</button></div></div>',h(e,"class","Comments")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&$(e)}}}const R=class extends D{constructor(t){super(),B(this,t,null,G,r,{})}};function U(n){let e,s,o,r,i,a,c,l,d,g,v,y;return v=new R({}),{c(){e=m("div"),s=m("div"),o=m("div"),o.innerHTML='<div class="Card-user"><img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt=""/> \n                <h2>Elmo.pug\n                <span>Bogotá, Colombia</span></h2></div> \n            <div class="Card-settings"><i class="fas fa-ellipsis-h"></i></div>',r=p(),i=m("div"),i.innerHTML='<figure><img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt=""/></figure>',a=p(),c=m("div"),c.innerHTML='<div class="Card-icons-first"><i class="fas fa-heart"></i> \n                <i class="fas fa-paperplane"></i></div> \n            <div class="Card-icons-second"><i class="fas fa-bookmark"></i></div>',l=p(),d=m("div"),d.innerHTML="<h3>elmo.pug</h3> \n            <span>Hola</span>",g=p(),N(v.$$.fragment),h(o,"class","Card-header"),h(i,"class","Card-photo"),h(c,"class","Card-icons"),h(d,"class","Card-description"),h(s,"class","Card-container"),h(e,"class","Card")},m(t,n){f(t,e,n),u(e,s),u(s,o),u(s,r),u(s,i),u(s,a),u(s,c),u(s,l),u(s,d),u(s,g),P(v,s,null),y=!0},p:t,i(t){y||(L(v.$$.fragment,t),y=!0)},o(t){A(v.$$.fragment,t),y=!1},d(t){t&&$(e),j(v)}}}const V=class extends D{constructor(t){super(),B(this,t,null,U,r,{})}};function Y(n){let e,s,o,r;return o=new V({}),{c(){e=m("div"),s=m("div"),N(o.$$.fragment),h(s,"class","Timeline-container"),h(e,"class","Timeline")},m(t,n){f(t,e,n),u(e,s),P(o,s,null),r=!0},p:t,i(t){r||(L(o.$$.fragment,t),r=!0)},o(t){A(o.$$.fragment,t),r=!1},d(t){t&&$(e),j(o)}}}const J=class extends D{constructor(t){super(),B(this,t,null,Y,r,{})}};function K(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="Profile-content"><div class="Profile-avatar"><img src="https://arepa.s3.amazonaws.com/oscar.png" alt=""/></div> \n        <div class="Profile-info"><h2>MD</h2> \n            <span>Danny Lee</span></div></div>',h(e,"class","Profile")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&$(e)}}}const Q=class extends D{constructor(t){super(),B(this,t,null,K,r,{})}};function W(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="Stories-container"><div class="Stories-head"><h2>Historias</h2> \n            <span>Ver Todas</span></div> \n        <div class="Stories-items"><div class="Stories-item"><div class="Stories-item-box"><img src="https://arepa.s3.amazonaws.com/oscar.png" alt=""/></div> \n                <h2>Dan</h2> \n                <span>10 horas antes</span></div></div></div>',h(e,"class","Stories")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&$(e)}}}const X=class extends D{constructor(t){super(),B(this,t,null,W,r,{})}};function Z(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="Footer-container"><div class="Footer-copy">2021 PUGSTAGRAM DANNY LEE EDITION</div></div>',h(e,"class","Footer")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&$(e)}}}const tt=class extends D{constructor(t){super(),B(this,t,null,Z,r,{})}};function nt(n){let e,s,o,r,i,a,c,l;return o=new Q({}),i=new X({}),c=new tt({}),{c(){e=m("div"),s=m("div"),N(o.$$.fragment),r=p(),N(i.$$.fragment),a=p(),N(c.$$.fragment),h(s,"class","Sidebar-container"),h(e,"class","Sidebar")},m(t,n){f(t,e,n),u(e,s),P(o,s,null),u(s,r),P(i,s,null),u(s,a),P(c,s,null),l=!0},p:t,i(t){l||(L(o.$$.fragment,t),L(i.$$.fragment,t),L(c.$$.fragment,t),l=!0)},o(t){A(o.$$.fragment,t),A(i.$$.fragment,t),A(c.$$.fragment,t),l=!1},d(t){t&&$(e),j(o),j(i),j(c)}}}const et=class extends D{constructor(t){super(),B(this,t,null,nt,r,{})}};function st(t){let n,e,s,o;return n=new J({}),s=new et({}),{c(){N(n.$$.fragment),e=p(),N(s.$$.fragment)},m(t,r){P(n,t,r),f(t,e,r),P(s,t,r),o=!0},i(t){o||(L(n.$$.fragment,t),L(s.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),A(s.$$.fragment,t),o=!1},d(t){j(n,t),t&&$(e),j(s,t)}}}function ot(t){let n,e,s,o;return n=new O({}),s=new F({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){N(n.$$.fragment),e=p(),N(s.$$.fragment)},m(t,r){P(n,t,r),f(t,e,r),P(s,t,r),o=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){o||(L(n.$$.fragment,t),L(s.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),A(s.$$.fragment,t),o=!1},d(t){j(n,t),t&&$(e),j(s,t)}}}new class extends D{constructor(t){var n;super(),document.getElementById("svelte-bc8u9f-style")||((n=m("style")).id="svelte-bc8u9f-style",n.textContent="body{background-color:#676778;color:white}",u(document.head,n)),B(this,t,null,ot,r,{})}}({target:document.querySelector("main")})})();
function $(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(P)}function B(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(H(e,n))}function st(t,e,n,i){if(t){const r=D(t,e,n,i);return t[0](r)}}function D(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function ft(t,e,n,i,r,s){if(r){const c=D(e,n,i,s);t.p(c,r)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function G(){v=!0}function J(){v=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:K(1,r,x=>e[n[x]].claim_order,l))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const s=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(s.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[u],f)}}function R(t,e){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){v&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function mt(){return A(" ")}function pt(){return A("")}function yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){X(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function xt(t,e,n){return Y(t,e,n,U)}function Z(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function bt(t){return Z(t," ")}function $t(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e){t.value=e??""}function Et(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function wt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Nt(t){const e=t.querySelector(":checked");return e&&e.__value}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function St(t,e){return new t(e)}let y;function p(t){y=t}function E(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){E().$$.on_mount.push(t)}function jt(t){E().$$.after_update.push(t)}function kt(t){E().$$.on_destroy.push(t)}function Ct(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=tt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],M=[];let m=[];const O=[],q=Promise.resolve();let N=!1;function I(){N||(N=!0,q.then(T))}function Mt(){return I(),q}function S(t){m.push(t)}const w=new Set;let _=0;function T(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;O.length;)O.pop()();N=!1,w.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const b=new Set;let d;function Ot(){d={r:0,c:[],p:d}}function Pt(){d.r||g(d.c),d=d.p}function it(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Dt(t){t&&t.c()}function Lt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(P).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(S)}function ct(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qt(t,e,n,i,r,s,c,o=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,x,...j)=>{const k=j.length?j[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=k)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](k),f&&ut(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){G();const a=V(e.target);l.fragment&&l.fragment.l(a),a.forEach(W)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),J(),T()}p(u)}class It{$destroy(){ct(this,1),this.$destroy=$}$on(e,n){if(!B(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{rt as A,ct as B,st as C,ft as D,dt as E,at as F,R as G,$ as H,ot as I,Ct as J,yt as K,vt as L,ht as M,kt as N,g as O,S as P,wt as Q,Nt as R,It as S,mt as a,_t as b,bt as c,Bt as d,pt as e,Pt as f,it as g,W as h,qt as i,jt as j,U as k,xt as l,V as m,gt as n,At as o,Et as p,A as q,Z as r,lt as s,Mt as t,$t as u,Ot as v,M as w,St as x,Dt as y,Lt as z};
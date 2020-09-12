(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{11:function(n,e,t){n.exports=t(19)},16:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),l=(t(16),t(1)),i=t(2);function u(){const n=Object(l.a)(["\n    --color-big-stone: #122236;\n    --color-big-stone-pale: rgba(18, 34, 54, 0.1);\n    --color-regent-gray: #82909e;\n    --color-mystic: #e4e9f0;\n\n    display: flex;\n    flex-direction: column;\n    width: 320px;\n    padding: 10px;\n    background: white;\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);\n    font-family: sans-serif;\n"]);return u=function(){return n},n}const s=i.b.article(u());function d(){const n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    border: 0;\n    cursor: pointer;\n    background: none;\n\n    span {\n        font-size: 30px;\n    }\n\n    p {\n        margin: 2px 0 0;\n        font-size: 14px;\n    }\n"]);return d=function(){return n},n}function b(){const n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    flex-basis: 0;\n"]);return b=function(){return n},n}function p(){const n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"]);return p=function(){return n},n}function m(){const n=Object(l.a)([""]);return m=function(){return n},n}const f=i.b.div(m()),g=i.b.ul(p()),x=i.b.li(b()),E=i.b.button(d()),j=({options:n,onLeaveFeedback:e})=>{const t=Object(a.useCallback)(({currentTarget:n})=>{e(n.getAttribute("data-id"))},[e]);return r.a.createElement(f,null,r.a.createElement(g,null,n.map(({icon:n,id:e,displayName:a})=>r.a.createElement(x,{key:e},r.a.createElement(E,{type:"button",onClick:t,"data-id":e},r.a.createElement("span",{role:"img","aria-label":a},n),r.a.createElement("p",null,a))))))};function h(){const n=Object(l.a)(["\n    ",";\n\n    margin-top: 10px;\n    justify-content: space-around;\n    border-top: 1px dashed var(--color-big-stone-pale);\n"]);return h=function(){return n},n}function O(){const n=Object(l.a)(["\n    ",";\n\n    text-align: center;\n    border-top: 1px solid var(--color-big-stone-pale);\n\n    li {\n        flex-grow: 1;\n        flex-basis: 0;\n    }\n"]);return O=function(){return n},n}function y(){const n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 10px 0 0;\n    list-style: none;\n"]);return y=function(){return n},n}function k(){const n=Object(l.a)(["\n    margin-top: 10px;\n"]);return k=function(){return n},n}const v=i.b.div(k()),w=Object(i.a)(y()),N=i.b.ul(O(),w),C=i.b.ul(h(),w),z=({good:n,neutral:e,bad:t,total:a,positivePercentage:o})=>r.a.createElement(v,null,r.a.createElement(N,null,r.a.createElement("li",null,"Good: ",n),r.a.createElement("li",null,"Neutral: ",e),r.a.createElement("li",null,"Bad: ",t)),r.a.createElement(C,null,r.a.createElement("li",null,"Total: ",a),r.a.createElement("li",null,"Positive feedback: ",o)));function B(){const n=Object(l.a)(["\n    border-top: 1px solid var(--color-big-stone-pale);\n    text-align: center;\n    margin-top: 10px;\n    padding-top: 10px;\n"]);return B=function(){return n},n}const F=i.b.div(B()),M=({message:n})=>r.a.createElement(F,null,n),P=()=>{const[n,e]=Object(a.useState)({good:0,neutral:0,bad:0}),t=Object(a.useCallback)(n=>Object.values(n).reduce((n,e)=>n+e,0),[])(n),o=Object(a.useCallback)(n=>"".concat(Math.round(100/Object.values(n).reduce((n,e)=>n+e,0)*n.good)||0,"%"),[])(n),c=Object(a.useMemo)(()=>[{icon:"\ud83d\udc4d",id:"good",displayName:"Good"},{icon:"\ud83d\ude10",id:"neutral",displayName:"Neutral"},{icon:"\ud83e\udd2c",id:"bad",displayName:"Bad"}],[]),l=Object(a.useCallback)(t=>{e({...n,[t]:n[t]+1})},[n,e]);return r.a.createElement(s,null,r.a.createElement(j,{options:c,onLeaveFeedback:l}),t?r.a.createElement(z,{good:n.good,neutral:n.neutral,bad:n.bad,total:t,positivePercentage:o}):r.a.createElement(M,{message:"No feedback given"}))};function W(){const n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    padding: 20px;\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n    background: ",";\n"]);return W=function(){return n},n}function G(){const n=Object(l.a)(["\n    margin: 0;\n    font-size: 20px;\n"]);return G=function(){return n},n}function J(){const n=Object(l.a)(["\n    min-width: 400px;\n    max-width: 768px;\n    margin: 0 auto;\n    padding: 60px 20px 60px;\n\n    > "," {\n        margin-top: 50px;\n\n        & + & {\n            margin-top: 40px;\n        }\n\n        &:first-child {\n            margin-top: 0;\n        }\n    }\n"]);return J=function(){return n},n}function L(){const n=Object(l.a)([""]);return L=function(){return n},n}function S(){const n=Object(l.a)(["\n    margin: 0;\n    font-size: 24px;\n"]);return S=function(){return n},n}const T=i.b.h1(S()),A=i.b.section(L()),H=i.b.main(J(),A),I=i.b.h2(G()),$=i.b.div(W(),({bg:n})=>n||"#ffffff"),q=()=>r.a.createElement(A,null,r.a.createElement(I,null,"Feedback Widget"),r.a.createElement($,{bg:"lightslategray"},r.a.createElement(P,null))),D=()=>r.a.createElement(H,null,r.a.createElement(T,null,"Homework 02 \u2013 Ex. 01"),r.a.createElement(q,null));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(n=>{n.unregister()}).catch(n=>{console.error(n.message)})}},[[11,1,2]]]);
//# sourceMappingURL=main.7a0ed973.chunk.js.map
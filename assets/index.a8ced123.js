import{r as e,o as t,c as n,a as o,b as r,d as s,e as c}from"./vendor.9c08147d.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const c=new URL(e,o);if(self[t].moduleMap[c])return n(self[t].moduleMap[c]);const a=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),r(i)},onload(){n(self[t].moduleMap[c]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const a={};let i;a.render=function(o,r){const s=e("router-view");return t(),n(s)};const m={},l=[{path:"/",name:"Main",component:()=>function(e,t){if(!t)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":i,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise((e=>{o.addEventListener("load",e)})):void 0}))).then((()=>e()))}((()=>__import__("./main.39697cc6.js")),["/assets/main.39697cc6.js","/assets/main.1d659e9a.css","/assets/vendor.9c08147d.js"])}];var u=o({history:r(),routes:l}),d=s({state:()=>({count:0}),mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}}});const p=c(a);p.use(u),p.use(d),p.mount("#app");

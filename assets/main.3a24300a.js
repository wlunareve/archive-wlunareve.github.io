import{p as e,f as a,o as n,c as l,g as t,F as s,h as i,w as c,t as o,i as r,j as d,r as v,k as p,l as m,m as u,n as _,q as f}from"./vendor.1e637de3.js";const k={name:"navbar",setup:()=>({links:[{name:"fa-github",link:"https://github.com/wlunareve"},{name:"fa-linkedin-in",link:"https://www.linkedin.com/in/%E6%98%8E%E8%AC%99-%E5%AE%8B-982b30172/"},{name:"fa-instagram",link:"https://www.instagram.com/sung35680/?hl=zh-tw"}]})},b=c("data-v-baf54d86");e("data-v-baf54d86");const S={class:"nav"},h={class:"nav__container"},g=t("a",{href:"/",class:"nav__title"},"ToD",-1),w={class:"nav__link"};a();const y=b(((e,a,c,o,r,d)=>(n(),l("nav",S,[t("div",h,[g,t("div",w,[(n(!0),l(s,null,i(o.links,(({name:e,link:a})=>(n(),l("a",{key:e,href:a,target:"_blank",rel:"noopener noreferrer"},[t("i",{class:["icon fab",e]},null,2)],8,["href"])))),128))])])]))));k.render=y,k.__scopeId="data-v-baf54d86";const E={name:"CvSidebar",setup(){}},C=c("data-v-76dd867d");e("data-v-76dd867d");const A={id:"cv-sidebar",class:"cv-sidebar"},I=t("span",{class:"cv-sidebar__title"}," 宋明謙 ",-1),V=t("span",null," Tod Sung ",-1),x=t("span",null," 前端工程師 ",-1),j=t("div",{class:"details"},[t("span",null," 0975871937 "),t("span",null," wlunareve@gmail.com "),t("span",null," CCU "),t("span",null," 中正大學 資訊管理學系 ")],-1);a();const q=C(((e,a,t,s,i,c)=>(n(),l("aside",A,[I,V,x,j]))));E.render=q,E.__scopeId="data-v-76dd867d";const M={name:"Article",props:{title:{type:String,required:!0},subtitle:{type:String,default:""},liContents:{type:Array,required:!0}}},N=c("data-v-1e5fa0c7");e("data-v-1e5fa0c7");const T={class:"article"},J={class:"article__title"},P={class:"article__subtitle"};a();const B=N(((e,a,c,r,d,v)=>(n(),l("div",T,[t("h2",J,o(c.title),1),t("p",P,o(c.subtitle),1),t("ul",null,[(n(!0),l(s,null,i(c.liContents,((e,a)=>(n(),l("li",{key:a},o(e),1)))),128))])]))));M.render=B,M.__scopeId="data-v-1e5fa0c7";const D={name:"skill",props:{icon:{name:String,default:""},name:{name:String,required:!0},description:{type:String,required:!0},level:{type:Number,required:!0}},setup(e){const a=r(3);return{levelArray:d((()=>[...Array(a.value)]))}}},F=c("data-v-766eb07c");e("data-v-766eb07c");const H={class:"skill"},W={class:"title"},L={class:"title__name"},z={class:"skill__description"},G={class:"skill__level"};a();const O=F(((e,a,c,r,d,v)=>(n(),l("div",H,[t("div",W,[t("i",{class:["title__icon",[c.icon.source,c.icon.name]]},null,2),t("h3",L,o(c.name),1)]),t("p",z,o(c.description),1),t("div",G,[(n(!0),l(s,null,i(r.levelArray,((e,a)=>(n(),l("div",{key:a,class:["skill__level-item",{"skill__level-item--active":a<=c.level-1}]},null,2)))),128))])]))));D.render=O,D.__scopeId="data-v-766eb07c";const Q={name:"CvContent",components:{Article:M,Skill:D},setup(){const e=r(!0);return{frontEndSkills:[{name:"HTML",description:"了解 Semantic HTML",level:1,icon:{source:"fas",name:"fa-code"}},{name:"Javascript",description:"了解 Funtional Programming，能適當撰寫可複用程式碼",level:3,icon:{source:"fab",name:"fa-js"}},{name:"CSS/Scss",description:"能透過 BEM 命名元件，適當切割元件",level:2,icon:{source:"fab",name:"fa-css3"}},{name:"Vue",description:"專案經驗以 Vue2 為主，在 Side Project 使用 composition API 作為練習",level:2,icon:{source:"fab",name:"fa-vuejs"}},{name:"leaflet",description:"介接 geoJson 搭配 openStreetMap 達成台灣各地資料展現",level:2,icon:{source:"far",name:"fa-map"}},{name:"d3",description:"能將資料繪製成柱狀、線狀圖，提供資料視覺化表現",level:2,icon:{source:"fas",name:"fa-chart-line"}},{name:"Jest",description:"曾使用 jest 進行 vue 相關的單元測試",level:1,icon:{source:"fas",name:"fa-file-alt"}},{name:"NightWatch",description:"曾使用 Nightwatch 進行 E2E 測試",level:1,icon:{source:"fas",name:"fa-file-alt"}}],toolSkills:[{name:"Git",description:"具備基本指令操作能力，能應用 semantic commit 進行版控，了解 github flow",level:2,icon:{source:"fas",name:"fa-code-branch"}},{name:"Webpack",description:"具有前端網站 config 調整經驗，能獨立完成版本更新工作",level:2,icon:{source:"far",name:"fa-file-archive"}},{name:"Vite",description:"將團隊函式庫組件轉換至 vite ，增進團隊工作效率",level:1,icon:{source:"far",name:"fa-file-archive"}},{name:"Docker",description:"具備基本指令操作能力 能夠撰寫 compose",level:2,icon:{source:"fab",name:"fa-docker"}}],isShowSkillExplanation:e,showSkillExplanation:()=>{e.value=!e.value}}}},U=c("data-v-4793126e");e("data-v-4793126e");const K={id:"cv-content",class:"cv-content"},R=m('<section class="cv-content__section" data-v-4793126e><h1 class="cv-content__title profile" data-v-4793126e> Profile </h1><p class="profile__content" data-v-4793126e> 我是 ToD，是一個務實的人，在職場工作上我認為是一個互利共生的關係，可以獨立解決問題，也能與夥伴良好合作， </p><p data-v-4793126e> 平常研究的手段是閱讀技術文章、雜誌，目前想要努力朝向分享前進。 </p><p class="profile__content" data-v-4793126e> 對做出具實用性的產品有高度興趣，正積極於寫出可複用，少技術債的程式碼， </p><p class="profile__content" data-v-4793126e> 目前正尋找有良好開發流程的公司，希望能找到志同道合的夥伴，同時我付出的是自己面對問題、解決問題，善於學習的能力。 </p></section>',1),X={class:"cv-content__section"},Y={class:"cv-content__title"},Z=u(" Skill "),$={key:0,class:"skill__explanation"},ee={class:"skill__level"},ae=t("span",null,"了解: 閱讀過文章，積極應用中",-1),ne=t("span",null,"具備: 擁有獨立完成作業的經驗",-1),le=t("span",null,"熟悉: 大體上能快速找到問題，甚至指導別人完成工作",-1),te=t("h2",{class:"skill__title"}," Front End ",-1),se={class:"skill__wrapper"},ie=t("h2",{class:"skill__title"}," Tool ",-1),ce={class:"skill__wrapper"},oe={class:"cv-content__section article"},re=t("h1",{class:"cv-content__title"}," Employment History ",-1),de={class:"cv-content__section article"},ve=t("h1",{class:"cv-content__title"}," Portfolio ",-1);a();const pe=U(((e,a,c,o,r,d)=>{const m=v("Skill"),u=v("Article");return n(),l("div",K,[R,t("section",X,[t("h1",Y,[Z,t("i",{class:"icon fas fa-exclamation-circle",onClick:a[1]||(a[1]=(...e)=>o.showSkillExplanation&&o.showSkillExplanation(...e))})]),o.isShowSkillExplanation?(n(),l("div",$,[t("div",ee,[(n(!0),l(s,null,i([...Array(3)],((e,a)=>(n(),l("div",{key:a,class:"skill__level-item skill__level-item--active"})))),128))]),ae,ne,le])):p("",!0),te,t("div",se,[(n(!0),l(s,null,i(o.frontEndSkills,(e=>(n(),l(m,{key:e.name,name:e.name,description:e.description,level:e.level,icon:e.icon},null,8,["name","description","level","icon"])))),128))]),ie,t("div",ce,[(n(!0),l(s,null,i(o.toolSkills,(e=>(n(),l(m,{key:e.name,name:e.name,description:e.description,level:e.level,icon:e.icon},null,8,["name","description","level","icon"])))),128))])]),t("section",oe,[re,t(u,{title:"資拓宏宇國際股份有限公司-氣象部門","li-contents":["積極參與技術討論，共同增進團隊開發能力，平常會讀技術文章寫成指南或是 best practice 分享給小組","經常進行技術嘗試，推動技術更迭， 透過調整 webpack 或是嘗試 vite、stylelint、jest 來幫助小組快速開發","做為新人 mentor，幫助上手工作"]})]),t("section",de,[ve,t(u,{title:"Qplus 劇烈天氣監測系統",subtitle:"系統根據不同的使用單位，提供各式各樣不同的客製化氣象變數產品 JS + Vue + SCSS + BEM + Webpack","li-contents":["在職期間主動重構前端程式碼，提高客製化的擴充性","重構同時並行開發數個地圖產品，確保不延誤預期的客製化需求","利用 Vue I18n 開發中英文版的切換功能","在職期間主動學習 SCSS 及 BEM 修改全新設計頁面"]}),t(u,{title:"Open Data 氣象資料開發平臺",subtitle:"氣象局 open data api 的資料展示介紹網站 Vue + Node JS","li-contents":["承接他組開發網頁，處理日常網頁前後端的維護工作","本身擁有基本的後端經驗，能與後端工程師適當溝通"]})])])}));Q.render=pe,Q.__scopeId="data-v-4793126e";const me={name:"CV",components:{Sidebar:E,Content:Q}},ue=c("data-v-b6e8692e");e("data-v-b6e8692e");const _e={class:"cv"};a();const fe=ue(((e,a,s,i,c,o)=>{const r=v("Sidebar"),d=v("Content");return n(),l("div",_e,[t(r),t(d)])}));me.render=fe,me.__scopeId="data-v-b6e8692e";const ke={name:"main",components:{Navbar:k,CV:me},setup(){_((()=>{})),f((()=>{console.log("unmounted!")}))}},be=c("data-v-1aa6c94c");e("data-v-1aa6c94c");const Se={class:"wrapper"},he={class:"content"};a();const ge=be(((e,a,s,i,c,o)=>{const r=v("Navbar"),d=v("CV");return n(),l("main",Se,[t(r),t("div",he,[t(d)])])}));ke.render=ge,ke.__scopeId="data-v-1aa6c94c";export default ke;

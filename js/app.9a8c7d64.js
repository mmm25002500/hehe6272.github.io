(function(){"use strict";var n={9419:function(n,e,t){var a=t(9242),o=t(3396),r=t(7139);const i={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},c=(0,o._)("div",{class:"offcanvas-header"},[(0,o._)("h5",{class:"offcanvas-title",id:"offcanvasExampleLabel"},"玟珄官方網站"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),l={class:"offcanvas-body"},u=(0,o._)("div",null," 大家好，我是玟珄，大家可以叫我小慶 ",-1),s=["href"],f={class:"navbar navbar-expand-lg bg-light"},d={class:"container-fluid"},p={class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"},m=(0,o._)("a",{class:"navbar-brand",href:"#"},"玟珄個人網站",-1),b=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h={class:"navbar-nav me-auto mb-2 mb-lg-0"},g={class:"text-dark"},y={class:"container"};function k(n,e,t,a,k,w){const _=(0,o.up)("font-awesome-icon"),x=(0,o.up)("router-link"),O=(0,o.up)("router-view"),j=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",i,[c,(0,o._)("div",l,[u,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.data2,((n,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o._)("a",{type:"button",href:n.link,class:(0,r.C_)(["d-flex p-2 btn","btn-outline-"+n.color])},(0,r.zw)(n.name),11,s)])))),128))])]),(0,o._)("nav",f,[(0,o._)("div",d,[(0,o._)("button",p,[(0,o.Wm)(_,{icon:["fas","angles-right"],class:"icon alt"})]),m,b,(0,o._)("div",v,[(0,o._)("ul",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.data,((n,e)=>((0,o.wg)(),(0,o.iD)("li",{class:"nav-item",key:e},[n.name?((0,o.wg)(),(0,o.j4)(x,{key:0,class:"nav-link",to:n.link},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o.Wm)(_,{icon:n.icon,class:"icon alt",style:{color:"#000000"}},null,8,["icon"]),(0,o.Uk)(" "+(0,r.zw)(n.name),1)])])),_:2},1032,["to"])):(0,o.kq)("",!0)])))),128))])])])]),(0,o._)("div",y,[(0,o.Wm)(O)]),(0,o.Wm)(j)])}const w=(0,o._)("hr",null,null,-1),_={class:"copyright text-center"},x=(0,o._)("br",null,null,-1),O=(0,o._)("a",{class:"link-primary",href:"http://tershi.com"},"夏特稀",-1),j=(0,o._)("a",{class:"link-primary",href:"https://team.tershi.com"},"靈萌團隊",-1);function C(n,e,t,a,i,c){return(0,o.wg)(),(0,o.iD)("div",null,[w,(0,o._)("div",_,[(0,o.Uk)(" © Copyright "+(0,r.zw)((new Date).getFullYear())+". Min Xuan. ",1),x,(0,o.Uk)("技術提供: "),O,(0,o.Uk)(" 技術提供 "),j])])}var T={mounted(){}},E=t(89);const D=(0,E.Z)(T,[["render",C]]);var S=D,P={name:"App",components:{Footer:S},data(){return{data:[{name:"首頁",link:"/",icon:["fas","house-user"]},{name:"關於我",link:"/about",icon:["fas","circle-info"]},{name:"我的 YouTube",link:"/yt",icon:["fab","youtube"]},{name:"分享程式",link:"/app",icon:["fas","hammer"]},{name:"倒數",link:"/countdown",icon:["fas","stopwatch-20"]},{name:"",link:"",icon:["",""]}],data2:[{name:"Facebook",link:"",color:"primary"},{name:"YouTube",link:"",color:"danger"},{name:"Discord",link:"",color:"primary"},{name:"Line",link:"",color:"success"},{name:"Telegram",link:"",color:"primary"},{name:"Github",link:"",color:"secondary"},{name:"Gitlab",link:"",color:"secondary"},{name:"Twitter",link:"",color:"primary"}]}}};const F=(0,E.Z)(P,[["render",k]]);var Y=F,A=t(2483);const L=(0,o._)("p",null," 這是玟珄Min Xuan的網站 嗨!我是玟珄，這是我一個人自己用的網站沒有人教，沒有人幫忙，只有我一個人製作 這裡就不打擾囉!歡迎各位看看我的網站!感謝!! ",-1),M=[L];function N(n,e){return(0,o.wg)(),(0,o.iD)("div",null,M)}const U={},W=(0,E.Z)(U,[["render",N]]);var Z=W;const z=[{path:"/",name:"小慶個人網站",component:Z},{path:"/about",name:"關於我",component:()=>t.e(249).then(t.bind(t,4249))},{path:"/yt",name:"我的 YouTube",component:()=>t.e(830).then(t.bind(t,5830))},{path:"/app",name:"分享程式",component:()=>t.e(76).then(t.bind(t,9076))},{path:"/countdown",name:"倒數",component:()=>t.e(903).then(t.bind(t,7903))}],B=(0,A.p7)({history:(0,A.r5)(),scrollBehavior(){return{left:0,top:0}},routes:z});B.beforeEach(((n,e,t)=>{document.title=n.name,t()}));var G=B,X=t(3494),q=t(8539),H=t(7749),K=t(4551),I=t(8429),R=t(2026);X.vI.add(q.mRB,K.vnX,I.NCV);const V=(0,a.ri)(Y);V.use(G),V.use(R.ZP),V.component("font-awesome-icon",H.GN),V.mount("#app")}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,a,o,r){if(!a){var i=1/0;for(s=0;s<n.length;s++){a=n[s][0],o=n[s][1],r=n[s][2];for(var c=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(t.O).every((function(n){return t.O[n](a[l])}))?a.splice(l--,1):(c=!1,r<i&&(i=r));if(c){n.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[a,o,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,a){return t.f[a](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{76:"138b5ada",249:"0c66529d",830:"ccae0738",903:"1e07bda2"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="minxuan:";t.l=function(a,o,r,i){if(n[a])n[a].push(o);else{var c,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==e+r){c=f;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",e+r),c.src=a),n[a]=[o];var d=function(e,t){c.onerror=c.onload=null,clearTimeout(p);var o=n[a];if(delete n[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,a){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(t,a){o=n[e]=[t,a]}));a.push(o[2]=r);var i=t.p+t.u(e),c=new Error,l=function(a){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,o[1](c)}};t.l(i,l,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,a){var o,r,i=a[0],c=a[1],l=a[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(l)var s=l(t)}for(e&&e(a);u<i.length;u++)r=i[u],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(s)},a=self["webpackChunkminxuan"]=self["webpackChunkminxuan"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(9419)}));a=t.O(a)})();
//# sourceMappingURL=app.9a8c7d64.js.map
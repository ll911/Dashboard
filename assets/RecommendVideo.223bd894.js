import{s as e}from"./index.daee9ce5.js";import{d as s,e as t,o as a,j as i,s as l,F as n,k as o,q as d,a9 as c,u as p,p as r,h as m}from"./element-plus.12542cf9.js";const u=p();r("data-v-db1b145e");const v=l("div",{class:"tips"},"以下提供部分推荐动态壁纸选择，来源于网络CDN，有可能出现无法访问问题，你也可以手动输入自定义的网络https视频路径。",-1),g={key:0,class:"video-wrapper"},b={class:"img-wrapper"};m();var h=s({expose:[],emits:["submit"],setup(s,{emit:p}){const r=t(!1),m=t(),h=()=>{m.value.open(),r.value||(r.value=!0)},k=()=>{},f=[4,5,6,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,37,39,41,42,43,44,47,49].map((e=>({img:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${e}-test.jpg`,video:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${e}-test.webm`})));return(s,t)=>(a(),i(n,null,[l("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:h},"动态壁纸推荐"),l(c(e),{ref:m,animationMode:"",title:"动态壁纸推荐",width:"min(760px, 94vw)",height:"min(480px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:k},{default:u((()=>[v,r.value?(a(),i("div",g,[(a(!0),i(n,null,o(c(f),(e=>(a(),i("div",{class:"video",key:e.value,onClick:s=>(e=>{p("submit",e.video),m.value.close()})(e)},[l("div",b,[e.img?(a(),i("img",{key:0,src:e.img},null,8,["src"])):d("",!0)])],8,["onClick"])))),128)),(a(),i(n,null,o(4,(e=>l("div",{class:"video-fake",key:e}))),64))])):d("",!0)])),_:1},512)],64))}});h.__scopeId="data-v-db1b145e";export default h;
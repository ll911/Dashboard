import{d as e,p as t,h as s,o as r,j as a,t as n,u as o,f as p,E as c,q as i}from"./element-plus.7236bc8f.js";var d=e({name:"Unset",props:{tips:{type:String}}});const l=o();t("data-v-39099ac2");const m={class:"unset-wrapper"};s();const u=l(((e,t,s,o,p,c)=>(r(),a("div",m,n(e.tips||"🔨未配置"),1))));d.render=u,d.__scopeId="data-v-39099ac2";var f=e({name:"Iframe",components:{Unset:d},props:{element:{type:Object,required:!0},componentSetting:{type:Object,required:!0}},setup:e=>({url:p((()=>/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e.componentSetting.url)?e.componentSetting.url:"http://"+e.componentSetting.url))})});const v=o();t("data-v-3053cfee");const g={key:2,class:"editing-mask"};s();const y=v(((e,t,s,n,o,p)=>{const d=c("Unset");return r(),a("div",{class:"wrapper",style:{borderRadius:e.element.borderRadius+"px"}},[e.componentSetting.url?(r(),a("iframe",{key:0,src:e.url,style:{width:"100%",height:"100%"},frameborder:"0"},null,8,["src"])):(r(),a(d,{key:1,tips:"💫IFrame路径丢失，请进行配置"})),e.$store.state.isLock?i("",!0):(r(),a("div",g))],4)}));f.render=y,f.__scopeId="data-v-3053cfee";export default f;
var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,a=(t,a)=>{for(var i in a||(a={}))n.call(a,i)&&r(t,i,a[i]);if(e)for(var i of e(a))o.call(a,i)&&r(t,i,a[i]);return t};import{_ as i,d as p,r as c,B as s,H as l,L as d,k as u,v as S,n as m,N as w,o as f}from"./index.526a4730.js";var g=i(p({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(t){const e=c(n());function n(){const t=(new Date).getHours(),e=(new Date).getMinutes();return`${t}:${e<10?"0"+e:e}`}let o;function r(){var r;e.value=n(),o=window.setInterval((()=>{e.value=n()}),(null==(r=t.componentSetting)?void 0:r.duration)||5e3)}r(),s((()=>t.componentSetting.duration),(()=>{window.clearInterval(o),r()})),l((()=>{window.clearInterval(o)}));const a=d((()=>w(t.componentSetting.position)));return{now:e,positionCSS:a}}}),[["render",function(t,e,n,o,r,i){return f(),u("div",{class:"wrapper",style:m(a({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS))},S(t.now),5)}],["__scopeId","data-v-2db8cf8c"]]);export{g as default};

var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,i=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))c.call(t,o)&&s(e,o,t[o]);return e};import{_ as r,d as p,$ as l,r as v,G as m,H as d,L as g,k as u,n as h,x as S,f as b,v as w,P as y,U as f,C as x,R as O,N as j,o as q,z,A as P}from"./index.8e4f2f41.js";const k=e=>(z("data-v-74b017e7"),e=e(),P(),e),C=["src"],V={class:"lines"},_={class:"quote-left"},D=[k((()=>b("svg",{viewBox:"0 0 1024 1024"},[b("path",{d:"M928 512h-160v-128c0-70.6 57.4-128 128-128h16c26.6 0 48-21.4 48-48V112c0-26.6-21.4-48-48-48h-16c-176.8 0-320 143.2-320 320v480c0 53 43 96 96 96h256c53 0 96-43 96-96V608c0-53-43-96-96-96z m-576 0H192v-128c0-70.6 57.4-128 128-128h16c26.6 0 48-21.4 48-48V112c0-26.6-21.4-48-48-48h-16C143.2 64 0 207.2 0 384v480c0 53 43 96 96 96h256c53 0 96-43 96-96V608c0-53-43-96-96-96z"})],-1)))],F={class:"quote-right"},H=[k((()=>b("svg",{viewBox:"0 0 1024 1024"},[b("path",{d:"M928 64H672c-53 0-96 43-96 96v256c0 53 43 96 96 96h160v128c0 70.6-57.4 128-128 128h-16c-26.6 0-48 21.4-48 48v96c0 26.6 21.4 48 48 48h16c176.8 0 320-143.2 320-320V160c0-53-43-96-96-96z m-576 0H96C43 64 0 107 0 160v256c0 53 43 96 96 96h160v128c0 70.6-57.4 128-128 128h-16c-26.6 0-48 21.4-48 48v96c0 26.6 21.4 48 48 48h16c176.8 0 320-143.2 320-320V160c0-53-43-96-96-96z"})],-1)))];var I=r(p({props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0}},setup(e){var n;const a=e;l((e=>({"1a6c35da":x(W)})));const c=v(""),s=v(""),r=v(""),p=v(""),z=v(""),P=async()=>{try{const e=await fetch(`${O}/api/movieLines`),{name:t,img:o,img1:n,link:a,quotes:i}=await e.json();c.value=i,s.value=t,r.value=o.replace("s_ratio_poster","m"),p.value=n,z.value=a}catch{}},k=60*((null==(n=a.componentSetting)?void 0:n.duration)||5)*1e3;let I;m((()=>{P(),I=window.setInterval(P,k)})),d((()=>{window.clearInterval(I)}));const R=g((()=>j(a.componentSetting.position))),W=g((()=>a.componentSetting.themeColor));return(n,l)=>{return q(),u("div",{class:"wrapper",style:h((v=i({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px",fontFamily:e.componentSetting.fontFamily},x(R)),m={borderRadius:e.element.borderRadius+"px"},t(v,o(m))))},[a.componentSetting.showPoster?(q(),u("img",{key:0,class:"bg",src:2===a.componentSetting.posterType?p.value:r.value,style:h({filter:a.componentSetting.posterFilter})},null,12,C)):S("",!0),b("blockquote",{class:"blockquote",style:h({background:a.componentSetting.showDecoration?"":"none",maxWidth:a.componentSetting.maxWidth?a.componentSetting.maxWidth+"px":""})},[b("p",V,w(c.value),1),y(b("p",{class:"cite"},"『 "+w(s.value)+" 』",513),[[f,a.componentSetting.showCite]]),y(b("div",_,D,512),[[f,a.componentSetting.showDecoration]]),y(b("div",F,H,512),[[f,a.componentSetting.showDecoration]])],4)],4);var v,m}}}),[["__scopeId","data-v-74b017e7"]]);export{I as default};

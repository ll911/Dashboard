import{_ as a,d as e,r as l,B as s,b as i,k as t,f as r,g as u,w as n,F as v,o,K as c,P as d,U as p,l as m,x as b,v as g,R as k}from"./index.526a4730.js";const h={key:0,class:"wrapper"},y={class:"tab-title-wrapper"},w={class:"tab-container"},f={key:0,class:"text"},C={key:1,class:"text"},x={key:2,class:"item-wrapper"},$=["onClick"],j={class:"img-wrapper"},z=["src"],_={class:"tab-container"},A={key:0,class:"text"},E={key:1,class:"text"},L={key:2,class:"item-wrapper"},S=["onClick"],O={class:"img-wrapper"},I=["src"],B={class:"sub-tab-container"},D=["onClick"],H={class:"tab-container"},N={class:"item-wrapper"},P=["onClick"],R={class:"img-wrapper"},U=["src"],q={class:"load-more"},K=["loading"];var M=a(e({emits:["submit"],setup(a,{emit:e}){const M=l(!1),W=l(),F=l(1),G=l(!1),T=l(!1),J=l([]),Q=l([]),V=l([]),X=l(1),Y=[{label:"风景",value:9},{label:"4K",value:36},{label:"清新",value:15},{label:"萌宠",value:14},{label:"游戏",value:5},{label:"汽车",value:12},{label:"时尚",value:10},{label:"体育",value:16}],Z=l(9),aa=async(a=!1)=>{a&&(V.value=[],X.value=1);try{G.value=!0,T.value=!1;const a=await fetch(`${k}/api/360img?cid=${Z.value}&page=${X.value}&pageSize=18`),{errno:e,data:l}=await a.json();if(0!==e)throw new Error("Api server error");V.value=[...V.value,...l.list.map((a=>({url:a.url,thumb:`${a.url}?x-oss-process=image/resize,w_300/quality,q_90`})))]}catch(e){T.value=!0,console.error(e)}finally{G.value=!1}},ea=()=>{W.value.open(),M.value||(M.value=!0)};s((()=>[M.value,F.value,Z.value]),(()=>{1===F.value?J.value&&0!==J.value.length||(async()=>{try{G.value=!0,T.value=!1;const a=encodeURIComponent("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN"),e=await fetch(`${k}/api/transfer?target=${a}&noHeaders=1`,{headers:{"content-type":"application/json; charset=utf-8"}}),{images:l}=await e.json();if(!(l&&l.length>0))throw new Error("Api server error");J.value=l.map((a=>({url:`https://cn.bing.com/${a.url}`,thumb:`https://cn.bing.com/${a.urlbase}_320x240.jpg&rf=LaDigue_1920x1080.jpg&pid=hp`})))}catch(a){T.value=!0,console.error(a)}finally{G.value=!1}})():2===F.value?Q.value&&0!==Q.value.length||(async()=>{try{G.value=!0,T.value=!1;const a=await fetch(`${k}/photos?pageSize=18`),{errCode:e,data:l}=await a.json();if(200!==e)throw new Error("Api server error");Q.value=l.list.map((a=>({url:a.urls.raw,thumb:a.urls.thumb})))}catch(a){T.value=!0,console.error(a)}finally{G.value=!1}})():3===F.value&&aa(!0)}));const la=()=>{X.value++,aa()},sa=()=>{},ia=a=>{e("submit",a),W.value.close()};return(a,e)=>{const l=i("animation-dialog");return o(),t(v,null,[r("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:ea},"今日壁纸推荐"),u(l,{ref:(a,e)=>{e.dialog=a,W.value=a},animationMode:"",customWrapperClass:"backdrop-blur recommend-picture",title:"今日壁纸推荐",width:"min(760px, 94vw)",height:"min(520px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:sa},{default:n((()=>[M.value?(o(),t("div",h,[r("div",y,[r("div",{class:c(["title",1===F.value&&"active"]),onClick:e[0]||(e[0]=a=>F.value=1)},"必应壁纸",2),r("div",{class:c(["title",3===F.value&&"active"]),onClick:e[1]||(e[1]=a=>F.value=3)},"360壁纸",2),r("div",{class:c(["title",2===F.value&&"active"]),onClick:e[2]||(e[2]=a=>F.value=2)},"UNSPLAH",2)]),d(r("div",w,[G.value?(o(),t("div",f,"Loading...")):T.value?(o(),t("div",C,"Something Error...")):(o(),t("div",x,[(o(!0),t(v,null,m(J.value,(a=>(o(),t("div",{class:"item",key:a.url,onClick:e=>ia(a.url)},[r("div",j,[a.url?(o(),t("img",{key:0,src:a.thumb,loading:"lazy"},null,8,z)):b("",!0)])],8,$)))),128)),(o(),t(v,null,m(4,(a=>r("div",{class:"item-fake",key:a}))),64))]))],512),[[p,1===F.value]]),d(r("div",_,[G.value?(o(),t("div",A,"Loading...")):T.value?(o(),t("div",E,"Something Error...")):(o(),t("div",L,[(o(!0),t(v,null,m(Q.value,(a=>(o(),t("div",{class:"item",key:a.url,onClick:e=>ia(a.url)},[r("div",O,[a.url?(o(),t("img",{key:0,src:a.thumb,loading:"lazy"},null,8,I)):b("",!0)])],8,S)))),128)),(o(),t(v,null,m(4,(a=>r("div",{class:"item-fake",key:a}))),64))]))],512),[[p,2===F.value]]),d(r("div",B,[(o(),t(v,null,m(Y,(a=>r("div",{class:c(["sub-tab-title",Z.value===a.value&&"active"]),key:a.value,onClick:e=>Z.value=a.value},g(a.label),11,D))),64))],512),[[p,3===F.value]]),d(r("div",H,[r("div",N,[(o(!0),t(v,null,m(V.value,(a=>(o(),t("div",{class:"item",key:a.url,onClick:e=>ia(a.url)},[r("div",R,[a.url?(o(),t("img",{key:0,src:a.thumb,loading:"lazy"},null,8,U)):b("",!0)])],8,P)))),128)),(o(),t(v,null,m(4,(a=>r("div",{class:"item-fake",key:a}))),64))]),r("div",q,[r("button",{class:"btn btn-warning",loading:G.value,onClick:la},g(G.value?"LOADING...":"LOAD MORE"),9,K)])],512),[[p,3===F.value]])])):b("",!0)])),_:1},512)],64)}}}),[["__scopeId","data-v-25183140"]]);export{M as default};

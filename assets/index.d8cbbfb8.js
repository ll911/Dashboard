import{t,a as e,_ as n,I as r,r as s,c as i,i as o,p as a,k as c,n as l,m as u,S as d,s as p,v as f,N as h,O as m,w as v,Q as g}from"./index.f8219568.js";import"./index.f4d84639.js";import"./color.556e4bcb.js";const y=t=>Object.prototype.hasOwnProperty.call(t,"origin");class b extends Array{findThenRun(t,e){const n=this.findIndex((e=>y(e)&&e.origin===t));return n<0||e(n),this}configure(t,e){return this.findThenRun(t,(n=>{this.splice(n,1,t(e))}))}replace(t,e){return this.findThenRun(t,(t=>{this.splice(t,1,e)}))}remove(t){return this.findThenRun(t,(t=>{this.splice(t,1)}))}headless(){return this.filter(y).forEach((t=>{this.configure(t.origin,{headless:!0})})),this}static create(t){return new b(...t)}}const j=h=>{const m=(t=>{const e=n=>{const r=t(n);return r.origin=e,r};return e})((m=>()=>v=>n(void 0,void 0,void 0,(function*(){const g=((n,r)=>{try{const e=n.get(t);return{getClassName:(s=null==r?void 0:r.className,(t,...e)=>{var n;const r=null!==(n=null==s?void 0:s(t))&&void 0!==n?n:e;return Array.isArray(r)?r.filter((t=>t)).join(" "):r}),getStyle:t=>(null==r?void 0:r.headless)?"":t(e),themeTool:e}}catch(i){throw e()}var s})(v,m),y=h(g,m);if(yield((t,e,l,u)=>n(void 0,void 0,void 0,(function*(){if(yield t.wait(r),e.remarkPlugins){const n=e.remarkPlugins(t);t.update(s,(t=>[...t,...n]))}const n=yield l();if(e.commands&&e.commands(n,t).forEach((([e,n])=>{t.get(i).create(e,n)})),e.inputRules){const r=e.inputRules(n,t);t.update(o,(t=>[...t,...r]))}if(e.shortcuts){const n=(t,e)=>{var n,r;return null!==(r=null===(n=null==u?void 0:u.keymap)||void 0===n?void 0:n[t])&&void 0!==r?r:e},r=Object.entries(e.shortcuts).flatMap((([e,[r,s,o]])=>{const a=()=>t.get(i).call(r,o),c=n(e,s);return Array.isArray(c)?c.map((t=>({key:t,runner:a}))):{key:c,runner:a}})).map((t=>[t.key,t.runner]));t.update(a,(t=>t.concat(c(Object.fromEntries(r)))))}if(e.prosePlugins){const r=e.prosePlugins(n,t);t.update(a,(t=>[...t,...r]))}})))(v,y,(()=>n(void 0,void 0,void 0,(function*(){let t={},e={};if(y.schema){const n=y.schema(v);if(n.node){t=n.node;const e=Object.entries(n.node);v.update(l,(t=>[...t,...e]))}if(n.mark){e=n.mark;const t=Object.entries(n.mark);v.update(u,(e=>[...e,...t]))}}yield v.wait(d);const n=v.get(p),r=Object.keys(t).map((t=>[t,n.nodes[t]])),s=Object.keys(e).map((t=>[t,n.marks[t]]));return Object.fromEntries([...r,...s])}))),m),y.view){const t=y.view(v);v.update(f,(e=>[...e,...Object.entries(t)]))}}))));return((t,e,n)=>{const r=e;return r.extend=e=>n(((...n)=>e(t(...n),...n))),r})(h,m,j)},k=t=>{if(!t)return!1;if(Array.isArray(t))return!(t.length>1)&&k(t[0]);const e=t.content;return e?k(e):"text"===t.type},O=j((()=>({prosePlugins:(t,e)=>{const n=e.get(p),r=e.get(h),s=e.get(m);return[new v({props:{handlePaste:(t,e)=>{var n,s;const i=null===(s=(n=t.props).editable)||void 0===s?void 0:s.call(n,t.state),{clipboardData:o}=e;if(!i||!o)return!1;const a=o.getData("text/plain");if(o.getData("text/html").length>0)return!1;const c=r(a);if(!c||"string"==typeof c)return!1;const l=t.state.selection.content();return t.dispatch(t.state.tr.replaceSelection(new g(c.content,l.openStart,l.openEnd))),!0},clipboardTextSerializer:t=>{if(k(t.content.toJSON()))return t.content.textBetween(0,t.content.size,"\n\n");const e=n.topNodeType.createAndFill(void 0,t.content);if(!e)return"";return s(e)}}})]}}))),w=b.create([O()]);export{w as clipboard,O as clipboardPlugin};

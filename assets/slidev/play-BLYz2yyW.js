const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-VkRpXl1V.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Dv9jjKnb.js","assets/modules/vue-BrSDBL4g.js","assets/modules/shiki-CUGqZuEH.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-mqZe8q7C.js","assets/index-DbkjrjxU.js","assets/index-gmroGJa8.css","assets/SlideWrapper-Koc67ERq.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-B3fBbIFI.js","assets/slidev/shortcuts-t-koLHf0.js","assets/slidev/context-SI9mYj99.js","assets/modules/unplugin-icons-D414PMlC.js","assets/shortcuts-BqC-late.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as B,ao as N,d as h,ad as T,b as v,o as a,ap as H,f as g,i as d,C as e,g as i,j as L,n as E,an as D,w as M,ac as A,Q as w,F as z,e as _,k as F,r as O}from"../modules/vue-BrSDBL4g.js";import{c as U,a as W}from"./SlideWrapper-mqZe8q7C.js";import{q as j,v as x,a as I,w as G,x as V,y as C,d as $,z as q,j as S,A as m,B as k,D as K}from"../index-DbkjrjxU.js";import{c as Q,G as X,d as Y,u as J,r as Z,a as ee,o as te,b as oe,S as se}from"./shortcuts-t-koLHf0.js";import{b as ae}from"../modules/unplugin-icons-D414PMlC.js";import"../modules/shiki-CUGqZuEH.js";import"./context-SI9mYj99.js";import"./IconButton.vue_vue_type_script_setup_true_lang-B3fBbIFI.js";const ne=2e3;function le(f){const n=b(()=>f.value&&j.value);function r(){document.body.style.cursor="none"}function o(){document.body.style.cursor=""}let t=null;B(n,u=>{u||o()}),N(document.body,["pointermove","pointerdown"],()=>{o(),t&&clearTimeout(t),n.value&&(t=setTimeout(r,ne))},{passive:!0})}const ie="/frontend-tdd/assets/logo-BYkHSa_O.png",re={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ue=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:n}){const r=f,t=T(r,"modelValue",n);function u(){t.value=!1}return(p,s)=>(a(),v(H,null,[e(t)?(a(),g("div",re,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[L(p.$slots,"default")],2)])):d("v-if",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],me=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:n}){const t=T(f,"modelValue",n),u=b(()=>typeof x.info=="string");return(p,s)=>(a(),v(ue,{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=c=>D(t)?t.value=c:null),class:"px-6 py-4"},{default:M(()=>[i("div",de,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ce)):d("v-if",!0),s[1]||(s[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ie,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),A("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),fe=h({__name:"Controls",setup(f){const{isEmbedded:n}=I(),r=!x.drawings.presenterOnly&&!n.value,o=w();r&&G(()=>import("./DrawingControls-VkRpXl1V.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(p=>o.value=p.default);const t=w(),u=w();return(p,s)=>(a(),g(z,null,[o.value?(a(),v(e(o),{key:0})):d("v-if",!0),_(Q),_(X),t.value?(a(),v(e(t),{key:1})):d("v-if",!0),u.value?(a(),v(e(u),{key:2,modelValue:e(V),"onUpdate:modelValue":s[0]||(s[0]=c=>D(V)?V.value=c:null)},null,8,["modelValue"])):d("v-if",!0),e(x).info?(a(),v(me,{key:3,modelValue:e(C),"onUpdate:modelValue":s[1]||(s[1]=c=>D(C)?C.value=c:null)},null,8,["modelValue"])):d("v-if",!0),_(Y)],64))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ve=h({__name:"PresenterMouse",setup(f){return(n,r)=>{const o=ae;return e($).cursor?(a(),g("div",pe,[_(o,{class:"absolute stroke-white dark:stroke-black",style:F({left:`${e($).cursor.x}%`,top:`${e($).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),Ve=h({__name:"play",setup(f){const{next:n,prev:r,isPrintMode:o,isPresenter:t}=I(),{isDrawing:u}=U(),p=O();function s(l){var y;S.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():r())}J(p),Z(),ee(),le(b(()=>!t.value&&!o.value));const c=b(()=>q.value||S.value),R=w(),P=b(()=>{let l="";return m.value.brightness!==k.brightness&&(l+=`brightness(${m.value.brightness}) `),m.value.contrast!==k.contrast&&(l+=`contrast(${m.value.contrast}) `),m.value.sepia!==k.sepia&&(l+=`sepia(${m.value.sepia}) `),m.value.hueRotate!==k.hueRotate&&(l+=`hue-rotate(${m.value.hueRotate}deg) `),m.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(z,null,[i("div",{id:"page-root",ref_key:"root",ref:p,class:E(["grid",e(K)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(W,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":P.value,onPointerdown:s,onContextmenu:e(te)},{default:M(()=>[_(se,{"render-context":"slide"}),_(ve)]),controls:M(()=>[e(o)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[c.value?"!opacity-100 right-0":"opacity-0 p-2",e(u)?"pointer-events-none":""]])},[_(oe,{persist:c.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),R.value&&e(S)?(a(),v(e(R),{key:0,resize:!0})):d("v-if",!0)],2),e(o)?d("v-if",!0):(a(),v(fe,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{Ve as default};

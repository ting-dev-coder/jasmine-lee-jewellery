import{m as me,p as W,q as D,s as X,n as ve,t as j,z as M,u as ee,y as fe,g as Y,r as F,a as h,w as N,h as b,W as ge,a8 as ye,c as G,a1 as he,o as se,b as ce,a6 as te,a9 as pe,a4 as xe,T as ne,J as K,M as O,L,K as m,I as oe,Q as le,R as ae,U as Q,V as be}from"./index-Don8tKsS.js";import{g as re,s as ie}from"./touch-BjYP5sR0.js";import{c as Se}from"./selection-DTwVqkwe.js";import{u as qe}from"./use-render-cache-DLxPkVnQ.js";import{u as Ce}from"./use-timeout-_7QwrayX.js";import{f as _e,h as Z,i as Pe,c as we,b as de,u as Ae,d as $e,Q as ke}from"./use-router-link-B9ZOjxP6.js";import{Q as z}from"./QBtn-B_aiAu9Y.js";import{u as Ie,a as Ve}from"./use-dark-C_m8O7rr.js";import{f as Le,j as Te,k as Be}from"./use-key-composition-DMCMRv2D.js";import{b as He}from"./format-BOf40pHW.js";import{a as Ee,Q as J}from"./QForm-CMgTNbMf.js";import{Q as Me}from"./QPage-BxSvTZ1x.js";import{_ as Fe}from"./Banner-B8gXe0e1.js";import{_ as Ne}from"./BaseCard-C-Ee5Xpo.js";import{C as De}from"./customWork-DJct0cAG.js";import"./use-id-BdTqFMCb.js";import"./QCard-BlUr2c-Y.js";function Qe(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,s)=>{const v=parseFloat(d);v&&(r[s]=v)}),r}const Re=me({name:"touch-swipe",beforeMount(e,{value:r,arg:d,modifiers:s}){if(s.mouse!==!0&&D.has.touch!==!0)return;const v=s.mouseCapture===!0?"Capture":"",t={handler:r,sensitivity:Qe(d),direction:re(s),noop:ve,mouseStart(n){ie(n,t)&&fe(n)&&(j(t,"temp",[[document,"mousemove","move",`notPassive${v}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(n,!0))},touchStart(n){if(ie(n,t)){const o=n.target;j(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","notPassiveCapture"],[o,"touchend","end","notPassiveCapture"]]),t.start(n)}},start(n,o){D.is.firefox===!0&&X(e,!0);const c=ee(n);t.event={x:c.left,y:c.top,time:Date.now(),mouse:o===!0,dir:!1}},move(n){if(t.event===void 0)return;if(t.event.dir!==!1){M(n);return}const o=Date.now()-t.event.time;if(o===0)return;const c=ee(n),x=c.left-t.event.x,f=Math.abs(x),q=c.top-t.event.y,p=Math.abs(q);if(t.event.mouse!==!0){if(f<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(n);return}}else if(window.getSelection().toString()!==""){t.end(n);return}else if(f<t.sensitivity[2]&&p<t.sensitivity[2])return;const P=f/o,w=p/o;t.direction.vertical===!0&&f<p&&f<100&&w>t.sensitivity[0]&&(t.event.dir=q<0?"up":"down"),t.direction.horizontal===!0&&f>p&&p<100&&P>t.sensitivity[0]&&(t.event.dir=x<0?"left":"right"),t.direction.up===!0&&f<p&&q<0&&f<100&&w>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&f<p&&q>0&&f<100&&w>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&f>p&&x<0&&p<100&&P>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&f>p&&x>0&&p<100&&P>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(M(n),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Se(),t.styleCleanup=T=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const k=()=>{document.body.classList.remove("no-pointer-events--children")};T===!0?setTimeout(k,50):k()}),t.handler({evt:n,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:o,distance:{x:f,y:p}})):t.end(n)},end(n){t.event!==void 0&&(W(t,"temp"),D.is.firefox===!0&&X(e,!1),t.styleCleanup?.(!0),n!==void 0&&t.event.dir!==!1&&M(n),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const n=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}D.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const d=e.__qtouchswipe;d!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&d.end(),d.handler=r.value),d.direction=re(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(W(r,"main"),W(r,"temp"),D.is.firefox===!0&&X(e,!1),r.styleCleanup?.(),delete e.__qtouchswipe)}}),ze={name:{required:!0},disable:Boolean},ue={setup(e,{slots:r}){return()=>b("div",{class:"q-panel scroll",role:"tabpanel"},Z(r.default))}},Ue={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},je=["update:modelValue","beforeTransition","transition"];function Ke(){const{props:e,emit:r,proxy:d}=Y(),{getCache:s}=qe(),{registerTimeout:v}=Ce();let t,n;const o=F(null),c={value:null};function x(i){const y=e.vertical===!0?"up":"left";a((d.$q.lang.rtl===!0?-1:1)*(i.direction===y?1:-1))}const f=h(()=>[[Re,x,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),q=h(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=h(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),P=h(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=h(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),T=h(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=h(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);N(()=>e.modelValue,(i,y)=>{const I=l(i)===!0?S(i):-1;n!==!0&&_(I===-1?0:I<S(y)?-1:1),c.value!==I&&(c.value=I,r("beforeTransition",i,y),v(()=>{r("transition",i,y)},e.transitionDuration))});function H(){a(1)}function E(){a(-1)}function u(i){r("update:modelValue",i)}function l(i){return i!=null&&i!==""}function S(i){return t.findIndex(y=>y.props.name===i&&y.props.disable!==""&&y.props.disable!==!0)}function A(){return t.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function _(i){const y=i!==0&&e.animated===!0&&c.value!==-1?"q-transition--"+(i===-1?q.value:p.value):null;o.value!==y&&(o.value=y)}function a(i,y=c.value){let I=y+i;for(;I!==-1&&I<t.length;){const U=t[I];if(U!==void 0&&U.props.disable!==""&&U.props.disable!==!0){_(i),n=!0,r("update:modelValue",U.props.name),setTimeout(()=>{n=!1});return}I+=i}e.infinite===!0&&t.length!==0&&y!==-1&&y!==t.length&&a(i,i===-1?t.length:-1)}function $(){const i=S(e.modelValue);return c.value!==i&&(c.value=i),!0}function g(){const i=l(e.modelValue)===!0&&$()&&t[c.value];return e.keepAlive===!0?[b(ye,T.value,[b(k.value===!0?s(w.value,()=>({...ue,name:w.value})):ue,{key:w.value,style:P.value},()=>i)])]:[b("div",{class:"q-panel scroll",style:P.value,key:w.value,role:"tabpanel"},[i])]}function V(){if(t.length!==0)return e.animated===!0?[b(ge,{name:o.value},g)]:g()}function B(i){return t=_e(Z(i.default,[])).filter(y=>y.props!==null&&y.props.slot===void 0&&l(y.props.name)===!0),t.length}function C(){return t}return Object.assign(d,{next:H,previous:E,goTo:u}),{panelIndex:c,panelDirectives:f,updatePanelsList:B,updatePanelIndex:$,getPanelContent:V,getEnabledPanels:A,getPanels:C,isValidPanelName:l,keepAliveProps:T,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:a,goToPanel:u,nextPanel:H,previousPanel:E}}const Oe=G({name:"QCarouselSlide",props:{...ze,imgSrc:String},setup(e,{slots:r}){const d=h(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>b("div",{class:"q-carousel__slide",style:d.value},Z(r.default))}});let R=0;const Ye={fullscreen:Boolean,noRouteFullscreenExit:Boolean},We=["update:fullscreen","fullscreen"];function Xe(){const e=Y(),{props:r,emit:d,proxy:s}=e;let v,t,n;const o=F(!1);Pe(e)===!0&&N(()=>s.$route.fullPath,()=>{r.noRouteFullscreenExit!==!0&&f()}),N(()=>r.fullscreen,q=>{o.value!==q&&c()}),N(o,q=>{d("update:fullscreen",q),d("fullscreen",q)});function c(){o.value===!0?f():x()}function x(){o.value!==!0&&(o.value=!0,n=s.$el.parentNode,n.replaceChild(t,s.$el),document.body.appendChild(s.$el),R++,R===1&&document.body.classList.add("q-body--fullscreen-mixin"),v={handler:f},te.add(v))}function f(){o.value===!0&&(v!==void 0&&(te.remove(v),v=void 0),n.replaceChild(s.$el,t),o.value=!1,R=Math.max(0,R-1),R===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return he(()=>{t=document.createElement("span")}),se(()=>{r.fullscreen===!0&&x()}),ce(f),Object.assign(s,{toggleFullscreen:c,setFullscreen:x,exitFullscreen:f}),{inFullscreen:o,toggleFullscreen:c}}const Je=["top","right","bottom","left"],Ge=["regular","flat","outline","push","unelevated"],Ze=G({name:"QCarousel",props:{...Ie,...Ue,...Ye,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ge.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Je.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...We,...je],setup(e,{slots:r}){const{proxy:{$q:d}}=Y(),s=Ve(e,d);let v=null,t;const{updatePanelsList:n,getPanelContent:o,panelDirectives:c,goToPanel:x,previousPanel:f,nextPanel:q,getEnabledPanels:p,panelIndex:P}=Ke(),{inFullscreen:w}=Xe(),T=h(()=>w.value!==!0&&e.height!==void 0?{height:e.height}:{}),k=h(()=>e.vertical===!0?"vertical":"horizontal"),H=h(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),E=h(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(w.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${k.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${H.value}`:"")),u=h(()=>{const g=[e.prevIcon||d.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||d.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&d.lang.rtl===!0?g.reverse():g}),l=h(()=>e.navigationIcon||d.iconSet.carousel.navigationIcon),S=h(()=>e.navigationActiveIcon||l.value),A=h(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));N(()=>e.modelValue,()=>{e.autoplay&&_()}),N(()=>e.autoplay,g=>{g?_():v!==null&&(clearTimeout(v),v=null)});function _(){const g=pe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,g>=0?q():f()},g)}se(()=>{e.autoplay&&_()}),ce(()=>{v!==null&&clearTimeout(v)});function a(g,V){return b("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${H.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[b("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(V))])}function $(){const g=[];if(e.navigation===!0){const V=r["navigation-icon"]!==void 0?r["navigation-icon"]:C=>b(z,{key:"nav"+C.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${C.active===!0?"":"in"}active`,...C.btnProps,onClick:C.onClick}),B=t-1;g.push(a("buttons",(C,i)=>{const y=C.props.name,I=P.value===i;return V({index:i,maxIndex:B,name:y,active:I,btnProps:{icon:I===!0?S.value:l.value,size:"sm",...A.value},onClick:()=>{x(y)}})}))}else if(e.thumbnails===!0){const V=e.controlColor!==void 0?` text-${e.controlColor}`:"";g.push(a("thumbnails",B=>{const C=B.props;return b("img",{key:"tmb#"+C.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${C.name===e.modelValue?"":"in"}active`+V,src:C.imgSrc||C["img-src"],onClick:()=>{x(C.name)}})}))}return e.arrows===!0&&P.value>=0&&((e.infinite===!0||P.value>0)&&g.push(b("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${k.value} absolute flex flex-center`},[b(z,{icon:u.value[0],...A.value,onClick:f})])),(e.infinite===!0||P.value<t-1)&&g.push(b("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${k.value} absolute flex flex-center`},[b(z,{icon:u.value[1],...A.value,onClick:q})]))),de(r.control,g)}return()=>(t=n(r),b("div",{class:E.value,style:T.value},[we("div",{class:"q-carousel__slides-container"},o(),"sl-cont",e.swipeable,()=>c.value)].concat($())))}}),et=G({name:"QRating",props:{...Ae,...Le,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:r,emit:d}){const{proxy:{$q:s}}=Y(),v=$e(e),t=Te(e),n=Be(t),o=F(0);let c={};const x=h(()=>e.readonly!==!0&&e.disable!==!0),f=h(()=>`q-rating row inline items-center q-rating--${x.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),q=h(()=>{const u=Array.isArray(e.icon)===!0?e.icon.length:0,l=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,S=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,A=Array.isArray(e.color)===!0?e.color.length:0,_=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,a=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:u,icon:u>0?e.icon[u-1]:e.icon,selIconLen:l,selIcon:l>0?e.iconSelected[l-1]:e.iconSelected,halfIconLen:S,halfIcon:S>0?e.iconHalf[l-1]:e.iconHalf,colorLen:A,color:A>0?e.color[A-1]:e.color,selColorLen:_,selColor:_>0?e.colorSelected[_-1]:e.colorSelected,halfColorLen:a,halfColor:a>0?e.colorHalf[a-1]:e.colorHalf}}),p=h(()=>{if(typeof e.iconAriaLabel=="string"){const u=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return l=>`${u}${l}`}if(Array.isArray(e.iconAriaLabel)===!0){const u=e.iconAriaLabel.length;if(u>0)return l=>e.iconAriaLabel[Math.min(l,u)-1]}return(u,l)=>`${l} ${u}`}),P=h(()=>{const u=[],l=q.value,S=Math.ceil(e.modelValue),A=x.value===!0?0:null,_=e.iconHalf===void 0||S===e.modelValue?-1:S;for(let a=1;a<=e.max;a++){const $=o.value===0&&e.modelValue>=a||o.value>0&&o.value>=a,g=_===a&&o.value<a,V=o.value>0&&(g===!0?S:e.modelValue)>=a&&o.value<a,B=g===!0?a<=l.halfColorLen?e.colorHalf[a-1]:l.halfColor:l.selColor!==void 0&&$===!0?a<=l.selColorLen?e.colorSelected[a-1]:l.selColor:a<=l.colorLen?e.color[a-1]:l.color,C=(g===!0?a<=l.halfIconLen?e.iconHalf[a-1]:l.halfIcon:l.selIcon!==void 0&&($===!0||V===!0)?a<=l.selIconLen?e.iconSelected[a-1]:l.selIcon:a<=l.iconLen?e.icon[a-1]:l.icon)||s.iconSet.rating.icon;u.push({name:(g===!0?a<=l.halfIconLen?e.iconHalf[a-1]:l.halfIcon:l.selIcon!==void 0&&($===!0||V===!0)?a<=l.selIconLen?e.iconSelected[a-1]:l.selIcon:a<=l.iconLen?e.icon[a-1]:l.icon)||s.iconSet.rating.icon,attrs:{tabindex:A,role:"radio","aria-checked":e.modelValue===a?"true":"false","aria-label":p.value(a,C)},iconClass:"q-rating__icon"+($===!0||g===!0?" q-rating__icon--active":"")+(V===!0?" q-rating__icon--exselected":"")+(o.value===a?" q-rating__icon--hovered":"")+(B!==void 0?` text-${B}`:"")})}return u}),w=h(()=>{const u={role:"radiogroup"};return e.disable===!0&&(u["aria-disabled"]="true"),e.readonly===!0&&(u["aria-readonly"]="true"),u});function T(u){if(x.value===!0){const l=He(parseInt(u,10),1,parseInt(e.max,10)),S=e.noReset!==!0&&e.modelValue===l?0:l;S!==e.modelValue&&d("update:modelValue",S),o.value=0}}function k(u){x.value===!0&&(o.value=u)}function H(u,l){switch(u.keyCode){case 13:case 32:return T(l),M(u);case 37:case 40:return c[`rt${l-1}`]&&c[`rt${l-1}`].focus(),M(u);case 39:case 38:return c[`rt${l+1}`]&&c[`rt${l+1}`].focus(),M(u)}}function E(){o.value=0}return xe(()=>{c={}}),()=>{const u=[];return P.value.forEach(({iconClass:l,name:S,attrs:A},_)=>{const a=_+1;u.push(b("div",{key:a,ref:$=>{c[`rt${a}`]=$},class:"q-rating__icon-container flex flex-center",...A,onClick(){T(a)},onMouseover(){k(a)},onMouseout:E,onFocus(){k(a)},onBlur:E,onKeyup($){H($,a)}},de(r[`tip-${a}`],[b(ke,{class:l,name:S})])))}),e.name!==void 0&&e.disable!==!0&&n(u,"push"),b("div",{class:f.value,style:v.value,...w.value},u)}}}),tt={class:"q-pt-xl container items-center row q-col-md-gutter-lg"},nt={class:"col-12 col-md-6 q-px-md q-px-md-none q-gutter-y-md"},ot={class:"q-py-xl container row q-col-md-gutter-md q-px-md q-px-md-none"},lt={class:"q-pt-xl q-pt-lg-none col-12 col-lg-6"},at={class:"q-py-lg"},rt={class:"container q-pb-xl"},it={class:"row q-col-gutter-md"},Pt={__name:"Product",setup(e){const r=F(0),d=F(0),s=F({name:"",email:"",message:""}),v=["gemstone1.jpg","gemstone2.jpg","gemstone3.jpg"];return(t,n)=>(K(),ne(Me,null,{default:O(()=>[L(Fe,{breadcrumbs:["Home","Collections","Silver Collection","Sterling Silver Hoop Earrings"]}),m("section",tt,[L(Ze,{height:"400px",class:"col-12 col-md-6",modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",navigation:"",arrows:""},{default:O(()=>[(K(),oe(le,null,ae(v,(o,c)=>L(Oe,{key:`slider-${c}`,name:c,"img-src":o},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"]),m("div",nt,[n[6]||(n[6]=m("h2",{class:"text-h3"},"Sterling Silver Hoop Earrings",-1)),n[7]||(n[7]=m("span",{class:"block text-h5"},"$150",-1)),n[8]||(n[8]=m("p",{class:"text-weight-regular text-h5"}," Elevate your style with our Sterling Silver Hoop Earrings, a perfect blend of sophistication and everyday wearability. Designed for the modern minimalist, these hoops are handcrafted from high-quality sterling silver, offering a sleek and polished finish that complements any look. ",-1)),L(z,{unelevated:"",color:"primary","text-color":"black"},{default:O(()=>n[5]||(n[5]=[Q("add to cart")])),_:1})])]),m("section",ot,[n[13]||(n[13]=m("div",{class:"col-12 col-lg-6 text-h5 text-weight-regular"},[m("h3",{class:"q-pb-md text-h4"},"Product Details"),m("p",null,[m("strong",null,"Material:"),Q(" 925 Sterling Silver")]),m("p",null,[m("strong",null,"Size Options: "),Q(" [Small – 20mm, Medium – 30mm, Large – 50mm]r")]),m("p",null,[m("strong",null,"Finish:"),Q(" High Polish / Matte / Textured ")]),m("p",null,[m("strong",null,"Closure:"),Q("Secure Latch Back / Hinged Snap")]),m("p",null,"Hypoallergenic & Tarnish-Resistant")],-1)),m("div",lt,[n[10]||(n[10]=m("h3",{class:"text-h4"},"Reviews",-1)),n[11]||(n[11]=m("p",{class:"q-py-md"},"There are no reviews yet.",-1)),n[12]||(n[12]=m("strong",null,'Be the first to review "Sterling Silver Hoop Earrings"',-1)),m("div",at,[n[9]||(n[9]=m("p",null,"Your Review",-1)),L(et,{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=o=>d.value=o),size:"2em",max:5,color:"primary"},null,8,["modelValue"])]),L(Ee,{class:"q-px-md q-px-lg-none q-col-gutter-md"},{default:O(()=>[L(J,{filled:"","bg-color":"primary",modelValue:s.value.name,"onUpdate:modelValue":n[2]||(n[2]=o=>s.value.name=o),label:"Your Name","lazy-rules":"","hide-bottom-space":"",rules:[o=>o&&o.length>0||"Please type name"]},null,8,["modelValue","rules"]),L(J,{filled:"","bg-color":"primary","hide-bottom-space":"",type:"email",modelValue:s.value.email,"onUpdate:modelValue":n[3]||(n[3]=o=>s.value.email=o),label:"Your Email","lazy-rules":"",rules:[o=>o!==null&&o!==""||"Please type your email"]},null,8,["modelValue","rules"]),L(J,{"bg-color":"primary",modelValue:s.value.message,"onUpdate:modelValue":n[4]||(n[4]=o=>s.value.message=o),filled:"",type:"textarea"},null,8,["modelValue"]),m("div",null,[L(z,{class:"full-width",label:"Submit",type:"submit","text-color":"black",color:"primary",unelevated:""})])]),_:1})])]),m("section",rt,[n[14]||(n[14]=m("h3",{class:"text-center q-py-lg"},"Related Products",-1)),m("div",it,[(K(!0),oe(le,null,ae(be(De),(o,c)=>(K(),ne(Ne,{class:"col-12 col-sm-6 col-md-3",key:`other-${c}`,flat:"",title:o.name,price:o.price,"img-path":"custom5.jpg"},null,8,["title","price"]))),128))])])]),_:1}))}};export{Pt as default};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{1173:(e,r,t)=>{Promise.resolve().then(t.bind(t,3193))},3193:(e,r,t)=>{"use strict";t.d(r,{default:()=>u});var s=t(8081),a=t(2149),n=t(7950),l=t.n(n),i=t(5186),c=t(7306),o=t(9651),d=t(6522),m=t(2442);let h=[{name:"Home",href:"/"},{name:"Menu",href:"/menu/"},{name:"Contact",href:"/contact/"}];function u(){let[e,r]=(0,a.useState)(!1),t=(0,o.usePathname)();return console.log(t),(0,a.useEffect)(()=>{let t=()=>{let t=window.scrollY>50;t!==e&&r(t)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[e]),(0,s.jsx)("header",{className:"w-full absolute top-0 z-20 ".concat(e?"fixed bg-black/80 backdrop-blur-sm shadow-md":"bg-transparent"),children:(0,s.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("div",{className:"w-1/4",children:e?(0,s.jsx)("span",{className:"text-xl font-bold text-white",children:"Gurkha Lounge Doncaster"}):(0,s.jsx)(l(),{href:"/",className:"flex items-center",children:(0,s.jsx)(i.default,{src:"/images/logo.png",alt:"Gurkha Lounge Logo",width:120,height:40})})}),(0,s.jsx)("nav",{className:"flex items-center justify-center w-2/4",children:(0,s.jsx)("div",{className:"hidden md:flex items-center space-x-10",children:h.map(e=>(0,s.jsx)(l(),{href:e.href,className:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,m.QP)((0,d.$)(r))}("text-base font-medium text-white hover:text-amber-300 transition-colors",t===e.href?"text-amber-300 underline":""),children:e.name},e.name))})}),(0,s.jsx)("div",{className:"w-1/4 flex justify-end",children:(0,s.jsxs)("a",{href:"tel:01302366355",className:"flex items-center gap-2 bg-amber-300 text-black font-medium px-5 py-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors",children:[(0,s.jsx)("div",{className:"p-2 bg-white rounded-2xl",children:(0,s.jsx)(c.A,{className:"size-3"})}),"ORDER NOW"]})})]})})})}},8990:(e,r,t)=>{"use strict";t.d(r,{A:()=>d});var s=t(2149);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()),l=e=>{let r=n(e);return r.charAt(0).toUpperCase()+r.slice(1)},i=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,s.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:o="",children:d,iconNode:m,...h}=e;return(0,s.createElement)("svg",{ref:r,...c,width:a,height:a,stroke:t,strokeWidth:l?24*Number(n)/Number(a):n,className:i("lucide",o),...h},[...m.map(e=>{let[r,t]=e;return(0,s.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),d=(e,r)=>{let t=(0,s.forwardRef)((t,n)=>{let{className:c,...d}=t;return(0,s.createElement)(o,{ref:n,iconNode:r,className:i("lucide-".concat(a(l(e))),"lucide-".concat(e),c),...d})});return t.displayName=l(e),t}}},e=>{var r=r=>e(e.s=r);e.O(0,[489,942,497,954,358],()=>r(1173)),_N_E=e.O()}]);
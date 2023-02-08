"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"initialize"},o="initialize",l={unversionedId:"api/methods/initialize",id:"api/methods/initialize",title:"initialize",description:"Initializes the health connect client with specific providers. If providerPackageNames is not provided, the default Health Connect application package name will be considered com.google.android.apps.healthdata.",source:"@site/docs/api/methods/00-initialize.md",sourceDirName:"api/methods",slug:"/api/methods/initialize",permalink:"/react-native-health-connect/docs/api/methods/initialize",draft:!1,editUrl:"https://github.com/matinzd/react-native-health-connect/tree/main/docs/docs/api/methods/00-initialize.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"initialize"},sidebar:"tutorialSidebar",previous:{title:"Methods",permalink:"/react-native-health-connect/docs/category/methods"},next:{title:"isAvailable",permalink:"/react-native-health-connect/docs/api/methods/isAvailable"}},c={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initialize"},(0,a.kt)("inlineCode",{parentName:"h1"},"initialize")),(0,a.kt)("p",null,"Initializes the health connect client with specific providers. If ",(0,a.kt)("inlineCode",{parentName:"p"},"providerPackageNames")," is not provided, the default Health Connect application package name will be considered ",(0,a.kt)("inlineCode",{parentName:"p"},"com.google.android.apps.healthdata"),"."),(0,a.kt)("h1",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"initialize(providerPackageNames: string[] = [DEFAULT_PROVIDER_PACKAGE_NAME]): Promise<boolean>;\n")),(0,a.kt)("h1",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { initialize } from 'react-native-health-connect';\n\nconst initializeHealthConnect = async () => {\n  const isInitialized = await initialize();\n  console.log({ isInitialized });\n};\n")))}d.isMDXComponent=!0}}]);
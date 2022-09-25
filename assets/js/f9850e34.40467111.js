"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[6177],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"How it works",position:3},d=void 0,s={unversionedId:"intro/how-it-works",id:"intro/how-it-works",title:"How it works",description:"Middy implements the classic onion-like middleware pattern, with some peculiar details.",source:"@site/docs/intro/03-how-it-works.md",sourceDirName:"intro",slug:"/intro/how-it-works",permalink:"/docs/intro/how-it-works",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/03-how-it-works.md",tags:[],version:"current",lastUpdatedAt:1664113925,formattedLastUpdatedAt:"9/25/2022",sidebarPosition:3,frontMatter:{title:"How it works",position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/intro/getting-started"},next:{title:"Early return",permalink:"/docs/intro/early-interrupt"}},p={},c=[{value:"Execution order",id:"execution-order",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Middy implements the classic ",(0,a.kt)("em",{parentName:"p"},"onion-like")," middleware pattern, with some peculiar details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Middy middleware engine diagram",src:n(2321).Z,width:"672",height:"556"})),(0,a.kt)("p",null,"When you attach a new middleware this will wrap the business logic contained in the handler\nin two separate steps."),(0,a.kt)("p",null,"When another middleware is attached this will wrap the handler again and it will be wrapped by\nall the previously added middlewares in order, creating multiple layers for interacting with\nthe ",(0,a.kt)("em",{parentName:"p"},"request")," (event) and the ",(0,a.kt)("em",{parentName:"p"},"response"),"."),(0,a.kt)("p",null,"This way the ",(0,a.kt)("em",{parentName:"p"},"request-response cycle")," flows through all the middlewares, the\nhandler and all the middlewares again, giving the opportunity within every step to\nmodify or enrich the current request, context, or the response."),(0,a.kt)("h2",{id:"execution-order"},"Execution order"),(0,a.kt)("p",null,"Middlewares have two phases: ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"after"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," phase, happens ",(0,a.kt)("em",{parentName:"p"},"before")," the handler is executed. In this code the\nresponse is not created yet, so you will have access only to the request."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," phase, happens ",(0,a.kt)("em",{parentName:"p"},"after")," the handler is executed. In this code you will\nhave access to both the request and the response."),(0,a.kt)("p",null,"If you have three middlewares attached (as in the image above), this is the expected\norder of execution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware1")," (before)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware2")," (before)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware3")," (before)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware3")," (after)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware2")," (after)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware1")," (after)")),(0,a.kt)("p",null,"Notice that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," phase, middlewares are executed in inverted order,\nthis way the first handler attached is the one with the highest priority as it will\nbe the first able to change the request and last able to modify the response before\nit gets sent to the user."))}m.isMDXComponent=!0},2321:function(e,t,n){t.Z=n.p+"assets/images/middy-middleware-engine-e4ea2405f72a33ac03641d38a2a0ce4b.png"}}]);
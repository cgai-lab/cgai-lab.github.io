"use strict";(self.webpackChunkcgai_lab_github_io=self.webpackChunkcgai_lab_github_io||[]).push([[756],{5510:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(7462),o=t(3366),a=t(7294),i=t(5505),u=t(9236),c=t(3656),d=t(184),s=t(1351);function m(e){return(0,s.Z)("MuiCardContent",e)}(0,t(9508).Z)("MuiCardContent",["root"]);var l=t(5893),f=["className","component"],p=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardContent"}),a=t.className,c=t.component,s=void 0===c?"div":c,v=(0,o.Z)(t,f),Z=(0,r.Z)({},t,{component:s}),g=function(e){var n=e.classes;return(0,u.Z)({root:["root"]},m,n)}(Z);return(0,l.jsx)(p,(0,r.Z)({as:s,className:(0,i.Z)(g.root,a),ownerState:Z,ref:n},v))}))},7221:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(3366),o=t(7462),a=t(7294),i=t(5505),u=t(9236),c=t(184),d=t(3656),s=t(1351);function m(e){return(0,s.Z)("MuiCardMedia",e)}(0,t(9508).Z)("MuiCardMedia",["root","media","img"]);var l=t(5893),f=["children","className","component","image","src","style"],p=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,r=t.isMediaComponent,o=t.isImageComponent;return[n.root,r&&n.media,o&&n.img]}})((function(e){var n=e.ownerState;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),v=["video","audio","picture","iframe","img"],Z=["picture","img"],g=a.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiCardMedia"}),a=t.children,d=t.className,s=t.component,g=void 0===s?"div":s,h=t.image,b=t.src,M=t.style,w=(0,r.Z)(t,f),y=-1!==v.indexOf(g),C=!y&&h?(0,o.Z)({backgroundImage:'url("'.concat(h,'")')},M):M,k=(0,o.Z)({},t,{component:g,isMediaComponent:y,isImageComponent:-1!==Z.indexOf(g)}),E=function(e){var n=e.classes,t={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,u.Z)(t,m,n)}(k);return(0,l.jsx)(p,(0,o.Z)({className:(0,i.Z)(E.root,d),as:g,role:!y&&h?"img":void 0,ref:n,style:C,ownerState:k,src:y?h||b:void 0},w,{children:a}))}))},2840:function(e,n,t){var r;t.d(n,{Z:function(){return l}});var o=t(885),a=t(7294),i=t(2665),u=t(3888),c=t(4026);function d(e,n,t,r,i){var u="undefined"!=typeof window&&void 0!==window.matchMedia,d=a.useState((function(){return i&&u?t(e).matches:r?r(e).matches:n})),s=(0,o.Z)(d,2),m=s[0],l=s[1];return(0,c.Z)((function(){var n=!0;if(u){var r=t(e),o=function(){n&&l(r.matches)};return o(),r.addListener(o),function(){n=!1,r.removeListener(o)}}}),[e,t,u]),m}var s=(r||(r=t.t(a,2))).useSyncExternalStore;function m(e,n,t,r){var i=a.useCallback((function(){return n}),[n]),u=a.useMemo((function(){if(null!==r){var n=r(e).matches;return function(){return n}}return i}),[i,e,r]),c=a.useMemo((function(){if(null===t)return[i,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[i,t,e]),d=(0,o.Z)(c,2),m=d[0],l=d[1];return s(l,m,u)}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,i.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,o=(0,u.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),a=o.defaultMatches,c=void 0!==a&&a,l=o.matchMedia,f=void 0===l?r?window.matchMedia:null:l,p=o.ssrMatchMedia,v=void 0===p?null:p,Z=o.noSsr;var g="function"==typeof e?e(t):e;g=g.replace(/^@media( ?)/m,"");var h=void 0!==s?m:d,b=h(g,c,f,v,Z);return b}},5522:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(7294),o=t(6619),a=t(339),i=t(9211),u=t(9644),c=t(2840),d=t(2077),s=t(664),m=t(2469),l=t(5234),f=t(5510),p=t(7221),v=t(3329),Z=t(4450),g=(0,t(2755).Z)({typography:{fontFamily:["Montserrat","sans-serif","Roboto"].join(",")},palette:{primary:{main:"#1a1b1f"},secondary:{main:"#19857b"},error:{main:Z.Z.A400},text:{primary:"#1a1b1f"},background:{paper:"#fff",default:"#fff"}}}),h=function(e){var n=(0,c.Z)(g.breakpoints.up("lg"));return r.createElement(d.ZP,{sx:{display:"inline-block"}},r.createElement(i.Z,{sx:{boxShadow:4,borderRadius:1}},r.createElement(s.Z,{style:{border:"none",boxShadow:"none"}},r.createElement(m.Z,{component:v.rU,to:e.slug},r.createElement(l.Z,{style:{fontFamily:g.typography.fontFamily},title:e.title,sx:{fontFamily:"inherit"},subheader:new Date(e.createdAt).toDateString()}),r.createElement(f.Z,{sx:{padding:0}},r.createElement(p.Z,{component:"img",height:n?300:200,image:e.thumbnail.url}))))))},b=t(6746);var M=function(e){var n=e.data.news.nodes;return r.createElement(o.Z,null,r.createElement(a.Z,null,r.createElement(b.Z,{title:"News",subTitle:"News"}),r.createElement(i.Z,{py:2},r.createElement(u.Z,null,n.map((function(e){return r.createElement(h,Object.assign({key:e.id},e))}))))))}}}]);
//# sourceMappingURL=component---src-pages-news-index-tsx-9005f23f383ef68cc75b.js.map
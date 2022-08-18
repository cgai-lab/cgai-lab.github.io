"use strict";(self.webpackChunkcgai_lab_github_io=self.webpackChunkcgai_lab_github_io||[]).push([[691],{664:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(7462),r=t(3366),i=t(7294),a=t(5505),c=t(9236),s=t(3656),l=t(184),u=t(8953),d=t(1351);function m(e){return(0,d.Z)("MuiCard",e)}(0,t(9508).Z)("MuiCard",["root"]);var f=t(5893),p=["className","raised"],g=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),h=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCard"}),i=t.className,s=t.raised,u=void 0!==s&&s,d=(0,r.Z)(t,p),h=(0,o.Z)({},t,{raised:u}),v=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},m,n)}(h);return(0,f.jsx)(g,(0,o.Z)({className:(0,a.Z)(v.root,i),elevation:u?8:void 0,ref:n,ownerState:h},d))}))},2469:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(4942),r=t(7462),i=t(3366),a=t(7294),c=t(5505),s=t(9236),l=t(184),u=t(3656),d=t(1351);function m(e){return(0,d.Z)("MuiCardActionArea",e)}var f=(0,t(9508).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),p=t(7542),g=t(5893),h=["children","className","focusVisibleClassName"],v=(0,u.ZP)(p.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme;return n={display:"block",textAlign:"inherit",width:"100%"},(0,o.Z)(n,"&:hover .".concat(f.focusHighlight),{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,o.Z)(n,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:(t.vars||t).palette.action.focusOpacity}),n})),Z=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,n){return n.focusHighlight}})((function(e){var n=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:n.transitions.create("opacity",{duration:n.transitions.duration.short})}})),b=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardActionArea"}),o=t.children,a=t.className,u=t.focusVisibleClassName,d=(0,i.Z)(t,h),f=t,p=function(e){var n=e.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},m,n)}(f);return(0,g.jsxs)(v,(0,r.Z)({className:(0,c.Z)(p.root,a),focusVisibleClassName:(0,c.Z)(u,p.focusVisible),ref:n,ownerState:f},d,{children:[o,(0,g.jsx)(Z,{className:p.focusHighlight,ownerState:f})]}))}))},5510:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(7462),r=t(3366),i=t(7294),a=t(5505),c=t(9236),s=t(3656),l=t(184),u=t(1351);function d(e){return(0,u.Z)("MuiCardContent",e)}(0,t(9508).Z)("MuiCardContent",["root"]);var m=t(5893),f=["className","component"],p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),g=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardContent"}),i=t.className,s=t.component,u=void 0===s?"div":s,g=(0,r.Z)(t,f),h=(0,o.Z)({},t,{component:u}),v=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(h);return(0,m.jsx)(p,(0,o.Z)({as:u,className:(0,a.Z)(v.root,i),ownerState:h,ref:n},g))}))},7221:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(3366),r=t(7462),i=t(7294),a=t(5505),c=t(9236),s=t(184),l=t(3656),u=t(1351);function d(e){return(0,u.Z)("MuiCardMedia",e)}(0,t(9508).Z)("MuiCardMedia",["root","media","img"]);var m=t(5893),f=["children","className","component","image","src","style"],p=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,o=t.isMediaComponent,r=t.isImageComponent;return[n.root,o&&n.media,r&&n.img]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),g=["video","audio","picture","iframe","img"],h=["picture","img"],v=i.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiCardMedia"}),i=t.children,l=t.className,u=t.component,v=void 0===u?"div":u,Z=t.image,b=t.src,x=t.style,C=(0,o.Z)(t,f),w=-1!==g.indexOf(v),y=!w&&Z?(0,r.Z)({backgroundImage:'url("'.concat(Z,'")')},x):x,E=(0,r.Z)({},t,{component:v,isMediaComponent:w,isImageComponent:-1!==h.indexOf(v)}),M=function(e){var n=e.classes,t={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,c.Z)(t,d,n)}(E);return(0,m.jsx)(p,(0,r.Z)({className:(0,a.Z)(M.root,l),as:v,role:!w&&Z?"img":void 0,ref:n,style:y,ownerState:E,src:w?Z||b:void 0},C,{children:i}))}))},6746:function(e,n,t){var o,r=t(1880),i=t(7294),a=t(494).Z.div(o||(o=(0,r.Z)(["\n  margin-top: 80px;\n  margin-bottom: 80px;\n  text-align: center;\n\n  & .sectionDiv {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  & .sectionH2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    line-height: 50px;\n    font-weight: 400;\n  }\n"])));n.Z=function(e){var n=e.title,t=e.subTitle,o=void 0===t?"PEOPLE":t;return i.createElement(a,null,i.createElement("div",{className:"sectionDiv"},o),i.createElement("h2",{className:"sectionH2"},n))}},1265:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var o,r=t(6449),i=t(339),a=t(9308),c=t(7294),s=t(6619),l=t(1880),u=t(494),d=t(9211),m=(0,u.Z)(d.Z)(o||(o=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 480px;\n  margin-bottom: 100px;\n  background-image: url(https://uploads-ssl.webflow.com/620df899c73adb222e3239f2/6218db04f0ba2991d0f638c0_teaser.jpg);\n  background-size: cover;\n  background-position: right;\n  color: #fff;\n  text-align: center;\n\n  & .main {\n    font-size: 56px;\n    line-height: 70px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    outline-color: #fff;\n    outline-offset: 0px;\n    outline-style: none;\n    outline-width: 3px;\n    text-transform: none;\n    text-shadow: 1px 1px 6px #000;\n    mix-blend-mode: normal;\n  }\n\n  & .sub {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 20px;\n    line-height: 34px;\n    font-weight: 400;\n  }\n"]))),f=function(){return c.createElement(m,null,c.createElement(d.Z,null,c.createElement(a.Z,{className:"main"},"Grow your business."),c.createElement(a.Z,{className:"sub"},"Give your business a boost with a beautifully crafted homepage.")))},p=t(664),g=t(2469),h=t(7221),v=t(5510),Z=function(e){var n=e.title,t=e.content,o=e.imgUrl;return c.createElement(p.Z,{sx:{":hover":{boxShadow:10}}},c.createElement(g.Z,null,c.createElement(h.Z,{component:"img",image:o,height:200}),c.createElement(v.Z,null,c.createElement(a.Z,{gutterBottom:!0,variant:"h6",component:"div",noWrap:!0},n),c.createElement(a.Z,{variant:"body2",color:"text.secondary",height:140},t))))},b=t(6746),x=t(4320),C=function(e){var n=e.title,t=e.data;return c.createElement(d.Z,null,c.createElement(b.Z,{title:n,subTitle:"main"}),c.createElement(x.ZP,{container:!0,spacing:3,justifyContent:"center"},t.map((function(e){var n=e.node;return c.createElement(x.ZP,{item:!0,xs:6,sm:6,md:6,lg:3,key:n.id},c.createElement(Z,{title:n.title,content:n.content,imgUrl:n.img.url}))}))))},w=function(e){var n=e.data.mainIntroList.edges,t=(0,r.Z)(),o=n.filter((function(e){return!0===e.node.type})),l=n.filter((function(e){return!1===e.node.type}));return c.createElement(s.Z,null,c.createElement(f,null),c.createElement(i.Z,null,c.createElement(a.Z,{variant:"body1",sx:{fontWeight:t.typography.fontWeightLight,lineHeight:2}},"Our computer graphics and image processing laboratory was established in 1992. Prof. Yeong-Gil Shin has been leading the research. Since the beginning, our focus of research are in the field of 3D visualization, reconstruction, and image processing of medical datasets such as CT, MRI, PET, and so on.",c.createElement("br",null),"Recently, we are expanding our research area into inspecting and detecting products based on industrial CT, and we have established academic collaboration with other institutes and medical centers.",c.createElement("br",null),"Based on these researches, we have published many research papers and commercialized products with the leading ventures."),c.createElement(C,{title:"Graphics",data:o}),c.createElement(C,{title:"Imaging",data:l})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-38f8de1b721488ef43ca.js.map
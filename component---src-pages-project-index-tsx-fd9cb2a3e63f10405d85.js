/*! For license information please see component---src-pages-project-index-tsx-fd9cb2a3e63f10405d85.js.LICENSE.txt */
"use strict";(self.webpackChunkcgai_lab_github_io=self.webpackChunkcgai_lab_github_io||[]).push([[987],{2234:function(e,t){t.Z=function(e){return"string"==typeof e}},7132:function(e,t,a){a.d(t,{Z:function(){return j}});var r=a(2982),n=a(885),o=a(4942),i=a(7462),s=a(3366),c=a(7294),l=(a(4162),a(5505)),d=a(9236),u=a(3656),p=a(184),m=a(9308),v=a(7663),f=a(2067),g=a(5893),h=(0,f.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=a(7542),Z=(0,u.ZP)(b.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,v._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,v._4)(t.palette.grey[600],.12)})})})),y=(0,u.ZP)(h)({width:24,height:16});var x=function(e){var t=e;return(0,g.jsx)("li",{children:(0,g.jsx)(Z,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,g.jsx)(y,{ownerState:t})}))})},C=a(1351);function S(e){return(0,C.Z)("MuiBreadcrumbs",e)}var w=(0,a(9508).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),N=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(w.li),t.li),t.root]}})({}),P=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),A=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,t,a,r){return e.reduce((function(n,o,i){return i<e.length-1?n=n.concat(o,(0,g.jsx)(A,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(i))):n.push(o),n}),[])}var j=c.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=a.children,u=a.className,m=a.component,v=void 0===m?"nav":m,f=a.expandText,h=void 0===f?"Show path":f,b=a.itemsAfterCollapse,Z=void 0===b?1:b,y=a.itemsBeforeCollapse,C=void 0===y?1:y,w=a.maxItems,A=void 0===w?8:w,j=a.separator,I=void 0===j?"/":j,k=(0,s.Z)(a,N),E=c.useState(!1),H=(0,n.Z)(E,2),O=H[0],L=H[1],G=(0,i.Z)({},a,{component:v,expanded:O,expandText:h,itemsAfterCollapse:Z,itemsBeforeCollapse:C,maxItems:A,separator:I}),T=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,t)}(G),V=c.useRef(null),B=c.Children.toArray(o).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,g.jsx)("li",{className:T.li,children:e},"child-".concat(t))}));return(0,g.jsx)(R,(0,i.Z)({ref:t,component:v,color:"text.secondary",className:(0,l.Z)(T.root,u),ownerState:G},k,{children:(0,g.jsx)(P,{className:T.ol,ref:V,ownerState:G,children:M(O||A&&B.length<=A?B:function(e){return C+Z>=e.length?e:[].concat((0,r.Z)(e.slice(0,C)),[(0,g.jsx)(x,{"aria-label":h,onClick:function(){L(!0);var e=V.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-Z,e.length)))}(B),T.separator,I,G)})}))}))},664:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7462),n=a(3366),o=a(7294),i=a(5505),s=a(9236),c=a(3656),l=a(184),d=a(8953),u=a(1351);function p(e){return(0,u.Z)("MuiCard",e)}(0,a(9508).Z)("MuiCard",["root"]);var m=a(5893),v=["className","raised"],f=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=o.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCard"}),o=a.className,c=a.raised,d=void 0!==c&&c,u=(0,n.Z)(a,v),g=(0,r.Z)({},a,{raised:d}),h=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(g);return(0,m.jsx)(f,(0,r.Z)({className:(0,i.Z)(h.root,o),elevation:d?8:void 0,ref:t,ownerState:g},u))}))},2469:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(4942),n=a(7462),o=a(3366),i=a(7294),s=a(5505),c=a(9236),l=a(184),d=a(3656),u=a(1351);function p(e){return(0,u.Z)("MuiCardActionArea",e)}var m=(0,a(9508).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),v=a(7542),f=a(5893),g=["children","className","focusVisibleClassName"],h=(0,d.ZP)(v.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(t,"&:hover .".concat(m.focusHighlight),{opacity:(a.vars||a).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(t,"&.".concat(m.focusVisible," .").concat(m.focusHighlight),{opacity:(a.vars||a).palette.action.focusOpacity}),t})),b=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),Z=i.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=a.children,i=a.className,d=a.focusVisibleClassName,u=(0,o.Z)(a,g),m=a,v=function(e){var t=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,t)}(m);return(0,f.jsxs)(h,(0,n.Z)({className:(0,s.Z)(v.root,i),focusVisibleClassName:(0,s.Z)(d,v.focusVisible),ref:t,ownerState:m},u,{children:[r,(0,f.jsx)(b,{className:v.focusHighlight,ownerState:m})]}))}))},5234:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(4942),n=a(3366),o=a(7462),i=a(7294),s=a(5505),c=a(9236),l=a(9308),d=a(184),u=a(3656),p=a(1351);function m(e){return(0,p.Z)("MuiCardHeader",e)}var v=(0,a(9508).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=a(5893),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,o.Z)((a={},(0,r.Z)(a,"& .".concat(v.title),t.title),(0,r.Z)(a,"& .".concat(v.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),x=i.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=a.action,i=a.avatar,u=a.className,p=a.component,v=void 0===p?"div":p,x=a.disableTypography,C=void 0!==x&&x,S=a.subheader,w=a.subheaderTypographyProps,N=a.title,R=a.titleTypographyProps,P=(0,n.Z)(a,g),A=(0,o.Z)({},a,{component:v,disableTypography:C}),M=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)}(A),j=N;null==j||j.type===l.Z||C||(j=(0,f.jsx)(l.Z,(0,o.Z)({variant:i?"body2":"h5",className:M.title,component:"span",display:"block"},R,{children:j})));var I=S;return null==I||I.type===l.Z||C||(I=(0,f.jsx)(l.Z,(0,o.Z)({variant:i?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:I}))),(0,f.jsxs)(h,(0,o.Z)({className:(0,s.Z)(M.root,u),as:v,ref:t,ownerState:A},P,{children:[i&&(0,f.jsx)(b,{className:M.avatar,ownerState:A,children:i}),(0,f.jsxs)(y,{className:M.content,ownerState:A,children:[j,I]}),r&&(0,f.jsx)(Z,{className:M.action,ownerState:A,children:r})]}))}))},2077:function(e,t,a){a.d(t,{ZP:function(){return E}});var r=a(4942),n=a(3366),o=a(7462),i=a(7294),s=a(5505),c=a(9236),l=a(2234),d=a(7663),u=a(3656),p=a(184),m=a(7542),v=a(3128),f=a(4026),g=a(5973),h=a(8267),b=a(1351),Z=a(9508);function y(e){return(0,b.Z)("MuiListItem",e)}var x=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var C=(0,Z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function S(e){return(0,b.Z)("MuiListItemSecondaryAction",e)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var w=a(5893),N=["className"],R=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,o.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),P=i.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=a.className,l=(0,n.Z)(a,N),d=i.useContext(h.Z),u=(0,o.Z)({},a,{disableGutters:d.disableGutters}),m=function(e){var t=e.disableGutters,a=e.classes,r={root:["root",t&&"disableGutters"]};return(0,c.Z)(r,S,a)}(u);return(0,w.jsx)(R,(0,o.Z)({className:(0,s.Z)(m.root,r),ownerState:u,ref:t},l))}));P.muiName="ListItemSecondaryAction";var A=P,M=["className"],j=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],I=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,o.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,o.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,r.Z)({},"& > .".concat(C.root),{paddingRight:48}),(t={},(0,r.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,r.Z)(t,"&.".concat(x.selected),(0,r.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(x.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,r.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),k=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),E=i.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItem"}),r=a.alignItems,d=void 0===r?"center":r,u=a.autoFocus,b=void 0!==u&&u,Z=a.button,C=void 0!==Z&&Z,S=a.children,N=a.className,R=a.component,P=a.components,E=void 0===P?{}:P,H=a.componentsProps,O=void 0===H?{}:H,L=a.ContainerComponent,G=void 0===L?"li":L,T=a.ContainerProps,V=(T=void 0===T?{}:T).className,B=a.dense,_=void 0!==B&&B,F=a.disabled,z=void 0!==F&&F,D=a.disableGutters,q=void 0!==D&&D,$=a.disablePadding,W=void 0!==$&&$,Y=a.divider,J=void 0!==Y&&Y,K=a.focusVisibleClassName,Q=a.secondaryAction,U=a.selected,X=void 0!==U&&U,ee=(0,n.Z)(a.ContainerProps,M),te=(0,n.Z)(a,j),ae=i.useContext(h.Z),re={dense:_||ae.dense||!1,alignItems:d,disableGutters:q},ne=i.useRef(null);(0,f.Z)((function(){b&&ne.current&&ne.current.focus()}),[b]);var oe=i.Children.toArray(S),ie=oe.length&&(0,v.Z)(oe[oe.length-1],["ListItemSecondaryAction"]),se=(0,o.Z)({},a,{alignItems:d,autoFocus:b,button:C,dense:re.dense,disabled:z,disableGutters:q,disablePadding:W,divider:J,hasSecondaryAction:ie,selected:X}),ce=function(e){var t=e.alignItems,a=e.button,r=e.classes,n=e.dense,o=e.disabled,i={root:["root",n&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,c.Z)(i,y,r)}(se),le=(0,g.Z)(ne,t),de=E.Root||I,ue=O.root||{},pe=(0,o.Z)({className:(0,s.Z)(ce.root,ue.className,N),disabled:z},te),me=R||"li";return C&&(pe.component=R||"div",pe.focusVisibleClassName=(0,s.Z)(x.focusVisible,K),me=m.Z),ie?(me=pe.component||R?me:"div","li"===G&&("li"===me?me="div":"li"===pe.component&&(pe.component="div")),(0,w.jsx)(h.Z.Provider,{value:re,children:(0,w.jsxs)(k,(0,o.Z)({as:G,className:(0,s.Z)(ce.container,V),ref:le,ownerState:se},ee,{children:[(0,w.jsx)(de,(0,o.Z)({},ue,!(0,l.Z)(de)&&{as:me,ownerState:(0,o.Z)({},se,ue.ownerState)},pe,{children:oe})),oe.pop()]}))})):(0,w.jsx)(h.Z.Provider,{value:re,children:(0,w.jsxs)(de,(0,o.Z)({},ue,{as:me,ref:le,ownerState:se},!(0,l.Z)(de)&&{ownerState:(0,o.Z)({},se,ue.ownerState)},pe,{children:[oe,Q&&(0,w.jsx)(A,{children:Q})]}))})}))},4817:function(e,t){var a=60103,r=60106,n=60107,o=60108,i=60114,s=60109,c=60110,l=60112,d=60113,u=60120,p=60115,m=60116,v=60121,f=60122,g=60117,h=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var Z=Symbol.for;a=Z("react.element"),r=Z("react.portal"),n=Z("react.fragment"),o=Z("react.strict_mode"),i=Z("react.profiler"),s=Z("react.provider"),c=Z("react.context"),l=Z("react.forward_ref"),d=Z("react.suspense"),u=Z("react.suspense_list"),p=Z("react.memo"),m=Z("react.lazy"),v=Z("react.block"),f=Z("react.server.block"),g=Z("react.fundamental"),h=Z("react.debug_trace_mode"),b=Z("react.legacy_hidden")}function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case n:case i:case o:case d:case u:return e;default:switch(e=e&&e.$$typeof){case c:case l:case m:case p:case s:return e;default:return t}}case r:return t}}}},4162:function(e,t,a){a(4817)},6746:function(e,t,a){var r,n=a(1880),o=a(7294),i=a(494).Z.div(r||(r=(0,n.Z)(["\n  margin-top: 80px;\n  margin-bottom: 80px;\n  text-align: center;\n\n  & .sectionDiv {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  & .sectionH2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    line-height: 50px;\n    font-weight: 400;\n  }\n"])));t.Z=function(e){var t=e.title,a=e.subTitle,r=void 0===a?"PEOPLE":a;return o.createElement(i,null,o.createElement("div",{className:"sectionDiv"},r),o.createElement("h2",{className:"sectionH2"},t))}},3416:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),n=a(4781),o=a(339),i=a(9211),s=a(9644),c=a(2077),l=a(664),d=a(2469),u=a(5234),p=a(9308),m=a(7132),v=function(e){var t=e.title,a=e.startDate,n=e.endDate,o=e.option;return r.createElement(c.ZP,{sx:{display:"inline-block"}},r.createElement(i.Z,{sx:{boxShadow:4,borderRadius:1}},r.createElement(l.Z,{style:{border:"none",boxShadow:"none"}},r.createElement(d.Z,null,r.createElement(u.Z,{title:r.createElement(p.Z,{variant:"h6"},t),subheader:r.createElement(m.Z,{"aria-label":"breadcrum"},o&&o.map((function(e){return r.createElement(p.Z,{key:e,variant:"subtitle2"},e)})),r.createElement(p.Z,{variant:"subtitle2"},a," ~ ",n))})))))},f=a(6746),g=function(e){var t=e.data.projectList.edges;return r.createElement(n.Z,null,r.createElement(o.Z,null,r.createElement(f.Z,{title:"Project",subTitle:""}),r.createElement(i.Z,{py:2},r.createElement(s.Z,null,t.map((function(e){var t=e.node;return r.createElement(v,Object.assign({key:t.id},t))}))))))}}}]);
//# sourceMappingURL=component---src-pages-project-index-tsx-fd9cb2a3e63f10405d85.js.map
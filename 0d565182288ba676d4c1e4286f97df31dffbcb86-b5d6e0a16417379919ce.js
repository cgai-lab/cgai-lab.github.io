"use strict";(self.webpackChunkcgai_lab_github_io=self.webpackChunkcgai_lab_github_io||[]).push([[473],{2234:function(e,t){t.Z=function(e){return"string"==typeof e}},664:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7462),o=a(3366),r=a(7294),i=a(5505),s=a(9236),c=a(3656),d=a(184),l=a(8953),u=a(1351);function p(e){return(0,u.Z)("MuiCard",e)}(0,a(9508).Z)("MuiCard",["root"]);var v=a(5893),m=["className","raised"],f=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=r.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiCard"}),r=a.className,c=a.raised,l=void 0!==c&&c,u=(0,o.Z)(a,m),g=(0,n.Z)({},a,{raised:l}),b=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(g);return(0,v.jsx)(f,(0,n.Z)({className:(0,i.Z)(b.root,r),elevation:l?8:void 0,ref:t,ownerState:g},u))}))},2469:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(4942),o=a(7462),r=a(3366),i=a(7294),s=a(5505),c=a(9236),d=a(184),l=a(3656),u=a(1351);function p(e){return(0,u.Z)("MuiCardActionArea",e)}var v=(0,a(9508).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),m=a(7542),f=a(5893),g=["children","className","focusVisibleClassName"],b=(0,l.ZP)(m.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,n.Z)(t,"&:hover .".concat(v.focusHighlight),{opacity:(a.vars||a).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,n.Z)(t,"&.".concat(v.focusVisible," .").concat(v.focusHighlight),{opacity:(a.vars||a).palette.action.focusOpacity}),t})),h=(0,l.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),Z=i.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiCardActionArea"}),n=a.children,i=a.className,l=a.focusVisibleClassName,u=(0,r.Z)(a,g),v=a,m=function(e){var t=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,t)}(v);return(0,f.jsxs)(b,(0,o.Z)({className:(0,s.Z)(m.root,i),focusVisibleClassName:(0,s.Z)(l,m.focusVisible),ref:t,ownerState:v},u,{children:[n,(0,f.jsx)(h,{className:m.focusHighlight,ownerState:v})]}))}))},5234:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(4942),o=a(3366),r=a(7462),i=a(7294),s=a(5505),c=a(9236),d=a(9308),l=a(184),u=a(3656),p=a(1351);function v(e){return(0,p.Z)("MuiCardHeader",e)}var m=(0,a(9508).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=a(5893),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,r.Z)((a={},(0,n.Z)(a,"& .".concat(m.title),t.title),(0,n.Z)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),h=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),x=i.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,u=a.className,p=a.component,m=void 0===p?"div":p,x=a.disableTypography,C=void 0!==x&&x,N=a.subheader,S=a.subheaderTypographyProps,A=a.title,w=a.titleTypographyProps,P=(0,o.Z)(a,g),R=(0,r.Z)({},a,{component:m,disableTypography:C}),I=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(R),M=A;null==M||M.type===d.Z||C||(M=(0,f.jsx)(d.Z,(0,r.Z)({variant:i?"body2":"h5",className:I.title,component:"span",display:"block"},w,{children:M})));var j=N;return null==j||j.type===d.Z||C||(j=(0,f.jsx)(d.Z,(0,r.Z)({variant:i?"body2":"body1",className:I.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:j}))),(0,f.jsxs)(b,(0,r.Z)({className:(0,s.Z)(I.root,u),as:m,ref:t,ownerState:R},P,{children:[i&&(0,f.jsx)(h,{className:I.avatar,ownerState:R,children:i}),(0,f.jsxs)(y,{className:I.content,ownerState:R,children:[M,j]}),n&&(0,f.jsx)(Z,{className:I.action,ownerState:R,children:n})]}))}))},2077:function(e,t,a){a.d(t,{ZP:function(){return H}});var n=a(4942),o=a(3366),r=a(7462),i=a(7294),s=a(5505),c=a(9236),d=a(2234),l=a(7663),u=a(3656),p=a(184),v=a(7542),m=a(3128),f=a(4026),g=a(5973),b=a(8267),h=a(1351),Z=a(9508);function y(e){return(0,h.Z)("MuiListItem",e)}var x=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var C=(0,Z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function N(e){return(0,h.Z)("MuiListItemSecondaryAction",e)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var S=a(5893),A=["className"],w=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),P=i.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,d=(0,o.Z)(a,A),l=i.useContext(b.Z),u=(0,r.Z)({},a,{disableGutters:l.disableGutters}),v=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,c.Z)(n,N,a)}(u);return(0,S.jsx)(w,(0,r.Z)({className:(0,s.Z)(v.root,n),ownerState:u,ref:t},d))}));P.muiName="ListItemSecondaryAction";var R=P,I=["className"],M=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],j=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,o=e.ownerState;return(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,n.Z)({},"& > .".concat(C.root),{paddingRight:48}),(t={},(0,n.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(t,"&.".concat(x.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(x.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},o.button&&(0,n.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),k=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),H=i.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,l=void 0===n?"center":n,u=a.autoFocus,h=void 0!==u&&u,Z=a.button,C=void 0!==Z&&Z,N=a.children,A=a.className,w=a.component,P=a.components,H=void 0===P?{}:P,O=a.componentsProps,G=void 0===O?{}:O,L=a.ContainerComponent,V=void 0===L?"li":L,F=a.ContainerProps,T=(F=void 0===F?{}:F).className,E=a.dense,_=void 0!==E&&E,B=a.disabled,q=void 0!==B&&B,D=a.disableGutters,z=void 0!==D&&D,Y=a.disablePadding,J=void 0!==Y&&Y,K=a.divider,Q=void 0!==K&&K,U=a.focusVisibleClassName,W=a.secondaryAction,X=a.selected,$=void 0!==X&&X,ee=(0,o.Z)(a.ContainerProps,I),te=(0,o.Z)(a,M),ae=i.useContext(b.Z),ne={dense:_||ae.dense||!1,alignItems:l,disableGutters:z},oe=i.useRef(null);(0,f.Z)((function(){h&&oe.current&&oe.current.focus()}),[h]);var re=i.Children.toArray(N),ie=re.length&&(0,m.Z)(re[re.length-1],["ListItemSecondaryAction"]),se=(0,r.Z)({},a,{alignItems:l,autoFocus:h,button:C,dense:ne.dense,disabled:q,disableGutters:z,disablePadding:J,divider:Q,hasSecondaryAction:ie,selected:$}),ce=function(e){var t=e.alignItems,a=e.button,n=e.classes,o=e.dense,r=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,c.Z)(i,y,n)}(se),de=(0,g.Z)(oe,t),le=H.Root||j,ue=G.root||{},pe=(0,r.Z)({className:(0,s.Z)(ce.root,ue.className,A),disabled:q},te),ve=w||"li";return C&&(pe.component=w||"div",pe.focusVisibleClassName=(0,s.Z)(x.focusVisible,U),ve=v.Z),ie?(ve=pe.component||w?ve:"div","li"===V&&("li"===ve?ve="div":"li"===pe.component&&(pe.component="div")),(0,S.jsx)(b.Z.Provider,{value:ne,children:(0,S.jsxs)(k,(0,r.Z)({as:V,className:(0,s.Z)(ce.container,T),ref:de,ownerState:se},ee,{children:[(0,S.jsx)(le,(0,r.Z)({},ue,!(0,d.Z)(le)&&{as:ve,ownerState:(0,r.Z)({},se,ue.ownerState)},pe,{children:re})),re.pop()]}))})):(0,S.jsx)(b.Z.Provider,{value:ne,children:(0,S.jsxs)(le,(0,r.Z)({},ue,{as:ve,ref:de,ownerState:se},!(0,d.Z)(le)&&{ownerState:(0,r.Z)({},se,ue.ownerState)},pe,{children:[re,W&&(0,S.jsx)(R,{children:W})]}))})}))},6746:function(e,t,a){var n,o=a(1880),r=a(7294),i=a(494).Z.div(n||(n=(0,o.Z)(["\n  margin-top: 80px;\n  margin-bottom: 80px;\n  text-align: center;\n\n  & .sectionDiv {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  & .sectionH2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    line-height: 50px;\n    font-weight: 400;\n  }\n"])));t.Z=function(e){var t=e.title,a=e.subTitle,n=void 0===a?"PEOPLE":a;return r.createElement(i,null,r.createElement("div",{className:"sectionDiv"},n),r.createElement("h2",{className:"sectionH2"},t))}}}]);
//# sourceMappingURL=0d565182288ba676d4c1e4286f97df31dffbcb86-b5d6e0a16417379919ce.js.map
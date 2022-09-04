"use strict";(self.webpackChunkcgai_lab_github_io=self.webpackChunkcgai_lab_github_io||[]).push([[565],{2234:function(t,e){e.Z=function(t){return"string"==typeof t}},7417:function(t,e,n){var i=n(3366),a=n(7462),r=n(7294),o=n(5505),l=n(9236),c=n(7663),s=n(3656),d=n(184),u=n(2103),p=n(5893),v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.absolute&&e.absolute,e[n.variant],n.light&&e.light,"vertical"===n.orientation&&e.vertical,n.flexItem&&e.flexItem,n.children&&e.withChildren,n.children&&"vertical"===n.orientation&&e.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&e.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(e.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((e.vars||e).palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,a.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var n=t.ownerState;return[e.wrapper,"vertical"===n.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),h=r.forwardRef((function(t,e){var n=(0,d.Z)({props:t,name:"MuiDivider"}),r=n.absolute,c=void 0!==r&&r,s=n.children,h=n.className,f=n.component,b=void 0===f?s?"div":"hr":f,Z=n.flexItem,x=void 0!==Z&&Z,y=n.light,w=void 0!==y&&y,S=n.orientation,C=void 0===S?"horizontal":S,A=n.role,I=void 0===A?"hr"!==b?"separator":void 0:A,E=n.textAlign,R=void 0===E?"center":E,P=n.variant,N=void 0===P?"fullWidth":P,L=(0,i.Z)(n,v),k=(0,a.Z)({},n,{absolute:c,component:b,flexItem:x,light:w,orientation:C,role:I,textAlign:R,variant:N}),M=function(t){var e=t.absolute,n=t.children,i=t.classes,a=t.flexItem,r=t.light,o=t.orientation,c=t.textAlign,s={root:["root",e&&"absolute",t.variant,r&&"light","vertical"===o&&"vertical",a&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(s,u.V,i)}(k);return(0,p.jsx)(m,(0,a.Z)({as:b,className:(0,o.Z)(M.root,h),role:I,ref:e,ownerState:k},L,{children:s?(0,p.jsx)(g,{className:M.wrapper,ownerState:k,children:s}):null}))}));e.Z=h},2103:function(t,e,n){n.d(e,{V:function(){return a}});var i=n(1351);function a(t){return(0,i.Z)("MuiDivider",t)}var r=(0,n(9508).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=r},2077:function(t,e,n){n.d(e,{ZP:function(){return M}});var i=n(4942),a=n(3366),r=n(7462),o=n(7294),l=n(5505),c=n(9236),s=n(2234),d=n(7663),u=n(3656),p=n(184),v=n(7542),m=n(3128),g=n(4026),h=n(5973),f=n(8267),b=n(1351),Z=n(9508);function x(t){return(0,b.Z)("MuiListItem",t)}var y=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var w=(0,Z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function S(t){return(0,b.Z)("MuiListItemSecondaryAction",t)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var C=n(5893),A=["className"],I=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.disableGutters&&e.disableGutters]}})((function(t){var e=t.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})})),E=o.forwardRef((function(t,e){var n=(0,p.Z)({props:t,name:"MuiListItemSecondaryAction"}),i=n.className,s=(0,a.Z)(n,A),d=o.useContext(f.Z),u=(0,r.Z)({},n,{disableGutters:d.disableGutters}),v=function(t){var e=t.disableGutters,n=t.classes,i={root:["root",e&&"disableGutters"]};return(0,c.Z)(i,S,n)}(u);return(0,C.jsx)(I,(0,r.Z)({className:(0,l.Z)(v.root,i),ownerState:u,ref:e},s))}));E.muiName="ListItemSecondaryAction";var R=E,P=["className"],N=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],L=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.dense&&e.dense,"flex-start"===n.alignItems&&e.alignItemsFlexStart,n.divider&&e.divider,!n.disableGutters&&e.gutters,!n.disablePadding&&e.padding,n.button&&e.button,n.hasSecondaryAction&&e.secondaryAction]}})((function(t){var e,n=t.theme,a=t.ownerState;return(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,i.Z)({},"& > .".concat(w.root),{paddingRight:48}),(e={},(0,i.Z)(e,"&.".concat(y.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,i.Z)(e,"&.".concat(y.selected),(0,i.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,i.Z)(e,"&.".concat(y.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),e),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,i.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(y.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),k=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(t,e){return e.container}})({position:"relative"}),M=o.forwardRef((function(t,e){var n=(0,p.Z)({props:t,name:"MuiListItem"}),i=n.alignItems,d=void 0===i?"center":i,u=n.autoFocus,b=void 0!==u&&u,Z=n.button,w=void 0!==Z&&Z,S=n.children,A=n.className,I=n.component,E=n.components,M=void 0===E?{}:E,V=n.componentsProps,G=void 0===V?{}:V,O=n.ContainerComponent,F=void 0===O?"li":O,B=n.ContainerProps,j=(B=void 0===B?{}:B).className,D=n.dense,T=void 0!==D&&D,W=n.disabled,z=void 0!==W&&W,_=n.disableGutters,q=void 0!==_&&_,H=n.disablePadding,U=void 0!==H&&H,Y=n.divider,K=void 0!==Y&&Y,X=n.focusVisibleClassName,J=n.secondaryAction,Q=n.selected,$=void 0!==Q&&Q,tt=(0,a.Z)(n.ContainerProps,P),et=(0,a.Z)(n,N),nt=o.useContext(f.Z),it={dense:T||nt.dense||!1,alignItems:d,disableGutters:q},at=o.useRef(null);(0,g.Z)((function(){b&&at.current&&at.current.focus()}),[b]);var rt=o.Children.toArray(S),ot=rt.length&&(0,m.Z)(rt[rt.length-1],["ListItemSecondaryAction"]),lt=(0,r.Z)({},n,{alignItems:d,autoFocus:b,button:w,dense:it.dense,disabled:z,disableGutters:q,disablePadding:U,divider:K,hasSecondaryAction:ot,selected:$}),ct=function(t){var e=t.alignItems,n=t.button,i=t.classes,a=t.dense,r=t.disabled,o={root:["root",a&&"dense",!t.disableGutters&&"gutters",!t.disablePadding&&"padding",t.divider&&"divider",r&&"disabled",n&&"button","flex-start"===e&&"alignItemsFlexStart",t.hasSecondaryAction&&"secondaryAction",t.selected&&"selected"],container:["container"]};return(0,c.Z)(o,x,i)}(lt),st=(0,h.Z)(at,e),dt=M.Root||L,ut=G.root||{},pt=(0,r.Z)({className:(0,l.Z)(ct.root,ut.className,A),disabled:z},et),vt=I||"li";return w&&(pt.component=I||"div",pt.focusVisibleClassName=(0,l.Z)(y.focusVisible,X),vt=v.Z),ot?(vt=pt.component||I?vt:"div","li"===F&&("li"===vt?vt="div":"li"===pt.component&&(pt.component="div")),(0,C.jsx)(f.Z.Provider,{value:it,children:(0,C.jsxs)(k,(0,r.Z)({as:F,className:(0,l.Z)(ct.container,j),ref:st,ownerState:lt},tt,{children:[(0,C.jsx)(dt,(0,r.Z)({},ut,!(0,s.Z)(dt)&&{as:vt,ownerState:(0,r.Z)({},lt,ut.ownerState)},pt,{children:rt})),rt.pop()]}))})):(0,C.jsx)(f.Z.Provider,{value:it,children:(0,C.jsxs)(dt,(0,r.Z)({},ut,{as:vt,ref:st,ownerState:lt},!(0,s.Z)(dt)&&{ownerState:(0,r.Z)({},lt,ut.ownerState)},pt,{children:[rt,J&&(0,C.jsx)(R,{children:J})]}))})}))},6746:function(t,e,n){var i,a=n(1880),r=n(7294),o=n(494).Z.div(i||(i=(0,a.Z)(["\n  margin-top: 80px;\n  margin-bottom: 80px;\n  text-align: center;\n\n  & .sectionDiv {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  & .sectionH2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    line-height: 50px;\n    font-weight: 400;\n  }\n"])));e.Z=function(t){var e=t.title,n=t.subTitle,i=void 0===n?"PEOPLE":n;return r.createElement(o,null,r.createElement("div",{className:"sectionDiv"},i),r.createElement("h2",{className:"sectionH2"},e))}},2940:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var i=n(7294),a=n(4781),r=n(6449),o=n(339),l=n(9211),c=n(9308),s=n(7417),d=n(6746),u=n(9644),p=n(2077),v=function(t){var e=t.title,n=t.contents;return i.createElement(u.Z,null,i.createElement(c.Z,{variant:"h5",py:2},e),n.map((function(t){var e=t.content;return i.createElement(p.ZP,{key:e},"◾ ",e)})))},m=[{content:"중앙대학교 컴퓨터공학과, 공학사, 2006년 2월"},{content:"중앙대학교 컴퓨터공학과, 공학박사, 2013년 2월"},{content:"중앙대학교 연구교수, 서울대/숙명여대 시간강사, 2013.03 ~ 2015.06"},{content:"Bournemouth University, Visiting Researcher, 2015.07 ~ 2017.08 영국"},{content:"Bournemouth University, Marie Curie Fellow (EU), 2018.02 ~ 2018.08 영국"}],g=[{content:"컴퓨터그래픽스"},{content:"영상처리"},{content:"감성컴퓨팅"}],h=[{content:'Best paper award "Honorable mention", NPAR 2011: Animation for ancient tile mosaics'},{content:"Seal of Excellence, Horizon 2020's Marie Skłodowska-Curie actions, 2017: AniStyle - Artistic Animation Rendering with Stylization"}],f=function(){var t=(0,r.Z)();return i.createElement(a.Z,null,i.createElement(o.Z,null,i.createElement(d.Z,{title:i.createElement(l.Z,null,i.createElement("img",{height:250,src:"https://computer.seoultech.ac.kr/storage/prof/profile/SNUST1537403560837.jpg"}),i.createElement(c.Z,{variant:"h5",py:2,sx:{fontWeight:t.typography.fontWeightBold}},"Dongwann Kang"),i.createElement(c.Z,{variant:"body1",py:1},i.createElement("b",null,"Professor"),", Computer Graphcis and Image Processing Laboratory"),i.createElement(c.Z,{variant:"body1",py:1},"Seoul National University of Science and Technology"),i.createElement(c.Z,{variant:"body1",py:1},"dongwann@seoultech.ac.kr")),subTitle:"professor"}),i.createElement(s.Z,{sx:{paddingY:2}}),i.createElement(v,{title:"Education",contents:m}),i.createElement(s.Z,{sx:{paddingY:2}}),i.createElement(v,{title:"Research Area",contents:g}),i.createElement(s.Z,{sx:{paddingY:2}}),i.createElement(v,{title:"Honors",contents:h})))}}}]);
//# sourceMappingURL=component---src-pages-people-professor-index-tsx-e0b4a75cce9d6d21c7bd.js.map
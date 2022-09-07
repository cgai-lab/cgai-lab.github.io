"use strict";(self.webpackChunkcgai_lab_github_io=self.webpackChunkcgai_lab_github_io||[]).push([[691],{7417:function(e,t,n){var i=n(3366),r=n(7462),a=n(7294),o=n(5505),l=n(9236),c=n(7663),s=n(3656),d=n(184),h=n(2103),m=n(5893),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,r.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),u=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),f=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDivider"}),a=n.absolute,c=void 0!==a&&a,s=n.children,f=n.className,v=n.component,x=void 0===v?s?"div":"hr":v,b=n.flexItem,w=void 0!==b&&b,Z=n.light,E=void 0!==Z&&Z,y=n.orientation,A=void 0===y?"horizontal":y,S=n.role,L=void 0===S?"hr"!==x?"separator":void 0:S,k=n.textAlign,C=void 0===k?"center":k,D=n.variant,I=void 0===D?"fullWidth":D,P=(0,i.Z)(n,p),_=(0,r.Z)({},n,{absolute:c,component:x,flexItem:w,light:E,orientation:A,role:L,textAlign:C,variant:I}),z=function(e){var t=e.absolute,n=e.children,i=e.classes,r=e.flexItem,a=e.light,o=e.orientation,c=e.textAlign,s={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(s,h.V,i)}(_);return(0,m.jsx)(g,(0,r.Z)({as:x,className:(0,o.Z)(z.root,f),role:L,ref:t,ownerState:_},P,{children:s?(0,m.jsx)(u,{className:z.wrapper,ownerState:_,children:s}):null}))}));t.Z=f},2103:function(e,t,n){n.d(t,{V:function(){return r}});var i=n(1351);function r(e){return(0,i.Z)("MuiDivider",e)}var a=(0,n(9508).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},6746:function(e,t,n){var i,r=n(1880),a=n(7294),o=n(494).Z.div(i||(i=(0,r.Z)(["\n  margin-top: 80px;\n  margin-bottom: 80px;\n  text-align: center;\n\n  & .sectionDiv {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  & .sectionH2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    line-height: 50px;\n    font-weight: 400;\n  }\n"])));t.Z=function(e){var t=e.title,n=e.subTitle,i=void 0===n?"PEOPLE":n;return a.createElement(o,null,a.createElement("div",{className:"sectionDiv"},i),a.createElement("h2",{className:"sectionH2"},t))}},2677:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i,r,a,o=n(6449),l=n(339),c=n(9308),s=n(7417),d=n(7294),h=n(4781),m=n(1880),p=n(494),g=n(9211),u=(0,p.Z)(g.Z)(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 480px;\n  margin-bottom: 100px;\n  background-image: url(https://cdn.pixabay.com/photo/2022/04/01/23/56/bird-7105939_960_720.jpg);\n  background-size: cover;\n  background-position: right;\n  color: #fff;\n  text-align: center;\n\n  & .main {\n    font-size: 56px;\n    line-height: 70px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    outline-color: #fff;\n    outline-offset: 0px;\n    outline-style: none;\n    outline-width: 3px;\n    text-transform: none;\n    text-shadow: 1px 1px 6px #000;\n    mix-blend-mode: normal;\n  }\n\n  & .sub {\n    opacity: 0.9;\n    margin-bottom: 10px;\n    font-size: 20px;\n    line-height: 34px;\n    font-weight: 400;\n  }\n"]))),f=function(){return d.createElement(u,null,d.createElement(g.Z,null,d.createElement(c.Z,{className:"main"},"Graphics and Imaging Lab."),d.createElement(c.Z,{className:"sub"},"Welcome to Computer Graphics and Imaging Lab at Seoultech.")))},v=n(6746),x=p.Z.div(r||(r=(0,m.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  & .sectionDiv {\n    opacity: 0.6;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  & .sectionH2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    line-height: 50px;\n    font-weight: 400;\n  }\n"]))),b=function(e){var t=e.title,n=e.subTitle,i=void 0===n?"PEOPLE":n;return d.createElement(x,null,d.createElement("div",{className:"sectionDiv"},i),d.createElement("h2",{className:"sectionH2"},t))},w=n(4320),Z=p.Z.img(a||(a=(0,m.Z)(["\n  max-width: 100%;\n  height: 100%;\n  object-fit: cover;\n  // max-height: 450px;\n"]))),E=function(e){var t=e.isLeft,n=e.title,i=e.content,r=e.src;return d.createElement(w.ZP,{container:!0,columnSpacing:10,rowSpacing:3,my:1},d.createElement(w.ZP,{item:!0,md:4,xs:12,order:{xs:2,md:t?1:2}},d.createElement(b,{subTitle:"ABOUT",title:n}),d.createElement(c.Z,{sx:{lineHeight:2}},i)),d.createElement(w.ZP,{item:!0,md:8,xs:12,order:{xs:1,md:t?2:1}},d.createElement(Z,{src:r,alt:n+"_about"})))},y=function(e){var t=e.data.mainIntroList.edges;(0,o.Z)(),t.filter((function(e){return!0===e.node.type})),t.filter((function(e){return!1===e.node.type}));return d.createElement(h.Z,null,d.createElement(f,null),d.createElement(l.Z,null,d.createElement(v.Z,{title:d.createElement(c.Z,{variant:"h6",sx:{textAlign:"left",lineHeight:2}}," Our computer graphics and image processing laboratory was established in 2018. Prof. Dongwann Kang has been leading the research. Our focus of research are in the field of 3D visualization, reconstruction, and image processing of object detection, style transfer and so on."),subTitle:"Introduce"}),d.createElement(s.Z,null),d.createElement(E,{isLeft:!0,title:"Graphics",src:"https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg",content:"Computer graphics is a sub-field of computer science which studies methods for digitally synthesizing and manipulating visual content. Although the term often refers to the study of three-dimensional computer graphics, it also encompasses two-dimensional graphics and image processing."}),d.createElement(E,{isLeft:!1,title:"Imaging",src:"https://cdn.pixabay.com/photo/2021/12/18/19/37/eye-6879642_960_720.jpg",content:"Computer imaging is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system can do."}),d.createElement(v.Z,{title:d.createElement(c.Z,{variant:"subtitle1",sx:{textAlign:"left",lineHeight:2}},"We are looking for motivated PhD students / PostDocs who are not afraid to get their hands dirty. f you are interested in computer graphics and vision, and are motivated and diligent, please email ",d.createElement("a",{href:"mailto:dongwann@seoultech.ac.kr"},"dongwann@seoultech.ac.kr"),"  to discuss your potential for a career in our lab."),subTitle:"Open Postions"})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-06dc2698764b4d55fc4d.js.map
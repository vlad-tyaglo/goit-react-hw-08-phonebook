"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[65],{6065:function(e,n,i){i.r(n),i.d(n,{default:function(){return q}});var t,r,o,a=i(4554),s=i(1413),l=i(9439),d=i(2791),c=i(9434),m=i(9195),u=i(2526),p=i(4695),v=i(1614),x=i(890),Z=i(1889),h=i(4925),f=i(8029),b=i(3466),g=i(3400),j=i(6151),w=i(9569),P=i(3710),y=i(3381),S=i(168),z=i(7691),C=i(4227),E=i(8096),_=i(7071),I=(0,z.ZP)(C.Z)(t||(t=(0,S.Z)(["\n  & label {\n    color: rgba(0, 0, 0, 0.6);\n  }\n"]))),M=(0,z.ZP)(E.Z)(r||(r=(0,S.Z)(["\n  color: rgba(0, 0, 0, 0.6);\n    & label {\n      color: rgba(0, 0, 0, 0.6);\n    }\n"]))),k=(0,z.ZP)(_.Z)(o||(o=(0,S.Z)(["\n  position: absolute;\n  bottom: -9px;\n  background-color: white;\n  padding: 0 4px;\n  margin-left: 14px;\n"]))),A=i(3329),L=function(){var e,n,i,t,r,o,S=(0,c.I0)(),z=(0,d.useState)(!1),C=(0,l.Z)(z,2),E=C[0],_=C[1],L=(0,m.cI)({resolver:(0,p.X)(y.gY),defaultValues:{name:"",email:"",password:""}}),q=L.register,R=L.handleSubmit,W=L.reset,N=L.control,T=L.formState.errors,U=function(){_(!E)},F=(null===(e=T.name)||void 0===e?void 0:e.message.charAt(0).toUpperCase())+(null===(n=T.name)||void 0===n?void 0:n.message.slice(1))||"",Q=(null===(i=T.email)||void 0===i?void 0:i.message.charAt(0).toUpperCase())+(null===(t=T.email)||void 0===t?void 0:t.message.slice(1))||"",V=(null===(r=T.password)||void 0===r?void 0:r.message.charAt(0).toUpperCase())+(null===(o=T.password)||void 0===o?void 0:o.message.slice(1))||"";return(0,A.jsx)(v.Z,{component:"section",maxWidth:"xs",children:(0,A.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,A.jsx)(x.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,A.jsxs)(a.Z,{component:"form",onSubmit:R((function(e){S((0,u.r4)(e)),W()})),sx:{mt:3},children:[(0,A.jsxs)(Z.ZP,{container:!0,children:[(0,A.jsxs)(Z.ZP,{item:!0,xs:12,sx:{mb:"28px",position:"relative"},children:[(0,A.jsx)(m.Qr,{name:"name",control:N,render:function(e){var n=e.field;return(0,A.jsx)(I,(0,s.Z)((0,s.Z)((0,s.Z)({},n),q("name")),{},{label:"Name *",fullWidth:!0,type:"text",autoComplete:"name",autoFocus:!0,id:"name"}))}}),(0,A.jsx)(k,{sx:{ml:"14px",color:"#a62633"},children:F})]}),(0,A.jsxs)(Z.ZP,{item:!0,xs:12,sx:{mb:"28px",position:"relative"},children:[(0,A.jsx)(m.Qr,{name:"email",control:N,render:function(e){var n=e.field;return(0,A.jsx)(I,(0,s.Z)((0,s.Z)((0,s.Z)({},n),q("email")),{},{label:"Email *",fullWidth:!0,type:"email",name:"email",autoComplete:"email",id:"email"}))}}),(0,A.jsx)(k,{sx:{ml:"14px",color:"#a62633"},children:Q})]}),(0,A.jsxs)(Z.ZP,{item:!0,xs:12,sx:{mb:"28px",position:"relative"},children:[(0,A.jsx)(m.Qr,{name:"password",control:N,render:function(e){var n=e.field;return(0,A.jsxs)(M,(0,s.Z)((0,s.Z)((0,s.Z)({variant:"outlined",fullWidth:!0},n),q("password")),{},{children:[(0,A.jsx)(h.Z,{htmlFor:"password",children:"Password *"}),(0,A.jsx)(f.Z,{fullWidth:!0,name:"password",label:"Password *",type:E?"text":"password",id:"password",autoComplete:"new-password",endAdornment:(0,A.jsx)(b.Z,{position:"end",children:(0,A.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:U,edge:"end",children:E?(0,A.jsx)(w.Z,{}):(0,A.jsx)(P.Z,{})})})})]}))}}),(0,A.jsx)(k,{sx:{ml:"14px",color:"#a62633"},children:V})]})]}),(0,A.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:0,mb:2},children:"Sign Up"})]})]})})},q=function(){return(0,A.jsx)(a.Z,{component:"main",sx:{marginTop:8},children:(0,A.jsx)(L,{})})}},3381:function(e,n,i){i.d(n,{OD:function(){return r},dm:function(){return o},gY:function(){return a}});var t=i(6727),r=(0,t.Ry)({name:(0,t.Z_)().required(),number:(0,t.Z_)().min(5).matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Invalid phone number").required()}),o=(0,t.Ry)({email:(0,t.Z_)().email().required(),password:(0,t.Z_)().required().min(7)}),a=(0,t.Ry)({name:(0,t.Z_)().required(),email:(0,t.Z_)().email().required(),password:(0,t.Z_)().required().min(7)})},3710:function(e,n,i){var t=i(9201),r=i(3329);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,i){var t=i(9201),r=i(3329);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3466:function(e,n,i){i.d(n,{Z:function(){return P}});var t=i(4942),r=i(3366),o=i(7462),a=i(2791),s=i(8182),l=i(4419),d=i(4036),c=i(890),m=i(3840),u=i(2930),p=i(6934),v=i(5878),x=i(1217);function Z(e){return(0,x.Z)("MuiInputAdornment",e)}var h,f=(0,v.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=i(1402),g=i(3329),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,n["position".concat((0,d.Z)(i.position))],!0===i.disablePointerEvents&&n.disablePointerEvents,n[i.variant]]}})((function(e){var n=e.theme,i=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===i.variant&&(0,t.Z)({},"&.".concat(f.positionStart,"&:not(.").concat(f.hiddenLabel,")"),{marginTop:16}),"start"===i.position&&{marginRight:8},"end"===i.position&&{marginLeft:8},!0===i.disablePointerEvents&&{pointerEvents:"none"})})),P=a.forwardRef((function(e,n){var i=(0,b.Z)({props:e,name:"MuiInputAdornment"}),t=i.children,p=i.className,v=i.component,x=void 0===v?"div":v,f=i.disablePointerEvents,P=void 0!==f&&f,y=i.disableTypography,S=void 0!==y&&y,z=i.position,C=i.variant,E=(0,r.Z)(i,j),_=(0,u.Z)()||{},I=C;C&&_.variant,_&&!I&&(I=_.variant);var M=(0,o.Z)({},i,{hiddenLabel:_.hiddenLabel,size:_.size,disablePointerEvents:P,position:z,variant:I}),k=function(e){var n=e.classes,i=e.disablePointerEvents,t=e.hiddenLabel,r=e.position,o=e.size,a=e.variant,s={root:["root",i&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),a,t&&"hiddenLabel",o&&"size".concat((0,d.Z)(o))]};return(0,l.Z)(s,Z,n)}(M);return(0,g.jsx)(m.Z.Provider,{value:null,children:(0,g.jsx)(w,(0,o.Z)({as:x,ownerState:M,className:(0,s.Z)(k.root,p),ref:n},E,{children:"string"!==typeof t||S?(0,g.jsxs)(a.Fragment,{children:["start"===z?h||(h=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,g.jsx)(c.Z,{color:"text.secondary",children:t})}))})}))}}]);
//# sourceMappingURL=65.3bde2cc7.chunk.js.map
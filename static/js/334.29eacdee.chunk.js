"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[334],{6334:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,i,o,a,s,l,c,d=t(4554),u=t(1614),x=t(1413),m=t(9439),p=t(2791),h=t(9434),Z=t(9195),j=t(4695),f=t(6520),v=t(9877),b=t(5289),g=t(5661),w=t(9157),C=t(1889),k=t(6151),y=t(7123),P=t(675),_=t(9823),I=t(8518),S=t(2526),q=t(2286),A=t(1073),F=t(168),W=t(7691),D=t(4227),z=t(8096),L=t(7071),O=(0,W.ZP)(D.Z)(r||(r=(0,F.Z)(["\n  & label {\n    color: rgba(0, 0, 0, 0.6);\n    }\n"]))),R=((0,W.ZP)(z.Z)(i||(i=(0,F.Z)(["\n  color: rgba(0, 0, 0, 0.6);\n  \n  & label {\n    color: rgba(0, 0, 0, 0.6);\n    }\n"]))),(0,W.ZP)(k.Z)(o||(o=(0,F.Z)(["\n  position: absolute;\n  top: 0;\n"])))),T=(0,W.ZP)(L.Z)(a||(a=(0,F.Z)(["\n  text-align: center;\n  position: absolute;\n  background-color: white;\n  padding: 0 4px;\n  margin-left: 14px;\n"]))),U=t(3381),K=t(3329),Q=function(){var n,e,t,r,i=(0,h.I0)(),o=(0,h.v9)(q.Af),a=(0,p.useState)(!1),s=(0,m.Z)(a,2),l=s[0],c=s[1],F=(0,Z.cI)({resolver:(0,j.X)(U.OD),defaultValues:{name:"",number:""}}),W=F.register,D=F.handleSubmit,z=F.reset,L=F.control,Q=F.formState.errors,E=function(){c(!1)},G=(null===(n=Q.name)||void 0===n?void 0:n.message.charAt(0).toUpperCase())+(null===(e=Q.name)||void 0===e?void 0:e.message.slice(1))||"",N=(null===(t=Q.number)||void 0===t?void 0:t.message.charAt(0).toUpperCase())+(null===(r=Q.number)||void 0===r?void 0:r.message.slice(1))||"";return(0,K.jsxs)(u.Z,{component:"div",sx:{mb:"16px"},children:[(0,K.jsx)(f.Z,{title:"Add contact",children:(0,K.jsx)(v.Z,{color:"primary","aria-label":"add contact",sx:{position:"absolute",top:"20px",left:"800px"},onClick:function(){c(!0)},children:(0,K.jsx)(P.Z,{})})}),(0,K.jsxs)(b.Z,{open:l,onClose:E,children:[(0,K.jsx)(g.Z,{children:"Add contact"}),(0,K.jsx)(w.Z,{children:(0,K.jsxs)(d.Z,{component:"form",onSubmit:D((function(n){if(o.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))return(0,I.yv)("".concat(n.name," is already in contacts."),(0,A.TF)("error"));i((0,S.uK)(n)),(0,I.yv)("".concat(n.name," was successfully added!"),(0,A.TF)("success")),z(),E()})),sx:{mt:2},children:[(0,K.jsxs)(C.ZP,{container:!0,children:[(0,K.jsxs)(C.ZP,{item:!0,xs:12,sx:{mb:"20px",position:"relative"},children:[(0,K.jsx)(Z.Qr,{name:"name",control:L,render:function(n){var e=n.field;return(0,K.jsx)(O,(0,x.Z)((0,x.Z)((0,x.Z)({},e),W("name")),{},{variant:"standard",label:"Name *",fullWidth:!0,type:"text",autoFocus:!0,id:"name"}))}}),(0,K.jsx)(T,{sx:{ml:"14px",color:"#a62633"},children:G})]}),(0,K.jsxs)(C.ZP,{item:!0,xs:12,sx:{mb:"20px",position:"relative"},children:[(0,K.jsx)(Z.Qr,{name:"number",control:L,render:function(n){var e=n.field;return(0,K.jsx)(O,(0,x.Z)((0,x.Z)((0,x.Z)({},e),W("number")),{},{variant:"standard",label:"Phone number *",fullWidth:!0,type:"tel",autoComplete:"number",id:"number"}))}}),(0,K.jsx)(T,{sx:{ml:"14px",color:"#a62633"},children:N})]})]}),(0,K.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})}),(0,K.jsx)(y.Z,{children:(0,K.jsx)(R,{onClick:E,sx:{position:"absolute",top:"8px",right:"8px",p:"0",minWidth:"24px"},children:(0,K.jsx)(_.Z,{})})})]})]})},E=t(493),G=t(2627),N=t(6259),V=t(3400),X=t(3368),Y=function(n){var e=n.contact,t=n.handleListItemClick,r=n.selected,i=(0,h.I0)(),o=e.id,a=e.name,s=e.number;return(0,K.jsx)("li",{children:(0,K.jsxs)(G.Z,{component:"div",onClick:function(n){return t(n,o)},selected:r,children:[(0,K.jsx)(N.Z,{primary:(0,K.jsxs)("p",{children:[a,": ",s]})}),(0,K.jsx)(f.Z,{title:"Delete",onClick:function(){return n=o,void i((0,S.GK)(n));var n},sx:{mr:"2px"},children:(0,K.jsx)(V.Z,{"aria-label":"delete contact",color:"error",size:"large",children:(0,K.jsx)(X.Z,{})})})]})})},B=t(9333),H=t(7047),J=function(){return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(G.Z,{component:"div",children:[(0,K.jsx)(B.Z,{children:(0,K.jsx)(H.Z,{variant:"circular",width:40,height:40,animation:"wave"})}),(0,K.jsx)(H.Z,{variant:"text",width:376,sx:{fontSize:"16px"},animation:"wave"})]})})},M=function(){var n=(0,h.I0)(),e=(0,h.v9)(q.DI),t=(0,h.v9)(q.xU),r=(0,h.v9)(q.zh),i=(0,p.useState)(""),o=(0,m.Z)(i,2),a=o[0],s=o[1];(0,p.useEffect)((function(){n((0,S.yF)())}),[n]);var l=function(n,e){s(e)};return(0,K.jsx)(u.Z,{component:"div",children:(0,K.jsx)(C.ZP,{container:!0,columnSpacing:3,children:(0,K.jsx)(C.ZP,{item:!0,xs:7,children:(0,K.jsxs)(d.Z,{sx:{width:"100%",maxWidth:400,bgcolor:"background.paper"},children:[0!==e.length&&(0,K.jsx)(E.Z,{component:"ul","aria-label":"Contacts list",children:e.map((function(n){return(0,K.jsx)(Y,{contact:n,handleListItemClick:l,selected:n.id===a},n.id)}))}),t&&!r&&(0,K.jsx)(J,{}),r&&(0,K.jsx)("p",{children:"Oh no! Something went wrong. Please, try again later."})]})})})})},$=t(6895),nn=t(1421),en=(0,W.ZP)(D.Z)(s||(s=(0,F.Z)(["\n  width: 400px;\n  padding-left: 8px;\n  position: relative;\n  border-radius: 2;\n  \n  & label {\n    color: rgba(0, 0, 0, 0.6);\n    margin-left: 8px;\n  }\n  \n  & input {\n    margin-left: 8px;\n  }\n"]))),tn=(0,W.ZP)(d.Z)(l||(l=(0,F.Z)(["\n  width: 400px;\n  position: relative;\n"]))),rn=(0,W.ZP)(nn.Z)(c||(c=(0,F.Z)(["\n  position: absolute;\n  right: 4px;\n  bottom: 4px;\n  color: #000000;\n"]))),on=function(){var n=(0,h.I0)(),e=(0,h.v9)(q.AD);return(0,K.jsx)(u.Z,{component:"div",children:(0,K.jsxs)(tn,{component:"form",sx:{mb:"36px"},children:[(0,K.jsx)(en,{id:"filter",label:"Find contacts",variant:"standard",size:"small",onChange:function(e){var t=e.target.value.trim();n((0,$.T)(t))},value:e}),(0,K.jsx)(rn,{})]})})},an=function(){return(0,K.jsx)(d.Z,{component:"main",sx:{position:"relative"},children:(0,K.jsxs)(u.Z,{maxWidth:"xl",sx:{boxShadow:1,p:3},children:[(0,K.jsx)(on,{}),(0,K.jsx)(Q,{}),(0,K.jsx)(M,{})]})})}},3381:function(n,e,t){t.d(e,{OD:function(){return i},dm:function(){return o},gY:function(){return a}});var r=t(6727),i=(0,r.Ry)({name:(0,r.Z_)().required(),number:(0,r.Z_)().min(5).matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Invalid phone number").required()}),o=(0,r.Ry)({email:(0,r.Z_)().email().required(),password:(0,r.Z_)().required().min(7)}),a=(0,r.Ry)({name:(0,r.Z_)().required(),email:(0,r.Z_)().email().required(),password:(0,r.Z_)().required().min(7)})}}]);
//# sourceMappingURL=334.29eacdee.chunk.js.map
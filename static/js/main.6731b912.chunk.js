(this["webpackJsonpthe-real-reactivation"]=this["webpackJsonpthe-real-reactivation"]||[]).push([[0],{101:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);t(101);var n,r,i,s,c=t(18),o=t(23),l=t(0),u=t.n(l),d=t(11),m=t(2),j=function(e){var a=e.isAuthenticated,t=e.authenticationPath,n=e.component,r=e.path;return a?Object(m.jsx)(d.b,{component:n,path:r}):Object(m.jsx)(d.a,{to:{pathname:t}})},b=t(24),h=t(40),p=t(41),O=p.a.button(n||(n=Object(h.a)(["\n  display: inline-block;\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"]))),g=p.a.img(r||(r=Object(h.a)(["\n  height: 720px;\n  max-width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=p.a.h1(i||(i=Object(h.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n"]))),v=function(){return Object(m.jsx)(x,{children:"Welcome to the Reactivation!"})},f=t(33),C=t(180),y=t(177),w=t(172),S=t(168),N={isAuthenticated:!1,redirectPath:""},k=Object(l.createContext)([N,function(e){}]),F=function(e){var a=Object(l.useState)(N),t=Object(o.a)(a,2),n=[t[0],t[1]];return Object(m.jsx)(k.Provider,{value:n,children:e.children})},W=t(178),I=t(169),P=t(170),A=t(173),D=t(166),R=t(176),T=t(87),q=t(167),L=t(39),J=function(){return Object(m.jsxs)(T.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(m.jsx)(D.a,{color:"inherit",href:"https://material-ui.com/",children:"DAZEN"})," ",(new Date).getFullYear(),"."]})},B=function(){var e=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.dark},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.dark}}})),a=Object(l.useContext)(k),t=Object(o.a)(a,2)[1],n=Object(d.g)(),r=e(),i=Object(L.a)({initialValues:{username:"",password:""},onSubmit:function(e){try{var a=localStorage.getItem("users");if(a&&a.indexOf(e.username)){var r=JSON.parse(a)[e.username];r.username===e.username&&r.password===e.password?(alert("Logged!"),t({isAuthenticated:!0,redirectPath:"/Dashboard"}),n.push("/Dashboard"),localStorage.setItem("user",JSON.parse(e.username))):r.password!==e.password&&alert("Wrong password.")}else alert("That user doesn't exist.")}catch(i){throw i}}});return Object(m.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(I.a,{}),Object(m.jsxs)("div",{className:r.paper,children:[Object(m.jsx)(C.a,{className:r.avatar}),Object(m.jsx)(T.a,{component:"h1",variant:"h5",children:"Log into reactive!"}),Object(m.jsxs)("form",{className:r.form,noValidate:!0,onSubmit:i.handleSubmit,children:[Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:i.handleChange,value:i.values.username}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:i.handleChange,value:i.values.password}),Object(m.jsx)(P.a,{control:Object(m.jsx)(W.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(m.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit,children:"Login"}),Object(m.jsxs)(A.a,{container:!0,children:[Object(m.jsx)(A.a,{item:!0,xs:!0,children:Object(m.jsx)(D.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(m.jsx)(A.a,{item:!0,children:Object(m.jsxs)(D.a,{component:b.b,to:"/Register",variant:"body2",children:["Don't have an account? Sign Up"," "]})})]})]})]}),Object(m.jsx)(y.a,{mt:8,children:Object(m.jsx)(J,{})})]})},E=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.dark}}})),U=function(){var e=E(),a=Object(L.a)({initialValues:{username:"",firstname:"",lastname:"",password:""},onSubmit:function(e){var a=localStorage.getItem("users"),t={};(null===a||void 0===a?void 0:a.includes(e.username))?alert("The username is already taken."):(t=a?Object(c.a)(Object(c.a)({},JSON.parse(a)),{},Object(f.a)({},e.username,e)):Object(f.a)({},e.username,e),localStorage.setItem("users",JSON.stringify(t)),alert("User registered!"))}});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(I.a,{}),Object(m.jsxs)("div",{className:e.paper,children:[Object(m.jsx)(C.a,{className:e.avatar}),Object(m.jsx)(T.a,{component:"h1",variant:"h5",children:"Edit your user reactive user!"}),Object(m.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:a.handleSubmit,children:[Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:a.handleChange,value:a.values.username}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstname",label:"Firstname",name:"firstname",autoComplete:"firstname",autoFocus:!0,onChange:a.handleChange,value:a.values.firstname}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastname",label:"Lastname",name:"lastname",autoComplete:"lastname",autoFocus:!0,onChange:a.handleChange,value:a.values.lastname}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:a.handleChange,value:a.values.password}),Object(m.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Edit"})]})]}),Object(m.jsx)(y.a,{mt:8,children:Object(m.jsx)(J,{})})]})})},V=t(62),G=t.n(V),z=function(){var e=Object(l.useState)(),a=Object(o.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(!0),i=Object(o.a)(r,2),s=(i[0],i[1]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{children:"Welcome to the real reactivation!"}),Object(m.jsx)(x,{children:"Check a cat.."}),Object(m.jsx)(O,{onClick:function(){G.a.get("https://api.thecatapi.com/v1/images/search",{}).then((function(e){var a=e.data;n(a[0]),s(!1)})).catch((function(e){var a=G.a.isCancel(e)?"Request Cancelled":"ECONNABORTED"===e.code?"A timeout has occurred":404===e.response.status?"Resource Not Found":"An unexpected error has occurred";throw s(!1),a}))},children:"Load a cat..."}),Object(m.jsx)("div",{children:Object(m.jsx)(g,{src:"".concat(t?t.url:"")})})]})})},H=t(181),M=t(174),Y=t(171),Z=t(175),K=Object(q.a)((function(e){return Object(H.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navBar:{backgroundColor:e.palette.secondary.dark}})})),Q=function(e){var a=e.items,t=void 0===a?[]:a,n=Object(l.useContext)(k),r=Object(o.a)(n,1)[0],i=K(),s=Object(d.g)(),c=function(e){s.push(e)},u=[{route:"/",navItem:"Home",display:!0},{route:"/Login",navItem:"Login",display:!r.isAuthenticated},{route:"/Register",navItem:"Register",display:!r.isAuthenticated},{route:"/Dashboard",navItem:"Dashboard",display:r.isAuthenticated},{route:"/Profile",navItem:"Profile",display:r.isAuthenticated}];return Object(m.jsx)("div",{className:i.root,children:Object(m.jsx)(M.a,{position:"static",className:i.navBar,children:Object(m.jsxs)(Z.a,{children:[Object(m.jsx)(Y.a,{edge:"start",className:i.menuButton,color:"default","aria-label":"menu"}),Object(m.jsx)(T.a,{variant:"h6",className:i.title,children:"Reactivation"}),t.length>0?t.filter((function(e){return e.display})).map((function(e){var a=e.route,t=e.navItem;return Object(m.jsx)(w.a,{color:"inherit",onClick:function(){return c(a)},children:t},a)})):u.filter((function(e){return e.display})).map((function(e){var a=e.route,t=e.navItem;return Object(m.jsx)(w.a,{color:"inherit",onClick:function(){return c(a)},children:t},a)}))]})})})},X=t(179),$=(p.a.button(s||(s=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-item: center;\n"]))),function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{children:Object(m.jsx)(b.b,{to:"/Profile/Details",children:"Details"})}),Object(m.jsx)(O,{children:Object(m.jsx)(X.a,{href:"/",className:"text-align: center",children:"Logout"})})]})}),_=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.dark}}})),ee=function(e){var a=localStorage.getItem("users"),t={};(null===a||void 0===a?void 0:a.includes(e.username))?alert("The username is already taken."):(t=a?Object(c.a)(Object(c.a)({},JSON.parse(a)),{},Object(f.a)({},e.username,e)):Object(f.a)({},e.username,e),localStorage.setItem("users",JSON.stringify(t)),alert("User registered!"))},ae=function(){var e=_(),a=Object(L.a)({initialValues:{username:"",firstname:"",lastname:"",password:""},onSubmit:ee});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(I.a,{}),Object(m.jsxs)("div",{className:e.paper,children:[Object(m.jsx)(C.a,{className:e.avatar}),Object(m.jsx)(T.a,{component:"h1",variant:"h5",children:"Register into reactive!"}),Object(m.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:a.handleSubmit,children:[Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:a.handleChange,value:a.values.username}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstname",label:"Firstname",name:"firstname",autoComplete:"firstname",autoFocus:!0,onChange:a.handleChange,value:a.values.firstname}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastname",label:"Lastname",name:"lastname",autoComplete:"lastname",autoFocus:!0,onChange:a.handleChange,value:a.values.lastname}),Object(m.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:a.handleChange,value:a.values.password}),Object(m.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Register"})]})]}),Object(m.jsx)(y.a,{mt:8,children:Object(m.jsx)(J,{})})]})})},te=function(){var e=Object(l.useContext)(k),a=Object(o.a)(e,1)[0],t={isAuthenticated:!a.isAuthenticated,authenticationPath:a.redirectPath},n={isAuthenticated:a.isAuthenticated,authenticationPath:a.redirectPath};return Object(m.jsxs)(b.a,{children:[Object(m.jsx)(Q,{}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(j,Object(c.a)(Object(c.a)({},n),{},{path:"/dashboard",component:v})),Object(m.jsx)(j,Object(c.a)(Object(c.a)({},n),{},{path:"/profile/details",component:U})),Object(m.jsx)(j,Object(c.a)(Object(c.a)({},n),{},{path:"/profile",component:$})),Object(m.jsx)(d.b,Object(c.a)(Object(c.a)({},t),{},{path:"/login",component:B})),Object(m.jsx)(d.b,Object(c.a)(Object(c.a)({},t),{},{path:"/register",component:ae})),Object(m.jsx)(d.b,{path:"/",component:z})]})]})},ne=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(F,{children:Object(m.jsx)(te,{})})})},re=t(10),ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,184)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),i(e),s(e)}))};t.n(re).a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(ne,{})})}),document.getElementById("root")),ie()}},[[132,1,2]]]);
//# sourceMappingURL=main.6731b912.chunk.js.map
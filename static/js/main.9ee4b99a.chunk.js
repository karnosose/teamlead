(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(201)},136:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),l=(a(136),a(19)),o=a(20),c=a(22),m=a(21),u=a(23),p=a(29),d=a(9),h=a(18),f="https://picsart-bootcamp-2020-api.herokuapp.com/api/v1",g=function(e){return{type:"set_current_user",user:e}},b=a(26),E=a.n(b),v=a(239),j=a(241),y=a(242),x=a(243),O=a(118),N=a.n(O),w=a(114),C=a.n(w),k=a(8),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedIn:!1},a.handleLogOut=function(){a.props.logOut(JSON.stringify(localStorage.getItem("token"))),localStorage.removeItem("token")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=function(){return e.props.currentUser.email?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/teams",key:E()(),className:t.menuItem},"Teams"),r.a.createElement(p.b,{to:"/topics",key:E()(),className:t.menuItem},"Topics"),r.a.createElement(p.b,{to:"/projects",key:E()(),className:t.menuItem},"Projects"),r.a.createElement(p.b,{to:"/",key:E()(),className:t.menuItem,onClick:e.handleLogOut},"Log out"),r.a.createElement(p.b,{to:"/profile",key:E()(),className:t.menuItem},r.a.createElement(C.a,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/login",key:E()(),className:t.menuItem},"Log in"),r.a.createElement(p.b,{to:"/register",key:E()(),className:t.menuItem},"Register"))};return r.a.createElement(v.a,{position:"static"},r.a.createElement(j.a,{className:t.header},r.a.createElement("div",{className:t.icon},r.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"open drawer"},r.a.createElement(N.a,null)),r.a.createElement(x.a,{variant:"h6",noWrap:!0},"TeamBuilder")),r.a.createElement("div",{className:t.menuItems},r.a.createElement(a,null))))}}]),t}(n.Component),T=Object(h.b)(function(e){return{currentUser:e.currentUser}},function(e){return{logOut:function(t){return e(function(e){return function(t){fetch("".concat(f,"/users/logout"),{headers:{token:e}}).then(function(e){return e.json()}).then(t({type:"LOG_OUT"}))}}(t))}}})(Object(k.a)({header:{display:"flex",justifyContent:"space-between"},icon:{display:"flex",flexDirection:"row",alignItems:"center"},menuItem:{textDecoration:"none",color:"white",margin:"0 15px"},menuItems:{display:"flex"}})(S)),D=a(244),I=a(245),U=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getTopics(JSON.parse(localStorage.getItem("token")))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.topics;return r.a.createElement("div",null,r.a.createElement("h2",{className:t.title},"Topics"),a.map(function(e){return r.a.createElement(D.a,{className:t.root,key:E()()},r.a.createElement("div",{className:t.details},r.a.createElement(I.a,{className:t.content},r.a.createElement(x.a,{component:"h5",variant:"h5"},e.title),r.a.createElement(x.a,null,"Votes: ",e.votingsCount))))}))}}]),t}(n.Component),F=Object(h.b)(function(e){return{topics:e.topics}},function(e){return{getTopics:function(t){return e(function(e){return function(t){fetch("".concat("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1","/topics"),{headers:{token:e}}).then(function(e){return e.json()}).then(function(e){return t({type:"SET_TOPICS",topics:e})})}}(t))}}})(Object(k.a)({root:{width:500,margin:"10px auto"},details:{},content:{display:"flex",alignItems:"center",justifyContent:"space-between"},title:{width:500,textAlign:"center",margin:"40px auto"}})(U)),A=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects(JSON.parse(localStorage.getItem("token")))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.projects;return r.a.createElement("div",null,r.a.createElement("h2",{className:t.title},"Projects"),a.map(function(e){return r.a.createElement(D.a,{className:t.root,key:E()()},r.a.createElement("div",{className:t.details},r.a.createElement(I.a,{className:t.content},r.a.createElement("div",{className:t.projectTitle},r.a.createElement(x.a,{component:"h5",variant:"h5"},e.title)),r.a.createElement("div",{className:t.descAndVotes},r.a.createElement(x.a,{className:t.description},e.description),r.a.createElement(x.a,null,"Votes: ",e.votingsCount)))))}))}}]),t}(n.Component),R=Object(h.b)(function(e){return{projects:e.projects}},function(e){return{getProjects:function(t){return e(function(e){return function(t){fetch("".concat("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1","/projects"),{headers:{token:e}}).then(function(e){return e.json()}).then(function(e){return t({type:"SET_PROJECTS",projects:e})})}}(t))}}})(Object(k.a)({root:{width:800,margin:"10px auto",padding:0},content:{display:"flex",alignItems:"stretch",justifyContent:"space-between",padding:"0!important"},title:{width:500,textAlign:"center",margin:"40px auto"},description:{padding:"20px 40px 20px"},descAndVotes:{display:"flex",alignItems:"center",padding:"20px"},projectTitle:{display:"flex",alignItems:"center",padding:20,background:"#3f51b5","& h5":{width:110,color:"white",fontSize:20}}})(A)),P=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getTeams(JSON.parse(localStorage.getItem("token")))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.teams;return r.a.createElement("div",null,console.log(a),r.a.createElement("h2",{className:t.title},"Teams"),a.map(function(e){return r.a.createElement(D.a,{className:t.root,key:E()()},r.a.createElement("div",{className:t.details},r.a.createElement(I.a,{className:t.content},r.a.createElement("div",{className:t.teamTitle},r.a.createElement(x.a,{component:"h5",variant:"h5"},e.name)),r.a.createElement("div",{className:t.teamContent},r.a.createElement("div",{className:t.projectAndTopic},r.a.createElement(x.a,{className:t.description},"Project:  ",e.project),r.a.createElement(x.a,null,"Topic: ",e.topic)),r.a.createElement("div",{className:t.teamMembers},e.members.map(function(e){return r.a.createElement(x.a,null,e.firstName," ",e.lastName)}))))))}))}}]),t}(n.Component),q=Object(h.b)(function(e){return{teams:e.teams}},function(e){return{getTeams:function(t){return e(function(e){return function(t){fetch("".concat("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1","/teams"),{headers:{token:e}}).then(function(e){return e.json()}).then(function(e){return t({type:"SET_TEAMS",teams:e})})}}(t))}}})(Object(k.a)({root:{width:800,margin:"10px auto"},content:{display:"flex",flexDirection:"column"},title:{width:500,textAlign:"center",margin:"40px auto"},description:{},teamContent:{display:"flex",justifyContent:"space-around",padding:"20px"},teamTitle:{display:"flex",alignItems:"center",justifyContent:"center",padding:20,background:"#3f51b5","& h5":{color:"white",fontSize:20}},projectAndTopic:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}})(P)),J=a(52),_=a(25),B=a(249),M=a(258),L=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),V=RegExp(/(https?:\/\/.*\.(?:png|jpg))/i),z=function(e){var t={};return Object.keys(e).forEach(function(a){var n=e[a];switch(a){case"firstName":n.match(/^[a-zA-Z]+$/)||(t.firstName="name shouldn't be empty and  can contain only letters");break;case"lastName":n.match(/^[a-zA-Z]+$/)||(t.lastName="last name shouldn't be empty and  can contain only letters");break;case"email":L.test(n)||(t.email="Email is not valid!");break;case"password":n.length<8&&(t.password="Password must be at least 8 characters long!");break;case"sex":n.length<1&&(t.sex="please select your sex");break;case"avatarUrl":V.test(n)||(t.avatarUrl="avatar should pe in .jpg or .png format");break;case"companyId":n.length<1&&(t.companyId="please select company");break;case"jsExperience":(!n.length||n.length<1||n<0)&&(t.js="please type your js experience");break;case"reactExperience":(!n.length||n.length<1||n<0)&&(t.react="please type your react experience");break;case"birdthDate":n.length<1&&(t.birdthDate="select your birdth date")}}),t},W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",errors:[]},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},a.state,Object(J.a)({},n,r)))},a.handleSubmit=function(e){L.test(a.state.email)?a.props.login(a.state.email,a.state.password):a.setState(Object(_.a)({},a.state,{errors:"email is not valid"}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.currentUser.email?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:t.form},r.a.createElement(x.a,{variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:t.formFields},r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,required:!0,id:"outlined-required",name:"email",label:"email",variant:"outlined",value:this.state.email,onChange:this.handleChange,error:this.state.errors.length>0,helperText:this.state.errors})),r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,id:"outlined-password-input",name:"password",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",value:this.state.password,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement(B.a,{variant:"contained",color:"primary",className:t.loginButton,onClick:function(t){return e.handleSubmit(t)}},"sign in")))))}}]),t}(n.Component),$=Object(h.b)(function(e){return{currentUser:e.currentUser}},function(e){return{login:function(t,a){return e(function(e,t){return function(a){fetch("".concat(f,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){if(200!==e.status)throw Error(e.statusText);return e.json()}).then(function(e){a(g(e)),localStorage.setItem("token",JSON.stringify(e.token))})}}(t,a))}}})(Object(k.a)({form:{margin:"auto",textAlign:"center",marginTop:40},formFields:{width:400,display:"flex",flexDirection:"column",marginTop:40,margin:"auto","& div":{}},formField:{margin:"10px 0",width:400},loginButton:{margin:"20px 0 80px 0",padding:"8px 20px"}})(W)),G=a(119),Z=a.n(G),Y=a(256),H=a(259),K=a(248),Q=a(253),X=function(e){var t=(e.getMonth()+1+"").length<2?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate().length<2?"0"+e.getDate():e.getDate();return e.getFullYear()+"-"+t+"-"+a},ee=(a(143),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userDetails:{firstName:"",lastName:"",email:"",password:"",sex:"",avatarUrl:"",jsExperience:"",reactExperience:"",companyId:"",birthDate:Date.now()},errors:{}},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},a.state,{userDetails:Object(_.a)({},a.state.userDetails,Object(J.a)({},n,r))}))},a.handleBirthDateChange=function(e){a.setState(Object(_.a)({},a.state,{userDetails:Object(_.a)({},a.state.userDetails,{birthDate:e})}))},a.handleSubmit=function(e){e.preventDefault();var t=z(a.state.userDetails);if(a.setState(Object(_.a)({},a.state,{errors:t})),0===Object.entries(t).length){var n=X(a.state.userDetails.birthDate),r=a.state.userDetails;r.birthDate=n,r.jsExperience=+r.jsExperience,r.reactExperience=+r.reactExperience,a.props.registerUser(r)}else console.error("20")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.currentUser.email?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:t.form},r.a.createElement(x.a,{variant:"h5"},"Register"),r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:t.formFields},r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,required:!0,error:!!this.state.errors.email,id:"outlined-required",name:"email",label:"email",variant:"outlined",value:this.state.userDetails.email,onChange:this.handleChange,helperText:this.state.errors.email})),r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,id:"outlined-password-input",name:"password",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",value:this.state.userDetails.password,onChange:this.handleChange,error:!!this.state.errors.password,helperText:this.state.errors.password})),r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,required:!0,id:"outlined-required",name:"firstName",label:"first name",variant:"outlined",value:this.state.userDetails.firstName,onChange:this.handleChange,error:!!this.state.errors.firstName,helperText:this.state.errors.firstName})),r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,required:!0,id:"outlined-required",label:"last name",name:"lastName",variant:"outlined",value:this.state.userDetails.lastName,onChange:this.handleChange,error:!!this.state.errors.lastName,helperText:this.state.errors.lastName})),r.a.createElement("div",{className:t.dateField},r.a.createElement("label",null,"Birdth date:"),r.a.createElement(Z.a,{name:"birthdate",className:t.dataPicker,selected:this.state.userDetails.birthDate,onChange:function(t){return e.handleBirthDateChange(t)}})),r.a.createElement("div",null,r.a.createElement(M.a,{className:t.formField,required:!0,id:"outlined-required",label:"avatar url",name:"avatarUrl",variant:"outlined",value:this.state.userDetails.avatarUrl,onChange:this.handleChange,error:!!this.state.errors.avatarUrl,helperText:this.state.errors.avatarUrl})),r.a.createElement("div",{className:t.sexAndCompany},r.a.createElement(K.a,{variant:"outlined",className:t.sexForm,required:!0,error:!!this.state.errors.sex},r.a.createElement(Y.a,{id:"demo-simple-select-outlined-label"},"Sex"),r.a.createElement(Q.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:this.state.userDetails.sex,onChange:this.handleChange,label:"Sex",name:"sex"},r.a.createElement(H.a,{value:"male"},"male"),r.a.createElement(H.a,{value:"female"},"female"))),r.a.createElement(K.a,{variant:"outlined",className:t.companyId,required:!0,error:!!this.state.errors.companyId},r.a.createElement(Y.a,{id:"demo-simple-select-outlined-label"},"Company ID"),r.a.createElement(Q.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:this.state.userDetails.companyId,name:"companyId",onChange:this.handleChange,label:"Company ID"},r.a.createElement(H.a,{value:1},"1"),r.a.createElement(H.a,{value:2},"2")))),r.a.createElement("div",{className:t.numberField},r.a.createElement(M.a,{required:!0,id:"outlined-number",label:"Js experience (months)",name:"jsExperience",type:"number",value:this.state.userDetails.jsExperience,InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange,error:!!this.state.errors.js,helperText:this.state.errors.js}),r.a.createElement(M.a,{required:!0,id:"outlined-number",label:"React experience (months)",name:"reactExperience",type:"number",InputLabelProps:{shrink:!0},value:this.state.userDetails.reactExperience,variant:"outlined",onChange:this.handleChange,error:!!this.state.errors.react,helperText:this.state.errors.react})),r.a.createElement("div",null,r.a.createElement(B.a,{variant:"contained",color:"primary",className:t.registerButton,onClick:function(t){return e.handleSubmit(t)}},"Register")))))}}]),t}(n.Component)),te=Object(h.b)(function(e){return{currentUser:e.currentUser}},function(e){return{registerUser:function(t){return e((a=t,function(){fetch("".concat(f,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){if(200!==e.status)throw Error(e.statusText)})}));var a}}})(Object(k.a)({form:{margin:"auto",textAlign:"center",marginTop:40},formFields:{width:500,display:"flex",flexDirection:"column",marginTop:40,margin:"auto","& div":{}},formField:{margin:"10px 0",width:500},dataPicker:{width:"100%"},dateField:{border:0,margin:"10px 0",display:"inline-flex",padding:0,position:"relative",minWidth:0,width:"100%",verticalAlign:"top","& label":{marginRight:20},"& input":{font:"inherit",color:"currentColor",height:"3.6em",margin:0,display:"block",minWidth:0,background:"none",boxSizing:"border-box",animationName:"mui-auto-fill-cancel",letterSpacing:"inherit",animationDuration:"10ms",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:4,padding:"18.5px 14px",width:440}},sexForm:{width:222,display:"flex",justifyContent:"flex-start"},companyId:{width:222,display:"flex",justifyContent:"flex-start"},sexAndCompany:{display:"flex",justifyContent:"space-between"},numberField:{display:"flex",justifyContent:"space-between",margin:"10px 0",width:"100%"},registerButton:{margin:"40px 0 80px 0",padding:"10px 30px"}})(ee)),ae=a(250),ne=a(252),re=a(251),se=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.currentUser;return r.a.createElement(D.a,{className:t.root},r.a.createElement(ae.a,null,r.a.createElement(re.a,{className:t.avatar,component:"img",alt:"Contemplative Reptile",height:"140",image:a.avatarUrl,title:"Contemplative Reptile"}),r.a.createElement(I.a,{className:t.profileDetails},r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.fullName},a.firstName," ",a.lastName),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"email: ",a.email),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"sex: ",a.sex),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Birth date: ",a.sex),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Js Experience: ",a.sex),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"React Experience: ",a.sex))),r.a.createElement(ne.a,{className:t.editUser},r.a.createElement(B.a,{size:"small",color:"primary"},"Edit details")))}}]),t}(n.Component),ie=Object(h.b)(function(e){return{currentUser:e.currentUser}})(Object(k.a)({root:{width:500,margin:"auto",marginTop:80,display:"flex"},avatar:{height:"100%",width:200,margin:"auto",marginTop:20,borderRadius:"50%"},fullName:{textAlign:"center"},profileDetails:{flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"auto"},editUser:{background:"#3f51b5","& button":{color:"white"}}})(se)),le=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("token")&&this.props.getUsers(JSON.parse(localStorage.getItem("token")))}},{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/"},!this.props.currentUser.email&&r.a.createElement(d.a,{to:"/login"}),r.a.createElement(T,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/topics"},r.a.createElement(F,null)),r.a.createElement(d.b,{path:"/projects"},r.a.createElement(R,null)),r.a.createElement(d.b,{path:"/teams"},r.a.createElement(q,null)),r.a.createElement(d.b,{path:"/login"},r.a.createElement($,null)),r.a.createElement(d.b,{path:"/register"},r.a.createElement(te,null)),r.a.createElement(d.b,{path:"/profile"},r.a.createElement(ie,null))))}}]),t}(n.Component),oe=Object(h.b)(function(e){return{currentUser:e.currentUser}},function(e){return{getUsers:function(t){return e(function(e){return function(t){fetch("".concat(f,"/users"),{headers:{token:e}}).then(function(e){return e.json()}).then(function(e){return t(g(e))})}}(t))}}})(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(66),me=a(122),ue={currentUser:{},serverError:"",topics:[],projects:[],teams:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(console.log("enter",e,t),t.type){case"set_current_user":return Object(_.a)({},e,{currentUser:t.user});case"LOG_OUT":return Object(_.a)({},e,{currentUser:{}});case"SET_SERVER_ERROR":return Object(_.a)({},e,{serverError:t.error});case"SET_TOPICS":return Object(_.a)({},e,{topics:t.topics});case"SET_PROJECTS":return Object(_.a)({},e,{projects:t.projects});case"SET_TEAMS":return Object(_.a)({},e,{teams:t.teams});default:return e}},de=Object(ce.a)(me.a),he=Object(ce.c)(pe,de);i.a.render(r.a.createElement(h.a,{store:he},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.9ee4b99a.chunk.js.map
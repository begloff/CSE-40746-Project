(function(){var e={6997:function(e,t,a){"use strict";var s=a(9242),l=a(3396);const o={key:0,class:"page"},r={key:1,class:"page"};function i(e,t,a,s,i,n){const c=(0,l.up)("PublicNavBar"),u=(0,l.up)("router-view"),d=(0,l.up)("PrivateNavBar");return e.$store.state.user?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(d),(0,l.Wm)(u)])):((0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(c),(0,l.Wm)(u)]))}var n=a(65),c=a.p+"img/smallgainzmaster.11a1bb31.png";const u=e=>((0,l.dD)("data-v-73c2ed34"),e=e(),(0,l.Cn)(),e),d={class:"navbar-nav"},m=u((()=>(0,l._)("img",{src:c,alt:""},null,-1))),h=u((()=>(0,l._)("p",null,[(0,l._)("b",null,"Gainzmaster")],-1))),p={class:"nav-item"},g={class:"nav-item"};function v(e,t,a,s,o,r){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("ul",d,[(0,l._)("li",null,[(0,l.Wm)(i,{to:"/",class:"image-link"},{default:(0,l.w5)((()=>[m,h])),_:1})]),(0,l._)("li",p,[(0,l.Wm)(i,{class:"nav-link","active-class":"active",to:"/login",style:{color:"#f8f8f8"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Login")])),_:1})]),(0,l._)("li",g,[(0,l.Wm)(i,{class:"nav-link","active-class":"active",to:"/signup",style:{color:"#f8f8f8"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Sign Up")])),_:1})])])}var w={},f=a(89);const _=(0,f.Z)(w,[["render",v],["__scopeId","data-v-73c2ed34"]]);var y=_;const b=e=>((0,l.dD)("data-v-7c3fff4e"),e=e(),(0,l.Cn)(),e),k={class:"navbar-nav"},D=b((()=>(0,l._)("img",{src:c,alt:""},null,-1))),x=b((()=>(0,l._)("p",null,[(0,l._)("b",null,"Gainzmaster")],-1))),M={class:"nav-item"},E={class:"nav-item"},S={class:"nav-item"};function C(e,t,a,s,o,r){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("ul",k,[(0,l._)("li",null,[(0,l.Wm)(i,{to:"/",class:"image-link"},{default:(0,l.w5)((()=>[D,x])),_:1})]),(0,l._)("li",M,[(0,l.Wm)(i,{class:"nav-link","active-class":"active",to:"/home",style:{color:"#f8f8f8"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Workout Creator")])),_:1})]),(0,l._)("li",E,[(0,l.Wm)(i,{class:"nav-link","active-class":"active",to:"/exercisecatalog",style:{color:"#f8f8f8"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Exercise Catalog")])),_:1})]),(0,l._)("li",S,[(0,l.Wm)(i,{class:"nav-link","active-class":"active",to:"/musclecatalog",style:{color:"#f8f8f8"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Muscle Catalog")])),_:1})]),(0,l._)("li",{class:"nav-item",onClick:t[0]||(t[0]=t=>e.$store.dispatch("logout"))},[(0,l.Wm)(i,{class:"nav-link","active-class":"active",to:"/",style:{color:"#f8f8f8"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Log Out")])),_:1})])])}var U={};const z=(0,f.Z)(U,[["render",C],["__scopeId","data-v-7c3fff4e"]]);var W=z,I={async beforeCreate(){const e=(0,n.oR)();await e.dispatch("fetchUser")},components:{PublicNavBar:y,PrivateNavBar:W}};const $=(0,f.Z)(I,[["render",i]]);var G=$,T=a(2483),L=a.p+"img/gainzmaster-6.6609b19d.png";const q=e=>((0,l.dD)("data-v-08f963ae"),e=e(),(0,l.Cn)(),e),j={class:"backimage"},O=q((()=>(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col"},[(0,l._)("img",{class:"logo",src:L})])],-1))),N=q((()=>(0,l._)("hr",null,null,-1))),H={class:"row"},A={class:"col"},F=q((()=>(0,l._)("h2",{style:{color:"white"}},"Login",-1))),R=q((()=>(0,l._)("label",{style:{padding:"15px"},for:"username"},[(0,l._)("b",{class:"text-label"},"Username")],-1))),Z=q((()=>(0,l._)("label",{style:{padding:"15px"},for:"pswd"},[(0,l._)("b",{class:"text-label"},"Password")],-1))),Y=q((()=>(0,l._)("button",{class:"btn",type:"submit"},"Login",-1)));function B(e,t,a,o,r,i){return(0,l.wg)(),(0,l.iD)("div",j,[O,N,(0,l._)("div",H,[(0,l._)("div",A,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>i.loginUser&&i.loginUser(...e)),["prevent"]))},[F,R,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e),type:"text",placeholder:"Enter Username",name:"username",required:""},null,512),[[s.nr,r.username]]),Z,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),type:"password",placeholder:"Enter Password",name:"pswd",required:""},null,512),[[s.nr,r.password]]),Y],32)])])])}var P={name:"login",components:{},data(){return{password:null,username:null}},methods:{loginUser(){this.$store.dispatch("loginUser",{username:this.username,password:this.password})}}};const V=(0,f.Z)(P,[["render",B],["__scopeId","data-v-08f963ae"]]);var K=V;const Q=e=>((0,l.dD)("data-v-ea3e8bc8"),e=e(),(0,l.Cn)(),e),J={class:"backimage"},X=Q((()=>(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col"},[(0,l._)("img",{class:"logo2",src:L})])],-1))),ee=Q((()=>(0,l._)("hr",null,null,-1))),te={class:"row"},ae={class:"col"},se=Q((()=>(0,l._)("h2",{style:{color:"white"}},"Create an Account!",-1))),le=Q((()=>(0,l._)("br",null,null,-1))),oe=Q((()=>(0,l._)("br",null,null,-1))),re=Q((()=>(0,l._)("label",{for:"email"},[(0,l._)("b",{class:"text-label"},"Email")],-1))),ie=Q((()=>(0,l._)("br",null,null,-1))),ne=Q((()=>(0,l._)("br",null,null,-1))),ce=Q((()=>(0,l._)("br",null,null,-1))),ue=Q((()=>(0,l._)("label",{for:"username"},[(0,l._)("b",{class:"text-label"},"Username")],-1))),de=Q((()=>(0,l._)("br",null,null,-1))),me=Q((()=>(0,l._)("br",null,null,-1))),he=Q((()=>(0,l._)("br",null,null,-1))),pe=Q((()=>(0,l._)("label",{for:"pswd"},[(0,l._)("b",{class:"text-label"},"Password")],-1))),ge=Q((()=>(0,l._)("br",null,null,-1))),ve=Q((()=>(0,l._)("br",null,null,-1))),we=Q((()=>(0,l._)("br",null,null,-1))),fe=Q((()=>(0,l._)("button",{class:"btn",type:"submit"},"Create Account",-1)));function _e(e,t,a,o,r,i){return(0,l.wg)(),(0,l.iD)("div",J,[X,ee,(0,l._)("div",te,[(0,l._)("div",ae,[(0,l._)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>i.registerUser&&i.registerUser(...e)),["prevent"]))},[se,le,oe,re,ie,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e),type:"email",placeholder:"Enter Email",name:"email",required:""},null,512),[[s.nr,r.email]]),ne,ce,ue,de,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.username=e),type:"text",placeholder:"Enter Username",name:"username",required:""},null,512),[[s.nr,r.username]]),me,he,pe,ge,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.password=e),type:"password",placeholder:"Enter Password",name:"pswd",required:""},null,512),[[s.nr,r.password]]),ve,we,fe],32)])])])}var ye={name:"register",components:{},data(){return{username:null,email:null,password:null}},methods:{registerUser(){this.$store.dispatch("registerUser",{username:this.username,email:this.email,password:this.password})}}};const be=(0,f.Z)(ye,[["render",_e],["__scopeId","data-v-ea3e8bc8"]]);var ke=be,De=a(7139),xe=a.p+"img/lion.68ca9848.jpeg";const Me={class:"header"},Ee={style:{width:"60%","background-color":"white",margin:"auto"}},Se=(0,l._)("h1",null," Gainzmaster Home ",-1),Ce={class:"quote",style:{position:"relative"}},Ue=(0,l._)("img",{class:"logo",src:xe,style:{width:"100%",position:"relative"}},null,-1),ze={style:{top:"43%",position:"absolute",margin:"auto",right:"0",left:"0"}},We={key:0,style:{"text-decoration":"solid"}},Ie=(0,l.uE)('<div style="background-color:#002540;"><div class="buttons"><button class="btn" id="workoutCreator"> Workout Creator </button><button class="btn" id="exerciseCreator"> Exercise Catalog </button><button class="btn" id="muscleCatalog"> Muscle Catalog </button></div></div>',1),$e={style:{"min-height":"250px"}},Ge={class:"randomWorkout"},Te=(0,l._)("button",{class:"btn",style:{"background-color":"#f0f0f0",color:"#002540"}},[(0,l._)("strong",null,"Regenerate Workout")],-1),Le=(0,l._)("div",{class:"break"},null,-1),qe={class:"log"},je=(0,l._)("h3",null,"This is your last logged workout:",-1),Oe=(0,l._)("button",{class:"btn",style:{"background-color":"#fafafa",color:"#002540"}},[(0,l._)("strong",null,"View More Logs")],-1),Ne={style:{"margin-top":"50px"}},He=(0,l._)("p",null,"You are now logged in",-1),Ae={key:0},Fe=(0,l._)("div",{class:"gainzmasterLLC"},[(0,l._)("h2",null,"Property of Gainzmaster LLC."),(0,l._)("h3",null,"All rights reserved. ")],-1);function Re(e,t,a,s,o,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",Me,[(0,l._)("div",Ee,[Se,(0,l._)("div",Ce,[Ue,(0,l._)("h3",ze,(0,De.zw)(this.chosenQuote),1)]),this.$store.state.user_details?((0,l.wg)(),(0,l.iD)("h2",We,"Good "+(0,De.zw)(this.timeOfDay)+", "+(0,De.zw)(this.$store.state.user_details.username)+"! How may I help you?",1)):(0,l.kq)("",!0)])]),Ie,(0,l._)("div",$e,[(0,l._)("div",Ge,[(0,l._)("h3",null,[(0,l.Uk)("Looking for a workout? Here's a randomly curated "),(0,l._)("em",null,(0,De.zw)(this.randomWorkout.type),1),(0,l.Uk)(" workout!")]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.workout,(e=>((0,l.wg)(),(0,l.iD)("p",null,(0,De.zw)(e),1)))),256)),(0,l.Uk)(" "+(0,De.zw)(this.repsBySets)+" ",1),Te]),Le,(0,l._)("div",qe,[je,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.lastWorkout,(e=>((0,l.wg)(),(0,l.iD)("p",null,(0,De.zw)(e),1)))),256)),Oe])]),(0,l._)("div",Ne,[He,this.$store.state.user_details?((0,l.wg)(),(0,l.iD)("p",Ae,"Welcome: "+(0,De.zw)(this.$store.state.user_details.username),1)):(0,l.kq)("",!0),(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>r.logout&&r.logout(...e))},"LOG OUT")]),Fe],64)}var Ze={name:"home",components:{},data(){return{quotes:["If the door says PUSH, pull it. It's not a direction, it's a challenge","You don't need a spot for back. You don't even need to do back. Back is the legs of the upper body","Flexibility? You mean the ability to flex?","Legs - what do I gotta train them for, I've already got 2 of em'","You're probably still sore from your last leg workout, which was your first leg workout, and your last leg workout","Lifting and Game of Thrones share the same calendar: there's only 2 seasons, cutting and bulking","No matter how hard you try, you'll never be as big as your pump","Fitness is 98% lighting. The other 2% is the sun effect on Instagram","Just assume anyone bigger than you is on steroids","Chickens evolved from dinosaurs, and they were huge, bro. So eat lots of chicken","Do it for the after selfie","When you feel like dying - do 10 more","Things may come to those who wait, but gains come to those who lift weight","I GOT 99 PROBLEMS, BUT I'M GOING TO THE GYM TO IGNORE ALL OF THEM","WEIGHTS BEFORE DATES","Curls for the girls, tris for the guys","If the bar ain't bending, you're just pretending","LIFE IS SHORT. LIFT HEAVY THINGS.","I like big weights and I cannot lie.","Do not fear what you cannot lift, fear that which can lift you","Education is important, but big biceps are importanter","This is the whey"],chosenQuote:null,randomWorkout:{type:null,workout:null},lastWorkout:null,workoutSplits:["push","pull","legs","upper"],repsBySets:null}},methods:{logout(){this.$store.dispatch("logout")},getTime(){const e=new Date;let t=e.getHours();this.timeOfDay=t>=4&&t<12?"morning":t>=12&&t<17?"afternoon":t>=17&&t<22?"evening":"night"},getQuote(){var e=Math.floor(Math.random()*this.quotes.length);this.chosenNum=e,this.chosenQuote=this.quotes[e]},getRandomWorkout(){var e=Math.floor(Math.random()*this.workoutSplits.length),t=this.workoutSplits[e];if("push"==t);else if("pull"==t);else if("upper"==t);else if("legs"==t);this.randomWorkout.type=t,this.getRepRange()},getRepRange(){var e=Math.floor(3*Math.random());if(0==e){var t=Math.floor(4*Math.random()+15),a=Math.floor(3*Math.random()+3),s=Math.floor(t/a);this.repsBySets=a.toString()+" x "+s.toString()+" (HEAVY)"}else if(1==e){t=Math.floor(13*Math.random()+24),a=Math.floor(2*Math.random()+3),s=Math.floor(t/a);this.repsBySets=a.toString()+" x "+s.toString()+" (MEDIUM)"}else if(2==e){t=Math.floor(5*Math.random()+36),a=Math.floor(2*Math.random()+2),s=Math.floor(t/a);this.repsBySets=a.toString()+" x "+s.toString()+" (LIGHT)"}},getLastWorkout(){}},beforeMount(){this.getQuote(),this.getTime(),this.getRandomWorkout(),this.getLastWorkout()}};const Ye=(0,f.Z)(Ze,[["render",Re]]);var Be=Ye;const Pe=e=>((0,l.dD)("data-v-65138e46"),e=e(),(0,l.Cn)(),e),Ve={class:"backimage"},Ke=Pe((()=>(0,l._)("div",null,[(0,l._)("img",{src:L,style:{width:"40%"}})],-1))),Qe=Pe((()=>(0,l._)("hr",null,null,-1))),Je={class:"row"},Xe={class:"col"},et=Pe((()=>(0,l._)("h2",null,"Welcome To Gainzmaster!",-1))),tt=Pe((()=>(0,l._)("p",null,"We are a workout tracking and muscle knowledge service focused on optimizing and providing variety to your workouts!",-1))),at=(0,l.uE)('<div class="col" data-v-65138e46><h2 data-v-65138e46>Features &amp; Capabilities</h2><ul class="list" data-v-65138e46><li class="list" data-v-65138e46>Workout Creator with over 2500 Exercises</li><li class="list" data-v-65138e46>Workout Log To View Past Workouts</li><li class="list" data-v-65138e46>Detailed Muscle &amp; Exercise Catalogs</li><li class="list" data-v-65138e46>Advanced Exercise Search Engine</li></ul></div>',1),st=Pe((()=>(0,l._)("hr",null,null,-1))),lt={class:"row"},ot={class:"col"},rt=Pe((()=>(0,l._)("button",{class:"btn",style:{"margin-top":"50px",width:"55%"}},"Sign Up",-1))),it={class:"col"},nt=Pe((()=>(0,l._)("button",{class:"btn",style:{"margin-top":"50px",width:"55%"}},"Login",-1))),ct=(0,l.uE)('<div class="row" data-v-65138e46><div class="col" data-v-65138e46><img style="width:90%;margin-bottom:50px;" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&amp;h=1528" alt="" data-v-65138e46></div><div class="col" data-v-65138e46><img style="width:90%;" src="https://weightliftingplace.com/wp-content/uploads/2018/09/Weightlifting-In-The-Long-Run-1.jpg" alt="" data-v-65138e46></div><div class="col" data-v-65138e46><img style="width:90%;" src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/woman-flexing-bicep-GettyImages-906615248.jpg?quality=86&amp;strip=all" alt="" data-v-65138e46></div></div>',1);function ut(e,t,a,s,o,r){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",Ve,[Ke,Qe,(0,l._)("div",Je,[(0,l._)("div",Xe,[et,tt,(0,l._)("p",null,[(0,l.Wm)(i,{class:"non-intrusive",to:"/signup"},{default:(0,l.w5)((()=>[(0,l.Uk)("Sign up for an account")])),_:1}),(0,l.Uk)(" to take advantage of our numerous features and rich muscle database, and never be bored at the gym again!")])]),at]),st,(0,l._)("div",lt,[(0,l._)("div",ot,[(0,l.Wm)(i,{to:"/signup",class:"non-intrusive"},{default:(0,l.w5)((()=>[rt])),_:1})]),(0,l._)("div",it,[(0,l.Wm)(i,{to:"/login",class:"non-intrusive"},{default:(0,l.w5)((()=>[nt])),_:1})])]),ct])}var dt={};const mt=(0,f.Z)(dt,[["render",ut],["__scopeId","data-v-65138e46"]]);var ht=mt;const pt=e=>((0,l.dD)("data-v-68e40ffd"),e=e(),(0,l.Cn)(),e),gt=pt((()=>(0,l._)("h3",null,"Workout Creator",-1))),vt={style:{"magin-top":"15px","text-align":"center"}},wt=pt((()=>(0,l._)("h4",null,"Select muscle groups you would like to hit:",-1))),ft={for:"checkbox"};function _t(e,t,a,o,r,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[gt,(0,l._)("div",vt,[wt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.muscleGroups,(e=>((0,l.wg)(),(0,l.iD)("ul",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"{{muscleGroupsSelected}}","onUpdate:modelValue":t[0]||(t[0]=e=>r.muscleGroupsSelected=e)},null,512),[[s.e8,r.muscleGroupsSelected]]),(0,l._)("label",ft,(0,De.zw)(e),1)])))),256))])],64)}var yt={components:{},async mounted(){},methods:{onMuscleGroupsChanged:function(e){this.muscleGroupsSelected=e.muscleGroupsSelected}},data(){return{muscleGroupsSelected:[],muscleGroups:["Neck","Shoulders","Upper","Forearms","Back","Chest","Waist","Hips","Thighs","Calves"]}},beforeMount(){}};const bt=(0,f.Z)(yt,[["render",_t],["__scopeId","data-v-68e40ffd"]]);var kt=bt;a(7658);const Dt=(0,l.uE)('<div class="row"><div class="col"><h1>Muscle Catalog</h1></div></div><div class="row"><div class="col"><p style="font-style:italic;">Learn more about muscle intricacies and details!</p></div></div><hr style="border-top:7px double #2c3e50;color:#2c3e50;">',3),xt={class:"row"},Mt={class:"col"},Et={class:"searchEngine"},St=(0,l.uE)('<div class="row"><div class="col"><h3>Muscle Search</h3></div></div><div class="row" style="margin-bottom:5px;"><div class="col"><label for="muscleName" class="text-label">Name</label></div><div class="col"><label for="muscleCategory" class="text-label">Category</label></div></div>',2),Ct={class:"row",style:{"margin-bottom":"40px"}},Ut={class:"col"},zt={class:"col"},Wt=(0,l._)("option",{value:"All"},"All",-1),It=["value"],$t={class:"row"},Gt={class:"col2"},Tt={class:"table"},Lt=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"Muscle Name"),(0,l._)("th",{scope:"col"},"Muscle Category"),(0,l._)("th",{scope:"col"},"Other Names"),(0,l._)("th",{scope:"col"},"Related Muscles")])],-1),qt={key:0},jt=["onClick"],Ot={scope:"row"},Nt={scope:"row"},Ht={class:"row"},At={class:"col"},Ft={class:"center"},Rt={class:"col"},Zt=["src"],Yt={key:0,scope:"row"},Bt={key:1,scope:"row"},Pt={key:2,scope:"row"},Vt={key:3,scope:"row"},Kt=(0,l._)("hr",{style:{"border-top":"7px double #2c3e50",color:"#2c3e50","margin-top":"25px"}},null,-1);function Qt(e,t,a,o,r,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[Dt,(0,l._)("div",xt,[(0,l._)("div",Mt,[(0,l._)("div",Et,[St,(0,l._)("div",Ct,[(0,l._)("div",Ut,[(0,l.wy)((0,l._)("input",{type:"text",name:"muscleName","onUpdate:modelValue":t[0]||(t[0]=e=>r.muscleName=e),onInput:t[1]||(t[1]=e=>i.filterMuscles("name"))},null,544),[[s.nr,r.muscleName]])]),(0,l._)("div",zt,[(0,l.wy)((0,l._)("select",{name:"muscleCategory",id:"","onUpdate:modelValue":t[2]||(t[2]=e=>r.selectedCategory=e),onChange:t[3]||(t[3]=e=>i.filterMuscles("category"))},[Wt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.$store.state.groupData,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e},(0,De.zw)(e[0]),9,It)))),256))],544),[[s.bM,r.selectedCategory]])])])])])]),(0,l._)("div",$t,[(0,l._)("div",Gt,[(0,l._)("table",Tt,[Lt,r.filteredMuscleData?((0,l.wg)(),(0,l.iD)("tbody",qt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filteredMuscleData,(t=>((0,l.wg)(),(0,l.iD)("tr",{onClick:a=>e.$router.push({path:`/musclecatalog/${t[1]}`}),class:"hoverable"},[(0,l._)("th",Ot,(0,De.zw)(t[0]),1),(0,l._)("th",Nt,[(0,l._)("div",Ht,[(0,l._)("div",At,[(0,l._)("p",Ft,(0,De.zw)(this.$store.state.groupData[t[2]-1][0]),1)]),(0,l._)("div",Rt,[(0,l._)("img",{src:i.getSrc(this.$store.state.groupData[t[2]-1][0]),style:{width:"100px","margin-top":"10px"}},null,8,Zt)])])]),t[3]?((0,l.wg)(),(0,l.iD)("th",Yt,(0,De.zw)(t[3]),1)):((0,l.wg)(),(0,l.iD)("th",Bt,"~")),t[5]?((0,l.wg)(),(0,l.iD)("th",Pt,(0,De.zw)(t[5]),1)):((0,l.wg)(),(0,l.iD)("th",Vt,"~"))],8,jt)))),256))])):(0,l.kq)("",!0)])])]),Kt],64)}var Jt={methods:{async loadData(){this.filteredMuscleData=this.$store.state.muscleData,this.catFilter=this.$store.state.muscleData,this.nameFilter=this.$store.state.muscleData},filterMuscles(e){if("category"==e)if("All"==this.selectedCategory)this.filteredMuscleData=this.nameFilter;else{var t=this.selectedCategory[1];this.catFilter=this.$store.state.muscleData.filter((function(e){return e[2]==t})),null==this.muscleName||""==this.muscleName?this.filteredMuscleData=this.catFilter:this.filteredMuscleData=this.nameFilter.filter((function(e){return e[2]==t}))}else if("name"==e){var a=this.muscleName;""==this.muscleName||null==this.muscleName?this.filteredMuscleData=this.catFilter:(this.nameFilter=this.$store.state.muscleData.filter((function(e){return e[0].toLowerCase().includes(a.toLowerCase())})),"All"==this.selectedCategory?this.filteredMuscleData=this.nameFilter:this.filteredMuscleData=this.catFilter.filter((function(e){return e[0].toLowerCase().includes(a.toLowerCase())})))}},getSrc(e){var t=a(3059);return t("./"+e+".jpg")}},data(){return{muscleData:null,muscleDict:null,categorySel:[],selectedCategory:"All",muscleName:null,filteredMuscleData:null,catFilter:null,nameFilter:null}},async mounted(){await this.loadData()}};const Xt=(0,f.Z)(Jt,[["render",Qt]]);var ea=Xt;const ta={class:"row"},aa={class:"col"},sa={key:0},la=(0,l._)("hr",{style:{"border-top":"7px double #2c3e50",color:"#2c3e50"}},null,-1),oa={class:"row"},ra={class:"col"},ia={class:"searchEngine"},na={class:"row"},ca={key:0,class:"col"},ua=["src"],da={key:0,class:"row"},ma={class:"col"},ha={key:1,class:"row"},pa={key:0,class:"col"},ga=(0,l._)("h3",null,"Other Names",-1),va=[ga],wa={key:1,class:"col"},fa=(0,l._)("h3",null,"Muscle Heads",-1),_a=[fa],ya={key:2,class:"col"},ba=(0,l._)("h3",null,"Related Muscles",-1),ka=[ba],Da={key:2,class:"row"},xa={key:0,class:"col"},Ma={key:1,class:"col"},Ea={key:2,class:"col"};function Sa(e,t,a,s,o,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ta,[(0,l._)("div",aa,[o.muscleData?((0,l.wg)(),(0,l.iD)("h1",sa,(0,De.zw)(o.muscleData[0][0]),1)):(0,l.kq)("",!0)])]),la,(0,l._)("div",oa,[(0,l._)("div",ra,[(0,l._)("div",ia,[(0,l._)("div",na,[o.muscleImg?((0,l.wg)(),(0,l.iD)("div",ca,[(0,l._)("img",{src:o.muscleImg},null,8,ua)])):(0,l.kq)("",!0)]),o.muscleData?((0,l.wg)(),(0,l.iD)("div",da,[(0,l._)("div",ma,[(0,l._)("h5",null,(0,De.zw)(o.muscleData[0][6]),1)])])):(0,l.kq)("",!0),o.muscleData?((0,l.wg)(),(0,l.iD)("div",ha,[o.muscleData[0][3]?((0,l.wg)(),(0,l.iD)("div",pa,va)):(0,l.kq)("",!0),o.muscleData[0][4]?((0,l.wg)(),(0,l.iD)("div",wa,_a)):(0,l.kq)("",!0),o.muscleData[0][5]?((0,l.wg)(),(0,l.iD)("div",ya,ka)):(0,l.kq)("",!0)])):(0,l.kq)("",!0),o.muscleData?((0,l.wg)(),(0,l.iD)("div",Da,[o.muscleData[0][3]?((0,l.wg)(),(0,l.iD)("div",xa,[(0,l._)("h3",null,(0,De.zw)(o.muscleData[0][3]),1)])):(0,l.kq)("",!0),o.muscleData[0][4]?((0,l.wg)(),(0,l.iD)("div",Ma,[(0,l._)("h3",null,(0,De.zw)(o.muscleData[0][4]),1)])):(0,l.kq)("",!0),o.muscleData[0][5]?((0,l.wg)(),(0,l.iD)("div",Ea,[(0,l._)("h3",null,(0,De.zw)(o.muscleData[0][5]),1)])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])])])],64)}var Ca=a(4161),Ua={methods:{async loadData(){var e=`select * from detail_muscles where detail_id = ${this.muscleId}`,t=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${e}`);t=t.data,this.muscleData=t,this.muscleImg=t[0][7],console.log(this.muscleImg),console.log(t),this.filteredMuscleData=this.muscleData,e="select * from general_muscles",t=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${e}`),t=t.data,this.muscleDict=t},filterMuscles(e){if("category"==e){var t=this.selectedCategory[1];this.filteredMuscleData=this.filteredMuscleData.filter((function(e){return e[2]==t})),console.log(this.filteredMuscleData)}}},data(){return{muscleData:null,muscleDict:null,muscleImg:null,categorySel:[],selectedCategory:null,muscleName:null,generalSearch:null,filteredMuscleData:null,defaultCat:["All",0],muscleId:this.$route.params.id}},async mounted(){await this.loadData()}};const za=(0,f.Z)(Ua,[["render",Sa]]);var Wa=za;const Ia=(0,l.uE)('<div class="row"><div class="col"><h1>Exercise Catalog</h1></div></div><div class="row"><div class="col"><p style="font-style:italic;">Search our extensive database for a specific exercise or learn about new ones!</p></div></div><hr style="border-top:7px double #2c3e50;color:#2c3e50;"><div class="row"><div class="col"><div class="searchEngine"><div class="row"><div class="col"><h3>Exercise Search</h3></div></div><div class="row"><div class="col"><label for="exerciseName" class="text-label">Name</label></div><div class="col"><label for="muscleGroup" class="text-label">Muscle Group</label></div></div><div class="row"><div class="col"><input type="text" name="exerciseName"></div><div class="col"><select name="muscleGroup"></select></div></div></div></div></div>',4),$a={class:"row"},Ga={class:"col2"},Ta={class:"table"},La=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"Name"),(0,l._)("th",{scope:"col"},"Muscle Group"),(0,l._)("th",{scope:"col"},"Detailed Muscle"),(0,l._)("th",{scope:"col"},"Equipment"),(0,l._)("th",{scope:"col"},"Utility"),(0,l._)("th",{scope:"col"},"Mechanics"),(0,l._)("th",{scope:"col"},"Muscle Force")])],-1),qa={key:0},ja={class:"hoverable"},Oa={scope:"row"},Na={scope:"row"},Ha={class:"row"},Aa={class:"col"},Fa={class:"center"},Ra={class:"col"},Za=["src"],Ya={scope:"row"},Ba={scope:"row"},Pa={key:0,scope:"row"},Va={key:1,scope:"row"},Ka={key:2,scope:"row"},Qa={key:3,scope:"row"},Ja={key:4,scope:"row"},Xa={key:5,scope:"row"};function es(e,t,a,s,o,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[Ia,(0,l._)("div",$a,[(0,l._)("div",Ga,[(0,l._)("table",Ta,[La,this.exerciseData?((0,l.wg)(),(0,l.iD)("tbody",qa,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.exerciseData,(e=>((0,l.wg)(),(0,l.iD)("tr",ja,[(0,l._)("th",Oa,(0,De.zw)(e[2]),1),(0,l._)("th",Na,[(0,l._)("div",Ha,[(0,l._)("div",Aa,[(0,l._)("p",Fa,(0,De.zw)(this.$store.state.groupData[this.$store.state.muscleData[e[1]-1][2]-1][0]),1)]),(0,l._)("div",Ra,[(0,l._)("img",{src:r.getSrc(this.$store.state.groupData[this.$store.state.muscleData[e[1]-1][2]-1][0]),style:{width:"50px","margin-top":"10px"}},null,8,Za)])])]),(0,l._)("th",Ya,(0,De.zw)(this.$store.state.muscleData[e[1]-1][0]),1),(0,l._)("th",Ba,(0,De.zw)(e[3]),1),e[4]?((0,l.wg)(),(0,l.iD)("th",Pa,(0,De.zw)(e[4]),1)):((0,l.wg)(),(0,l.iD)("th",Va,"~")),e[5]?((0,l.wg)(),(0,l.iD)("th",Ka,(0,De.zw)(e[5]),1)):((0,l.wg)(),(0,l.iD)("th",Qa,"~")),e[6]?((0,l.wg)(),(0,l.iD)("th",Ja,(0,De.zw)(e[6]),1)):((0,l.wg)(),(0,l.iD)("th",Xa,"~"))])))),256))])):(0,l.kq)("",!0)])])])],64)}var ts={data(){return{exerciseData:null}},methods:{async loadData(){this.exerciseData=this.$store.state.exerciseData,console.log(this.exerciseData)},getSrc(e){var t=a(3059);return t("./"+e+".jpg")}},async mounted(){await this.loadData()}};const as=(0,f.Z)(ts,[["render",es]]);var ss=as,ls=a(7795),os=a(4466),rs=a(3854);const is={apiKey:"AIzaSyB24iNA0uzYFE-rH4O4l02QVHt_82tW_OE",authDomain:"gainzmaster-adb4d.firebaseapp.com",projectId:"gainzmaster-adb4d",storageBucket:"gainzmaster-adb4d.appspot.com",messagingSenderId:"993802683730",appId:"1:993802683730:web:a7cc1d7460081315fce68b",measurementId:"G-Q787TGKL02"},ns=(0,ls.ZF)(is),cs=((0,os.IH)(ns),(0,rs.v0)(ns)),us=async(e,t)=>{const a=t.username,s=t.password;var l,o;o=`select user_email from users where username = '${a}'`,l=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${o}`);var r=l.data[0][0];try{await(0,rs.e5)(cs,r,s)}catch(i){switch(console.log(i),i.code){case"auth/invalid-email":return void alert("Invalid email");case"auth/user-not-found":return void alert("You are not an authorized user");case"auth/wrong-password":return void alert("Incorrect password or email")}}Es.replace({name:"home"})},ds=async(e,t)=>{const a=t.username,s=t.password,l=t.email;var o,r,i=null;if(o=`select * from users where username = '${a}'`,r=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${o}`),r=r.data,r.length)alert("Username already exists: please use another name");else if(o=`select * from users where user_email = '${l}'`,r=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${o}`),r=r.data,r.length)alert("Email already has an account: please login or use another email");else if(a.length>100||l.length>100)alert("Username and Email must be shorter than 100 characters");else{try{i=await(0,rs.Xb)(cs,l,s)}catch(c){switch(c.code){case"auth/email-already-in-use":return void alert("Email already in use!");case"auth/invalid-email":return void alert("Invalid email");case"auth/weak-password":return void alert("Weak password")}}o=`insert into users (user_email, username) values ('${l}', '${a}')`,r=await Ca.Z.post(`http://3.89.12.221/db.py/?sql=${o}`);var n=r.data.includes("Successfully executed");n?(i&&e.commit("SET_USER",{user:i.user,username:a,email:l}),console.log(e.state.user,e.state.user_details),Es.replace({name:"home"})):alert("Error creating user. Please try again")}},ms=async e=>{await(0,rs.w7)(cs),e.commit("CLEAR_USER"),Es.replace({name:"publichome"})},hs=async(e,t)=>{cs.onAuthStateChanged((async t=>{if(null==t)e.commit("CLEAR_USER");else{var a=`select username from users where user_email = '${t.email}'`,s=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${a}`);e.commit("SET_USER",{user:t,email:t.email,username:s.data[0][0]})}}))},ps=async e=>{if(!o||!s||!s){var t="select * from detail_muscles",a=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${t}`);a=a.data;var s=a;t="select * from general_muscles",a=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${t}`),a=a.data;var l=a;t="select * from exercises",a=await Ca.Z.get(`http://3.89.12.221/db.py/?sql=${t}`);a=a.data;var o=a;e.commit("SET_DATA",{m:s,g:l,e:o})}};var gs={loginUser:us,registerUser:ds,logout:ms,fetchUser:hs,fillData:ps};const vs=(e,t)=>{e.user=t.user,e.user_details={username:t.username,email:t.email}},ws=e=>{e.user=null,e.user_details=null},fs=e=>{e.pageLoaded=!0},_s=(e,t)=>{e.muscleData=t.m,e.groupData=t.g,e.exerciseData=t.e};var ys={SET_USER:vs,CLEAR_USER:ws,LOADED_PAGE:fs,SET_DATA:_s},bs=(0,n.MT)({state:{user:null,user_details:null,pageLoaded:!1,exerciseData:null,muscleData:null,groupData:null,randomWorkout:{type:"push",workout:["3x12 Bench","2x12 Tricep Pushdown"]},lastWorkout:["3x12 Bench","2x12 Tricep Pushdown"],workoutSplits:["push","pull","legs","upper"],chosenQuote:null},mutations:ys,actions:gs});const ks=async(e,t,a)=>{let s=cs.currentUser;!bs.state.exerciseData&&s?(await bs.dispatch("fillData"),a()):s?a():a({name:"login"})},Ds=(e,t,a)=>{let s=cs.currentUser;s?a({name:"home"}):a()},xs=[{path:"/login",name:"login",component:K,beforeEnter:Ds,meta:{title:"Gainzmaster - Login"}},{path:"/signup",name:"signup",component:ke,beforeEnter:Ds,meta:{title:"Gainzmaster - Signup"}},{path:"/home",name:"home",component:Be,beforeEnter:ks,meta:{title:"Gainzmaster - Home"}},{path:"/workoutmaker",name:"workoutmaker",component:kt,beforeEnter:ks,meta:{title:"Gainzmaster - Workout Maker"}},{path:"/",name:"publichome",component:ht,beforeEnter:Ds,meta:{title:"Gainzmaster"}},{path:"/musclecatalog",name:"musclecatalog",component:ea,beforeEnter:ks,meta:{title:"Gainzmaster - Muscles"}},{path:"/exercisecatalog",name:"exercisecatalog",component:ss,beforeEnter:ks,meta:{title:"Gainzmaster - Exercises"}},{path:"/musclecatalog/:id",name:"detailedMuscle",component:Wa,beforeEnter:ks,meta:{title:"Gainzmaster - Muscles Description"}},{path:"/:catchAll(.*)",redirect:"/"}],Ms=(0,T.p7)({history:(0,T.PO)("/"),routes:xs});Ms.beforeEach((async(e,t,a)=>{document.title=`${e.meta.title}`,a()}));var Es=Ms;let Ss;cs.onAuthStateChanged((()=>{Ss||(Ss=(0,s.ri)(G).use(Es).use(bs).mount("#app"))}))},3059:function(e,t,a){var s={"./Back.jpg":8388,"./Calves.jpg":8894,"./Chest.jpg":2461,"./Forearms.jpg":8328,"./Hips.jpg":6854,"./Neck.jpg":3e3,"./Shoulders.jpg":6544,"./Thighs.jpg":5895,"./Upper Arms.jpg":2783,"./Waist.jpg":3791};function l(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}l.keys=function(){return Object.keys(s)},l.resolve=o,e.exports=l,l.id=3059},8388:function(e,t,a){"use strict";e.exports=a.p+"img/Back.d1a8b815.jpg"},8894:function(e,t,a){"use strict";e.exports=a.p+"img/Calves.59a48dc6.jpg"},2461:function(e,t,a){"use strict";e.exports=a.p+"img/Chest.83c22f0d.jpg"},8328:function(e,t,a){"use strict";e.exports=a.p+"img/Forearms.c0caaa2e.jpg"},6854:function(e,t,a){"use strict";e.exports=a.p+"img/Hips.e0f3603c.jpg"},3e3:function(e,t,a){"use strict";e.exports=a.p+"img/Neck.e1c99fec.jpg"},6544:function(e,t,a){"use strict";e.exports=a.p+"img/Shoulders.b1e8686a.jpg"},5895:function(e,t,a){"use strict";e.exports=a.p+"img/Thighs.960dfd6c.jpg"},2783:function(e,t,a){"use strict";e.exports=a.p+"img/Upper Arms.f47ac7a7.jpg"},3791:function(e,t,a){"use strict";e.exports=a.p+"img/Waist.f498ca3d.jpg"}},t={};function a(s){var l=t[s];if(void 0!==l)return l.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,l,o){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],l=e[u][1],o=e[u][2];for(var i=!0,n=0;n<s.length;n++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[n])}))?s.splice(n--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,l,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,o,r=s[0],i=s[1],n=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(n)var u=n(a)}for(t&&t(s);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},s=self["webpackChunkgainzmaster"]=self["webpackChunkgainzmaster"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6997)}));s=a.O(s)})();
//# sourceMappingURL=app.f0214ad6.js.map
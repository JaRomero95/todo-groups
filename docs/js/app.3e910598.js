(function(e){function t(t){for(var n,u,s=t[0],i=t[1],c=t[2],p=0,d=[];p<s.length;p++)u=s[p],a[u]&&d.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/todo-groups/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1b33":function(e,t,r){"use strict";var n=r("83b3"),a=r.n(n);a.a},"2de6":function(e,t,r){"use strict";var n=r("e854"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("ce5b"),o=r.n(a),u=(r("bf40"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("v-container",{attrs:{fluid:""}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)],1)],1)}),s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("v-container",{attrs:{fluid:""}},[r("app-title"),r("router-view")],1)],1)],1)},c=[],l={},p=l,d=r("2877"),f=Object(d["a"])(p,i,c,!1,null,null,null),m=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("v-container",{attrs:{fluid:""}},[r("app-title"),r("logout"),r("app-breadcrumbs"),r("router-view")],1)],1)],1)},g=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{attrs:{"data-test":"logout"},on:{click:e.logout}},[e._v("\n  Logout\n")])},b=[],k={methods:{logout:function(){localStorage.removeItem("key"),localStorage.removeItem("token"),this.$router.push({name:"login"})}}},w=k,x=Object(d["a"])(w,v,b,!1,null,null,null),y=x.exports,O={components:{Logout:y}},_=O,j=Object(d["a"])(_,h,g,!1,null,null,null),G=j.exports,R={components:{AnonymousLayout:m,AuthLayout:G},computed:{isAuthRequired:function(){return this.$route.matched.some(function(e){return e.meta.auth})},layout:function(){return this.isAuthRequired?G:m}}},D=R,T=Object(d["a"])(D,u,s,!1,null,null,null),$=T.exports,I=r("8c4f"),L=r("75fc"),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Login")]),r("form",{attrs:{"data-test":"login-form"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("v-alert",{attrs:{value:e.errors.login,type:"error"}},[e._v("\n      "+e._s(e.errors.login)+"\n    ")]),r("p",[r("a",{attrs:{target:"_blank",href:"https://trello.com/app-key"}},[e._v("Get API Token")]),r("br"),r("v-text-field",{attrs:{name:"api-key",placeholder:"API Token",required:""},model:{value:e.data.key,callback:function(t){e.$set(e.data,"key",t)},expression:"data.key"}})],1),r("p",[r("a",{attrs:{target:"_blank",href:e.OAuthUrl}},[e._v("\n        Get OAuth token\n      ")]),r("br"),r("v-text-field",{attrs:{name:"oauth-token",placeholder:"OAuth Token",required:""},model:{value:e.data.token,callback:function(t){e.$set(e.data,"token",t)},expression:"data.token"}})],1),r("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("\n      Submit\n    ")])],1)])},S=[],A=(r("96cf"),r("3b8d")),C=r("795b"),P=r.n(C),q=r("bc3a"),N=r.n(q),M="production",B="production"===M?"":M,U={TRELLO_API_URL:"https://api.trello.com/1",BOARD_NAME:"MyToDoGroups - ".concat(B)};r("6762"),r("2fdb");function F(e){return[401].includes(e)}function V(e){return e&&F(e.status)}function z(e){V(e.response)&&(localStorage.removeItem("key"),localStorage.removeItem("token"),cr.push({name:"login"})),P.a.reject(e)}var J=z,H=r("cebc");function K(e){var t={key:localStorage.getItem("key"),token:localStorage.getItem("token")};return Object(H["a"])({},e,{params:Object(H["a"])({},t,e.params)})}var Q=K,W=N.a.create({baseURL:U.TRELLO_API_URL});W.interceptors.request.use(Q,P.a.reject),W.interceptors.response.use(function(e){return e},J);var X=W,Y="search",Z="boards",ee=U.BOARD_NAME;function te(){return re.apply(this,arguments)}function re(){return re=Object(A["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={modelTypes:"boards",query:ee},e.next=3,X.get(Y,{params:t});case 3:if(r=e.sent,n=r.data.boards,a=n&&n[0],a){e.next=10;break}return e.next=9,ne();case 9:a=e.sent;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}},e)})),re.apply(this,arguments)}function ne(){return ae.apply(this,arguments)}function ae(){return ae=Object(A["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={name:ee,defaultLabels:!1,defaultLists:!1},e.next=3,X.post(Z,null,{params:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)})),ae.apply(this,arguments)}var oe={show:te},ue=function(e){return"boards/".concat(e,"/lists")},se=function(e){return"lists/".concat(e)},ie=function(e){return"".concat(se(e),"/closed")};function ce(e){return le.apply(this,arguments)}function le(){return le=Object(A["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={fields:["name","pos"],filter:"open"},e.next=3,X.get(ue(t),{params:r});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)})),le.apply(this,arguments)}function pe(e,t){return de.apply(this,arguments)}function de(){return de=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X.post(ue(t),null,{params:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)})),de.apply(this,arguments)}function fe(e,t){return me.apply(this,arguments)}function me(){return me=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X.put(se(t),null,{params:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)})),me.apply(this,arguments)}function he(e){return ge.apply(this,arguments)}function ge(){return ge=Object(A["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={cards:"all",card_fields:["name","pos","due","dueComplete"]},e.next=3,X.get(se(t),{params:r});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)})),ge.apply(this,arguments)}function ve(e){return be.apply(this,arguments)}function be(){return be=Object(A["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X.put(ie(t),null,{params:{value:!0}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)})),be.apply(this,arguments)}var ke={index:ce,show:he,create:pe,update:fe,destroy:ve},we="cards",xe=function(e){return"cards/".concat(e)};function ye(e,t){return Oe.apply(this,arguments)}function Oe(){return Oe=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(H["a"])({idList:t},r),e.next=3,X.post(we,null,{params:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)})),Oe.apply(this,arguments)}function _e(e,t){return je.apply(this,arguments)}function je(){return je=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X.put(xe(t),null,{params:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)})),je.apply(this,arguments)}function Ge(e){return Re.apply(this,arguments)}function Re(){return Re=Object(A["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X.delete(xe(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)})),Re.apply(this,arguments)}var De={create:ye,update:_e,destroy:Ge},Te="members/me";function $e(){return Ie.apply(this,arguments)}function Ie(){return Ie=Object(A["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={fields:["fullName","username","gravatarHash"]},e.next=3,X.get(Te,{params:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)})),Ie.apply(this,arguments)}var Le={show:$e},Ee={board:oe,groups:ke,tasks:De,profile:Le},Se="b41d3f3db4a9917457824f555a5de85a",Ae="never",Ce={data:function(){return{data:{key:"",token:""},errors:{}}},computed:{OAuthUrl:function(){return"https://trello.com/1/authorize?expiration=".concat(Ae,"&scope=read,write&response_type=token&name=Server%20Token&key=").concat(Se)}},created:function(){var e=localStorage.getItem("key"),t=localStorage.getItem("token");e&&t&&this.$router.push({name:"groups-index"})},methods:{login:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.data,r=t.key,n=t.token,localStorage.setItem("key",r),localStorage.setItem("token",n),e.prev=3,e.next=6,Ee.profile.show();case 6:this.$router.push({name:"groups-index"}),e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](3),this.errors={login:"Invalid credentials"},localStorage.removeItem("key"),localStorage.removeItem("token");case 14:case"end":return e.stop()}},e,this,[[3,9]])}));function t(){return e.apply(this,arguments)}return t}()}},Pe=Ce,qe=Object(d["a"])(Pe,E,S,!1,null,null,null),Ne=qe.exports,Me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loadingGroups?r("app-loading"):r("group-list",{attrs:{groups:e.groups}})],1)},Be=[],Ue=r("2f62"),Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{"data-test":"group-list"}},[r("group-list-create"),r("v-list",{staticClass:"pa-0"},e._l(e.groups,function(t){return r("group-list-item",{key:t.id,attrs:{group:t,"data-test":"group-list-item"},on:{"delete-group":function(t){return e.$emit("delete-group",t)}}})}),1),e.hasGroups?e._e():r("div",[e._v("\n    Create your first group...\n  ")])],1)},Ve=[],ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-name-form",{attrs:{name:"name",placeholder:"New group..."},on:{submit:e.handleCreateGroup},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}})},Je=[],He={data:function(){return{group:{name:""}}},computed:Object(Ue["c"])(["boardId"]),methods:Object(H["a"])({},Object(Ue["b"])(["createGroup"]),{handleCreateGroup:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.createGroup(Object(H["a"])({boardId:this.boardId},this.group)),this.resetGroup();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetGroup:function(){this.group.name=""}})},Ke=He,Qe=(r("1b33"),Object(d["a"])(Ke,ze,Je,!1,null,"fa8777ae",null)),We=Qe.exports,Xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-tile",{on:{click:e.goToShow}},[r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:e._s(e.group.name)}})],1)],1)},Ye=[],Ze={props:{group:{type:Object,required:!0}},methods:{goToShow:function(){this.$router.push({name:"groups-show",params:{id:this.group.id}})}}},et=Ze,tt=Object(d["a"])(et,Xe,Ye,!1,null,null,null),rt=tt.exports,nt={components:{GroupListCreate:We,GroupListItem:rt},props:{groups:{type:Array,required:!0}},computed:{hasGroups:function(){return!!this.groups.length}}},at=nt,ot=Object(d["a"])(at,Fe,Ve,!1,null,null,null),ut=ot.exports,st={components:{GroupList:ut},computed:Object(H["a"])({},Object(Ue["c"])(["groups","loadingGroups","boardId"])),watch:{boardId:function(e){this.loadGroups(e)}},created:function(){this.boardId||this.loadBoard()},methods:Object(Ue["b"])(["loadBoard","loadGroups"])},it=st,ct=Object(d["a"])(it,Me,Be,!1,null,null,null),lt=ct.exports,pt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loadingGroup?r("app-loading"):r("div",[e.group?r("div",[e.editing?r("group-form",{attrs:{"input-props":{appendIcon:"clear"},"input-listeners":{"click:append":e.disableEdit},"data-test":"group-edit-form"}}):r("h2",{staticClass:"headline",attrs:{"data-test":"group-title"}},[e._v("\n        "+e._s(e.group.name)+"\n        "),r("v-icon",{attrs:{"data-test":"group-edit"},on:{click:e.enableEdit}},[e._v("\n          edit\n        ")])],1),r("div",{staticClass:"text-xs-right"},[r("v-btn",{attrs:{color:"error",small:"","data-test":"open-delete-dialog"},on:{click:e.openDeleteDialog}},[r("v-icon",[e._v("delete")]),e._v("\n          Delete\n        ")],1)],1),e.group?r("task-index",{attrs:{"id-list":e.group.id,tasks:e.tasks}}):e._e()],1):r("div",[e._v("\n      Group not found :(\n    ")])]),e.showDeleteDialog?r("group-delete-dialog",{attrs:{group:e.group},on:{cancel:e.hideDeleteDialog,delete:e.handleDeleteGroup}}):e._e()],1)},dt=[],ft=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:!0,persistent:""}},[r("v-card",[r("v-card-title",[e._v("\n      Delete group\n    ")]),r("v-card-text",[e._v("\n      Do you want delete "),r("strong",[e._v(e._s(e.group.name))]),e._v("?\n    ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{flat:"flat","data-test":"cancel-delete-group"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n          Cancel\n        ")]),r("v-btn",{attrs:{flat:"flat","data-test":"confirm-delete-group"},on:{click:function(t){return e.$emit("delete")}}},[e._v("\n          Delete\n        ")])],1)],1)],1)},mt=[],ht={props:{group:{type:Object,required:!0}}},gt=ht,vt=Object(d["a"])(gt,ft,mt,!1,null,null,null),bt=vt.exports,kt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("v-text-field",e._g(e._b({attrs:{name:"name","append-outer-icon":"send",placeholder:"Name...",box:""},on:{"click:append-outer":e.handleSubmit},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}},"v-text-field",e.inputProps,!1),e.inputListeners))],1)},wt=[],xt={props:{inputProps:{type:Object,default:function(){return{}}},inputListeners:{type:Object,default:function(){return{}}}},data:function(){return{group:{}}},computed:Object(Ue["c"])({initialValue:"group"}),beforeMount:function(){this.group=Object(H["a"])({},this.initialValue)},methods:Object(H["a"])({},Object(Ue["b"])(["editGroup"]),{handleSubmit:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.editGroup(this.group);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},yt=xt,Ot=Object(d["a"])(yt,kt,wt,!1,null,null,null),_t=Ot.exports,jt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("task-list",{attrs:{tasks:e.tasks},on:{"delete-task":e.openDeleteDialog}}),e.taskToDelete?r("task-delete-dialog",{attrs:{task:e.taskToDelete},on:{cancel:e.hideDeleteDialog,delete:e.handleDeleteTask}}):e._e()],1)},Gt=[],Rt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("task-list-create"),r("v-list",{staticClass:"pa-0"},e._l(e.tasks,function(t){return r("task-list-item",{key:t.id,attrs:{"initial-value":t,"data-test":"task-list-item"},on:{"delete-task":function(t){return e.$emit("delete-task",t)}}})}),1),e.hasTasks?e._e():r("div",[e._v("\n    Add tasks...\n  ")])],1)},Dt=[],Tt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-name-form",{attrs:{name:"name",placeholder:"New task..."},on:{submit:e.handleCreateTask},model:{value:e.task.name,callback:function(t){e.$set(e.task,"name",t)},expression:"task.name"}})},$t=[],It={data:function(){return{task:{name:""}}},computed:Object(Ue["c"])(["group"]),methods:Object(H["a"])({},Object(Ue["b"])(["createTask"]),{handleCreateTask:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.createTask(Object(H["a"])({groupId:this.group.id},this.task)),this.resetTask();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetTask:function(){this.task.name=""}})},Lt=It,Et=Object(d["a"])(Lt,Tt,$t,!1,null,null,null),St=Et.exports,At=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-tile",[r("v-list-tile-action",[r("v-checkbox",{on:{change:e.updateComplete},model:{value:e.task.dueComplete,callback:function(t){e.$set(e.task,"dueComplete",t)},expression:"task.dueComplete"}})],1),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:e._s(e.task.name)}})],1),r("v-list-tile-action",{on:{click:e.deleteTask}},[r("v-btn",{attrs:{icon:"","data-test":"open-task-delete-dialog"}},[r("v-icon",[e._v("delete")])],1)],1)],1)},Ct=[],Pt={props:{initialValue:{type:Object,required:!0}},data:function(){return{task:Object(H["a"])({},this.initialValue)}},methods:{deleteTask:function(){this.$emit("delete-task",this.task)},updateComplete:function(e){e?this.markAsComplete():this.markAsIncomplete()},markAsComplete:function(){var e=new Date;this.updateTask({due:e.toISOString(),dueComplete:!0})},markAsIncomplete:function(){this.updateTask({due:"",dueComplete:!1})},updateTask:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ee.tasks.update(this.task.id,t);case 2:e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},qt=Pt,Nt=Object(d["a"])(qt,At,Ct,!1,null,null,null),Mt=Nt.exports,Bt={components:{TaskListCreate:St,TaskListItem:Mt},props:{tasks:{type:Array,required:!0}},computed:{hasTasks:function(){return!!this.tasks.length}}},Ut=Bt,Ft=Object(d["a"])(Ut,Rt,Dt,!1,null,null,null),Vt=Ft.exports,zt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:!0,persistent:""}},[r("v-card",[r("v-card-title",[e._v("\n      Delete task\n    ")]),r("v-card-text",[e._v("\n      Do you want delete "),r("strong",[e._v(e._s(e.task.name))]),e._v("?\n    ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{flat:"flat","data-test":"cancel-delete-task"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n          Cancel\n        ")]),r("v-btn",{attrs:{flat:"flat","data-test":"confirm-delete-task"},on:{click:function(t){return e.$emit("delete")}}},[e._v("\n          Delete\n        ")])],1)],1)],1)},Jt=[],Ht={props:{task:{type:Object,required:!0}}},Kt=Ht,Qt=Object(d["a"])(Kt,zt,Jt,!1,null,null,null),Wt=Qt.exports,Xt={components:{TaskList:Vt,TaskDeleteDialog:Wt},data:function(){return{taskToDelete:null}},computed:Object(Ue["c"])(["tasks"]),methods:Object(H["a"])({},Object(Ue["b"])(["deleteTask"]),{handleDeleteTask:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteTask(this.taskToDelete.id);case 2:this.hideDeleteDialog();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),openDeleteDialog:function(e){this.taskToDelete=e},hideDeleteDialog:function(){this.taskToDelete=null}})},Yt=Xt,Zt=Object(d["a"])(Yt,jt,Gt,!1,null,null,null),er=Zt.exports,tr={components:{GroupDeleteDialog:bt,GroupForm:_t,TaskIndex:er},data:function(){return{showDeleteDialog:!1,editing:!1}},computed:Object(H["a"])({},Object(Ue["c"])(["group","loadingGroup"]),{tasks:function(){return this.group&&this.group.cards}}),created:function(){this.loadGroup(this.$route.params.id)},watch:{group:function(){this.disableEdit()}},methods:Object(H["a"])({},Object(Ue["b"])(["loadGroup","deleteGroup"]),{handleDeleteGroup:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteGroup(this.group.id);case 2:this.$router.push({name:"groups-index"});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),openDeleteDialog:function(){this.showDeleteDialog=!0},hideDeleteDialog:function(){this.showDeleteDialog=!1},enableEdit:function(){this.editing=!0},disableEdit:function(){this.editing=!1}})},rr=tr,nr=Object(d["a"])(rr,pt,dt,!1,null,null,null),ar=nr.exports,or={render:function(e){return e("router-view")}},ur=function(e){return[{text:"Groups",to:{name:"groups-index"}}].concat(Object(L["a"])(e))},sr=[{path:"/login",name:"login",component:Ne,meta:{auth:!1}},{path:"/app",component:or,meta:{auth:!0},children:[{path:"/groups",name:"groups-index",component:lt},{path:"/groups/show/:id",name:"groups-show",component:ar,meta:{breadcrumbs:ur([{text:"Show group"}])}}]},{path:"*",redirect:{name:"login"}}];n["default"].use(I["a"]);var ir=new I["a"]({mode:"history",base:"/todo-groups/",routes:sr}),cr=ir,lr={state:{board:null},getters:{board:function(e){return e.board},boardId:function(e){return e.board?e.board.id:e.board}},mutations:{setBoard:function(e,t){e.board=t}},actions:{loadBoard:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Ee.board.show();case 3:n=e.sent,r("setBoard",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},pr=r("a8db"),dr=(r("20d6"),r("55dd"),function(e,t){var r=e.pos,n=t.pos;return r<n?-1:n<r?1:0}),fr=1e5;function mr(e){return hr(e)-1}function hr(e){if(e.length){var t=e.map(function(e){return e.pos});return Math.min.apply(Math,Object(L["a"])(t))}return fr}var gr=mr,vr={state:{groups:[],loadingGroups:!0},getters:{groups:function(e){return e.groups.sort(dr)},loadingGroups:function(e){return e.loadingGroups}},mutations:{setGroups:function(e,t){e.groups=t},setLoadingGroups:function(e,t){e.loadingGroups=t},addGroup:function(e,t){e.groups.push(t)},deleteGroup:function(e,t){var r=e.groups.findIndex(function(e){return e.id===t});-1!==r&&e.groups.splice(r,1)}},actions:{loadGroups:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setLoadingGroups",!0),e.next=4,Ee.groups.index(r);case 4:a=e.sent,n("setGroups",a),n("setLoadingGroups",!1);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),createGroup:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o,u,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.getters.groups,o=r.boardId,u=Object(pr["a"])(r,["boardId"]),s=Object(H["a"])({},u,{pos:gr(a)}),e.next=5,Ee.groups.create(o,s);case 5:i=e.sent,n("addGroup",i);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),deleteGroup:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Ee.groups.destroy(r);case 3:n("deleteGroup",r);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}},br={state:{group:[],loadingGroup:!0},getters:{group:function(e){return e.group},tasks:function(e,t){return t.group&&t.group.cards?t.group.cards.sort(dr):[]},loadingGroup:function(e){return e.loadingGroup}},mutations:{setGroup:function(e,t){e.group=t},editGroup:function(e,t){e.group=Object(H["a"])({},e.group,t)},setLoadingGroup:function(e,t){e.loadingGroup=t},addTask:function(e,t){e.group.cards.push(t)},deleteTask:function(e,t){var r=e.group.cards.findIndex(function(e){return e.id===t});-1!==r&&e.group.cards.splice(r,1)}},actions:{loadGroup:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setLoadingGroup",!0),e.next=4,Ee.groups.show(r);case 4:a=e.sent,n("setGroup",a),n("setLoadingGroup",!1);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),editGroup:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.getters,n("setLoadingGroup",!0),e.next=4,Ee.groups.update(a.group.id,r);case 4:o=e.sent,n("editGroup",o),n("setLoadingGroup",!1);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),createTask:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o,u,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.getters.tasks,o=r.groupId,u=Object(pr["a"])(r,["groupId"]),s=Object(H["a"])({},u,{pos:gr(a)}),e.next=5,Ee.tasks.create(o,s);case 5:i=e.sent,n("addTask",i);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),deleteTask:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Ee.tasks.destroy(r);case 3:n("deleteTask",r);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}};n["default"].use(Ue["a"]);var kr=new Ue["a"].Store({modules:{board:lr,groups:vr,group:br}}),wr=kr,xr=r("9483");Object(xr["a"])("".concat("/todo-groups/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("28a5"),r("a481"),r("ac6a");var yr=r("ffbc");yr.keys().forEach(function(e){var t=yr(e),r=e.split("/").pop().replace(/\.\w+$/,"");n["default"].component(r,t.default||t)}),n["default"].use(o.a),n["default"].config.productionTip=!1,new n["default"]({router:cr,store:wr,render:function(e){return e($)}}).$mount("#app")},"83b3":function(e,t,r){},"91c8":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.breadcrumbs?r("v-breadcrumbs",{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"item",fn:function(t){return[r(e.componentName(t.item),{tag:"component",attrs:{to:t.item.to}},[e._v("\n      "+e._s(t.item.text)+"\n    ")])]}},{key:"divider",fn:function(){return[r("v-icon",[e._v("forward")])]},proxy:!0}],null,!1,1036366815)}):e._e()},a=[],o={computed:{breadcrumbs:function(){return this.$route.meta.breadcrumbs}},methods:{componentName:function(e){return e.to?"router-link":"span"}}},u=o,s=r("2877"),i=Object(s["a"])(u,n,a,!1,null,null,null);t["default"]=i.exports},"9b88":function(e,t,r){},a4c6:function(e,t,r){"use strict";var n=r("9b88"),a=r.n(n);a.a},a8e4:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.emitSubmit(t)}}},[r("div",{staticClass:"row-icon"},[r("input",e._g(e._b({domProps:{value:e.value}},"input",e.$attrs,!1),e.inputListeners)),r("button",{attrs:{type:"submit"}},[r("v-icon",{attrs:{color:"primary"},on:{"click:append":e.emitSubmit}},[e._v("send")])],1)])])},a=[],o=r("cebc"),u={inheritAttrs:!1,props:{value:{type:String,required:!0}},data:function(){return{}},computed:{inputListeners:function(){var e=this;return Object(o["a"])({},this.$listeners,{input:function(t){return e.$emit("input",t.target.value)}})}},methods:{emitSubmit:function(){this.$emit("submit")}}},s=u,i=(r("a4c6"),r("2877")),c=Object(i["a"])(s,n,a,!1,null,"5db65389",null);t["default"]=c.exports},c3bb:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"title"},[e._v("\n  ToDo-Groups\n")])},a=[],o=r("2877"),u={},s=Object(o["a"])(u,n,a,!1,null,null,null);t["default"]=s.exports},cac2:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"loading-container"},[r("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)])},a=[],o=(r("2de6"),r("2877")),u={},s=Object(o["a"])(u,n,a,!1,null,"1902ee8c",null);t["default"]=s.exports},e854:function(e,t,r){},ffbc:function(e,t,r){var n={"./AppBreadcrumbs.vue":"91c8","./AppLoading.vue":"cac2","./AppNameForm.vue":"a8e4","./AppTitle.vue":"c3bb"};function a(e){var t=o(e);return r(t)}function o(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="ffbc"}});
//# sourceMappingURL=app.3e910598.js.map
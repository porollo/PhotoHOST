(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("ce5b"),o=n.n(r);n("bf40");a["default"].use(o.a,{iconfont:"md",theme:{primary:"#03a9f4",secondary:"#00bcd4",accent:"#e91e63",error:"#f44336",warning:"#ffc107",info:"#3f51b5",success:"#8bc34a"}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{background:"#E3E3EE"}},[n("v-navigation-drawer",{attrs:{app:"",temporary:"",fixed:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[n("v-toolbar",{attrs:{color:"accent",dark:"",flat:""}},[n("v-toolbar-side-icon",{on:{click:t.toggleSideNav}}),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[n("h1",{staticClass:"title",attrs:{"pl-3":""}},[t._v("PhotoHost")])])],1),n("v-divider"),n("v-list",t._l(t.sideNavItems,function(e){return n("v-list-tile",{key:e.title,attrs:{ripple:"",to:e.link}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[t._v("\n            "+t._s(e.title)+"\n          ")])],1)}),1)],1),n("v-toolbar",{attrs:{fixed:"",color:"primary",dark:""}},[n("v-toolbar-side-icon",{on:{click:t.toggleSideNav}}),n("v-toolbar-title",{staticClass:"hidden-xs-only"},[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n      PhotoHost\n      ")])],1),n("v-spacer"),n("v-text-field",{attrs:{flex:"","prepend-icon":"search",placeholder:"Search Posts Or Images",color:"grey","single-linehide-details":""}}),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.horisontalNavItems,function(e){return n("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[n("v-icon",{staticClass:"hidden-sm-only",attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n        \n      ")],1)}),1)],1),n("main",[n("v-container",{staticClass:"mt-4"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)],1)],1)},s=[],c={name:"App",data:function(){return{sideNav:!1}},computed:{horisontalNavItems:function(){return[{icon:"chat",title:"Posts",link:"/posts"},{icon:"camera_alt",title:"Images",link:"/images"},{icon:"lock",title:"Log In",link:"/login"},{icon:"create",title:"Register",link:"/register"}]},sideNavItems:function(){return[{icon:"chat",title:"Posts",link:"/posts"},{icon:"camera_alt",title:"Images",link:"/images"},{icon:"lock",title:"Log In",link:"/login"},{icon:"create",title:"Register",link:"/register"}]}},methods:{toggleSideNav:function(){this.sideNav=!this.sideNav}}},l=c,u=(n("034f"),n("2877")),f=Object(u["a"])(l,i,s,!1,null,null,null),d=f.exports,p=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-xs-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-carousel",t._b({attrs:{interval:"3000"}},"v-carousel",{cycle:!0},!1),t._l(t.posts,function(e){return n("v-carousel-item",{key:e._id,attrs:{src:e.imageUrl}},[n("h1",{attrs:{id:"carousel__title"}},[t._v(t._s(e.title))])])}),1)],1)],1)},m=[],b={name:"home",created:function(){this.handlerGetCarouselPosts()},computed:{posts:function(){return this.$store.getters.posts}},methods:{handlerGetCarouselPosts:function(){this.$store.dispatch("getPosts")}}},h=b,g=(n("8b71"),Object(u["a"])(h,v,m,!1,null,null,null)),_=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Add Post")])])},P=[],k={},x=Object(u["a"])(k,y,P,!1,null,null,null),O=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Posts")])])},w=[],I={name:"Posts"},E=I,N=Object(u["a"])(E,j,w,!1,null,null,null),S=N.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Add Image")])])},C=[],A={name:"AddImage"},L=A,R=Object(u["a"])(L,$,C,!1,null,null,null),q=R.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Images")])])},T=[],z={name:"Images"},G=z,H=Object(u["a"])(G,M,T,!1,null,null,null),J=H.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Profile")])])},B=[],D={name:"Profile"},F=D,K=Object(u["a"])(F,U,B,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Login")])])},W=[],X={name:"Login"},Y=X,Z=Object(u["a"])(Y,V,W,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",[t._v("Register")])])},nt=[],at={name:"Register"},rt=at,ot=Object(u["a"])(rt,et,nt,!1,null,null,null),it=ot.exports;a["default"].use(p["a"]);var st=new p["a"]({mode:"history",routes:[{path:"/",name:"home",component:_},{path:"/posts",name:"Posts",component:S},{path:"/post/add",name:"AddPost",component:O},{path:"/images",name:"Images",component:J},{path:"/image/add",name:"AddImage",component:q},{path:"/profile",name:"Profile",component:Q},{path:"/login",name:"Login",component:tt},{path:"/register",name:"Register",component:it}]}),ct=n("2f62"),lt=n("23ee");function ut(){var t=ft(["\n            query {\n              getPosts {\n                _id\n                title\n                imageUrl\n              }\n            }\n          "]);return ut=function(){return t},t}function ft(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}a["default"].use(ct["a"]);var dt=new ct["a"].Store({state:{posts:[]},mutations:{setPosts:function(t,e){t.posts=e}},actions:{getPosts:function(t){var e=t.commit;vt.query({query:Object(lt["b"])(ut())}).then(function(t){e("setPosts",t.data.getPosts),console.log(t.data.getPosts)}).catch(function(t){console.error(t)})}},getters:{posts:function(t){return t.posts}}}),pt=n("522d");n.d(e,"defaultClient",function(){return vt}),a["default"].use(pt["a"]);var vt=new lt["a"]({uri:"http://localhost:4000/graphql/"}),mt=new pt["a"]({defaultClient:vt});a["default"].config.productionTip=!1,new a["default"]({apolloProvider:mt,router:st,store:dt,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,n){},"8b71":function(t,e,n){"use strict";var a=n("e3a2"),r=n.n(a);r.a},e3a2:function(t,e,n){}});
//# sourceMappingURL=app.1e7fe7a2.js.map
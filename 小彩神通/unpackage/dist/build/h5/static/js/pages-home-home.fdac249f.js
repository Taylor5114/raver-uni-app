(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"01e2":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"nav-bar",props:{top:Number},data:function(){return{}}};e.default=a},"04d5":function(t,e,n){"use strict";n.r(e);var a=n("3d9f"),i=n("d2f5");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a82d");var u,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"7b180268",null,!1,a["a"],u);e["default"]=o.exports},"3a09":function(t,e,n){"use strict";n.r(e);var a=n("424f"),i=n("6372");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"fa468296",null,!1,a["a"],u);e["default"]=o.exports},"3d9f":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"tt",style:{height:t.top+"px"}}),n("v-uni-view",{staticClass:"navBar"},[t._v("Taylor Swift")])],1)},r=[]},"3f28":function(t,e,n){var a=n("4981");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3d2f61fa",a,!0,{sourceMap:!1,shadowMode:!1})},"424f":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",style:{height:t.height+"px"}},[n("ttSlide",{attrs:{list:t.homeData.slideshow}}),n("v-uni-web-view",{attrs:{src:"https://www.raver233.top/"}})],1)},r=[]},"483c":function(t,e,n){var a=n("f9e4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ea7b3c78",a,!0,{sourceMap:!1,shadowMode:!1})},4981:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-58e68e51]{width:%?750?%;height:%?300?%}uni-swiper[data-v-58e68e51]{width:%?750?%;height:%?300?%}uni-swiper uni-image[data-v-58e68e51]{width:%?750?%;height:%?300?%}",""]),t.exports=e},"4a86":function(t,e,n){"use strict";var a=n("3f28"),i=n.n(a);i.a},"4f55":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.list,(function(t,e){return n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t.image,mode:""}})],1)],1)})),1)],1)},r=[]},"5cff":function(t,e,n){"use strict";n.r(e);var a=n("4f55"),i=n("64cb");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4a86");var u,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"58e68e51",null,!1,a["a"],u);e["default"]=o.exports},6372:function(t,e,n){"use strict";n.r(e);var a=n("f0da"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"64cb":function(t,e,n){"use strict";n.r(e);var a=n("678e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"678e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tt-slide",props:{list:Array},data:function(){return{}}};e.default=a},a82d:function(t,e,n){"use strict";var a=n("483c"),i=n.n(a);i.a},d2f5:function(t,e,n){"use strict";n.r(e);var a=n("01e2"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},f0da:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("04d5")),r=a(n("5cff")),u={components:{navBar:i.default,ttSlide:r.default},data:function(){return{height:Number,width:Number,statusBar:Number,homeData:Object}},methods:{},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.height=e.windowHeight,t.width=e.windowWidth,t.statusBar=e.statusBarHeight}}),uni.request({url:"https://mock.mengxuegu.com/mock/6093ccdb1d10f86a7bd6b305/lottery/home",success:function(e){t.homeData=e.data}})}};e.default=u},f9e4:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-7b180268]{background-color:#ff6b81}.tt[data-v-7b180268]{border-bottom:%?1?% solid #007aff}.navBar[data-v-7b180268]{height:50px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""]),t.exports=e}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-sticky/u-sticky"],{"50ad":function(t,e,n){"use strict";n.r(e);var i=n("7a62"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=s.a},"6f5e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"7a62":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(t){this.initObserver()},enable:function(t){0==t?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var e=this;this.enable&&(this.stickyTop=0!=this.offsetTop?t.upx2px(this.offsetTop):0,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(t){e.height=t.height,e.left=t.left,e.width=t.width,e.$nextTick((function(){e.observeContent()}))})))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enable&&t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<this.stickyTop;e?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=n}).call(this,n("543d")["default"])},"7ac3":function(t,e,n){"use strict";n.r(e);var i=n("6f5e"),s=n("50ad");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("c4d0");var o,c=n("f0c5"),u=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"d1fe2c48",null,!1,i["a"],o);e["default"]=u.exports},aa9c:function(t,e,n){},c4d0:function(t,e,n){"use strict";var i=n("aa9c"),s=n.n(i);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-sticky/u-sticky-create-component',
    {
        'uview-ui/components/u-sticky/u-sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7ac3"))
        })
    },
    [['uview-ui/components/u-sticky/u-sticky-create-component']]
]);

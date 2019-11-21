(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mix-advert/vue/mix-advert"],{"1c32":function(t,e,n){"use strict";n.r(e);var r=n("37c7"),i=n("fdb6");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("c697");var a=n("2877"),c=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},"2b3e":function(t,e,n){},"37c7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},c697:function(t,e,n){"use strict";var r=n("2b3e"),i=n.n(r);i.a},c6c2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("50ea"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{advertState:0,interval:null,timer:8}},props:{timedown:{type:Number,default:8},imageUrl:{type:String,default:"/static/advert.jpg"},url:{type:String,default:"/pages/test1/test1"}},created:function(){this.timer=this.timedown},methods:{initAdvert:function(){this.clickEvent;var t={timer:this.timer,imageUrl:this.imageUrl,url:this.url};r.default.initAdvert(t)}}};e.default=u},fdb6:function(t,e,n){"use strict";n.r(e);var r=n("c6c2"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mix-advert/vue/mix-advert-create-component',
    {
        'components/mix-advert/vue/mix-advert-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("1c32"))
        })
    },
    [['components/mix-advert/vue/mix-advert-create-component']]
]);                

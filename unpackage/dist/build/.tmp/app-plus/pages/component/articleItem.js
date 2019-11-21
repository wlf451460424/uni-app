(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/articleItem"],{"25d9":function(t,e,n){"use strict";n.r(e);var i=n("f9f0"),r=n("4d25");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("d4fe");var a=n("2877"),c=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"4d25":function(t,e,n){"use strict";n.r(e);var i=n("a9d3"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=r.a},a9d3:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{headerShow:"",itemlist:[]}},props:{receiveObj:{type:Object,default:""}},mounted:function(){this.headerShow=this.receiveObj.headerShow,this.itemlist=this.receiveObj.list},computed:{},methods:{goArticleItem_Details:function(e){t.navigateTo({url:"../center/articleItem_Details?imgArr="+e.imgArr})}}};e.default=n}).call(this,n("6e42")["default"])},bf5c:function(t,e,n){},d4fe:function(t,e,n){"use strict";var i=n("bf5c"),r=n.n(i);r.a},f9f0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/component/articleItem-create-component',
    {
        'pages/component/articleItem-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("25d9"))
        })
    },
    [['pages/component/articleItem-create-component']]
]);                

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-details"],{"0b9a":function(t,e,i){"use strict";i.r(e);var a=i("4e97"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"0d39":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":""}},[i("v-uni-view",{staticClass:"scroll-content"},[i("v-uni-view",{staticClass:"introduce-section"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.detailData.title))]),i("v-uni-view",{staticClass:"introduce"},[i("v-uni-text",[t._v(t._s(t.detailData.author))]),i("v-uni-text",[t._v("105阅读")]),i("v-uni-text",[t._v(t._s(t.detailData.time))])],1),i("v-uni-rich-text",{attrs:{nodes:t.detailData.flow}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1===t.loading,expression:"loading === false"}],staticClass:"actions"},[i("v-uni-view",{staticClass:"action-item"},[i("v-uni-text",{staticClass:"yticon icon-dianzan-ash"}),i("v-uni-text",[t._v("75")])],1),i("v-uni-view",{staticClass:"action-item"},[i("v-uni-text",{staticClass:"yticon icon-dianzan-ash reverse"}),i("v-uni-text",[t._v("6")])],1),i("v-uni-view",{staticClass:"action-item"},[i("v-uni-text",{staticClass:"yticon icon-fenxiang2"}),i("v-uni-text",[t._v("分享")])],1),i("v-uni-view",{staticClass:"action-item"},[i("v-uni-text",{staticClass:"yticon icon-shoucang active"}),i("v-uni-text",[t._v("收藏")])],1)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1===t.loading,expression:"loading === false"}],staticClass:"container"},[i("v-uni-view",{staticClass:"s-header"},[i("v-uni-text",{staticClass:"tit"},[t._v("相关推荐")])],1),t._l(t.newsList,function(e){return i("v-uni-view",{key:e.id,staticClass:"rec-section"},[i("v-uni-view",{staticClass:"rec-item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"bot"},[i("v-uni-text",{staticClass:"author"},[t._v(t._s(e.author))]),i("v-uni-text",{staticClass:"time"},[t._v(t._s(e.time))])],1)],1),e.images.length>0?i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.images[0],mode:"aspectFill"}})],1):t._e()],1)],1)}),i("v-uni-view",{staticClass:"s-header"},[i("v-uni-text",{staticClass:"tit"},[t._v("网友评论")])],1),i("v-uni-view",{staticClass:"evalution"},t._l(t.evaList,function(e,a){return i("v-uni-view",{key:a,staticClass:"eva-item"},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"eva-right"},[i("v-uni-text",[t._v(t._s(e.nickname))]),i("v-uni-text",[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"zan-box"},[i("v-uni-text",[t._v(t._s(e.zan))]),i("v-uni-text",{staticClass:"yticon icon-shoucang"})],1),i("v-uni-text",{staticClass:"content"},[t._v(t._s(e.content))])],1)],1)}),1)],2),t.loading?i("mixLoading",{staticClass:"mix-loading"}):t._e()],1)],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"input-box"},[i("v-uni-text",{staticClass:"yticon icon-huifu"}),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"点评一下把..","placeholder-style":"color:#adb1b9;"}})],1),i("v-uni-text",{staticClass:"confirm-btn"},[t._v("提交")])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"2dbc":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mix-loading-content"},[i("v-uni-view",{staticClass:"mix-loading-wrapper"},[i("v-uni-image",{staticClass:"mix-loading-icon",attrs:{src:"data:image/png;base64,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"}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"3f30":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={props:{top:{type:Number,default:0}},data:function(){return{}},methods:{}};e.default=a},"42c7":function(t,e,i){"use strict";i.r(e);var a=i("2dbc"),n=i("a858");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("7d61");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"9c5847e6",null);e["default"]=l.exports},4338:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".mix-loading-content[data-v-9c5847e6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0)}.mix-loading-wrapper[data-v-9c5847e6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-animation:loading-data-v-9c5847e6 .5s ease-in infinite both alternate;animation:loading-data-v-9c5847e6 .5s ease-in infinite both alternate}.mix-loading-icon[data-v-9c5847e6]{width:%?80?%;height:%?80?%;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}@-webkit-keyframes loading-data-v-9c5847e6{0%{-webkit-transform:translateY(%?-20?%) scaleX(1);transform:translateY(%?-20?%) scaleX(1)}to{-webkit-transform:translateY(%?4?%) scaleX(1.3);transform:translateY(%?4?%) scaleX(1.3)}}@keyframes loading-data-v-9c5847e6{0%{-webkit-transform:translateY(%?-20?%) scaleX(1);transform:translateY(%?-20?%) scaleX(1)}to{-webkit-transform:translateY(%?4?%) scaleX(1.3);transform:translateY(%?4?%) scaleX(1.3)}}",""])},"4e97":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("55dd"),i("96cf");var n=a(i("3b8d")),s=a(i("861c")),o=a(i("42c7")),l={components:{mixLoading:o.default},data:function(){return{loading:!0,detailData:{},newsList:[],evaList:[]}},onLoad:function(t){this.detailData=JSON.parse(t.data),this.loadNewsList(),this.loadEvaList()},methods:{loadNewsList:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.default.newsList;case 2:e=t.sent,setTimeout(function(){e.sort(function(t,e){return Math.random()>.5?-1:1}),e.length=5,e.forEach(function(t){i.newsList.push(t)}),i.detailData.flow='<div style="font-size:15px;color: #555;line-height: 25px"><h1 style="margin: 0px; font-weight: normal; font-size: 26px; font-family: 微软雅黑; text-align: center; line-height: 30px; white-space: normal; background-color: rgb(255, 255, 255);"><br/></h1><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><img style="width: 100%;max-width: 100% !important;" src="http://app.shundecity.com/data/upload/yangtata/20190414/1555206583915888.jpg" border="0" hspace="0" vspace="0" data-bd-imgshare-binded="1" style="margin: 0px; padding: 0px; border: none; max-width: 90%;"/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;">市委常委、顺德区委书记郭文海赴勒流调研。<br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　昨日（4月13日），市委常委、顺德区委书记郭文海利用周末时间到勒流街道江村、黄连社区调研村级工业园改造、乡村振兴工作。郭文海表示，村级工业园改造和城乡形态提升是勒流目前面临的两大任务，要下定决心以城产人融合标准做好村级工业园连片改造的规划，健全生态体系建设；文化振兴是乡村振兴战略的源头活水，勒流要挖掘弘扬乡村民俗文化，为乡村振兴战略提供坚实的文化支撑，同时要充分发挥党建引领作用，广泛发动群众参与社区营造，自己家园自己建，打造美丽文明乡村。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　勒流今年以五金创新小镇·滨水生态区、中部产业园及富安工业区为着力点，重点推进龙眼、江村、新安三个村级工业园区的改造，吸引优质产业集聚，打造南、中、北三大产业集中布局组团，借助村级工业园改造的契机，让勒流的产业布局和城市面貌得到优化和提升。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　其中，江村工业区计划由改造方分单元进行连片改造，以绿色环保为导向，突出智能制造，打造“环境科技产业基地”；新安工业区初步划分为东、中、西三个改造区域，通过“退二进三”，建设集居住、商业、娱乐于一体的生活服务区，为富安工业区及周边村居提供配套设施服务。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海表示，勒流位于顺德的地理中心，是顺德的腹地，且工业基础雄厚，工业产值在顺德镇街中排名第三，发展潜力巨大，在村级工业园改造升级过程中，要下定决心做好连片改造的规划，腾出空间完善城市配套，以城产人融合标准健全生态体系建设，形成经济效益、生态效益、社会效益的三重丰收，为进驻企业提供优质的工作生活环境。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　古韵绵绵，河水潺潺，组成一幅优美的岭南水乡画卷。在千年古村黄连，文化营造和水乡生态修复、乡土美食推广、民宿建设构成了黄连振兴乡村，建设美丽文明村居的四大发展思路。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海参观了画家艺术村、藩侯何公祠、广绣坊。目前，黄连画家艺术村设有8个入驻画家工作室和10个流动流动艺术家创作驿站，画家村艺术活动非常活跃；黄连广绣作为顺德的传统文化和国家级非物质文化遗产，如今在黄连广绣坊开展有师资培训班、绣娘屋、亲子夏令营、广绣传承进校园等活动，激活、创新广绣技艺。值得一提的是，黄连社区把“厕所革命”与生态文明建设有机结合，优化提升人居环境和文旅公共服务水平。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海分别与画家村驻村画家及广绣坊学员亲切交流，并“点赞”黄连社区乡村振兴工作的开展成效。郭文海表示，文化振兴是乡村振兴战略的源头活水，千年古村黄连拥有深厚的民俗文化底蕴，需要挖掘、弘扬和发扬光大，将黄连的民俗文化做成黄连特色，必然会为乡村振兴提供坚实的文化支撑；同时，黄连的乡村振兴工作也离不开党建引领和社区营造，要充分发挥党建引领作用，广泛发动群众参与社区营造，自己家园自己建，打造“近者悦，远者来”的美丽文明乡村。（姚易　通讯员顺宣）</p><p><br/></p></div>',i.loading=!1},1e3);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadEvaList:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.default.evaList;case 2:this.evaList=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=l},"66ba":function(t,e,i){"use strict";var a=i("cdf9"),n=i.n(a);n.a},"79fb":function(t,e,i){var a=i("4338");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f6bc1240",a,!0,{sourceMap:!1,shadowMode:!1})},"7d61":function(t,e,i){"use strict";var a=i("79fb"),n=i.n(a);n.a},a858:function(t,e,i){"use strict";i.r(e);var a=i("3f30"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},bece:function(t,e,i){"use strict";i.r(e);var a=i("0d39"),n=i("0b9a");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("66ba");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"47a5f07f",null);e["default"]=l.exports},cdf9:function(t,e,i){var a=i("ed2f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("065d2f02",a,!0,{sourceMap:!1,shadowMode:!1})},ed2f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */uni-page-body[data-v-47a5f07f]{height:100%}.content[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;background:#fff}.video-wrapper[data-v-47a5f07f]{height:%?422?%}.video-wrapper .video[data-v-47a5f07f]{width:100%;height:100%}.scroll[data-v-47a5f07f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;background-color:#f8f8f8;height:0}.scroll-content[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n/* 简介 */.introduce-section[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?20?% %?30?%;background:#fff;line-height:1.5}.introduce-section .title[data-v-47a5f07f]{font-size:%?36?%;color:#303133;margin-bottom:%?16?%}.introduce-section .introduce[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?26?%;color:#909399}.introduce-section .introduce uni-text[data-v-47a5f07f]{margin-right:%?16?%}\n/* 点赞等操作 */.actions[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:1.3;padding:%?10?% %?40?% %?20?%}.actions .action-item[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?24?%;color:#999}.actions .yticon[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?52?%}.actions .yticon.reverse[data-v-47a5f07f]{position:relative;top:%?6?%;-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.actions .yticon.active[data-v-47a5f07f]{color:#ec706b}.actions .icon-fenxiang2[data-v-47a5f07f]{font-weight:700;font-size:%?36?%}.actions .icon-shoucang[data-v-47a5f07f]{font-size:%?44?%}.s-header[data-v-47a5f07f]{padding:%?20?% %?30?%;font-size:%?30?%;color:#303133;background:#fff;margin-top:%?16?%}.s-header[data-v-47a5f07f]:before{content:"";width:0;height:%?40?%;margin-right:%?24?%;border-left:%?6?% solid #ec706b}\n/* 推荐列表 */.rec-section[data-v-47a5f07f]{background-color:#fff}.rec-section .rec-item[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?30?%;position:relative}.rec-section .rec-item[data-v-47a5f07f]:after{content:"";position:absolute;left:%?30?%;right:0;bottom:0;height:0;border-bottom:1px solid #eee;-webkit-transform:scaleY(50%);-ms-transform:scaleY(50%);transform:scaleY(50%)}.rec-section .left[data-v-47a5f07f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-right:%?10?%;overflow:hidden;position:relative;padding-bottom:%?52?%}.rec-section .left .title[data-v-47a5f07f]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-size:%?32?%;color:#303133;line-height:%?44?%}.rec-section .left .bot[data-v-47a5f07f]{position:absolute;left:0;bottom:%?4?%;font-size:%?26?%;color:#909399}.rec-section .left .time[data-v-47a5f07f]{margin-left:%?20?%}.rec-section .right[data-v-47a5f07f]{width:%?220?%;height:%?140?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative}.rec-section .right .img[data-v-47a5f07f]{width:100%;height:100%}\n/* 评论 */.evalution[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;padding:%?20?% 0}.eva-item[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?30?%;position:relative}.eva-item uni-image[data-v-47a5f07f]{width:%?60?%;height:%?60?%;border-radius:50px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?24?%}.eva-item[data-v-47a5f07f]:after{content:"";position:absolute;left:%?30?%;bottom:0;right:0;height:0;border-bottom:1px solid #eee;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%)}.eva-item[data-v-47a5f07f]:last-child:after{border:0}.eva-right[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?26?%;color:#909399;position:relative}.eva-right .zan-box[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:base-line;-webkit-align-items:base-line;-ms-flex-align:base-line;align-items:base-line;position:absolute;top:%?10?%;right:%?10?%}.eva-right .zan-box .yticon[data-v-47a5f07f]{margin-left:%?8?%}.eva-right .content[data-v-47a5f07f]{font-size:%?28?%;color:#333;padding-top:%?20?%}\n/* 底部 */.bottom[data-v-47a5f07f]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding:0 %?30?%;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.04);box-shadow:0 -1px 3px rgba(0,0,0,.04);position:relative;z-index:1}.bottom .input-box[data-v-47a5f07f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?60?%;background:#f2f3f3;border-radius:100px;padding-left:%?30?%}.bottom .input-box .icon-huifu[data-v-47a5f07f]{font-size:%?28?%;color:#909399}.bottom .input-box .input[data-v-47a5f07f]{padding:0 %?20?%;font-size:%?28?%;color:#303133}.bottom .confirm-btn[data-v-47a5f07f]{font-size:%?30?%;padding-left:%?20?%;color:#0d9fff}',""])}}]);
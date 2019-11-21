<template>
	<view class="content">
		<!--
		* 广告组件
		* timedown 倒计时时间
		* imageUrl 背景图
		* url 跳转链接
		*  -->
		<!-- #ifndef MP -->
		<mix-advert 
			ref="mixAdvert" 
			:timedown="2" 
			imageUrl="/static/advert.jpg"
			:url="advertNavUrl"
		></mix-advert>
		<!-- #endif -->
		
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view 
				v-for="(item,index) in tabBars" :key="item.id"
				class="nav-item"
				:class="{current: index === tabCurrentIndex}"
				:id="'tab'+index"
				@click="changeTab(index)"
			>{{item.name}}</view>
		</scroll-view>
		
		<!-- 下拉刷新组件 -->
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
			<!-- 内容部分 -->
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item>
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore" >
						<scroll-view scroll-x="true" style="width: 100%;height:420upx;white-space: nowrap;">
							<careCardItem v-for="(item,index) in carelist" :key="index" @func="del()"
								 :receive-obj="{list:item,index:index}"></careCardItem>
						</scroll-view>
						<action-item v-for="(item,index) in actionlist" :key="index" style="background: #FFFFFF;"
								:receive-obj="{ headerImg:item.headerImg ,name: item.name,time:item.time,content:item.content,imgArr:item.imgArr,zanNum:item.zanNum,pinlunNum:item.pinlunNum,shareNum:item.shareNum,infoId:item.id}"></action-item>
						<mix-load-more :status="loadMoreStatus"></mix-load-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore" >
						<swiper class="swiper" indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
							<swiper-item>
								<image src="https://gdp.alicdn.com/imgextra/i1/2810146122/TB21iS6o5lnpuFjSZFgXXbi7FXa_!!2810146122.jpg" mode="scaleToFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="https://gdp.alicdn.com/imgextra/i1/2810146122/TB20mS5o4xmpuFjSZFNXXXrRXXa_!!2810146122.jpg" mode="scaleToFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="https://gdp.alicdn.com/imgextra/i1/2810146122/TB22NKtoYBnpuFjSZFGXXX51pXa_!!2810146122.jpg" mode="scaleToFill"></image>
							</swiper-item>
						</swiper>
						<centre_nav_cmp></centre_nav_cmp>
						<view style="margin: 20upx;flex-direction: column;">
							<view style="flex-direction: row;">
								<view style="background: #9ed08a;width: 50%;height: 100upx; border-radius: 10upx;margin-right: 10upx;text-align: center;" @click="clcik_public">
									<text style="line-height: 100upx;">新手适合养什么猫？</text>
								</view>
								<view style="background: #35af34;width: 50%;height: 100upx; border-radius: 10upx;margin-left: 10upx;text-align: center;" @click="clcik_public">
									<text style="line-height: 100upx;">如何挑选好的猫粮？</text>
								</view>
							</view>
							<view style="background: #F0AD4E;width: 100%;height: 250upx; border-radius: 10upx;margin-top: 10upx;" @click="clcik_public">
								<image src="../../static/images/centre_img.png" mode="scaleToFill"></image>
							</view>
						</view>
						<view style="padding-left: 20upx;line-height: 80upx;height: 80upx;border-bottom: 1px solid #CCCCCC;"><text>热门推荐</text></view>
						<view style="background: #FFFFFF;">
							<article-item v-for="(item,index) in articlelist" :key="index"
								 :receive-obj="{list:item}"></article-item>
						</view>
						<mix-load-more :status="loadMoreStatus"></mix-load-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore" >
						<article-item v-for="(item,index) in articlelist" :key="index"
							 :receive-obj="{list:item}"></article-item>
						<mix-load-more :status="loadMoreStatus"></mix-load-more>
					</scroll-view>
				</swiper-item>
			</swiper>
		</mix-pulldown-refresh>
		
	</view>
</template>

<script>
	import mixAdvert from '@/components/mix-advert/vue/mix-advert';
	import json from '@/json'
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	let windowWidth = 0, scrollTimer = false, tabBar;
	import actionItem from '../component/actionItem.vue';
	import articleItem from '../component/articleItem.vue';
	import centre_nav_cmp from '../component/centre_nav_cmp.vue'
	import careCardItem from  '../component/careCardItem.vue'
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
			mixAdvert,
			actionItem,
			articleItem,
			centre_nav_cmp,
			careCardItem
		},
		data() {
			return {
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				tabBars: [],
				loadMoreStatus: 0, //加载更多 0加载前，1加载中，2没有更多了
				actionlist: [],
				articlelist: [],
				carelist: [],
			}
		},
		computed: {
			advertNavUrl(){
				let data = {
					title: '测试跳转新闻详情',
					author: '测试作者',
					time: '2019-04-26 21:21'
				}
				return `/pages/details/details?data=${JSON.stringify(data)}`;
			} 
		},
		async onLoad() {
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadTabbars();
		},
		onReady(){
			/**
			 * 启动页广告 使用文档（滑稽）
			 * 1. 引入组件并注册 
			 * 		import mixAdvert from '@/components/mix-advert/vue/mix-advert';
			 *      components: {mixAdvert},
					 <!-- #ifndef MP -->
						<mix-advert 
							ref="mixAdvert" 
							:timedown="8" 
							imageUrl="/static/advert.jpg"
							:url="advertNavUrl"
						></mix-advert>
					<!-- #endif -->
			 * 	2. 调用组件的initAdvert()方法进行初始化
			 * 
			 *  初始化的时机应该是在splash关闭时，否则会造成在app端广告显示了数秒后首屏才渲染出来
			 */
			// #ifndef MP
			this.$refs.mixAdvert.initAdvert();
			// #endif
		},
		methods: {
			/**
			 * 数据处理方法在vue和nvue中通用，可以直接用mixin混合
			 * 这里直接写的
			 * mixin使用方法看index.nuve
			 */
			//获取分类
			loadTabbars(){
				let tabList = json.tabList;
				this.tabBars = tabList;
				this.loadNewsList('add');
				
				this.actionlist = json.actionlist;
				this.articlelist = json.articlelist;
				let newArr = json.carelist.slice(0);
				this.carelist = newArr;
			},
			//新闻列表
			loadNewsList(type){
				//type add 加载更多 refresh下拉刷新
				if(type === 'add'){
					if(this.loadMoreStatus === 2){
						return;
					}
					this.loadMoreStatus = 1;
				}
				// #ifdef APP-PLUS
				else if(type === 'refresh'){
					this.refreshing = true;
				}
				// #endif
				
				//setTimeout模拟异步请求数据
				setTimeout(()=>{
					//请求数据
					// let list = json.newsList;
					// list.sort((a,b)=>{
					// 	return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
					// })
					// if(type === 'refresh'){
					// 	tabItem.newsList = []; //刷新前清空数组
					// }
					// list.forEach(item=>{
					// 	item.id = parseInt(Math.random() * 10000);
					// 	tabItem.newsList.push(item);
					// })
					//下拉刷新 关闭刷新动画
					if(type === 'refresh'){
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
						// #ifdef APP-PLUS
						this.refreshing = false;
						// #endif
						this.loadMoreStatus = 0;
					}
					//上滑加载 处理状态
					if(type === 'add'){
						this.loadMoreStatus = 2;
					}
				}, 600)
			},
			//下拉刷新
			onPulldownReresh(){
				this.loadNewsList('refresh');
			},
			//上滑加载
			loadMore(){
				console.log(this.loadMoreStatus)
				this.loadNewsList('add');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable){
				if(this.enableScroll !== enable){
					this.enableScroll = enable;
				}
			},

			//tab切换
			async changeTab(e){
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
				}
				if(typeof tabBar !== 'object'){
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0; 
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if(i === index){
						nowWidth = result.width;
					}
				}
				if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index; 
				}
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndex = index; 
					}
					this.tabCurrentIndex = index; 
					//第一次切换tab，动画结束后需要加载数据
					if(this.tabCurrentIndex !== 0 && this.loaded !== true){
						this.loadNewsList('add');
						this.loaded = true;
					}
				}, 300)
			},
			//获得元素的size
			getElSize(id) { 
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			clcik_public() {
				uni.showToast({
					icon: "none",
					title: "主人，请等待……"
				})
			},
			del(data){
				// console.log("删除的数组元素:" + arr[0].name);
				// console.log("新的数组元素" + this.carelist);
				console.log(data);
				this.carelist.splice(data,1);
			}
		}
	}
</script>

<style lang='scss'>
	
	page, .content{
		background-color: #EFEFEF;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	/* 顶部tabbar */
	.nav-bar{
		position: relative;
		z-index: 10;
		height: 90upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
		background-color: #fff;
		text-align: center;
		.nav-item{
			display: inline-block;
			/* width: 150upx; */
			width: 25%;
			height: 90upx;
			text-align: center;
			line-height: 90upx;
			font-size: 36upx;
			color: #303133;
			position: relative;
			font-weight: bold;
			&:after{
				content: '';
				width: 0;
				height: 0;
				border-bottom: 4upx solid #007aff;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				transition: .3s;
			}
		}
		.current{
			color: #007aff;
			&:after{
				width: 70%;
			}
		}
	}

	.swiper-box{
		height: 100%;
		margin: 0 20upx 80upx;
	}

	.panel-scroll-box{
		height: 100%;
		
		.panel-item{
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
	
	/**
	 * 新闻列表 直接拿的nvue样式修改，,
	 * 一共需要修改不到10行代码, 另外px需要直接修改为upx，只有单位不一样，计算都是一样的
	 * 吐槽：难道不能在编译的时候把nuve中的upx转为px? 这样就不用修改单位了
	 */
	.video-wrapper{
		width: 100%;
		height: 440upx;
		.video{
			width: 100%;
		}
	}
	
	view{
		display:flex;
		flex-direction: column;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.news-item{
		position:relative;
	}
	/* 修改结束 */
	
	/* 新闻列表  emmm 仅供参考 */
	.news-item{
		width: 750upx;
		padding: 24upx 30upx;
		border-bottom-width: 1px;
		border-color: #eee;
		background-color: #fff;
	}
	.title{
		font-size: 32upx;
		color: #303133;
		line-height: 46upx;
	}
	.bot{
		flex-direction: row;
	}
	.author{
		font-size: 26upx;
		color: #aaa;
	}
	.time{
		font-size: 26upx;
		color: #aaa;
		margin-left: 20upx;
	}
	.img-list{
		flex-shrink: 0;
		flex-direction: row;
		background-color: #fff;
		width: 220upx;
		height: 140upx;
	}
	.img-wrapper{
		flex: 1;
		flex-direction: row;
		height: 140upx;
		position: relative;
		overflow: hidden;
	}
	.img{
		flex: 1;
	}
	.img-empty{
		height: 20upx;
	}
	
	/* 图在左 */
	.img-list1{
		position:absolute;
		left: 30upx;
		top: 24upx;
	}
	.title1{
		padding-left: 240upx; 
	}
	.bot1{
		padding-left: 240upx; 
		margin-top: 20upx;
	}
	/* 图在右 */
	.img-list2{
		position:absolute;
		right: 30upx;
		top: 24upx;
	}
	.title2{
		padding-right: 210upx; 
	}
	.bot2{
		margin-top: 20upx;
	}
	/* 底部3图 */
	.img-list3{
		width: 700upx;
		margin: 16upx 0upx;
	}
	.img-wrapper3{
		margin-right: 4upx;
	}
	/* 底部大图 */
	.img-list-single{
		width: 690upx;
		height: 240upx;
		margin: 16upx 0upx;
	}
	.img-wrapper-single{
		height: 240upx;
		margin-right: 0upx;
	}
	
	.video-tip{
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.3);
	}
	.video-tip-icon{
		width: 60upx;
		height:60upx; 
	}
</style>

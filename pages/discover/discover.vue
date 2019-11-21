<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;height: 365upx;">
			<view style="flex-direction: row; width: 100%; margin-bottom: 10upx;background: #FFFFFF;">
				<view v-for="(item,index) in cardBars" :key="index" @click="click_cardBars(index)"
					style="flex-direction: column;width: 25%; height: 170upx;display: inline-block;padding: 10upx 0;">
					<view style="width:100%; height: 120upx;display:flex;justify-content:center;align-items:center;">
						<image :src="item.ico" style="width: 120upx; height: 100upx;"></image>
					</view>
					<view style="width:100%; height: 50upx;text-align: center;">
						<text style="line-height: 50upx;">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft" style="overflow: hidden;">
			<view 
				v-for="(item,index) in tabBars" :key="index"
				class="nav-item"
				:class="{current: index === tabCurrentIndex}"
				:id="'tab'+index"
				@click="changeTab(index)"
			>{{item.name}}</view>
		</scroll-view>
		
		<!-- 下拉刷新组件 -->
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="460" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item>
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore" >
						<view style="flex-direction: column; width: 100%;padding:10upx 20upx;background: #FFFFFF">
							<wenzhang-item v-for="(item,index) in actionlist" :key="index" style="background: #FFFFFF"
								 :receive-obj="{list:item}"></wenzhang-item>
						</view>
						<mix-load-more :status="loadMoreStatus"></mix-load-more>
					</scroll-view>	
				</swiper-item>
				<swiper-item>
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore" >
						<view style="flex-direction: column; width: 100%;padding: 10upx 20upx;background: #FFFFFF">
							<wenda-item v-for="(item,index) in actionlist" :key="index" style="background: #FFFFFF"
								 :receive-obj="{list:item}"></wenda-item>
						</view>
						<mix-load-more :status="loadMoreStatus"></mix-load-more>
					</scroll-view>	
				</swiper-item>
				<swiper-item>
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore" >
						<view style="flex-direction: column; width: 100%;padding: 10upx 20upx;background: #FFFFFF">
							<huati-item v-for="(item,index) in actionlist" :key="index" style="background: #FFFFFF"
								 :receive-obj="{list:item}"></huati-item>
						</view>
						<mix-load-more :status="loadMoreStatus"></mix-load-more>
					</scroll-view>	
				</swiper-item>
			</swiper>
		</mix-pulldown-refresh>
		
	</view>
</template>

<script>
	import json from '@/json'
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	import wenzhangItem from '../component/wenzhangItem.vue';
	import wendaItem from '../component/wendaItem.vue';
	import huatiItem from '../component/huatiItem.vue'
	let windowWidth = 0, scrollTimer = false, tabBar;
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
			wenzhangItem,
			wendaItem,
			huatiItem
		},
		data() {
			return {
				actionlist: [],
				articlelist: [],
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				tabBars: [],
				cardBars: [
					{title: "文章", id: '0', gotoUrl:"wenzhang_view", ico:"../../static/actionImg/01.jpg" },
					{title: "问答", id: '1', gotoUrl:"wenda_view", ico:"../../static/actionImg/02.jpg"  },
					{title: "话题", id: '2', gotoUrl:"huati_view", ico:"../../static/actionImg/03.jpg"  },
					{title: "动态", id: '3', gotoUrl:"dongtai_view", ico:"../../static/actionImg/04.jpg"  },
					{title: "新闻", id: '4', gotoUrl:"xinwen_view", ico:"../../static/actionImg/05.jpg"  },
					{title: "小组", id: '5', gotoUrl:"xiaozu_view", ico:"../../static/actionImg/06.jpg"  },
					{title: "同城", id: '6', gotoUrl:"tongcheng_view", ico:"../../static/actionImg/07.jpg"  },
					{title: "达人", id: '7', gotoUrl:"daren_view", ico:"../../static/actionImg/08.jpg"  }
				],
				loadMoreStatus: 0, //加载更多 0加载前，1加载中，2没有更多了
			}
		},
		async onLoad() {
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadTabbars();
		},
		methods: {
			loadTabbars(){
				let tabList = json.discoverList;
				this.tabBars = tabList;
				this.loadNewsList('add');
				
				this.actionlist = json.actionlist;
				this.articlelist = json.articlelist;
			},
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
			click_cardBars(e){
				var index = Number(e);
				// uni.showToast({
				// 	icon: "none",
				// 	title: "即将跳转：" + this.cardBars[index].title
				// })
				uni.navigateTo({
					url: this.cardBars[index].gotoUrl
				})
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
			width: 33.3%;
			height: 90upx;
			text-align: center;
			line-height: 90upx;
			/* font-size: 36upx; */
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
	}
	
	.panel-scroll-box{
		height: 100%;
		margin: 20upx 0 100upx;
		
		.panel-item{
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
</style>

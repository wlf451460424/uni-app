<template>
	<view class="center">
		<view class="header_div" >
			<view  class="header_left">
				<view style="width: 20%;align-items: center;">
					<image class="user-img" :src="login_status ? uerInfo.avatarUrl : avatarUrl_default" @click="goPersonInfo"></image>
				</view>
				<view class="user" style="width: 80%;">
					<!-- <text class="user-name">{{login_status ? uerInfo.name : '登录'}}</text> -->
					<!-- <text class="user-name">签名：我是一个牛仔……</text> -->
					
					<view style="flex-direction: row;width: 100%;">
						<text class="user-nickname" @click="nameClick">{{login_status ? uerInfo.nickName : '登录'}}</text>
						<view style="width: 15%;">
							<image src="../../static/actionImg/share.png" style="width: 60upx;height: 60upx;margin-left:auto;" @click="shareClick"></image>
						</view>
					</view>
					<view style="flex-direction: row;width: 100%;">
						<text class="user-accountname">用户名：</text>
						<text class="user-accountname" @click="nameClick">{{login_status ? uerInfo.accountName : ''}}</text>
					</view>
					<view>
						<view style="padding-right: 40upx;" @click="gotoView('0')">
							<text>关注</text>
							<text>999</text>
						</view>
						<view style="padding-right: 40upx;" @click="gotoView('1')">
							<text>粉丝</text>
							<text>999</text>
						</view>
						<view style="padding-right: 40upx;" @click="gotoView('2')">
							<text>点赞</text>
							<text>999</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="header_right">
				<text style="font-size: 16px;font-weight: bold;">爱宠</text>
				<scroll-view scroll-x="true" style="width: 100%;height:140upx;white-space: nowrap;">
					<!-- <careCardItem v-for="(item,index) in carelist" :key="index" @func="del()"
						 :receive-obj="{list:item,index:index}"></careCardItem> -->
					<addPetItem></addPetItem>
					<addPetItem></addPetItem>
					<view style="flex-direction: row;width: 240upx;	height: 120upx;line-height: 120upx;background: #4CBDF3;border-radius: 10upx;margin:10upx 10upx;display: inline-block;vertical-align: middle;">
						<view style="display: flex;width: 100%;height: 100%;"  @click="addPet">
							<image src="../../static/center-ico/add.png" style="width: 60upx; height: 60upx;border-radius: 60upx;margin: 30upx 10upx;"></image>
							<text style="line-height:120upx;font-size: 20upx;">添加宠物</text>	
						</view>
					</view>
				</scroll-view>
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
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="400" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
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
							<action-item v-for="(item,index) in actionlist" :key="index"
								:receive-obj="{ headerImg:item.headerImg ,name: item.name,time:item.time,content:item.content,imgArr:item.imgArr,zanNum:item.zanNum,pinlunNum:item.pinlunNum,shareNum:item.shareNum,infoId:item.id}"></action-item>
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
						<view style="flex-direction: column; width: 100%;padding: 0 20upx;">
							<view v-for="(item,index) in moreList" :key="index" @click="more_itemClick(index,item.name)" style="flex-direction: row;width: 100%;height: 80upx;line-height: 80upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
								<view style="width: 20%;height: 100%;align-items: center;">
									<text>{{item.name}}</text>
								</view>
								<view style="width: 80%;justify-content: flex-end;align-items: center;">
									<image style="width: 40upx;height: 40upx;" src="../../static/center-ico/next.png" >
								</view>
							</view>
						</view>
					</scroll-view>	
				</swiper-item>
			</swiper>
		</mix-pulldown-refresh>
		
		<!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
		<!-- 底部分享弹窗 -->
		<uni-popup ref="showshare" type="bottom" @change="change" style="z-index: 999;">
			<view class="uni-share">
				<text class="uni-share-title">分享到</text>
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">{{ item.text }}</text>
					</view>
				</view>
				<button class="button" type="primary" style="background-color: #EFEFEF; color: #333333;" @click="cancel('share')">取消</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import json from '@/json'
	import actionItem from '../component/actionItem.vue'
	import articleItem from '../component/articleItem.vue'
	import addPetItem from  '../component/addPetItem.vue'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	import wenzhangItem from '../component/wenzhangItem.vue';
	import wendaItem from '../component/wendaItem.vue';
	import huatiItem from '../component/huatiItem.vue'
	let windowWidth = 0, scrollTimer = false, tabBar;
	export default {
		components:{
			actionItem,
			articleItem,
			addPetItem,
			uniPopup,
			mixPulldownRefresh,
			mixLoadMore,
			wenzhangItem,
			wendaItem,
			huatiItem
		},
		data() {
			return {
				login_status:true,
				avatarUrl_default:"../../static/header_default.png",
				uerInfo:{
					nickName:"隔壁老张",
					accountName:"USER0001",
					avatarUrl:"../../static/header_show.png"
				},
				isActive: true,
				isShow: true,
				
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				loadMoreStatus: 0, //加载更多 0加载前，1加载中，2没有更多了
				
				tabBars:[],
				moreList:[],
				actionlist: [],
				articlelist: [],
				actionShow: false,
				articleShow: true,
				questionShow: true,
				othersShow: true,
				type: '',
				bottomData: [{
					text: '微信',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
					name: 'wx'},{
					text: 'QQ',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
					name: 'qq'},{
					text: '支付宝',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
					name: 'wx'},{
					text: '百度',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
					name: 'wx'},{
					text: '新浪',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
					name: 'sina'},{
					text: '其他',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
					name: 'more'}
				]
			}
		},
		async onLoad() {
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.load();
			uni.hideTabBarRedDot({
				index: 3,
			})
		},
		methods: {
			load() {
				this.loadNewsList('add');
				this.tabBars = json.cenrter_tabBars;
				this.moreList = json.cenrter_moreList;
				this.actionlist = json.actionlist;
				this.articlelist = json.articlelist;
			},
			nameClick(){
				if(!this.login_status){
					//登录
					uni.navigateTo({
						url:"../login/login"
					})
				}
			},
			goPersonInfo() {
				if(this.login_status){
					uni.navigateTo({
						url:"personInfo"
					})
				}else{
					//登录
					uni.navigateTo({
						url:"../login/login"
					})
				}
				
			},
			gotoView(type){
				switch(type){
					case '0' :
						uni.navigateTo({
							url:"../other/concern_page"
						})
						break;
					case '1' :
						uni.navigateTo({
							url:"../other/fans_page"
						})
						break;
					case '2' :
						uni.navigateTo({
							url:"../other/thumbsup_page"
						})
						break;
				}
			},
			addPet(){
				uni.navigateTo({
					url:"add_pet"
				})
			},
			shareClick(){
				this.$refs.showshare.open()
			},
			cancel(type) {
				this.$refs.showshare.close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
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
			more_itemClick(index,name){
				uni.showToast({
					icon: "none",
					title: "跳转：" + name
				})
				//	跳转相应页面
				uni.navigateTo({
					url:""
				})
				
				
				// switch (index) {
				// 	case 0:
						
				// 		break
				// 	case 1:
					
				// 		break
				// }
			}
			
		}
	}
</script>

<style>
	page,
	view {
	    display: flex;
	}
	
	page {
	    display: flex;
	    min-height: 100%;
	    background-color: #EFEFEF;
	}
	
	template {
	    display: flex;
	    flex: 1;
	}
	/* 个人中心 */
	.center {
		width: 100%;
		flex-direction: column;
		color: #555555;
		/* font-size: 14px; */
		background-color: #FFFFFF;
	}
	.header_div {
		width: 100%;
		height: 460upx;
		/* padding: 20upx 20upx 0 20upx; */
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
	}
	.header_left{
		width: 100%;
		/* border-bottom: 1px solid #CCCCCC; */
		padding: 20upx;
	}
	.user-img{
		width: 120upx;
		height: 120upx;
		border-radius: 120upx;
		margin-right:30upx;
	}
	.user{
		flex-direction: column;
		text-align: left;
		/* width: 100%; */
	}
	.user-nickname {
		height: 60upx;
		line-height: 60upx;
		width: 85%;
		font-size: 16px;
		font-weight: bold;
	}
	.user-accountname {
		height: 60upx;
		line-height: 60upx;
		color: #AAAAAA;
	}
	.header_right{
		width: 100%;
		flex-direction: column;
		padding: 0 20upx;
	}
	
	.item_text{
		width: 50%;
		line-height: 40upx;
		text-align: center;
	}
	.active{
		color: #4cbdf3;
	}
	.active_none{
		display: none;
	}
	.content_title_item{
		margin-top: 4upx;
		width: 100%;
		height: 40px;
		padding: 10px;
		box-sizing: border-box;
		/* background-color: #0A98D5; */
		flex-direction: row;
		align-items: center;
	}
	
	
	.button {
		flex: 1;
		margin: 10px 0;
	}
	
	/* 底部分享 */
	.uni-share {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		background-color: #fff;
	}
	
	.uni-share-title {
		line-height: 60upx;
		font-size: 16px;
		padding: 15rpx 0;
		text-align: center;
	}
	
	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 15px;
	}
	
	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		width: 200rpx;
	}
	
	.uni-share-content-image {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 60rpx;
		height: 60rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}
	
	.content-image {
		width: 60rpx;
		height: 60rpx;
	}
	
	.uni-share-content-text {
		font-size: 26rpx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	
	.uni-share-btn {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 14px;
		border-top-color: #f5f5f5;
		border-top-width: 1px;
		border-top-style: solid;
		text-align: center;
		color: #666;
	}
	
	/* 顶部tabbar */
	.nav-bar{
		position: relative;
		z-index: 10;
		width: 100%;
		height: 80upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
		background-color: #FFFFFF;
		text-align: center;
	}
	.nav-item{
		display: inline-block;
		/* width: 150upx; */
		width:20%;
		height: 70upx;
		text-align: center;
		line-height: 70upx;
		/* font-size: 36upx; */
		color: #303133;
		position: relative;
		font-weight: bold;
		&:after{
			content: '';
			width: 0;
			height: 0;
			/* border-bottom: 4upx solid #007aff; */
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			transition: .3s;
		}
	}
	.current{
		/* border-bottom: 4upx solid #007aff; */
		color: #007aff;
		&:after{
			width: 70%;
		}
	}
	.swiper-box{
		height: 100%;
	}
	
	.panel-scroll-box{
		height: 100%;
		margin: 10upx 0 50upx;
		
		.panel-item{
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
	
</style>
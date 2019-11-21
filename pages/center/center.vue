<template>
	<view class="center">
		<view class="header_div" >
			<view  class="header_left" @click="goLogin">
				<image class="user-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
				<view class="user">
					<text class="user-name">{{login ? uerInfo.name : '登录/注册'}}</text>
					<text class="user-name">签名：我是一个牛仔……</text>
				</view>
			</view>
			<view class="header_right">
				<view class="header_item" @click="goCareList">
					<text class="item_text">关注</text>
					<text class="item_text">8888</text>
				</view>
				<view class="header_item" @click="goFansList">
					<text class="item_text">粉丝</text>
					<text class="item_text">8888</text>
				</view>
				<view class="header_item" @click="goSaveList">
					<text class="item_text">收藏</text>
					<text class="item_text">8888</text>
				</view>
			</view>
		</view>
		<view class="content_title">
			<text class="item_text" :class="{ active: isActive}" @click="myAction">我的动态</text>|
			<text class="item_text" :class="{ active: !isActive}" @click="myDossier">我的档案</text>
		</view>
		<view class="content_title_item" :class="{ active_none: !isShow}">
			<text
				v-for="(item,index) in tabList" :key="item.id" id="index"
				class="item_text"
				:class="{active: index === tabCurrentIndex}"
				@click="changeTab(index)"
				>{{item.name}}
			</text>
		</view>
		<!-- 我的动态 -->
		<view id="myAction_content" :class="{ active_none: !isActive}">
			<!-- 动态 -->
			<view id="info_div" style="flex-direction: column; " :class="{active_none:actionShow}" >
				<action-item v-for="(item,index) in actionlist" :key="index"
					:receive-obj="{ headerImg:item.headerImg ,name: item.name,time:item.time,content:item.content,imgArr:item.imgArr,zanNum:item.zanNum,pinlunNum:item.pinlunNum,shareNum:item.shareNum,infoId:item.id}"></action-item>
			</view>
			<!-- 文章 -->
			<view id="info_div" style="flex-direction: column;width: 100%;" :class="{active_none:articleShow}" >
				<article-item v-for="(item,index) in articlelist" :key="index"
					 :receive-obj="{list:item}"></article-item>
			</view>
			<!-- 问题 -->
			<view id="info_div" style="flex-direction: column; margin:20upx;" :class="{active_none:questionShow}" >
				<text>我是问题</text>
			</view>
			<!-- 其他 -->
			<view id="info_div" style="flex-direction: column; margin:20upx;" :class="{active_none:othersShow}" >
				<text>我是其他</text>
			</view>
		</view>
		<!-- 宠物档案 -->
		<view id="myDossier_content" :class="{ active_none: isActive}">
			<text style="text-align: center;">我就是档案</text>
		</view>
		
		<!-- <view class="center-list">
			<view class="center-list-item border-bottom">
				<image class="list-icon" src="../../static/center-ico/setup.png"></image>
				<text class="list-text">收藏</text>
				<image class="navigat-arrow" src="../../static/center-ico/next.png"></image>
			</view>
			<view class="center-list-item">
				<image class="list-icon" src="../../static/center-ico/setup.png"></image>
				<text class="list-text">图集</text>
				<image class="navigat-arrow" src="../../static/center-ico/next.png"></image>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	import json from '@/json'
	import actionItem from '../component/actionItem.vue'
	import articleItem from '../component/articleItem.vue'
	export default {
		components:{
			actionItem,
			articleItem
		},
		data() {
			return {
				login:true,
				avatarUrl:"../../static/header_default.png",
				uerInfo:{
					name:"隔壁老张",
					avatarUrl:"../../static/header_show.png"
				},
				isActive: true,
				isShow: true,
				tabCurrentIndex: 0,
				tabList: [{
					name: '动态',
					id: '0',
				}, {
					name: '文章',
					id: '1'
				}, {
					name: '问题',
					id: '2',
				}, {
					name: '其他',
					id: '3'
				}],
				actionlist: [],
				articlelist: [],
				actionShow: false,
				articleShow: true,
				questionShow: true,
				othersShow: true
			}
		},
		async onLoad() {
			this.load();
			uni.hideTabBarRedDot({
				index: 3,
			})
		},
		methods: {
			load() {
				this.actionlist = json.actionlist;
				this.articlelist = json.articlelist;
			},
			goLogin() {
				if(!this.login){
					uni.navigateTo({
						url:"../login/login"
					})
				}else{
					uni.navigateTo({
						url:"personInfo"
					})
				}
			},
			goCareList() {
				uni.navigateTo({
					url:"../news/news"
				})
			},
			goFansList() {
				uni.navigateTo({
					url:"../news/news"
				})
			},
			goSaveList() {
				uni.navigateTo({
					url:"../news/news"
				})
			},
			myAction(){
				if(this.isActive)return;
				this.isActive = !this.isActive;
				this.isShow = !this.isShow;
			},
			myDossier(){
				if(!this.isActive)return;
				this.isActive = !this.isActive;
				this.isShow = !this.isShow;
			},
			changeTab(e){
				this.tabCurrentIndex = e;
				this.actionShow = true;
				this.articleShow = true;
				this.questionShow = true;
				this.othersShow = true;
				console.log(e)
				switch(e){
					case 0 :
						this.actionShow = false;
						break;
					case 1 :
						this.articleShow = false;
						break;
					case 2 :
						this.questionShow = false;
						break;
					case 3 :
						this.othersShow = false;
						break;
			   }
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
	}
	.header_div {
		width: 100%;
		height: 280upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		flex-direction: column;
		align-items: center;
	}
	.header_left{
		width: 100%;
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 20upx;
	}
	.header_right{
		width: 100%;
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
	}
	.user-name {
		height: 60upx;
		line-height: 60upx;
	}
	.header_item{
		flex-direction: column;
		width: 33%;
		/* text-align: center; */
		text-align: -webkit-center;
	}
	.content_title{
		margin-top: 4upx;
		width: 100%;
		height: 40px;
		padding: 10px;
		box-sizing: border-box;
		background-color: #FFFFFF;
		flex-direction: row;
		align-items: center;
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
		background-color: #FFFFFF;
		flex-direction: row;
		align-items: center;
	}
	
</style>
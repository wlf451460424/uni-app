<template>
	<view style="flex-direction: column;width: 240upx;height: 380upx;background: #FFFFFF;border-radius: 20upx;margin: 20upx;display: inline-block;">
		<view style="position: absolute; text-align: right; width: 240upx; height: 60upx;">
			<image src="../../static/del.png" style="width: 40upx; height: 40upx;margin: 8upx 8upx ;" @click="del(index)"></image>
		</view>
		<view style="width: 100%;height: 130upx;align-items:center;">
			<image :src="list.img_src" style="margin: 30upx 70upx;width: 100upx; height: 100upx;border-radius: 50upx;"></image>
		</view>
		<view style="width: 100%;height: 60upx;text-align: center;color: #000000;font-weight: bold;">
			<text style="max-height: 60upx;line-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
				{{list.name}}
			</text>
		</view>
		<view style="width: 100%;height: 50upx;line-height: 50upx;text-align: center;color: #888888">
			我的简介
		</view>
		<view style="width: 100%;height: 50upx;text-align: center;color: #CCCCCC;">
			<text style="max-height: 50upx;line-height: 50upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
				{{list.introduction}}
			</text>
		</view>
		<view style="height: 60upx;background: #09BB07;text-align: center;background: #4CBDF3;margin: 18upx 40upx;border-radius: 10upx;" :class="{active:isShow}" @click="careClick">
			<text style="line-height: 60upx;color: #E4E7ED;">{{careText}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				careText: '关  注',
				isShow: false,
				index: '',
				list: []
			}
		},
		props: {
			receiveObj: Object
		},
		mounted() {
			this.list = this.receiveObj.list;
			this.index = this.receiveObj.index;
		},
		methods: {
			del(e){
				this.$emit('func',e)
			},
			careClick(){
				this.isShow = !this.isShow;
				if(this.isShow){
					this.careText = "取消关注"
					uni.showToast({
						icon: "none",
						title: "关注成功!"
					})
				}else{
					this.careText = "关  注"
				}
			}
		}
	}
</script>

<style>
	.active{
		background: #AAAAAA !important;
	}
</style>


<!-- <view style="flex-direction: column;width: 240upx;height: 380upx;background: #FFFFFF;border-radius: 20upx;margin: 15upx;">
	<view style="width: 100%;height: 140upx;align-items:center;">
		<image src="../../static/header_show.png" style="margin: 20upx 10upx 10upx;width: 100upx; height: 100upx;border-radius: 50upx;"></image>
	</view>
	<view style="width: 100%;height: 60upx;text-align: center;color: #000000;font-weight: bold;">
		<text style="max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
			I am CC
		</text>
	</view>
	<view style="width: 100%;height: 60upx;text-align: center;color: #888888">
		我的简介
	</view>
	<view style="width: 100%;height: 60upx;text-align: center;color: #CCCCCC;">
		<text style="max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
			我是一名牛仔
		</text>
	</view>
	<view style="height: 60upx;background: #09BB07;color: #FFFFFF;text-align: center;background: #4CBDF3;margin: 15upx 50upx;border-radius: 30upx;">
		关  注
	</view>
</view> -->
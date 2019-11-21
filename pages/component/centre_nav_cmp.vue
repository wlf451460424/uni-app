<template>
	<view class="content">
		<view style="margin: 20upx;flex-direction: column;background: #FFFFFF;border-radius: 10upx;">
			<view style="flex-direction: row;">
				<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_Handler('1')">
					<view style="flex-direction: column; width: 70%;">
						<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">问答</text>
						<text style="line-height: 30upx; font-size: 20upx; color: #999999;">十万个为什么？</text>
					</view>
					<view style="width: 30%; text-align:center;align-items:center;">
						<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 10upx;width: 80upx; height: 80upx;"></image>
					</view>
				</view>
				<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_Handler('2')">
					<view style="flex-direction: column; width: 70%;">
						<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">寄养</text>
						<text style="line-height: 30upx; font-size: 20upx; color: #999999;">想让它住哪里？</text>
					</view>
					<view style="width: 30%; text-align:center;align-items:center;">
						<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 10upx;width: 80upx; height: 80upx;"></image>
					</view>
				</view>
			</view>
			<view style="flex-direction: row;">
				<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_Handler('3')">
					<view style="flex-direction: column; width: 70%;">
						<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">领养</text>
						<text style="line-height: 30upx; font-size: 20upx; color: #999999;">给它一个家？</text>
					</view>
					<view style="width: 30%; text-align:center;align-items:center;">
						<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 10upx;width: 80upx; height: 80upx;"></image>
					</view>
				</view>
				<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_Handler('4')">
					<view style="flex-direction: column; width: 70%;">
						<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">救助</text>
						<text style="line-height: 30upx; font-size: 20upx; color: #999999;">献爱心 领宠物</text>
					</view>
					<view style="width: 30%; text-align:center;align-items:center;">
						<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 10upx;width: 80upx; height: 80upx;"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			clcik_Handler(e) {
				let str='';
				console.log(e)
				switch(e){
					case '1':
						str = '问答模块，';
						break;
					case '2':
						str = '寄养模块，';
						break;
					case '3':
						str = '领养模块，';
						break;
					case '4':
						str = '救助模块，';
						break;
				}
				uni.showToast({
					icon: "none",
					title: str + "请等待……"
				})
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
	.content{
		width: 100%;
		flex-direction: column;
	}
</style>

<!-- 四个导航 -->
<!-- <view style="margin: 20upx;flex-direction: column;background: #FFFFFF;border-radius: 10upx;">
	<view style="flex-direction: row;">
		<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_public">
			<view style="flex-direction: column; width: 70%;">
				<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">问答</text>
				<text style="line-height: 30upx; font-size: 20upx; color: #999999;">十万个为什么？</text>
			</view>
			<view style="width: 30%; text-align:center;align-items:center;">
				<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 0;width: 80upx; height: 80upx;"></image>
			</view>
		</view>
		<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_public">
			<view style="flex-direction: column; width: 70%;">
				<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">问答</text>
				<text style="line-height: 30upx; font-size: 20upx; color: #999999;">十万个为什么？</text>
			</view>
			<view style="width: 30%; text-align:center;align-items:center;">
				<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 0;width: 80upx; height: 80upx;"></image>
			</view>
		</view>
	</view>
	<view style="flex-direction: row;">
		<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_public">
			<view style="flex-direction: column; width: 70%;">
				<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">问答</text>
				<text style="line-height: 30upx; font-size: 20upx; color: #999999;">十万个为什么？</text>
			</view>
			<view style="width: 30%; text-align:center;align-items:center;">
				<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 0;width: 80upx; height: 80upx;"></image>
			</view>
		</view>
		<view style="width: 50%;height: 100upx; margin: 10upx;background: #F2F2F2;flex-direction: row;" @click="clcik_public">
			<view style="flex-direction: column; width: 70%;">
				<text style="line-height: 50upx; font-size: 36upx;font-weight: bold;">问答</text>
				<text style="line-height: 30upx; font-size: 20upx; color: #999999;">十万个为什么？</text>
			</view>
			<view style="width: 30%; text-align:center;align-items:center;">
				<image src="../../static/actionImg/06.jpg" style="margin: 10upx 10upx 0;width: 80upx; height: 80upx;"></image>
			</view>
		</view>
	</view>
</view>
 -->
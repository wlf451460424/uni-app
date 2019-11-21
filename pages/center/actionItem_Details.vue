<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%; ">
			<swiper class="swiper" indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
			  <swiper-item v-for="(item,index) in this.send_data.imgArr" :key="index" style="text-align: center;background: #000000;">
			    <image :src="item"></image>
			  </swiper-item>
			</swiper>
			<view style="flex-direction: column; margin:20upx 20upx 0 20upx;">
				<view style="flex-direction: row;" @click="goActionItem_Details">
					<image :src="this.send_data.headerImg"  style="width: 100upx;height: 100upx;border-radius: 50upx;"></image>
					<view style="flex-direction: column; margin-left: 20upx;">
						<text >{{this.send_data.name}}</text>
						<text >{{this.send_data.time}}</text>
					</view>
				</view>
				<view style="flex-direction: column;padding: 20upx 0;" @click="goActionItem_Details">
					<text style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;" >
						{{this.send_data.content}}
					</text>
				</view>
				<view style="flex-direction: row;width: 100%; height:70upx; line-height: 70upx; color: #888888;align-items: center;"  >
					<view style="flex-direction: row;width: 70%;align-items: center;">
						<image src="../../static/actionImg/Location_ico.png" style="width: 40upx;height: 40upx;margin-right: 10upx;"></image>
						<text style="">西安.小寨</text>		
					</view>
					<text style="width: 30%;text-align: right;">浏览 {{pinlu_num}} </text>	
				</view>
			</view>
			<view style="flex-direction: column; width: 100%;">
				<view style="flex-direction: row;width: 100%; height: 100upx; line-height: 100upx;
					align-items: center;padding:0 20upx; border-bottom: 1px solid #AAAAAA; border-top: 1px solid #AAAAAA;">
					<view style="flex-direction: column;width:20%;" @click="clcik_thumbsup">
						<image :src="zan_show?zan_ico_over:zan_ico" style="width: 45upx; height: 45upx; margin-top: 10upx;"></image>
						<text :class="{ red_text: zan_show}"> {{zan_num}}</text>	
					</view>
					<view style="width: 60%;height:100upx;white-space: nowrap;">
						<view v-for="item in 4" :key="item" style="width: 90upx;height: 100upx;text-align: center;display: inline-block;">
							<image src="../../static/header_show.png"  style="width: 70upx;height: 70upx;border-radius: 35upx; margin-top: 15upx;"></image>
						</view>
					</view>
					<view style="width: 20%; height: 100upx;display:flex;justify-content:flex-end;align-items:center;">
						<view @click="thumbsup_list" style="width: 70upx;height: 70upx;border-radius: 35upx;  border: 1px solid #888888;line-height: 70upx;">
							<text style="width: 70upx;height: 70upx;text-align: center;color: #888888;">更多 </text>
						</view>
					</view>
				</view>
				<view style="flex-direction: row;width: 100%; height: 100upx; line-height: 100upx;
					align-items: center;padding-left: 20upx;border-bottom: 1px solid #AAAAAA;"  >
					<!-- <image src="../../static/actionImg/comment.png" style="width: 60upx; height: 60upx;"></image> -->
					<text >评论 </text>	
					<text >( {{pinlu_num}} )</text>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				send_data: Object,
				zan_ico: "../../static/actionImg/thumbsup.png",
				zan_ico_over: "../../static/actionImg/thumbsup_over.png",
				zan_show:false,
				zan_num: "",
				pinlu_num: "",
			}
		},
		onLoad(e) {
			this.send_data = JSON.parse(decodeURIComponent(e.data));
			this.imgArr = this.send_data.imgArr;
			this.zan_num = this.send_data.zanNum;
			this.pinlu_num = this.send_data.pinlunNum;
		},
		methods: {
			clcik_thumbsup() {
				this.zan_show = !this.zan_show;
				if(this.zan_show){
					this.zan_num = Number(this.zan_num) + 1;
				}else{
					this.zan_num = Number(this.zan_num) - 1;
				}
			},
			thumbsup_list() {
				uni.navigateTo({
					url:"../other/thumbsup_page"
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
	    background-color: #FFFFFF;
	}
	template {
	    display: flex;
	    flex: 1;
	}
	/* 个人中心 */
	.content {
		width: 100%;
		flex-direction: column;
		color: #555555;
		/* font-size: 14px; */
	}
	.red_text{
		color: #ff0000;
	}
	.normal_text{
		color: #555555;
	}
</style>

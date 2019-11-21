<template>
	<view class="content">
		<view class="info_div" style="flex-direction: column; margin:20upx;" :id="info_id">
			<view style="flex-direction: column; padding: 20upx 0; border-bottom: 1upx solid #AAAAAA;">
				<view style="flex-direction: row;" @click="goActionItem_Details">
					<image :src="headerImg"  style="width: 100upx;height: 100upx;border-radius: 50upx;"></image>
					<view style="flex-direction: column; margin-left: 20upx;">
						<text >{{userName}}</text>
						<text >{{time}}</text>
					</view>
				</view>
				<view style="flex-direction: column;padding: 20upx 0;" @click="goActionItem_Details">
					<text style="max-height: 150upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;" >
						{{content}}
					</text>
					<view style="flex-direction: row;width: 100%;height: 200upx;padding-top: 10upx;">
						<image :src="src1" mode="aspectFill"  style="width: 33%; height: 200upx; padding: 5upx;"></image>
						<image :src="src2" mode="aspectFill"  style="width: 33%; height: 200upx; padding: 5upx;"></image>
						<image :src="src3" mode="aspectFill"  style="width: 33%; height: 200upx; padding: 5upx;"></image>
					</view>
				</view>
				<view style="flex-direction: row; width: 100%;height: 50upx;">
					<view style="flex-direction: row;width: 33%; height: 50upx; line-height: 50upx;"  @click="clcik_thumbsup">
						<image :src="zan_show?zan_ico_over:zan_ico" style="width: 45upx; height: 45upx; margin:0 5% 0 25%"></image>
						<text :class="{ red_text: zan_show}">{{zan_num}}</text>	
					</view>
					<view style="flex-direction: row;width: 33%; height: 50upx; line-height: 50upx;"  @click="clcik_comment()">
						<image src="../../static/actionImg/comment.png" style="width: 45upx; height: 45upx; margin:0 5% 0 25%"></image>
						<text >{{pinlu_num}}</text>	
					</view>
					<view style="flex-direction: row;width: 33%; height: 50upx; line-height: 50upx;"  @click="clcik_share">
						<image src="../../static/actionImg/share.png" style="width: 45upx; height: 45upx; margin:0 5% 0 25%"></image>
						<text >{{share_num}}</text>	
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				info_id:"",
				userName : "",
				time : "",
				content : "",
				headerImg: "",
				src1: "",
				src2: "",
				src3: "",
				zan_ico: "../../static/actionImg/thumbsup.png",
				zan_ico_over: "../../static/actionImg/thumbsup_over.png",
				zan_show:false,
				zan_num: "",
				pinlu_num: "",
				share_num: "",
				data:Object
			}
		},
		props: {
			receiveObj: Object
		},
		mounted() {
			this.info_id = this.receiveObj.infoId;
			this.userName = this.receiveObj.name;
			this.time = this.receiveObj.time;
			this.content = this.receiveObj.content;
			this.headerImg = this.receiveObj.headerImg;
			this.src1 = this.receiveObj.imgArr[0];
			this.src2 = this.receiveObj.imgArr[1];
			this.src3 = this.receiveObj.imgArr[2];
			this.zan_num = this.receiveObj.zanNum;
			this.pinlu_num = this.receiveObj.pinlunNum;
			this.share_num = this.receiveObj.shareNum;
			this.data = this.receiveObj
		},
		methods: {
			goActionItem_Details() {
				console.log(this.data)
				uni.navigateTo({
					// url:"../center/actionItem_Details?info_id=" + this.info_id,
					url:"../center/actionItem_Details?data=" + encodeURIComponent(JSON.stringify(this.data))
				})
			},
			clcik_thumbsup() {
				this.zan_show = !this.zan_show;
				if(this.zan_show){
					this.zan_num = Number(this.zan_num) + 1;
				}else{
					this.zan_num = Number(this.zan_num) - 1;
				}
			},
			clcik_comment() {
				uni.navigateTo({
					url:"../center/actionItem_Details?info_id=" + this.info_id
				})
			},
			clcik_share() {
				uni.showToast({
					icon: "none",
					title: "分享成功!"
				})
				// uni.showModal({
				// 	title: "分享成功!",
				// 	showCancel: false
				// })
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

<!-- 原型代码 -->
<!-- <view v-for="(item, index) in actionlist" :key="index" >
	<view style="flex-direction: column; padding: 20upx 0; border-bottom: 1upx solid #AAAAAA;">
		<view style="flex-direction: row;" @click="goActionItem_Details">
			<image :src="item.headerImg"  style="width: 100upx;height: 100upx;border-radius: 50upx;"></image>
			<view style="flex-direction: column; margin-left: 20upx;">
				<text >{{item.name}}</text>
				<text >{{item.time}}</text>
			</view>
		</view>
		<view style="flex-direction: column;padding: 20upx 0;" @click="goActionItem_Details">
			<text style="max-height: 150upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;" >
				{{item.content}}
			</text>
			<view style="flex-direction: row;width: 100%;height: 200upx;padding-top: 10upx;">
				<image :src="item.imgArr[0]" mode="aspectFill"  style="width: 33%; height: 200upx; padding: 5upx;"></image>
				<image :src="item.imgArr[1]" mode="aspectFill"  style="width: 33%; height: 200upx; padding: 5upx;"></image>
				<image :src="item.imgArr[2]" mode="aspectFill"  style="width: 33%; height: 200upx; padding: 5upx;"></image>
			</view>
		</view>
		<view style="flex-direction: row; width: 100%;height: 50upx;">
			<view style="flex-direction: row;width: 33%; height: 50upx; line-height: 50upx;" @click="clcik_thumbsup(item.zanNum)" >
				<image :src="zan_show?zan_ico_over:zan_ico" style="width: 45upx; height: 45upx; margin:0 5% 0 25%"></image>
				<text :class="{ red_text: zan_show}" >{{item.zanNum}}</text>	
			</view>
			<view style="flex-direction: row;width: 33%; height: 50upx; line-height: 50upx;"  @click="clcik_comment">
				<image src="../../static/actionImg/comment.png" style="width: 45upx; height: 45upx; margin:0 5% 0 25%"></image>
				<text >{{item.pinlunNum}}</text>	
			</view>
			<view style="flex-direction: row;width: 33%; height: 50upx; line-height: 50upx;"  @click="clcik_share">
				<image src="../../static/actionImg/share.png" style="width: 45upx; height: 45upx; margin:0 5% 0 25%"></image>
				<text >{{item.shareNum}}</text>	
			</view>
		</view>
	</view>
</view> -->
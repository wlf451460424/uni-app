<template>
	<view class="content">
		<view :id="info_id" @click="details()" style="flex-direction:column;width: 100%;height: 400upx; border-radius: 10upx;border: 1px solid #AAAAAA;padding: 0 20upx;margin: 10upx 0;" >
			<view style="flex-direction: row;width: 100%;height: 80upx;">
				<text style="width: 85%;height: 80upx;line-height: 80upx; font-size: 36upx;font-weight: bold;
					max-height: 80upx;display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;" >
					{{itemlist.title}}
				</text>
				<view style="width: 15%;height: 80upx;padding-top: 15upx;display: inline !important; text-align:end;">
					<image :src="itemlist.typeImg" style="width: 50upx;height: 50upx;border-radius: 25upx;"></image>
				</view>
			</view>
			<view style="flex-direction: row; width:100%;height: 190upx;padding: 20upx 0;">
				<view style="width: 60%;">
					<text style="max-height: 150upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;" >
						{{itemlist.content}}
					</text>
				</view>
				<view style="width: 40%;display: inline !important; text-align:end;">
					<image src="../../static/actionImg/05.jpg" style="width:180upx; height:135upx;"></image>
				</view>
			</view>
			<view style="flex-direction: row;width:100%;height: 100upx;margin-top: 10upx;">
				<view style="width: 60%;">
					<image :src="itemlist.headerImg"  style="width: 100upx;height: 100upx;border-radius: 50upx;"></image>
					<view style="flex-direction: column; margin-left: 20upx;">
						<text >{{itemlist.name}}</text>
						<text >{{itemlist.time}}</text>
					</view>
				</view>
				
				<view style="flex-direction: column;width: 40%;">
					<view style="width: 100%;height: 50%;"></view>
					<view style="width: 100%;height: 50%;display: inline !important; text-align:end;">
						<text >{{itemlist.zanNum}}浏览   </text>
						<text style="margin-left: 20upx;">{{itemlist.shareNum}}问答</text>
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
				index:0,
				info_id:"",
				itemlist: [],
				data:Object
			}
		},
		props: {
			receiveObj: Object
		},
		mounted() {
			this.info_id = this.receiveObj.infoId;
			this.itemlist = this.receiveObj.list;
			this.data = this.receiveObj.list;
		},
		methods: {
			details() {
				console.log(this.data)
				uni.navigateTo({
					// url:"../center/actionItem_Details?info_id=" + this.info_id,
					url:"../center/actionItem_Details?data=" + encodeURIComponent(JSON.stringify(this.data))
				})
			},
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
	    background: #FFFFFF;
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
		background: #FFFFFF;
		/* font-size: 14px; */
	}
</style>

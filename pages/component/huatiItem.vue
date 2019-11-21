<template>
	<view class="content">
		<view :id="info_id" @click="details()" style="flex-direction:row;width: 100%;height: 200upx; border-radius: 10upx;border: 1px solid #AAAAAA;padding: 0 10upx;margin: 10upx 0;" >
			<view style="flex-direction: column; width: 70%;height: 100%;">
				<text style="height: 80upx;line-height: 80upx; font-size: 36upx;font-weight: bold;
					max-height: 80upx;display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;" >
					{{itemlist.title}}
				</text>
				<text style="max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;color: #AAAAAA;" >
					{{itemlist.content}}
				</text>
				<view style="flex-direction: row;width: 100%;height: 60upx;line-height: 60upx;align-items:center;">
					<text style="color: #EC706B;">{{itemlist.zanNum}}人已参与</text>
				</view>
			</view>
			<view style="width: 30%;height: 100%;justify-content:center;align-items:center;">
				<image src="../../static/actionImg/04.jpg" style="width:100%; height:140upx;"></image>
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

<!-- 
<view v-for="item in 10" :key="item" @click="details()" style="flex-direction:row;width: 100%;height: 180upx; border-radius: 10upx;border: 1px solid #AAAAAA;padding: 0 10upx;margin: 10upx 0;" >
	<view style="flex-direction: column; width: 70%;height: 100%;">
		<view style="width: 100%;height: 120upx;line-height: 60upx;">
			<text>9岁的俄罗斯男孩为宠物作画</text>
		</view>
		<view style="flex-direction: row;width: 100%;height: 60upx;line-height: 60upx;">
			<image src="../../static/header_show.png" style="width: 50upx;height: 50upx;border-radius: 25upx;"></image>
			<view style="width: 40%;">老王</view>
			<view style="width: 30%;">浏览 110</view>
			<view style="width: 20%;">赞 888</view>
		</view>
	</view>
	<view style="width: 30%;height: 100%;justify-content:center;align-items:center;">
		<image src="../../static/actionImg/01.jpg" style="width:100%; height:140upx;"></image>
	</view>
</view> -->
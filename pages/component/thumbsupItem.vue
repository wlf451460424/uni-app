<template>
	<view class="content">
			<view style="flex-direction: row; width: 100%;height: 140upx; border: 1px solid #AAAAAA; padding: 0 20upx;margin: 5upx 5upx;" >
				<view style="flex-direction: row;width: 70%;height: 140upx;align-items:center;">
					<image :src="img_src"  style="width: 100upx;height: 100upx;border-radius: 50upx;"></image>
					<view style="flex-direction: column; margin-left: 20upx;">
						<text>{{name}}</text>
						<text>{{introduction}}</text>
					</view>
				</view>
				<view style="width: 30%; height: 140upx;display:flex;justify-content:flex-end;align-items:center;">
					<view @click="thumbsup" :class="{active:isShow}" style="width: 180upx;height: 70upx; line-height: 70upx; border-radius: 10upx;
					color: #4CBDF3 ;border: 1px solid #4CBDF3;">
						<text style="width: 200upx;line-height: 60upx;text-align: center;">{{care_text}}</text>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default{
		data (){
			return {
				isShow:false,
				care_text: "关  注",
				itemlist:[],
				img_src:"../../static/header_default.png",
				name:'',
				introduction:''
				
			}
		},
		props: {
			receiveObj: Object
		},
		mounted() {
			this.itemlist = this.receiveObj.list;
			this.name = this.itemlist.name;
			this.introduction = this.itemlist.introduction;
			this.img_src = this.itemlist.img_src;
		},
		methods:{
			thumbsup(){
				this.isShow = !this.isShow;
				if(this.isShow){
					this.care_text = "已关注"
					uni.showToast({
						icon: "none",
						title: "关注成功"
					})
				}else{
					this.care_text = "关  注"
					uni.showToast({
						icon: "none",
						title: "取消关注"
					})
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
	    background-color: #FFFFFF;
	}
	template {
	    display: flex;
	    flex: 1;
	}
	.content {
		width: 100%;
		flex-direction: column;
		color: #555555;
		/* font-size: 14px; */
	}
	.active{
		border: 1px solid #AAAAAA !important;
		color: #AAAAAA !important;
	}
</style>

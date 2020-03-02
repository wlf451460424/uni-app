<template>
	<view @click="gotoPet_Archives" style="flex-direction: row;width: 240upx;	height: 120upx;line-height: 120upx;background: #4CBDF3;border-radius: 10upx;margin-right:20upx;display: inline-block;vertical-align: middle;">
		<!-- <image src="../../static/actionImg/03.jpg" style="width: 80upx;height: 80upx;border-radius: 80upx;margin: 10upx;"></image>
		<text>小可爱</text> -->
		<view style="display: flex;width: 100%;height: 100%;">
			<image src="../../static/actionImg/03.jpg" style="width: 70upx; height: 70upx;border-radius: 70upx;margin: 30upx 20upx;"></image>
			<text style="line-height:120upx;font-size: 20upx;">小可爱</text>	
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props: {
		},
		methods: {
			gotoPet_Archives(){
				uni.navigateTo({
					url:"../center/pet_Archives"
				})
			}
		}
	}
</script>

<style>
	.active{
		background: #AAAAAA !important;
	}
</style>
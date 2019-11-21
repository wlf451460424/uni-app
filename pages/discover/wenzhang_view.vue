<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;">
			<view style="flex-direction: row; width: 100%; margin-bottom: 10upx;background: #FFFFFF;">
				<view v-for="(item,index) in cardBars" :key="index" @click="click_cardBars(item)"
					style="flex-direction: column;width: 20%; height: 160upx;display: inline-block;padding-top: 10upx;">
					<view style="width:100%; height: 100upx;display:flex;justify-content:center;align-items:center;">
						<image src="../../static/actionImg/04.jpg" style="width: 80upx; height: 80upx;border-radius: 40upx;"></image>
					</view>
					<view style="width:100%; height: 60upx;">
						<text style="width:100%; height: 60upx;text-align: center;line-height: 60upx;">{{item.title}}</text>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 60upx;line-height:60upx;font-size: 36upx;padding-left: 20upx;background: #FFFFFF;">热门分类</view>
			<view style="flex-direction: row; width: 100%; padding-bottom: 10upx;margin-bottom: 10upx;background: #FFFFFF;">
				<view v-for="(item,index) in typeBars" :key="index" @click="click_typeBars(item)"
					style="flex-direction: column;width: 25%; height: 120upx;display: inline-block;padding-top: 10upx;">
					<view style="width:100%; height: 100upx;display:flex;justify-content:center;align-items:center;">
						<view style="width: 90%; height: 100upx;line-height: 100upx;text-align: center;border-radius: 10upx ;background: #e0e4a3;">
							<text style="width:100%; height: 100upx;text-align: center;line-height: 100upx;">{{item.title}}</text>
						</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 60upx;line-height:60upx;font-size: 36upx;padding-left: 20upx;background: #FFFFFF;">热门推荐</view>
			<view style="flex-direction: column; width: 100%;background: #FFFFFF;padding: 10upx;">
				<wenzhang-item v-for="(item,index) in actionlist" :key="index"
					 :receive-obj="{list:item}"></wenzhang-item>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	import wenzhangItem from '../component/wenzhangItem.vue'
	export default{
		data() {
			return{
				actionlist: [],
				cardBars: [
					{title: "萌宠百科", id: 0},
					{title: "养宠心得", id: 1},
					{title: "周边测评", id: 2},
					{title: "疾病科普", id: 3},
					{title: "训练指导", id: 4}
				],
				typeBars: [
					{title: "疾病", id: 0},
					{title: "养护", id: 1},
					{title: "医疗", id: 2},
					{title: "美容", id: 3}
				],
			}
		},
		components: {
			wenzhangItem
		},
		onLoad() {
			this.actionlist = json.actionlist;
		},
		methods: {
			click_cardBars(e){
				uni.showToast({
					icon: "none",
					title: "进入模块：" + e.title
				})
			},
			click_typeBars(e){
				console.log(e)
				uni.showToast({
					icon: "none",
					title: "进入模块：" + e.title
				})
			},
			details(e){
				console.log()
				uni.showToast({
					icon: "none",
					title: "查看详情"
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
		background-color: #EFEFEF;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>

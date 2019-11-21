<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;background: #FFFFFF;padding: 10upx;">
			<view style="flex-direction: row; width: 100%; padding-bottom: 10upx;margin-bottom: 10upx;">
				<view v-for="(item,index) in typeBars" :key="index" @click="click_typeBars(item)"
					style="flex-direction: column;width: 25%; height: 100upx;display: inline-block;padding-top: 10upx;">
					<view style="width:100%; height: 80upx;display:flex;justify-content:center;align-items:center;">
						<view style="width: 90%; height: 80upx;line-height: 80upx;text-align: center;border-radius: 10upx ;border:1px solid #AAAAAA;">
							<text style="width:100%; height: 80upx;text-align: center;line-height: 80upx;">{{item.title}}</text>
						</view>
					</view>
				</view>
			</view>
			<view style="flex-direction: column; width: 100%;">
				<huati-item v-for="(item,index) in actionlist" :key="index"
					 :receive-obj="{list:item}"></huati-item>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	import huatiItem from '../component/huatiItem.vue'
	export default{
		data() {
			return{
				actionlist: [],
				typeBars: [
					{title: "全部", id: 0},
					{title: "猫", id: 1},
					{title: "狗", id: 2}
				],
			}
		},
		components: {
			huatiItem
		},
		onLoad() {
			this.actionlist = json.actionlist;
		},
		methods: {
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
	}
	
	template {
	    display: flex;
	    flex: 1;
	}
	 .content{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>

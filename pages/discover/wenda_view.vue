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
				<wenda-item v-for="(item,index) in actionlist" :key="index"
					 :receive-obj="{list:item}"></wenda-item>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	import wendaItem from '../component/wendaItem.vue'
	export default{
		data() {
			return{
				actionlist: [],
				typeBars: [
					{title: "疫苗", id: 0},
					{title: "绝育", id: 1},
					{title: "换粮", id: 2},
					{title: "洗澡", id: 2}
				],
			}
		},
		components: {
			wendaItem
		},
		onLoad() {
			this.actionlist = json.actionlist;
		},
		methods: {
			click_typeBars(e){
				console.log(e)
				uni.showToast({
					icon: "none",
					title: "查询：" + e.title
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

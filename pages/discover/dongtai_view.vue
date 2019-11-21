<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;">
			<view style="flex-direction: column; width: 100%;background: #FFFFFF;padding: 10upx;">
				<action-item v-for="(item,index) in actionlist" :key="index" style="background: #FFFFFF;"
						:receive-obj="{ headerImg:item.headerImg ,name: item.name,time:item.time,content:item.content,imgArr:item.imgArr,zanNum:item.zanNum,pinlunNum:item.pinlunNum,shareNum:item.shareNum,infoId:item.id}"></action-item>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	import actionItem from '../component/actionItem.vue'
	export default{
		data() {
			return{
				actionlist: [],
			}
		},
		components: {
			actionItem
		},
		onLoad() {
			this.actionlist = json.actionlist;
			console.log(this.actionlist)
		},
		methods: {
			
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

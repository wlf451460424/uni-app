<template>
	<view class="content">
		<view style="flex-direction: row;width: 100%;margin-bottom: 10upx; padding:40upx; background-color: #CCCCCC;">
			<view style="flex-direction: column;color: #888888;width: 70%; height: 180upx;">
				<view>
					<text style="font-size: 16px;color: #000000;">美琪琪</text>
					<image src="../../static/center-ico/bianji.png" style="width: 60upx;height: 60upx;margin-left: 40upx;" @click="edit_PetArchives"></image>
				</view>
				<view>
					<text style="margin-right: 20upx;">品种</text>
					<text style="margin-right: 20upx;">性别</text>
					<text style="margin-right: 20upx;">年龄</text>
				</view>
				<view>
					<text>生日：</text>
					<text>2020-02-02</text>
				</view>
			</view>
			<view style="width: 30%;height: 180upx;align-items: center;text-align: center;justify-content: flex-end;">
				<image src="../../static/actionImg/03.jpg" style="width: 120upx;height: 120upx; border-radius: 120upx;" @click="pet_PetDetails"></image>
			</view>
		</view>
		<view style="flex-direction: column; width: 100%;height: 100%;padding: 20upx 40upx;">
			<pet-archives-time-item v-for="(item,index) in petTimelist" :key="index"
				 :receive-obj="{list:item}"></pet-archives-time-item>
			
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	import petArchivesTimeItem from '../component/petArchivesTimeItem.vue';
	export default {
		components: {
			petArchivesTimeItem
		},
		data() {
			return {
				petTimelist: [],
			}
		},
		async onLoad() {
			this.loadinfo();
		},
		methods: {
			loadinfo(){
				this.petTimelist = json.petTimelist;
			},
			edit_PetArchives(){
				uni.navigateTo({
					url:"edit_pet_Archives"
				})
			},
			pet_PetDetails(){
				uni.navigateTo({
					url:"pet_Details"
				})
			}
		},
		onNavigationBarButtonTap(e) {
			uni.showToast({
			    title: '跳转提醒',
				icon: 'none',
			    duration: 1000
			});
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
.content {
	flex-direction: column;
	width: 100%;
	color: #555555;
	font-size: 14px;
}
.from-radio{
	transform: scale(0.7);
	color:#09BB07
}
</style>

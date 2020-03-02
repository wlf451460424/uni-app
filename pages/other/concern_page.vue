<template>
	<view class="content">
		<thumbsup-item v-for="item in list" :key="item" :receive-obj="{list:item}"></thumbsup-item>
	</view>
</template>

<script>
	import json from '@/json'
	import thumbsupItem from "../component/thumbsupItem.vue"
	export default{
		data (){
			return {
				list:[]
			}
		},
		components:{
			thumbsupItem
		},
		mounted() {
			this.list = json.carelist;
		},
		methods:{
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
</style>

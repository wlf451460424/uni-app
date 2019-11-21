<template>
	<view class="content">
		<view style="flex-direction: row; width: 100%; padding: 0 10upx;" >
			<view v-for="(item,key) in itemlist" :key="key" @click="goArticleItem_Details(item)" style="flex-direction: column;width: 50%; height: 550upx;padding: 20upx 10upx;">
				<image :src="item.img_src" mode="aspectFill" style="width: 100%; height: 500upx; border-radius: 15upx; "></image>
				<text class="card-num-view card-list2-num-view">{{item.img_num}}P</text>
				<view style="flex-direction: column; ">
					<text style="max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
						{{item.title}}
					</text>
					<view style="flex-direction: row; width: 90%;padding-top: 20upx;font-size: 26upx;">
						<image style="width:60upx; height: 60upx; border-radius: 30upx; margin-right: 20upx;"
						 src="../../static/header_show.png"></image>
						<text style="width:50%;max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6; overflow: hidden;">
							{{item.name}}
						</text>
						<span style="width:30%; text-align: right;" >赞<text>{{item.star}}</text></span>
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
			headerShow: "",
			itemlist: []
		}
	},
	props: {
		receiveObj: Object
	},
	mounted() {
		this.headerShow = this.receiveObj.headerShow;
		this.itemlist = this.receiveObj.list
	},
	computed: {
	},
	methods: {
		goArticleItem_Details(e) {
			uni.navigateTo({
				url:"../center/articleItem_Details?imgArr=" + e.imgArr
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
	    background-color: #FFFFFF;
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
		/* font-size: 14px; */
	}
	.card-num-view {
		background-color: #262929;
	    line-height: 1;
	    display: inline-block;
		padding: 3px 6px;
	    color: #FFFFFF;
	    /* font-size: 12px; */
	    text-align: center;
		justify-content: center;
	    align-items: center;
		border-radius: 15px;
		position: absolute;
		/* top: 20upx;
		right: 20upx; */
	}
	.card-list2-num-view {
		transform: scale(0.8);
	    transform-origin: right;
	}
</style>

<!-- 原型代码 -->
<!-- <view v-for="(list, index) in articlelist" :key="index" >
	<view style="flex-direction: row; width: 100%; padding: 0 10upx;" >
		<view v-for="(item,key) in list" @click="goDetail(item)" :key="key" style="flex-direction: column;width: 50%; height: 550upx;padding: 20upx 10upx;">
			<image :src="item.img_src" mode="aspectFill" style="width: 100%; height: 500upx; border-radius: 15upx; "></image>
			<view style="flex-direction: column; ">
				<text style="max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
					{{item.title}}
				</text>
				<view style="flex-direction: row; width: 90%;padding-top: 10upx;">
					<text style="width: 60%;max-height: 60upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6; overflow: hidden;">
						隔壁老王隔壁老王隔壁老王隔壁老王隔壁老王隔壁老王
					</text>
					<span style="width: 40%; text-align: right;" >赞<text>888</text></span>
				</view>
			</view>
		</view>
	</view>
</view> -->
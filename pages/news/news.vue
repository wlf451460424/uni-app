<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index"
			 @tap="openinfoDetail" :data-newsid="item.post_id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			};
		},
		methods:{
			openinfoDetail(e){
				var newsid = e.currentTarget.dataset.newsid;
				// console.log(newsid);
				uni.navigateTo({
					url: 'infoDetail?newsid=' + newsid
				});
			}
		},
		onLoad:function() {
			uni.showLoading({
				title:"加载中…"
			})
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					uni.hideLoading();
					// console.log(res)
					this.news = res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.4em;}
	.uni-media-list-text-bottom{line-height: 1.4em; padding-top: 10rpx;}
	.row-button{width: 50%;height: 50rpx;font-size: 34rpx; padding: 0 40rpx;}
</style>

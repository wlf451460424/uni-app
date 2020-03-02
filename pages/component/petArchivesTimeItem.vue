<template>
	<view class="content">
		<view style="flex-direction: row;width: 100%;height: 200upx;margin: 20upx 0;">
			<!-- 时间轴 -->
			<view style="flex-direction: column;width: 20%;">
				<text>{{itemlist.date}}</text>
				<text>{{itemlist.address}}</text>
			</view>
			<!-- 内容 -->
			<view style="width: 80%;">
				<!-- 4 图片 -->
				<view style="flex-direction: row;width: 35%;padding: 4upx;" v-bind:class="{ hideStyle: img_4 }">
					<view style="flex-direction: column;width: 50%;height: 100%;">
						<image :src="itemlist.imgArr[0]" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx;padding: 4upx;"></image>
						<image :src="itemlist.imgArr[1]" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx; padding: 4upx;"></image>
					</view>
					<view style="flex-direction: column;width: 50%;height: 100%;">
						<image :src="itemlist.imgArr[2]" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx;padding: 4upx;"></image>
						<image :src="itemlist.imgArr[3]" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx; padding: 4upx;"></image>
					</view>
				</view>
				<!-- 3 图片 -->
				<view style="flex-direction: row;width: 35%;padding: 4upx;" v-bind:class="{ hideStyle: img_3 }">
					<view style="flex-direction: column;width: 50%;height: 100%;">
						<image :src="itemlist.imgArr[0]" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
					</view>
					<view style="flex-direction: column;width: 50%;height: 100%;">
						<image :src="itemlist.imgArr[1]" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx;padding: 4upx;"></image>
						<image :src="itemlist.imgArr[2]" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx; padding: 4upx;"></image>
					</view>
				</view>
				<!-- 2 图片 -->
				<view style="flex-direction: row;width: 35%;padding: 4upx;" v-bind:class="{ hideStyle: img_2 }">
					<view style="flex-direction: column;width: 50%;height: 100%;">
						<image :src="itemlist.imgArr[0]" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
					</view>
					<view style="flex-direction: column;width: 50%;height: 100%;">
						<image :src="itemlist.imgArr[1]" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
					</view>
				</view>
				<!-- 1 图片 -->
				<view style="flex-direction: row;width: 35%;padding: 4upx;" v-bind:class="{ hideStyle: img_1 }">
					<view style="flex-direction: column;width: 100%;height: 100%;">
						<image :src="itemlist.imgArr[0]" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
					</view>
				</view>
				<!-- 文字 -->
				<view style="width: 65%;padding-left: 10upx;" v-bind:class="{ width_control: content_width }">
					<text style="max-height: 200upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;" >
						{{itemlist.content}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				itemlist: [],
				data:Object,
				content_width:false,
				img_4:true,
				img_3:true,
				img_2:true,
				img_1:true,
			}
		},
		props: {
			receiveObj: Object
		},
		mounted() {
			this.itemlist = this.receiveObj.list;
			this.data = this.receiveObj.list;
			if(this.itemlist.img_num == 4){
				this.content_width = false,
				this.img_4 = false
			}
			if(this.itemlist.img_num == 3){
				this.content_width = false,
				this.img_3 = false
			}
			if(this.itemlist.img_num == 2){
				this.content_width = false,
				this.img_2 = false
			}
			if(this.itemlist.img_num == 1){
				this.content_width = false,
				this.img_1 = false
			}
			if(this.itemlist.img_num == 0){
				this.content_width = true
			}
		},
		methods: {
			// details() {
			// 	console.log(this.data)
			// 	uni.navigateTo({
			// 		// url:"../center/actionItem_Details?info_id=" + this.info_id,
			// 		url:"../center/actionItem_Details?data=" + encodeURIComponent(JSON.stringify(this.data))
			// 	})
			// },
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
	.hideStyle{
		display: none;
	}
	.width_control{
		width: 100% !important;
	}
</style>

	<!-- <view style="flex-direction: row;width: 100%;height: 200upx;margin-top: 40upx;">
		<view style="flex-direction: column;width: 20%;">
			<text>14日02月</text>
			<text>西安</text>
		</view>
		<view style="width: 80%;">
			<view style="flex-direction: row;width: 35%;padding: 4upx;">
				<view style="flex-direction: column;width: 50%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx;padding: 4upx;"></image>
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx; padding: 4upx;"></image>
				</view>
				<view style="flex-direction: column;width: 50%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx;padding: 4upx;"></image>
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx; padding: 4upx;"></image>
				</view>
			</view>
			<view style="width: 65%;padding-left: 10upx;">
				<text style="max-height: 200upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;" >
					评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。
				</text>
			</view>
		</view>
	</view>
	
	<view style="flex-direction: row;width: 100%;height: 200upx;margin-top: 40upx;">
		<view style="flex-direction: column;width: 20%;">
			<text>14日02月</text>
			<text>西安</text>
		</view>
		<view style="width: 80%;">
			<view style="flex-direction: row;width: 35%;padding: 4upx;">
				<view style="flex-direction: column;width: 50%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
				</view>
				<view style="flex-direction: column;width: 50%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx;padding: 4upx;"></image>
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 50%; border-radius: 20upx; padding: 4upx;"></image>
				</view>
			</view>
			<view style="width: 65%;padding-left: 10upx;">
				<text style="max-height: 200upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;" >
					评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。
				</text>
			</view>
		</view>
	</view>
	
	<view style="flex-direction: row;width: 100%;height: 200upx;margin-top: 40upx;">
		<view style="flex-direction: column;width: 20%;">
			<text>14日02月</text>
			<text>西安</text>
		</view>
		<view style="width: 80%;">
			<view style="flex-direction: row;width: 35%;padding: 4upx;">
				<view style="flex-direction: column;width: 50%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
				</view>
				<view style="flex-direction: column;width: 50%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
				</view>
			</view>
			<view style="width: 65%;padding-left: 10upx;">
				<text style="max-height: 200upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;" >
					评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。
				</text>
			</view>
		</view>
	</view>
	
	<view style="flex-direction: row;width: 100%;height: 200upx;margin-top: 40upx;">
		<view style="flex-direction: column;width: 20%;">
			<text>14日02月</text>
			<text>西安</text>
		</view>
		<view style="width: 80%;">
			<view style="flex-direction: row;width: 35%;padding: 4upx;">
				<view style="flex-direction: column;width: 100%;height: 100%;">
					<image src="../../static/articleImg/01.jpg" mode="aspectFill"  style="width: 100%; height: 100%; border-radius: 20upx;padding: 4upx;"></image>
				</view>
			</view>
			<view style="width: 65%;padding-left: 10upx;">
				<text style="max-height: 200upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;" >
					评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。
				</text>
			</view>
		</view>
	</view>
	
	<view style="flex-direction: row;width: 100%;height: 200upx;margin-top: 40upx;">
		<view style="flex-direction: column;width: 20%;">
			<text>14日02月</text>
			<text>西安</text>
		</view>
		<view style="width: 80%;">
			<view style="width: 100%;padding-left: 10upx;">
				<text style="max-height: 200upx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;" >
					评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。
				</text>
			</view>
		</view>
	</view> -->
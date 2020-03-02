<template>
	<view class="content">
		<!-- <image src="../../static/actionImg/03.jpg" style="width: 100%;max-height: 300upx;"></image> -->
		<view style="flex-direction: column;background-color:#EFEFEF;margin: 20upx;border-radius: 10upx;">
			<view style="width: 100%;height: 60upx;line-height: 60upx;">
				<text style="padding: 20upx; font-size: 16px;font-weight: bold;">周期记录</text>
				<text class="list-text_right" style="padding: 10upx 30upx 0 0; font-weight: bold;">添加</text>
			</view>
			<view class="center-list" style="width: 100%;background-color:#EFEFEF;">	
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">洗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;澡</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="birthday_uniCalendar">{{birthdayTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="birthday_uniCalendar">
				</view>
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="gohome_uniCalendar">{{gohomeTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">驱虫(外)</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="gohome_uniCalendar">{{gohomeTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">驱虫(内)</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="gohome_uniCalendar">{{gohomeTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="gohome_uniCalendar">{{gohomeTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
			</view>
		</view>
		<view style="flex-direction: column;background-color:#EFEFEF;margin-top: 20upx;margin: 20upx;border-radius: 10upx;">
			<view style="width: 100%;height: 60upx;line-height: 60upx;">
				<text style="padding: 20upx; font-size: 16px;font-weight: bold;">健康记录</text>
				<text class="list-text_right" style="padding: 10upx 30upx 0 0; font-weight: bold;">添加</text>
			</view>
			<view class="center-list" style="width: 100%;background-color:#EFEFEF;">	
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">疫苗(第一针)</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="birthday_uniCalendar">{{birthdayTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="birthday_uniCalendar">
				</view>
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">绝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;育</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="gohome_uniCalendar">{{gohomeTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
			</view>
		</view>
		<view style="flex-direction: column;background-color:#EFEFEF;margin-top: 20upx;margin: 20upx;border-radius: 10upx;">
			<view style="width: 100%;height: 60upx;line-height: 60upx;">
				<text style="padding: 20upx; font-size: 16px;font-weight: bold;">体检记录</text>
				<text class="list-text_right" style="padding: 10upx 30upx 0 0; font-weight: bold;">添加</text>
			</view>
			<view class="center-list" style="width: 100%;background-color:#EFEFEF;">	
				<view class="center-list-item" style="width: 100%">
					<text class="list-text">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检</text>
					<text class="list-text_right" style="color: #888888;margin-right: 40upx;" @click="gohome_uniCalendar">{{gohomeTime}}</text>
					<image class="navigat-arrow" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
			</view>
		</view>
		
		<!-- 生日 -->
		<uni-calendar ref="birthday_calendar" :insert="false" @confirm="birthday_confirm" ></uni-calendar>
		<!-- 到家时间 -->
		<uni-calendar ref="gohome_calendar" :insert="false" @confirm="gohome_confirm" ></uni-calendar>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				index:0,
				array: ['哈士奇', '秋田', '拉布拉多', '博美', '金毛', '吉娃娃', '柴犬'],
				birthdayTime:new Date().toISOString().slice(0, 10),
				gohomeTime: new Date().toISOString().slice(0, 10)
			};
		},
		async onLoad() {
			// date: new Date().toISOString().slice(0, 10),
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			//到家时间
			gohome_uniCalendar(){
				this.$refs.gohome_calendar.open();
			},
			gohome_confirm(e) {
				console.log(e);
				this.gohomeTime = e.fulldate;
			},
			birthday_uniCalendar(){
				this.$refs.birthday_calendar.open();
			},
			birthday_confirm(e) {
				console.log(e);
				this.birthdayTime = e.fulldate;
			},
		},
		onNavigationBarButtonTap(e) {
			uni.showToast({
			    title: '保存成功',
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
	background-color: #FFFFFF;
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
	/* padding: 20upx 20upx; */
}
.from-radio{
	transform: scale(0.7);
	color:#09BB07
}
center-list-item-self{
	width: 100%;
}
</style>

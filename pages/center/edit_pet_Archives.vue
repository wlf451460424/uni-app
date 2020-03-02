<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;">
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<image src="../../static/header_show.png" style="width: 60upx;height: 60upx; border-radius: 60upx;margin-left: auto;"></image>
				</view>
				<view style="width: 20%;justify-content: flex-end;">
					<image style="width: 60upx;height: 60upx;" src="../../static/center-ico/next.png" >
				</view>
			</view>
		</view>
		<view style="flex-direction: column;width: 100%;margin-top: 10upx;">
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<input style="font-size: 12px;color: #888888;" value="" maxlength="18" placeholder="填写宠物昵称" />
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<picker @change="arietiesPickerChange" :value="index" :range="array" >
						<view class="uni-input" style="font-size: 12px;color: #888888;padding: 0;width: 100%;">{{array[index]}}</view>
					</picker>
				</view>
				<view style="width: 20%;justify-content: flex-end;">
					<image style="width: 60upx;height: 60upx;" src="../../static/center-ico/next.png">
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<picker @change="sexPickevrChange" :value="index_sex" :range="array_sex" >
						<view class="uni-input" style="font-size: 12px;color: #888888;padding: 0;">{{array_sex[index_sex]}}</view>
					</picker>
				</view>
				<view style="width: 20%;justify-content: flex-end;">
					<image style="width: 60upx;height: 60upx;" src="../../static/center-ico/next.png" >
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;" @click="birthday_uniCalendar">
					<!-- <text style="color: #888888;margin-right: 40upx;" >{{birthdayTime}}</text> -->
					<input style="font-size: 12px;color: #888888;" :value="birthdayTime" maxlength="18" placeholder="填写宠物生日" />
				</view>
				<view style="width: 20%;justify-content: flex-end;">
					<image style="width: 60upx;height: 60upx;" src="../../static/center-ico/next.png" @click="birthday_uniCalendar">
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<input style="font-size: 12px;color: #888888;" value="" maxlength="18" placeholder="kg" />
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>到家时间：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;" @click="gohome_uniCalendar">
					<!-- <text style="color: #888888;margin-right: 40upx;" >{{birthdayTime}}</text> -->
					<input style="font-size: 12px;color: #888888;" :value="gohomeTime" maxlength="18" placeholder="选择到家时间" />
				</view>
				<view style="width: 20%;justify-content: flex-end;">
					<image style="width: 60upx;height: 60upx;" src="../../static/center-ico/next.png" @click="gohome_uniCalendar">
				</view>
			</view>
		</view>
		<!-- <view class="center-list" style="margin-top: 50upx;">	
			<view class="center-list-item border-bottom">
				<text class="list-text">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</text>
				<radio-group class="list-text_right" name="radio-group">
					<label><radio class="from-radio" color="#4CBDF3" checked="true"></radio>男</label>
					<label><radio class="from-radio" color="#4CBDF3"></radio>女</label>
				</radio-group>
			</view>
		</view> -->
		<view class="center-list" style="margin-top: 10upx;">	
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>携带编号：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<input style="font-size: 12px;color: #888888;" value="" maxlength="18" placeholder="宠物证件号码" />
				</view>
			</view>
		</view>
		<view class="center-list" style="margin-top: 10upx;">	
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;">
					<input style="font-size: 12px;color: #888888;" value="" maxlength="18" placeholder="无" />
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
				array: ['选择宠物品种','哈士奇', '秋田', '拉布拉多', '博美', '金毛', '吉娃娃', '柴犬'],
				index_sex:0,
				array_sex: ['选择宠物性别','GG', 'MM'],
				birthdayTime:'',
				gohomeTime: ''
			};
		},
		async onLoad() {
			// date: new Date().toISOString().slice(0, 10),
		},
		methods: {
			arietiesPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			sexPickevrChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index_sex = e.target.value
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
	background-color: #EFEFEF;
}

template {
	display: flex;
	flex: 1;
}
.content {
	flex-direction: column;
	color: #555555;
	font-size: 14px;
}
.from-radio{
	transform: scale(0.7);
	color:#09BB07
}
list-text-l{
	text-align: left;
	width: 50%;
	padding-top: 40upx;
}
list-text-m{
	text-align: left;
	width: 20%;
}

</style>

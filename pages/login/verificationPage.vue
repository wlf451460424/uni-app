<template>
	<view class="content">
		<view style="width: 100%;height: 80upx;align-items: center;">
			<text style="color: #888888;font-size: 12px;">验证码已发送至：+86</text>
			<text style="padding-left: 20upx;color: #888888;font-size: 12px;">{{phoneNumber}}</text>
		</view>
		<view style="width: 100%;height: 100upx;justify-content: center;">
			<validCode ref="code" :maxlength="6" :isPwd="false" @finish="getCode" ></validCode>
		</view>
		<view style="width: 100%;height: 80upx;align-items: center;justify-content: center;">
			<text style="color: #FF0000;font-size: 12px;">{{nums}}</text>
			<text style="color: #888888;font-size: 12px;">秒后重新获取</text>
		</view>
		<view style="margin-top: 10upx;">
			<button @click="confirmClick" type="primary" style="width: 100%;font-size: 16px; background-color: #4CBDF3;">确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认</button>
		</view>
	</view>
</template>

<script>
	import validCode from '../../components/validCode.vue'
	export default {
		components:{
			validCode
		},
		data() {
			return {
				phoneNumber:"",
				verification:"",
				nums:'',
			}
		},
		onLoad(e) {
			this.phoneNumber = JSON.parse(decodeURIComponent(e.phoneNumber));
			
			var second = 60;
			this.timer = setInterval(() => {
				if (second < 1) {
					second = 0;
					clearInterval()
				}
				second = second - 1;
				this.nums = second;
				console.log(second)
			}, 1000);
		},
		methods: {
			//获取code码
			getCode(val) {
				console.log(val);
				this.verification = val
			},
			// 清空验证码
			clearCode(){
				 this.$refs.code.clear();
			},
			confirmClick(){
				// 1.发送验证码去验证正确与否   this.verification
				// 2.点击确认跳转页面  清空验证码  
				
				uni.showLoading({
				    // title: '登录中……'
				});
				setTimeout(function () {
				    uni.hideLoading();
					uni.navigateTo({
						url:"setPassword"
					})
				}, 2000);
				
				// this.$refs.code.clear();// 清空验证码
				
			},
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
	/* background-color: #EFEFEF; */
}

template {
	display: flex;
	flex: 1;
}
.content {
	flex-direction: column;
	color: #000000;
	font-size: 14px;
	width: 100%;
	padding: 40upx;
}	

</style>

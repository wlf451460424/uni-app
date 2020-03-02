<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;line-height: 100upx;">
			<view style="width: 100%;height: 80upx;align-items: center;margin-bottom: 20upx;background-color: #e4dede;">
				<input @input="onKeyInput_1" type="text" value="" maxlength="32" placeholder="输入密码" style="width: 100%;font-size: 14px;color: #888888;padding-left: 20upx;" />
			</view>
			<view style="width: 100%;height: 80upx;align-items: center;margin-bottom: 20upx;background-color: #e4dede;">
				<input @input="onKeyInput_2" type="text" value="" maxlength="32" placeholder="确认密码" style="width: 100%;font-size: 14px;color: #888888;padding-left: 20upx;" />
			</view>
			
		</view>
		<view style="width: 100%;height: 80upx;align-items: center;">
			<text style="width: 100%;color: #666666;font-size: 12px;">密码长度8~32位，须包含数字,字母，符号至少2种或以上元素</text>
		</view>
		<view style="margin-top: 20upx;">
			<button @click="loginClick" type="primary" style="width: 100%;font-size: 16px; background-color: #4CBDF3;">确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password_1:"",
				password_2:""
			}
		},
		methods: {
			onKeyInput_1: function(event) {  
				this.password_1 = event.target.value  
				console.log(this.password_1)
			},
			onKeyInput_2: function(event) {
			 	this.password_2 = event.target.value  
			 	// console.log(this.password_2)
			},
			loginClick(){
				//1.验证上下是否一致
				if(this.password_1 != this.password_2){
					uni.showToast({
					    title: '两次密码输入不一致',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				//2.验证长度是否符合  8~32
				if(this.password_1.length < 8 || this.password_1.length >32 ){
					uni.showToast({
					    title: '密码长度8~32位',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				//2.验证 规则是否正确
				
				// 字母+数字，字母+特殊字符，数字+特殊字符
				// ^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$
				// 弱：纯数字，纯字母，纯特殊字符
				// ^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$
				
				var patrn = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/
				var value = !patrn.exec(this.password_1)
				if (!value) {
					uni.showToast({
					    title: '密码须包含数字，字母，符号至少两种',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				
				//跳转页面
				uni.switchTab({
					url:"../center/center"
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

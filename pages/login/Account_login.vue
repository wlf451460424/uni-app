<template>
	<view class="content">
		<view style="flex-direction: column;width: 100%;line-height: 100upx;">
			<view style="width: 100%;height: 80upx;align-items: center;margin-bottom: 20upx;background-color: #e4dede;">
				<input @input="onKeyInput_account" type="text" value="" maxlength="999" placeholder="请输入手机号或邮箱" style="width: 100%;font-size: 14px;color: #888888;padding-left: 20upx;" />
			</view>
			<view style="width: 100%;height: 80upx;align-items: center;margin-bottom: 20upx;background-color: #e4dede;">
				<input @input="onKeyInput_password" type="text" value="" maxlength="32" placeholder="请输入密码" style="width: 100%;font-size: 14px;color: #888888;padding-left: 20upx;" />
			</view>
			
		</view>
		<view style="margin-top: 20upx;">
			<button @click="loginClick" type="primary" style="width: 100%;font-size: 16px; background-color: #4CBDF3;">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
		</view>
		<view style="width: 100%;height: 80upx;align-items: center; justify-content: flex-end;">
			<text style="color: #666666;font-size: 12px;" @click="etrievePasswordClick">忘记密码？</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:"",
				password:""
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:"login"
			})
		},
		onBackPress(e) {
			// 这里可以自定义返回逻辑，比如下面跳转其他页面
			uni.switchTab({
				url: '../center/center'
			});
			// return true 表示禁止默认返回
			return true
		}, 
		methods: {
			onKeyInput_account: function(event) {
				this.account = event.target.value  
			},
			onKeyInput_password: function(event) {
				this.password = event.target.value  
			},
			etrievePasswordClick(){
				//跳转页面
				uni.navigateTo({
					url:"etrievePassword"
				})
			},
			loginClick(){
				if(this.account.length == 0){
					uni.showToast({
					    title: '账号不能为空',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				if(this.password.length == 0){
					uni.showToast({
					    title: '密码不能为空',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				
				//1.验证密码格式
				if(this.password.length < 8 || this.password.length > 32){
					uni.showToast({
					    title: '密码格式有误',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				
				//1.验证手机号码
				//验证规则：11位数字，以1开头。
				//2.验证邮箱
				//验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
				//第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
				//第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
				//而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
				var re_1 = /^1\d{10}$/
				var re_2 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				var value_1 = !re_1.exec(this.account)
				var value_2 = !re_2.exec(this.account)
				
				//有没有@  判断是邮箱还是手机号
				if(this.account.indexOf("@") == -1 ){//没有
					if( value_1 ){
						uni.showToast({
						    title: '手机账号格式有误',
							icon: 'none',
						    duration: 1000
						});
						return
					}else{
						// uni.showToast({
						// 	title: '手机号登录',
						// 	icon: 'none',
						// 	duration: 1000
						// });
						//跳转页面
						uni.navigateTo({
							url:"../center/center"
						})
					}
				}else{
					if( value_2 ){
						uni.showToast({
						    title: '邮箱账号格式有误',
							icon: 'none',
						    duration: 1000
						});
						return
					}else{
						// uni.showToast({
						// 	title: '邮箱登录',
						// 	icon: 'none',
						// 	duration: 1000
						// });
						//跳转页面
						uni.navigateTo({
							url:"../center/center"
						})
					}
				}
				
				
				
				
				
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

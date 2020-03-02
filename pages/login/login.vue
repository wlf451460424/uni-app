<template>
	<view class="content">
		<view style="flex-direction: row;width: 100%;height: 80upx;line-height: 80upx;background-color: #e4dede;">
			<view style="width: 25%;height: 100%;align-items: center;">
				<uni-combox style="width: 100%;text-align: center;color: #000000;" :candidates="candidates" placeholder="+86"></uni-combox>
			</view>
			<view style="width: 75%;height: 100%;align-items: center;">
				<input @input="onKeyUserNameInput" type="number" value="" maxlength="11" placeholder="手机号码" οninput="value=value.replace(/[^\d]/g,'')" style="width: 100%;font-size: 14px;color: #888888;padding-left: 40upx;" />
			</view>
		</view>
		<view style="margin-top: 40upx;">
			<button @click="loginClick" type="primary" style="width: 100%;font-size: 16px; background-color: #4CBDF3;">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
		</view>
		<view style="width: 100%;height: 80upx;align-items: center;">
			<text style="width: 100%;color: #888888;font-size: 12px;">未注册手机验证后自动登录</text>
		</view>
		
		<view class="position-bottom">
			<view style="flex-direction: column;width: 100%;height: 260upx;">
				<view style="width: 100%;height: 60upx;justify-content: center;">
					<text>第三方登录</text>
				</view>
				<view style="flex-direction: row;width: 100%;height: 140upx;justify-content: center;padding: 0 40upx;">
					<view style="width: 33.3%;height: 100%;align-items: center;justify-content: center;">
						<image @click="Third_login('qq')" style="width: 60upx;height: 60upx;" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png"></image>
					</view>
					<view style="width: 33.3%;height: 100%;align-items: center;justify-content: center;">
						<image @click="Third_login('weixin')" style="width: 60upx;height: 60upx;" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png"></image>
					</view>
					<view style="width: 33.3%;height: 100%;align-items: center;justify-content: center;">
						<image @click="Third_login('sina')" style="width: 60upx;height: 60upx;" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png"></image>
					</view>
				</view>
				<view style="flex-direction: row;width: 100%;height: 60upx;justify-content: center;">
					<text style="color: #888888;">注册即代表你同意</text>
					<text style="color: #ea6313;">《宠物帮协议》</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniCombox from "@/components/uni-combox-component/uni-combox/uni-combox"
	import uniSection from '@/components/uni-combox-component/uni-section/uni-section.vue'
	export default {
		components: {
			uniCombox
		},
		data() {
			return {
				candidates:["+86","+886","+852","+853"],
				phone:""
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:"Account_login"
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
			onKeyUserNameInput: function(event) {  
				this.phone = event.target.value  
			}, 
			loginClick(){
				console.log(this.phone)
				if(this.phone.length == 0){
					uni.showToast({
					    title: '请输入手机号码',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				var re_1 = /^1\d{10}$/
				if( !re_1.exec(this.phone) ){
					uni.showToast({
					    title: '手机格式有误',
						icon: 'none',
					    duration: 1000
					});
					return
				}
				
				uni.navigateTo({
					url:"verificationPage?phoneNumber=" + encodeURIComponent(JSON.stringify(this.phone))
				})
			},
			Third_login(type){
				switch (type) {
					case 'qq':
						uni.showToast({
							title: "qq登录",
							icon: 'none',
							duration: 1000
						});
						break
					case 'weixin':
						uni.showToast({
							title: "微信登录",
							icon: 'none',
							duration: 1000
						});
						break
					case 'sina':
						uni.showToast({
							title: "新浪登录",
							icon: 'none',
							duration: 1000
						});
						break
				}
				
				// H5 不支持 uni.login
				// uni.login({
				// 	provider: 'weixin',
				// 	success: function (loginRes) {
				// 		console.log(loginRes.authResult);
				// 		// 获取用户信息
				// 		uni.getUserInfo({
				// 			provider: 'weixin',
				// 			success: function (infoRes) {
				// 				console.log('用户昵称为：' + infoRes.userInfo.nickName);
				// 			}
				// 		});
				// 	}
				// });
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

/* 定位底部 */
.position-bottom{
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

</style>

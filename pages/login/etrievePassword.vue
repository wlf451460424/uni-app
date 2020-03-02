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

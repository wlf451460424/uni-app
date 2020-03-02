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
					<text>用&nbsp;户&nbsp;名：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;" @click="inputClick('userName')">
					<input style="width: 100%;font-size: 14px;color: #888888;" disabled="disabled" :value="userName_text" maxlength="15" placeholder="填写用户名" />
				</view>
			</view>
		</view>
		<view style="flex-direction: column;width: 100%;margin-top: 10upx;">
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;" @click="inputClick('nickName')">
					<input style="width: 100%;font-size: 14px;color: #888888;" disabled="disabled" :value="nickName_text" maxlength="18" placeholder="填写用户昵称" />
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;font-size: 14px;color: #888888;">
					<radio-group name="radio-group">
						<label><radio class="from-radio" color="#4CBDF3" checked="true"></radio>男</label>
						<label><radio class="from-radio" color="#4CBDF3"></radio>女</label>
					</radio-group>
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;" >
					<picker @change="agePickevrChange" :value="index_age" :range="array_age" style="width: 100%;">
						<view class="uni-input" style="width: 100%;font-size: 14px;color: #888888;padding: 0;">{{array_age[index_age]}}</view>
					</picker>
				</view>
				<!-- <view style="width: 20%;justify-content: flex-end;">
					<image style="width: 60upx;height: 60upx;" src="../../static/center-ico/next.png" @click="birthday_uniCalendar">
				</view> -->
			</view>
		</view>
		<view style="flex-direction: column;width: 100%;margin-top: 10upx;">
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 25%;height: 100%;align-items: center;">
					<text>喜欢的宠物：</text>
				</view>
				<view style="width: 75%;height: 100%;align-items: center;" @click="inputClick('pets')">
					<input style="width: 100%;font-size: 14px;color: #888888;" disabled="disabled" :value="pets_text" maxlength="18" placeholder="填写喜欢的宠物" />
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>养宠年限：</text>
				</view>
				<view style="width: 60%;height: 100%;align-items: center;" >
					<picker @change="pet_agePickevrChange" :value="index_pet_age" :range="array_pet_age" style="width: 100%;">
						<view class="uni-input" style="width: 100%;font-size: 14px;color: #888888;padding: 0;">{{array_pet_age[index_pet_age]}}</view>
					</picker>
				</view>
			</view>
			<view style="flex-direction: row;width: 100%;height: 100upx;line-height: 100upx;border-bottom: 1px solid #c8c7cc;background-color: #FFFFFF;padding: 20upx;">
				<view style="width: 20%;height: 100%;align-items: center;">
					<text>住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</text>
				</view>
				<view style="width: 80%;height: 100%;align-items: center;" @click="inputClick('address')">
					<input style="width: 100%;font-size: 14px;color: #888888;" disabled="disabled" :value="address_text" maxlength="18" placeholder="填写详细地址" />
				</view>
			</view>
		</view>
		
		<view style="flex-direction: column;margin-top: 10upx;padding: 20upx;background-color: #FFFFFF;">
			<text >个人简介</text>
			<textarea style="width: 100%;height: 140upx;font-size:12px;color: #888888;line-height: 50upx;" placeholder="请写下想说的话……" />
		</view>
		
		
		<uni-popup ref="show_userName" :mask-click="false" type="center" style="width: 100%;">
			<view class="uni-tip" style="width: 100%;">
				<text class="uni-tip-title" style="text-align: left;margin-bottom: 0;">修改用户名</text>
				<text class="uni-tip-content" style="text-align: left;margin-bottom: 20upx;font-size: 12px;color: #999999;">用户名是账号的唯一凭证，只能修改一次</text>
				<input @input="uniPopupInput_onKeyInput" id="userName_input" :value="userName_input" maxlength="15" placeholder="填写用户名" style="width: 100%;height: 70upx;line-height: 70upx;padding:15upx 0;font-size: 14px;border-bottom: 1px solid #4CBDF3;" />
				<view style="flex-direction: row;width: 100%;margin-top: 25upx;font-size: 12px;color: #999999;">
					<text style="width: 90%;">6~15个字符，仅可使用英文，数字，下划线</text>
					<text style="width: 10%;margin-left: 20upx;color: #000000;">{{userName_input_lenght}} <text>/15</text></text>
				</view>
				<view class="uni-tip-group-button" >
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="cancel('userName')">取消</text>
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="confirm('userName')">确定</text>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="show_nickName" :mask-click="false" type="center">
			<view class="uni-tip">
				<text class="uni-tip-title" style="text-align: left;">修改昵称</text>
				<input @input="uniPopupInput_onKeyInput" id="nickName_input" :value="nickName_input" maxlength="15" placeholder="填写昵称"  style="width: 100%;height: 70upx;line-height: 70upx;padding:15upx 0;font-size: 14px;border-bottom: 1px solid #4CBDF3;" />
				<view style="flex-direction: row;width: 100%;margin-top: 25upx;font-size: 12px;color: #999999;">
					<text style="width: 90%;"></text>
					<text style="width: 10%;margin-left: 20upx;color: #000000;">{{nickName_input_lenght}} <text>/15</text></text>
				</view>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="cancel('nickName')">取消</text>
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="confirm('nickName')">确定</text>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="show_pets" :mask-click="false" type="center">
			<view class="uni-tip">
				<text class="uni-tip-title" style="text-align: left;">填写喜欢的宠物</text>
				<input @input="uniPopupInput_onKeyInput" id="pets_input" :value="pets_input" maxlength="100" placeholder="填写喜欢的宠物"  style="width: 100%;height: 70upx;line-height: 70upx;padding:15upx 0;font-size: 14px;border-bottom: 1px solid #4CBDF3;" />
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="cancel('pets')">取消</text>
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="confirm('pets')">确定</text>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="show_address" :mask-click="false" type="center">
			<view class="uni-tip">
				<text class="uni-tip-title" style="text-align: left;">填写详细地址</text>
				<input @input="uniPopupInput_onKeyInput" id="address_input" :value="address_input" maxlength="100" placeholder="填写详细地址"  style="width: 100%;height: 70upx;line-height: 70upx;padding:15upx 0;font-size: 14px;border-bottom: 1px solid #4CBDF3;" />
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="cancel('address')">取消</text>
					<text class="uni-tip-button" style="color: #4CBDF3;" @click="confirm('address')">确定</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		components:{
			uniPopup
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				index_pet_age:0,
				array_pet_age: [],
				index_age:0,
				array_age: [],
				address_text:"",
				address_input:"",
				pets_text:"",
				pets_input:"",
				userName_text:"",
				userName_input:"",
				userName_input_lenght:0,
				nickName_text:"",
				nickName_input:"",
				nickName_input_lenght:0
			}
		},
		async onLoad() {
			this.get_ageArr();
			this.get_PetageArr();
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			//输入框统一处理
			inputClick(type){
				this.$refs['show_' + type].open()
				// this.address_input = this.address_text //点击输入框 弹框自动获取输入框原始内容
				switch (type) {
					case 'address':
						this.address_input = this.address_text
						break
					case 'pets':
						this.pets_input = this.pets_text
						break
					case 'userName':
						this.userName_input = this.userName_text
						this.userName_input_lenght = this.userName_text.length
						break
					case 'nickName':
						this.nickName_input = this.nickName_text
						this.nickName_input_lenght = this.nickName_text.length
						break
				}
			},
			//弹出层  输入框监听
			uniPopupInput_onKeyInput: function(event) {
				// this.type = event.target.value
				switch (event.target.id.split("_")[0]) {
					case 'address':
						this.address_input = event.target.value
						break
					case 'pets':
						this.pets_input = event.target.value
						break
					case 'userName':
						this.userName_input = event.target.value
						this.userName_input_lenght = event.target.value.length
						break
					case 'nickName':
						this.nickName_input = event.target.value
						this.nickName_input_lenght = event.target.value.length
						break
				}
			}, 
			//弹出层  确认按钮统一处理
			confirm(type) {
				this.$refs['show_' + type].close()
				switch (type) {
					case 'address':
						this.address_text = this.address_input
						break
					case 'pets':
						this.pets_text = this.pets_input
						break
					case 'userName':
						this.userName_text = this.userName_input
						break
					case 'nickName':
						this.nickName_text = this.nickName_input
						break
				}
			},
			//弹出层  取消按钮统一处理
			cancel(type) {
				this.$refs['show_' + type].close()
			},
			
			
			
			agePickevrChange: function(e) {
				this.index_age = e.target.value
			},
			pet_agePickevrChange: function(e) {
				this.index_pet_age = e.target.value
			},
			get_ageArr() {
				for(var i=0; i<=120; i++){
				  this.array_age.push(i+" 岁");
				}
			},
			get_PetageArr() {
				for(var i=0; i<=80; i++){
				  this.array_pet_age.push(i+" 年");
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
		onNavigationBarButtonTap(e) {
			// console.log("123")	
			// uni.showModal({
			//     title: '提示',
			//     content: '保存成功',
			//     success: function (res) {
			//         if (res.confirm) {
			//             console.log('用户点击确定');
			//         } else if (res.cancel) {
			//             console.log('用户点击取消');
			//         }
			//     }
			// });
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
	width: 100%;
}
.from-radio{
	transform: scale(0.6);
	color:#09BB07
}


/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 300px;
		background-color: #fff;
		border-radius: 10px;
	}

	.uni-tip-title {
		margin-bottom: 10px;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		font-size: 14px;
		color: #666;
	}

	.uni-tip-group-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-top: 20px;
	}

	.uni-tip-button {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>

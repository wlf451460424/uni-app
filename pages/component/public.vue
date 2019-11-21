<template>
	<view class="index">
		<view class="content_title_item" >
			<text
				v-for="(item,index) in tabList" :key="item.id" id="index"
				class="item_text"
				:class="{active: index === tabCurrentIndex}"
				@click="changeTab(index)"
				>{{item.name}}
			</text>
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	export default{
		data() {
			return {
				tabList: [],
				tabCurrentIndex: 0,
				actionShow: false,
				articleShow: true,
				questionShow: true,
			}
		},
		async onLoad() {
			this.tabList = json.tabList;
		},
		methods:{
			changeTab(e){
				this.tabCurrentIndex = e;
				this.actionShow = true;
				this.articleShow = true;
				this.questionShow = true;
				console.log(e)
				switch(e){
					case 0 :
						this.actionShow = false;
						break;
					case 1 :
						this.articleShow = false;
						break;
					case 2 :
						this.questionShow = false;
						break;
			   }
			}
		}
	}
</script>

<style lang="scss" scoped>
	view{
	    display: flex;
	}
	.index{
		display: flex;
		width: 100%;
		flex-direction: column;
	}
	.content_title_item{
		width: 100%;
		height: 40px;
		padding: 10px  60upx;
		flex-direction: row;
		// text-align: center;
		// align-items: center;
		border-bottom: 1px solid #AAAAAA;
	}
	.active{
		color: #4cbdf3;
	}
	.active_none{
		display: none;
	}
	.item_text{
		width: 33.3%;
		line-height: 40upx;
		text-align: center;
	}
</style>
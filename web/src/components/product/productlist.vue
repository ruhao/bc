<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='热销产品'></Nav>
		<div class='all'>
		<div class='margintop' v-for='(item,index) in this.productlist' :key=index>
			<router-link :to="{name:'productcid',params:{id:{id:item.id,name:item.title}}}" class="fontstyle">
				<div class="product-box">
					<div class="product-boxl"><img :src="item.imgurl1"></div>
					<div class="product-boxr">
						<img :src="item.imgurl2" class="productimg">
						<p class="product-boxp1">{{item.title}}</p>
						<p class="product-boxp2">{{item.content}}
						</p>
					</div>
				</div>
			</router-link>
		</div>
		<div style="clear: both;"></div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='热销产品'></Nav>
		<div class='midall'>
		<div class='midmargintop' v-for='(item,index) in this.productlist' :key=index>
			<router-link :to="{name:'productcid',params:{id:{id:item.id,name:item.title}}}" class="midfontstyle">
				<div class="midproduct-box">
					<div class="midproduct-boxl"><img :src="item.imgurl1"></div>
					<div class="midproduct-boxr">
						<img :src="item.imgurl2">
						<p class="midproduct-boxp1">{{item.title}}</p>
						<p class="midproduct-boxp2">{{item.content}}
						</p>
					</div>
				</div>
			</router-link>
		</div>
		<div style="clear: both;"></div>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle='热销产品'></Nav>
		<div class='mobileall'>
		<div class='mobilemargintop' v-for='(item,index) in this.productlist' :key=index>
			<router-link :to="{name:'productcid',params:{id:{id:item.id,name:item.title}}}" class="mobilefontstyle">
				<div class="mobileproduct-box">
					<div class="mobileproduct-boxl mobileindex-product-content-box1"><img :src="item.imgurl1" class="mobilefontstyle1"></div>
					<div class="mobileproduct-boxr mobileindex-product-content-box">
						<img :src="item.imgurl2">
						<p class="mobileproduct-boxp1">{{item.title}}</p>
					</div>
				</div>
			</router-link>
		</div>
		<div style="clear: both;"></div>
		</div>
	</div>
  </div>
</template>

<script>
import Nav from '../common/nav.vue'
import Foot from '../common/footer.vue'
import p11 from '../../../images/products1-1.jpg'
import p21 from '../../../images/products2-1.jpg'
import p12 from '../../../images/products1-2.jpg'
import p22 from '../../../images/products2-2.jpg'
import p13 from '../../../images/products1-3.jpg'
import p23 from '../../../images/products2-3.jpg'
import p14 from '../../../images/products1-4.jpg'
import p24 from '../../../images/products2-4.jpg'
import p15 from '../../../images/products1-5.jpg'
import p25 from '../../../images/products2-5.jpg'
import p16 from '../../../images/products1-6.jpg'
import p26 from '../../../images/products2-6.jpg'
import p17 from '../../../images/products1-7.jpg'
import p27 from '../../../images/products2-7.jpg'
import p18 from '../../../images/products1-8.jpg'
import p28 from '../../../images/products2-8.jpg'
export default {
  data () {
    return {
      width: 1920,
      productlist: [
        {
          imgurl1: p13,
          imgurl2: p23,
          title: '酒水饮料',
          content: '意大利文化我们应该学习葡萄酒，意大利葡萄酒，葡萄酒和许多其他称，是家庭的 基本饮料。',
          id: '5a9bf5e5fce9270fa4c2b6fc'
        },
        {
          imgurl1: p12,
          imgurl2: p22,
          title: '休闲零食',
          content: '意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。',
          id: '5a9bf5e6fce9270fa4c2b6fd'
        },
        {
          imgurl1: p11,
          imgurl2: p21,
          title: '新鲜水果',
          content: '意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。',
          id: '5a9bf5e7fce9270fa4c2b6ff'
        },
        {
          imgurl1: p14,
          imgurl2: p24,
          title: '冷冻食品',
          content: '意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。',
          id: '5a9bf5e7fce9270fa4c2b6fe'
        },
        {
          imgurl1: p15,
          imgurl2: p25,
          title: '粮油副食',
          content: '意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。',
          id: '5a9bf793fce9270fa4c2b70d'
        },
        {
          imgurl1: p16,
          imgurl2: p26,
          title: '酒水饮料',
          content: '意大利文化我们应该学习葡萄酒，意大利葡萄酒，葡萄酒和许多其他称，是家庭的 基本饮料。',
          id: '5a9bf5e5fce9270fa4c2b6fc'
        },
        {
          imgurl1: p17,
          imgurl2: p27,
          title: '休闲零食',
          content: '意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。',
          id: '5a9bf5e6fce9270fa4c2b6fd'
        },
        {
          imgurl1: p18,
          imgurl2: p28,
          title: '休闲零食',
          content: '意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。',
          id: '5a9bf5e6fce9270fa4c2b6fd'
        }
      ]
    }
  },
  components: {
    Nav,
    Foot
  },
  created () {
    this.width = document.documentElement.offsetWidth
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
    let ii = window.getComputedStyle(document.getElementsByClassName('mobilefontstyle1')[0], null)['width']
    let oo = document.getElementsByClassName('mobileindex-product-content-box').length
    for (let i = 0; i < oo; i++) {
      document.getElementsByClassName('mobileindex-product-content-box')[i].style.height = ii
    }
  }
}
</script>

<style scoped>
.product-box {
  width: 495px;
  display: flex;
  z-index: 11;
  position: relative;
}

.product-boxl {
  width: 240px;
}

.product-boxr {
  width: 240px;
  background: #f8efe7;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  height: 240px;
}
.all {
  margin-top: 5px;
}
.product-boxr img {
  margin-top: 5px;
}
.productimg{
  width: 120px;
  height: 120px;
}
.product-boxp1 {
  color: #ee882a;
  font-weight: 600;
  font-size: 18px;
  margin: 10px 10px 0;
}

.margintop {
  margin-top: 10px;
  float: left;
}

.margintop:nth-of-type(2n) {
  margin-left: 10px;
}

.product-boxp2 {
  color: #ee882a;
  font-weight: 100;
  font-size: 12px;
  margin: 10px 15px 0;
  line-height: 20px;
  letter-spacing: 1px;
}

.product-boxl img {
  width: 100%;
}

.fontstyle {
  text-decoration: none;
  font-size: 12px;
  z-index: 11;
}
.midproduct-box {
  width: 700px;
  display: flex;
  z-index: 11;
  position: relative;
}

.midproduct-boxl {
  width: 348px;
}

.midproduct-boxr {
  width: 350px;
  background: #f8efe7;
  position: relative;
  text-align: center;
}
.midall {
  margin-top: 30px;
}
.midproduct-boxr img {
  margin-top: 30px;
}

.midproduct-boxp1 {
  color: #ee882a;
  font-weight: 600;
  font-size: 18px;
  margin: 10px 35px 0;
}

.midmargintop {
  margin-top: 20px;
  float: left;
}

.midmargintop:nth-of-type(2n) {
  margin-left: 20px;
}

.midproduct-boxp2 {
  color: #ee882a;
  font-weight: 100;
  font-size: 14px;
  margin: 15px 35px 0;
  line-height: 25px;
  letter-spacing: 1px;
}

.midproduct-boxl img {
  width: 100%;
}

.midfontstyle {
  text-decoration: none;
  z-index: 11;
}
.mobileproduct-box {
  width: 100%;
  display: flex;
  z-index: 11;
  position: relative;
}

.mobileproduct-boxl {
  width: 50%;
}

.mobilefontstyle{
  text-decoration: none;
}
.mobileproduct-boxr {
  width: 50%;
  background: #f8efe7;
  position: relative;
  text-align: center;
}
.mobileall {
  margin-top: 10px;
  width: 100%;
  padding-bottom: 20px;
}
.mobileproduct-boxr img {
  margin-top: 10px;
  width:70%;
}

.mobileproduct-boxp1 {
  color: #ee882a;
  font-weight: 600;
  font-size: 18px;
  margin: 5px 35px 0;
}

.mobilemargintop {
  margin-top: 10px;
  float: left;
}

.mobileindex-product-content-box1{
  width: 50%;
  height: 100%;
  font-size: 0;
}

.mobileproduct-boxp2 {
  color: #ee882a;
  font-weight: 100;
  font-size: 14px;
  margin: 20px 35px 0;
  line-height: 25px;
  letter-spacing: 1px;
}

.mobileproduct-boxl img {
  width: 100%;
}

</style>

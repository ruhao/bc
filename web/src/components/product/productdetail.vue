<template>
<div>
	<div v-if="width<1500&&width>640">
    <div v-if="this.detail.cateId">
		<Nav navtitle="热销产品"></Nav>
		<div class="wraperwidth" >
			<div class="pdetail-left">
        <div v-if="this.detail.imgurl" class="imgsize">
					<img :src="this.detail.imgurl" />
				</div>
         <div v-if="this.detail.companyintroduction">
					<p class="pdetail-leftp2" v-for="(item,index) in this.companyintroduction" :key=index>{{item}}</p>
				</div>
        <br />
        <div v-if="this.detail.name">
					<p class="pdetail-leftp4">{{this.detail.name}}
          </p>
				</div>
        <div v-if="this.detail.introduction">
					<p class="pdetail-leftp2" v-for="(item,index) in this.introduction" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.describe">
					<p class="pdetail-leftp2" v-for="(item,index) in described" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title">
          <br />
          <p class="pdetail-leftp4">饮食搭配</p>
					<p class="pdetail-leftp1">{{this.detail.title}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.firsttitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="pdetail-leftp1">{{this.detail.title1}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.secondtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.thirdtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title3">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.fourtitle" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.title4">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.fifthtitle" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.title5">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.sixtitle" :key=index>{{item}}</p>
				</div>
        <br />
        <div v-if="!this.detail.haveparameter">
					<p class="pdetail-leftp4">产品参数</p>
				</div>
				<div v-if="this.detail.origin">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">原&nbsp;产&nbsp;地:</span>&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品材料:</span>&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">保&nbsp;质&nbsp;期:</span>&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
				<div v-if="this.detail.Qcontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">酒精含量:</span>&nbsp;&nbsp;{{this.detail.Qcontent}}</p>
				</div>
				<div v-if="this.detail.Tcontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">糖&nbsp;含&nbsp;量:</span>&nbsp;&nbsp;{{this.detail.Tcontent}}</p>
				</div>
				<div v-if="this.detail.Scontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">酸&nbsp;含&nbsp;量:</span>&nbsp;&nbsp;{{this.detail.Scontent}}</p>
				</div>
				<div v-if="this.detail.color">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">颜&nbsp;&nbsp;色:</span>&nbsp;&nbsp;{{this.detail.color}}</p>
				</div>
        <div v-if="this.detail.Kcontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">I&nbsp;B&nbsp;U:</span>&nbsp;&nbsp;{{this.detail.Kcontent}}</p>
				</div>
				<div v-if="this.detail.smell">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">气&nbsp;&nbsp;味:</span>&nbsp;&nbsp;{{this.detail.smell}}</p>
				</div>
				<div v-if="this.detail.taste">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">口&nbsp;&nbsp;感:</span>&nbsp;&nbsp;{{this.detail.taste}}</p>
				</div>
        <div v-if="this.detail.isfit">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">适用人群:</span>&nbsp;&nbsp;{{this.detail.isfit}}</p>
				</div>
        <div v-if="this.detail.fittemperature ">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">适用温度:</span>&nbsp;&nbsp;{{this.detail.fittemperature}}</p>
				</div>
        <div v-if="this.detail.use">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">食用方法:</span>&nbsp;&nbsp;{{this.detail.use}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">储存方法:</span>&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
			</div>
			<div class="pdetail-right smwidth">
				<p class="pdetail-rightp1">产品推荐</p>
				<div v-for="(item,index) in relatived" :key=index class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
					<!-- <router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}"> -->
						<div class="serverbox1 productimg"><img :src="item.imgurl" @click="changcontent(item,reid)"></div>
					<!-- </router-link>
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}"> -->
						<div class="serverbox2 productimg" @click="changcontent(item,reid)">
						<img v-if='item.type==5' src="../../../images/products2-3.jpg">
            <img v-if='item.type==4' src="../../../images/products2-8.jpg">
            <img v-if='item.type==2' src="../../../images/products2-1.jpg">
            <img v-if='item.type==1' src="../../../images/products2-4.jpg">
            <img v-if='item.type==3' src="../../../images/products2-5.jpg">
							<p class="prolist">
								{{item.name}}
							</p>
						</div>
					<!-- </router-link> -->
				</div>
         <div v-if="relatived.length<1" class="jingqingqidai">
          敬请期待
				</div>
			</div>
		</div>
    </div>
    <div v-if="!this.detail.cateId" class="chanceanother">
      请选择相关产品
    </div>
	</div>
  <div v-if="width>=1500">
    <div v-if="this.detail.cateId">
		<Nav :navtitle="this.$route.params.content.navname"></Nav>
		<div class="wraperwidth">
			<div class="pdetail-left">
        <div v-if="this.detail.imgurl" class="imgsize">
					<img :src="this.detail.imgurl" />
				</div>
                <div v-if="this.detail.name">
					<p class="pdetail-leftp4">{{this.detail.name}}</p>
				</div>
      <div class="bugbox">
         <div class="price"><span>￥</span>:{{price}}</div>
         <button class="shopcart" @click="setinshop(detail.name)">加入购物车</button>
      </div>
			<div class="bugbox1">
         <div class="price"><i @click="DecreaseNumber">-</i><b>{{ProductNumber}}</b><i @click="AddNumber">+</i></div>
         <button class="shopcart" @click="BuyNow">立即购买</button>
      </div>
         <div v-if="this.detail.companyintroduction">
					<p class="pdetail-leftp2" v-for="(item,index) in this.companyintroduction" :key=index>{{item}}</p>
				</div>
        <br />
        <div v-if="this.detail.introduction">
					<p class="pdetail-leftp2" v-for="(item,index) in this.introduction" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.describe">
					<p class="pdetail-leftp2" v-for="(item,index) in described" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title">
          <br />
          <p class="pdetail-leftp4">饮食搭配</p>
					<p class="pdetail-leftp1">{{this.detail.title}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.firsttitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="pdetail-leftp1">{{this.detail.title1}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.secondtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.thirdtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title3">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.fourtitle" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.title4">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.fifthtitle" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.title5">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.sixtitle" :key=index>{{item}}</p>
				</div>
        <br />
        <div v-if="!this.detail.haveparameter">
					<p class="pdetail-leftp4">产品参数</p>
				</div>
				<div v-if="this.detail.origin">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">原&nbsp;产&nbsp;地:</span>&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品材料:</span>&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">保&nbsp;质&nbsp;期:</span>&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
        <div v-if="this.detail.Qcontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">酒精含量:</span>&nbsp;&nbsp;{{this.detail.Qcontent}}</p>
				</div>
				<div v-if="this.detail.Tcontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">糖&nbsp;含&nbsp;量:</span>&nbsp;&nbsp;{{this.detail.Tcontent}}</p>
				</div>
				<div v-if="this.detail.Scontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">酸&nbsp;含&nbsp;量:</span>&nbsp;&nbsp;{{this.detail.Scontent}}</p>
				</div>
        <div v-if="this.detail.Kcontent">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">I&nbsp;B&nbsp;U:</span>&nbsp;&nbsp;{{this.detail.Kcontent}}</p>
				</div>
				<div v-if="this.detail.color">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">颜&nbsp;&nbsp;色:</span>&nbsp;&nbsp;{{this.detail.color}}</p>
				</div>
				<div v-if="this.detail.smell">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">气&nbsp;&nbsp;味:</span>&nbsp;&nbsp;{{this.detail.smell}}</p>
				</div>
				<div v-if="this.detail.taste">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">口&nbsp;&nbsp;感:</span>&nbsp;&nbsp;{{this.detail.taste}}</p>
        </div>
         <div v-if="this.detail.isfit">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">适用人群:</span>&nbsp;&nbsp;{{this.detail.isfit}}</p>
				</div>
        <div v-if="this.detail.use">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">食用用方法:</span>&nbsp;&nbsp;{{this.detail.use}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">储存方法:</span>&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
			</div>
			<div class="pdetail-right">
				<p class="pdetail-rightp1">产品推荐</p>
				<div v-for="(item,index) in relatived" :key=index class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
					<!-- <router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}"> -->
						<div class="serverbox1 productimg"><img :src="item.imgurl" @click="changcontent(item,reid)"></div>
					<!-- </router-link> -->
					<!-- <router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}"> -->
						<div class="serverbox2" @click="changcontent(item,reid)">
						<img v-if='item.type==5' src="../../../images/products2-3.jpg">
            <img v-if='item.type==4' src="../../../images/products2-8.jpg">
            <img v-if='item.type==2' src="../../../images/products2-1.jpg">
            <img v-if='item.type==1' src="../../../images/products2-4.jpg">
            <img v-if='item.type==3' src="../../../images/products2-5.jpg">
							<p class="prolist">
								{{item.name}}
							</p>
						</div>
					<!-- </router-link> -->
				</div>
         <div v-if="relatived.length<1" class="jingqingqidai">
          敬请期待
				</div>
			</div>
		</div>
    </div>
    <div v-if="!this.detail.cateId" class="chanceanother">
      请选择相关产品
    </div>
	</div>
  <div v-if="width<=640">
    <div v-if="this.detail.cateId">
		<Nav :navtitle="this.$route.params.content.navname"></Nav>
			<div class="mobilepdetail-left">
        <div v-if="this.detail.imgurl" class="mobileimgsize">
					<img :src="this.detail.imgurl" />
				</div>
         <div v-if="this.detail.companyintroduction">
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.companyintroduction" :key=index>{{item}}</p>
				</div>
        <br />
        <div v-if="this.detail.name">
					<h3 class="mobilepdetail-leftp4">{{this.detail.name}}</h3>
				</div>
        <div v-if="this.detail.introduction">
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.introduction" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.describe">
					<p class="mobilepdetail-leftp2" v-for="(item,index) in described" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title">
          <br />
          <h3 class="mobilepdetail-leftp4">饮食搭配</h3>
					<p class="mobilepdetail-leftp1">{{this.detail.title}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.firsttitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="mobilepdetail-leftp1">{{this.detail.title1}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.secondtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="mobilepdetail-leftp1">{{this.detail.title2}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.thirdtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title3">
					<p class="mobilepdetail-leftp1">{{this.detail.title2}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.fourtitle" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.title4">
					<p class="mobilepdetail-leftp1">{{this.detail.title2}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.fifthtitle" :key=index>{{item}}</p>
				</div>
        <div v-if="this.detail.title5">
					<p class="mobilepdetail-leftp1">{{this.detail.title2}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.sixtitle" :key=index>{{item}}</p>
				</div>
        <br />
        <div v-if="!this.detail.haveparameter">
					<h3 class="mobilepdetail-leftp4">产品参数</h3>
				</div>
				<div v-if="this.detail.origin">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">原&nbsp;产&nbsp;地:</span>&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">产品材料:</span>&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">保&nbsp;质&nbsp;期:</span>&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
        <div v-if="this.detail.Qcontent">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">酒精含量:</span>&nbsp;&nbsp;{{this.detail.Qcontent}}</p>
				</div>
				<div v-if="this.detail.Tcontent">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">糖&nbsp;含&nbsp;量:</span>&nbsp;&nbsp;{{this.detail.Tcontent}}</p>
				</div>
				<div v-if="this.detail.Scontent">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">酸&nbsp;含&nbsp;量:</span>&nbsp;&nbsp;{{this.detail.Scontent}}</p>
				</div>
        <div v-if="this.detail.Kcontent">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">I&nbsp;B&nbsp;U:</span>&nbsp;&nbsp;{{this.detail.Kcontent}}</p>
				</div>
				<div v-if="this.detail.color">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">颜&nbsp;&nbsp;色:</span>&nbsp;&nbsp;{{this.detail.color}}</p>
				</div>
				<div v-if="this.detail.smell">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">气&nbsp;&nbsp;味:</span>&nbsp;&nbsp;{{this.detail.smell}}</p>
				</div>
				<div v-if="this.detail.taste">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">口&nbsp;&nbsp;感:</span>&nbsp;&nbsp;{{this.detail.taste}}</p>
        </div>
         <div v-if="this.detail.isfit">
					<p class="mobilepdetail-leftp3"><span class="pdetail-leftspan">适用人群:</span>&nbsp;&nbsp;{{this.detail.isfit}}</p>
				</div>
        <div v-if="this.detail.use">
					<p class="mobilepdetail-leftp3"><span class="pdetail-leftspan">食用用方法:</span>&nbsp;&nbsp;{{this.detail.use}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">储存方法:</span>&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
        <br />
				<h3 class="mobilepdetail-leftp4">产品推荐</h3>
			<div class="mobilepdetail-right">
				<div v-if="relatived.length>0" v-for="(item,index) in relatived" :key=index class="mobileserverbox">
          <div class="mobileserverbox1">
          <img :src="item.imgurl" @click="changcontent(item,reid)"><span></span>
          </div>
				</div>
        <div v-if="relatived.length<1" class="jingqingqidai">
          敬请期待
				</div>
			</div>
      </div>
		</div>
    <div v-if="!this.detail.cateId" class="chanceanother mobilechanceanother">
      请选择相关产品
    </div>
	</div>
  </div>
</template>

<script>
import Nav from "../common/nav.vue";
export default {
  data() {
    return {
      width: 1920,
      detail: {},
      firsttitle: [],
      secondtitle: [],
      thirdtitle: [],
      fourtitle: [],
      fifthtitle: [],
      sixtitle: [],
      introduction: [],
      described: [],
      cidsec1: "",
      reid: "",
      relative: [],
      cidsec2: "",
      price: "",
      x: "",
      y: "",
      id: "",
      ProductNumber: 1,
      relatived: [],
      tempdata: [],
      fliter: {
        data6: [],
        limit: 50,
        page: 1,
        cateId: [],
        type: ""
      }
    };
  },
  methods: {
    AddNumber() {
      this.ProductNumber = this.ProductNumber + 1;
    },
    DecreaseNumber() {
      if (this.ProductNumber > 1) {
        this.ProductNumber = this.ProductNumber - 1;
      }
    },
    setinshop(value) {
      if (this.$cookie.get("shop")) {
        let bb = this.$cookie.get("shop");
        bb = JSON.parse(bb);
        let shopListLength = bb.length;
        let flag = true;
        for (let i = 0; i < shopListLength; i++) {
          console.log(bb[i].name == value);
          if (bb[i].name == value) {
            bb[i].num = bb[i].num + 1;
            flag = false;
          }
        }
        if (flag) {
          let obj = {
            name: value,
            num: 1
          };
          bb.push(obj);
        }
        bb = JSON.stringify(bb);
        this.$cookie.set("shop", bb, 1);
      } else {
        let bb = [];
        let obj = {
          name: value,
          num: 1
        };
        bb.push(obj);
        bb = JSON.stringify(bb);
        this.$cookie.set("shop", bb, 1);
      }
    },
    getdetail(data) {
      let object1 = data.split("&&");
      this.firsttitle = object1;
    },
    getdetail1(data) {
      let object1 = data.split("&&");
      this.secondtitle = object1;
    },
    getdetail2(data) {
      let object1 = data.split("&&");
      this.thirdtitle = object1;
    },
    getdetail5(data) {
      let object1 = data.split("&&");
      this.fourtitle = object1;
    },
    getdetail6(data) {
      let object1 = data.split("&&");
      this.fifthtitle = object1;
    },
    getdetail7(data) {
      let object1 = data.split("&&");
      this.sixtitle = object1;
    },
    getdetail3(data) {
      let object1 = data.split("&&");
      this.introduction = object1;
    },
    getdetail4(data) {
      let object1 = data.split("&&");
      this.companyintroduction = object1;
    },
    getlist(data) {
      this.$http.get(this.getTest() + "/kind/data").then(res => {
        this.getcid(res.data[0].children[0].children[5].children, data);
        this.getData();
      });
    },
    getcid(data, id) {
      let ii = data.length;
      for (let i = 0; i < ii; i++) {
        if (data[i]._id === id) {
          this.tempdata = data[i];
          this.getlistcid(this.tempdata);
          return;
        } else {
          if (data[i].children) {
            this.getcid(data[i].children, id);
          }
        }
      }
    },
    // 获取id数组与数据库进行交互
    getlistcid(data) {
      if (data.children) {
        let ll = data.children.length;
        for (let i = 0; i < ll; i++) {
          this.getlistcid(data.children[i]);
        }
      } else {
        this.fliter.cateId.push(data._id);
      }
    },
    changcontent(value, value2) {
      this.detail = value;
      this.getlist(value2);
      if (this.detail.content) {
        this.getdetail(this.detail.content);
      }
      if (this.detail.content1) {
        this.getdetail1(this.detail.content1);
      }
      if (this.detail.content2) {
        this.getdetail(this.detail.content2);
      }
      if (this.detail.introduction) {
        this.getdetail3(this.detail.introduction);
      }
      if (this.detail.companyintroduction) {
        this.getdetail4(this.detail.companyintroduction);
      }
      if (this.detail.content3) {
        this.getdetail4(this.detail.companyintroduction);
      }
      if (this.detail.content4) {
        this.getdetail4(this.detail.companyintroduction);
      }
      if (this.detail.content5) {
        this.getdetail4(this.detail.companyintroduction);
      }
    },
    moveup(value) {
      document.getElementsByClassName("serverbox2")[value].id = "activet";
    },
    movedown(value) {
      document.getElementsByClassName("serverbox2")[value].id = "";
    },
    randomre(data) {
      let uu = data.length;
      if (uu > 0) {
        this.x = parseInt(Math.random() * uu);
        this.randomrem(this.x, uu);
      } else {
        this.x = 0;
      }
    },
    randomrem(x, uu) {
      this.y = parseInt(Math.random() * uu);
      if (this.x === this.y) {
        this.randomrem(this.x, uu);
      }
    },
    changepage(index) {
      this.detail = this.relatived[index];
      this.getData();
    },
    getData() {
      this.$http
        .post(this.getTest() + "/products/list", this.fliter)
        .then(res => {
          // 获取数据
          this.relatived = [];
          let uu = res.data.rows.length;
          if (uu > 0) {
            this.randomre(res.data.rows);
            res.data.rows[this.x].num = 0;
            res.data.rows[this.y].num = 1;
            this.relatived.push(res.data.rows[this.x]);
            this.relatived.push(res.data.rows[this.y]);
          } else {
            this.randomre(res.data.rows);
            res.data.rows[this.x].num = 0;
            this.relatived.push(res.data.rows[this.x]);
          }
        });
    },
    BuyNow() {
      if (this.$cookie.get("user")) {
        if (confirm("确定购买吗？")) {
          let obj1 = {
            name: this.$cookie.get("user")
          };
          this.$http
            .post("http://120.79.22.222:3000/user/list", obj1)
            .then(res => {
              let obj = {
                name: res.data.rows[0].name,
                area: res.data.rows[0].area,
                telephone: res.data.rows[0].telephone,
                product: this.detail.name,
                num: this.ProductNumber
              };
              this.$http
                .post("http://120.79.22.222:3000/indent/data", obj)
                .then(data => {
                  alert("购买成功")
                });
            });
        }
      } else {
        alert("请先登入");
      }
    }
  },
  components: {
    Nav
  },
  created() {
    this.width = document.documentElement.offsetWidth;
    if (this.$route.params.content) {
      this.getlist(this.$route.params.content.relative);
      this.fliter.type = this.$route.params.content.type;
      this.reid = this.$route.params.content.relative;
      this.detail = this.$route.params.content.content;
      this.price = this.$route.params.content.price;
      this.cidsec2 = this.$route.params.content.navname;
      this.described = this.$route.params.content.content.describe.split(";");
      if (this.cidsec2 === "可选分类") {
        this.cidsec2 = "产品详情";
      }
      if (this.detail.content) {
        this.getdetail(this.detail.content);
      }
      if (this.detail.content1) {
        this.getdetail1(this.detail.content1);
      }
      if (this.detail.content2) {
        this.getdetail2(this.detail.content2);
      }
      if (this.detail.introduction) {
        this.getdetail3(this.detail.introduction);
      }
      if (this.detail.companyintroduction) {
        this.getdetail4(this.detail.companyintroduction);
      }
    }
  },
  updated() {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth;
    };
    if (document.getElementsByClassName("mobileimgsize")[0]) {
      let ii = window.getComputedStyle(
        document.getElementsByClassName("mobileserverbox1")[0],
        null
      )["width"];
      document.getElementsByClassName(
        "mobileimgsize"
      )[0].style.height = window.getComputedStyle(
        document.getElementsByClassName("mobileimgsize")[0],
        null
      )["width"];
      let oo = document.getElementsByClassName("mobileserverbox1").length;
      for (let i = 0; i < oo; i++) {
        document.getElementsByClassName("mobileserverbox1")[
          i
        ].style.height = ii;
      }
    }
  }
};
</script>

<style scoped>
.wraperwidth {
  width: 1000px;
  margin: 50px auto 0;
  display: flex;
}

.pdetail-left {
  width: 700px;
  padding: 0 20px;
}

.pdetail-right {
  flex: 1;
  border-top: 3px solid #ee882a;
}

.pdetail-leftp1 {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #404040;
}

.pdetail-leftp2 {
  margin-top: 10px;
  font-size: 16px;
  color: #404040;
  font-weight: 100;
  line-height: 25px;
}

.pdetail-leftp3 {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 100;
  color: #404040;
  line-height: 25px;
}
.pdetail-leftp4 {
  font-size: 24px;
  color: #404040;
  font-size: 600;
}
.mobilepdetail-leftp4 {
  font-size: 14px;
  color: #404040;
  font-size: bold;
}
.pdetail-leftspan {
  font-size: 16px;
  font-weight: 600;
  color: #404040;
}
.pdetail-leftspan2 {
  font-size: 16px;
  font-weight: 600;
  color: #404040;
  margin-top: 10px;
}

.imgsize {
  margin: 30px;
  width: 245px;
  text-align: center;
  height: 245px;
}
.imgsize img {
  height: 100%;
}
.pdetail-rightp1 {
  margin-top: 20px;
  line-height: 30px;
  color: #ee882a;
  font-size: 16px;
  font-weight: 600;
}
.chanceanother {
  color: #ee882a;
  text-align: center;
  padding: 85px 0;
  font-weight: 600;
}
.serverbox {
  width: 245px;
  position: relative;
  height: 245px;
  cursor: pointer;
  overflow: hidden;
  z-index: 11;
  margin-top: 30px;
  text-align: center;
}

.serverbox1 {
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  height: 245px;
  text-align: center;
  position: relative;
}

.serverbox1 img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 100%;
}

.serverbox2 {
  position: absolute;
  top: 245px;
  left: 0px;
  background: #f9f1e9;
  width: 245px;
  height: 245px;
  opacity: 0;
  transition: all 0.5s;
  text-align: center;
}

.serverbox2 img {
  margin-top: 20px;
  width: 120px;
  height: 120px;
}

.prolist {
  margin-top: 50px;
  color: #ee882a;
}
.productimg {
  height: 245px;
  width: 245px;
}
.smwidth {
  width: 245px;
}
#activet {
  top: 0px;
  opacity: 0.8;
}
.mobilewraperwidth {
  width: 100%;
  margin: 10px auto 0;
  display: flex;
}

.mobilepdetail-left {
  width: 90%;
  padding: 0 5%;
}

.mobilepdetail-right {
  margin-top: 15px;
  width: 96%;
  border-top: 3px solid #f2ab699c;
  padding: 0 2%;
  position: relative;
  overflow: hidden;
}

.mobilepdetail-leftp1 {
  font-size: 12px;
  font-weight: 600;
  color: #404040;
  margin-top: 10px;
}

.mobilepdetail-leftp2 {
  margin-top: 10px;
  font-size: 12px;
  color: #404040;
}

.mobilepdetail-leftp3 {
  margin-top: 10px;
  font-size: 10px;
  color: #404040;
}

.mobilepdetail-leftspan {
  font-size: 12px;
  font-weight: 600;
  color: #404040;
}
.mobile7imgsize {
  margin: 10px;
  text-align: center;
  max-width: 80%;
  height: 0;
  overflow: hidden;
  margin: 0 auto;
}
.mobileimgsize img {
  max-height: 100%;
  max-width: 100%;
}
.mobilepdetail-rightp1 {
  margin-top: 10px;
  line-height: 25px;
  color: #ee882a;
  font-size: 14px;
  font-weight: 600;
  text-indent: 2em;
}
.mobileserverbox {
  width: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-top: 30px;
  float: left;
}
.jingqingqidai {
  color: #ee882a;
  font-weight: 600;
  margin-top: 50px;
}
.mobileserverbox1 {
  position: relative;
  top: 0px;
  left: 0px;
  font-size: 0;
  width: 90%;
  text-align: center;
  border: 2px #f2ab699c solid;
}

.mobileserverbox1 img {
  height: 90%;
}
.mobileprolist {
  margin-top: 50px;
  color: #ee882a;
}
.mobileserverbox1 span {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.wantjump {
  display: block;
  position: relative;
}
.mobilechanceanother {
  padding: 135px 0;
}
.shopcart {
  border: 1px solid gray;
  width: 150px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
  margin-left: 40px;
}
.price {
  width: 150px;
  color: red;
  font-weight: 600;
  font-size: 24px;
  display: flex;
}
.bugbox {
  margin-top: 15px;
  display: flex;
}
.bugbox1 {
  display: flex;
}
b,
i {
  font-style: normal;
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px gray solid;
  text-align: center;
}
i {
  cursor: pointer;
}
b {
  border-left: 0;
  border-right: 0;
  color: black;
}
</style>

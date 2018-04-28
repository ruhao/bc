<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle="公司照片"></Nav>
		<div class="wraperwidth">
			<div class="box">
				<div v-for="(item,index) in fliter.data6" :key=index class="photobox">
					<router-link :to="{name:'photodetail',params:{content:item}}">
						<img :src="item.zimgurl1">
					</router-link>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>
		<div class="wraperwidth" v-if="fliter.pages>1">
			<div class="page">
				<ul v-if="li7>=7">
					<li @click="prev"><span>上一页</span></li>
					<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
					<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
						<span v-else>..{{this.li2}}</span>
					</li>
					<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
					<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
					<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
					<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
						<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
					</li>
					<li class="li"><span @click="changepage(li7,7)">{{this.li7}}</span></li>
					<li @click="next"><span>下一页</span></li>
				</ul>
				<ul v-else>
					<li @click="prev"><span>上一页</span></li>
					<li v-for="(item,index) in li7" :key=index class="li">
						<span @click="changepage(item,item)">{{item}}</span>
					</li>
					<li @click="next"><span>下一页</span></li>
				</ul>
			</div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle="公司照片"></Nav>
		<div class="midwraperwidth">
			<div class="midbox">
				<div v-for="(item,index) in fliter.data6" :key=index class="midphotobox">
					<router-link :to="{name:'photodetail',params:{content:item}}">
						<img :src="item.zimgurl1">
					</router-link>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>
		<div class="midwraperwidth" v-if="fliter.pages>1">
			<div class="page">
				<ul v-if="li7>=7">
					<li @click="prev"><span>上一页</span></li>
					<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
					<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
						<span v-else>..{{this.li2}}</span>
					</li>
					<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
					<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
					<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
					<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
						<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
					</li>
					<li class="li"><span @click="changepage(li7,7)">{{this.li7}}</span></li>
					<li @click="next"><span>下一页</span></li>
				</ul>
				<ul v-else>
					<li @click="prev"><span>上一页</span></li>
					<li v-for="(item,index) in li7" :key=index class="li">
						<span @click="changepage(item,item)">{{item}}</span>
					</li>
					<li @click="next"><span>下一页</span></li>
				</ul>
			</div>
		</div>
	</div>
	<div v-if="width<=640">
		<Nav navtitle="公司照片"></Nav>
		<div class="mobilewraperwidth">
			<div class="mobilebox">
				<div v-for="(item,index) in fliter.data6" :key=index class="mobilephotobox">
					<router-link :to="{name:'photodetail1',params:{content:item}}" class="fontstyle">
            <div class="mobileproduct-box">
            <div class="mobileproduct-boxl mobileindex-product-content-box1"><img :src="item.zimgurl1" class="mobilefontstyle1"></div>
            <div class="mobileproduct-boxr">
						<img src="../../../images/photo1.png">
            <p class="mobileproduct-boxp2">{{item.content}}</p>
						<p class="mobileproduct-boxp1">{{item.detaildate}}</p>
					</div>
          </div>
					</router-link>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>
			<div class="mobilewraperwidth" v-if="fliter.pages>1">
				<div class="mobilepage">
					<ul v-if="li7>=7">
						<li @click="prev"><span>上一页</span></li>
						<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
						<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
							<span v-else>..{{this.li2}}</span>
						</li>
						<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
						<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
						<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
						<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
							<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
						</li>
						<li class="li"><span @click="changepage(li7,7)">{{this.li7}}</span></li>
						<li @click="next"><span>下一页</span></li>
					</ul>
					<ul v-else>
						<li @click="prev"><span>上一页</span></li>
						<li v-for="(item,index) in li7" :key=index class="li">
							<span @click="changepage(item,item)">{{item}}</span>
						</li>
						<li @click="next"><span>下一页</span></li>
					</ul>
				</div>
			</div>
      <div v-if="fliter.data6.length<1" class="mobileinfo">
				<p class="mobilenothing">敬请期待</P>
			</div>
	</div>
  </div>
</template>

<script>
import PageJs from '../common/page.js'
import Nav from '../common/nav.vue'
export default {
  mixins: [PageJs],
  data () {
    return {
      width: 1920,
      apimodel: 'news',
      pagenum: [],
      companynews: [],
      li1: 1,
      li2: 2,
      li3: 3,
      li4: 4,
      li5: 5,
      li6: '...',
      li7: 7,
      fliter: {
        data6: [],
        type: '4',
        limit: 12,
        page: 1
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.getData()
    this.width = document.documentElement.offsetWidth
  },
  mounted () {
    if (document.getElementsByClassName('li')[0]) {
      document.getElementsByClassName('li')[0].id = 'active'
    }
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.wraperwidth {
  width: 1000px;
  margin: 0 auto;
}

img {
  border: 0;
}

.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
}

ul,
p {
  padding: 0;
  margin: 0;
}

.page {
  margin-top: 30px;
}

.page ul {
  overflow: hidden;
  height: 50px;
  width: 630px;
  list-style: none;
  margin: 30px auto;
}

.page ul li {
  float: left;
  margin-left: 20px;
  border: solid 1px #00b7ff;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  color: #00b7ff;
}

.page ul li:hover {
  color: #ee882a;
  border: solid 1px #ee882a;
}

.page ul li span {
  padding: 0 15px;
  background: white;
}

.photobox {
  width: 240px;
  margin-left: 15px;
  float: left;
  height: 240px;
}

.photobox img {
  width: 240px;
  height: 240px;
}

.box {
  margin-top: 50px;
}

.midphotobox {
  width: 340px;
  margin-left: 15px;
  float: left;
}

.midphotobox img {
  width: 340px;
}

.midbox {
  margin-top: 50px;
}

#active {
  color: #ee882a;
  border: solid 1px #ee882a;
}
.mobileproduct-box {
  width: 100%;
  display: flex;
  z-index: 11;
  position: relative;
  margin-top: 10px;
  background: #f8efe8;
}

.mobileproduct-boxl {
  width: 50%;
}

.mobilefontstyle{
  text-decoration: none;
}
.mobileproduct-boxr {
  width: 50%;
  position: relative;
  text-align: center;
}
.mobileall {
  margin-top: 10px;
  width: 100%;
  padding-bottom: 20px;
}
.mobileproduct-boxr img {
  margin-top: 30px;
  width:40%;
}

.mobileproduct-boxp1 {
  font-size: 12px;
  margin: 5px 35px 0;
  height: 18px;
  color: black;
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
  font-weight: 600;
  font-size: 14px;
  margin: 20px 35px 0;
  line-height: 25px;
  letter-spacing: 1px;
}

.mobileproduct-boxl img {
  width: 100%;
}

.fontstyle {
  text-decoration: none;
  z-index: 11;
}
.mobilepage {
  margin-top: 30px;
}

.mobilepage ul {
  overflow: hidden;
  height: 26px;
  width: 100%;
  list-style: none;
  margin: 30px auto;
  position: relative;
  z-index: 14;
}
.fontstyle{
  text-decoration: none;
}
.mobilepage ul li {
  float: left;
  margin-left: 5px;
  border: solid 1px #00b7ff;
  line-height: 22px;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  color: #00b7ff;
}

.mobilepage ul li:hover {
  color: #ee882a;
  border: solid 1px #ee882a;
}

.mobilepage ul li span {
  padding: 0 6px;
  background: white;
  font-size: 12px;
}
.mobileinfo{
  height: 150px;
  padding-top:100px;
}
.mobilenothing{
  text-align: center;
  color: #ee882a;
}
</style>

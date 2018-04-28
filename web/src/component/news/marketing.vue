<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle="营销活动"></Nav>
		<div class="bodycolor" v-if="fliter.data6.length>0">
			<div class="wraperwidth">
				<div v-for="(item,index) in fliter.data6" :key=index>
					<div class="cnbox">
						<div class="cnbox1">
							<div class="cnbox3">
								<p class="cnboxp1"><span>{{item.yday}}</span>{{item.yyear}}</p>
								<p class="cnboxp2">{{item.ytitle}}</p>
							</div>
						</div>
					</div>
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
						<li v-for="(item,index) in li7" class="li" :key=index>
							<span @click="changepage(item,item)">{{item}}</span>
						</li>
						<li @click="next"><span>下一页</span></li>
					</ul>
				</div>
			</div>
		</div>
    <div class="bodycolor colorwhite" v-if="fliter.data6.length<1">
         <p class="expect">敬请期待</p>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle="营销活动"></Nav>
		<div class="midbodycolor" v-if="fliter.data6.length>0">
			<div class="midwraperwidth">
				<div v-for="(item,index) in fliter.data6" :key=index>
					<div class="midcnbox">
						<div class="midcnbox1">
							<div class="midcnbox3">
								<p class="midcnboxp1"><span>{{item.yday}}</span>{{item.yyear}}</p>
								<p class="midcnboxp2">{{item.ytitle}}</p>
							</div>
						</div>
					</div>
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
						<li v-for="(item,index) in li7" class="li" :key=index>
							<span @click="changepage(item,item)">{{item}}</span>
						</li>
						<li @click="next"><span>下一页</span></li>
					</ul>
				</div>
			</div>
		</div>
    <div class="midbodycolor colorwhite" v-if="fliter.data6.length<1">
         <p class="expect">敬请期待</p>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle="营销活动"></Nav>
		<div class="mobilebodycolor" v-if="fliter.data6.length>0">
			<div class="mobilewraperwidth">
        <div class="mobileindex-news-content-top-boxx" v-for="(item,index) in fliter.data6" :key=index>
							<i>
								<span class="mobileindex-news-content-span">
									<p class="mobileindex-news-p1"><span class="mobileindex-news-content-year">{{item.yday}}</span><span class="mobileindex-news-content-month">{{item.yyear}}</span></p>
									<p class="mobileindex-news-p2">{{item.ytitle}}</p>
								</span>
							</i>
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
		</div>
    <div v-if="fliter.data6.length<1">
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
        type: '3',
        limit: 8,
        page: 1
      }
    }
  },
  methods: {},
  components: {
    Nav
  },
  created () {
    this.getData()
    this.width = document.documentElement.offsetWidth
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
p,
img,
ul,
li {
  margin: 0;
  padding: 0;
}

.bodycolor {
  background: #f5f5f5;
  margin-top: 50px;
  padding-top: 50px;
}

.wraperwidth {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 20px;
}

.cnbox {
  width: 490px;
  float: left;
  display: flex;
  margin-top: 20px;
}

.cnbox:nth-of-type(2n + 1) {
  margin-right: 10px;
}

.cnbox1 {
  width: 490px;
  height: 210px;
  background: white;
  position: relative;
}

.cnbox3 {
  width: 450px;
  height: 160px;
  margin: 20px;
  padding-top: 10px;
  background: #f5f5f5;
}

.cnboxp1 {
  color: #ee882a;
  margin-left: 40px;
}

.cnboxp1 span {
  font-size: 36px;
}

.cnboxp2 {
  margin-top: 20px;
  margin-left: 40px;
  font-weight: bold;
}
.cnboxp3 {
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 20px;
  font-size: 12px;
  color: #666666;
}
.midbodycolor {
  background: #f5f5f5;
  margin-top: 50px;
  padding-top: 50px;
}

.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 20px;
}

.midcnbox {
  width: 700px;
  float: left;
  display: flex;
  margin-top: 20px;
}

.midcnbox:nth-of-type(2n + 1) {
  margin-right: 10px;
}

.midcnbox1 {
  width: 700px;
  height: 210px;
  background: white;
  position: relative;
}

.midcnbox3 {
  width: 640px;
  height: 160px;
  margin: 20px;
  padding-top: 10px;
  background: #f5f5f5;
}

.midcnboxp1 {
  color: #ee882a;
  margin-left: 40px;
}

.midcnboxp1 span {
  font-size: 48px;
}

.midcnboxp2 {
  margin-left: 40px;
  font-weight: bold;
}
.midcnboxp3 {
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 20px;
  font-size: 12px;
  color: #666666;
}
.page {
  margin-top: 30px;
}

.page ul {
  overflow: hidden;
  height: 50px;
  width: 700px;
  list-style: none;
  margin: 30px auto;
}

.page ul li {
  float: left;
  margin-left: 20px;
  border: solid 1px #5b6270;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background: white;
}

.page ul li:hover {
  color: #ee882a;
  border: solid 1px #ee882a;
}

.page ul li span {
  padding: 0 15px;
  background: white;
}
i{
  font-style: normal;
}
.mobilebodycolor {
  background: #f5f5f5;
  margin-top: 20px;
  padding-top: 20px;
}

  .mobilenothing{
    margin: 100px auto;
    text-align: center;
    color: #ee882a;
    font-weight: 600;
    padding-top: 50px;
  }
.mobilewraperwidth {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.mobileindex-news-content-top-boxx{
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  height: 105px;
  position: relative;
}

.mobileindex-news-content-top-boxx i {
  width: 100%;
  height: 105px;
  top: 0;
  left: 0;
  position: absolute;
  background: white;
}

.mobileindex-news-content-top-boxx i .mobileindex-news-content-span {
  display: block;
  width: 94%;
  height: 80px;
  background: #f0f2f2;
  z-index: 2;
  margin: 7px 3%;
  position: relative;
  z-index: 12
}

.mobileindex-news-content-top-img{
  width: 50%;
  margin-left: 50%;
  height: 105px;
  position: relative;
  z-index: 11
}
.mobileindex-news-content-top-boxx i .mobileindex-news-content-span .mobileindex-news-p1 {
  margin-left: 25px;
}

.mobileindex-news-p2 {
  margin-top: 10px;
  text-shadow: 0.1px 0.1px 0.1px black;
  margin-left: 10px;
  font-size: 12px;
  text-indent: 1.5em;
}

.mobileindex-news-content-year {
  font-size: 20px;
  color: #ee882a;
}

.mobileindex-news-content-month {
  font-size: 8px;
  color: #ee882a;
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
.mobileindex-news-p3{
  width: 100%;
  overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size:12px;
    text-indent: 2em;
    margin-top: 5px;
}
.colorwhite{
  background: white;
  padding-top: 0;
  margin-top: 0;
}
.expect{
  color:#ee882a;
  margin: 80px auto;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
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
#active {
  color: #ee882a;
  border: solid 1px #ee882a;
}
</style>

<template>
<div>
	<div v-if="width<1500&&width>640">
		<div><img class="headerbg" src="../../../images/about-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/about/culture'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/about1.jpg" id="hrimg1" />
						<img src="../../../images/about1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/about/footprint'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/about2.jpg" id="hrimg3" />
						<img src="../../../images/about2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/about/honor'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/about3.jpg" id="hrimg5" />
						<img src="../../../images/about3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/about/framework'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../images/about4.jpg" id="hrimg7" />
						<img src="../../../images/about4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
    <div v-if="this.$route.path==='/about'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="bottom">
			<p class="stp"> 老外仓国际贸易有限责任公司成立于2017年3月，注册资本伍仟万元，是一家新型的中外合资企业。团队成员主要来自中国和意大利两个国家。老外仓专注于甄选优质进口食品，致力于为国内消费者提供更多更好的来自于意大利的绿色食品。在国外厂商的合作选择上，老外仓精选了意大利500+优质厂商，主要负责采购、品控、物流销售以及提供完善的售后服务体系，通过链接国外厂商和国内经销商，为国内消费者带去好商品、好价格、好服务。
    进口原产地，食品纯天然，健康无污染是老外仓在选择进口食品时的三大前提。在挑选意大利进口食品上，老外仓始终以迎合中国消费者口味为第一目的，重视品质，注重口感，旨在为中国消费者带去一种真正意义上的味觉盛宴。</p>
      <p class="stp">老外仓是一个非常富有爱心、责任心、诚心的企业，在经营上始终坚持品质、安全、创新三位为一体的管理理念，秉持一贯的严谨态度，深入世界各地,严格把关所有商品的产地、工艺、原材料, 甄选饮食、居家、厨房等各类商品,以消费者需求为第一位，力求给消费者提供最优质的商品，并努力为国内的经销商打造一条优质的进口食品供应链，成为行业内的领军企业。</p>
			</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<Foot></Foot>
	</div>
  <div v-if="width>=1500">
		<div><img class="midheaderbg" src="../../../images/about-ban.jpg"></div>
		<div class="midwraperwidth">
			<div class="midhrroute">
				<router-link to='/about/culture'>
					<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/about1.jpg" id="hrimg1" />
						<img src="../../../images/about1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/about/footprint'>
					<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/about2.jpg" id="hrimg3" />
						<img src="../../../images/about2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/about/honor'>
					<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/about3.jpg" id="hrimg5" />
						<img src="../../../images/about3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/about/framework'>
					<div class="heroutebox1" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../images/about4.jpg" id="hrimg7" />
						<img src="../../../images/about4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/about'">
			<div>
				<Nav navtitle="关于我们"></Nav>
			</div>
			<div class="midbottom">
			<p class="midstp"> 老外仓国际贸易有限责任公司成立于2017年3月，注册资本伍仟万元，是一家新型的中外合资企业。团队成员主要来自中国和意大利两个国家。老外仓专注于甄选优质进口食品，致力于为国内消费者提供更多更好的来自于意大利的绿色食品。在国外厂商的合作选择上，老外仓精选了意大利500+优质厂商，主要负责采购、品控、物流销售以及提供完善的售后服务体系，通过链接国外厂商和国内经销商，为国内消费者带去好商品、好价格、好服务。
    进口原产地，食品纯天然，健康无污染是老外仓在选择进口食品时的三大前提。在挑选意大利进口食品上，老外仓始终以迎合中国消费者口味为第一目的，重视品质，注重口感，旨在为中国消费者带去一种真正意义上的味觉盛宴。</p>
      <p class="midstp">老外仓是一个非常富有爱心、责任心、诚心的企业，在经营上始终坚持品质、安全、创新三位为一体的管理理念，秉持一贯的严谨态度，深入世界各地,严格把关所有商品的产地、工艺、原材料, 甄选饮食、居家、厨房等各类商品,以消费者需求为第一位，力求给消费者提供最优质的商品，并努力为国内的经销商打造一条优质的进口食品供应链，成为行业内的领军企业。</p>
			</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<Foot></Foot>
	</div>
  <div v-if="width<=640">
		<About></About>
	</div>
</div>
</template>

<script>
import Foot from '../common/footer.vue'
import About from './mobile/about.vue'
export default {
  data () {
    return {
      width: 1920
    }
  },
  methods: {
    imgchange () {
      document.getElementById('hrimg3').style.left = -160 + 'px'
      document.getElementById('hrimg3').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg4').style.left = 0 + 'px'
      document.getElementById('hrimg4').setAttribute('class', 'imgchangl')
    },
    imgchange1 () {
      document.getElementById('hrimg3').style.left = 0 + 'px'
      document.getElementById('hrimg3').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg4').style.left = 160 + 'px'
      document.getElementById('hrimg4').setAttribute('class', 'imgchangq')
    },
    imgchange2 () {
      document.getElementById('hrimg1').style.left = -160 + 'px'
      document.getElementById('hrimg1').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg2').style.left = 0 + 'px'
      document.getElementById('hrimg2').setAttribute('class', 'imgchangl')
    },
    imgchange3 () {
      document.getElementById('hrimg1').style.left = 0 + 'px'
      document.getElementById('hrimg1').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg2').style.left = 160 + 'px'
      document.getElementById('hrimg2').setAttribute('class', 'imgchangq')
    },
    imgchange4 () {
      document.getElementById('hrimg5').style.left = -160 + 'px'
      document.getElementById('hrimg5').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg6').style.left = 0 + 'px'
      document.getElementById('hrimg6').setAttribute('class', 'imgchangl')
    },
    imgchange5 () {
      document.getElementById('hrimg5').style.left = 0 + 'px'
      document.getElementById('hrimg5').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg6').style.left = 160 + 'px'
      document.getElementById('hrimg6').setAttribute('class', 'imgchangq')
    },
    imgchange6 () {
      document.getElementById('hrimg7').style.left = -160 + 'px'
      document.getElementById('hrimg7').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg8').style.left = 0 + 'px'
      document.getElementById('hrimg8').setAttribute('class', 'imgchangl')
    },
    imgchange7 () {
      document.getElementById('hrimg7').style.left = 0 + 'px'
      document.getElementById('hrimg7').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg8').style.left = 160 + 'px'
      document.getElementById('hrimg8').setAttribute('class', 'imgchangq')
    }
  },
  components: {
    Foot,
    About
  },
  created () {
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
.wraperwidth {
  width: 1000px;
  margin: 0 auto;
}

.headerbg {
  width: 100%;
  min-width: 1000px;
}

.hrroute {
  text-align: center;
}

.heroutebox1 {
  display: inline-block;
  position: relative;
  height: 160px;
  width: 160px;
  margin: 50px;
  cursor: pointer;
  z-index: 11;
  overflow: hidden;
}
.navimg {
  height: 120px;
  width: 120px;
  margin: 30px;
}
.navimg img{
  width: 100%;
}

.heroutebox1 img:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 0;
}

.heroutebox1 img:nth-of-type(2) {
  position: absolute;
  top: 0px;
  left: 160px;
}

.heroutebox1 .imgchangq {
  opacity: 0;
  transition: all 0.5s;
}

.heroutebox1 .imgchangl {
  opacity: 1;
  transition: all 0.5s;
}

.bottom {
  padding:0 140px;
  width: 720px;
  text-align: left;
  margin: 0 auto;
}

.stp {
  margin-top: 20px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
  text-indent: 2em;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
}

.midheaderbg {
  width: 100%;
  min-width: 1420px;
}

.midhrroute {
  text-align: center;
}

.midbottom {
  width: 1420px;
  margin: 0 auto;
}

.midstp {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
}
</style>

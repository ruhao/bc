<template>
<div>
	<div v-if="width<1500&&width>640">
		<div><img class="headerbg" src="../../../images/join-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/hr/strategy'>
				<div class="heroutebox1 navimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/hr/train'>
				<div class="heroutebox1 navimg" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/hr/advertises'>
				<div class="heroutebox1 navimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/hr'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="bottom">
			<p class="stp">老外仓是一个有梦想的企业，企业需要最专业的人才去共同创造。进口食品产业的特性决定了团队是我们的成功根本，人才是我们的生命。我们在事业中投入的不仅是资源，还有知识、文化和情感。我们以做人的态度去做进口食品产业。</p>
			<p class="stp">我们的理念是以共同的理想和一流的平台引优秀的人才，给予最大的信任托付。所以我们寻找的是伙伴，不是雇员；所以我们的伙伴应该有一流的品质、才华与胸襟。这是我们的基本逻辑。</p>
			<p class="stp">理想与信任是我们团队形成的基础。我们志存高远，所以不能容忍蝇营狗苟；我们是如此的珍惜这种信任，因而不能容忍道德上的任何瑕疵。如此才能保证团队的纯洁，才有企业的长青。</p>
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
		<div><img class="midheaderbg" src="../../../images/join-ban.jpg"></div>
		<div class="midwraperwidth">
			<div class="midhrroute">
				<router-link to='/hr/strategy'>
				<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/hr/train'>
				<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/hr/advertises'>
				<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/hr'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="midbottom">
			<p class="midstp">老外仓是一个有梦想的企业，企业需要最专业的人才去共同创造。进口食品产业的特性决定了团队是我们的成功根本，人才是我们的生命。我们在事业中投入的不仅是资源，还有知识、文化和情感。我们以做人的态度去做进口食品产业。</p>
			<p class="midstp">我们的理念是以共同的理想和一流的平台引优秀的人才，给予最大的信任托付。所以我们寻找的是伙伴，不是雇员；所以我们的伙伴应该有一流的品质、才华与胸襟。这是我们的基本逻辑。</p>
			<p class="midstp">理想与信任是我们团队形成的基础。我们志存高远，所以不能容忍蝇营狗苟；我们是如此的珍惜这种信任，因而不能容忍道德上的任何瑕疵。如此才能保证团队的纯洁，才有企业的长青。</p>
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
      <Hrr></Hrr>
    </div>
  </div>
</template>

<script>
import Foot from '../common/footer.vue'
// 模块导入
import Nav from '../common/nav.vue'
import Hrr from './mobile/hr.vue'
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
    }
  },
  components: {
    Foot,
    Nav,
    Hrr
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
.headerbg {
  width: 100%;
  min-width: 1000px;
  text-align: center;
}
.wraperwidth {
  width: 1000px;
  margin: 0 auto;
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
  width: 900px;
  margin: 0 auto;
  padding: 0 40px;
}
.stp {
  margin-top: 15px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
  text-indent: 2em;
}
.midheaderbg {
  width: 100%;
  min-width: 1420px;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
}
.midhrroute {
  text-align: center;
}
.midbottom {
  width: 1420px;
  margin: 0 auto;
}
.midstp {
  margin-top: 15px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
}
</style>

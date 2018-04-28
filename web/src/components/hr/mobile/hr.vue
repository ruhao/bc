<template>
	<div>
		<div><img class="mobileheaderbg" src="../../../../images/join-ban.jpg"></div>
		<div class="mobilewraperwidth">
			<div class="mobilehrroute ">
				<router-link to='/hr/strategy1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/hr/train1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/hr/advertises1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/hr'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="mobilebottom">
			<p class="mobilestp">老外仓是一个有梦想的企业，企业需要最专业的人才去共同创造。进口食品产业的特性决定了团队是我们的成功根本，人才是我们的生命。我们在事业中投入的不仅是资源，还有知识、文化和情感。我们以做人的态度去做进口食品产业。</p>
			<p class="mobilestp">我们的理念是以共同的理想和一流的平台引优秀的人才，给予最大的信任托付。所以我们寻找的是伙伴，不是雇员；所以我们的伙伴应该有一流的品质、才华与胸襟。这是我们的基本逻辑。</p>
			<p class="mobilestp">理想与信任是我们团队形成的基础。我们志存高远，所以不能容忍蝇营狗苟；我们是如此的珍惜这种信任，因而不能容忍道德上的任何瑕疵。如此才能保证团队的纯洁，才有企业的长青。</p>
			</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../../common/footer.vue'
// 模块导入
import Nav from '../../common/nav.vue'
export default {
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
    Nav
  },
  created () {}
}
</script>

<style scoped>
.mobileheaderbg {
  width: 100%;
}
.mobilewraperwidth {
  width: 100%;
}
.mobilehrroute {
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
}
.heroutebox1 .imgchangl {
  opacity: 1;
}
.mobilebottom {
  width: 100%;
}
.mobilestp {
  margin-top: 15px;
  font-size: 10px;
  color: #666666;
  line-height: 16px;
  padding: 0 15px;
  text-indent: 2em;
}
.mobileimg{
  width: 22%;
  margin: 5px 0 0;
  margin-right: 5px;
  max-height: 85px;
}
.mobileimg img{
  width: 100%;
}
</style>

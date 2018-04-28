<template>
<div>
	<div v-if="width<1500&&width>640">
		<div><img class="headerbg" src="../../../images/news-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/news/'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/news1.jpg" id="hrimg1" />
						<img src="../../../images/news1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/news/industrydynamics'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/news2.jpg" id="hrimg3" />
						<img src="../../../images/news2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/news/companyphotos'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/news3.jpg" id="hrimg5" />
						<img src="../../../images/news3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/news/marketing'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../images/news4.jpg" id="hrimg7" />
						<img src="../../../images/news4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
  <div v-if="width>=1500">
		<div><img class="midheaderbg" src="../../../images/news-ban.jpg"></div>
		<div class="midwraperwidth">
			<div class="midhrroute">
				<router-link to='/news/'>
					<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/news1.jpg" id="hrimg1" />
						<img src="../../../images/news1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/news/industrydynamics'>
					<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/news2.jpg" id="hrimg3" />
						<img src="../../../images/news2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/news/companyphotos'>
					<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/news3.jpg" id="hrimg5" />
						<img src="../../../images/news3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/news/marketing'>
					<div class="heroutebox1" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../images/news4.jpg" id="hrimg7" />
						<img src="../../../images/news4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
  <div v-if="width<=640">
    <News></News>
	</div>
</div>
</template>

<script>
import Foot from '../common/footer.vue'
import News from './mobile/news.vue'
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
    News
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
  text-align: center;
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
  width: 1280px;
  margin: 0 auto;
}
.stp {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
}
.mobilewraperwidth {
  width: 100%;
  margin: 0 auto;
}

.mobileheaderbg {
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
.mobileimg{
  width: 22%;
  margin: 5px 0 0;
  margin-right: 5px;
  max-height: 85px;
}
.mobileimg img{
  width: 100%;
}
.navimg {
  height: 120px;
  width: 120px;
  margin: 30px;
}
.navimg img{
  width: 100%;
}
</style>

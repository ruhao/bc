<template>
	<div>
		<div><img class="mobileheaderbg" src="../../../../images/news-ban.jpg"></div>
		<div class="mobilewraperwidth">
			<div class="mobilehrroute">
				<router-link to='/news/'>
					<div class="heroutebox1 mobileimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../../images/news1.jpg" id="hrimg1" />
						<img src="../../../../images/news1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/news/industrydynamics'>
					<div class="heroutebox1 mobileimg" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../../images/news2.jpg" id="hrimg3" />
						<img src="../../../../images/news2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/news/companyphotos'>
					<div class="heroutebox1 mobileimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../../images/news3.jpg" id="hrimg5" />
						<img src="../../../../images/news3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/news/marketing'>
					<div class="heroutebox1 mobileimg" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../../images/news4.jpg" id="hrimg7" />
						<img src="../../../../images/news4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>

</template>

<script>
import Foot from '../../common/footer.vue'
export default {
  data () {
    return {}
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
    Foot
  },
  created () {}
}
</script>

<style scoped>
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
</style>

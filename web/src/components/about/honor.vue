<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='资质荣誉'></Nav>
		<div class="wraperwidth">
			<div v-for="(item,index) in this.fliter.data6" :key=index>
				<div v-if="item.num%2==0" class="honor">
					<div class="honor1">
						<img :src="item.imgurl">
					</div>
					<div class="honor2">
						<img :src="item.bgimg" />
						<div class="honorcontent">
							<p class="honortitle">{{item.title}}</p>
							<p class="honorcontentp" v-for="(it,ind) in item.content" :key=ind>
								{{it}}
							</p>
						</div>
					</div>
				</div>
				<div v-else class="honor">
					<div class="honor2">
						<img :src="item.bgimg" />
						<div class="honorcontent">
							<p class="honortitle">{{item.title}}</p>
							<p class="honorcontentp" v-for="(it,ind) in item.content" :key=ind>
								{{it}}
							</p>
						</div>
					</div>
					<div class="honor1">
						<img :src="item.imgurl">
					</div>
				</div>
			</div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='资质荣誉'></Nav>
		<div class="midwraperwidth">
			<div v-for="(item,index) in this.fliter.data6" :key=index>
				<div v-if="item.num%2==0" class="midhonor">
					<div class="midhonor1">
						<img :src="item.imgurl">
					</div>
					<div class="midhonor2">
						<img :src="item.bgimg" />
						<div class="midhonorcontent">
							<p class="midhonortitle">{{item.title}}</p>
							<p class="midhonorcontentp" v-for="(it,ind) in item.content" :key=ind>
								{{it}}
							</p>
						</div>
					</div>
				</div>
				<div v-else class="midhonor">
					<div class="midhonor2">
						<img :src="item.bgimg" />
						<div class="midhonorcontent">
							<p class="midhonortitle">{{item.title}}</p>
							<p class="midhonorcontentp" v-for="(it,ind) in item.content" :key=ind>
								{{it}}
							</p>
						</div>
					</div>
					<div class="midhonor1">
						<img :src="item.imgurl">
					</div>
				</div>
			</div>
		</div>
	</div>
  <div v-if="width<=640">
			<Nav navtitle='资质荣誉'></Nav>
		<div class="mobilewraperwidth">
			<div v-for="(item,index) in this.fliter.data6" :key=index>
				<div class="mobilehonor">
					<div class="mobilehonor1">
						<img :src="item.imgurl">
					</div>
					<div class="mobilehonor2">
						<img :src="item.bgimg" />
						<div class="mobilehonorcontent">
							<p class="mobilehonortitle">{{item.title}}</p>
							<p class="mobilehonorcontentp" v-for="(it,ind) in item.content" :key=ind>
								{{it}}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  data () {
    return {
      width: 1920,
      fliter: {
        data6: [],
        type: '1',
        limit: 8
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.width = document.documentElement.offsetWidth
    this.$http
      .post(this.getTest() + '/about/list', this.fliter)
      .then(res => {
        let ii = res.data.rows.length
        for (let i = 0; i < ii; i++) {
          res.data.rows[i].content = res.data.rows[i].content.replace(
            /；/g,
            ';'
          )
          res.data.rows[i].content = res.data.rows[i].content.split(';')
          let ll = res.data.rows[i].content.length
          for (let j = 0; j < ll; j++) {
            res.data.rows[i].content[j] = res.data.rows[i].content[j] + ';'
          }
          res.data.rows[i].num = i
        }

        this.fliter.data6 = res.data.rows
      })
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
img {
  margin: 0;
  padding: 0;
}

.wraperwidth {
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
}

.honor {
  display: flex;
}

.honor1 {
  width: 495px;
  height: 204px;
  overflow: hidden;
}

.honor2 {
  width: 495px;
  height: 204px;
  overflow: hidden;
  position: relative;
}

.honor1 img {
  width: 100%;
  height: 100%;
}

.honor2 .honorcontent {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
.honortitle {
  margin-left: 50px;
  margin-top: 35px;
  font-size: 28px;
  color: #ee882a;
  margin-bottom: 35px;
  text-indent: 0.8em;
}
.honorcontentp {
  margin-left: 50px;
  margin-right: 50px;
  font-size: 12px;
  line-height: 25px;
  color: #5b6270;
  letter-spacing: 2px;
  text-indent: 1.5em;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
  margin-top: 50px;
}

.midhonor {
  display: flex;
}

.midhonor1 {
  width: 710px;
  height: 300px;
  overflow: hidden;
}

.midhonor2 {
  width: 710px;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.midhonor1 img {
  width: 100%;
  height: 100%;
}

.midhonor2 .midhonorcontent {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
.midhonortitle {
  margin-left: 50px;
  margin-top: 35px;
  font-size: 28px;
  color: #ee882a;
  margin-bottom: 35px;
  text-indent: 0.8em;
}
.midhonorcontentp {
  margin-left: 50px;
  margin-right: 50px;
  font-size: 12px;
  line-height: 25px;
  color: #5b6270;
  letter-spacing: 2px;
  text-indent: 1.5em;
}
.mobilewraperwidth {
  width: 100%;
  margin-top: 20px;
}

.mobilehonor {
}

.mobilehonor1 {
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
    font-size: 0;
}

.mobilehonor2 {
  width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
    font-size: 0;
}

.mobilehonor1 img {
  width: 100%;
  font-size: 0;
}
.mobilehonor2 img{
  width: 100%;
}

.mobilehonor2 .mobilehonorcontent {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
.mobilehonortitle {
  margin-left: 20px;
  margin-top: 15px;
  font-size: 18px;
  color: #ee882a;
  margin-bottom: 15px;
}
.mobilehonorcontentp {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 10px;
  line-height: 18px;
  color: #5b6270;
  letter-spacing: 2px;
  text-indent: 1.5em;
}
</style>

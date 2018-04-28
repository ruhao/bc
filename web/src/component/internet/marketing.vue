<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='公司服务'></Nav>
		<div class='wraperwidth'>
			<p class='titleex'>老外仓秉持“客户至上，服务为本，质量第一，创新领先”的服务理念，争取为每一位选择老外仓的客户满足他们的一切个性化需求，努力做到服务至上，争取为每一位客户带去最大化的价值和最独一无二的服务体验。</p>
			<div>
				<img class='imgsize' src='../../../images/index-network.jpg' />
				<div class='index-internet-content'>
					<div class='index-internet-content'>
						<!--循环数据-->
						<div class='index-internet-box' v-for='(item,index) in internet' :key=index>
							<p class='index-internet-body-p1'>{{item.num}}</p>
							<p class='index-internet-body-p2'>{{item.introduction}}</p>
						</div>
						<div style='clear: both;'></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='公司服务'></Nav>
		<div class='midwraperwidth'>
			<p class='midtitleex'>老外仓秉持“客户至上，服务为本，质量第一，创新领先”的服务理念，争取为每一位选择老外仓的客户满足他们的一切个性化需求，努力做到服务至上，争取为每一位客户带去最大化的价值和最独一无二的服务体验。</p>
			<div>
				<img class='midimgsize' src='../../../images/index-network.jpg' />
				<div class='midindex-internet-content'>
					<div class='midindex-internet-content'>
						<!--循环数据-->
						<div class='midindex-internet-box' v-for='(item,index) in internet' :key=index>
							<p class='midindex-internet-body-p1'>{{item.num}}</p>
							<p class='midindex-internet-body-p2'>{{item.introduction}}</p>
						</div>
						<div style='clear: both;'></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle='公司服务'></Nav>
		<div class='mobilewraperwidth mobileindex-internet-body'>
			<p class='mobiletitleex'>老外仓秉持“客户至上，服务为本，质量第一，创新领先”的服务理念，争取为每一位选择老外仓的客户满足他们的一切个性化需求，努力做到服务至上，争取为每一位客户带去最大化的价值和最独一无二的服务体验。</p>
			<img class="mobileimgsizein" src="../../../images/index-network.jpg" />
			<div class="mobileindex-internet-content">
					<!--循环数据-->
					<div class="mobileindex-internet-box" v-for="(item,index) in internet" :key=index>
						<p class="mobileindex-internet-body-p1">{{item.num}}</p>
						<p class="mobileindex-internet-body-p2">{{item.introduction}}</p>
					</div>
					<div style="clear: both;"></div>
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
      internet: [
        {
          num: '860+',
          introduction: '我们合作品牌的数量已达到860多个'
        },
        {
          num: '125+',
          introduction: '我们公司产品历史悠久，每一件都很经典'
        },
        {
          num: '1000+',
          introduction: '我们的产品数量已达到1000多个'
        },
        {
          num: 'TOP',
          introduction: '我们是业内最好的公司之一'
        }
      ]
    }
  },
  components: {
    Nav
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
  position: relative;
}

.titleex {
  margin-top: 45px;
  font-size: 14px;
  color: #c2c2c2;
  position: relative;
}

.index-internet-body {
  width: 100%;
  position: relative;
}
.index-internet-content {
  position: absolute;
  width: 1000px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

.index-internet-box {
  width: 25%;
  padding: 150px 20px 0 20px;
  float: left;
  text-align: center;
}

.index-internet-box:nth-of-type(1) {
  margin: 0;
}
.imgsize {
  width: 100%;
}
.imgsize img{
  width: 100%;
}
.in .index-internet-title-introduction {
  font-size: 14px;
  color: #707070;
  text-shadow: 0.4px 0.4px 0.4px #707070;
  margin-top: 20px;
}

.index-internet-body-p1 {
  font-size: 54px;
  color: #ee882a;
  font-weight: bolder;
}

.index-internet-body-p2 {
  font-size: 14px;
  color: #ee882a;
  text-shadow: 0.4px 0.4px 0.4px #ee882a;
  margin-top: 20px;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
  position: relative;
}

.midtitleex {
  margin-top: 45px;
  font-size: 14px;
  color: #c2c2c2;
  position: relative;
}

.midindex-internet-body {
  width: 100%;
  position: relative;
}
.midindex-internet-content {
  position: absolute;
  width: 1420px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.midindex-internet-box {
  width: 185px;
  padding: 150px 20px 0 20px;
  float: left;
  text-align: center;
  margin-left: 160px;
}

.midindex-internet-box:nth-of-type(1) {
  margin: 0;
}
.midimgsize {
  width: 100%;
}
.midindex-internet-title-introduction {
  font-size: 14px;
  color: #707070;
  text-shadow: 0.4px 0.4px 0.4px #707070;
  margin-top: 20px;
}

.midindex-internet-body-p1 {
  font-size: 54px;
  color: #ee882a;
  font-weight: bolder;
}

.midindex-internet-body-p2 {
  font-size: 14px;
  color: #ee882a;
  text-shadow: 0.4px 0.4px 0.4px #ee882a;
  margin-top: 20px;
}
.mobilewraperwidth {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.mobiletitleex {
  margin-top: 20px;
  font-size: 12px;
  color: #c2c2c2;
  position: relative;
  text-indent: 2em;
  line-height: 18px;
  letter-spacing: 1px;
}

.mobileindex-internet-body {
  width: 100%;
  position: relative;
}
.mobileindex-internet-content {
  position: absolute;
  width: 100%;
  margin: 40px auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.mobileindex-internet-title {
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #f1662c;
}
.mobileimgsizein{
  width: 200%;
  margin-top: 0px;
  height: 200px;
  margin-left:-50%;
}
.mobileindex-internet-box {
  width: 50%;
  float: left;
  text-align: center;
   margin-top: 120px;
}

.mobileindex-internet-box:nth-of-type(n+3) {
  margin: 0;
}

.mobileindex-internet-title-introduction {
  font-size: 10px;
  color: #707070;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
}

.mobileindex-internet-body-p1 {
  margin-top: 15px;
  font-size: 28px;
  color: #ee882a;
  font-weight: 600;
  margin-bottom: 5px
}

.mobileindex-internet-body-p2 {
  font-size: 10px;
  color: #ee882a;
  margin: 5px 10px 0;
}
</style>

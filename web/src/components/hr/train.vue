<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle="人才培训"></Nav>
		<div class="traincontent">
			<p class="traincontent-tcontent">培训体系是集团人才培养体系的重要组成部分，也是优秀的声誉体系之一。在培训模式上，该组采用混合培训，包括在职培训、课堂培训、在线培训、远程培训等。在职培训是最重要的组成部分之一，包括直接经理制、导师制等。</p>
			<div v-for="(item,index) in this.fliter.data6" :key=index>
				<p class="traindetail-title">{{item.edpattern}}</p>
				<p class="traincontent-tcontent">{{item.edcontent}}</p>
				<div class="traindetail-content">
					<img :src="item.edimgurl">
					<img :src="item.edimgurl1">
				</div>
			</div>
			<p class="traincontent-bottom">
				当公司出现岗位空缺时，将优先从战略人才库中选拔适合人选，战略人才库中没有适合人选的，在考虑从公司外部引入适合人才。
			</p>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle="人才培训"></Nav>
		<div class="midtraincontent">
			<p class="midtraincontent-tcontent">老外仓坚持以“内部培养为主、外部培养为辅”的培养原则，将培养对象培养成关键岗位继任者和公司后备人才。通过科学的测评，慎重的甄选，选拔出真正具有领导或专业潜质的后备人才，树立公司用人及人才晋升理念。</p>
			<div v-for="(item,index) in this.fliter.data6" :key=index>
				<p class="midtraindetail-title">{{item.edpattern}}</p>
				<p class="midtraincontent-tcontent">{{item.edcontent}}</p>
				<div class="midtraindetail-content">
					<img :src="item.edimgurl">
					<img :src="item.edimgurl1">
				</div>
			</div>
			<p class="midtraincontent-bottom">
				当公司出现岗位空缺时，将优先从战略人才库中选拔适合人选，战略人才库中没有适合人选的，在考虑从公司外部引入适合人才。
			</p>
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
      information: '',
      fliter: {
        data6: [],
        type: '2',
        limit: 2
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.width = document.documentElement.offsetWidth
    this.$http.post(this.getTest() + '/hr/list', this.fliter).then(res => {
      this.fliter.data6 = res.data.rows
      if (res.data.rows[0]) {
        this.information = res.data.rows[0].edreson
      }
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
p {
  margin: 0;
  padding: 0;
}

.contact-title {
  display: flex;
  width: 440px;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
}

.contact-title p {
  line-height: 24px;
  font-size: 24px;
  flex: 1;
  color: #f1662c;
}

.contact-title img {
  height: 20px;
  margin: 3px 40px;
}
.traincontent {
  width: 900px;
  margin: 30px auto 0;
  padding: 0 40px;
}
.traincontent-title {
  color: #666666;
}
.traincontent-tcontent {
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
  text-indent: 2em;
}
.traindetail-title {
  margin-top: 30px;
  color: #666666;
}
.traindetail-content {
  margin-top: 20px;
  display: flex;
}
.traincontent-bottom {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
  text-indent: 2em;
}
.midcontact-title {
  display: flex;
  width: 440px;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
}

.midcontact-title p {
  line-height: 24px;
  font-size: 24px;
  flex: 1;
  color: #f1662c;
}

.midcontact-title img {
  height: 20px;
  margin: 3px 40px;
}
.midtraincontent {
  width: 1420px;
  margin: 30px auto 0;
}
.midtraincontent-title {
  color: #666666;
}
.midtraincontent-tcontent {
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
}
.midtraindetail-title {
  margin-top: 30px;
  color: #666666;
}
.midtraindetail-content {
  margin-top: 50px;
  display: flex;
}
.midtraincontent-bottom {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
}
</style>

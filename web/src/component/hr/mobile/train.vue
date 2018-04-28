<template>
	<div>
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
</template>

<script>
import Nav from '../../common/nav.vue'
export default {
  data () {
    return {
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
    this.$http.post('http://' + this.getTest() + '/hr/list', this.fliter).then(res => {
      this.fliter.data6 = res.data.rows
      if (res.data.rows[0]) {
        this.information = res.data.rows[0].edreson
      }
    })
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.midtraincontent {
  width: 96%;
  margin: 30px auto 0;
  padding:0 2%;
  min-height: 240px;
}
.midtraincontent-title {
  color: #666666;
  font-size: 14px;
  text-shadow: 0.2px 0.2px 0.2px #666666;
}
.midtraincontent-tcontent {
  margin-top: 10px;
  font-size: 10px;
  color: #666666;
  text-indent: 2em;
}
.midtraindetail-title {
  color: #666666;
  font-size: 14px;
  margin-top: 10px;
}
.midtraindetail-content {
  margin-top: 20px;
  display: flex;
}
.midtraindetail-content img{
  width: 100%;
  height: 200px;
}
.midtraincontent-bottom {
  margin-top: 45px;
    margin-top: 10px;
  font-size: 10px;
  text-indent: 2em;
  color: #666666;
}
</style>

<template>
	<div>
		<Nav navtitle="人才招聘"></Nav>
		<div class="midadbody">
			<div v-if="this.fliter.data6.length>0">
				<div v-for="(item,index) in this.fliter.data6" class="midadhrbox" :key=index>
					<p class="midthistitle">{{item.title}}<p>
					<div class="midcontent-top">
						<div class="midcontent-left">
							<p>招聘人数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.num}}</p>
							<p>学历要求：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.education}}</p>
							<p>年龄要求：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.age}}</p>
							<p>语言要求：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.language}}</p>
						</div>
						<div class="midcontent-left midcontent-right">
							<p>联系电话：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.telephone}}</p>
							<p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.sex}}</p>
							<p>薪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.pay}}</p>
							<p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.site}}</p>
						</div>
					</div>
					<div class="midadrequest">
						<div class="detaillll">详细要求：</div>
						<div>
							<p v-for="(detail,index) in item.detail" :key=index>{{detail}}</p>
						</div>
					</div>
				</div>
			</div>
			<div v-if="this.fliter.data6.length<1">
				<div class="noneed">
					暂无需求
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '../../common/nav.vue'
export default {
  data () {
    return {
      information: [],
      fliter: {
        data6: [],
        type: '3',
        limit: 4
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.$http.post('http://' + this.getTest() + '/hr/list', this.fliter).then(res => {
      this.fliter.data6 = res.data.rows
      let ii = this.fliter.data6.length
      for (let i = 0; i < ii; i++) {
        let arr = this.fliter.data6[i].detail.split('；')
        this.fliter.data6[i].detail = arr
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
.midadbody {
  overflow: hidden;
  width:96%;
  text-align: center;
  margin-top: 15px;
  position: relative;
  padding: 0 2%;
}
.midadhrbox {
  width: 100%;
  height: 180px;
  background: url("../../../../images/hradbg.png");
  background-size: 100% 100%;
  float: left;
  position: relative;
  color: #a3a3a3;
  text-shadow: 0.2px 0.2px 0.2px #a3a3a3;
  margin: 10px auto 0;
}

.midadhrbox:nth-of-type(2n + 1) {
  margin-right: 6px;
  margin-top: 5px;
}

.midcontent-top {
  display: flex;
  margin-top: 10px;
}

.midcontent-left {
      text-overflow:ellipsis;
    white-space:nowrap;
    width: 45%;
    margin-left: 5px;
  text-align: left;
  line-height: 20px;
  font-size: 12px
}
.midcontent-right{
      text-overflow:ellipsis;
    white-space:nowrap;
    width: 55%;
    margin-left: 5px;
}
.midthistitle{
  font-size: 14px;
  margin-top: -5px;
  position: relative;
}
.midadrequest {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 24px;
  font-size: 12px;
  overflow: hidden;
}

.midadrequest .detaillll {
  width: 60px;
  float: left;
}

.midadrequest p {
  height: 24px;
  overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    width: 70%;
    margin-left: 15px;
    float: left;
}
.noneed{
  min-height: 150px;
  padding-top: 100px;
  color: #ee882a;
  font-weight: 600;
}
</style>

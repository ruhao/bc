<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='人才战略'></Nav>
		<div class="bottom">
      <p class="ptitle">一 总体目标 </p>
			<p class="stp">根据老外仓公司总体规划，利用三年时间，围绕公司核心资源、能力、业务，以规范人力资源管理体系、整合组织流程、建立素质模型、优化薪酬激励、积蓄人力资本、构建企业文化为目标，通过人力资源的最大化发展，有力地推动公司向现代化新型企业发展。</p>
			<p class="ptitle">二 团队建设</p>
      <p class="stp">团队建设是人才战略的关键，因为它直接作用于人才战略的核心要素——人。团队建设包括人才的规划、挑选和培育三个方面。</p>
      <p class="ptitle">三 组织管理</p>
      <p class="stp">指根据组织内外环境变化和组织发展战备的需要，不断完善组织长期积累形成的文化化，使其在未来能更好地引导和激励员工，从而为组织提供更优秀的人力资源规划。</p>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='人才战略'></Nav>
		<div class="midbottom">
      <p class="title">老外仓企业人才资源规划</p>
      <p class="ptitle">一 总体目标 </p>
			<p class="midstp">根据老外仓公司总体规划，利用三年时间，围绕公司核心资源、能力、业务，以规范人力资源管理体系、整合组织流程、建立素质模型、优化薪酬激励、积蓄人力资本、构建企业文化为目标，通过人力资源的最大化发展，有力地推动公司向现代化新型企业发展。</p>
			<p class="ptitle">二 团队建设</p>
      <p class="midstp">团队建设是人才战略的关键，因为它直接作用于人才战略的核心要素——人。团队建设包括人才的规划、挑选和培育三个方面。</p>
      <p class="ptitle">三 组织管理</p>
      <p class="midstp">指根据组织内外环境变化和组织发展战备的需要，不断完善组织长期积累形成的文化化，使其在未来能更好地引导和激励员工，从而为组织提供更优秀的人力资源规划。</p>
		</div>
	</div>
  </div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  data () {
    return {
      width: 1920
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
p {
  margin: 0;
  padding: 0;
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
.title{
  margin-top: 30px;
  font-weight: 600;
  text-align: center;
  color: #f1662c;
}
.ptitle{
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
}
</style>

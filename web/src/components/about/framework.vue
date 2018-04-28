  <template>
  <div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='组织机构'></Nav>
		<div class="wraperwidth">
			<img src="../../../images/organization.jpg" class="wraperwidth-img"/>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='组织机构'></Nav>
		<div class="midwraperwidth">
			<img src="../../../images/organization.jpg" />
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle='组织机构'></Nav>
		<div class="midwraperwidth">
			<img src="../../../images/a2.jpg" />
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
.wraperwidth img {
  width: 100%;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
  margin-top: 50px;
}
.midwraperwidth {
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
  text-align: center;
}
.midwraperwidth img{
  min-height: 300px;
  width: 100%;
}
</style>

<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle="网络营销"></Nav>
		<div class="wraperwidth">
			<p class="content">
				{{server}}
			</p>
		</div>
	</div>
  <div v-if="width>1500">
		<Nav navtitle="网络营销"></Nav>
		<div class="midwraperwidth">
			<p class="midcontent">
				{{server}}
			</p>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle="网络营销"></Nav>
		<div class="mobilewraperwidth">
			<p class="mobilecontent">
				{{server}}
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
      server: '',
      width: 1920
    }
  },
  methods: {},
  components: {
    Nav
  },
  created () {
    this.server = this.$route.params.content.content
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

.wraperwidth {
  width: 1000px;
  margin: 45px auto 0;
  padding-bottom: 160px
}

.content {
  color: #666666;
  font-size: 12px;
  text-shadow: 0.5px 0.5px 0.5px #9ba7b5;
  text-indent: 2em;
}
.midwraperwidth {
  width: 1420px;
  margin: 45px auto 0;
}

.midcontent {
  color: #666666;
  font-size: 12px;
  text-shadow: 0.5px 0.5px 0.5px #9ba7b5;
}
.mobilewraperwidth {
  width: 1420px;
  margin: 45px auto 0;
}

.mobilecontent {
  color: #666666;
  font-size: 12px;
  text-indent: 2em;
  text-shadow: 0.5px 0.5px 0.5px #9ba7b5;
  min-height: 210px;
}
</style>

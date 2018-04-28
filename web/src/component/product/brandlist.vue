<template>
<div>
	<div v-if="width<1500&&width>640">
     <Nav navtitle='品牌商家'></Nav>
    <div class='wrapwidth'>所有品牌均按首字母顺序排列</div>
    <div class="wraperwidth" v-for="(item,index) in typeone" :key=index>
      <div v-if="flag[index]==='true'">
      <p class="letter">{{title[index]}}</p>
      <ul>
        <li v-for="(it,ind) in content[index]" :key=ind class="brandlist">
          <router-link :to="'/brand/branddetail/'+it._id" class="fontstyle">
          <div class="brandcontent"><img :src="it.imgurl"></div>
          <div class="brandcontent1"><p>{{it.name}}</P></div>
          </router-link>
        </li>
      </ul>
      <div v-if="pages[index]>1">
       <div class="wrapmore" v-if="content[index].length <= 12">
        <i class="more" @click="getmore(index)">more+ </i>
       </div>
        <div class="wrapmore" v-else>
        <div class="twobutton" v-if="content[index].length % 12==0">
          <i class="more" @click="getmore(index)">more+ </i>
          <i class="more" @click="getless(index)">less- </i>
        </div>
      </div>
      <div class="wrapmore" v-if="content[index].length % 12 != 0">
        <i class="more" @click="getless(index)">less- </i>
       </div>
      </div>
    </div>
    </div>
	</div>
  <div v-if="width>=1500">
     <Nav navtitle='品牌商家'></Nav>
    <div class='midwrapwidth'>所有品牌均按首字母顺序排列</div>
    <div class="midwraperwidth" v-for="(item,index) in typeone" :key=index>
      <div v-if="flag[index]==='true'">
      <p class="midletter">{{title[index]}}</p>
      <ul>
        <li v-for="(it,ind) in content[index]" :key=ind class="midbrandlist">
          <router-link :to="'/brand/branddetail/'+it._id" class="midfontstyle">
          <div class="midbrandcontent"><img :src="it.imgurl"></div>
          <div class="midbrandcontent1"><p>{{it.name}}</P></div>
          </router-link>
        </li>
      </ul>
       <div v-if="pages[index]>1">
       <div class="midwrapmore" v-if="content[index].length <= 12">
        <i class="midmore" @click="getmore(index)">more+ </i>
       </div>
        <div class="midwrapmore" v-else>
        <div class="midtwobutton" v-if="content[index].length % 12==0">
          <i class="midmore" @click="getmore(index)">more+ </i>
          <i class="midmore" @click="getless(index)">less- </i>
        </div>
      </div>
      <div class="midwrapmore" v-if="content[index].length % 12 != 0">
        <i class="midmore" @click="getless(index)">less- </i>
       </div>
      </div>
    </div>
    </div>
	</div>
  <div v-if="width<=640">
         <Nav navtitle='品牌商家'></Nav>
    <div class='mobilewrapwidth'>所有品牌均按首字母顺序排列</div>
    <div class="mobilewraperwidth" v-for="(item,index) in typeone" :key=index>
      <div v-if="flag[index]==='true'">
      <p class="mobileletter">{{title[index]}}</p>
      <ul class="moul">
        <li v-for="(it,ind) in content[index]" :key=ind class="mobilebrandlist">
          <router-link :to="'/brand/branddetail/'+it._id" class="mobilefontstyle">
          <div class="mobilebrandcontent"><img :src="it.imgurl"></div>
          <div class="mobilebrandcontent1"><p>{{it.name}}</P></div>
          </router-link>
        </li>
      </ul>
      <div v-if="pages[index]>1">
       <div class="mobilewrapmore" v-if="content[index].length <= 12">
        <i class="mobilemore" @click="getmore(index)">more+ </i>
       </div>
        <div class="mobilewrapmore" v-else>
        <div class="mobiletwobutton" v-if="content[index].length % 12==0">
          <i class="mobilemore" @click="getmore(index)">more+ </i>
          <i class="mobilemore" @click="getless(index)">less- </i>
        </div>
      </div>
      <div class="mobilewrapmore" v-if="content[index].length % 12 != 0">
        <i class="mobilemore" @click="getless(index)">less- </i>
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
      typeone: ['1', '2', '3', '4', '5'],
      title: ['A ~ G', 'H ~ N', 'O ~ T', 'U ~ Z', 'U ~ Z', '其 他'],
      flag: [],
      pages: [],
      content: [],
      fliter: {
        limit: 12,
        page: 1,
        type: ''
      }
    }
  },
  methods: {
    getData (index) {
      this.fliter.type = this.typeone[index]
      this.$http.post('http://' + this.getTest() + '/brand/list', this.fliter).then(res => {
        this.pages.push(res.data.pages)
        this.content.push(res.data.rows)
        if (res.data.rows.length > 0) {
          this.flag.push('true')
        } else {
          this.flag.push('flase')
        }
        if (Number(this.typeone[index]) < 5) {
          this.getData(index + 1)
        }
      })
    },
    getmore (index) {
      this.fliter.limit = this.fliter.limit + 12
      this.fliter.type = this.typeone[index]
      this.$http.post('http://' + this.getTest() + '/brand/list', this.fliter).then(res => {
        this.content[index] = res.data.rows
        this.flag.push('flase')
      })
    },
    getless (index) {
      this.fliter.limit = 12
      this.fliter.type = this.typeone[index]
      this.$http.post('http://' + this.getTest() + '/brand/list', this.fliter).then(res => {
        this.content[index] = res.data.rows
        this.flag.push('flase')
      })
    }
  },
  components: {
    Nav
  },
  created () {
    this.width = document.documentElement.offsetWidth
    this.getData(0)
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.wrapwidth{
  width: 1000px;
  margin-top: 20px;
  text-align: center;
  text-shadow: 0.3px 0.3px 0.3px black;
}
.wraperwidth{
  width: 1000px;
  margin-top: 50px;
}
.letter{
  text-align: center;
  font-size: 18px;
  color:#ee882a;
  margin-bottom: 20px;
}
ul{
  list-style: none;
  overflow: hidden;
}
.brandlist{
  float: left;
  width: 180px;
  margin-right:20px;
  margin-bottom: 20px;
  z-index: 10;
  position: relative;
}
.brandcontent{
  width:180px;
  height: 100px;
  border: 1px #cccccc solid;
  border-bottom: 0;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
}
.brandcontent img{
  max-width: 155px;
  height: 100%;
}
.brandcontent1{
  cursor: pointer;
  color: black;
  width:180px;
  border: 1px #cccccc solid;
  text-align: center;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
}
.fontstyle{
 text-decoration: none;
}
.wrapmore{
  text-align: center;
}
.twobutton{
  width: 160px;
  margin: 0 auto;
  display: flex;
}
.more{
  width: 80px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #f9f1e9;
  font-style: normal;
  cursor: pointer;
  display: block;
  color:#ee882a;
  margin: 20px auto 0;
  display: block;
}
.midwrapwidth{
  width: 1420px;
  margin-top: 20px;
  text-align: center;
  text-shadow: 0.3px 0.3px 0.3px black;
}
.midwraperwidth{
  width: 1420px;
  margin-top: 70px;
}
.midletter{
  margin-bottom: 30px;
  text-align: center;
  font-size: 18px;
  color:#ee882a;
}
.midbrandlist{
  float: left;
  width: 200px;
  margin-right:20px;
  margin-bottom: 20px;
  z-index: 10;
  position: relative;
}
.midbrandcontent{
  width:200px;
  border: 1px #cccccc solid;
  border-bottom: 0;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  height: 100px;
  overflow: hidden;
}
.midbrandcontent img{
  max-width: 200px;
  height: 100%;
}
.midbrandcontent1{
  cursor: pointer;
  color: black;
  width:200px;
  border: 1px #cccccc solid;
  text-align: center;
  height: 40px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  line-height: 40px;;
}
.midfontstyle{
 text-decoration: none;
}
.midwrapmore{
  text-align: center;
}
.midtwobutton{
  width: 160px;
  margin: 0 auto;
  display: flex;
}
.midmore{
  width: 80px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #f9f1e9;
  font-style: normal;
  cursor: pointer;
  display: block;
  color:#ee882a;
  margin: 20px auto 0;
}
.mobilewrapwidth{
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}
.mobilewraperwidth{
  width: 100%;
  margin-top: 20px;
}
.mobileletter{
  text-align: center;
  font-size: 18px;
  color:#ee882a;
}
.moul{
  list-style: none;
  overflow: hidden;
  padding: 0 5%;
}
.mobilebrandlist{
  float: left;
  width: 21%;
  margin-right:10px;
  margin-bottom: 10px;
  z-index: 10;
  position: relative;
}
.mobilebrandcontent{
  width:100%;
  border: 1px #cccccc solid;
  border-bottom: 0;
  text-align: center;
  padding: 1% 0;
  cursor: pointer;
  height: 40px;
  overflow: hidden;
}
.mobilebrandcontent img{
  max-width: 95%;
  height: 100%;
}
.mobilebrandcontent1{
  cursor: pointer;
  color: black;
  width:100%;
  border: 1px #cccccc solid;
  text-align: center;
  height: 20px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-weight: 600;
  line-height: 20px;
  font-size: 10px;
}
.mobilefontstyle{
 text-decoration: none;
}
.mobilewrapmore{
  text-align: center;
}
.mobiletwobutton{
  width: 120px;
  margin: 0 auto;
  display: flex;
}
.mobilemore{
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  background: #f9f1e9;
  font-style: normal;
  cursor: pointer;
  display: block;
  color:#ee882a;
  margin: 10px auto 0;
  position: relative;
  z-index: 14
}
</style>

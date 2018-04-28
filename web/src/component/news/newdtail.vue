<template>
<div>
    <div v-if="width>640">
    <div class="wraperwidth" v-if="this.$route.params.content.title">
        <div class="topall">
        <div class="topone">
          <h4 class="title">{{this.$route.params.content.title}}</h4>
        </div>
        <div class="toptwo">
          <p class="date">{{this.$route.params.content.year}}-{{this.$route.params.content.day}}</p>
        </div>
        </div>
        <div class="line"></div>
        <p class="content" v-for="(item,index) in content1" :key=index>
            {{item}}
        </p>
        <div class="imgurl">
            <img :src="this.$route.params.content.imgurl">
        </div>
        <p class="content" v-for="(item,index) in content2" :key=index>
            {{item}}
        </p>
    </div>
    <div class="wraperwidth" v-if="this.$route.params.content.htitle">
        <h3 class="title">{{this.$route.params.content.htitle}}</h3>
        <div class="line"></div>
        <p class="date">{{this.$route.params.content.hyear}}-{{this.$route.params.content.hday}}</p>
        <p class="content" v-for="(item,index) in hcontent1" :key=index>
            {{item}}
        </p>
    </div>
     </div>
        <div v-if="width<=640">
    <div class="mobilewraperwidth" v-if="this.$route.params.content.title">
        <h3 class="mobiletitle">{{this.$route.params.content.title}}</h3>
        <div class="mobileline"></div>
        <p class="mobiledate">{{this.$route.params.content.year}}-{{this.$route.params.content.day}}</p>
        <p class="mobilecontent" v-for="(item,index) in content1" :key=index>
            {{item}}
        </p>
        <div class="mobileimgurl">
            <img :src="this.$route.params.content.imgurl">
        </div>
        <p class="mobilecontent" v-for="(item,index) in content2" :key=index>
            {{item}}
        </p>
    </div>
    <div class="mobilewraperwidth" v-if="this.$route.params.content.htitle">
        <h3 class="mobiletitle">{{this.$route.params.content.htitle}}</h3>
        <div class="mobileline"></div>
        <p class="mobiledate">{{this.$route.params.content.hyear}}-{{this.$route.params.content.hday}}</p>
        <p class="mobilecontent" v-for="(item,index) in hcontent1" :key=index>
            {{item}}
        </p>
    </div>
     </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      width: 1920,
      content1: [],
      content2: [],
      hcontent1: []
    }
  },
  created () {
    this.width = document.documentElement.offsetWidth
    if (this.$route.params.content.content) {
      this.content1 = this.$route.params.content.content.split('**')[0].split('&&')
      this.content2 = this.$route.params.content.content.split('**')[1].split('&&')
    }
    if (this.$route.params.content.hcontent) {
      this.hcontent1 = this.$route.params.content.hcontent.split('&&')
    }
    console.log(typeof this.hcontent1)
    console.log(this.hcontent1)
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.topall{
  overflow: hidden;
}
.topone{
  float: left;
}
.toptwo{
  float: right;
}
.wraperwidth{
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 150px;
}
.title{
    text-align: center;
    color:black;
}
.line{
    margin-top: 15px;
    border-top:solid 1px #ee882a
}
.date{
    text-align: center;
    font-size: 14px;
    color:gray;
    margin-button: 15px;
}
.content{
    margin-top: 30px;
    text-indent: 2em;
}
.imgurl{
    margin-top: 30px;
    margin-left: 200px;
}
.mobileimgurl{
    margin: 10px 0;
    margin-left: 20%;
    width: 60%;
    text-align: center;
}
.mobileimgurl img{
    width: 100%;
}
.mobilewraperwidth{
    width: 96%;
    padding: 0 2% 15px;
    min-height: 200px;
    font-size: 0;
}
.mobiletitle{
    text-align: center;
    color:black;
    font-size: 14px;
}
.mobileline{
    border-top:solid 1px #ee882a;
}
.mobiledate{
    text-align: center;
    font-size: 10px;
    color:gray;
    margin-top: 15px;
}
.mobilecontent{
    margin-top: 10px;
    text-indent: 2em;
    font-size: 10px;
}
</style>

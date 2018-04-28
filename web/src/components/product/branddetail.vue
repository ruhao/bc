<template>
<div>
	<div v-if="width<1500&&width>640">
        <Nav navtitle='品牌商家'></Nav>
        <div class="wraperwidth">
            <div class="box">
                <img :src="content.imgurl"><span></span>
            </div>
            <div class="box1">
               <p class="title">
                   意大利品牌 {{content.name}}
               </p>
               <p class="content" v-for="(pp,index) in content.detail" :key=index>
                   {{pp}}
               </p>
            </div>
        </div>
            <Nav navtitle='经典单品' v-if="relation.length"></Nav>
            <div class="wraperwidthtwo">
                <div v-for="(item,index) in relation" :key=index>
                    <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}">
                    <div class="box2">
                      <img :src="item.imgurl">
                    </div>
                    </router-link>
                    <span></span>
                </div>
            </div>
	</div>
    <div v-if="width>=1500">
        <Nav navtitle='品牌商家'></Nav>
        <div class="midwraperwidth">
            <div class="midbox">
                <img :src="content.imgurl"><span></span>
            </div>
            <div class="midbox1">
               <p class="midtitle">
                   意大利品牌 {{content.name}}
               </p>
               <p class="midcontent" v-for="(pp,index) in content.detail" :key=index>
                   {{pp}}
               </p>
            </div>
        </div>
            <Nav navtitle='经典单品' v-if="relation.length"></Nav>
            <div class="midwraperwidthtwo">
                <div v-for="(item,index) in relation" :key=index>
                    <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}">
                    <div class="midbox2">
                    <img :src="item.imgurl"><span></span>
                    </div>
                    </router-link>
                </div>
            </div>
	</div>
    <div v-if="width<=640">
        <Nav navtitle='品牌商家'></Nav>
        <div class="mobilewraperwidth">
            <div class="mobilebox">
                <img :src="content.imgurl"><span></span>
            </div>
            <div class="mobilebox1">
               <p class="mobiletitle">
                   意大利品牌 {{content.name}}
               </p>
               <p class="mobilecontent" v-for="(pp,index) in content.detail" :key=index>
                   {{pp}}
               </p>
            </div>
        </div>
            <Nav navtitle='经典单品' v-if="relation.length"></Nav>
            <div class="mobilewraperwidth">
                <div v-for="(item,index) in relation" :key=index class="mobilebox2">
                    <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}">
                    <img :src="item.imgurl">
                    </router-link>
                    <!-- {{item.name}} -->
                </div>
                <div style="clear:both"></div>
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
      content: {},
      relation: [],
      id: '',
      cidsec1: '',
      fliter: {
        limit: 1000,
        page: 1,
        type: '',
        belong: []
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.width = document.documentElement.offsetWidth
    this.$http
      .get(this.getTest() + '/brand/data/' + this.$route.params.id)
      .then(res => {
        this.fliter.belong = []
        this.content = res.data
        this.content.detail = this.content.detail.split('&&')
        this.fliter.belong.push(res.data.name)
        this.$http
          .post(this.getTest() + '/products/list', this.fliter)
          .then(res => {
            console.log(this.fliter)
            this.relation = res.data.rows
            this.fliter.type = res.data.rows[0].type
            this.$http.get(this.getTest() + '/kind/data').then(res => {
              let rr = res.data[0].children[5].children.length
              for (let i = 0; i < rr; i++) {
                if (this.fliter.type === res.data[0].children[5].children[i].type) {
                  this.id = res.data[0].children[5].children[i]._id
                  this.cidsec1 = res.data[0].children[5].children[i].text
                }
              }
            })
          })
      })
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
    if (document.getElementsByClassName('mobilebox2')[0]) {
      let ii = window.getComputedStyle(document.getElementsByClassName('mobilebox2')[0], null)['width']
      let oo = document.getElementsByClassName('mobilebox2').length
      for (let i = 0; i < oo; i++) {
        document.getElementsByClassName('mobilebox2')[i].style.height = ii
      }
    }
  }
}
</script>

<style scoped>
.margintop50{
    margin-top:50px;
}
.wraperwidth{
    width: 1000px;
    margin: 50px auto 0;
    display: flex;
    padding-bottom: 50px;
}
.wraperwidth:nth-of-type(4){
    padding-bottom:0
}
.box{
    width:500px;
    border: #dad8d6 1px solid;
    height: 300px;
    position: relative;
    text-align:center;
    box-sizing: border-box;
    overflow: hidden;
}
.box span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
 .box1{
     background: #f8efe7;
     width: 500px;
     height: 300px;
     box-sizing: border-box;
     overflow: hidden;
 }
.box img{
    max-width: 495px;
    height: 100%;
    margin: auto;
    vertical-align:middle;
}
.title{
    margin-left: 45px;
    font-size: 24px;
    margin-top: 20px;
    color: #ef9643;
}
.content{
    margin: 10px 45px 0;
    line-height: 18px;
    letter-spacing: 1px;
    font-size: 12px;
    text-indent: 1.5em;
}
.wraperwidthtwo{
    width: 1000px;
    margin: 50px auto 0;
    padding-bottom: 50px;
    position: relative;
    overflow: hidden;
}
.box2{
    width: 230px;
    border: #dad8d6 1px solid;
    height: 230px;
    margin:5px;
    text-align: center;
    overflow: hidden;
    position: relative;
    float: left;
}
.box2 img{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
    height: 100%;
}
.box2 span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
}
.midmargintop50{
    margin-top:50px;
}
.midwraperwidth{
    width: 1420px;
    margin: 50px auto 0;
    display: flex;
    padding-bottom: 50px;
}
.midwraperwidth:nth-of-type(4n){
    padding-bottom:0
}
.midbox{
    width:700px;
    border: #dad8d6 1px solid;
    height: 360px;
    position: relative;
    text-align:center;
    box-sizing: border-box;
}
.midbox span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
 .midbox1{
     background: #f8efe7;
     width: 700px;
     height: 360px;
     box-sizing: border-box;
 }
.midbox img{
    width: 600px;
    max-height: 358px;
    margin: auto;
    vertical-align:middle;
}
.midtitle{
    margin-left: 45px;
    font-size: 24px;
    margin-top: 50px;
    color: #ef9643;
}
.midcontent{
    margin: 20px 45px 0;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.midwraperwidthtwo{
    width: 1420px;
    margin: 50px auto 0;
    padding-bottom: 50px;
    overflow: hidden;
}
.midbox2{
    width: 330px;
    border: #dad8d6 1px solid;
    height: 330px;
    text-align: center;
    margin:10px;
    overflow: hidden;
    float: left;
    line-height: 330px;
    position: relative;
}
.midbox2 img{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
    height: 100%;
}
.midbox2 span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
.mobilemargintop50{
    margin-top:50px;
}
.mobilewraperwidth{
    width: 100%;
    margin: 10px auto 0;
    padding-bottom: 20px;
}
.mobilewraperwidth:nth-of-type(4){
    padding-bottom:0
}
.mobilebox{
    width:96%;
    border: #dad8d6 1px solid;
    padding-top:20px;
    position: relative;
    text-align:center;
    box-sizing: border-box;
    margin: 0 2%;
}
.mobilebox span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
 .mobilebox1{
     background: #f8efe7;
     width:96%;
     padding-top:15px;
     box-sizing: border-box;
     overflow: hidden;
     margin: 0 2%;
     text-overflow: ellipsis;
     padding-bottom: 15px;
 }
.mobilebox img{
    width: 90%;
    margin: 0 5%
}
.mobiletitle{
    margin-left: 15px;
    font-size: 16px;
    margin-top: 10px;
    color: #ef9643;
}
.mobilecontent{
    margin: 15px 15px 0;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 12px;
    text-indent: 2em;
}
.mobilebox2{
    width: 45%;
    margin: 0 2%;
    font-size: 0;
    float: left;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.mobilebox2 img{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
    height: 100%;
}
.mobilebox2 span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
</style>

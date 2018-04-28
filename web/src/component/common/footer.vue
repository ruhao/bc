<template>
<div>
	<div class='contact-footer' v-if="width<1500&&width>640">
		<div class='contact-footer-content'>
			<ul class='index-footer-method'>
				<li v-for='(item,index) in contact' :key=index class='contact-footer-li'><img :src='item.icon'><span class='contact-span'>{{item.value}}</span></li>
			</ul>
			<p class='contact-footer-bottom'>老外仓&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;浙ICP备15014783号-2</p>
		</div>
	</div>
	<div class='midcontact-footer' v-if="width>=1500">
		<div class='midcontact-footer-content'>
			<ul class='midindex-footer-method'>
				<li v-for='(item,index) in contact' :key=index class='midcontact-footer-li'><img :src='item.icon'><span class='midcontact-span'>{{item.value}}</span></li>
			</ul>
			<p class='midcontact-footer-bottom'>老外仓&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;浙ICP备15014783号-2</p>
		</div>
	</div>
  <div class='mobilecontact-footer' v-if="width<=640">
		<div class='mobilecontact-footer-content'>
			<ul class='mobileindex-footer-method'>
				<li v-for='(item,index) in contact' :key=index class='mobilecontact-footer-li'><img :src='item.icon'><span class='mobilecontact-span'>{{item.value}}</span></li>
			</ul>
			<p class='mobilecontact-footer-bottom'>老外仓&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;浙ICP备15014783号-2</p>
		</div>
	</div>
  </div>
</template>

<script>
import contact1 from '../../../images/index-contact1.png'
import contact2 from '../../../images/index-contact2.png'
import contact3 from '../../../images/index-contact3.png'
import contact4 from '../../../images/index-contact4.png'
export default {
  data () {
    return {
      width: 1920,
      contact: [
        {
          icon: contact1,
          value: '手机：17767052082 '
        },
        {
          icon: contact2,
          value: '座机：0571-88305872'
        },
        {
          icon: contact3,
          value: '邮件：laowaicang@laowaicang.com'
        },
        {
          icon: contact4,
          value: '地址：杭州 滨江区 滨盛路1688号'
        }
      ]
    }
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
ul,
li,
p {
  margin: 0;
  padding: 0;
}
.contact-footer {
  background: #f8efe7;
}

.contact-footer-content {
  width: 1000px;
  margin: 0 auto;
}

.index-footer-method {
  margin-top: 70px;
  list-style: none;
  padding-top: 40px;
  position: relative;
  display: flex;
  width: 100%;
}

.contact-footer-li {
  font-size: 14px;
  width: 25%;
}

.contact-footer-li:nth-of-type(4) {
  text-align: right;
}

.contact-span {
  position: relative;
  color: #666666;
  margin-left: 12px;
  font-size: 14px;
  top: -8px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}

.contact-footer-bottom {
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
  padding-bottom: 20px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}
.midcontact-footer {
  background: #f8efe7;
}

.midcontact-footer-content {
  width: 1420px;
  margin: 0 auto;
}

.midindex-footer-method {
  margin-top: 90px;
  list-style: none;
  padding-top: 55px;
  position: relative;
  display: flex;
}

.midcontact-footer-li {
  width: 355px;
}

.midcontact-footer-li:nth-of-type(4) {
  text-align: right;
}

.midcontact-span {
  position: relative;
  color: #666666;
  margin-left: 25px;
  top: -8px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}

.midcontact-footer-bottom {
  font-size: 14px;
  text-align: center;
  margin-top: 75px;
  padding-bottom: 20px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}
.mobilecontact-footer {
  background: #f8efe7;
}

.mobilecontact-footer-content {
  width: 100%
}

.mobileindex-footer-method {
  margin-top: 10px;
  list-style: none;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
}
.mobileindex-footer-method li {
  float: left;
  min-width: 50%;
}
.mobileindex-footer-method img{
  width: 18px;
  margin-left: 5px;
}
.mobilecontact-span {
  position: relative;
  color: #666666;
  margin-left: 5px;
  font-size: 10px;
  top: -5px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}

.mobilecontact-footer-bottom {
  font-size: 10px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
  background: white;
}
</style>

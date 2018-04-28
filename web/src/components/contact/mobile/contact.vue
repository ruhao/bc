<template>
	<div>
		<div><img class='midheaderbg' src='../../../../images/contact-ban.jpg'></div>
    <Nav navtitle='企业文化'></Nav>
		<div class='midcontact-sketch'>
			<p>请在线提交您的咨询、建议、意见，我们会在收到邮件后的1个工作日内，对您的问题给予答复。</p>
		</div>
		<div class='midcontact-content'>
			<div class='midcontact-content-top'>
				<img src='../../../../images/contact1.jpg' />
				<div class='midcontact-content-tr'>
					<div class='midcontact-content-tc'>
						<h3>中国总部</h3>
						<ul class='midindex-contact-method'>
							<li v-for='(item,index) in contact' :key=index><img :src='item.icon'><span class='midindex-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class='midcontact-content-top'>
				<img src='../../../../images/contact2.jpg' />
				<div class='midcontact-content-tr'>
					<div class='midcontact-content-tc'>
						<h3>意大利总部</h3>
						<ul class="midindex-contact-method">
            <br />
						<li v-for="(item,index) in contact1" :key=index><img :src="item.icon"><span class="midindex-contact-span">{{item.value}}</span></li>
					</ul>
					</div>
				</div>
			</div>
		</div>

		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../../common/footer.vue'
import Nav from '../../common/nav.vue'
import indexcontact1 from '../../../../images/index-contact1.png'
import indexcontact2 from '../../../../images/index-contact2.png'
import indexcontact3 from '../../../../images/index-contact3.png'
import indexcontact4 from '../../../../images/index-contact4.png'

export default {
  data () {
    return {
      contact: [
        {
          icon: indexcontact2,
          value: '座机：0571-88305872'
        },
        {
          icon: indexcontact3,
          value: '邮件：laowaicang@laowaicang.com'
        },
        {
          icon: indexcontact4,
          value: '地址：中国杭州 滨江区 滨盛路1688号'
        }
      ],
      contact1: [
        {
          icon: indexcontact1,
          value: '电话：39320 3933535'
        },
        {
          icon: indexcontact4,
          value: '地址：Via Varese,2/a 21047 Saronno(VA),Italy'
        }
      ]
    }
  },
  components: {
    Foot,
    Nav
  }
}
</script>

<style scoped>
p,
h3,
img,ul{
  margin: 0;
  padding: 0;
}

.midheaderbg {
  width: 100%;
}

.midcontact-content {
  width: 100%;
}

.midcontact-content-top {
  margin-top: 20px;
  position: relative;
}
.midcontact-content-top img{
  width: 100%;
}
.midcontact-sketch {
   text-align: center;
  width: 96%;
  padding: 0 2%;
}

.midcontact-sketch p {
  color: #7a7a7a;
  margin-top: 20px;
  font-size: 12px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
}

.midindex-contact-method {
  list-style: none;
  margin-top: 10px;
  position: relative;
}

.midindex-contact-method img{
  width: 16px;
}

.midindex-contact-method li {
  position: relative;
  margin-top: 8px;
  width: 100%;
}

.midindex-contact-span {
  font-size: 14px;
  position: relative;
  color: #666666;
  margin-left: 10px;
  top: -3px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
  font-size: 10px;
}

.midcontact-content {
  margin-top: 50px;
}

.midcontact-content-tr {
  width: 90%;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  height: 175px;
  margin: -70px auto 0;
  position: relative;
}

.midcontact-content-tc {
  background: #fdf3e9;
  position: relative;
  width: 85%;
  padding: 5% 0 0 5%;
  margin: 10px auto 0;
  top:10px;
  height: 135px;
}

.midcontact-content-tc h3 {
  font-size: 16px;
  color: #ee882a;
}
</style>

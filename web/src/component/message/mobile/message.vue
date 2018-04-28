<template>
	<div>
		<div><img class='mobileheaderbg' src='../../../../images/liuyan-ban.jpg'></div>
    <Nav navtitle='企业文化'></Nav>
		<div class='mobilecontact-sketch'>
			<p>留下评论，分享你的观点，留下评论，分享你的观点</p>
		</div>
		<div class='mobilemessage-content'>
			<div class='mobilemessage-content-w'>
				<form>
					<label for='title' id='title-label'>标&nbsp;&nbsp;题：</label><input type='text' id='title' @blur='titlef' />
					<br />
					<label for='content' id='content-label'>内&nbsp;&nbsp;容：</label><textarea id='content' @blur='contentf'></textarea>
					<br />
					<label for='name' id='name-label'>姓&nbsp;&nbsp;名：</label><input type='text' id='name' @blur='namef' />
					<br />
					<label for='telephone' id='telephone-label'>电&nbsp;&nbsp;话：</label><input type='text' id='telephone' @blur='telephonef' />
					<br />
					<button type='button' id='sub' @click='sub'>提交</button>
				</form>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../../common/footer.vue'
import Nav from '../../common/nav.vue'
export default {
  data () {
    return {
      flag: [false, false, false, false]
    }
  },
  methods: {
    telephonef () {
      let reg = /^1[3|5|7|8]\d{9}$/
      if (reg.test(document.getElementById('telephone').value)) {
        this.flag[3] = true
      } else {
        this.flag[3] = false
      }
    },
    titlef () {
      if (document.getElementById('title').value.trim().length > 0) {
        this.flag[0] = true
      } else {
        this.flag[0] = false
      }
    },
    contentf () {
      if (document.getElementById('content').value.trim().length > 15) {
        this.flag[1] = true
      } else {
        this.flag[1] = false
      }
    },
    namef () {
      if (document.getElementById('name').value.trim().length > 0) {
        this.flag[2] = true
      } else {
        this.flag[2] = false
      }
    },
    sub () {
      if (this.flag[0] && this.flag[2] && this.flag[1] && this.flag[3]) {
        if (confirm('确定提交吗')) {
          this.dataif = {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            name: document.getElementById('name').value,
            telephone: document.getElementById('telephone').value,
            cateId: '5a41bf9d17db19233cf3ddcd'
          }

          this.$http
            .post('http://' + this.getTest() + '/message/data', this.dataif)
            .then(res => {
              setTimeout(function () {
                document.getElementById('title').value = ''
                document.getElementById('content').value = null
                document.getElementById('name').value = null
                document.getElementById('telephone').value = null
                alert('留言成功')
              }, 500)
            })
        }
      } else {
        if (!this.flag[0]) {
          alert('标题不能为空')
        } else if (!this.flag[1]) {
          alert('内容不能少于15个字')
        } else if (!this.flag[2]) {
          alert('姓名不能为空')
        } else if (!this.flag[3]) {
          alert('请输入正确的手机号')
        }
      }
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
img,
textarea,
input {
  margin: 0;
  padding: 0;
}
.mobileheaderbg{
  width: 100%;
}
.mobilecontact-content {
  width: 100%;
}

.mobilecontact-content-top {
  margin-top: 20px;
  position: relative;
}

.mobilecontact-sketch {
  text-align: center;
  width: 96%;
  padding: 0 2%;
}

.mobilecontact-sketch p {
  color: #7a7a7a;
  margin-top: 20px;
  font-size: 12px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
}

.mobilemessage-content-w {
  width: 100%;
  position: relative;
  z-index: 11;
}

#title {
  margin-top: 40px;
}

#title,
#name,
#telephone {
  height: 30px;
  width: 230px;
  border: 0;
  border: dashed #ee882a 1px;
  margin-bottom: 20px;
  position: relative;
}

#title-label,
#name-label,
#telephone-label {
  font-size: 12px;
  margin-right: 15px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
  margin-left: 10px;
}

#content {
  height: 50px;
  width: 230px;
  border: 0;
  border: dashed #ee882a 1px;
  margin-bottom: 20px;
  vertical-align: top;
  resize: none;
  box-sizing: border-box;
}

#content-label {
  height: 50px;
  font-size: 12px;
  margin-right: 15px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
  margin-top: -200px;
  margin-left: 10px;
}

#sub {
  border: 0;
  border: dashed #ee882a 1px;
  height: 30px;
  width: 80px;
  background: #f8efe7;
  margin-left: 30%;
  margin-top: 15px;
  font-size: 14px;
  color: #f1662c;
  text-shadow: 0.2px 0.2px 0.2px #f8efe7;
  cursor: pointer;
}
</style>

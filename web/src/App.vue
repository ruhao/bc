<template>
<div class="body">
	<div class="bodywidth" v-if="width<1500&&width>640">
    <div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="wraperwidth">
			<ul class="smul ulpc">
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont" active-class="routeactive" exact>网站首页</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/about' tag='span' class="navfont" active-class="routeactive">关于我们</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/product' tag='span' class="navfont" active-class="routeactive">热销产品</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/internet' tag='span' class="navfont" active-class="routeactive">网络服务</router-link>
				</li>
				<li class="headernavmid">
					<img src="../images/logo.png"></li>
				<li class="headernavright">
					<router-link to='/news' tag='span' class="navfont" active-class="routeactive">新闻动态</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/hr' tag='span' class="navfont" active-class="routeactive">人力资源</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/message' tag='span' class="navfont" active-class="routeactive">在线留言</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/contact' tag='span' class="navfont" active-class="routeactive">联系我们</router-link>
				</li>
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
					<router-link to='/en' tag='span' class="navfont">EN</router-link>
				</li>
			</ul>
		<div class="midheadernavlaster" v-if="userinfo.length<1">
			<span class="navfont" @click="submit()">Login</span><span class="midnavfontapsn">|</span>
			<span class="navfont" @click="Req()">Req</span>
		</div>
		<div class="midheadernavlaster" v-else>
			<span class="usernavfont">{{userinfo[0]}}</span>
			<span class="navfont" @click="Exit()">exit</span>
		</div>
		</div>
		</div>
		<div v-if='this.$route.path.indexOf("en")==1'>
		<div class="wraperwidth">
			<ul class="smul ulpc">
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont" active-class="routeactive" exact>Home</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/about' tag='span' class="navfont" active-class="routeactive">About Us</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/product' tag='span' class="navfont" active-class="routeactive">Core Business</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/internet' tag='span' class="navfont" active-class="routeactive">Sales Network</router-link>
				</li>
				<li class="headernavmid">
					<img src="../images/logo.png"></li>
				<li class="headernavrighten">
					<router-link to='/news' tag='span' class="navfont" active-class="routeactive">News</router-link>
				</li>
				<li class="headernavrighten">
					<router-link to='/hr' tag='span' class="navfont" active-class="routeactive">Human resources</router-link>
				</li>
				<li class="headernavrighten">
					<router-link to='/message' tag='span' class="navfont" active-class="routeactive">Online Message</router-link>
				</li>
				<li class="headernavrighten">
					<router-link to='/contact' tag='span' class="navfont" active-class="routeactive">Contact Us</router-link>
				</li>
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
					<router-link to='/en' tag='span' class="navfont">EN</router-link>
				</li>
			</ul>
			<div class="midheadernavlaster" v-if="userinfo.length<1">
			<span class="navfont" @click="submit()">Login</span><span class="midnavfontapsn">|</span>
			<span class="navfont" @click="Req()">Req</span>
		</div>
		<div class="midheadernavlaster" v-else>
			<span class="usernavfont">{{userinfo[0]}}</span>
			<span class="navfont" @click="Exit()">exit</span>
		</div>
		</div>
		</div>
			<transition :name="transitionName">
				<router-view class="child-view"></router-view>
			</transition>
		</div>
		<div class="bodywidth" v-if="width>=1500">
		<div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="midwraperwidth">
			<ul class="ulpc">
				<li class="midheadernavleft">
					<router-link to='/' tag='span' class="midnavfont" active-class="midrouteactive" exact>网站首页</router-link>
				</li>
				<li class="midheadernavleft">
					<router-link to='/about' tag='span' class="midnavfont" active-class="midrouteactive">关于我们</router-link>
				</li>
				<li class="midheadernavleft">
					<router-link to='/product' tag='span' class="midnavfont" active-class="midrouteactive">热销产品</router-link>
				</li>
				<li class="midheadernavleft">
					<router-link to='/internet' tag='span' class="midnavfont" active-class="midrouteactive">营销网络</router-link>
				</li>
				<li class="midheadernavmid">
					<img src="../images/logo.png"></li>
				<li class="midheadernavright">
					<router-link to='/news' tag='span' class="midnavfont" active-class="midrouteactive">新闻动态</router-link>
				</li>
				<li class="midheadernavright">
					<router-link to='/hr' tag='span' class="midnavfont" active-class="midrouteactive">人力资源</router-link>
				</li>
				<li class="midheadernavright">
					<router-link to='/message' tag='span' class="midnavfont" active-class="midrouteactive">在线留言</router-link>
				</li>
				<li class="midheadernavright">
					<router-link to='/contact' tag='span' class="midnavfont" active-class="midrouteactive">联系我们</router-link>
				</li>
			</ul>
		</div>
		<div class="midheadernavlast">
			<router-link to='/' tag='span' class="midnavfont">CN</router-link><span class="midnavfontapsn">|</span>
			<router-link to='/en' tag='span' class="midnavfont">EN</router-link>
		</div>
			<div class="midheadernavlaster">
        <div v-if="userinfo.length<1">
			<span class="navfont" @click="submit()">登入</span><span class="midnavfontapsn">|</span>
			<span class="navfont" @click="Req()">注册</span>
      </div>
      <div v-else>
      			<span class="usernavfont">{{userinfo[0]}}</span>
			<span class="navfont" @click="Exit()">退出</span>
      </div>
      <router-link to='/' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            主页
		      </div>
      </router-link>
      <router-link to='/about' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            关于我们
		      </div>
      </router-link>
      <router-link to='/product' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            产品销售
		      </div>
      </router-link>
      <router-link to='/internet' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            营销市场
		      </div>
      </router-link>
      <router-link to='/news' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            最新消息
		      </div>
      </router-link>
      <router-link to='/message' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            留言
		      </div>
      </router-link>
      <router-link to='/contact' class="textde">
		      <div class="midheadernavlastshop midnavfontshop">
            联系我们
		      </div>
      </router-link>
      </router-link>
      <router-link to='/shopcart' class="textde">
		    <div class="midheadernavlastshop">			
			   <span class="midnavfontapshop"></span><span class="midnavfontshop">购物车</span>	
		  </div>
		  </router-link>
		</div>

		</div>
    <div v-else>
      <div class="midwraperwidth">
			<ul class="ulpc">
				<li class="midheadernavleften">
					<router-link to='/en' tag='span' class="midnavfont" active-class="midrouteactive" exact>Home</router-link>
				</li>
				<li class="midheadernavleften">
					<router-link to='/enabout' tag='span' class="midnavfont" active-class="midrouteactive">About Us</router-link>
				</li>
				<li class="midheadernavleften">
					<router-link to='/enproduct' tag='span' class="midnavfont" active-class="midrouteactive">Core Business</router-link>
				</li>
				<li class="midheadernavleften">
					<router-link to='/eninternet' tag='span' class="midnavfont" active-class="midrouteactive">Sales Network</router-link>
				</li>
				<li class="midheadernavmid">
					<img src="../images/logo.png"></li>
				<li class="midheadernavrighten">
					<router-link to='/ennews' tag='span' class="midnavfont" active-class="midrouteactive">News</router-link>
				</li>
				<li class="midheadernavrighten">
					<router-link to='/hr' tag='span' class="midnavfont" active-class="midrouteactive">Human resources</router-link>
				</li>
				<li class="midheadernavrighten">
					<router-link to='/enmessage' tag='span' class="midnavfont" active-class="midrouteactive">Online Message</router-link>
				</li>
				<li class="midheadernavrighten">
					<router-link to='/encontact' tag='span' class="midnavfont" active-class="midrouteactive">Contact Us</router-link>
				</li>
			</ul>
		</div>
		<div class="midheadernavlasten">
			<router-link to='/' tag='span' class="midnavfont">CN</router-link><span class="midnavfontapsn">|</span>
			<router-link class="midnavfont" to='/en' tag='span'>EN</router-link>
		</div>
			<div class="midheadernavlaster" v-if="userinfo.length<1">
			<span class="navfont" @click="submit()">Login</span><span class="midnavfontapsn">|</span>
			<span class="navfont" @click="Req()">Req</span>
		</div>
		<div class="midheadernavlaster" v-else>
			<span class="usernavfont">{{userinfo[0]}}</span>
			<span class="navfont" @click="Exit()">exit</span>
		</div>
		</div>
					<transition :name="transitionName">
				<router-view class="child-view"></router-view>
			</transition>
				</div>
			<div class="mobilebodywidth" v-if="width<=640">
    <div v-if='this.$route.path.indexOf("en")==1'>
		<div class="mobilewraperwidth">
			<div class="mobileheadernavmid">
					<img src="../images/logo.png">
      </div>
			<div class="mobileheadernavmid1">
					<img src="../images/mobile1.png" @click="navapped">
      </div>
			<ul class="mobileheadernavright" id="ulll" @click="navdis">
				<li class="mobileheadernavleft">
					<p class="mobilenavtitle">LaoWaiCang</p>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont" active-class="mobilerouteactive" exact>Home</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/about' tag='span' class="mobilenavfont" active-class="mobilerouteactive">About Us</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/product' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Core Business</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/internet' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Sales Network</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/news' tag='span' class="mobilenavfont" active-class="mobilerouteactive">News</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/hr' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Human resources</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/message' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Online Message</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/contact' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Contact Us</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont">CN</router-link><span class="mobilenavfont">|</span>
					<router-link class="mobilenavfont" to='/en' tag='span'>EN</router-link>
				</li>
				<li class="mobileheadernavleft">
					<span class="mobilenavfont" @click="submit()">Login</span><span class="mobilenavfont">|</span>
					<span class="mobilenavfont" @click="Req()">Req</span>
				</li>
			</ul>
		</div>
    </div>
		<div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="mobilewraperwidth">
			<div class="mobileheadernavmid">
					<img src="../images/logo.png">
      </div>
			<div class="mobileheadernavmid1">
					<img src="../images/mobile1.png" @click="navapped">
      </div>
			<ul class="mobileheadernavright" id="ulll" @click="navdis">
				<li class="mobileheadernavleft">
					<p class="mobilenavtitle">老外仓</p>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont" active-class="mobilerouteactive" exact>首页</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/about' tag='span' class="mobilenavfont" active-class="mobilerouteactive">关于我们</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/product' tag='span' class="mobilenavfont" active-class="mobilerouteactive">热销产品</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/internet' tag='span' class="mobilenavfont" active-class="mobilerouteactive">营销网络</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/news' tag='span' class="mobilenavfont" active-class="mobilerouteactive">新闻动态</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/hr' tag='span' class="mobilenavfont" active-class="mobilerouteactive">人力资源</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/message' tag='span' class="mobilenavfont" active-class="mobilerouteactive">在线留言</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/contact' tag='span' class="mobilenavfont" active-class="mobilerouteactive">联系我们</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont">CN</router-link><span class="mobilenavfont">|</span>
					<router-link class="mobilenavfont" to='/en' tag='span'>EN</router-link>
				</li>
				<li class="mobileheadernavleft">
					<span class="mobilenavfont" @click="submit()">Login</span><span class="mobilenavfont">|</span>
					<span class="mobilenavfont" @click="Req()">Req</span>
				</li>
			</ul>
		</div>
    </div>
		<div>
			<transition :name="transitionName">
				<router-view class="mobilechild-view"></router-view>
			</transition>
		</div>
	</div>
	<div class="loginBox" v-if="req.length>0">
	<span @click="CloseDiv('req')">X</span>
			<form id="myinfo">
					<div class="textinput">
						<input type="text" name="name" placeholder="账号" @blur='namef' id="name">
					</div>
					<div class="textinput">
						<input type="password" name="password" placeholder="密码" @blur='passwordf' id = "password">
					</div>
					<div class="textinput">
						<input type="text" name="area" placeholder="收货地址" @blur='contentf' id = "area">
					</div>
					<div class="textinput">
						<input type="text" name="telephone" placeholder="手机号" @blur='telephonef' id='telephone'>
					</div>
					<div class="registerf">
					<div class="register" @click="register()">注册</div>
					<div class="register" @click="Quit()">退出</div>
					</div>
				</form>
	</div>
	<div class="loginBox" v-if="login.length>0">
    <span @click="CloseDiv('login')">X</span>
			<form id="myinfoer">
					<div class="textinputer">
						<input type="text" name="name" placeholder="账号" id='loname'>
					</div>
					<div class="textinputer">
						<input type="password" name="password" placeholder="密码" id="lopassword">
					</div>
					<div class="registerf">
					<div class="register" @click="Login()">登入</div>
					<div class="register" @click="Quit()">退出</div>
					</div>
				</form>
	</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-left",
      width: 1920,
      req: [],
      login: [],
      flag: [false, false, false, false],
      userinfo: []
    };
  },
  methods: {
    navapped() {
      document.getElementById("ulll").style.right = 0;
    },
    navdis() {
      document.getElementById("ulll").style.right =
        -document.documentElement.offsetWidth + "px";
    },
    telephonef() {
      let reg = /^1[3|5|7|8]\d{9}$/;
      if (reg.test(document.getElementById("telephone").value)) {
        this.flag[3] = true;
      } else {
        this.flag[3] = false;
      }
    },
    passwordf() {
      let reg = /[a-zA-Z0-9]/;
      if (reg.test(document.getElementById("password").value)) {
        this.flag[1] = true;
      } else {
        this.flag[1] = false;
      }
    },
    contentf() {
      if (document.getElementById("area").value.trim().length > 0) {
        this.flag[2] = true;
      } else {
        this.flag[2] = false;
      }
    },
    CloseDiv(value) {
      console.log(value);
      if (value == "req") {
        this.req = [];
      } else if (value == "login") {
        this.login = [];
      }
    },
    namef() {
      let reg = /[a-zA-Z0-9]/;
      if (reg.test(document.getElementById("name").value)) {
        this.flag[0] = true;
      } else {
        this.flag[0] = false;
      }
    },
    Req() {
      this.req.push("ss");
      this.login = [];
    },
    submit() {
      this.login.push("ss");
      this.req = [];
    },
    register() {
      if (this.flag[0] && this.flag[2] && this.flag[1] && this.flag[3]) {//上述进行一些判断
        if (confirm("确定提交吗")) {
          this.dataif = {//要提交的数据
            password: document.getElementById("password").value,
            area: document.getElementById("area").value,
            name: document.getElementById("name").value,
            telephone: document.getElementById("telephone").value
          };
          let obj = {
            name: document.getElementById("name").value
          };//获取模糊查询条件
          this.$http
            .post("http://120.79.22.222:3000/user/list", obj)
            .then(res => {
              if (res.data.rows.length > 0) {//保证一个账号为一个用户
                alert("该用户已被注册，忘记密码可以留言或联系我们公司");
              } else {
                this.$http
                  .post("http://120.79.22.222:3000/user/data", this.dataif)
                  .then(res => {
                    setTimeout(function() {
                      alert("注册成功");
                    }, 500);
                  })
                  .then((this.req = []));
              }
            });
        }
      } else {
        if (!this.flag[0]) {
          alert("请输入正确的账号");
        } else if (!this.flag[1]) {
          alert("请输入正确的密码");
        } else if (!this.flag[2]) {
          alert("请输入正确的地址");
        } else if (!this.flag[3]) {
          alert("请输入正确的手机号");
        }
      }
    },
    Login() {
      let obj = {};
      obj.name = document.getElementById("loname").value;//模糊查询条件
      this.$http.post("http://120.79.22.222:3000/user/list", obj).then(res => {
        if (res.data.rows.length > 0) {//查验账号是否存在
          if (
            res.data.rows[0].password ==
            document.getElementById("lopassword").value//验证密码是否正确
          ) {
            this.$cookie.set("user", res.data.rows[0].name, 7);//存储到本地方便查询
            this.userinfo.push(res.data.rows[0].name);
            if (this.$route.path == "/shopcart") {
              location.reload();
            }
            this.login = [];
          } else {
            alert("请输入正确的密码");
          }
        } else {
          alert("请输入正确的账号");
        }
      });
    },
    Exit() {
      this.userinfo = [];
      this.$cookie.delete("user");
    }
  },
  created() {
    this.width = document.documentElement.offsetWidth;
    if (this.$cookie.get("user")) {
      this.userinfo.push(this.$cookie.get("user") + "：");
    }
  },
  updated() {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth;
    };
  },
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack;
    if (isBack) {
      this.transitionName = "slide-right";
    } else {
      this.transitionName = "slide-left";
    }
    this.$router.isBack = false;
    next();
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.wraperwidth {
  width: 100%;
  position: absolute;
  z-index: 10;
}
.ulpc {
  margin-top: 5px;
  list-style: none;
  display: flex;
}
.smul {
  margin-top: 15px;
  position: relative;
}
.headernavleft {
  width: 10%;
}
.navfont {
  color: white;
  cursor: pointer;
  font-size: 14px;
}
.usernavfont {
  font-size: 14px;
  color: white;
}
.navfont:hover {
  color: #ee882a;
}
.routeactive {
  color: #ee882a;
}
.headernavright {
  width: 10%;
  text-align: center;
}
.headernavrighten {
  width: 10%;
  text-align: center;
}
.headernavrighten :nth-of-type(1) {
  width: 8%;
  text-align: center;
}
.headernavrighten :nth-of-type(2) {
  width: 8%;
  text-align: left;
}
.headernavlast {
  width: 10%;
  text-align: center;
}
.navfontapsn {
  color: white;
  margin: 0 10px;
  cursor: pointer;
}
.headernavmid {
  margin-top: -10px;
  width: 140px;
}
.headernavmid img {
  width: 100%;
}
li {
  float: left;
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
.bodywidth {
  width: 100%;
}
.headernavlastb {
  position: absolute;
  top: 60px;
  right: 45px;
  z-index: 10;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.midheadernavleft {
  width: 150px;
  text-align: left;
  margin-top: 20px;
}
.midheadernavleften {
  width: 150px;
  text-align: center;
  margin-top: 20px;
}
.midnavfont {
  color: white;
  cursor: pointer;
}
.midnavfont:hover {
  color: #ee882a;
}
.midrouteactive {
  color: #ee882a;
}
.midheadernavright {
  width: 140px;
  margin-top: 20px;
  text-align: right;
}
.midheadernavrighten {
  width: 140px;
  margin-top: 20px;
  text-align: center;
}

.midheadernavlast {
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 10;
}
.midheadernavlaster {
  position: fixed;
  top: 50px;
  right: 30px;
  z-index: 10;
  text-align: right;
}
.midheadernavlaster .usernavfont {
  color: #ee882a;
}
.midheadernavlaster .navfont {
  color: #ee882a;
}
.midheadernavlaster .midnavfontapsn {
  color: #ee882a;
}
.midheadernavlastshop {
  z-index: 10;
}
.midheadernavlasten {
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 10;
}
.midnavfontapsn {
  color: white;
  margin: 0 10px;
  cursor: pointer;
}
.midnavfontshop {
  line-height: 40px;
  color: #ee882a;
  margin-left: 10px;
  text-decoration: none;
}
.midnavfontapshop {
  background: url("../images/shopcart.png");
  width: 32px;
  height: 32px;
}
.midheadernavmid {
  margin-top: 5px;
}
.mobilewraperwidth {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
ul,
p {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mobilenavtitle {
  background: url("../images/mobile.png") no-repeat 15px 15px;
  padding-left: 60px;
  padding-top: 5px;
  font-size: 600;
  color: #ee882a;
  font-size: 20px;
}
.mobileheadernavleft {
  text-align: left;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid white;
  float: none;
}
.mobilenavfont {
  color: black;
  cursor: pointer;
  margin-left: 15px;
  font-size: 600;
  text-shadow: 0.2px 0.2px 0.2px gray;
}
.mobileheadernavmid1 {
  margin-top: 0px;
  width: 50px;
  right: 10px;
  top: 10px;
  position: absolute;
  z-index: 11;
}
.mobileheadernavmid1 img {
  cursor: pointer;
  width: 24px;
}
.mobilenavfont:hover {
  color: #ee882a;
}
.mobilerouteactive {
  color: #ee882a;
}
.mobileheadernavright {
  width: 50%;
  text-align: right;
  background: #f8efe7;
  position: absolute;
  right: -50%;
  top: 0;
  height: 100%;
  transition: all 1s;
  z-index: 50;
}
.mobileheadernavlast {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
}
.mobilenavfontapsn {
  color: white;
  margin: 0 10px;
  cursor: pointer;
  margin-left: 15px;
}
.mobileheadernavmid {
  margin-top: 0px;
  width: 60px;
  margin-left: 10px;
  margin-top: 10px;
}
.mobileheadernavmid img {
  width: 100%;
}
.bodywidth {
  width: 100%;
}
.headernavlastb {
  position: absolute;
  top: 60px;
  right: 45px;
  z-index: 10;
}
.body {
  width: 100%;
  height: 100%;
}
.loginBody {
  z-index: 26;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.loginBox {
  width: 20%;
  height: 450px;
  position: fixed;
  background: white;
  margin: 180px 40%;
  border-radius: 2%;
  z-index: 30;
  border: 2px solid lightseagreen;
  background: url("https://www.laowaicang.com/avatar-bici.png") no-repeat;
  background-color: black;
  background-size: 100%;
}
.loginBox span {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 5px;
  text-align: center;
  right: 0;
  color: gray;
  cursor: pointer;
}
.loginBox span:hover {
  color: red;
}
#myinfo {
  margin-top: 195px;
}
#myinfoer {
  margin-top: 195px;
}
.textinput {
  margin: 10px 20px;
}
.textinputer {
  margin: 30px 20px;
}
.textinput input {
  border: 0;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  text-align: center;
}
.textinputer input {
  border: 0;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  text-align: center;
}
.register {
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 5%;
  border: 1px solid lightseagreen;
  text-align: center;
  line-height: 30px;
  color: white;
  margin: 0 10px;
}
.registerf {
  margin: 30px auto;
  width: 160px;
  display: flex;
}
.textde {
  text-decoration: none;
}
</style>

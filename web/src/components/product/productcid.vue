<template>
<div>
<div v-if="width<1500&&width>640">
		<Nav navtitle="热销产品"></Nav>
		<div class="wraperwidth">
			<div class="productlistbox">
				<div class="secondul" @click="getall">热销产品</div>
				<!--二级搜索-->
				<!--用v-if进行判断，用v-for进行(循环-->
				<div class="secondul" @click="getsecond(0)">
					{{cidsec1}}
					<div class="secondarea">
						<div v-for="(item,index) in alldata" :key=index class="secondcon" @click="getsec(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--三级搜索-->
				<div class="secondul" @click="getsecond(1)" v-if="cidtir">
					{{cidfour1}}
					<div class="secondarea">
						<div v-for="(item,index) in cidtir" :key=index class="secondcon" @click="getthird(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--四级搜索-->
				<div class="secondul" @click="getsecond(2)" v-if="cidfour">
					{{cidfifth1}}
					<div class="secondarea">
						<div v-for="(item,index) in cidfour" :key=index class="secondcon" @click="getfour(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--五级搜索-->
				<div class="secondul" @click="getsecond(3)" v-if="cidfifth">
					{{cidsix1}}
					<div class="secondarea">
						<div v-for="(item,index) in cidfifth" :key=index class="secondcon" @click="getfifth(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wraperwidth">
			<div v-for="(item,index) in showlist" :key=index class="serverbox">
				<!-- <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}"> -->
        <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}">
					<div class="serverbox1"><img :src="item.imgurl">
					<span></span>
					</div>
				</router-link>
        <div class="shopcart">
          <div class="shopname">{{item.name}}</div>
          <div class="button" @click="setinshop(item.name)">加入购物车</div>
        </div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="wraperwidth" v-if="fliter.pages>1">
			<div class="page">
				<ul v-if="li7>=7">
					<li @click="prev"><span>上一页</span></li>
					<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
					<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
						<span v-else>..{{this.li2}}</span>
					</li>
					<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
					<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
					<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
					<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
						<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
					</li>
					<li class="li"><span @click="changepage(li7,7)">{{this.fliter.pages}}</span></li>
					<li @click="next"><span>下一页</span></li>
				</ul>
				<ul v-else>
					<li @click="prev"><span>上一页</span></li>
					<li v-for="(item,index) in li7" :key=index class="li">
						<span @click="changepage(item,item)">{{item}}</span>
					</li>
					<li @click="next"><span>下一页</span></li>
				</ul>
			</div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle="热销产品"></Nav>
    <div class="search"><input v-model='fliter.name' class="SearchInput" placeholder="巴尔迪别墅桃红葡萄酒"><i @click="SearchProduct"><img src="https://www.laowaicang.com/avatar-搜索.png"></i></div>
		<div class="midwraperwidth" v-if="!fliter.name">
			<div class="productlistbox">
				<div class="secondul" @click="getall">热销产品</div>
				<!--二级搜索-->
				<!--用v-if进行判断，用v-for进行(循环-->
				<div class="secondul" @click="getsecond(0)">
					{{cidsec1}}
					<div class="secondarea">
						<div v-for="(item,index) in alldata" :key=index class="secondcon" @click="getsec(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--三级搜索-->
				<div class="secondul" @click="getsecond(1)" v-if="cidtir">
					{{cidfour1}}
					<div class="secondarea">
						<div v-for="(item,index) in cidtir" :key=index class="secondcon" @click="getthird(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--四级搜索-->
				<div class="secondul" @click="getsecond(2)" v-if="cidfour">
					{{cidfifth1}}
					<div class="secondarea">
						<div v-for="(item,index) in cidfour" :key=index class="secondcon" @click="getfour(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--五级搜索-->
				<div class="secondul" @click="getsecond(3)" v-if="cidfifth">
					{{cidsix1}}
					<div class="secondarea">
						<div v-for="(item,index) in cidfifth" :key=index class="secondcon" @click="getfifth(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="midwraperwidth">
			<div v-for="(item,index) in showlist" :key=index class="serverbox">
				<!-- <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}"> -->
        <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id,price:ShopPiece[index]}}}">
					<div class="serverbox1"><img :src="item.imgurl">
						<span></span>
					</div>
				</router-link>
        <div class="shopcart">
          <div class="shopname">{{item.name}}</div>
          <div class="GoShopcart">
          <div class="price"><span>￥:</span>{{ShopPiece[index]}}</div>
          <div class="button" @click="setinshop(item.name)">加入购物车</div>
          </div>
        </div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="wraperwidth" v-if="fliter.pages>1">
			<div class="page">
				<ul v-if="li7>=7">
					<li @click="prev"><span>上一页</span></li>
					<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
					<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
						<span v-else>..{{this.li2}}</span>
					</li>
					<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
					<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
					<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
					<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
						<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
					</li>
					<li class="li"><span @click="changepage(li7,7)">{{this.fliter.pages}}</span></li>
					<li @click="next"><span>下一页</span></li>
				</ul>
				<ul v-else>
					<li @click="prev"><span>上一页</span></li>
					<li v-for="(item,index) in li7" :key=index class="li">
						<span @click="changepage(item,item)">{{item}}</span>
					</li>
					<li @click="next"><span>下一页</span></li>
				</ul>
			</div>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle="热销产品"></Nav>
		<div class="mobilewraperwidth">
			<div class="mobileproductlistbox">
				<div class="mobilesecondul" @click="getall">热销产品</div>
				<!--二级搜索-->
				<!--用v-if进行判断，用v-for进行(循环-->
				<div class="mobilesecondul" @click="getsecond(0)">
					{{cidsec1}}
					<div class="secondarea mobilesecondarea">
						<div v-for="(item,index) in alldata" :key=index class="mobilesecondcon" @click="getsec(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--三级搜索-->
				<div class="mobilesecondul" @click="getsecond(1)" v-if="cidtir">
					{{cidfour1}}
					<div class="secondarea mobilesecondarea">
						<div v-for="(item,index) in cidtir" :key=index class="mobilesecondcon" @click="getthird(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--四级搜索-->
				<div class="mobilesecondul" @click="getsecond(2)" v-if="cidfour">
					{{cidfifth1}}
					<div class="secondarea mobilesecondarea">
						<div v-for="(item,index) in cidfour" :key=index class="mobilesecondcon" @click="getfour(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--五级搜索-->
				<div class="mobilesecondul" @click="getsecond(3)" v-if="cidfifth">
					{{cidsix1}}
					<div class="secondarea mobilesecondarea">
						<div v-for="(item,index) in cidfifth" :key=index class="mobilesecondcon" @click="getfifth(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mobilewraperwidth">
			<div v-if="showlist.length>=1" v-for="(item,index) in showlist" :key=index class="mobileserverbox">
				<!-- <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}"> -->
        <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}">
					<div class="mobileserverbox1"><img :src="item.imgurl"><span></span></div>
				</router-link>
			</div>
      <div v-if="showlist.length<1">
				<p class="mobilenothing">敬请期待</P>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="mobilewraperwidth" v-if="fliter.pages>1">
			<div class="mobilepage" v-if="li7>1">
				<ul v-if="li7>=7">
					<li @click="prev"><span>上一页</span></li>
					<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
					<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
						<span v-else>..{{this.li2}}</span>
					</li>
					<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
					<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
					<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
					<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
						<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
					</li>
					<li class="li"><span @click="changepage(li7,7)">{{this.fliter.pages}}</span></li>
					<li @click="next"><span>下一页</span></li>
				</ul>
				<ul v-else>
					<li @click="prev"><span>上一页</span></li>
					<li v-for="(item,index) in li7" :key=index class="mobileli">
						<span @click="changepage(item,item)">{{item}}</span>
					</li>
					<li @click="next"><span>下一页</span></li>
				</ul>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import Nav from "../common/nav.vue";
export default {
  data() {
    return {
      width: 1920,
      apimodel: "products",
      pagenum: [],
      companynews: [],
      li1: 1,
      li2: 2,
      li3: 3,
      li4: 4,
      li5: 5,
      li6: "...",
      li7: 7,
      fliter: {
        data6: [],
        limit: 3000,
        page: 1,
        name: "",
        cateId: []
      },
      listdata: [],
      alldata: [],
      tempdata: [],
      cidtir: "",
      cidfour: "",
      cidfifth: "",
      cidsix: "",
      cidsec1: "可选分类",
      cidtir1: "可选分类",
      cidfour1: "可选分类",
      cidfifth1: "可选分类",
      cidsix1: "可选分类",
      id: "",
      showlist: [],
      isfirstbrand: [],
      ShopPiece: [],
      second: false, // 用于判断相同处展开与收拢
      flag: 6 // 用于判断点击不同处的展开与收拢
    };
  },
  methods: {
    // 过得初始的数据
    getcid(data, id) {
      this.fliter.cateId = [];
      let ii = data.length;
      for (let i = 0; i < ii; i++) {
        if (data[i]._id === id) {
          this.tempdata = data[i];
          this.getlistcid(this.tempdata);
          return;
        } else {
          if (data[i].children) {
            this.getcid(data[i].children, id);
          }
        }
      }
    },
    // 获取id数组与数据库进行交互
    getlistcid(data) {
      if (data.children) {
        let ll = data.children.length;
        for (let i = 0; i < ll; i++) {
          this.getlistcid(data.children[i]);
        }
      } else {
        this.fliter.cateId.push(data._id);
      }
    },
    SearchProduct(){
      this.fliter.cateId = [];
      this.getData();
    },
    // this.cidtir 是多级列表选项
    // cidtir 是多级列表的标题
    // getlistcid重新获取id实现精确分类
    getall() {
      if (this.cidtir) {
        this.cidfour = "";
        this.cidtir = "";
        this.cidfifth = "";
        this.cidsec1 = "可选分类";
        this.cidfifth1 = "可选分类";
        this.cidfour1 = "可选分类";
        this.cidtir1 = "可选分类";
      } else {
      }
      this.fliter.cateId = [];
      this.getData();
    },
    getsec(value, value1, value2) {
      if (this.cidtir) {
        this.cidfour = "";
        this.cidfifth = "";
        this.cidfifth1 = "可选分类";
        this.cidfour1 = "可选分类";
      } else {
      }
      this.id = value2._id;
      this.fliter.cateId = []; // 重置cateId
      this.cidsec1 = value2.text;
      this.cidtir = value;
      this.cidtir1 = value1;
      this.getlistcid(value2);
      this.getData();
    },
    getthird(value, value1, value2) {
      if (this.cidfour) {
        this.cidfifth = "";
        this.cidfifth1 = "可选分类";
      } else {
      }
      this.fliter.cateId = []; // 重置cateId
      this.cidfour = value;
      this.cidfour1 = value1;
      this.getlistcid(value2);
      this.getData();
    },
    getfour(value, value1, value2) {
      if (this.cidfifth) {
        this.cidsix1 = "可选分类";
      } else {
      }
      this.fliter.cateId = []; // 重置cateId
      this.cidfifth = value;
      this.cidfifth1 = value1;
      this.getlistcid(value2);
      this.getData();
    },
    getfifth(value, value1, value2) {
      this.fliter.cateId = []; // 重置cateId
      this.cidsix = value;
      this.cidsix1 = value1;
      this.getlistcid(value2);
      this.getData();
    },
    // 点击进行动画效果交互
    getsecond(index) {
      let vv = this.alldata.length; // 获取数量 来计算secondarea的高度
      let bb = document.getElementsByClassName("secondarea").length; // 获取循环长度
      if (this.flag === index) {
        // 当点击与上一次同时
        for (let i = 0; i < bb; i++) {
          if (i === index) {
            // 点击部分为展开
            if (this.second) {
              this.second = false;
              document.getElementsByClassName("secondarea")[i].style.height =
                vv * 40 + "px";
            } else {
              this.second = true;
              document.getElementsByClassName("secondarea")[i].style.height =
                0 + "px";
            }
          } else {
            // 其他部分为收拢
            document.getElementsByClassName("secondarea")[i].style.height =
              0 + "px";
          }
        }
      } else {
        // 点击部分与上次一次不相同时
        for (let i = 0; i < bb; i++) {
          if (i === index) {
            document.getElementsByClassName("secondarea")[i].style.height =
              vv * 40 + "px"; // 当前点击的为展开
            this.flag = index;
            this.second = false; // 进行设置，避免多点一次的情况出现
          } else {
            document.getElementsByClassName("secondarea")[i].style.height =
              0 + "px"; // 其他的都是收拢
          }
        }
      }
    },
    changepage(value, index) {
      // 通过改变page来改变数据的第几页
      this.fliter.page = value;
      this.getPage(index);
      this.changeData(value);
    },
    prev() {
      if (this.fliter.pages >= 7) {
        // 如果分页数大于7
        if (this.fliter.page > 1) {
          this.fliter.page = this.fliter.page - 1; // 向前一页
          let index;
          if (this.fliter.page <= 3) {
            // 如果小于3页就不需要经验样式变化
            index = this.fliter.page;
            this.getPage(index);
            this.changeData(index);
          } else if (
            this.fliter.page > 3 &&
            this.fliter.page < this.fliter.pages - 2
          ) {
            // 当到中间部分时前后的不显示部分用。。。代替
            index = 5;
            this.getPage(index);
            this.changeData(index);
          } else if (this.fliter.page >= this.fliter.pages - 2) {
            // 分页在后三个的时候和前三一样
            index = 7 - (this.fliter.pages - this.fliter.page);
            this.getPage(index);
            this.changeData(index);
          }
        } else {
          this.fliter.page = 1;
        }
      } else {
        // 总页数小于七 ，有多少就显示多少
        if (this.fliter.page <= 1) {
          this.fliter.page = 1;
          let index = 1;
          this.getPage(index);
          this.changeData(index);
        } else {
          this.fliter.page = this.fliter.page - 1;
          let index = this.fliter.page;
          this.getPage(index);
          this.changeData(index);
        }
      }
    },
    next() {
      if (this.fliter.pages >= 7) {
        // 如果分页数大于7
        if (this.fliter.page < this.fliter.pages) {
          this.fliter.page = this.fliter.page + 1; // 向后一页
          let index;
          if (this.fliter.page <= 3) {
            // 如果小于3页就不需要经验样式变化
            index = this.fliter.page;
            this.getPage(index);
            this.changeData(index);
          } else if (
            this.fliter.page > 3 &&
            this.fliter.page < this.fliter.pages - 2
          ) {
            // 当到中间部分时前后的不显示部分用。。。代替
            index = 5;
            this.getPage(index);
            this.changeData(index);
          } else if (this.fliter.page >= this.fliter.pages - 2) {
            // 分页在后三个的时候和前三一样
            index = 7 - (this.fliter.pages - this.fliter.page);
            this.getPage(index);
            this.changeData(index);
          }
        } else {
          this.fliter.page = this.fliter.pages;
        }
      } else {
        // 总页数小于七 ，有多少就显示多少
        if (this.fliter.page >= this.fliter.pages) {
          this.fliter.page = this.fliter.pages;
          let index = this.fliter.pages;
          this.getPage(index);
          this.changeData(index);
        } else {
          this.fliter.page = this.fliter.page + 1;
          let index = this.fliter.page;
          this.getPage(index); // 调用分页
          this.changeData(index);
        }
      }
    },
    changeData(value) {
      if (this.listdata.length > 12 * value) {
        this.showlist = this.listdata.slice(12 * (value - 1), 12 * value);
      } else {
        this.showlist = this.listdata.slice(
          12 * (value - 1),
          this.listdata.length
        );
      }
      if (this.showlist) {
        let jj = this.showlist.length;
        for (let i = 0; i < jj; i++) {
          this.showlist[i].num = i;
        }
      }
      this.GetPrice();
    },
    setinshop(value) {
      if (this.$cookie.get("shop")) {
        let bb = this.$cookie.get("shop");
        bb = JSON.parse(bb);
        let shopListLength = bb.length;
        let flag = true;
        for (let i = 0; i < shopListLength; i++) {
          if (bb[i].name == value) {
            bb[i].num = bb[i].num + 1;
            flag = false;
          }
        }
        if (flag) {
          let obj = {
            name: value,
            num: 1
          };
          bb.push(obj);
        }
        bb = JSON.stringify(bb);
        this.$cookie.set("shop", bb, 1);
      } else {
        let bb = [];
        let obj = {
          name: value,
          num: 1
        };
        bb.push(obj);
        bb = JSON.stringify(bb);
        this.$cookie.set("shop", bb, 1);
      }
    },
    getPage(index) {
      if (this.fliter.pages >= 7) {
        // 如果分页数大于7
        let ii = document.getElementsByClassName("li").length;
        if (this.fliter.page <= 3) {
          // 通过选中分页是前三页，则视图层如下
          this.li2 = 2; // 通过改变数据来操作视图层
          this.li3 = 3;
          this.li4 = 4;
          this.li5 = 5;
          this.li6 = "...";
          for (let i = 0; i < ii; i++) {
            document.getElementsByClassName("li")[i].id = "";
          }
          document.getElementsByClassName("li")[index - 1].id = "active";
        } else if (
          this.fliter.page > 3 &&
          this.fliter.page < this.fliter.pages - 2
        ) {
          // 如果选中的视图层是中间部分
          this.li2 = "...";
          this.li3 = this.fliter.page - 1;
          this.li4 = this.fliter.page;
          this.li5 = this.fliter.page + 1;
          this.li6 = "...";
          if (this.fliter.page > 4) {
            // 通过传值来给予和清空id
            for (let i = 0; i < ii; i++) {
              document.getElementsByClassName("li")[i].id = "";
            }
            document.getElementsByClassName("li")[3].id = "active"; // 大于四的由于会有视图层的变化，所以id停留在中间的固定位置
          } else if (this.fliter.page === 3) {
            for (let i = 0; i < ii; i++) {
              document.getElementsByClassName("li")[i].id = "";
            }
            document.getElementsByClassName("li")[index - 1].id = "active"; // 页数等于三说明是向前翻，小于三时，试图不在变化，固定id不需固定在中间，放在当前页面即可
          }
        } else if (
          this.fliter.page >= this.fliter.pages - 2 &&
          this.fliter.page < this.fliter.pages
        ) {
          // 第N页为后三页的时候
          this.li2 = "...";
          this.li3 = this.fliter.pages - 4;
          this.li4 = this.fliter.pages - 3;
          this.li5 = this.fliter.pages - 2;
          this.li6 = this.fliter.pages - 1;
          for (let i = 0; i < ii; i++) {
            document.getElementsByClassName("li")[i].id = "";
          }
          document.getElementsByClassName("li")[index - 1].id = "active"; // id给在相应的页面数上
        } else if (this.fliter.page === this.li7) {
          this.li2 = "...";
          this.li3 = this.fliter.pages - 4;
          this.li4 = this.fliter.pages - 3;
          this.li5 = this.fliter.pages - 2;
          this.li6 = this.fliter.pages - 1;
          let ii = document.getElementsByClassName("li").length;
          for (let i = 0; i < ii; i++) {
            document.getElementsByClassName("li")[i].id = "";
          }
          document.getElementsByClassName("li")[index - 1].id = "active";
        }
      } else {
        for (let i = 0; i < this.li7; i++) {
          document.getElementsByClassName("li")[i].id = "";
        }
        document.getElementsByClassName("li")[index - 1].id = "active"; // 页数等于三说明是向前翻，小于三时，试图不在变化，固定id不需固定在中间，放在当前页面即可
      }
    },
    getdata(res, name) {
      let ii = res.data.rows.length;
      for (let i = 0; i < ii; i++) {
        if (res.data.rows[i].belong === name) {
          this.listdata.push(res.data.rows[i]);
        }
      }
    },
    getData() {
      this.$http
        .post(this.getTest() + `/${this.apimodel}/list`, this.fliter)
        .then(res => {
          // 获取数据
          this.listdata = [];
          let ii = this.isfirstbrand.length;
          for (let i = 0; i < ii; i++) {
            this.getdata(res, this.isfirstbrand[i]);
          }
          // 安排续拿数据
          // let uu = this.listdata.length
          // for (let i = 0; i < uu; i++) {
          //   console.log(res.data.rows[i].flag)
          //   if (!res.data.rows[i].flag) {
          //     console.log(res.data.rows[i])
          //   }
          // }
          if (this.listdata.length > 12) {
            this.showlist = this.listdata.slice(0, 12);
          } else {
            this.showlist = this.listdata.slice(0, this.listdata.length);
          }
          if (this.showlist) {
            let jj = this.showlist.length;
            for (let i = 0; i < jj; i++) {
              this.showlist[i].num = i;
            }
          }
          this.GetPrice();
          this.li7 = parseInt(this.listdata.length / 12) + 1;
          this.fliter.pages = this.li7;
          if (this.li7 < 7) {
            for (let i = 1; i < this.li7; i++) {
              this.pagenum.push(i);
            }
          }
        });
    },
    getbrand(res, index) {
      let ii = res.data.rows.length;
      for (let i = 0; i < ii; i++) {
        if (res.data.rows[i].isfisrt === index) {
          this.isfirstbrand.push(res.data.rows[i].name);
        }
      }
    },
    GetPrice() {
      this.ShopPiece = [];
      this.$http
        .post("http://120.79.22.222:3000/warehouse/list", this.fliter)
        .then(res => {
          let WarehouseLength = res.data.rows.length;
          let ShowListLength = this.showlist.length;
          for (let i = 0; i < ShowListLength; i++) {
            for (let j = 0; j < WarehouseLength; j++) {
              if (this.showlist[i].name == res.data.rows[j].name) {
                this.ShopPiece.push(res.data.rows[j].piece);
              }
            }
          }
        });
    },
    getBrand() {
      this.$http.post(this.getTest() + "/brand/list", this.fliter).then(res => {
        // 获取数据
        this.getbrand(res, "2");
        this.getbrand(res, "3");
        this.getbrand(res, "4");
        this.getbrand(res, "5"); // 获取品牌顺序
        let ii = res.data.rows.length;
        for (let i = 0; i < ii; i++) {
          if (!res.data.rows[i].isfisrt) {
            this.isfirstbrand.push(res.data.rows[i].name);
          }
        }
        this.getbrand(res, "7");
        this.getData();
      });
    }
  },
  components: {
    Nav
  },
  created() {
    this.width = document.documentElement.offsetWidth;
    this.id = this.$route.params.id.id; // 接受传递下来的信息
    if (this.$route.params.id.name) {
      this.cidsec1 = this.$route.params.id.name;
    }
    this.$http.get(this.getTest() + "/kind/data").then(res => {
      this.alldata = res.data[0].children[0].children[5].children;
      this.getcid(this.alldata, this.id);
      this.getBrand();
    });
  },
  mounted() {
    if (document.getElementsByClassName("li")[0]) {
      document.getElementsByClassName("li")[0].id = "active";
    }
  },
  updated() {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth;
    };
    if (document.getElementsByClassName("mobileserverbox1")[0]) {
      let ii = window.getComputedStyle(
        document.getElementsByClassName("mobileserverbox1")[0],
        null
      )["width"];
      let oo = document.getElementsByClassName("mobileserverbox1").length;
      for (let i = 0; i < oo; i++) {
        document.getElementsByClassName("mobileserverbox1")[
          i
        ].style.height = ii;
      }
    }
  }
};
</script>

<style scoped>
img {
  border: 0;
}

ul,
p {
  padding: 0;
  margin: 0;
}

.wraperwidth {
  min-width: 1000px;
  margin: 30px auto 0;
  overflow: visible;
}
.midwraperwidth {
  min-width: 1420px;
  margin: 30px auto 0;
  overflow: visible;
}
.secondul {
  width: 200px;
  height: 40px;
  background: #f2ab69;
  text-align: center;
  z-index: 14;
  position: relative;
  margin: 20px;
  margin-left: 0px;
  line-height: 40px;
  cursor: pointer;
  color: white;
}

.secondarea {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: all 0.5s;
  z-index: 14;
  color: #f2ab69;
}

.secondul .secondcon {
  line-height: 40px;
  background: #f8efe7;
  width: 100%;
  position: relative;
  z-index: 5;
}

.productlistbox {
  display: flex;
}

.page {
  margin-top: 30px;
}

.page ul {
  overflow: hidden;
  height: 50px;
  width: 700px;
  list-style: none;
  margin: 30px auto;
}

.page ul li {
  float: left;
  margin-left: 20px;
  border: solid 1px #00b7ff;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  color: #00b7ff;
}

.page ul li:hover {
  color: #ee882a;
  border: solid 1px #ee882a;
}

.page ul li span {
  padding: 0 15px;
  background: white;
}

.serverbox {
  width: 318px;
  position: relative;
  height: 378px;
  margin-right: 15px;
  float: left;
  cursor: pointer;
  overflow: hidden;
  z-index: 11;
  margin-top: 12px;
}

.serverbox1 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 318px;
  height: 318px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
}

.shopcart {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 318px;
  text-align: center;
}
.shopcart .shopname {
  top: 0;
  line-height: 28px;
}

.shopcart .button {
  position: relative;
  bottom: 0;
  width: 100px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 2px;
  border: solid 1px gray;
  color: lightseagreen;
  left: 14px;
  font-size: 14px;
}

.serverbox1 img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 100%;
}
.serverbox1 span {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.serverbox2 {
  position: absolute;
  top: 338px;
  left: 0px;
  background: #f9f1e9;
  width: 338px;
  height: 338px;
  opacity: 0;
  transition: all 0.5s;
  text-align: center;
}

.serverbox2 img {
  margin-top: 20px;
}

.prolist {
  margin-top: 50px;
  color: #ee882a;
}

#activet {
  top: 0px;
  opacity: 0.8;
}
img {
  border: 0;
}

ul,
p {
  padding: 0;
  margin: 0;
}

.mobilewraperwidth {
  width: 100%;
  margin: 10px auto 0;
  overflow: visible;
}

.mobilesecondul {
  width: 25%;
  height: 20px;
  background: #f2ab69;
  text-align: center;
  z-index: 14;
  position: relative;
  margin: 1%;
  line-height: 20px;
  cursor: pointer;
  color: white;
  font-size: 10px;
}
.mobilenothing {
  height: 100px;
  text-align: center;
  color: #ee882a;
  font-weight: 600;
  padding-top: 50px;
}
.mobilesecondarea {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.5s;
  z-index: 14;
  color: #f2ab69;
}

.mobilesecondul .mobilesecondcon {
  line-height: 20px;
  background: #f8efe7;
  width: 100%;
  position: relative;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mobileproductlistbox {
  display: flex;
}

.mobilepage {
  margin-top: 30px;
  padding-left: 30px;
}

.mobilepage ul {
  overflow: hidden;
  height: 26px;
  width: 100%;
  list-style: none;
  margin: 30px auto;
  position: relative;
  z-index: 14;
}

.mobilepage ul li {
  float: left;
  margin-left: 5px;
  border: solid 1px #00b7ff;
  line-height: 22px;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  color: #00b7ff;
}

.mobilepage ul li span {
  padding: 0 6px;
  background: white;
  font-size: 12px;
}

.mobileserverbox {
  width: 46%;
  position: relative;
  height: 46%;
  float: left;
  cursor: pointer;
  overflow: hidden;
  z-index: 11;
  margin-left: 2%;
}

.mobileserverbox1 {
  top: 0px;
  left: 0px;
  float: left;
  border: #faf1e8 solid 1px;
  width: 100%;
  height: 100%;
  text-align: center;
}

.mobileserverbox1 img {
  height: 100%;
}
.mobileserverbox1 span {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
#active {
  color: #ee882a;
  border: solid 1px #ee882a;
}
.GoShopcart {
  display: flex;
}
.price {
  margin-top: 9px;
  margin-left: 75px;
  color: red;
  font-weight: 600;
}
.price span {
  margin-left: 5px;
  color: black;
}
input{
  padding: 0;
  margin: 0;
}
.search {
  width: 600px;
  height: 40px;
  text-align: center;
  z-index: 20;
  margin: 20px auto 60px;
  position: relative;
}
.SearchInput {
  width: 600px;
  height: 40px;
  border-radius: 5px;
  color: #aaaaaa;
  padding-left: 15px;
  position: relative;
}
.search i {
  font-style: normal;
  position: absolute;
  top: 0;
  right: -15px;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.search i img {
  width: 25px;
  height: 25px;
  margin:7px 5px 7px 10px;
  position: relative;
}

</style>

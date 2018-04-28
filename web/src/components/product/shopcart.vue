<template>
	<div>
      <div class="indent" v-if = "indent.length>0">
          <span class="topclose" @click="topclose">X</span>
          <div class="indentLister">
            <div class="indentname">商品名称</div><div class="indentpiece">商品单价</div><div class="indentnumber">数量</div>
          </div>
          <div class="indentLister" v-for="(item,index) in indentList" :key=index>
            <div class="indentname">{{item.name}}</div><div class="indentpiece">{{item.piece}}</div><div class="indentnumber">{{item.num}}</div>
          </div>
          <div class="allmoneyyi">
            <div class="moneyleft">￥：{{allmoney}}</div>
            <div class="surepay" @click="surepaymoney">确认支付</div>
          </div>
          <div class="loader" v-if="paying.length>0">
            {{zhengzai}} 
          </div>
        </div>
        <div class="imgsize"><img class="headerbg" src="../../../images/shopcart.jpg"></div>
        <Nav navtitle="购物车"></Nav>
        <div class="shopwrap">
        <div class="shop-top">
          <div class="shopcheckbox">
         
          </div>
          <div class="shopimage">
          产品图片
          </div>
          <div class="shoptopname">
             品牌及名字
          </div>
          <div class="shoppiece">
            单价
          </div>
           <div class="shopnum">
            数 量
          </div>
           <div class="shopop">
            操 作
          </div>
        </div>
        <ul v-if="ShopList.length>0">
          <li v-for='(item,index) in ShopList' :key=index>
            <div class="shopcheckbox">
            <input type="checkbox" class="checkbox" @click="howmoney">
            </div>
            <div class="shopimage">
            <img :src="item.Product.imgurl">
            </div>
            <div class="shopname">
              <p>{{item.Product.belong}}</p>
            <br />
              <p>{{item.name}}</p>
            </div>
             <div class="shoppiece shoppiecer">
            ￥:{{item.piece }}
          </div>
             <div class="shopnum shoppiecer">
               <div class="join">
              <i @click="ddd(index)">-</i>
              <span class="changenumber">
              {{item.Number}}
              </span>
              <i @click="add(index)">+</i>
              </div>
          </div>
           <div class="shopop shoppiecer">
             <span @click="deleter(item.name)">
            删 除
            </span>
          </div>
          </li>
        </ul>
        <ul v-else>
          <p class="nothing">
            {{nothing}}
          </p>
        </ul>
        <div class="foot">
           <div class="foot-my">
              <input type="checkbox" class="allcheckbox" @click="allcheck">全选
             <button @click="delemore">
               删除选中项
               </button>
               <span class="allmoney">
                 总价格:￥{{allmoney}}
                 </span>
           </div>
           <div class='foot-js' @click="indenting">结算</div>
        </div>
        </div>
        <Foot></Foot>
	</div>
</template>
<script>
import Nav from "../common/nav.vue";
import Foot from "../common/footer.vue";
export default {
  data() {
    return {
      ShopList: [],
      allmoney: 0,
      num: [],
      nothing: "",
      fliter: {
        data6: [],
        limit: 3000,
        page: 1,
        name: []
      },
      paying: [],
      indent: [],
      indentList: [],
      zhengzai: "正在支付... "
    };
  },
  methods: {
    GetShopList() {//获取商品列表
      if (this.$cookie.get("user")) {//判断是否登入
        this.fliter.name = [];
        let obj1 = {
          name: this.$cookie.get("user")
        };
        this.$http
          .post("http://120.79.22.222:3000/user/list", obj1)
          .then(res => {
            if (this.$cookie.get("shop")) {//本地是否存在商品
              let obj = JSON.parse(this.$cookie.get("shop"));
              let ShopListLength = obj.length;
              let ii = obj.length;
              if (res.data.rows[0].shopcart) {//判断该用户是否原来购物车已存在商品
                if (JSON.parse(res.data.rows[0].shopcart).length > 0) {
                  res.data.rows[0].shopcart = JSON.parse(
                    res.data.rows[0].shopcart
                  );
                  let ll = res.data.rows[0].shopcart.length;
                  let flag = true;
                  for (let i = 0; i < ii; i++) {//通过循环操作把内容
                    flag = true;
                    for (let j = 0; j < ll; j++) {
                      if (obj[i].name == res.data.rows[0].shopcart[j].name) {//若有想通的则数量相加
                        res.data.rows[0].shopcart[j].num =
                          res.data.rows[0].shopcart[j].num + obj[i].num;
                        flag = false;
                      }
                    }
                    if (flag) {
                      res.data.rows[0].shopcart.push(obj[i]);
                    }
                  }
                  let ShopListLength = res.data.rows[0].shopcart.length;
                  for (let i = 0; i < ShopListLength; i++) {//获取具体数据
                    this.fliter.name.push(res.data.rows[0].shopcart[i].name);
                    this.num.push(res.data.rows[0].shopcart[i].num);
                  }
                  res.data.rows[0].shopcart = JSON.stringify(
                    res.data.rows[0].shopcart
                  );
                  this.$http
                    .put(
                      "http://120.79.22.222:3000/user/data/" +
                        res.data.rows[0]._id,
                      res.data.rows[0]
                    )
                    .then(res => {//把相应的数据保存在数据库并本地缓存清除
                      this.$cookie.delete("shop");
                    });
                }
              } else {
                let ShopListLength = obj.length;
                for (let i = 0; i < ShopListLength; i++) {
                  this.fliter.name.push(obj[i].name);
                  this.num.push(obj[i].num);
                }
                res.data.rows[0].shopcart = obj;
                res.data.rows[0].shopcart = JSON.stringify(
                  res.data.rows[0].shopcart
                );
                this.$http
                  .put(
                    "http://120.79.22.222:3000/user/data/" +
                      res.data.rows[0]._id,
                    res.data.rows[0]
                  )
                  .then(res => {
                    this.$cookie.delete("shop");
                  });
              }
            } else {//如果cookie没数据
              if (JSON.parse(res.data.rows[0].shopcart).length > 0) {
                let ShopListLength = JSON.parse(res.data.rows[0].shopcart)
                  .length;
                for (let i = 0; i < ShopListLength; i++) {
                  this.fliter.name.push(
                    JSON.parse(res.data.rows[0].shopcart)[i].name
                  );
                  this.num.push(JSON.parse(res.data.rows[0].shopcart)[i].num);
                }
              } else {
                this.fliter.name = ["#$$"];//一个无法找到的模糊查询条件
                this.nothing = "空空如也";
              }
            }
            this.GetShopList2(JSON.parse(res.data.rows[0].shopcart));
          });
      } else {
        if (this.$cookie.get("shop")) {//本地存储操作
          this.fliter.name = [];
          let obj = JSON.parse(this.$cookie.get("shop"));
          let ShopListLength = obj.length;
          for (let i = 0; i < ShopListLength; i++) {
            this.fliter.name.push(obj[i].name);
            this.num.push(obj[i].num);
          }
          this.GetShopList2(obj);
        } else {
          this.nothing = "空空如也";
        }
      }
    },
    GetShopList2(obj) {//获取数据列表
      this.$http
        .post("http://120.79.22.222:3000/warehouse/list", this.fliter)
        .then(res => {
          let ii = res.data.rows.length;
          for (let i = 0; i < ii; i++) {
            res.data.rows[i].Product = JSON.parse(res.data.rows[i].Product);
            this.ShopList = res.data.rows;
            let ii = this.ShopList.length;
            let uu = obj.length;
            for (let i = 0; i < uu; i++) {
              for (let j = 0; j < ii; j++) {
                if (obj[i].name == this.ShopList[j].name) {
                  this.ShopList[j].Number = obj[i].num;
                }
              }
            }
          }
        });
    },
    add(index) {
      this.ShopList[index].Number = this.ShopList[index].Number + 1;
      this.ShopList.push("1");
      this.ShopList.pop();
      this.howmoney();
    },
    ddd(index) {
      if (this.ShopList[index].Number > 1) {
        this.ShopList[index].Number = this.ShopList[index].Number - 1;
        this.ShopList.push("1");
        this.ShopList.pop();
        this.howmoney();
      }
    },
    deleter(nema) {
      if (this.$cookie.get("user")) {
        let obj1 = {
          name: this.$cookie.get("user")
        };
        this.$http
          .post("http://120.79.22.222:3000/user/list", obj1)
          .then(res => {
            let arr = JSON.parse(res.data.rows[0].shopcart);
            let ii = arr.length;
            let brr = [];
            for (let i = 0; i < ii; i++) {
              if (arr[i].name == nema) {
              } else {
                brr.push(arr[i]);
              }
            }
            res.data.rows[0].shopcart = JSON.stringify(brr);
            this.$http
              .put(
                "http://120.79.22.222:3000/user/data/" + res.data.rows[0]._id,
                res.data.rows[0]
              )
              .then(res => {
                this.GetShopList();
              });
          });
      } else {
        let arr =JSON.parse(this.$cookie.get("shop"));
        let ii = arr.length;
        let brr = [];
        for (let i = 0; i < ii; i++) {
          if (arr[i].name == nema) {
          } else {
            brr.push(arr[i]);
          }
        }
        brr = JSON.stringify(brr);
        this.$cookie.set("shop", brr, 1);
        this.GetShopList();
      }
      let check = document.getElementsByTagName("input");
      let ii = check.length;
      for (let i = 0; i < ii - 1; i++) {
        document.getElementsByTagName("input")[i].checked = false;
      }
      this.howmoney();
    },
    delemore() {
      let check = document.getElementsByTagName("input");
      let ii = check.length;
      let crr = [];
      for (let i = 0; i < ii - 1; i++) {
        if (document.getElementsByTagName("input")[i].checked) {
        } else {
          crr.push(i);
        }
      }
      for (let i = 0; i < ii - 1; i++) {
        document.getElementsByTagName("input")[i].checked = false;
      }
      if (this.$cookie.get("user")) {
        let obj1 = {
          name: this.$cookie.get("user")
        };
        this.$http
          .post("http://120.79.22.222:3000/user/list", obj1)
          .then(res => {
            let arr = this.ShopList;
            let ii = crr.length;
            let brr = [];
            let oo = arr.length;
            for (let i = 0; i < ii; i++) {
              let obj = {
                name: arr[crr[i]].name,
                num: arr[crr[i]].Number
              };
              brr.push(obj);
            }
            res.data.rows[0].shopcart = JSON.stringify(brr);
            this.$http
              .put(
                "http://120.79.22.222:3000/user/data/" + res.data.rows[0]._id,
                res.data.rows[0]
              )
              .then(data => {
                this.GetShopList();
              });
          });
      } else {
        let arr = JSON.parse(this.$cookie.get("shop"));
        let ii = crr.length;
        let brr = [];
        for (let i = 0; i < ii; i++) {
          brr.push(arr[crr[i]]);
        }
        this.$cookie.set("shop", JSON.stringify(brr), 1);
        this.GetShopList();
      }
      this.howmoney();
    },
    allcheck() {
      this.allmoney = 0;
      let check = document.getElementsByTagName("input");
      let all = check[check.length - 1].checked;
      let ii = check.length;
      for (let i = 0; i < ii - 1; i++) {
        document.getElementsByTagName("input")[i].checked = all;
        if (all) {
          this.allmoney += this.ShopList[i].Number * this.ShopList[i].piece;
        }
      }
    },
    topclose() {
      this.indent = [];
    },
    howmoney() {
      this.allmoney = 0;
      let check = document.getElementsByTagName("input");
      let ii = check.length;
      for (let i = 0; i < ii - 1; i++) {
        if (document.getElementsByTagName("input")[i].checked) {
          this.allmoney += this.ShopList[i].Number * this.ShopList[i].piece;
        }
      }
    },
    indenting() {
      this.indentList = [];
      let check = document.getElementsByTagName("input");
      let ii = check.length;
      let arr = this.ShopList;
      for (let i = 0; i < ii - 1; i++) {
        if (document.getElementsByTagName("input")[i].checked) {
          let obj = {
            name: arr[i].name,
            num: arr[i].Number,
            piece: arr[i].piece
          };
          this.indentList.push(obj);
        } else {
        }
      }
      if (this.$cookie.get("user")) {
        if (this.indentList.length) {
          this.indent.push("ss");
        } else {
          alert("请先勾选您需要的产品");
        }
      } else {
        alert("请先登入");
      }
    },
    surepaymoney() {
      let ii = this.indentList.length;
      let obj = {
        product: []
      };
      let obj2 = {
        name: []
      };
      let obj3 = {
        name: [],
        num: []
      };
      for (let i = 0; i < ii; i++) {
        obj.product.push(this.indentList[i].name);
        obj2.name.push(this.indentList[i].name);
        obj3.name.push(this.indentList[i].name);
        obj3.num.push(this.indentList[i].num);
      }

      obj.product = JSON.stringify(obj.product);
      let obj1 = {
        name: this.$cookie.get("user")
      };
      this.$http
        .post("http://120.79.22.222:3000/warehouse/list", obj2)
        .then(jg => {
          let gg = jg.data.rows.length;
          for (let i = 0; i < gg; i++) {
            for (let j = 0; j < gg; j++) {
              if (obj3.name[i] == jg.data.rows[j].name) {
                let change = jg.data.rows[j];
                change.num = jg.data.rows[j].num - obj3.num[i];
                if (change.num > 0) {
                  this.$http
                    .put(
                      "http://120.79.22.222:3000/warehouse/data/" +
                        jg.data.rows[j]._id,
                      change
                    )
                    .then(jj => {
                      this.$http
                        .post("http://120.79.22.222:3000/user/list", obj1)
                        .then(res => {
                          obj.telephone = res.data.rows[0].telephone;
                          obj.area = res.data.rows[0].area;
                          obj.name = res.data.rows[0].name;
                          this.$http
                            .post("http://120.79.22.222:3000/indent/data", obj)
                            .then(data => {
                              this.paying.push("ss");
                              let that = this;
                              setTimeout(function() {
                                that.zhengzai = "支付成功";
                              }, 1000);
                              setTimeout(function() {
                                that.paying = [];
                                that.indent = [];
                                this.delemore();
                              }, 2000);
                            });
                        });
                    });
                } else {
                  alert("库存不足，补货中");
                }
              }
            }
          }
        });
    }
  },
  components: {
    Nav,
    Foot
  },
  created() {
    this.GetShopList();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin-top: 30px;
  z-index: 16;
  min-height: 150px;
}
ul li {
  min-height: 150px;
  border: 1px solid gray;
  border-radius: 5px;
  position: relative;
  margin-top: 12px;
  display: flex;
}
.shop-top {
  min-height: 50px;
  border-bottom: 1px solid gray;
  border-radius: 5px;
  position: relative;
  margin-top: 50px;
  display: flex;
}
ul li img {
  max-width: 100px;
  height: 100px;
  margin-top: 25px;
}
.shopcheckbox {
  width: 90px;
  margin-left: 40px;
  margin-top: -2px;
}
.shopimage {
  margin-right: 30px;
}
.shopimage {
  width: 120px;
  text-align: center;
}
.shopwrap {
  width: 1000px;
  margin: 0 auto;
}
.shoppiece {
  width: 120px;
  text-align: center;
}
.shopop {
  width: 120px;
  float: right;
  text-align: center;
}
.shoppiecer {
  margin-top: 65px;
  font-weight: 600;
  cursor: pointer;
  z-index: 20;
}
.checkbox {
  position: relative;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  top: 65px;
  z-index: 18;
  margin-left: 20px;
}
.shop-top input {
  top: 5px;
  margin-right: 10px;
}
.shopnum {
  width: 150px;
  text-align: center;
}
.shopname {
  margin-top: 50px;
  width: 250px;
}
.shoptopname {
  width: 250px;
}
.shopname p:nth-of-type(1) {
  font-weight: 600;
}
span {
  cursor: pointer;
}
i {
  display: inline-block;
  font-style: normal;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background: #cccccc;
  margin: 0;
  z-index: 20;
  position: relative;
  cursor: pointer;
}
.changenumber {
  display: inline-block;
  font-style: normal;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border: 1px black solid;
  margin: 0;
  box-sizing: border-box;
}
.join {
  width: 60px;
  display: flex;
  margin: 0 auto;
}
.foot {
  margin-top: 20px;
  width: 1000px;
  height: 50px;
  line-height: 50px;
  display: flex;
}
.foot-my {
  flex: 1;
  position: relative;
  padding-left: 100px;
}
.foot-js {
  width: 120px;
  height: 50px;
  line-height: 50px;
  background: green;
  text-align: center;
  font-weight: 600;
  color: white;
  cursor: pointer;
}
.allmoney {
  position: relative;
  float: right;
  margin-right: 30px;
  font-weight: 600;
}
.allcheckbox {
  position: relative;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  top: 5px;
  z-index: 18;
  margin-left: -40px;
  margin-right: 10px;
}
.nothing {
  margin: 0 auto;
  font-weight: 600;
  color: orangered;
  text-align: center;
  font-size: 20px;
  margin-top: 70px;
}
button {
  margin-left: 40px;
}
.indent {
  width: 40%;
  margin: 150px 30%;
  position: fixed;
  background: white;
  min-height: 250px;
  z-index: 22;
}
.topclose {
  color: gray;
  position: absolute;
  right: 10px;
  top: 5px;
}
.topclose:hover {
  color: red;
}
.indentLister {
  margin: 20px;
  border-bottom: gray 1px solid;
  font-size: 16px;
  display: flex;
  line-height: 35px;
  color: gray;
}
.indentname {
  width: 250px;
}
.indentpiece {
  width: 100px;
  text-align: center;
}
.indentnumber {
  flex: 1;
  text-align: center;
}
.allmoneyyi {
  position: relative;
  margin-top: 50px;
}
.moneyleft {
  padding-right: 50px;
  text-align: right;
  font-weight: 600;
}
.surepay {
  text-align: center;
  margin: 20px;
  background: gray;
  color: white;
  border: 1px solid black;
  width: 100px;
  float: right;
  height: 35px;
  line-height: 35px;
  margin-right: 30px;
  cursor: pointer;
}
.loader {
  width: 200px;
  height: 80px;
  position: absolute;
  bottom: 0px;
  left: 10%;
  border: double 10px gray;
  text-align: center;
  line-height: 80px;
  font-size: 24px;
  font-weight: 600;
}
.imgsize {
  width: 100%;
}
.imgsize img {
  width: 100%;
}
</style>
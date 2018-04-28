<template>
  <div>
	<!-- <div v-if="width<1500&&width>640">
		<div>
			<div><img class="headerbg" src="../../../images/banner1.jpg" alt="正在加载中"/></div>
		</div>

		热门品类
		<div class="wraperwidth">
			<p class="index-product-title"><span>热门品类</span></p>
			<p class="index-product-introduction">
				老外仓贸易有限公司致力于打造成为中国跨境食品的领军企业、服务和支持于一体的全方位解决方案提商。</p>
		</div>
		<div class="wraperwidth">
			<div class="index-product-content">
				<div class="index-product-content-left">
					<img src="../../../images/index-products1.jpg" class="index-product-content-left-img"/>
				</div>
				<div class="index-product-content-right">
					<div class="index-product-content-right-top">
            <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e5fce9270fa4c2b6fc',name:'酒水饮料'}}}" class="fontstyle">
						<div class="index-product-content-box1">
							<img src="../../../images/products1-3.jpg" />
						</div>
            </router-link>
            <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e6fce9270fa4c2b6fd',name:'进口零食'}}}" class="fontstyle">
						<div class="index-product-content-box">
							<img src="../../../images/products2-8.jpg" class="productimg"/>
							<p class="index-product-content-right-title">进口零食</p>
							<p class="index-product-content-right-content">意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的食品</p>
						</div>
            </router-link>
            <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e7fce9270fa4c2b700',name:'粮油副食'}}}" class="fontstyle">
						<div class="index-product-content-box1">
							<img src="../../../images/products1-5.jpg" />
						</div>
             </router-link>
					</div>
					<div class="index-product-content-right-bottom">
             <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e5fce9270fa4c2b6fc',name:'酒水饮料'}}}" class="fontstyle">
						<div class="index-product-content-box">
							<img src="../../../images/products2-3.jpg" class="productimg"/>
							<p class="index-product-content-right-title">酒水饮料</p>
							<p class="index-product-content-right-content">意大利文化我们应该学习葡萄酒和许多其他称是家庭的基本饮料</p>
						</div>
            </router-link>
             <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e6fce9270fa4c2b6fd',name:'进口零食'}}}" class="fontstyle">
						<div class="index-product-content-box1">
							<img src="../../../images/products1-8.jpg" />
						</div>
            </router-link>
             <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e7fce9270fa4c2b700',name:'粮油副食'}}}" class="fontstyle">
						<div class="index-product-content-box">
							<img src="../../../images/products2-5.jpg" class="productimg"/>
							<p class="index-product-content-right-title">粮油副食</p>
							<p class="index-product-content-right-content">意大利是个美食国家，他们有着悠久的饮料历史，作为他们的艺术，时尚和家具，总是喜欢精心制作</p>
						</div>
            </router-link>
					</div>
				</div>
			</div>
		</div>

	新闻动态

		<div class="index-news-body">
			<div class="wraperwidth">
				<div class="index-news-title">
          <router-link to='/news' tag='span' class="navfont" active-class="routeactive">
					<img src="../../../images/index-news.jpg" class="productimg"/>
          </router-link>
					<p>老外仓坚持“合作创造财富、创新谋求发展”的经营理念，力求为社会、为企业、为员工创造和谐的氛围，走持续发展的道路。</p>
				</div>
				<div class="index-news-content">
          <div class="index-news-content-top">
						<div class="index-news-content-top-boxx" v-for="(item,index) in indexnews1" :key=index>
							<i>
								<span class="index-news-content-span">
									<p class="index-news-p1"><span class="index-news-content-year">{{item.day}}</span><span class="index-news-content-month">{{item.year}}</span></p>
									<p class="index-news-p2">{{item.title}}</p>
								</span>
							</i>
              <router-link :to="{name:'newdetail',params:{content:item}}">
							<img :src="item.imgurl" class="index-news-content-top-img"/>
              </router-link>
						</div>
					</div>
          <div class="index-news-content-top">
						<div class="index-news-content-top-boxx" v-for="(item,index) in indexnews2" :key=index>
							<i>
								<span class="index-news-content-span">
									<p class="index-news-p1"><span class="index-news-content-year">{{item.day}}</span><span class="index-news-content-month">{{item.year}}</span></p>
									<p class="index-news-p2">{{item.title}}</p>
								</span>
							</i>
              <router-link :to="{name:'newdetail',params:{content:item}}">
							<img :src="item.imgurl" class="index-news-content-top-img"/>
              </router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		关于我们

		<div class="index-about-body-next">
			<img class="index-about-img" src="../../../images/index-about.jpg" />
			<div class="index-about-content">
				<div class="index-about-box">
          <router-link to='/internet/server'>
					<img src="../../../images/index-about1.png" class="productimg"/>
          </router-link>
					<p class="index-about-box-p1">公司服务</p>
					<p class="index-about-box-p2">专业上乘，服务一流，实现客户的利益最大化</p>
				</div>
				<div class="index-about-box">
          <router-link to='/hr/advertises'>
					<img src="../../../images/index-about2.png" class="productimg"/>
          </router-link>
					<p class="index-about-box-p1">公司招聘</p>
					<p class="index-about-box-p2">请关注我们的最新招聘信息</p>
				</div>
				<div class="index-about-box">
          <router-link to='/internet'>
					<img src="../../../images/index-about3.png" class="productimg"/>
          </router-link>
					<p class="index-about-box-p1">营销活动</p>
					<p class="index-about-box-p2">让服务永远物超所值，服务提升品质.</p>
				</div>
				<div class="index-about-box">
          <router-link to='/message'>
					<img src="../../../images/index-about4.png" class="productimg"/>
          </router-link>
					<p class="index-about-box-p1">Guestbook</p>
					<p class="index-about-box-p2">请详细的填写表单留言，我们将在第一时间与您联系。</p>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>


		<div class="index-internet-body">
			<img class="imgsize" src="../../../images/index-network.jpg" />
			<div class="index-internet-content">
				<div class="index-internet-top">
					<p class="index-internet-title">营销网络</p>
					<p class="index-internet-title-introduction">老外仓以“好”的生活，没那么“远”为经营理念，精选无数优质厂商，产品覆盖酒水饮料、休闲食品、粮油米面、新鲜蔬果、冷冻食品五大领域，主要负责采购、品控、物流以及销售。通过链接意大利厂商和国内经销商，为用户提供最完善的服务体系，和用户一起为美好生活而努力。</p>
				</div>
				<div class="index-internet-content">

					<div class="index-internet-box" v-for="(item,index) in internet" :key=index>
						<p class="index-internet-body-p1">{{item.num}}</p>
						<p class="index-internet-body-p2">{{item.introduction}}</p>
					</div>
					<div style="clear: both;"></div>
				</div>

			</div>
		</div>


		<div class="index-contact">
			<img class="imgsize" src="../../../images/index-contact.jpg" />
			<div class="index-contact-c">
				<div class="index-contact-content">
					<p class="index-contact-introduce">老外仓国际贸易有限责任公司成立于2017年3月，注册资本伍仟万元，是一家新型的中外合资企业。团队成员主要来自中国和意大利两个国家。老外仓是在基于B2B电子商务平台上，为国内的经销商提供来自于意大利的优质食品。进口原产地,食品纯天然，健康无污染是老外仓在选择进口食品时的三大前提。在挑选意大利进口食品上...
						<router-link to='/about' tag='span' class="navfont" active-class="routeactive">
            <span class="index-contact-more">MORE></span>
            </router-link></p>
					<ul class="index-contact-method">
						<li v-for="(item,index) in contact" :key=index><img :src="item.icon" class="iconfont"><span class="index-contact-span">{{item.value}}</span></li>
					</ul>
				</div>
			</div>
		</div>


		<div class="index-cooperation">
			<div class="index-cooperation-top">
				<p class="index-cooperation-title">合作伙伴</p>
				<p class="index-cooperation-content">这里是一些关于老外仓的业务服务伙伴</p>
        <div class="ulheight">
				<ul class="ullong">
					<li v-for="(item,index) in cooperation"  :key=index>
            <router-link :to="'/brand/branddetail/'+item._id">
						<img :src="item.imgurl" />
            </router-link>
					</li>
				</ul>
        </div>
				<div class="index-cooperation-bottom">
					<i><img :src="cooperationf[0]" id="ullongone" @click="ullongone"></i>
					<i><img :src="cooperationf[1]" id="ullongtwo" @click="ullongtwo"></i>
				</div>
				<p class="index-cooperation-footer">老外仓&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;浙ICP备15014783号-2</p>
			</div>
		</div>
	</div> -->
  <div v-if="width>=640">
		<div>
			<div><img class="midheaderbg" src="../../../images/banner1.jpg"/></div>
		</div>

    <div class="midwraperwidth">
      <div class="midP1title"><img src="https://www.laowaicang.com/avatar-sellhot.png">热销产品</div>
      <div class="midProductList">
      <div v-for="(item,index) in P1" :key=index class="ShowProduct">
        <div class="ShopListImage">
          <router-link :to="{name:'productdetail',params:{content:{content:item.Product,navname:'休闲食品',relative:'5a9bf5e6fce9270fa4c2b6fd',price:item.piece}}}">
          <img :src="item.Product.imgurl">
          </router-link>
          <div class="shopcart">
            <div class="shopname">{{item.name}}</div>
            <div class="GoShop">
            <div class="price"><span>￥:</span>{{item.piece}}</div>
            <div class="button" @click="setinshop(item.Product.name)">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="midwraperwidth">
      <div class="midP1title"><img src="https://www.laowaicang.com/avatar-NewProduct.png">最新产品</div>
      <div class="midProductList">
      <div v-for="(item,index) in P2" :key=index class="ShowProduct">
        <div class="ShopListImage">
          <router-link :to="{name:'productdetail',params:{content:{content:item.Product,navname:'粮米油面',relative:'5a9bf5e7fce9270fa4c2b700',price:item.piece}}}">
          <img :src="item.Product.imgurl">
          </router-link>
          <div class="shopcart">
            <div class="shopname">{{item.name}}</div>
            <div class="GoShop">
            <div class="price"><span>￥:</span>{{item.piece}}</div>
            <div class="button" @click="setinshop(item.Product.name)">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
		<!--热门品类-->
  </div>
  <div>
		<div class="midwraperwidth">
			<p class="midindex-product-title"><span>热门品类</span></p>
			<p class="midindex-product-introduction">
				老外仓贸易有限公司致力于打造成为中国跨境食品的领军企业、服务和支持于一体的全方位解决方案提商。</p>
		</div>
		<div class="midwraperwidth">
			<div class="midindex-product-content">
				<div class="midindex-product-content-left">
					<img src="../../../images/index-products1.jpg"/>
				</div>
				<div class="midindex-product-content-right">
					<div class="midindex-product-content-right-top">
            <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e5fce9270fa4c2b6fc',name:'酒水饮料'}}}" class="midfontstyle">
						<div class="midindex-product-content-box1">
							<img src="../../../images/products1-3.jpg" />
						</div>
            </router-link>
            <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e6fce9270fa4c2b6fd',name:'进口零食'}}}" class="midfontstyle">
						<div class="midindex-product-content-box">
							<img src="../../../images/products2-8.jpg" />
							<p class="midindex-product-content-right-title">进口零食</p>
							<p class="midindex-product-content-right-content">意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的食品</p>
						</div>
            </router-link>
            <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e7fce9270fa4c2b700',name:'粮油副食'}}}" class="midfontstyle">
						<div class="midindex-product-content-box1">
							<img src="../../../images/products1-5.jpg" />
						</div>
             </router-link>
					</div>
					<div class="midindex-product-content-right-bottom">
             <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e5fce9270fa4c2b6fc',name:'酒水饮料'}}}" class="midfontstyle">
						<div class="midindex-product-content-box">
							<img src="../../../images/products2-3.jpg" />
							<p class="midindex-product-content-right-title">酒水饮料</p>
							<p class="midindex-product-content-right-content">意大利文化我们应该学习葡萄酒和许多其他称是家庭的基本饮料</p>
						</div>
            </router-link>
             <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e6fce9270fa4c2b6fd',name:'进口零食'}}}" class="midfontstyle">
						<div class="midindex-product-content-box1">
							<img src="../../../images/products1-8.jpg" />
						</div>
            </router-link>
             <router-link :to="{name:'productcid',params:{id:{id:'5a9bf5e7fce9270fa4c2b700',name:'粮油副食'}}}" class="midfontstyle">
						<div class="midindex-product-content-box">
							<img src="../../../images/products2-5.jpg" />
							<p class="midindex-product-content-right-title">粮油副食</p>
							<p class="midindex-product-content-right-content">意大利是个美食国家，他们有着悠久的饮料历史，作为他们的艺术，时尚和家具，总是喜欢精心制作</p>
						</div>
            </router-link>
					</div>
				</div>
			</div>
		</div>

		<!--新闻动态-->

		<div class="midindex-news-body">
			<div class="midwraperwidth">
				<div class="midindex-news-title">
          <router-link to='/news' tag='span' class="midnavfont" active-class="routeactive">
					<img src="../../../images/index-news.jpg" />
          </router-link>
					<p>老外仓坚持“合作创造财富、创新谋求发展”的经营理念，力求为社会、为企业、为员工创造和谐的氛围，走持续发展的道路。</p>
				</div>
				<div class="midindex-news-content">
          <div class="midindex-news-content-top">
						<div class="midindex-news-content-top-boxx" v-for="(item,index) in indexnews1" :key=index>
							<i>
								<span class="midindex-news-content-span">
									<p class="midindex-news-p1"><span class="midindex-news-content-year">{{item.day}}</span><span class="midindex-news-content-month">{{item.year}}</span></p>
									<p class="midindex-news-p2">{{item.title}}</p>
								</span>
							</i>
              <router-link :to="{name:'newdetail',params:{content:item}}">
							<img :src="item.imgurl" class="midindex-news-content-top-img"/>
              </router-link>
						</div>
					</div>
          <div class="midindex-news-content-top">
						<div class="midindex-news-content-top-boxx" v-for="(item,index) in indexnews2" :key=index>
							<i>
								<span class="midindex-news-content-span">
									<p class="midindex-news-p1"><span class="midindex-news-content-year">{{item.day}}</span><span class="midindex-news-content-month">{{item.year}}</span></p>
									<p class="midindex-news-p2">{{item.title}}</p>
								</span>
							</i>
              <router-link :to="{name:'newdetail',params:{content:item}}">
							<img :src="item.imgurl" class="midindex-news-content-top-img"/>
              </router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--关于我们-->

		<div class="midindex-about-body-next">
			<img class="midindex-about-img" src="../../../images/index-about.jpg" />
			<div class="midindex-about-content">
				<div class="midindex-about-box">
           <router-link to='/internet/server'>
					<img src="../../../images/index-about1.png" />
           </router-link>
					<p class="midindex-about-box-p1">公司服务</p>
					<p class="midindex-about-box-p2">专业上乘，服务一流，实现客户的利益最大化</p>
				</div>
				<div class="midindex-about-box">
           <router-link to='/hr/advertises'>
					<img src="../../../images/index-about2.png" />
           </router-link>
					<p class="midindex-about-box-p1">公司招聘</p>
					<p class="midindex-about-box-p2">请关注我们的最新招聘信息</p>
				</div>
				<div class="midindex-about-box">
          <router-link to='/internet'>
					<img src="../../../images/index-about3.png" />
          </router-link>
					<p class="midindex-about-box-p1">营销活动</p>
					<p class="midindex-about-box-p2">让服务永远物超所值，服务提升品质.</p>
				</div>
				<div class="midindex-about-box">
          <router-link to='/message'>
					<img src="../../../images/index-about4.png" />
          </router-link>
					<p class="midindex-about-box-p1">Guestbook</p>
					<p class="midindex-about-box-p2">请详细的填写表单留言，我们将在第一时间与您联系。</p>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>

		<!--营销网络-->
		<div class="midindex-internet-body">
			<img class="midimgsize" src="../../../images/index-network.jpg" />
			<div class="midindex-internet-content">
				<div class="midindex-internet-top">
					<p class="midindex-internet-title">营销网络</p>
					<p class="midindex-internet-title-introduction">老外仓以“好”的生活，没那么“远”为经营理念，精选无数优质厂商，产品覆盖酒水饮料、休闲食品、粮油米面、新鲜蔬果、冷冻食品五大领域，主要负责采购、品控、物流以及销售。通过链接意大利厂商和国内经销商，为用户提供最完善的服务体系，和用户一起为美好生活而努力。</p>
				</div>
				<div class="midindex-internet-content">
					<!--循环数据-->
					<div class="midindex-internet-box" v-for="(item,index) in internet" :key=index>
						<p class="midindex-internet-body-p1">{{item.num}}</p>
						<p class="midindex-internet-body-p2">{{item.introduction}}</p>
					</div>
					<div style="clear: both;"></div>
				</div>

			</div>
		</div>

		<!--联系我们-->
		<div class="midindex-contact">
			<img class="midimgsize" src="../../../images/index-contact.jpg" />
			<div class="midindex-contact-c">
				<div class="midindex-contact-content">
					<p class="midindex-contact-introduce">老外仓国际贸易有限责任公司成立于2017年3月，注册资本伍仟万元，是一家新型的中外合资企业。团队成员主要来自中国和意大利两个国家。老外仓是在基于B2B电子商务平台上，为国内的经销商提供来自于意大利的优质食品。进口原产地,食品纯天然，健康无污染是老外仓在选择进口食品时的三大前提。在挑选意大利进口食品上...
						<router-link to='/about' tag='span' class="midnavfont" active-class="midrouteactive">
            <span class="midindex-contact-more">MORE></span>
            </router-link></p>
					<ul class="midindex-contact-method">
						<li v-for="(item,index) in contact" :key=index><img :src="item.icon"><span class="midindex-contact-span">{{item.value}}</span></li>
					</ul>
				</div>
			</div>
		</div>

		<!--合作伙伴-->
		<div class="midindex-cooperation">
			<div class="midindex-cooperation-top">
				<p class="midindex-cooperation-title">合作伙伴</p>
				<p class="midindex-cooperation-content">这里是一些关于老外仓的业务服务伙伴</p>
        <div class="midulheight">
				<ul class="midullong">
					<li v-for="(item,index) in cooperation"  :key=index>
            <router-link :to="'/brand/branddetail/'+item._id">
						<img :src="item.imgurl" />
            </router-link>
					</li>
				</ul>
        </div>
				<div class="midindex-cooperation-bottom">
					<i><img :src="cooperationf[0]" id="ullongthree" @click="ullongthree"></i>
					<i><img :src="cooperationf[1]" id="ullongfour" @click="ullongfour"></i>
				</div>
				<p class="midindex-cooperation-footer">老外仓&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;浙ICP备15014783号-2</p>
			</div>
		</div>
	</div>
  <div v-if="width<=640">
		<div>
			<div><img class="mobileheaderbg" src="../../../images/banner1.jpg"/></div>
		</div>

		<!--热门品类-->
		<div class="mobilewraperwidth">
			<p class="mobileindex-product-title"><span>热门品类</span>
        <router-link to='/product' tag='span' class="knowmore" active-class="mobilerouteactive">了解更多</router-link>
      </p>
			<p class="mobileindex-product-introduction">
				老外仓贸易有限公司致力于打造成为中国跨境食品的领军企业、服务和支持于一体的全方位解决方案提商。
      </p>
		</div>
		<div class="mobilewraperwidth">
			<div class="mobileindex-product-content">
				<div class="mobileindex-product-content-right">
					<div class="mobileindex-product-content-right-top">
            <router-link :to="{name:'productcid',params:{id:{id:'5a72ca6cd03d2b14449ff1a7',name:'进口零食'}}}" class="mobilefontstyle mobileindex-product-content-box1">
						<div >
							<img src="../../../images/products1-8.jpg" />
						</div>
            </router-link>
            <router-link :to="{name:'productcid',params:{id:{id:'5a72ca6cd03d2b14449ff1a7',name:'进口零食'}}}" class="mobilefontstyle mobileindex-product-content-box">
						<div >
						<img src="../../../images/products2-8.jpg" />
						<p class="mobileindex-product-content-right-title">进口零食</p>
						</div>
            </router-link>
          </div>
          <div class="mobileindex-product-content-right-top">
            <router-link :to="{name:'productcid',params:{id:{id:'5a72ca5fd03d2b14449ff1a6',name:'酒水饮料'}}}" class="mobilefontstyle mobileindex-product-content-box">
               <div>
							<img src="../../../images/products2-3.jpg" />
							<p class="mobileindex-product-content-right-title">酒水饮料</p>
              </div>
              </router-link>
               <router-link :to="{name:'productcid',params:{id:{id:'5a72ca5fd03d2b14449ff1a6',name:'酒水饮料'}}}" class="mobilefontstyle mobileindex-product-content-box1">
						<div>
							<img src="../../../images/products1-3.jpg" />
						</div>
            </router-link>
              </div>
            <div class="mobileindex-product-content-right-top">
             <router-link :to="{name:'productcid',params:{id:{id:'5a72cac6d03d2b14449ff1aa',name:'粮油副食'}}}" class="mobilefontstyle mobileindex-product-content-box1">
						<div>
							<img src="../../../images/products1-5.jpg" />
						</div>
            </router-link>
             <router-link :to="{name:'productcid',params:{id:{id:'5a72cac6d03d2b14449ff1aa',name:'粮油副食'}}}" class="mobilefontstyle mobileindex-product-content-box">
						<div>
							<img src="../../../images/products2-5.jpg" />
							<p class="mobileindex-product-content-right-title">粮油副食</p>
						</div>
            </router-link>
					</div>
				</div>
			</div>
		</div>

		<!--新闻动态-->

		<div class="mobileindex-news-body">
			<div class="mobilewraperwidth">
				<div class="mobileindex-news-title">
          <p class="mobileindex-new-title"><span>新闻</span>
        <router-link to='/news' tag='span' class="knowmore" active-class="mobilerouteactive">了解更多</router-link>
          </p>
				</div>
				<div class="mobileindex-news-content">
					<div class="mobileindex-news-content-top">
						<div class="mobileindex-news-content-top-boxx" v-for="(item,index) in indexnews1" :key=index>
							<i>
								<span class="mobileindex-news-content-span">
									<p class="mobileindex-news-p1"><span class="mobileindex-news-content-year">{{item.day}}</span><span class="mobileindex-news-content-month">{{item.year}}</span></p>
									<p class="mobileindex-news-p2">{{item.title}}</p>
								</span>
							</i>
              <img :src="item.imgurl" class="mobileindex-news-content-top-img"/>
						</div>
					</div>
           <div class="mobileindex-news-content-top">
						<div class="mobileindex-news-content-top-boxx" v-for="(item,index) in indexnews2" :key=index>
							<i>
								<span class="mobileindex-news-content-span">
									<p class="mobileindex-news-p1"><span class="mobileindex-news-content-year">{{item.day}}</span><span class="mobileindex-news-content-month">{{item.year}}</span></p>
									<p class="mobileindex-news-p2">{{item.title}}</p>
								</span>
							</i>
              <img :src="item.imgurl" class="mobileindex-news-content-top-img"/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--关于我们-->

		<div class="mobileindex-about-body-next">
			<img class="mobileindex-about-img" src="../../../images/index-about.jpg" />
			<div class="mobileindex-about-content">
				<div class="mobileindex-about-box">
          <router-link to='/internet/server'>
					<img src="../../../images/index-about1.png" />
          </router-link>
					<p class="mobileindex-about-box-p1">公司服务</p>
				</div>
				<div class="mobileindex-about-box">
          <router-link to='/hr/advertises'>
					<img src="../../../images/index-about2.png" />
          </router-link>
					<p class="mobileindex-about-box-p1">公司招聘</p>
				</div>
				<div class="mobileindex-about-box">
          <router-link to='/internet'>
					<img src="../../../images/index-about3.png" />
          </router-link>
					<p class="mobileindex-about-box-p1">营销活动</p>
				</div>
				<div class="mobileindex-about-box">
          <router-link to='/message'>
					<img src="../../../images/index-about4.png" />
          </router-link>
					<p class="mobileindex-about-box-p1">在线留言</p>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>

		<!--营销网络-->
		<div class="mobileindex-internet-body">
			<img class="mobileimgsizein" src="../../../images/index-network.jpg" />
			<div class="mobileindex-internet-content">
				<div class="mobileindex-internet-top">
					<p class="mobileindex-internet-title">营销网络</p>
					<p class="mobileindex-internet-title-introduction">汉盛公司凭借五大股东的有力支持、团队的共同努力，业务开展迅速，从成立至今，业务范围</p>
				</div>
				<div class="mobileindex-internet-content">
					<!--循环数据-->
					<div class="mobileindex-internet-box" v-for="(item,index) in internet" :key=index>
						<p class="mobileindex-internet-body-p1">{{item.num}}</p>
						<p class="mobileindex-internet-body-p2">{{item.introduction}}</p>
					</div>
					<div style="clear: both;"></div>
				</div>

			</div>
		</div>

		<!--联系我们-->
		<div class="mobileindex-contact">
			<img class="mobileimgsizeco" src="../../../images/index-contact.jpg" />
			<div class="mobileindex-contact-c">
				<div class="mobileindex-contact-content">
					<ul class="mobileindex-contact-method">
						<li v-for="(item,index) in contact" :key=index><img :src="item.icon"><span class="mobileindex-contact-span">{{item.value}}</span></li>
					</ul>
				</div>
			</div>
		</div>
		<p class="mobileindex-cooperation-footer">老外仓&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;浙ICP备15014783号-2</p>
    </div>
  </div>
</template>
<script>
import indexcontact1 from "../../../images/index-contact1.png";
import indexcontact2 from "../../../images/index-contact2.png";
import indexcontact3 from "../../../images/index-contact3.png";
import indexcontact4 from "../../../images/index-contact4.png";
import cooperation7 from "../../../images/cooperation-7.png";
import cooperation8 from "../../../images/cooperation-8.png";
export default {
  data() {
    return {
      fliterbrand: {
        data6: [],
        limit: 10,
        page: 1
      },
      fliternews: {
        data6: [],
        limit: 2,
        page: 1,
        type: "1"
      },
      fliternews1: {
        data6: [],
        limit: 2,
        page: 2,
        type: "1"
      },
      fliterP1: {
        data6: [],
        limit: 5,
        page: 3
      },
      fliterP2: {
        data6: [],
        limit: 5,
        page: 9
      },
      P1: [],
      P2: [],
      width: 1920,
      internet: [
        {
          num: "860+",
          introduction: "我们合作品牌的数量已达到860多个"
        },
        {
          num: "125+",
          introduction: "我们公司产品历史悠久，每一件都很经典"
        },
        {
          num: "1000+",
          introduction: "我们的产品数量已达到1000多个"
        },
        {
          num: "TOP",
          introduction: "我们是业内最好的公司之一"
        }
      ],
      contact: [
        {
          icon: indexcontact1,
          value: "手机：17767052082 "
        },
        {
          icon: indexcontact2,
          value: "座机：0571-88305872"
        },
        {
          icon: indexcontact3,
          value: "邮件：laowaicang@laowaicang.com"
        },
        {
          icon: indexcontact4,
          value: "地址：杭州 滨江区 滨盛路1688号"
        }
      ],
      ShopPiece: [],
      cooperation: [],
      indexnews1: [],
      indexnews2: [],
      cooperationf: [cooperation7, cooperation8]
    };
  },
  methods: {
    ullongone() {
      document.getElementsByClassName("ullong")[0].style.left = 0;
    },
    ullongtwo() {
      document.getElementsByClassName("ullong")[0].style.left =
        -parseInt(
          window.getComputedStyle(
            document.getElementsByClassName("ulheight")[0],
            null
          )["width"]
        ) + "px";
    },
    ullongthree() {
      document.getElementsByClassName("midullong")[0].style.left = 0;
    },
    ullongfour() {
      document.getElementsByClassName("midullong")[0].style.left =
        -parseInt(
          window.getComputedStyle(
            document.getElementsByClassName("midulheight")[0],
            null
          )["width"]
        ) + "px";
    },
    getData(data, content) {
      if (data == "fliterP1") {
        data = this.fliterP1;
      }
      if (data == "fliterP2") {
        data = this.fliterP2;
      }
      this.$http
        .post("http://120.79.22.222:3000/warehouse/list", data)
        .then(res => {
          let ProductLength = res.data.rows.length;
          for (let i = 0; i < ProductLength; i++) {
            res.data.rows[i].Product = JSON.parse(res.data.rows[i].Product);
          }
          console.log(content)
          if ((content == "P1")) {
            this.P1 = res.data.rows;
          }
          if ((content == "P2")) {
            this.P2 = res.data.rows;
          }
        });
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
    }
  },
  created() {
    this.getData("fliterP1", "P1");
    this.getData("fliterP2", "P2");
    this.width = document.documentElement.offsetWidth;
    this.$http
      .post(this.getTest() + "/brand/list", this.fliterbrand)
      .then(res => {
        this.cooperation = res.data.rows;
      });
    this.$http
      .post(this.getTest() + "/news/list", this.fliternews)
      .then(res => {
        this.indexnews1 = res.data.rows;
      });
    this.$http
      .post(this.getTest() + "/news/list", this.fliternews1)
      .then(res => {
        this.indexnews2 = res.data.rows;
      });
  },
  mounted() {
    if (document.getElementsByClassName("mobilefontstyle")[0]) {
      let ii = window.getComputedStyle(
        document.getElementsByClassName("mobilefontstyle")[0],
        null
      )["width"];
      let oo = document.getElementsByClassName(
        "mobileindex-product-content-box1"
      ).length;
      for (let i = 0; i < oo; i++) {
        document.getElementsByClassName("mobileindex-product-content-box")[
          i
        ].style.height = ii;
      }
    }
  },
  updated() {
    if (document.getElementsByClassName("mobilefontstyle")[0]) {
      let ii = window.getComputedStyle(
        document.getElementsByClassName("mobilefontstyle")[0],
        null
      )["width"];
      let oo = document.getElementsByClassName(
        "mobileindex-product-content-box1"
      ).length;
      for (let i = 0; i < oo; i++) {
        document.getElementsByClassName("mobileindex-product-content-box")[
          i
        ].style.height = ii;
      }
    }
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth;
    };
  }
};
</script>
<style scoped>
i {
  font-style: normal;
  cursor: pointer;
}

p,
ul,
li {
  margin: 0;
  padding: 0;
}
.headerbg {
  width: 100%;
  min-width: 1000px;
}
.wraperwidth {
  position: relative;
  width: 1000px;
  margin: 0 auto 0 auto;
}
.index-product-content-left-img {
  width: 245px;
}
.index-about-content {
  position: absolute;
  width: 1000px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
img {
  border: 0;
}
.index-product-title {
  margin-top: 80px;
  text-align: center;
}
.productimg {
  width: 120px;
}
.index-product-title span {
  font-weight: 600;
  font-size: 24px;
  margin: 0 auto;
  color: #f1662c;
}
.fontstyle {
  text-decoration: none;
}
.index-product-introduction {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  color: #666666;
}

.index-product-content {
  padding-top: 55px;
  display: flex;
  text-align: center;
}

.index-product-content-left {
  flex: 1;
  margin-right: 10px;
}

.index-product-content-right-top {
  display: flex;
}

.index-product-content-right-bottom {
  display: flex;
}

.index-product-content-box {
  width: 245px;
  height: 225px;
  background: #f8efe8;
  padding-top: 20px;
  text-align: center;
  z-index: 14;
}
.index-product-content-box1 {
  height: 245px;
  width: 245px;
  z-index: 14;
}
.midindex-product-content-box1 {
  overflow: hidden;
  z-index: 14;
}
.midindex-product-content-box1 img {
  width: 100%;
}
.index-product-content-box1 img {
  height: 100%;
}
.index-product-content-right-title {
  font-size: 16px;
  color: #ee882a;
}

.index-product-content-right-content {
  margin-top: 10px;
  font-size: 12px;
  color: gray;
  padding: 0 40px;
}

.index-news-body {
  margin-top: 60px;
  padding-top: 50px;
  background: #f5f5f5;
  padding-bottom: 80px;
}
.navfont {
  cursor: pointer;
}
.index-news-title {
  text-align: center;
}

.index-news-title p {
  padding: 0 245px;
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}

.index-news-content {
  margin-top: 50px;
}

.index-news-content-top {
  display: flex;
}
.index-news-content-top-img {
  width: 245px;
}
.index-news-content-top-boxx {
  width: 490px;
  margin-right: 5px;
}
.index-news-content-top i {
  width: 245px;
  height: 148px;
  top: 0;
  left: 0;
  position: absolute;
  background: white;
}

.index-news-content-top i .index-news-content-span {
  display: block;
  width: 230px;
  height: 100px;
  margin: 10px;
  background: #f0f2f2;
  z-index: 2;
  padding-top: 26px;
  padding-right: 15px;
}

.index-news-content-top i .index-news-content-span:hover {
  margin-left: 0px;
  transition: all 1s;
}

.index-news-content-top i .index-news-content-span .index-news-p1 {
  margin-left: 20px;
}

.index-news-p2 {
  margin-top: 10px;
  font-size: 12px;
  margin-left: 20px;
}

.index-news-content-year {
  font-size: 30px;
  color: #ee882a;
}

.index-news-content-month {
  font-size: 12px;
  color: #ee882a;
}

.index-news-content-top div {
  width: 500px;
  padding-left: 245px;
  position: relative;
}

.index-news-content-top div:nth-last-of-type(1) {
  margin-right: 20px;
}

.index-about-body-next {
  position: relative;
}

.index-about-body-next .index-about-img {
  width: 100%;
  min-width: 1000px;
  min-height: 250px;
}

.index-about-box {
  width: 25%;
  padding: 30px 15px 0 15px;
  float: left;
  text-align: center;
}

.index-about-box:nth-of-type(1) {
  margin: 0;
}

.index-about-box-p1 {
  margin-top: 15px;
  color: #f1662c;
}

.index-about-box-p2 {
  font-size: 12px;
  margin-top: 15px;
  color: #847e75;
}

.index-internet-body {
  width: 100%;
  position: relative;
}

.index-internet-top {
  text-align: center;
  padding: 50px 60px 0 60px;
}

.index-internet-content {
  position: absolute;
  width: 1000px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}

.index-internet-title {
  font-size: 20px;
  color: #f1662c;
}

.index-internet-box {
  width: 25%;
  padding: 180px 20px 0 20px;
  float: left;
  text-align: center;
}
.ulheight {
  height: 155px;
  width: 1000px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.midulheight {
  height: 175px;
  width: 1420px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.index-internet-box:nth-of-type(1) {
  margin: 0;
}

.index-internet-title-introduction {
  font-size: 12px;
  color: #707070;
  margin-top: 20px;
}

.index-internet-body-p1 {
  font-size: 42px;
  color: #ee882a;
  font-weight: bolder;
}

.index-internet-body-p2 {
  font-size: 12px;
  color: #ee882a;
  margin-top: 20px;
}

.index-contact {
  position: relative;
}

.index-contact-c {
  position: absolute;
  width: 1000px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.imgsize {
  width: 100%;
  min-width: 1000px;
  min-height: 250px;
}
.index-contact-content {
  position: absolute;
  width: 50%;
  padding-right: 70px;
  top: 0;
  left: 0;
}

.index-contact-introduce {
  color: #999999;
  font-size: 10px;
  letter-spacing: 3px;
  text-indent: 2em;
  margin-top: 35px;
}

.index-contact-more {
  color: #ee882a;
  letter-spacing: 1px;
  font-size: 12px;
  text-indent: 2em;
  cursor: pointer;
}

.index-contact-method {
  list-style: none;
  margin-top: 50px;
  position: relative;
}

.index-contact-method li {
  position: relative;
  margin-top: 10px;
}

.index-contact-span {
  position: relative;
  color: #666666;
  margin-left: 40px;
  top: -8px;
  font-size: 14px;
  text-indent: 2em;
}

.iconfont {
  width: 20px;
}

.index-cooperation-top {
  position: relative;
  width: 1000px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

.index-cooperation-title {
  color: #f1662c;
  padding-top: 60px;
  font-size: 20px;
}

.index-cooperation-content {
  font-size: 14px;
  color: #666666;
  margin-top: 20px;
}

.index-cooperation-top ul {
  list-style: none;
  text-align: center;
  overflow: hidden;
  height: 155px;
}

.index-cooperation-top ul li {
  float: left;
  margin-top: 55px;
}

.index-cooperation-bottom {
  margin-top: 10px;
}

.index-cooperation-footer {
  margin-top: 60px;
  padding-bottom: 20px;
  font-size: 14px;
}
i {
  font-style: normal;
}

p,
ul,
li {
  margin: 0;
  padding: 0;
}
.midfontstyle {
  text-decoration: none;
}
.midheaderbg {
  width: 100%;
  min-width: 1420px;
}
.midwraperwidth {
  position: relative;
  width: 1420px;
  margin: 0 auto 0 auto;
}

.midindex-about-content {
  position: absolute;
  width: 1420px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.midindex-product-title {
  margin-top: 100px;
  text-align: center;
}

.midindex-product-title span {
  font-weight: 600;
  font-size: 26px;
  margin: 0 auto;
  color: #f1662c;
}

.midindex-product-introduction {
  margin-top: 10px;
  text-align: center;
  color: #666666;
}

.midindex-product-content {
  padding-top: 55px;
  display: flex;
}

.midindex-product-content-left {
  flex: 1;
}

.midindex-product-content-right-top {
  display: flex;
  height: 348px;
}

.midindex-product-content-right-bottom {
  display: flex;
}

.midindex-product-content-box {
  width: 348px;
  height: 318px;
  background: #f8efe8;
  padding-top: 30px;
  text-align: center;
  z-index: 14;
}

.midindex-product-content-right-title {
  font-size: 18px;
  color: #ee882a;
}

.midindex-product-content-right-content {
  margin-top: 25px;
  font-size: 12px;
  color: gray;
  padding: 0 80px;
  font-size: 14px;
}

.midindex-news-body {
  margin-top: 100px;
  padding-top: 90px;
  background: #f5f5f5;
  padding-bottom: 100px;
}
.ullong {
  width: 2000px;
  overflow: hidden;
  position: absolute;
  transition: all 1s;
}
.ullong li {
  width: 200px;
  text-align: center;
  height: 100px;
}
.ullong img {
  max-width: 100%;
  height: 100%;
}
.midullong {
  width: 2840px;
  overflow: hidden;
  position: absolute;
  transition: all 1s;
}
.midullong li {
  width: 280px;
  margin-right: 4px;
  text-align: center;
  height: 100px;
}
.midullong img {
  max-width: 280px;
  height: 100%;
}
.midindex-news-title {
  text-align: center;
}

.midindex-news-title p {
  padding: 0 350px;
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}

.midindex-news-content {
  margin-top: 50px;
}

.midindex-news-content-top {
  display: flex;
}

.midindex-news-content-top i {
  width: 350px;
  height: 211px;
  top: 0;
  left: 0;
  position: absolute;
  background: white;
}
.midnavfont {
  cursor: pointer;
}
.midindex-news-content-top i .midindex-news-content-span {
  display: block;
  width: 335px;
  height: 140px;
  margin: 20px;
  background: #f0f2f2;
  z-index: 2;
  padding-top: 30px;
  padding-right: 25px;
}

.midindex-news-content-top i .midindex-news-content-span:hover {
  margin-left: 0px;
  transition: all 1s;
}

.midindex-news-content-top i .midindex-news-content-span .midindex-news-p1 {
  margin-left: 45px;
}

.midindex-news-p2 {
  margin-top: 20px;
  margin-left: 45px;
}

.midindex-news-content-year {
  font-size: 36px;
  color: #ee882a;
}

.midindex-news-content-month {
  font-size: 12px;
  color: #ee882a;
}

.midindex-news-content-top div {
  width: 700px;
  padding-left: 350px;
  position: relative;
}

.midindex-news-content-top div:nth-last-of-type(1) {
  margin-right: 20px;
}

.midindex-about-body-next {
  position: relative;
}

.midindex-about-body-next .midindex-about-img {
  width: 100%;
  min-width: 1420px;
  min-height: 410px;
}

.midindex-about-box {
  width: 140px;
  padding: 100px 10px 0 10px;
  float: left;
  text-align: center;
  margin-left: 220px;
}
.midindex-about-box img {
  width: 100%;
}
.midindex-about-box:nth-of-type(1) {
  margin: 0;
}

.midindex-about-box-p1 {
  font-weight: 600;
  margin-top: 30px;
  color: #f1662c;
}

.midindex-about-box-p2 {
  font-size: 12px;
  margin-top: 20px;
  color: #847e75;
}

.midindex-internet-body {
  width: 100%;
  position: relative;
}

.midindex-internet-top {
  text-align: center;
  padding: 90px 260px 0 260px;
}

.midindex-internet-content {
  position: absolute;
  width: 1420px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.midindex-internet-title {
  font-size: 24px;
  color: #f1662c;
}

.midindex-internet-box {
  width: 185px;
  padding: 290px 20px 0 20px;
  float: left;
  text-align: center;
  margin-left: 160px;
}

.midindex-internet-box:nth-of-type(1) {
  margin: 0;
}

.midindex-internet-title-introduction {
  font-size: 14px;
  color: #707070;
  margin-top: 20px;
}

.midindex-internet-body-p1 {
  font-size: 54px;
  color: #ee882a;
  font-weight: bolder;
}

.midindex-internet-body-p2 {
  font-size: 14px;
  color: #ee882a;
  margin-top: 20px;
}

.midindex-contact {
  position: relative;
}

.midindex-contact-c {
  position: absolute;
  width: 1420px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.midimgsize {
  width: 100%;
  min-width: 1420px;
  min-height: 410px;
}
.midindex-contact-content {
  position: absolute;
  width: 640px;
  padding-right: 70px;
  top: 0;
  left: 0;
}
.midindex-news-content-top-img {
  width: 350px;
  height: 210px;
}
.midindex-contact-introduce {
  color: #999999;
  font-size: 10px;
  letter-spacing: 3px;
  margin-top: 100px;
}

.midindex-contact-more {
  color: #ee882a;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
}

.midindex-contact-method {
  list-style: none;
  margin-top: 70px;
  position: relative;
}

.midindex-contact-method li {
  position: relative;
  margin-top: 20px;
}

.midindex-contact-span {
  position: relative;
  color: #666666;
  margin-left: 40px;
  top: -8px;
}

.midindex-cooperation-top {
  position: relative;
  width: 1420px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

.midindex-cooperation-title {
  color: #f1662c;
  padding-top: 100px;
}

.midindex-cooperation-content {
  color: #666666;
  margin-top: 20px;
}

.midindex-cooperation-top ul {
  list-style: none;
  text-align: center;
  overflow: hidden;
}

.midindex-cooperation-top ul li {
  margin-top: 75px;
  float: left;
}

.midindex-cooperation-bottom {
  margin-top: 50px;
}

.midindex-cooperation-footer {
  margin-top: 60px;
  padding-bottom: 20px;
}
.mobilefontstyle {
  text-decoration: none;
}
.mobileheaderbg {
  width: 100%;
}
.mobilewraperwidth {
  position: relative;
  width: 100%;
  margin: 0 auto 0 auto;
}

.mobileindex-about-content {
  position: absolute;
  width: 100%;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
img {
  border: 0;
}
.mobileindex-product-title {
  width: 100%;
  text-align: left;
  border-bottom: 1px #cccccc solid;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
}
.mobileindex-new-title {
  text-align: left;
  border-top: 1px #cccccc solid;
  border-bottom: 1px #cccccc solid;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}

.mobileindex-product-title span {
  font-size: 16px;
  margin: 0 auto;
  color: #ee882a;
  margin-left: 20px;
}
.mobileindex-new-title span {
  font-size: 16px;
  margin: 0 auto;
  color: #ee882a;
  margin-left: 20px;
}
.mobileindex-new-title .knowmore {
  color: gray;
  float: right;
  font-size: 14px;
  font-weight: 100;
  position: relative;
  margin-right: 20px;
}
.mobileindex-product-title .knowmore {
  color: gray;
  float: right;
  font-size: 14px;
  font-weight: 100;
  position: relative;
  margin-right: 20px;
}
.mobileindex-product-introduction {
  margin-top: 10px;
  text-align: center;
  color: #666666;
  padding: 0 10px;
  font-size: 14px;
}

.mobileindex-product-content {
  padding-top: 25px;
  display: flex;
}
.mobileindex-product-content-right {
  width: 100%;
}
.mobileindex-product-content-right-top {
  display: flex;
  width: 100%;
  position: relative;
}

.mobileindex-product-content-right-bottom {
  display: flex;
}

.mobileindex-product-content-box {
  width: 50%;
  background: #f8efe8;
  text-align: center;
  height: 100%;
  position: relative;
  font-size: 0;
  z-index: 14;
}
.mobileindex-product-content-box img {
  margin-top: 15px;
  width: 70%;
  background: #f8efe8;
  text-align: center;
}

.mobileindex-product-content-right-title {
  font-size: 16px;
  color: #ee882a;
}
.mobileindex-product-content-box1 {
  width: 50%;
  height: 100%;
  font-size: 0;
  z-index: 14;
}
.mobileindex-product-content-box1 img {
  width: 100%;
  height: 100%;
}

.mobileindex-news-body {
  margin-top: 30px;
  background: #f5f5f5;
  padding-bottom: 50px;
}

.mobileindex-news-title {
  text-align: center;
}

.mobileindex-news-title p {
  padding: 0 10px;
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}

.mobileindex-news-content {
  margin-top: 50px;
}
.mobileindex-news-content-top-boxx {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  height: 105px;
}
.mobileindex-news-content-top {
  width: 100%;
}

.mobileindex-news-content-top i {
  width: 100%;
  height: 105px;
  top: 0;
  left: 0;
  position: absolute;
  background: white;
}

.mobileindex-news-content-top i .mobileindex-news-content-span {
  display: block;
  width: 50%;
  height: 80px;
  margin: 10px;
  background: #f0f2f2;
  z-index: 2;
  padding-top: 10px;
  padding-right: 5px;
  position: relative;
  z-index: 12;
}

.mobileindex-news-content-top i .mobileindex-news-content-span:hover {
  margin-left: 0px;
  transition: all 1s;
}
.mobileindex-news-content-top-img {
  width: 50%;
  margin-left: 50%;
  height: 105px;
  position: relative;
  z-index: 11;
}
.mobileindex-news-content-top
  i
  .mobileindex-news-content-span
  .mobileindex-news-p1 {
  margin-left: 25px;
}

.mobileindex-news-p2 {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
}

.mobileindex-news-content-year {
  font-size: 20px;
  color: #ee882a;
}

.mobileindex-news-content-month {
  font-size: 8px;
  color: #ee882a;
}

.mobileindex-news-content-top div {
  width: 100%;
  position: relative;
}

.mobileindex-news-content-top div:nth-last-of-type(1) {
  margin-right: 20px;
}

.mobileindex-about-body-next {
  position: relative;
}

.mobileindex-about-body-next .mobileindex-about-img {
  width: 100%;
}

.mobileindex-about-box {
  width: 25%;
  float: left;
  text-align: center;
}
.mobileindex-about-box img {
  margin-top: 5px;
  width: 50%;
}
.mobileindex-about-box:nth-of-type(1) {
  margin: 0;
}

.mobileindex-about-box-p1 {
  margin-top: 5px;
  color: #f1662c;
  font-size: 14px;
}

.mobileindex-internet-body {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.mobileindex-internet-top {
  text-align: center;
}

.mobileindex-internet-content {
  position: absolute;
  width: 100%;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.mobileindex-internet-title {
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #f1662c;
}
.mobileimgsizein {
  width: 200%;
  margin-top: 60px;
  height: 180px;
  margin-left: -50%;
}
.mobileindex-internet-box {
  width: 50%;
  float: left;
  text-align: center;
  margin-top: 60px;
}

.mobileindex-internet-box:nth-of-type(n + 3) {
  margin: 0;
}

.mobileindex-internet-title-introduction {
  font-size: 10px;
  color: #707070;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
}

.mobileindex-internet-body-p1 {
  margin-top: 5px;
  font-size: 28px;
  color: #ee882a;
  font-weight: 600;
}

.mobileindex-internet-body-p2 {
  font-size: 10px;
  color: #ee882a;
  margin: 5px 15px 0;
}

.mobileindex-contact {
  position: relative;
}
.mobileimgsizeco {
  width: 100%;
  height: 150px;
}
.mobileindex-contact-c {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mobileimgsize {
  width: 100%;
}
.mobileindex-contact-content {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.mobileindex-contact-more {
  color: #ee882a;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
}

.mobileindex-contact-method {
  list-style: none;
  margin-top: 10px;
  position: relative;
}

.mobileindex-contact-method img {
  width: 18px;
}

.mobileindex-contact-method li {
  position: relative;
  margin-top: 5px;
  width: 55%;
}

.mobileindex-contact-method li:nth-of-type(2) {
  position: relative;
  margin-top: 5px;
  width: 60%;
}
.mobileindex-contact-method li:nth-of-type(3) {
  position: relative;
  margin-top: 5px;
  width: 60%;
}

.mobileindex-contact-span {
  position: relative;
  color: #666666;
  margin-left: 5px;
  top: -5px;
  font-size: 10px;
}

.mobileindex-cooperation-footer {
  margin-top: 15px;
  padding-bottom: 15px;
  font-size: 12px;
  width: 100%;
  text-align: center;
}
.midProductList {
  z-index: 20;
  display: flex;
  width: 100%;
}
.ShowProduct {
  width: 20%;
  box-sizing: border-box;
}
.ShopListImage {
  border: solid #cccccc 1px;
  width: 280px;
  position: relative;
  height: 360px;
}
.ShopListImage img {
  width: 100%;
  height: 280px;
}
.shopcart {
  z-index: 20;
  bottom: 0;
  height: 60px;
  width: 280px;
  text-align: center;
  height: 60px;
}
.shopcart .shopname {
  top: 0;
  line-height: 36px;
}
.price {
  margin-left: 45px;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: red;
}
.price span {
  color: black;
  margin-right: 10px;
}
.shopcart .button {
  cursor: pointer;
  position: relative;
  bottom: 0;
  width: 100px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 2px;
  border: solid 1px lightblue;
  color: lightseagreen;
  left: 24px;
}
.midP1title {
  margin-top: 50px;
  height: 60px;
  line-height: 50px;
  font-size: 28px;
  display: flex;
  color: red;
}
.midP1title img {
  width: 48px;
  height: 48px;
  margin-left: 600px;
}
.GoShop {
  display: flex;
}
</style>

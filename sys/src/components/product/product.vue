<template>
	<div class="product">
		<div class="product-left">
			<Tree :data="data1" @on-select-change="cidchance"></Tree>
		</div>
		<div class="product-right">
			<Input v-model="fliter.name">
			<Button slot="append" icon="ios-search" @click="search"></Button>
			<Button type="success" slot="append" style="width: 80px;margin-left: 10px;background: lightgreen;color: white;" @click="onAdd1">添加信息</Button>
			<Button type="error" slot="append" style="width: 80px;margin-left: 10px;background: lightcoral;color: white;" @click='onDeletes'>删除选中</Button>
			</Input>

			<div class="content-body">
				<Table border :columns="columns7" :data="fliter.data6" @on-selection-change='onSelection'></Table>
			</div>
			<div class="content-foot">
				<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
			</div>
			<Modal v-model="modal6" title="产品业务" :loading="loading" @on-ok="asyncOK">
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
					<FormItem label="产品名称">
						<Input v-model="formValidate.name" placeholder="Enter your name"></Input>
					</FormItem>
          <FormItem label="无产品参数">
						<Input v-model="formValidate.haveparameter" placeholder="Enter your haveparameter"></Input>
					</FormItem>
					<FormItem label="产品产地">
						<Input v-model="formValidate.origin" placeholder="Enter your origin"></Input>
					</FormItem>
					<FormItem label="产品描述">
						<Input v-model="formValidate.describe" placeholder="Enter your describe"></Input>
					</FormItem>
					<FormItem label="产品原料">
						<Input v-model="formValidate.ingredient" placeholder="Enter your ingredient"></Input>
					</FormItem>
					<FormItem label="产品质量">
						<Input v-model="formValidate.weight" placeholder="Enter your weight"></Input>
					</FormItem>
					<FormItem label="酒精含量">
						<Input v-model="formValidate.Qcontent" placeholder="Enter your Qcontent"></Input>
					</FormItem>
					<FormItem label="糖含量">
						<Input v-model="formValidate.Tcontent" placeholder="Enter your Tcontent"></Input>
					</FormItem>
					<FormItem label="酸含量">
						<Input v-model="formValidate.Scontent" placeholder="Enter your Scontent"></Input>
					</FormItem>
          <FormItem label="苦度">
						<Input v-model="formValidate.Kcontent" placeholder="Enter your Kcontent"></Input>
					</FormItem>
					<FormItem label="颜色">
						<Input v-model="formValidate.color" placeholder="Enter your color"></Input>
					</FormItem>
					<FormItem label="气味">
						<Input v-model="formValidate.smell" placeholder="Enter your smell"></Input>
					</FormItem>
					<FormItem label="口感">
						<Input v-model="formValidate.taste" placeholder="Enter your taste"></Input>
					</FormItem>
					<FormItem label="保质期">
						<Input v-model="formValidate.expiration" placeholder="Enter your expiration"></Input>
					</FormItem>
          <FormItem label="适用人群">
						<Input v-model="formValidate.isfit" placeholder="Enter your isfit"></Input>
					</FormItem>
          <FormItem label="适用温度">
						<Input v-model="formValidate.fittemperature" placeholder="Enter your fittemperature"></Input>
					</FormItem>
          <FormItem label="食用方法">
						<Input v-model="formValidate.use" placeholder="Enter your use"></Input>
					</FormItem>
					<FormItem label="储存环境">
						<Input v-model="formValidate.storaged" placeholder="Enter your storaged"></Input>
					</FormItem>
					<FormItem label="相关搭配">
						<Input v-model="formValidate.match" placeholder="Enter your match"></Input>
					</FormItem>
					<FormItem label="产品介绍">
						<Input v-model="formValidate.introduction" placeholder="Enter your introduction"></Input>
					</FormItem>
          <FormItem label="公司介绍">
						<Input v-model="formValidate.companyintroduction" placeholder="Enter your companyintroduction"></Input>
					</FormItem>
					<FormItem label="条形码">
						<Input v-model="formValidate.barcode" placeholder="Enter your barcode"></Input>
					</FormItem>
          <FormItem label="品牌名">
						<Input v-model="formValidate.belong" placeholder="Enter your barcode"></Input>
					</FormItem>
					<FormItem label="特点一">
						<Input v-model="formValidate.title" placeholder="Enter your title"></Input>
            <br/>
						<Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content"></Input>
					</FormItem>
					<FormItem label="特点二">
						<Input v-model="formValidate.title1" placeholder="Enter your title1"></Input>
            <br/>
						<Input v-model="formValidate.content1" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content1"></Input>
					</FormItem>
					<FormItem label="特点三">
						<Input v-model="formValidate.title2" placeholder="Enter your title2"></Input>
            <br/>
						<Input v-model="formValidate.content2" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content2"></Input>
					</FormItem>
          <FormItem label="特点四">
						<Input v-model="formValidate.title3" placeholder="Enter your title3"></Input>
            <br/>
						<Input v-model="formValidate.content3" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content3"></Input>
					</FormItem>
          <FormItem label="特点五">
						<Input v-model="formValidate.title4" placeholder="Enter your title4"></Input>
            <br/>
						<Input v-model="formValidate.content4" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content4"></Input>
					</FormItem>
          <FormItem label="特点六">
						<Input v-model="formValidate.title5" placeholder="Enter your title5"></Input>
            <br/>
						<Input v-model="formValidate.content5" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content5"></Input>
					</FormItem>
					<Upload multiple type="drag" name='avatar' :action="imgUrl" :on-success="onSuccess">
						<div style="padding: 20px 0">
							<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
							<p>点击或将文件拖拽到这里上传</p>
						</div>
					</Upload>
					<FormItem>
						<div class="madelbox">
							<div v-if="formValidate.imgurl" class="madelbox1">
								<span class="control1" @click="del1">X</span>
								<img :src="formValidate.imgurl">
							</div>
						</div>
					</FormItem>
					<FormItem>
						<div v-if="formValidate.name">
							<Button type="primary" @click="handleUpdate('formValidate')">修改</Button>
						</div>
						<div v-else>
							<Button type="primary" @click="handleSubmit('formValidate')">新增</Button>
						</div>
					</FormItem>
				</Form>
			</Modal>
		</div>
	</div>
</template>

<script>
import Common from "../common/hm.js";
import Formimg from "../common/formimg.js";
export default {
  mixins: [Common, Formimg],
  data() {
    return {
      cateId: "",
      type: "",
      data1: [
        {
          title: "parent 1",
          expand: true,
          id: "",
          type: "",
          children: []
        }
      ],
      apimodel: 'products',
      columns7: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "产品名字",
          key: "name"
        },
        {
          title: "产品产地",
          key: "origin"
        },
        {
          title: "产品质量",
          key: "weight"
        },
        {
          title: "保质期",
          key: "expiration"
        },
        {
          title: "储存环境",
          key: "storaged"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      fliter: {
        data6: [],
        total: 0,
        limit: 12,
        page: 1,
        name: "",
        type: "",
        cateId: []
      },
      ruleValidate: {},
      formValidate: {
        name: "",
        origin: "",
        describe: "",
        ingredient: "",
        weight: "",
        expiration: "",
        storaged: "",
        title: "",
        content: "",
        title1: "",
        content1: "",
        title2: "",
        content2: "",
        title3: "",
        content3: "",
        title4: "",
        content4: "",
        title5: "",
        content5: "",
        imgurl: "",
        barcode: "",
        type: "",
        cateId: "",
        belong: "",
        Qcontent: "",
        use: "",
        isfit: "",
        companyintroduction: "",
        Tcontent: "",
        Kcontent: "",
        Scontent: "",
        color: "",
        smell: "",
        taste: "",
        haveparameter: '',
        fittemperature: ''
      }
    };
  },
  methods: {
    onSuccess(res, file) {
      if (this.formValidate.imgurl) {
      } else {
        this.formValidate.imgurl =
          this.getTest() + "/avatar-" + file.name;
      }
    },
    del1() {
      this.formValidate.imgurl = "";
    },
    cidchance(rows) {
      this.fliter.cateId = [];
      if (rows[0].children.length > 0) {
        this.cateId = "";
        this.getcateid(rows[0].children);
      } else {
        this.fliter.cateId.push(rows[0].id);
        this.cateId = rows[0].id;
        this.type = rows[0].type;
      }
      this.fliter.type = rows[0].type;
      this.getData();
    },
    getcateid(rows) {
      let ii = rows.length;
      for (let i = 0; i < ii; i++) {
        if (rows[i].children.length > 0) {
          this.getcateid(rows[i].children);
        } else {
          this.fliter.cateId.push(rows[i].id);
        }
      }
    },
    getData1() {
      this.$http.get(this.getTest() + "/kind/data").then(res => {
        res.data[0] = res.data[0].children[0]
        this.data1[0].children = [];
        this.data1[0].title = res.data[0].children[5].text;
        this.data1[0].id = res.data[0].children[5]._id;
        this.data1[0].cateId = res.data[0].children[5].parentId;
        this.data1[0].type = res.data[0].children[5].type;
        if (res.data[0].children[5].children) {
          this.starttree(
            res.data[0].children[5].children,
            this.data1[0].children
          );
        }
      });
    },
    starttree(data, Node) {
      let ii = data.length;
      for (let i = 0; i < ii; i++) {
        let obj = {
          title: data[i].text,
          expand: true,
          id: data[i]._id,
          cateId: data[i].parentId,
          type: data[i].type,
          children: []
        };
        Node.push(obj);
        if (data[i].children) {
          this.starttree(data[i].children, Node[i].children);
        }
      }
    },
    onAdd1() {
      if (this.cateId) {
        (this.modal6 = true), //打开对话框
          Object.assign(
            this.$data.formValidate,
            this.$options.data().formValidate
          ); //进行数据新的结合，吧原来的空数据赋值到当前表格
        this.formValidate.type = this.type;
      } else {
        this.$Message.info("请先选择分类");
      }
    }
  },
  created() {
    this.getData();
    this.getData1();
  }
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  display: flex;
}

.product-left {
  width: 250px;
  border-right: 1px #cccccc solid;
  overflow: scroll;
  margin-right: 20px;
}
.product-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-body {
  flex: 1;
  margin-top: 20px;
}

.content-foot {
  height: 50px;
  text-align: center;
  margin-top: 20px;
}

.message-date {
  min-height: 550px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}

.message-date div:nth-of-type(1) {
  text-align: center;
  margin-top: 20px;
  height: 30px;
  font-size: 22px;
  font-weight: 600;
  text-shadow: 1px 1px 1px #999999;
}

.message-date div:nth-of-type(2) {
  text-align: left;
  text-indent: 2em;
  flex: 1;
  margin-top: 30px;
  color: black;
}

.bottom {
  width: 250px;
  margin-left: 300px;
  height: 20px;
  text-align: left;
  margin-top: 5px;
}

.madelbox {
  height: 80px;
  margin-top: 10px;
  display: flex;
  width: 400px;
}

.madelbox img {
  height: 100%;
}

.madelbox1 {
  width: 80px;
  margin-left: 10px;
  position: relative;
  overflow: hidden;
}

.control1 {
  position: absolute;
  right: 5px;
  top: -5px;
  cursor: pointer;
}

.control1:hover {
  color: red;
}
</style>
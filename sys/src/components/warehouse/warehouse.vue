<template>
	<div class="content">
		<Input v-model="name">
		<Button slot="append" icon="ios-search" @click="search1"></Button>
		<Button type="success" slot="append" style="width: 80px;margin-left: 10px;background: lightgreen;color: white;" @click="onAdd">添加信息</Button>
		<Button type="error" slot="append" style="width: 80px;margin-left: 10px;background: lightcoral;color: white;" @click='onDeletes'>删除选中</Button>
		</Input>

		<div class="content-body">
			<Table border :columns="columns7" :data="fliter.data6" @on-selection-change='onSelection'></Table>
		</div>
		<div class="content-foot">
			<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
		</div>
		<Modal v-model="modal6" title="仓储" :loading="loading" @on-ok="asyncOK">
			<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
				<FormItem label="品名">
					<Input v-model="formValidate.name" placeholder="Enter your title"></Input>
				</FormItem>
				<FormItem label="库存">
					<Input v-model="formValidate.num" placeholder="Enter your title"></Input>
				</FormItem>
        <FormItem label="单价">
					<Input v-model="formValidate.piece" placeholder="Enter your title"></Input>
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
</template>
<script>
import Common from "../common/hm1.js";
import Formimg from "../common/formimg1.js";
export default {
  mixins: [Common, Formimg],
  data() {
    return {
      type: "2",
      apimodel: "warehouse", //resful api 接口路径不同处
      columns7: [
        {
          //ui框架的表格创建
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "产品",
          key: "name"
        },
        {
          title: "数量",
          key: "num"
        },
        {
          title: "单价",
          key: "piece"
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
        limit: 8,
        page: 1,
        name:[],
      },
      name:'',
      ruleValidate: {},
      formValidate: {
        num: "",
        piece : "",
      },
      ids: []
    };
  },
  methods: {
    search1 () {
      this.fliter.name= []
      this.fliter.name.push(this.name)
      this.getData()
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
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
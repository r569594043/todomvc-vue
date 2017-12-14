<template>
  <div id="root">
    <div class="control-group">
      <v-button>Button</v-button>
      <v-button type="primary">Primary Button</v-button>
      <v-button type="dashed">Dashed Button</v-button>
      <v-button type="danger">Danger Button</v-button>
      <v-button type="info">Info Button</v-button>
      <v-button type="success">Success Button</v-button>
      <v-button type="warning">Warning Button</v-button>
      <v-button type="error">Error Button</v-button>
    </div>
    <div class="control-group">
      <v-button type="primary" shape="circle" icon="search"></v-button>
      <v-button type="primary" icon="search"><span>搜索</span></v-button>
      <v-button type="ghost" shape="circle-outline" icon="search"></v-button>
      <v-button type="ghost" icon="search"><span>搜索</span></v-button>
      <br><br>
      <v-button type="dashed" shape="circle-outline" icon="search"></v-button>
      <v-button type="dashed" icon="search"><span>搜索</span></v-button>
      <v-button type="ghost" shape="circle-outline"><v-icon type="search"></v-icon></v-button>
      <v-button type="ghost"><span>搜索</span><v-icon type="search"></v-icon></v-button>
    </div>
    <div class="control-group">
      <v-button type="primary" size="large">Large</v-button>
      <v-button type="primary">Default</v-button>
      <v-button type="primary" size="small">Small</v-button>
      <br><br>
      <v-button type="ghost" size="large">Large</v-button>
      <v-button type="ghost">Default</v-button>
      <v-button type="ghost" size="small">Small</v-button>
      <br><br>
      <v-button type="dashed" size="large">Large</v-button>
      <v-button type="dashed">Default</v-button>
      <v-button type="dashed" size="small">Small</v-button>
      <br><br>
      <v-button type="primary" shape="circle" icon="search" size="large"></v-button>
      <v-button type="primary" shape="circle" icon="search"></v-button>
      <v-button type="primary" shape="circle" icon="search" size="small"></v-button>
    </div>
    <div class="control-group">
      <v-button type="primary" @click="onClick">Primary</v-button>
      <v-button type="primary" disabled @click="onClick">Primary</v-button>
      <br><br>
      <v-button type="default" @click="onClick">Default</v-button>
      <v-button type="default" disabled @click="onClick">Default</v-button>
      <br><br>
      <v-button type="dashed" @click="onClick">Dashed</v-button>
      <v-button type="dashed" disabled @click="onClick">Dashed</v-button>
      <br><br>
      <v-button type="danger" @click="onClick">Danger</v-button>
      <v-button type="danger" disabled @click="onClick">Danger</v-button>
      <br><br>
    </div>
    <div class="control-group">
      <v-button type="primary" :loading="loading">{{ loading ? "Loading" : "Default" }}</v-button>
      <v-button type="primary" @click="removeLoading">点击将切换loading状态</v-button>
    </div>
    <div class="control-group ghost-buttons-background">
      <v-button type="primary" ghost>Primary</v-button>
      <v-button ghost>Default</v-button>
      <v-button type="dashed" ghost>Dashed</v-button>
      <v-button type="danger" ghost>Danger</v-button>
    </div>
    <div class="control-group">
      <v-button-group size="large">
        <v-button>Large</v-button>
        <v-button>Large</v-button>
      </v-button-group>
      <v-button-group>
        <v-button>Default</v-button>
        <v-button>Default</v-button>
      </v-button-group>
      <v-button-group>
        <v-button>Small</v-button>
        <v-button>Small</v-button>
      </v-button-group>
      <br><br>
      <h3>带图标的组合</h3>
      <v-button-group>
        <v-button type="primary" icon="left">后退</v-button>
        <v-button type="primary">前进 <v-icon type="right"></v-icon></v-button>
      </v-button-group>
      <br><br>
      <v-button-group>
        <v-button type="primary" icon="cloud"></v-button>
        <v-button type="primary" icon="cloud-download"></v-button>
      </v-button-group>
    </div>
    <div class="control-group">
      <v-icon type="link"></v-icon>
      <v-icon type="loading"></v-icon>
      <v-icon type="loading-3-quarters" spin></v-icon>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <v-row>
          <v-col span="24">col-24</v-col>
        </v-row>
        <v-row>
          <v-col span="6">col-6</v-col>
          <v-col span="6">col-6</v-col>
          <v-col span="6">col-6</v-col>
          <v-col span="6">col-6</v-col>
        </v-row>
        <v-row>
          <v-col span="8">col-8</v-col>
          <v-col span="8">col-8</v-col>
          <v-col span="8">col-8</v-col>
        </v-row>
        <v-row>
          <v-col span="12">col-12</v-col>
          <v-col span="12">col-12</v-col>
        </v-row>
        <v-row class="demo-row">
            <v-col span="16">col-16</v-col>
            <v-col span="8">col-8</v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <v-row :gutter="16">
          <v-col class="gutter-row" span="6">
            <div class="gutter-box">col-6</div>
          </v-col>
          <v-col class="gutter-row" span="6">
            <div class="gutter-box">col-6</div>
          </v-col>
          <v-col class="gutter-row" span="6">
            <div class="gutter-box">col-6</div>
          </v-col>
          <v-col class="gutter-row" span="6">
            <div class="gutter-box">col-6</div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <v-row>
          <v-col span="8">col-8</v-col>
          <v-col span="8" offset="8">col-8</v-col>
        </v-row>
        <v-row>
          <v-col span="6" offset="6">col-6 col-offset-6</v-col>
          <v-col span="6" offset="6">col-6 col-offset-6</v-col>
        </v-row>
        <v-row>
          <v-col span="12" offset="6">col-12 col-offset-6</v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <v-row>
          <v-col span="18" push="6">col-18 col-push-6</v-col>
          <v-col span="6" pull="18">col-6 col-pull-18</v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <p>sub-element align left</p>
        <v-row type="flex" justify="start">
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element align center</p>
        <v-row type="flex" justify="center">
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element align right</p>
        <v-row type="flex" justify="end">
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element monospaced arrangement</p>
        <v-row type="flex" justify="space-between">
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element align full</p>
        <v-row type="flex" justify="space-around">
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
          <v-col span="4">col-4</v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <p>Align Top</p>
        <v-row type="flex" justify="center" align="top">
          <v-col span="4"><p class="height-100">col-4</p></v-col>
          <v-col span="4"><p class="height-50">col-4</p></v-col>
          <v-col span="4"><p class="height-120">col-4</p></v-col>
          <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
        <p>Align Center</p>
        <v-row type="flex" justify="space-around" align="middle">
          <v-col span="4"><p class="height-100">col-4</p></v-col>
          <v-col span="4"><p class="height-50">col-4</p></v-col>
          <v-col span="4"><p class="height-120">col-4</p></v-col>
          <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
        <p>Align Bottom</p>
        <v-row type="flex" justify="space-between" align="bottom">
          <v-col span="4"><p class="height-100">col-4</p></v-col>
          <v-col span="4"><p class="height-50">col-4</p></v-col>
          <v-col span="4"><p class="height-120">col-4</p></v-col>
          <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
        <p>Dynamically Align To {{ '"' + align + '"' }}</p>
        <p><v-button type="primary" @click="alignChange">改变Align</v-button></p>
        <v-row type="flex" justify="space-between" :align="align">
          <v-col span="4"><p class="height-100">col-4</p></v-col>
          <v-col span="4"><p class="height-50">col-4</p></v-col>
          <v-col span="4"><p class="height-120">col-4</p></v-col>
          <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <p>Align Top</p>
        <v-row type="flex">
          <v-col span="6" order="4">1 col-order-4</v-col>
          <v-col span="6" order="3">2 col-order-3</v-col>
          <v-col span="6" order="2">3 col-order-2</v-col>
          <v-col span="6" order="1">4 col-order-1</v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <v-row type="flex">
          <v-col :xs="2" :sm="4" :md="6" :lg="8">col</v-col>
          <v-col :xs="20" :sm="16" :md="12" :lg="8">col</v-col>
          <v-col :xs="2" :sm="4" :md="6" :lg="8">col</v-col>
        </v-row>
      </div>
    </div>
    <div class="control-group">
      <div class="grid-demo">
        <v-row type="flex">
          <v-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</v-col>
          <v-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</v-col>
          <v-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</v-col>
        </v-row>
        <v-row type="flex">
          <v-col :xs="{ span: 6, order: 1 }" :lg="{ span: 8, order: 3 }">col-1</v-col>
          <v-col :xs="{ span: 12, order: 2 }" :lg="{ span: 8, order: 2 }">col-2</v-col>
          <v-col :xs="{ span: 6, order: 3 }" :lg="{ span: 8, order: 1 }">col-3</v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import vueBeauty from 'vue-beauty';
// import todoStorage from './todoStorage';
// import filters from './filters';
// import 'todomvc-common/base.js'

Vue.use(vueBeauty);

export default {
  name: 'AntdDemo',
  data() {
    return {
      loading: true,
      align: 'top',
      index: 0,
      alignChoose: ['top', 'middle', 'bottom'],
    };
  },
  watch: {
  },
  created() {
  },
  computed: {
  },
  components: {
  },
  methods: {
    onClick() {
      alert('Button Clicked!');
    },
    removeLoading() {
      this.loading = !this.loading;
    },
    alignChange() {
      this.index = (this.index + 1) % 3;
      this.align = this.alignChoose[this.index];
    },
  },
  filters: {
  },
  directives: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  /*@import '../../node_modules/todomvc-app-css/index.css';*/
  @import '../../node_modules/vue-beauty/package/style/vue-beauty.min.css';
  #root {
    max-width: 1200px;
    margin: 0 auto;
  }
  .control-group {
    margin: 10px;
  }
  .ghost-buttons-background {
    background: #bec8c8;
    padding: 10px 0;
  }





  .grid-demo .demo-row {
    background-image: -webkit-gradient(linear, left top, right top, color-stop(4.16666667%, #f5f5f5), color-stop(4.16666667%, transparent), color-stop(8.33333333%, transparent), color-stop(8.33333333%, #f5f5f5), color-stop(12.5%, #f5f5f5), color-stop(12.5%, transparent), color-stop(16.66666667%, transparent), color-stop(16.66666667%, #f5f5f5), color-stop(20.83333333%, #f5f5f5), color-stop(20.83333333%, transparent), color-stop(25%, transparent), color-stop(25%, #f5f5f5), color-stop(29.16666667%, #f5f5f5), color-stop(29.16666667%, transparent), color-stop(33.33333333%, transparent), color-stop(33.33333333%, #f5f5f5), color-stop(37.5%, #f5f5f5), color-stop(37.5%, transparent), color-stop(41.66666667%, transparent), color-stop(41.66666667%, #f5f5f5), color-stop(45.83333333%, #f5f5f5), color-stop(45.83333333%, transparent), color-stop(50%, transparent), color-stop(50%, #f5f5f5), color-stop(54.16666667%, #f5f5f5), color-stop(54.16666667%, transparent), color-stop(58.33333333%, transparent), color-stop(58.33333333%, #f5f5f5), color-stop(62.5%, #f5f5f5), color-stop(62.5%, transparent), color-stop(66.66666667%, transparent), color-stop(66.66666667%, #f5f5f5), color-stop(70.83333333%, #f5f5f5), color-stop(70.83333333%, transparent), color-stop(75%, transparent), color-stop(75%, #f5f5f5), color-stop(79.16666667%, #f5f5f5), color-stop(79.16666667%, transparent), color-stop(83.33333333%, transparent), color-stop(83.33333333%, #f5f5f5), color-stop(87.5%, #f5f5f5), color-stop(87.5%, transparent), color-stop(91.66666667%, transparent), color-stop(91.66666667%, #f5f5f5), color-stop(95.83333333%, #f5f5f5), color-stop(95.83333333%, transparent));
    background-image: linear-gradient(90deg, #f5f5f5 4.16666667%, transparent 0, transparent 8.33333333%, #f5f5f5 0, #f5f5f5 12.5%, transparent 0, transparent 16.66666667%, #f5f5f5 0, #f5f5f5 20.83333333%, transparent 0, transparent 25%, #f5f5f5 0, #f5f5f5 29.16666667%, transparent 0, transparent 33.33333333%, #f5f5f5 0, #f5f5f5 37.5%, transparent 0, transparent 41.66666667%, #f5f5f5 0, #f5f5f5 45.83333333%, transparent 0, transparent 50%, #f5f5f5 0, #f5f5f5 54.16666667%, transparent 0, transparent 58.33333333%, #f5f5f5 0, #f5f5f5 62.5%, transparent 0, transparent 66.66666667%, #f5f5f5 0, #f5f5f5 70.83333333%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5 79.16666667%, transparent 0, transparent 83.33333333%, #f5f5f5 0, #f5f5f5 87.5%, transparent 0, transparent 91.66666667%, #f5f5f5 0, #f5f5f5 95.83333333%, transparent 0);
    overflow: hidden;
    margin-bottom: 8px;
  }
  .grid-demo .ant-row-flex {
    background: #f5f5f5;
  }
  .grid-demo .ant-row-flex>div,
  .grid-demo .ant-row>div {
    padding: 5px 0;
    text-align: center;
    border-radius: 0;
    min-height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #fff;
  }
  .grid-demo .ant-row-flex>div:not(.gutter-row), .grid-demo .ant-row>div:not(.gutter-row) {
    background: #00a0e9;
    padding: 16px 0;
  }
  .grid-demo .ant-row-flex>div:not(.gutter-row):nth-child(odd), .grid-demo .ant-row>div:not(.gutter-row):nth-child(odd) {
    background: rgba(0, 160, 233, .7);
  }
  .grid-demo .ant-row .demo-col {
    text-align: center;
    padding: 30px 0;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
  }
  .grid-demo .overview .ant-row .demo-col-1 {
    background: rgba(0, 160, 233, .7);
  }
  .grid-demo .overview .ant-row .demo-col-2 {
    background: rgba(0, 160, 233, .5);
  }
  .grid-demo .overview .ant-row .demo-col-3 {
    background: hsla(0, 0%, 100%, .2);
    color: #999;
  }
  .grid-demo .overview .ant-row .demo-col-4 {
    background: rgba(0, 160, 233, .6);
  }
  .grid-demo .overview .ant-row .demo-col-5 {
    background: hsla(0, 0%, 100%, .5);
    color: #999;
  }
  .grid-demo .height-100 {
    height: 100px;
    line-height: 100px;
  }
  .grid-demo .height-50 {
    height: 50px;
    line-height: 50px;
  }
  .grid-demo .height-120 {
    height: 120px;
    line-height: 120px;
  }
  .grid-demo .height-80 {
    height: 80px;
    line-height: 80px;
  }
  .grid-demo .gutter-example .ant-row>div {
    background: transparent;
    border: 0;
  }
  .grid-demo .gutter-box {
    background: #00a0e9;
    padding: 5px 0;
  }
</style>

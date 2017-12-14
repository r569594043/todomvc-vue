<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
    </Menu>
    <div class="layout-content">
      <Row>
        <Col span="5">
          <Menu active-name="1-2" width="auto" :open-names="['1']" theme="dark">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                导航一
              </template>
              <MenuItem name="1-1">选项 1</MenuItem>
              <MenuItem name="1-2">选项 2</MenuItem>
              <MenuItem name="1-3">选项 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                导航二
              </template>
              <MenuItem name="2-1">选项 1</MenuItem>
              <MenuItem name="2-2">选项 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                导航三
              </template>
              <MenuItem name="3-1">选项 1</MenuItem>
              <MenuItem name="3-2">选项 2</MenuItem>
            </Submenu>
          </Menu>
        </Col>
        <Col span="19">
          <div class="layout-content-main">内容区域</div>
        </Col>
      </Row>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import iView from 'iview';
// import todoStorage from './todoStorage';
// import filters from './filters';
// import 'todomvc-common/base.js'

Vue.use(iView);

export default {
  name: 'iViewDemo',
  data() {
    return {
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
  },
  directives: {
  },
};
</script>

<style lang="css" scoped>
  @import '../../node_modules/iview/dist/styles/iview.css';
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    border-bottom: 0 none;
  }
  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-content {
    min-height: 200px;
    overflow: hidden;
    background: #fff;
    /*border-radius: 4px;*/
  }
  .layout-content-main {
    padding: 10px;
  }
  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #d7dde4;
    background: #495060;
  }
</style>
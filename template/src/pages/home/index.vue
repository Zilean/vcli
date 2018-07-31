<template>
  <div class="tabbar-container">
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { Button } from "element-ui";
const userModule = createNamespacedHelpers("user");

export default {
  components: {
    ElButton: Button
  },
  data() {
    return {
      showLogin: false,
      getData: false,
      activeTab:
        +sessionStorage.getItem(this.$conf.constants.activedTabNum) || 0
    };
  },
  computed: {
    ...userModule.mapGetters(["wxMe"])
  },
  created() {
    this.initData();
  },
  destroyed() {
    sessionStorage.setItem(this.$conf.constants.activedTabNum, this.activeTab);
  },
  methods: {
    ...userModule.mapActions(["getWxMe"]),
    // 初始化数据
    async initData() {
      await this.getWxMe();
      // 减少闪烁
      this.getData = true;
      if (this.wxMe.telephone) this.showLogin = false;
    },
    async loginSuccess() {
      await this.getWxMe();
      this.$refs.home && this.$refs.home.getActives();
      this.showLogin = false;
    },
    changeTab() {
      this.activeTab = 0;
      this.showLogin = false;
    }
  }
};
</script>
<style lang="less">
.tabbar-container {
  .van-tabbar--fixed {
    width: 10.8rem;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 999;
  }
  .tabbar {
    left: 50%;
    width: 10.8rem;
    margin-left: -5.4rem;
    z-index: 100;
    .van-tabbar-item--active {
      color: #fa494b;
    }
  }
}
</style>

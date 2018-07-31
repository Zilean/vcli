<template>
  <div class="console-sidebar">
    <el-menu class="sidebar-content" :unique-opened='true' :router='true' :default-active="defaultActive" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import {
  Menu,
  Submenu,
  MenuItem,
  Icon,
  MenuItemGroup,
  Tooltip
} from "element-ui";
export default {
  components: {
    ElMenu: Menu,
    ElSubmenu: Submenu,
    ElMenuItem: MenuItem,
    ElMenuItemGroup: MenuItemGroup,
    Icon: Icon,
    ElTooltip: Tooltip
  },
  data() {
    return {
      isCollapse: true
    };
  },
  computed: {
    defaultActive: function() {
      const that = this;
      return (
        (that.$route.meta && that.$route.meta.activePath) || this.$route.path
      );
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
.console-sidebar {
  .el-submenu__title {
    font-size: 12px;
    height: 46px;
    line-height: 46px;
  }
  .el-submenu {
    background: #37424f;
    border-bottom: 1px solid #414d5c;
  }
  .el-submenu__icon-arrow {
    right: 40px;
    margin-top: -4px;
  }
  .el-icon-message {
    font-size: 12px;
  }
  .el-menu-item {
    font-size: 12px;
    height: 42px;
    line-height: 42px;
    &.is-active {
      border-right: none;
      color: #fff;
      background: #0099cc !important;
      &:hover {
        background: #0099cc !important;
      }
    }
  }
}
</style>
<style scoped lang="less">
.console-sidebar {
  position: fixed;
  top: 50px;
  bottom: 0px;
  background-color: #293038;
  z-index: 102;
  overflow-x: hidden;
  overflow-y: auto;
  height: auto;
  &.not-collapse {
    width: 180px;
  }
  .sidebar-content {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #293038;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
    .sidebar-fold {
      height: 30px;
      width: 140px;
      background: #394555;
      color: #aeb9c2;
      text-align: left;
      padding: 0 20px;
      line-height: 30px !important;
      user-select: none;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
    }
  }
}
</style>

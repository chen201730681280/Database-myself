<template>
  <div class="menu" :class="{ smallNav: isCollapse }">
    <el-menu :collapse="isCollapse">
      <el-menu-item index="1" @click="navToggle">
        <template>
          <i class="el-icon-setting"></i>
          <span slot="title">收起/展开面板</span>
        </template>
      </el-menu-item>

      <!-- <el-submenu index="2" v-if="type === '01' || type === '02'"> -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">医生管理系统</span>
        </template>
        <el-menu-item-group>
          <span slot="title">医生人员信息管理</span>
          <el-menu-item index="2-1">
            <router-link to="addDoctor">增加医生信息</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="editDoctor">修改医生信息</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="日常工作">
          <el-menu-item index="2-3">
            <router-link to="addShift">添加医生轮班</router-link>
          </el-menu-item>

          <el-menu-item index="2-4">
            <router-link to="shiftDoctor">门诊值班安排</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="3" v-if="type === '01' || type === '03'"> -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">挂号缴费系统</span>
        </template>
        <el-menu-item-group>
          <span slot="title">挂号收银</span>
          <el-menu-item index="3-1">
            <router-link to="Guahao">挂号</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="Guanli">管理挂号信息</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="Jiaofei">缴费办理</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- <el-submenu index="4" v-if="type === '01' || type === '04'"> -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">药房管理系统</span>
        </template>
        <el-menu-item-group>
          <span slot="title">药房管理系统</span>
          <el-menu-item index="4-1">
            <router-link to="Chakan">查看药品信息</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="Chuyao">出药</router-link>
          </el-menu-item>
          <el-menu-item index="4-4">
            <router-link to="Buyao">补药</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">病人管理系统</span>
        </template>
        <el-menu-item-group>
          <span slot="title">病人管理系统</span>
          <el-menu-item index="5-1" v-if="type === '01'  || type === '03'">
            <router-link to="addPatient">增加病人信息</router-link>
          </el-menu-item>
          <el-menu-item index="5-2">
            <router-link to="patientInfo">查看患者信息</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "AllMenu",
  data() {
    return {
      isCollapse: false,
     // userLogin: "",
      type: "",
    };
  },
  methods: {
    // 转化收和展状态
    navToggle() {
      console.log("ch");
      this.isCollapse = !this.isCollapse;
    },
    navColse() {
      this.isCollapse = true;
    },
  },
  // created: function () {
  //   //获取用户相关信息、判断用户是否登录
  //   if (sessionStorage.getItem("easeHis")) {
  //     this.userLogin = true;
  //     this.type = sessionStorage.getItem("easeHisType");
  //     console.log(this.type);
  //   } else {
  //     this.userLogin = false;
  //   }
  // },
};
</script>

<style lang="stylus-loader" rel="stylesheet/stylus">
    .menu
      position:fixed
      /* 出现的优先级 */
      z-index:9999
      height:100%
      width:230px
      transition: width 0.4s
      background-color:#4f9d9d
      /* 裁剪溢出内容 并使用滚动机制*/
      overflow-y: scroll
    
      .el-menu--dark
        background-color: transparent
      &.smallNav
        width:64px
        overflow-y: visible
        .el-menu-item
        .el-submenu__title
          span
            display:none
          .el-submenu__icon-arrow
            display:none
    .content
      padding-left:60px
      .tagcontent
        padding:20px
      .HISshow
        opacity:1
        transition:all 0.5s
      .HISshow-enter,.HISshow-leave-active
        opacity:0
        transition:all 0.5s
    
</style>

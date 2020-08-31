<template>
  <div class="internal">
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
    <div class="content" @mouseover="navColse" :class="{change:!isCollapse}">
      <!-- 右侧头部区域 -->
      <div class="tagcontent">
        <transition name="HISshow">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "internal",
  data() {
    return {
      isCollapse: true,
      userLogin: "",
      type: "",
    };
  },
  methods: {
    // 左侧导航打开、关闭切换
    navToggle() {
      this.isCollapse = !this.isCollapse;
    },
    // 左侧导航关闭
    navColse() {
      this.isCollapse = true;
    },
  },
  //   created: function () {
  //     //获取用户相关信息、判断用户是否登录
  //     if (sessionStorage.getItem("easeHis")) {
  //       this.userLogin = true;
  //       this.type = sessionStorage.getItem("easeHisType");
  //       console.log(this.type);
  //     } else {
  //       this.userLogin = false;
  //     }
  //   },
};
</script>

<style scoped>
.menu {
  width: 230px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.4s;
  background-color: #4f9d9d;
  overflow-y: scroll;
}
.smallNav {
  width: 64px;
  overflow-y: visible;
}
.content {
  padding-left: 64px;
}
.change {
  padding-left:260px;
}
</style>>

</style>
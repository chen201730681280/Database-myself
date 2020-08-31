<template>
  <div class="addDoctor">
    <span class="title">添加医生信息</span>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="入职日期" prop="date">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="学历" prop="education">
        <el-select v-model="ruleForm.education" placeholder="请选择">
          <el-option label="大专" value="junior"></el-option>
          <el-option label="本科" value="undergraduate"></el-option>
          <el-option label="研究生" value="postgraduate"></el-option>
          <el-option label="博士" value="doctor"></el-option>
          <el-option label="硕士" value="master"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-input v-model="ruleForm.major"></el-input>
      </el-form-item>
      <el-form-item label="职称" prop="position">
        <el-input v-model="ruleForm.position"></el-input>
      </el-form-item>
      <el-form-item label="科室" prop="department">
        <el-input v-model="ruleForm.department"></el-input>
      </el-form-item>
      <el-form-item class="buttonAdd">
        <el-button type="warning" @click="submitForm('ruleForm')">增 加</el-button>
        <el-button type="primary" @click="resetForm ('ruleForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        sex: "男",
        date: "",
        degree: "",
        major: "",
        position: "",
        office: "",
        resource: "",
      },

      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],

        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "blur",
          },
        ],
        education: [
          { required: true, message: "请选择学历", trigger: "change" },
        ],
        major: [{ required: true, message: "请填写专业", trigger: "blur" }],
        position: [{ required: true, message: "请填写职称", trigger: "blur" }],
        department: [
          { required: true, message: "请填写科室", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 增加的方法
    submitForm(ruleForm) {
      // 规则验证
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let year = this.ruleForm.date.getFullYear();
          let month = this.ruleForm.date.getMonth() + 1;
          let day = this.ruleForm.date.getDate();
          let dateFormat = year + "-" + month + "-" + day;
          this.ruleForm.date = dateFormat;
          this.$http.post("/api/doctor/add", {
              name: this.ruleForm.name,
              sex: this.ruleForm.sex,
              date: this.ruleForm.date,
              major: this.ruleForm.major,
              education: this.ruleForm.education,
              position: this.ruleForm.position,
              department: this.ruleForm.department,
            })
            .then(function (res) {
              if (res.data.success) {
                // 提示信息
                this.$message({
                  showClose: true,
                  message: "添加成功！",
                  type: "success",
                });
              } else {
                this.$message({
                  showClose: true,
                  message: "添加失败！",
                  type: "error",
                });
                return false;
              }
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
</style>
<template>
  <div>
    <el-divider></el-divider>
    <div style="text-align: left">
      <h1><i class="el-icon-document-checked">窗口挂号</i></h1>
    </div>
    <el-divider></el-divider>
    <div style="text-align: left">
       <el-button type="primary">挂号</el-button>
       <el-button type="primary">重置</el-button>
    </div>
    <el-divider></el-divider>

    <el-descriptions class="margin-top" title="基本信息" :column="3"  border>
  
      <el-descriptions-item>
        <template slot="label">
          病历号
        </template>
        <el-input v-model="register.case_number" placeholder="请输入内容"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          姓名
        </template>
        <el-input v-model="register.real_name" placeholder="请输入内容"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          性别
        </template>
        <el-select v-model="register.gender" placeholder="请选择">
          <el-option
            v-for="item in genderList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          年龄
        </template>
        <el-input v-model="register.age" placeholder="请输入内容" style="width:30%"></el-input>
        <el-select v-model="register.age_type" placeholder="请选择" style="width:30%">
          <el-option value="年">年</el-option>
          <el-option value="天">天</el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          出生日期
        </template>
        <el-date-picker
          v-model="register.birthday"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          身份证号
        </template>
        <el-input v-model="register.card_number" placeholder="请输入内容"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          家庭住址
        </template>
        <el-input v-model="register.home_address" placeholder="请输入家庭住址（可选）"></el-input>
      </el-descriptions-item>
  </el-descriptions>


  <el-descriptions class="margin-top" title="挂号信息" :column="3" border style="margin-top:20px">
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          结算类别
        </template>
        <el-select v-model="register.settle_category_id" placeholder="请选择">
          <el-option
            v-for="item in settle_category_list"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          看诊日期
        </template>
        <el-date-picker
          v-model="register.visit_date"
          type="date"
          placeholder="选择日期" disabled>
        </el-date-picker>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          午别
        </template>
        <el-select v-model="register.noon" placeholder="请选择" disabled>
          <el-option value="上午">上午</el-option>
          <el-option value="下午">下午</el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          挂号科室
        </template>
        <el-select v-model="register.deptment_id" placeholder="请选择">
          <el-option
            v-for="dept in deptment_list"
            :key="dept.id"
            :label="dept.dept_name"
            :value="dept.id">
          </el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          号别
        </template>
        <el-select v-model="register.regist_level_id" placeholder="请选择" @change="registLevelChange">
          <el-option
            v-for="level in regist_level_list"
            :key="level.id"
            :label="level.regist_name"
            :value="level.id">
          </el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          看诊医生
        </template>
        <el-select v-model="register.employee_id" placeholder="请选择" @change="employeeChange">
          <el-option
            v-for="employee in employee_list"
            :key="employee.id"
            :label="employee.realname"
            :value="employee.id">
          </el-option>
        </el-select>
      </el-descriptions-item>
       <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          初始号额
        </template>
        <el-input v-model="register.total_number" placeholder="请输入数据" disabled></el-input>
      </el-descriptions-item>
       <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          已用号额
        </template>
        <el-input v-model="register.used_number" placeholder="请输入数据" disabled></el-input>
      </el-descriptions-item>
       <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          病历本
        </template>
        <el-switch
          style="display: block"
          v-model="register.is_book"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="是"
          inactive-text="否"
          @change="isBook">
        </el-switch>
      </el-descriptions-item>
       <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          应收金额
        </template>
        <el-input v-model="register.regist_money" placeholder="请输入数据" disabled></el-input>
      </el-descriptions-item>
       <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          收费方式
        </template>
        <el-select v-model="register.regist_method" placeholder="请选择">
          <el-option value="现金">现金</el-option>
          <el-option value="医保卡">医保卡</el-option>
          <el-option value="微信">微信</el-option>
          <el-option value="支付宝">支付宝</el-option>
          <el-option value="银行卡">银行卡</el-option>
        </el-select>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        register: {
        id: "",
        case_number: "", //病历号
        real_name: "", //姓名
        gender: "男", //性别
        card_number: "", //身份证
        birthday: "", //出生日期
        age: "", //年龄
        age_type: "年", //年龄类型
        home_address: "", //家庭住址
        visit_date: "", //看诊日期
        noon: "上午", //午别
        deptment_id: "", //科室编号
        employee_id: "", //医生编号
        regist_level_id: "", //挂号级别编号
        settle_category_id: "", //结算类别编号
        total_number: 0,
        used_number: "0",
        is_book: false, //病历本
        regist_method: "医保卡", //收费方式
        regist_money: "", //收费金额
        visit_state: "", //看诊状态
      },
        genderList: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
          }],
        employee_list: [],//看诊医生列表
        regist_level_list: [],//挂号级别列表
        deptment_list: [],//挂号科室列表
        settle_category_list: []//结算类别列表

      }
    },
   methods: {
     getCaseNumber() {
       this.$http.get("http://localhost:8092/getCaseNumber").then(response => {
          this.register.case_number = response.data
          
       }) 
     },
     getCurrentTime() {
       let nowTime = new Date();
       //获得小时数
       let h = nowTime.getHours;
       if (h >= 11) {
        this.register.noon = "上午"
       } else {
        this.register.noon = "下午"
       }
       this.register.visit_date = nowTime;
     },
     getDeptList() {
        this.$http.get("http://localhost:8092/getDeptList").then(response => {
          this.deptment_list = response.data;
       }) 
     },
     getRegisterLevelList() {
      this.$http.get("http://localhost:8092/getRegistLevelList").then(response => {
          this.regist_level_list = response.data;
       }) 
     },
     //改变号别
     registLevelChange(id) {
        //根据id在regist_level_list数组找到对应的level对象。
       let registLevel = this.regist_level_list.find(level => level.id == id);
       this.register.total_number = registLevel.regist_quota;
       this.register.regist_money = registLevel.regist_fee;

       //查询对应的医生信息
       this.$http.get(`http://localhost:8092/getEmployeeList?deptId=${this.register.deptment_id}&levelId=${this.register.regist_level_id}`)
         .then(response => {
           this.employee_list = response.data;
          
       }) 
     },
      //是否需要病历本
       isBook(boo) {
         if (boo) {
           this.register.regist_money+=1;
         } else {
           this.register.regist_money -= 1;
        }
        
       },
       //选择看诊医生，修改已用号额
      employeeChange() {
        this.$http.get(`http://localhost:8092/getUsedNumberByEmployeeIdAndNoon?empId=${this.register.employee_id}&noon=${this.register.noon}`)
         .then(response => {
           this.register.used_number = response.data;
          console.log(response.data);
          
       }) 
       }
    },
    mounted() {
      //自动生成病历号
      this.getCaseNumber();
      //显示看诊时间及午别
      this.getCurrentTime();
      //获取部门列表信息
      this.getDeptList();
      //获取挂号级别信息
      this.getRegisterLevelList();
    }
 }
</script>

<style scope>
</style>
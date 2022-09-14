import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import OnsiteRegistrationa from '@/views/registration/onsite_registration.vue'
import ExpenseCharge from '@/views/registration/expense_charge.vue'
import PhysicianPatient from '@/views/physician/physician_patient.vue'
import ExpenseQuery from '@/views/physician/expense_query.vue'
import CheckApply from '@/views/check/check_apply.vue'
import RegistrationRecord from '@/views/registration/registration_record.vue'
import ExpenseRefund from '@/views/registration/expense_refund.vue'
import ExpenseManage from '@/views/registration/expense_manage.vue'
import HomeMedicalRecord from '@/views/physician/patient/home_medical_record.vue'
import CheckRequest from '@/views/physician/patient/check_request.vue'
import InspectionRequest from '@/views/physician/patient/inspection_request.vue'
import PhysicianHistory from '@/views/physician/patient/physician_history.vue'
import CheckResults from '@/views/physician/patient/check_results.vue'
import InspectionResults from '@/views/physician/patient/inspection_results.vue'
import OutpatientDiagnosis from '@/views/physician/patient/outpatient_diagnosis.vue'
import WritePrescription from '@/views/physician/patient/write_prescription.vue'
import DisposalRequest from '@/views/physician/patient/disposal_request.vue'
import CheckInput from '@/views/check/check_input.vue'
import CheckManage from '@/views/check/check_manage.vue'
import CheckPatient from '@/views/check/check_patient.vue'
import DisposalApple from '@/views/disposal/disposal_apply.vue'
import DisposalInput from '@/views/disposal/disposal_input.vue'
import DisposalManage from '@/views/disposal/disposal_manage.vue'
import DisposalPatient from '@/views/disposal/disposal_patient.vue'
import DrugMedicine from '@/views/drugstore/drug_medicine.vue'
import DrugStorage from '@/views/drugstore/drug_storage.vue'
import GiveMedicine from '@/views/drugstore/give_medicine.vue'
import TranHistory from '@/views/drugstore/tran_history.vue'
import InspectionApply from '@/views/inspection/inspection_apply.vue'
import InspectionInput from '@/views/inspection/inspection_input.vue'
import InspectionManage from '@/views/inspection/inspection_manage.vue'
import InspectionPatient from '@/views/inspection/inspection_patient.vue'
Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: '挂号收费',
      iconCls: "el-icon-document",
      component: Layout,
      children: [
        {
          path: '/onsite_registration',
          name: '窗口挂号',
          component: OnsiteRegistrationa
        },
		{
		  path: '/registration_record',
		  name: '窗口退号',
		  component: RegistrationRecord
		},
        {
          path: '/expense_charge',
          name: '收费',
          component: ExpenseCharge
        },
		{
		  path: '/expense_refund',
		  name: '退费',
		  component: ExpenseRefund
		},
		{
		  path: '/expense_manage',
		  name: '费用记录查看',
		  component: ExpenseManage
		}
      ]
    },
    {
      path: '/',
      name: '门诊医生',
      component: Layout,
      iconCls: "el-icon-user",
      children: [
        {
          path: '/physician_patient',
          name: '患者查看',
          component: PhysicianPatient
        },
        {
          path: '/expense_query',
          name: '费用查询',
          component: ExpenseQuery
        },
		{
		  path: '/home_medical_record',
		  name: '病历首页',
		  component: HomeMedicalRecord
		}, 
		{
		  path: '/check_request',
		  name: '检查申请',
		  component: CheckRequest 
		}, 
		{
		  path: '/inspection_request',
		  name: '检验申请',
		  component: InspectionRequest 
		}, 
		{
		  path: '/physician_history',
		  name: '看诊记录',
		  component: PhysicianHistory 
		}, 
		{
		  path: '/check_results',
		  name: '检查结果查看',
		  component: CheckResults 
		}, 
		{
		  path: '/inspection_results',
		  name: '检验结果查看',
		  component: InspectionResults 
		}, 
		{
		  path: '/outpatient_diagnosis',
		  name: '门诊确诊',
		  component: OutpatientDiagnosis 
		}, 
		{
		  path: '/write_prescription',
		  name: '开立处方',
		  component: WritePrescription 
		}, 
		{
		  path: '/disposal_request',
		  name: '处置申请',
		  component: DisposalRequest 
		}
      ]
    },
    {
      path: '/',
      name: '检查医生',
      iconCls: 'el-icon-camera',
      component: Layout,
      children: [
        {
          path: '/check_apply',
          name: '检查申请',
          component: CheckApply
        },
		{
		  path: '/check_patient',
		  name: '患者录入',
		  component: CheckPatient
		},
		{
		  path: '/check_input',
		  name: '结果录入',
		  component: CheckInput
		},
		{
		  path: '/check_manage ',
		  name: '检查管理',
		  component: CheckManage 
		}
      ]
    },
	{
	  path: '/',
	  name: '检验医生',
	  iconCls: 'el-icon-camera',
	  component: Layout,
	  children: [
	    {
	      path: '/inspection_apply',
	      name: '检验申请',
	      component: InspectionApply
	    },
		{
		  path: '/inspection_patient',
		  name: '患者录入',
		  component: InspectionPatient
		},
		{
		  path: '/inspection_input',
		  name: '检验录入',
		  component: InspectionInput
		},
		{
		  path: '/inspection_manage',
		  name: '检验管理',
		  component: InspectionManage
		}
	  ]
	},
	{
	  path: '/',
	  name: '药库管理',
	  iconCls: 'el-icon-camera',
	  component: Layout,
	  children: [
	    {
	      path: '/give_medicine',
	      name: '药房发药',
	      component: GiveMedicine
	    },
		{
		  path: '/drug_medicine',
		  name: '药房退药',
		  component: DrugMedicine
		},
		{
		  path: '/drug_storage',
		  name: '药库管理',
		  component: DrugStorage
		},
		{
		  path: '/tran_history',
		  name: '交易记录',
		  component: TranHistory
		}
	  ]
	},
	{
	  path: '/',
	  name: '处置医生',
	  iconCls: 'el-icon-camera',
	  component: Layout,
	  children: [
	    {
	      path: '/disposal_apply',
	      name: '处置申请',
	      component: DisposalApply
	    },
		{
		  path: '/disposal_patient',
		  name: '患者录入',
		  component: DisposalPatient
		},
		{
		  path: '/disposal_input',
		  name: '处置录入',
		  component: DisposalInput
		},
		{
		  path: '/disposal_manage',
		  name: '处置管理',
		  component: DisposalManage
		}
	  ]
	}
]

const router = new VueRouter({
  routes
})

export default router

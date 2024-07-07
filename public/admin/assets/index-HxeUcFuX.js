
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-DgN2PCOq.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{d as ce,r as f,m as x,a as fe,n as r,q as _e,g as w,c as z,b as l,w as t,F as H,s as K,i as k,h as u,y as be,z as j,t as b,e as I,K as U,E as D,k as G}from"./index-B-LUCRde.js";import{n as J}from"./index-J5zVJPyL.js";import{u as Q}from"./utcformatTime-Bq4gDWNx.js";const ge=I("div",{class:"flex items-center gap-4"},"用户信息列表",-1),we={class:"input-with-text"},ve={class:"input-with-text"},Ce={class:"input-with-text"},ye=ce({__name:"index",setup(he){const A=f(),R=f(0),y=f(!1),h=f(!1),v=f(!1),M=f(0),S=f(),g=x({status:"0",id:0}),p=x({model3Count:0,model4Count:0,drawMjCount:0}),i=x({username:"",email:"",status:"",phone:"",page:1,size:15}),W={0:"Inactive",1:"Active",2:"Banned",3:"Suspended"},X=x({model3Count:[{required:!0,message:"请填写调整的基础模型额度",trigger:"blur"}],model4Count:[{required:!0,message:"请填写调整的高级模型额度",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写调整的绘画积分额度",trigger:"blur"}]}),q=f([]);async function _(){try{h.value=!0;const n=await U.queryAllUser(i),{rows:a,count:C}=n.data;h.value=!1,R.value=C,q.value=a}catch{h.value=!1}}function Z(n){y.value=!0,g.status=n.status.toString(),g.id=n.id}function E(n){v.value=!0,M.value=n.id}async function ee(){(await U.updateUserStatus(g)).success&&D({type:"success",message:"变更用户状态成功！"}),y.value=!1,_()}function le(n){n==null||n.resetFields(),_()}async function te(n){const{id:a,email:C}=n;(await U.resetUserPassword({id:a})).success&&D({type:"success",message:`重置用户[${C}密码为初始密码为[123456]完成！`})}function ae(n){M.value=0,n==null||n.resetFields()}async function ne(n){n==null||n.validate(async a=>{a&&(await U.sendUserCrami({...p,userId:M.value}),D.success("调整成功！"),v.value=!1,_())})}return fe(()=>_()),(n,a)=>{const C=me,V=r("el-input"),d=r("el-form-item"),P=r("el-option"),B=r("el-select"),m=r("el-button"),T=r("el-form"),L=pe,oe=r("el-avatar"),o=r("el-table-column"),F=r("el-tag"),se=r("el-popconfirm"),ue=r("el-table"),re=r("el-pagination"),ie=r("el-row"),N=r("el-dialog"),$=r("el-input-number"),de=_e("loading");return w(),z("div",null,[l(C,null,{title:t(()=>[ge]),_:1}),l(L,null,{default:t(()=>[l(T,{ref_key:"formRef",ref:A,inline:!0,model:i},{default:t(()=>[l(d,{label:"用户名称",prop:"username"},{default:t(()=>[l(V,{modelValue:i.username,"onUpdate:modelValue":a[0]||(a[0]=e=>i.username=e),placeholder:"用户姓名[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"用户邮箱",prop:"email"},{default:t(()=>[l(V,{modelValue:i.email,"onUpdate:modelValue":a[1]||(a[1]=e=>i.email=e),placeholder:"用户邮箱[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"手机号码",prop:"phone"},{default:t(()=>[l(V,{modelValue:i.phone,"onUpdate:modelValue":a[2]||(a[2]=e=>i.phone=e),placeholder:"手机号码[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"用户状态",prop:"status"},{default:t(()=>[l(B,{modelValue:i.status,"onUpdate:modelValue":a[3]||(a[3]=e=>i.status=e),placeholder:"请选择用户状态",style:{width:"160px"},clearable:""},{default:t(()=>[(w(!0),z(H,null,K(k(J),e=>(w(),j(P,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:t(()=>[l(m,{type:"primary",onClick:_},{default:t(()=>[u(" 查询 ")]),_:1}),l(m,{onClick:a[4]||(a[4]=e=>le(A.value))},{default:t(()=>[u(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(L,{style:{width:"100%"}},{default:t(()=>[be((w(),j(ue,{border:"",data:q.value,style:{width:"100%"},size:"large"},{default:t(()=>[l(o,{prop:"avatar",label:"用户头像",fixed:"",width:"120"},{default:t(e=>[l(oe,{src:e.row.avatar},null,8,["src"])]),_:1}),l(o,{fixed:"",prop:"username",label:"用户名称",width:"150"}),l(o,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),l(o,{prop:"phone",label:"用户手机号",width:"250",align:"left"},{default:t(e=>{var s;return[u(b(((s=e.row)==null?void 0:s.phone)||"未绑定手机号"),1)]}),_:1}),l(o,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:t(({row:e})=>[l(F,{type:"success"},{default:t(()=>[u(b(W[e.status]),1)]),_:2},1024)]),_:1}),l(o,{prop:"balanceInfo.model3Count",label:"基础模型",width:"120",align:"center"}),l(o,{prop:"balanceInfo.model4Count",label:"高级模型",width:"120",align:"center"}),l(o,{prop:"balanceInfo.drawMjCount",label:"绘画余额",width:"120",align:"center"}),u("expirationTime "),l(o,{prop:"balanceInfo.drawMjCount",label:"会员到期时间",width:"170",align:"center"},{default:t(e=>[l(F,{type:"success"},{default:t(()=>{var s,c,Y,O;return[u(b((c=(s=e.row)==null?void 0:s.balanceInfo)!=null&&c.expirationTime?k(Q)(new Date((O=(Y=e.row)==null?void 0:Y.balanceInfo)==null?void 0:O.expirationTime).toString()):"非会员"),1)]}),_:2},1024)]),_:1}),l(o,{prop:"balanceInfo.memberModel3Count",label:"基础模型[会员]",width:"120",align:"center"}),l(o,{prop:"balanceInfo.memberModel4Count",label:"高级模型[会员]",width:"120",align:"center"}),l(o,{prop:"balanceInfo.memberDrawMjCount",label:"绘画余额[会员]",width:"120",align:"center"}),l(o,{prop:"balanceInfo.useModel3Count",label:"已用基础模型",width:"160",align:"center"},{default:t(e=>{var s,c;return[u(b(`${((s=e.row.balanceInfo)==null?void 0:s.useModel3Count)||0}次 | ${((c=e.row.balanceInfo)==null?void 0:c.useModel3Token)||0} Token`),1)]}),_:1}),l(o,{prop:"balanceInfo.useModel4Count",label:"已用高级模型",width:"160",align:"center"},{default:t(e=>{var s,c;return[u(b(`${((s=e.row.balanceInfo)==null?void 0:s.useModel4Count)||0}次 | ${((c=e.row.balanceInfo)==null?void 0:c.useModel4Token)||0} Token`),1)]}),_:1}),l(o,{prop:"balanceInfo.useDrawMjToken",label:"已用绘画积分",width:"160",align:"center"},{default:t(e=>{var s;return[u(b(`${((s=e.row.balanceInfo)==null?void 0:s.useDrawMjToken)||0} Token`),1)]}),_:1}),l(o,{prop:"createdAt",label:"注册时间",width:"200",align:"center"},{default:t(e=>[u(b(k(Q)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),l(o,{fixed:"right",label:"操作",width:"250",align:"center"},{default:t(e=>[l(m,{link:"",type:"primary",size:"small",onClick:s=>Z(e.row)},{default:t(()=>[u(" 修改状态 ")]),_:2},1032,["onClick"]),l(se,{title:"确认重置此用户密码为【123456】?","confirm-button-text":"确认重置",onConfirm:s=>te(e.row)},{reference:t(()=>[l(m,{link:"",type:"danger"},{default:t(()=>[u(" 重置密码 ")]),_:1})]),_:2},1032,["onConfirm"]),l(m,{link:"",type:"primary",size:"small",onClick:s=>E(e.row)},{default:t(()=>[u(" 调整积分 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[de,h.value]]),l(ie,{class:"mt-5 flex justify-end"},{default:t(()=>[l(re,{"current-page":i.page,"onUpdate:currentPage":a[5]||(a[5]=e=>i.page=e),"page-size":i.size,"onUpdate:pageSize":a[6]||(a[6]=e=>i.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:R.value,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),l(N,{modelValue:y.value,"onUpdate:modelValue":a[8]||(a[8]=e=>y.value=e),title:"变更用户状态",width:"500px"},{default:t(()=>[l(T,{model:g,inline:!0},{default:t(()=>[l(d,{label:"用户状态","label-width":"90px"},{default:t(()=>[l(B,{modelValue:g.status,"onUpdate:modelValue":a[7]||(a[7]=e=>g.status=e),placeholder:"请选择用户状态",style:{width:"160px"},clearable:""},{default:t(()=>[(w(!0),z(H,null,K(k(J),e=>(w(),j(P,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:t(()=>[l(m,{type:"primary",onClick:ee},{default:t(()=>[u(" 确认变更 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(N,{modelValue:v.value,"onUpdate:modelValue":a[14]||(a[14]=e=>v.value=e),title:"调整用户积分（赠送/扣除）",width:"450px",onClose:a[15]||(a[15]=e=>ae(S.value))},{footer:t(()=>[l(m,{onClick:a[12]||(a[12]=e=>v.value=!1)},{default:t(()=>[u(" 取消 ")]),_:1}),l(m,{type:"primary",onClick:a[13]||(a[13]=e=>ne(S.value))},{default:t(()=>[u(" 确认调整 ")]),_:1})]),default:t(()=>[l(T,{ref_key:"cramiRef",ref:S,model:p,rules:X,"label-width":"100px"},{default:t(()=>[l(d,{label:"基础积分",prop:"modelLimits"},{default:t(()=>[I("div",we,[l($,{modelValue:p.model3Count,"onUpdate:modelValue":a[9]||(a[9]=e=>p.model3Count=e),max:99999,min:-99999,step:1,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"])])]),_:1}),l(d,{label:"高级积分",prop:"modelLimits"},{default:t(()=>[I("div",ve,[l($,{modelValue:p.model4Count,"onUpdate:modelValue":a[10]||(a[10]=e=>p.model4Count=e),max:99999,min:-99999,step:1,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"])])]),_:1}),l(d,{label:"绘画积分",prop:"modelLimits"},{default:t(()=>[I("div",Ce,[l($,{modelValue:p.drawMjCount,"onUpdate:modelValue":a[11]||(a[11]=e=>p.drawMjCount=e),max:99999,min:-99999,step:1,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});typeof G=="function"&&G(ye);export{ye as default};
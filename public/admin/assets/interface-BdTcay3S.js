
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-BTce45WY.js";import{d as O,m as E,r as w,a as F,p as d,g as b,c as C,b as e,w as l,h as x,i as _,J as g,z as M,A as k,F as $,s as H,e as i,G as N,j as J,_ as z,k as q}from"./index-nGFMSQGw.js";import{a as K}from"./config-CYXO1pNF.js";const L=i("div",{class:"flex items-center gap-4"},"全局参数设置",-1),Q=i("div",{class:"text-sm/6"},[i("div",null,[x(" 系统默认的请求地址是 "),i("a",{href:"https://api.openai.com",target:"_blank"},"https://api.openai.com"),x("，国内服务器可能无法访问，需使用自己的代理或中转。 ")]),i("div",null," 此处配置为全局配置，一些系统内置的自动服务会使用到该模型。另外，当模型不配置 Key 以及 Url 时，会使用全局配置。 "),i("div",null,[x(" API 中转推荐 "),i("a",{href:"https://api.lightai.io",target:"_blank",style:{"margin-right":"10px"}},"https://api.lightai.io"),x("，支持OpenAI，Midjourney 以及多种国内外模型，无强制绑定关系，可按需选择。 ")])],-1),W=i("div",{style:{width:"250px"}},[i("p",null,"开启后、对话模型将会继承上一次对话的模型、默认开启")],-1),X=i("div",{style:{width:"250px"}},[i("p",null," 开启后，识图时将使用 base64 格式，对于本地/存储桶 链接 API 端无法访问时建议开启 ")],-1),Y=i("div",{style:{width:"250px"}},[i("p",null,"开启后，将使用全局模型在每次对话后，生成提问建议")],-1),Z=i("div",{style:{width:"250px"}}," 开启连续绘画会在使用 Dalle 绘图的时候,调用全局模型,根据上文总结绘画要求 ",-1),ee=i("div",{style:{width:"250px"}}," 开启优化后, MJ 提示词默认会使用全局模型进行翻译/联想, 不再单独扣费, 一般中转会自带翻译, 请根据实际情况选择。 ",-1),le=i("div",{style:{width:"250px"}}," 默认会存储图片到配置的存储中、如果开启此选择则表示不保存原图到我们配置的存储上、直接反代访问原始图片、这样可以进一步节省空间、但访问速度及稳定性可能有所降低！ ",-1),ae=i("div",{style:{width:"250px"}}," 开启不使用代理将直接使用重中转获取到的链接、原生discord地址国内无法访问! ",-1),te=O({__name:"interface",setup(oe){const t=E({openaiBaseUrl:"",openaiBaseKey:"",openaiTimeout:"",openaiBaseModel:"gpt-4o-mini",openaiTemperature:1,isGeneratePromptReference:0,mjNotSaveImg:0,mjProxyImgUrl:"",systemPreMessage:"",mjNotUseProxy:1,isMjTranslate:0,mjTranslatePrompt:"",isDalleChat:1,isModelInherited:1,openaiVoice:"",isConvertToBase64:0}),S=w([{label:"Alloy",value:"alloy"},{label:"Echo",value:"echo"},{label:"Fable",value:"fable"},{label:"Onyx",value:"onyx"},{label:"Nova",value:"nova"},{label:"Shimmer",value:"shimmer"}]),R=w({openaiBaseUrl:[{required:!1,trigger:"blur",message:"请填写openai的请求地址"}],isMjTranslate:[{required:!1,trigger:"blur",message:"是否开启翻译/联想"}],isGeneratePromptReference:[{required:!1,trigger:"blur",message:"是否生成提示词参考"}],isDalleChat:[{required:!1,trigger:"blur",message:"是否开启连续绘画"}],isModelInherited:[{required:!1,trigger:"blur",message:"是否继承模型"}],openaiTimeout:[{required:!1,trigger:"blur",message:"请填写openai的超时时间（单位ms）"}],openaiBaseModel:[{required:!1,trigger:"blur",message:"请填写全局模型，用于后台一些静默性赋能操作"}],openaiTemperature:[{required:!1,trigger:"blur",message:"请填写温度"}],mjTranslatePrompt:[{required:!1,trigger:"blur",message:"用于翻译 / 联想的提示词"}],openaiVoice:[{required:!1,trigger:"blur",message:"请填写openai的语音音色"}],isConvertToBase64:[{required:!1,trigger:"blur",message:"是否转换为base64"}]}),B=w();async function I(){const c=await K.queryConfig({keys:["openaiBaseUrl","openaiBaseKey","openaiTimeout","openaiBaseModel","openaiTemperature","mjNotSaveImg","mjProxyImgUrl","systemPreMessage","mjNotUseProxy","isMjTranslate","isGeneratePromptReference","mjTranslatePrompt","isDalleChat","isModelInherited","openaiVoice","isConvertToBase64"]}),{openaiBaseUrl:a="",openaiBaseKey:v="",openaiTimeout:V=300,openaiBaseModel:y="gpt-4o-mini",openaiTemperature:u=1,isMjTranslate:n="",isGeneratePromptReference:s=0,mjNotSaveImg:r,mjProxyImgUrl:m,systemPreMessage:p,mjNotUseProxy:f,mjTranslatePrompt:h,isDalleChat:T,isModelInherited:j,openaiVoice:U,isConvertToBase64:P}=c.data;Object.assign(t,{openaiBaseUrl:a,openaiBaseKey:v,openaiTimeout:V,isMjTranslate:n,isGeneratePromptReference:s,openaiTemperature:u,openaiBaseModel:y,mjNotSaveImg:r,mjProxyImgUrl:m,systemPreMessage:p,mjNotUseProxy:f,mjTranslatePrompt:h,isDalleChat:T,isModelInherited:j,openaiVoice:U,isConvertToBase64:P})}function D(){var c;(c=B.value)==null||c.validate(async a=>{if(a){try{await K.setConfig({settings:G(t)}),N.success("变更配置信息成功")}catch{}I()}else N.error("请填写完整信息")})}function G(c){return Object.keys(c).map(a=>({configKey:a,configVal:c[a]}))}return F(()=>{I()}),(c,a)=>{const v=J,V=z,y=A,u=d("el-input"),n=d("el-form-item"),s=d("el-col"),r=d("el-row"),m=d("el-switch"),p=d("el-icon"),f=d("el-tooltip"),h=d("el-input-number"),T=d("el-option"),j=d("el-select"),U=d("el-form"),P=d("el-card");return b(),C("div",null,[e(y,null,{title:l(()=>[L]),content:l(()=>[Q]),default:l(()=>[e(V,{text:"",outline:"",onClick:D},{default:l(()=>[e(v,{name:"i-ri:file-text-line"}),x(" 保存设置 ")]),_:1})]),_:1}),e(P,{style:{margin:"20px"}},{default:l(()=>[e(U,{ref_key:"formRef",ref:B,rules:R.value,model:t,"label-width":"220px"},{default:l(()=>[e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"请求地址",prop:"openaiBaseUrl","label-width":"120px"},{default:l(()=>[e(u,{modelValue:t.openaiBaseUrl,"onUpdate:modelValue":a[0]||(a[0]=o=>t.openaiBaseUrl=o),placeholder:"默认地址: https://api.openai.com 第三方代理推荐：https://api.lightai.io",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"全局key",prop:"openaiBaseKey","label-width":"120px"},{default:l(()=>[e(u,{modelValue:t.openaiBaseKey,"onUpdate:modelValue":a[1]||(a[1]=o=>t.openaiBaseKey=o),placeholder:"请填写模型全局 Key 信息，当模型 Key 为空时调用",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"全局模型",prop:"openaiBaseModel","label-width":"120px"},{default:l(()=>[e(u,{modelValue:t.openaiBaseModel,"onUpdate:modelValue":a[2]||(a[2]=o=>t.openaiBaseModel=o),placeholder:"全局模型配置，用于后台一些静默赋能操作",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"继承对话模型",prop:"isModelInherited","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.isModelInherited,"onUpdate:modelValue":a[3]||(a[3]=o=>t.isModelInherited=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[W]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"base64 识图",prop:"isConvertToBase64","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.isConvertToBase64,"onUpdate:modelValue":a[4]||(a[4]=o=>t.isConvertToBase64=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[X]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"生成提问建议",prop:"isGeneratePromptReference","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.isGeneratePromptReference,"onUpdate:modelValue":a[5]||(a[5]=o=>t.isGeneratePromptReference=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Y]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"连续绘画",prop:"isDalleChat","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.isDalleChat,"onUpdate:modelValue":a[6]||(a[6]=o=>t.isDalleChat=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Z]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"提示词优化",prop:"isMjTranslate","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.isMjTranslate,"onUpdate:modelValue":a[7]||(a[7]=o=>t.isMjTranslate=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[ee]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),[1].includes(Number(t.isMjTranslate))?(b(),M(r,{key:0},{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"优化提示词",prop:"mjTranslatePrompt","label-width":"120px"},{default:l(()=>[e(u,{type:"textarea",rows:5,modelValue:t.mjTranslatePrompt,"onUpdate:modelValue":a[8]||(a[8]=o=>t.mjTranslatePrompt=o),placeholder:"Midjourney 翻译/联想提示词",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):k("",!0),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"不存储图片",prop:"mjNotSaveImg","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.mjNotSaveImg,"onUpdate:modelValue":a[9]||(a[9]=o=>t.mjNotSaveImg=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[le]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"不使用代理",prop:"mjNotUseProxy","label-width":"120"},{default:l(()=>[e(m,{modelValue:t.mjNotUseProxy,"onUpdate:modelValue":a[10]||(a[10]=o=>t.mjNotUseProxy=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[ae]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_(g))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),[0].includes(Number(t.mjNotUseProxy))?(b(),M(r,{key:1},{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"反代地址",prop:"mjProxyImgUrl","label-width":"120px"},{default:l(()=>[e(u,{modelValue:t.mjProxyImgUrl,"onUpdate:modelValue":a[11]||(a[11]=o=>t.mjProxyImgUrl=o),placeholder:"Midjourney 反代地址，为空将直接使用原链接",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):k("",!0),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"Temperature",prop:"openaiTemperature","label-width":"120px"},{default:l(()=>[e(h,{modelValue:t.openaiTemperature,"onUpdate:modelValue":a[12]||(a[12]=o=>t.openaiTemperature=o),"controls-position":"right",min:0,max:2,step:.1,placeholder:"模型 Temperature 设置，默认1",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"TTS 音色",prop:"openaiVoice","label-width":"120px"},{default:l(()=>[e(j,{modelValue:t.openaiVoice,"onUpdate:modelValue":a[13]||(a[13]=o=>t.openaiVoice=o),placeholder:"选择或输入 openai 语音合成的默认发音人",clearable:"",filterable:"","allow-create":""},{default:l(()=>[(b(!0),C($,null,H(S.value,o=>(b(),M(T,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"超时时间",prop:"openaiTimeout","label-width":"120px"},{default:l(()=>[e(u,{modelValue:t.openaiTimeout,"onUpdate:modelValue":a[14]||(a[14]=o=>t.openaiTimeout=o),placeholder:"openai超时时间设置、默认300s 单位：秒（s）",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"全局头部预设",prop:"systemPreMessage","label-width":"120px"},{default:l(()=>[e(u,{modelValue:t.systemPreMessage,"onUpdate:modelValue":a[15]||(a[15]=o=>t.systemPreMessage=o),type:"textarea",rows:8,placeholder:"请填写模型全局头部预设信息！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof q=="function"&&q(te);export{te as default};

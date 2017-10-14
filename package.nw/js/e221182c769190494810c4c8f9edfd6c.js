'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('path'),b=require('fs'),c=require('lodash'),{REHYDRATE:d}=require('redux-persist/constants'),e=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),f=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),g=require('./72653d4b93cdd7443296229431a7aa9a.js'),h=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),i=require('./92320c1386e6db6a6f2556736a9bc280.js'),j=require('./d28a711224425b00101635efe1034c99.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),{default_weapp_header:l}=require('./5498e660c05c574f739a28bd5d202cfa.js'),m=(a)=>{a.attr===void 0&&(a.attr={}),a.condiction===void 0&&(a.condiction={weapp:{current:-1,list:[]},search:{current:-1,list:[]},conversation:{current:-1,list:[]}}),a.compileType===void 0&&(a.compileType='weapp'),a.setting===void 0&&(a.setting={urlCheck:!0,es6:!0,postcss:!0,minified:!0})},n=()=>{let a,b=f.lastSelect;return f.projectList[b]?(a=f.projectList[b],a&&a.qcloud&&delete a.qcloud,m(a),a.storage={},a.libVersion=j.setVersion(a.libVersion)):a=null,{current:a,list:f.projectList}};module.exports=function(f=n(),h={}){switch(h.type){case e.PROJECT_SET_PROJECT_CONFIG:return _extends({},f,{current:_extends({},f.current,h.data)});case e.PROJECT_CREATE_PROJECT_SUCCESS:return _extends({},f,{list:_extends({},f.list,{[h.project.projectid]:h.project})});case e.PROJECT_UPDATE_LIST:return _extends({},f,{list:h.list});case e.PROJECT_UPDATE_ATTR:{let a=_extends({},f.current),b=h.data,c=b.appid;return a.attr=_extends({},a.attr,b),b.userbanded&&(a.appShowName=b.appName,a.appShowImageUrl=b.appImageUrl||l,c==a.appid?(a.attr.appName=b.appName,a.attr.appImageUrl=b.appImageUrl):a.attr.extInfo=_extends({},a.attr.extInfo,{appName:b.appName,appImageUrl:b.appImageUrl})),_extends({},f,{current:a})}case e.PROJECT_OPEN_PROJECT:{let a=f.list[h.projectid];if(!a)return g.warn(`project.reducer.js open a project with unknown projectid: ${h.projectid}`),f;return a.qcloud&&delete a.qcloud,m(a),a.libVersion=j.setVersion(a.libVersion),_extends({},f,{current:a})}case e.PROJECT_SET_COMPILE_CONDICTION:{let a=f.current.compileType,b=f.current.condiction[a]||{},c=[].concat(b.list||[]),d=-1==h.data.id?c.length:h.data.id;return c[d]=_extends({},h.data),_extends({},f,{current:_extends({},f.current,{condiction:_extends({},f.current.condiction,{[a]:{current:d,list:c}})})})}case e.PROJECT_SELECT_COMPILE_CONDICTION:{let a=f.current.compileType,b=f.current.condiction[a]||{};return _extends({},f,{current:_extends({},f.current,{condiction:_extends({},f.current.condiction,{[a]:_extends({},b,{current:h.current})})})})}case e.PROJECT_REMOVE_COMPILE_CONDICTION:{let a=h.data.id,b=f.current.compileType,c=f.current.condiction[b]||{},d=[].concat(c.list||[]);return d.splice(a,1),_extends({},f,{current:_extends({},f.current,{condiction:_extends({},f.current.condiction,{[b]:{current:-1,list:d}})})})}case e.PROJECT_SET_SETTING:return _extends({},f,{current:_extends({},f.current,{setting:_extends({},f.current.setting,h.data)})});case e.PROJECT_SET_LIBVERSION:return _extends({},f,{current:_extends({},f.current,{libVersion:h.data})});case e.PROJECT_SET_STORAGE:{let c=h.data.openid,d=h.data.cache,e=`${f.current.hash}_${c}`;try{let c=a.join(i.WeappStorage,`${e}.json`);b.writeFileSync(c,JSON.stringify(d),'utf8')}catch(a){return f}return _extends({},f,{current:_extends({},f.current,{storage:{openid:c,cache:d}})})}case e.PROJECT_SET_COMPILE_TYPE:return _extends({},f,{current:_extends({},f.current,{compileType:h.data})});case e.PROJECT_SET_QCLOUD:{const a=f.current.qcloud||{};return _extends({},f,{current:_extends({},f.current,{qcloud:_extends({},a,h.data)})})}case e.PROJECT_SET_PKG_SIZE:{let a=f.current.pkgSize||{};return a=_extends({},a,h.data),_extends({},f,{current:_extends({},f.current,{pkgSize:a})})}case e.PROJECT_CLOSE_PROJECT:return _extends({},f,{current:null});case e.PROJECT_REMOVE_PROJECT:{const a={};return f.current&&f.current.id===h.id&&(a.current=null),a.list=_extends({},f.list),delete a.list[h.id],_extends({},f,a)}case e.PROJECT_SET_EXT_INFO:return _extends({},f,{current:_extends({},f.current,{attr:_extends({},f.current.attr,{extInfo:_extends({},h.data)})})});case e.PROJECT_SET_UPLOAD_INFO:return _extends({},f,{current:_extends({},f.current,{uploadInfo:_extends({},f.current.uploadInfo,h.data)})});case d:return c.merge(c.cloneDeep(f),h.payload.project);default:return f;}}}(require('lazyload'),require);
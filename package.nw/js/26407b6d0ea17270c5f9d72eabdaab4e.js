'use strict';!function(require,directRequire){const a=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),b=require('./6e1614a32b5d10964071477dd7310d21.js'),c=require('./f7ca1affcf2f20dc24139b0e03c203f6.js'),d=require('./503c215d003cb9646f16deee95253baf.js'),e=require('./2d8c17f8789be1869edbd369314f5eaa.js'),f=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');const g=()=>{},h=async(a,e={})=>{const{pluginId:g,version:h}=e,i=`${g}_${h}`;await f.init(a);const j=f.CACHE_KEYS.JS_PAGEFRAME_PLUGIN;let k=f.get(j);if(k&&k.code&&k.key==i)return k.code||'';const l=[],m=await b(a,{pluginId:g,version:h,cut:!1}),n=await c(a,{pluginId:g,version:h,app:!0}),o=await d(a,{pluginId:g,version:h,wxss:!0,prefix:m.name});return l.push(`;(function(){`),l.push(`${m.code}`),l.push(`eval('${n}')`),l.push(`eval('${o}')`),l.push(`})()`),k={code:l.join('\n'),key:i},f.set(j,k),k.code};module.exports=async(a,b={})=>{const{pluginId:c,version:d}=b,f=`${c}_${d}`;if('dev'==d)return c==a.appid?await h(a,b):'';let g=await e.getCode(c,d);return g=g['/pageframe.js']&&g['/pageframe.js'].toString()||'',g}}(require('lazyload'),require);
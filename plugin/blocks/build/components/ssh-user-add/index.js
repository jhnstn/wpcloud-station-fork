(()=>{var e,r={929:(e,r,t)=>{"use strict";const o=window.wp.blocks,n=window.React;var a=t(942),s=t.n(a);const l=window.wp.i18n,u=window.wp.blockEditor,i=JSON.parse('{"UU":"wpcloud/ssh-user-add"}');(0,o.registerBlockType)(i.UU,{edit:function(){const e=(0,u.useBlockProps)(),r=[["wpcloud/form",{ajax:!0,wpcloudAction:"site_ssh_user_add"},[["wpcloud/form-input",{type:"text",label:(0,l.__)("User"),name:"user"}],["wpcloud/form-input",{type:"password",label:(0,l.__)("Password"),name:"pass"}],["wpcloud/form-input",{type:"textarea",name:"pkey",label:(0,l.__)("Public Key")}],["wpcloud/button",{text:(0,l.__)("Add")}]]]],t=(0,u.useInnerBlocksProps)(e,{template:r});return(0,n.createElement)("div",{...t,className:s()("wpcloud-form-site-ssh-user--add",t?.className)})},save:function(){const e=u.useBlockProps.save();return(0,n.createElement)("div",{...e,className:s()("wpcloud-ssh-form",e?.className)},(0,n.createElement)(u.InnerBlocks.Content,null))}})},942:(e,r)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=s(e,a(t)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)o.call(e,t)&&e[t]&&(r=s(r,t));return r}function s(e,r){return r?e?e+" "+r:e+r:e}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,t,n,a)=>{if(!t){var s=1/0;for(c=0;c<e.length;c++){for(var[t,n,a]=e[c],l=!0,u=0;u<t.length;u++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](t[u])))?t.splice(u--,1):(l=!1,a<s&&(s=a));if(l){e.splice(c--,1);var i=n();void 0!==i&&(r=i)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,n,a]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={627:0,955:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[s,l,u]=t,i=0;if(s.some((r=>0!==e[r]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(u)var c=u(o)}for(r&&r(t);i<s.length;i++)a=s[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},t=globalThis.webpackChunkwp_cloud_dashboard_blocks=globalThis.webpackChunkwp_cloud_dashboard_blocks||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[955],(()=>o(929)));n=o.O(n)})();
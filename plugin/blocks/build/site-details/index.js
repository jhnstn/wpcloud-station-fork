(()=>{"use strict";var e,l={358:()=>{const e=window.wp.blocks,l=window.React,i=window.wp.blockEditor,n=[["core/columns",{verticalAlignment:"center",isStackedOnMobile:!0,width:"100%"},[["core/column",{verticalAlignment:"top"},[]],["core/column",{verticalAlignment:"top"},[["wpcloud/site-detail",{label:"Domain",name:"domain_name",inline:!0}],["wpcloud/site-detail",{label:"PHP Version",name:"php_version",inline:!0}],["wpcloud/site-detail",{label:"Data Center",name:"geo_affinity",inline:!0}],["wpcloud/site-detail",{label:"WP Version",name:"wp_version",inline:!0}],["wpcloud/site-detail",{label:"Admin Email",name:"wp_admin_email",inline:!0}],["wpcloud/site-detail",{label:"Admin User",name:"wp_admin_user",inline:!0}],["wpcloud/site-detail",{label:"IP Addresses",name:"ip_addresses",inline:!0}],["wpcloud/site-detail",{label:"Static 404",name:"static_file_404",inline:!0}],["wpcloud/site-detail",{label:"PHPMyAdmin Url ",name:"phpmyadmin_url",inline:!0}],["wpcloud/site-detail",{label:"SSL Info",name:"ssl_info",inline:!0}]]],["core/column",{verticalAlignment:"top"},[["wpcloud/site-detail",{label:"DB Charset",name:"db_charset",inline:!0}],["wpcloud/site-detail",{label:"DB Collate",name:"db_collate",inline:!0}],["wpcloud/site-detail",{label:"DB Password",name:"db_password",inline:!0}],["wpcloud/site-detail",{label:"DB File Size",name:"db_file_size",inline:!0}],["wpcloud/site-detail",{label:"SMTP Password",name:"smtp_pass",inline:!0}],["wpcloud/site-detail",{label:"Server Pool ID",name:"server_pool_id",inline:!0}],["wpcloud/site-detail",{label:"Atomic Client ID",name:"atomic_client_id",inline:!0}],["wpcloud/site-detail",{label:"Chroot Path",name:"chroot_path",inline:!0}],["wpcloud/site-detail",{label:"Chroot SSH Path",name:"chroot_ssh_path",inline:!0}],["wpcloud/site-detail",{label:"Cache Prefix",name:"cache_prefix",inline:!0}],["wpcloud/site-detail",{label:"Site API name",name:"site_api_key",inline:!0}]]],["core/column",{verticalAlignment:"top"},[]]]]],a=JSON.parse('{"UU":"wpcloud/site-details"}');(0,e.registerBlockType)(a.UU,{edit:function(){const e=(0,i.useBlockProps)(),a=(0,i.useInnerBlocksProps)(e,{template:n});return(0,l.createElement)("div",{...a,className:"wpcloud-all-site-details"})},save:function(){const e=i.useBlockProps.save();return(0,l.createElement)("div",{...e,className:"wpcloud-block-site-detail-card"},(0,l.createElement)(i.InnerBlocks.Content,null))}})}},i={};function n(e){var a=i[e];if(void 0!==a)return a.exports;var t=i[e]={exports:{}};return l[e](t,t.exports,n),t.exports}n.m=l,e=[],n.O=(l,i,a,t)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,a,t]=e[c],s=!0,r=0;r<i.length;r++)(!1&t||o>=t)&&Object.keys(n.O).every((e=>n.O[e](i[r])))?i.splice(r--,1):(s=!1,t<o&&(o=t));if(s){e.splice(c--,1);var d=a();void 0!==d&&(l=d)}}return l}t=t||0;for(var c=e.length;c>0&&e[c-1][2]>t;c--)e[c]=e[c-1];e[c]=[i,a,t]},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={842:0,622:0};n.O.j=l=>0===e[l];var l=(l,i)=>{var a,t,[o,s,r]=i,d=0;if(o.some((l=>0!==e[l]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var c=r(n)}for(l&&l(i);d<o.length;d++)t=o[d],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(c)},i=globalThis.webpackChunkwp_cloud_dashboard_blocks=globalThis.webpackChunkwp_cloud_dashboard_blocks||[];i.forEach(l.bind(null,0)),i.push=l.bind(null,i.push.bind(i))})();var a=n.O(void 0,[622],(()=>n(358)));a=n.O(a)})();
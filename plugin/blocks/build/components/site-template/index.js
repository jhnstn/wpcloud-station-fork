(()=>{var e={942:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=c(e,s(o)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=c(t,o));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"wpcloud/site-template"}'),r=window.React;o(942);const n=window.wp.element,s=window.wp.data,c=window.wp.i18n,l=window.wp.blockEditor,i=window.wp.components,a=window.wp.coreData,p=[["core/post-title"],["core/post-date"],["core/post-excerpt"]];function u(){const e=(0,l.useInnerBlocksProps)({className:"wpcloud-site"},{template:p,__unstableDisableLayoutClassNames:!0});return(0,r.createElement)("li",{...e})}const d=(0,n.memo)((function({blocks:e,blockContextId:t,isHidden:o,setActiveBlockContextId:n}){const s=(0,l.__experimentalUseBlockPreview)({blocks:e,props:{className:"wpcloud-site"}}),c={display:o?"none":void 0};return(0,r.createElement)("li",{...s,tabIndex:0,role:"button",onClick:()=>{n(t)},style:c})}));(0,e.registerBlockType)(t.UU,{edit:function({clientId:e,context:{query:{perPage:t,offset:o=0,postType:p,order:y,orderBy:w,author:f,search:g,exclude:m,sticky:v,inherit:k,taxQuery:x,parents:b,pages:h,...I}={},templateSlug:E,previewPostType:_}}){const[B,S]=(0,n.useState)(),{posts:C,blocks:T}=(0,s.useSelect)((r=>{const{getEntityRecords:n,getTaxonomies:s}=r(a.store),{getBlocks:c}=r(l.store),i=k&&E?.startsWith("category-")&&n("taxonomy","category",{context:"view",per_page:1,_fields:["id"],slug:E.replace("category-","")}),u={offset:o||0,order:y,orderby:w};if(x&&!k){const e=s({type:p,per_page:-1,context:"view"}),t=Object.entries(x).reduce(((t,[o,r])=>{const n=e?.find((({slug:e})=>e===o));return n?.rest_base&&(t[n?.rest_base]=r),t}),{});Object.keys(t).length&&Object.assign(u,t)}return t&&(u.per_page=t),f&&(u.author=f),g&&(u.search=g),m?.length&&(u.exclude=m),b?.length&&(u.parent=b),v&&(u.sticky="only"===v),k&&(E?.startsWith("archive-")?(u.postType=E.replace("archive-",""),p=u.postType):i&&(u.categories=i[0]?.id)),{posts:n("postType",_||p,{...u,...I}),blocks:c(e)}}),[t,o,y,w,e,f,g,p,m,v,k,E,x,b,I,_]),P=(0,n.useMemo)((()=>C?.map((e=>({postType:e.type,postId:e.id})))),[C]),O=(0,l.useBlockProps)();return C?C.length?(0,r.createElement)(r.Fragment,null,(0,r.createElement)("ul",{...O},P&&P.map((e=>(0,r.createElement)(l.BlockContextProvider,{key:e.postId,value:e},e.postId===(B||P[0]?.postId)?(0,r.createElement)(u,null):null,(0,r.createElement)(d,{blocks:T,blockContextId:e.postId,setActiveBlockContextId:S,isHidden:e.postId===(B||P[0]?.postId)})))))):(0,r.createElement)("p",{...O}," ",(0,c.__)("No results found.")):(0,r.createElement)("p",{...O},(0,r.createElement)(i.Spinner,null))},save:function(){return(0,r.createElement)(l.InnerBlocks.Content,null)}})})()})();
(()=>{var a;(a=window.wpcloud).hooks.addAction("wpcloud_form_response_site_alias_add","site_alias_add",(function(o){if(!o.success)return void alert(o.message);const s=document.querySelector(".wpcloud-block-site-alias-form-add input[name=site_alias]");s&&(s.value=""),a.hooks.doAction("wpcloud_alias_added",o.site_alias)}))})();
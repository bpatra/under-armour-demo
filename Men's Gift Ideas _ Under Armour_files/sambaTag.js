(function(){var a=window.SambaTV=window.SambaTV||[],b,c,d,e,f;a.attrs||(a.attrs={}),b=function(a){var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b]));return c.join("&")},Array.prototype.indexOf||(Array.prototype.indexOf=function(b,c){for(var a=c||0,d=this.length;a<d;a++)if(this[a]===b)return a;return-1}),c=function(d,e,f){var b,c;try{window.XDomainRequest&&window.navigator.appVersion.indexOf("MSIE 10.0")==-1?(b=new XDomainRequest,b.open("GET",d),b.onprogress=function(){},b.ontimeout=function(){},b.onerror=function(){},b.onload=function(){e({target:b})},a.xhr_pending=!0,setTimeout(function(){b.send()},0)):(c=new XMLHttpRequest,c.open("GET",d),c.addEventListener(f,e),a.xhr_pending=!0,c.send())}catch(a){}},d="https://pixel.mtrcs.samba.tv/v2/tag/digitas/underarmour-homepage",e=function(i){var e,g,h;try{typeof utag_data!='undefined'&&(a.attrs.sa_puid=utag_data.shopperid,a.attrs.cust_stat=utag_data.ret_customer_type),e={},g={sa_referrer:window.document.referrer,sa_fullurl:window.location.toString(),c:''+(new Date).getTime()};for(each in a.attrs)e[each]=a.attrs[each];for(each in g)e[each]=g[each];a.attrs_paramstr=b(e),h=d+'/load'+"?"+a.attrs_paramstr,a.evt_targets={impression:[],purchase:[],click:[],register:[],login:[]},c(h,f,'load')}catch(a){}},f=function(b){try{a.xhr_pending=!1,a.evt_targets=JSON.parse(b.target.responseText),a.push_targets(a.evt_targets.impression.slice()),a.consume_target_q()}catch(a){}},window.setTimeout(e,0),a.target_q=[],a.push_target=function(b){a.xhr_pending?null:a.consume_target_q(),a.target_q.push(b)},a.push_targets=function(c,d){d=d||{},a.xhr_pending?null:window.setTimeout(a.consume_target_q,0);for(var b=0;b<c.length;b++)c[b].evt_atts=d,a.target_q.push(c[b])},a.consume_target_q=function(){a.target_q.length&&a.consume_target_one()},a.consume_target_one=function(){var d,e,f,g;try{d=a.target_q.splice(0,1)[0],d.evt_atts&&d.passthru?e=a.attrs_paramstr+"&"+b(d.evt_atts):d.passthru?e=a.attrs_paramstr:d.evt_atts?e=b(d.evt_attstr):e='',d.url.indexOf("?")===-1?f=d.url+"?"+e:f=d.url+"&"+e,d.type==='xhr'?c(f,a.target_xhr_cb,'loadend'):d.type==='image'&&(g=new Image(0,0),a.xhr_pending=!0,g.onload=a.target_xhr_cb,g.onerror=a.target_xhr_cb,g.src=f)}catch(a){}},a.target_xhr_cb=function(b){a.xhr_pending=!1,a.consume_target_q()},a.Impression=function(e){var c={},d={sa_referrer:window.document.referrer,sa_fullurl:window.location.toString(),c:''+(new Date).getTime()};for(each in a.attrs)c[each]=a.attrs[each];for(each in d)c[each]=d[each];a.attrs_paramstr=b(c),a.push_targets(a.evt_targets.impression.slice(),e)},a.Purchase=function(b){a.push_targets(a.evt_targets.purchase.slice(),b)},a.Register=function(a){},a.Click=function(b){a.push_targets(a.evt_targets.click.slice(),b)},a.Login=function(b){a.push_targets(a.evt_targets.login.slice(),b)},a.Register=function(b){a.push_targets(a.evt_targets.register.slice(),b)},a.track=function(){}})()
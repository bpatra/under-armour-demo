//tealium universal tag - utag.103 ut4.0.202110282009, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}if(b==""){b=escape(a);}return b}
u.ev={"view":1};u.scriptrequested=false;u.rp=function(a,b){if(typeof a!=="undefined"&&a.indexOf("@@")>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return u.encode(b[d]);}else{return"";}});}
return a;};u.map={};u.extend=[function(a,b){try{if(1){(function PayPalStoreCash(pageData,uaGlobalTools,a,m){if(pageData.page_name==="home"||pageData.page_type==="product-listing"||pageData.page_type==="search"||pageData.page_type==="product-detail"||pageData.page_type==="cart"||pageData.page_type==="order-receipt"){a[m]=a[m]||[];a[m].push({t:new Date().getTime(),event:"snippetRun"});var d=m!=="paypalDDL"?"&m="+m:"";var s=(pageData.site_country_code.toLowerCase()==="us"?"underarmour.com":"underarmour.ca");uaGlobalTools.loadScript("https://www.paypal.com/tagmanager/pptm.js?t=xo&id="+s+d,true);}
if(pageData.page_type==="order-receipt"){var paypal_payment_method;switch(pageData.order_payment_method){case"visa":paypal_payment_method="card_visa";break;case"mc":paypal_payment_method="card_mastercard";break;case"amex":paypal_payment_method="card_amex";break;case"disc":paypal_payment_method="card_discover";break;case"paypal":paypal_payment_method="paypal";break;}
window.paypalDDL=window.paypalDDL||[];window.paypalDDL.push({event:"txnSuccess",txn_id:pageData.order_id,srce:paypal_payment_method,tpv:Math.round(parseFloat(pageData.order_total)*100),curr:pageData.site_currency,prcd:pageData.order_promo_codes?"PromoUsed":"NoPromo"});}})(b,utag.uaGlobalTools,window,"paypalDDL");}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&"||"&","kvp_delim":"="||"=","qs_delim":"?"||"?","tag_type":"img","base_url":"","secure_base_url":"","static_params":"","cachebust":"disabled","cachevar":""||"_rnd","requestscriptonce":"disabled","attribute":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:103:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("attribute.")===0){u.data.attribute[e[f].split(".")[1]]=b[d];}else if(!u.data.hasOwnProperty(e[f])){c.push(e[f]+"##kvp_delim##"+u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
if(!u.data.base_url){if(!u.data.secure_base_url){utag.DB("Error: No Base URL or Secure HTTPS Override Provided.");return;}else{u.data.base_url=u.data.secure_base_url;utag.DB("No Base URL provided, using Secure HTTPS Override.");}}
u.data.secure_base_url=u.data.secure_base_url||u.data.base_url;u.data.url=(location.protocol==="https:"?u.data.secure_base_url:u.data.base_url);if(u.data.url.indexOf("http")!==0&&u.data.url.indexOf("/")!==0){u.data.url=location.protocol+"//"+u.data.url;}
if(u.data.static_params){c.push(u.data.static_params);}
var cb_check=new RegExp("(\\"+u.data.qs_delim+"|"+u.data.qsp_delim+")"+u.data.cachevar+"=");if(u.data.cachebust==="enabled"&&!cb_check.test(u.data.url)){c.push([u.data.cachevar,Math.random()].join(u.data.kvp_delim));}
if(c.length>0){if(u.data.url.indexOf(u.data.qs_delim)<0){u.data.url+=u.data.qs_delim;}else if(u.data.url.indexOf(u.data.qs_delim)!==(u.data.url.length-1)){u.data.url+=u.data.qsp_delim;}}
u.data.url=u.rp(u.data.url,b)+u.rp(c.join(u.data.qsp_delim),b);u.data.url=u.data.url.replace(/##kvp_delim##/g,u.data.kvp_delim);u.callback=u.callback||function(){};if(u.data.requestscriptonce==="enabled"&&u.data.tag_type==="script"){if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_103","cb":u.callback,"attrs":u.data.attribute});}else{u.callback();}}else{u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_103","cb":u.callback,"attrs":u.data.attribute});}
utag.DB("send:103:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("103","underarmour.main"));}catch(error){utag.DB(error);}

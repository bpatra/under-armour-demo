//tealium universal tag - utag.101 ut4.0.202109082007, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){(function Tiktok(pageData){(function tiktokPixelLoader(w,d,t){if(w[t])return;w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};})(window,document,'ttq');var ttID='C0MMHH4P76SVVJ0VAHFG';var ttq=window.ttq;switch((pageData.site_country_code||'').toLowerCase()){case'us':ttq.load(ttID);ttq.page();break;default:return;}
switch(pageData.tealium_event){case'product_detail':ttq.instance(ttID).track('ViewContent',{content_id:pageData.product_style[0],content_name:pageData.product_name[0],content_type:"product",content_category:pageData.product_silhouette[0],price:pageData.product_price[0],currency:pageData.site_currency});break;case'cart_item_add':ttq.instance(ttID).track('AddToCart',{content_id:pageData.product_style[0],content_name:pageData.product_name[0],content_type:"product",content_category:pageData.product_silhouette[0],price:pageData.product_price[0],quantity:pageData.product_quantity[0],currency:pageData.site_currency});break;case'confirmation':var cartContents=[];(pageData.product_id||[]).forEach(function pushCartContents(prodId,idx){cartContents.push({content_id:pageData.product_style[idx],content_name:pageData.product_name[idx],content_type:"product",content_category:pageData.product_silhouette[idx],price:pageData.product_price[idx],quantity:pageData.product_quantity[idx],currency:pageData.site_currency})});ttq.instance(ttID).track('CompletePayment',{contents:cartContents,currency:pageData.site_currency,value:pageData.order_total});break;}})(b);}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};}};utag.o[loader].loader.LOAD(id);})("101","underarmour.main");}catch(error){utag.DB(error);}
//tealium universal tag - utag.58 ut4.0.202109152030, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1,"link":1};u.initialized=false;u.event_lookup={"search_view":"search","category_view":"catview","item_view":"itemview","add_to_cart":"cartadd","custom":"custom"};u.streaming_update=function(tracked_item,type){type=type||u.data.item_type||"";if(u.data.streaming_updates!=="true"&&tracked_item.length!==0&&type!==""){return;}
var items=[],item={};type=type||u.data.item_type;if(typeof tracked_item==="string"){item.item_type=type;item.item=tracked_item;if(type==="banner"){item.image_url=u.data.image_url[0];item.banner_size=u.data.banner_size[0];}else{item.name=(type==="product"?u.data.product_name[0]:u.data.item_name[0]);item.url=u.data.item_url[0];}
_etmc.push(["updateItem",item]);}else{for(var i=0;i<tracked_item.length;i++){item.item_type=type;item.item=tracked_item[i];item.name=(type==="product"?u.data.product_name[i]:u.data.item_name[i]);item.url=u.data.item_url[i]||"";if(type==="banner"){item.image_url=u.data.image_url[i];item.banner_size=u.data.banner_size[i];}else{item.name=(type==="product"?u.data.product_name[i]:u.data.item_name[i]);item.url=u.data.item_url[i];}
items.push(item);}
_etmc.push(["updateItem",items]);return;}};u.map={"hashed_email":"customer_id,email,email","sf_language_country":"customer.language","search_term":"search_term","sf_track_cart:1":"add_to_cart","sf_clear_cart":"clear_cart","sf_mid":"acct","tealium_event:category-landing":"category_view","tealium_event:listing":"category_view","tealium_event:product_detail":"item_view","tealium_event:search_results":"search_view","tealium_event:opt_in":"set_user_info","tealium_event:login_success":"set_user_info","tealium_event:create_account":"set_user_info","sf_item":"product_id","sf_category":"product_category","product_quantity":"product_quantity","product_price":"product_unit_price","sf_unique_id":"product_unique_id"};u.extend=[function(a,b){try{if((typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase()=='cart_change'.toLowerCase()&&parseFloat(b['cart_item_count'])>=parseFloat(1))||(typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase()=='cart_item_add'.toLowerCase())||(typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase()=='cart_qty_increase'.toLowerCase())||(typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase()=='cart'.toLowerCase())){b['sf_track_cart']='1'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase().indexOf('confirmation'.toLowerCase())<0&&b['tealium_event'].toString().indexOf('cart_change')>-1&&b['cart_item_count'].toString().toLowerCase()=='0'.toLowerCase())){b['sf_clear_cart']='1'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['site_country_code']!='undefined'&&typeof b['product_style']!='undefined')){try{b['sf_item']=b.site_country_code.concat(b.product_style.join(","+b.site_country_code)).split(",")}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase()=='listing'.toLowerCase())||(typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase()=='category-landing'.toLowerCase())){try{b['sf_category']=[b.page_category]}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['site_country_code']!='undefined'&&typeof b['product_sku']!='undefined')){try{b['sf_unique_id']=b.site_country_code.concat(b.product_sku.join(","+b.site_country_code)).split(",")}catch(e){}}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"src":"","base_url":".collect.igodigital.com/collect.js","acct":"518000498","search_term":"","custom_event_name":"","custom_event_details":{},"streaming_updates":"false","order_id":"","order_shipping":"","customer_id":"","product_id":[],"product_name":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"product_unique_id":[],"order_discount":"","customer_details":{},"item":[],"item_type":"","item_name":[],"item_url":[],"image_url":[],"banner_size":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("customer.")===0){u.data.customer_details[e[f].substr(9)]=b[d];}else if(e[f].indexOf("custom_event.")===0){u.data.custom_event_details[e[f].substr(13)]=b[d];}else{u.data[e[f]]=b[d];}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){g=""+u.event_lookup[u.map[d]];if(g!==""){b._cevent=g;}}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.product_unique_id.length===0&&b._csku!==undefined){u.data.product_unique_id=b._csku.slice(0);}
u.loader_cb=function(){u.initialized=true;_etmc.push(["setOrgId",u.data.acct]);if(u.data.email){var user_info={};user_info.email=u.data.email;user_info.details=u.data.customer_details;_etmc.push(["setUserInfo",user_info]);}else{var user_info={};user_info.details=u.data.customer_details;_etmc.push(["setUserInfo",user_info]);}
if(u.data.order_id){b._cevent="purchase";var order_details={};var items=[];for(i=0;i<u.data.product_id.length;i++){var item={};item.item=u.data.product_id[i];item.quantity=u.data.product_quantity[i];item.price=u.data.product_unit_price[i];item.unique_id=u.data.product_unique_id[i];items.push(item);}
order_details.cart=items;order_details.order_number=u.data.order_id;if(u.data.order_discount){order_details.discount=u.data.order_discount;}
if(u.data.order_shipping){order_details.shipping=u.data.order_shipping;}
_etmc.push(["trackConversion",order_details]);u.streaming_update(u.data.product_id,"product");}else if(b._cevent==="search"){_etmc.push(["trackPageView",{"search":u.data.search_term}]);}else if(b._cevent==="catview"){_etmc.push(["trackPageView",{"category":u.data.product_category[0]}]);}else if(b._cevent==="itemview"){_etmc.push(["trackPageView",{"item":u.data.product_id[0]}]);u.streaming_update(u.data.product_id[0],"product");}else if(b._cevent==="cartadd"){var items=[];for(i=0;i<u.data.product_id.length;i++){var item={};item.item=u.data.product_id[i];item.quantity=u.data.product_quantity[i];item.price=u.data.product_unit_price[i];item.unique_id=u.data.product_unique_id[i];items.push(item);}
var cartObj=(items.length>0)?{"cart":items}:{"clear_cart":true};_etmc.push(["trackCart",cartObj]);u.streaming_update(u.data.product_id,"product");}else if(b._cevent==="custom"){var evt={};evt.name=u.data.custom_event_name;evt.details=u.data.custom_event_details;_etmc.push(["trackEvent",evt]);}else if(u.data.clear_cart=="1"){_etmc.push(["trackCart",{"clear_cart":true}]);}else{_etmc.push(["trackPageView"]);}};if(!u.initialized){u.data.src="//"+u.data.acct+u.data.base_url;u.loader({"type":"script","src":u.data.src,"cb":u.loader_cb,"loc":"script","id":"utag_58"});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);}("58","underarmour.main"));}catch(error){utag.DB(error);}

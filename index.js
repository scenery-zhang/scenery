(function(){var lastTime=0;var vendors=["ms","moz","webkit","o"];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id)}}}());$(function(){var shareconfig={title:"【QQ红包】2亿现金，除夕放大招！",des:"全民刷一刷，疯狂抢红包。用最新版QQ刷红包，2亿现金刷出来！点击拆开抢红包攻略>>",img:"http://cxhba.qq.com/myapp/qq_desk/eve/img/showshare.png",url:"index.html?_wv=1025&adtag=qzoneshare",wxurl:"index.html?_wv=1025&adtag=wechatshare"};function query(id){return document.querySelector(id)}var pageobj={pg0_hb:$(".pg0_hb"),pg2arr:query("#pg2arr"),pg2point:query("#pg2point"),pg2slgain:query("#pg2slgain")};$.tmpl=function(){var cache={},rNotAlpha=/\W/,rwhitespace=/[\r\t\n]/g,rquot=/((^|%>)[^\t]*)'/g;var rsquot=/'/g,rvalue=/\t=(.*?)%>/g,SPACE=" ",START="<%",END="%>",rInclude=/<#(\w+)#>/g;var TAB="\t",VALUE="',$1,'",PUSH_END="');",PUSH_START="p.push('",CR="\r",QUOT="\\'";function fquot($0){return $0.replace(rsquot,"\r")}function fInclude(all,id){return document.getElementById(id).innerHTML||""}function includeTmpl(str){if(!str){return""}return str.replace(rInclude,fInclude)}return function(str,data){var fn=!rNotAlpha.test(str)?cache[str]=cache[str]||$.tmpl(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+includeTmpl(str).replace(rwhitespace,SPACE).split(START).join(TAB).replace(rquot,fquot).replace(rvalue,VALUE).split(TAB).join(PUSH_END).split(END).join(PUSH_START).split(CR).join(QUOT)+"');}return p.join('');");return data?fn(data):fn}}();var pfx=["webkit","moz","MS","o",""];function prefixedEvent(element,type,callback){for(var i=0,len=pfx.length;i<len;i++){if(!pfx[i]){type=type.toLowerCase()}element.addEventListener(pfx[i]+type,callback,false)}}function removeEvent(element,type,callback){for(var i=0,len=pfx.length;i<len;i++){if(!pfx[i]){type=type.toLowerCase()}element.removeEventListener(pfx[i]+type,callback,false)}}var getSearch=function(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substring(1).match(reg);if(!!r){return unescape(r[2])}return null};var adtagData="_"+(getSearch("adtag")||"noneadtag");if(typeof(pgvMain)==="function"){pgvMain({virtualDomain:"mma.qq.com"});pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.loadingpv"+adtagData})}var changeViewport=function(){var h=document.documentElement.clientHeight,w=document.documentElement.clientWidth;if(h<1000){return}var baseArr=[19.5,27.5,35.5,43.5,51.5,57.5,24.5,32.5,40.5,48.5,57.5,64.5,19.5,27.5,35.5,43.5,51.5,59.5];for(var i=0;i<baseArr.length;i++){var base=baseArr[i];var changebase=(parseFloat((w*1206)/(h*750)*base*100000)/100000).toFixed(4);if(i+1<7){$("#page2 .scheduleItemCover.item"+(i+1)).css("bottom",changebase.toString()+"%")}else{if(i+1<13){$("#page2 .scheduleItemCoverq.item"+(i+1)).css("bottom",changebase.toString()+"%")}else{$("#page2 .scheduleItemCoverq.item"+(i+1)).css("bottom",changebase.toString()+"%")}}}};var ResourceLoader=function(arr){var self=this;var repImg=/\.mp4$|\.m4a$|\.mp3$|\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/i;var repCss=/\.css$/i;var repScript=/\.js$/i;self.loaded=0;self.total=0;var head=document.querySelector("head");for(var i=0;i<arr.length;i++){var url=arr[i];var elem;if(repImg.test(url)){elem=new Image();needAppend=true;elem.src=url}else{if(repCss.test(url)){elem=document.createElement("link");elem.setAttribute("href",url);elem.setAttribute("rel","stylesheet");head.appendChild(elem)}else{if(repScript.test(url)){elem=document.createElement("script");elem.src=url;head.appendChild(elem)}}}if(elem){self.total++;elem.addEventListener("load",function(){self.loaded++;self.onchange&&self.onchange(self.loaded/self.total)});elem.addEventListener("error",function(){self.loaded++;self.onchange&&self.onchange(self.loaded/self.total)})}}};function SwrapSlider(opts){this.opts={wrap:".swrapSlider",play:"play",endDisplay:false,isVertical:true,maxDist:127,useACC:true,resetVal:0,speed:400,triggerDist:50,preventMove:true,onstart:function(){},onmove:function(dist){},onend:function(frequency){},onmax:function(frequency){}};for(i in opts){this.opts[i]=opts[i]}this.init()}SwrapSlider.prototype={$:function(o){return document.querySelector(o)},init:function(){var self=this;this.targetNode=typeof this.opts.wrap=="string"?this.$(this.opts.wrap):this.opts.wrap;if(!this.targetNode){throw Error('"target" can not be empty!');return}this.touchInitPos=0;
this.startPos=0;this.totalDist=0,this.frequency=0;this.deltaX2=0;this.deltaX1=0;this._delayTime=150;this._bindEvt();if(/iPhone|iPod|iPad/.test(navigator.userAgent)){this._delayTime=50}},_bindEvt:function(){var self=this;var handlrElm=this.opts.fullScr?this.$("body"):this.targetNode;handlrElm.addEventListener("touchstart",function(e){self._touchstart(e)},false);handlrElm.addEventListener("touchmove",function(e){self._touchmove(e)},false);handlrElm.addEventListener("touchend",function(e){self._touchend(e)},false);handlrElm.addEventListener("touchcancel",function(e){self._touchend(e)},false);if(this.opts.preventMove){this.$("body").addEventListener("touchmove",function(e){e.preventDefault()},false)}},_touchstart:function(e){var self=this;if(e.touches.length!==1){return}this.lockSlide=false;this.touchMax=false;this._touchstartX=e.touches[0].pageX;this._touchstartY=e.touches[0].pageY;this.touchInitPos=this.opts.isVertical?e.touches[0].pageY:e.touches[0].pageX;this.deltaX1=this.touchInitPos;this.startPos=0;self.targetNode.style.cssText+="-webkit-transition-duration:0;";try{self.opts.onstart.call(self)}catch(e){console.info(e)}},_touchmove:function(e){var self=this;if(e.touches.length!==1||this.lockSlide){return}var gx=Math.abs(e.touches[0].pageX-this._touchstartX);var gy=Math.abs(e.touches[0].pageY-this._touchstartY);if(gx>gy&&this.opts.isVertical){this.lockSlide=true;return}else{if(gx<gy&&!this.opts.isVertical){this.lockSlide=true;return}}var currentX=this.opts.isVertical?e.touches[0].pageY:e.touches[0].pageX;this.deltaX2=currentX-this.deltaX1;if((this.startPos+currentX-this.touchInitPos)>=this.opts.maxDist){this.totalDist=this.opts.maxDist;this.touchMax=true}else{this.totalDist=this.startPos+currentX-this.touchInitPos;this.touchMax=false}if(this.totalDist>=0){self.targetNode.style.cssText+="-webkit-transition-duration:0ms;"+this._getTransform(this.totalDist+"px")}this.startPos=this.totalDist;this.touchInitPos=currentX;this.opts.onmove.call(this,this.totalDist)},_touchend:function(e){var self=this;if(this.deltaX2>this.opts.triggerDist){this.frequency++}else{this._reset();return false}if(!!this.opts.endDisplay){this._upAway()}else{this._reset()}if(this.touchMax){this.opts.onmax.call(this,this.frequency)}try{this.opts.onend.call(this,this.frequency,this.touchMax)}catch(e){console.info(e)}this.deltaX2=0},_getTransform:function(dist){var pos=this.opts.isVertical?"0,"+dist:dist+",0";return";-webkit-transform:"+(this.opts.useACC?"translate3d("+pos+",0)":"translate("+pos+")")},_reset:function(){this.targetNode.style.cssText+="-webkit-transition-duration:"+this.opts.speed+"ms;"+this._getTransform(this.opts.resetVal)},_upAway:function(){this.targetNode.style.cssText+="-webkit-transition-duration:"+this.opts.speed+"ms;"+this._getTransform("-100%")}};var andioDrop=document.getElementById("drop");var $cm_arr=$(".page1 .cm_arr");var $cm_point=$(".page1 .cm_point");var slidestart=new SwrapSlider({speed:200,maxDist:140,onstart:function(){$(this.targetNode).removeClass("hbtras")},onmove:function(dist){Page2.getAudioControl()&&andioDrop.play()},onend:function(frequency){var self=this;Page2.getAudioControl()&&document.getElementById("jump").play();Page2.getAudioControl()&&document.getElementById("bgm12").play();switch(frequency){case 1:setTimeout(function(){slidestart.opts.maxDist=280;$(".page1 .cm_tip").show();changeViewport()},100);if(!!pgvSendF){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sycli1"})}break;case 2:if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sj1pv"})}if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sycli2"})}setTimeout(function(){self.targetNode.style.cssText+="-webkit-transition-duration:400ms;-webkit-transform:translate3d(0,-100%,0)";$("#page1").addClass("play");$(".pg1_cover").hide();$(".pg1_bot_tips").hide();$("#page2").addClass("cur")},100);prefixedEvent(this.$("#door-left"),"AnimationEnd",function(){$("#page1").remove();$("#loading").remove();Page2.start();hbrain("snow");$("#firstSchedule").show();initLastPanel()});setTimeout(function(){$(".slagain").show()},3000);break}}});var css3loaded=false;var resourceloaded=false;var loadFrames;var startTime=0;function loadFrameStart(){startTime+=1;if(startTime<180){loadFrames=window.requestAnimationFrame(loadFrameStart)}else{css3loaded=true;window.cancelAnimationFrame(loadFrames);if(!!css3loaded&&!!resourceloaded){window.beforeloaded=true;document.getElementById("loadMusic").pause();Page2.getAudioControl()&&document.getElementById("bgm12").play();Page2.getAudioControl()&&document.getElementById("bgm12").dispatchEvent(_ios_audio_eventBg);pageobj.pg0_hb[0].style.cssText+="-webkit-transition-duration:600ms;-webkit-transform:translate3d(0,-1000px,0)";$(".pg0_load_wrap").hide();pageobj.pg0_hb.on("webkitTransitionEnd",function(){$("#loading").hide();$(".pg1_hb").show();$(".pg1_bot_tips").show();pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sypv"})})}}}loadFrameStart();function getUserInfo(){mqq.device.isMobileQQ(function(res){if(res){mqq.data.getUserInfo(function(result){if(result.nick.length<=4){$(".hb_name").html('<b style="color:#ffca65;">'+result.nick+"</b>专属的刷红包姿势:")
}$(".hb_face img").bind("error",function(){$(".hb_face img").attr("src","http://cxhba.qq.com/myapp/qq_desk/eve/img/face.png")});$(".hb_face img").attr("src","http://q.qlogo.cn/g?b=qq&nk="+$.cookie.uin()+"&s=100")})}})}function getShareNum(){if(localStorage.getItem("shareNum")&&localStorage.getItem("shareNum")!=""){var oldNum=parseInt(localStorage.getItem("shareNum"),10);var pvNum=parseInt(localStorage.getItem("pvNum"),10);if(pvNum<10){var shareNum=oldNum+parseInt((Math.random()*1250000+2250000),10);pvNum++}else{if(pvNum<20){var shareNum=oldNum+parseInt((Math.random()*600+2000),10);pvNum++}else{var shareNum=oldNum+parseInt((Math.random()*10+2),10);pvNum++}}}else{var shareNum=parseInt((Math.random()*7000000+12000000),10);var pvNum=1}localStorage.setItem("shareNum",shareNum);localStorage.setItem("pvNum",pvNum);var str1=shareNum.toString().substring(0,2);var str2=shareNum.toString().substring(2,6);var str3=shareNum.toString().substring(6);return str1+","+str2+","+str3}function initLastPanel(){getUserInfo();var num=parseInt((Math.random()*5+1),10);$(".show_hb_content img").attr("src","http://cxhbb.qq.com/myapp/qq_desk/eve/img/p"+num+".png");$("#sharenum").text(getShareNum());mqq.device.isMobileQQ(function(res){if(res){if(mqq.compare("6.1")<0){$(".chbtn").css("background-image","url(http://cxhbc.qq.com/myapp/qq_desk/eve/img/up_btn.png)");$(".sharedata").html("你目前版本较旧，<span>升级新版QQ抢红包</span>")}}});var isWechat=/MicroMessenger/gi.test(navigator.userAgent);$(".chbtn").on("tap",function(){if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.btncli"+adtagData})}mqq.device.isMobileQQ(function(res){if(res){if(mqq.compare("6.1")<0){if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.xzcli"+adtagData})}if(mqq.android){mqq.app.isAppInstalled("com.tencent.android.qqdownloader",function(isInstalled){if(isInstalled){if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.yybxz"})}location.href="tmast://appdetails?appid=6633&pname=com.tencent.mobileqq&oplist=1%3A2&via=ANDROIDQQ.H5.QQNEWUPDATE"}else{mqq.app.downloadApp({"appid":100686848,"myAppId":6633,"url":"http://dd.myapp.com/16891/C48C296E94C234FA28E704C790975CAD.apk?fsname=com.tencent.mobileqq_6.1.0_312.apk&asr=2d3d","packageName":"com.tencent.mobileqq","actionCode":2,"via":"hongbao.yuandan.androidqqdownloader","appName":"手机QQ","versionCode":312,},function(data){if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.urlxz"})}})}})}else{if(mqq.iOS){if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.lt61_open_appstore"})}location.href="http://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8"}}}else{mqq.ui.showShareMenu();if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.fxcli"+adtagData})}}}else{if(!!isWechat){$(".wxshare").show();$(".wxshareanimate, .wxshare").on("tap",function(){$(".wxshare").hide()});if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.wechat_fxcli"+adtagData})}}else{var proxy_frame=document.createElement("iframe");proxy_frame.style.display="none";proxy_frame.src="mqqapi://forward/url?src_type=web&style=default&=1&version=1&url_prefix="+btoa("index.html?_wv=1025&adtag=fromoutofqq");proxy_frame.onload=function(){};setTimeout(function(){document.body.appendChild(proxy_frame);setTimeout(function(){location.href="index.html?_wv=1025&adtag=stayoutofqq"},2000)},200);if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.browser_click_sharebtn"+adtagData})}}}})})}$(".audioControl").on("tap",function(){if(Page2.getAudioControl()){$(this).addClass("close");$("#bgm12")[0].pause()}else{$(this).removeClass("close");$("#bgm12")[0].play()}});var Page2=(function(){var ishide=false;function init(){$($.tmpl("page2Tmpl",{})).appendTo($("#page2"));$("#page2").show();initLhb()}function initLhb(){var ssl=new SwrapSlider({wrap:".lhb",speed:200,maxDist:350,onmax:function(frequency){if(window.lastMax){}},onmove:function(dist){Page2.getAudioControl()&&andioDrop.play();dist-=60},onend:function(frequency,isMax){Page2.getAudioControl()&&document.getElementById("jump").play();switch(frequency){case 1:if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sj2pv"})}if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sj1cli"})}setTimeout(function(){$("#container").addClass("up1");$("#secondSchedule").show();$("#container").addClass("qyup")},600);$("#map").css("opacity",0);$("#map2").css("opacity",1);$("#firstSchedule").css("opacity",0);$(".pg2_hb").removeClass("slidown").addClass("slidupOut");setTimeout(function(){$(".pg2_hb").removeClass("slidupOut").addClass("slidown2")},1000);break;case 2:if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sj3pv"})}if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sj2cli"})}setTimeout(function(){$("#container").addClass("up2");$("#thirdSchedule").show();
$("#container").removeClass("qyup").addClass("qyup")},600);$("#secondSchedule").css("opacity",0);$(".pg2_hb").hide();setTimeout(function(){$(".pg2_hb").show();$("#pg2slgain").hide()},1000);break;case 3:if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sjqjpv"})}if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sj3cli"})}$("#road").hide();$("#map").css("opacity",1);$("#map2").css("opacity",0);$("#thirdSchedule").css("opacity",0);$(".pg2_hb").hide();$("#page2 .darkCover").css("opacity",0.4);$("#marquee").show();setTimeout(function(){$("#container").addClass("marqueeLight");$(".pg2_hb").show();$("#pg2slgain").hide()},600);break;case 4:if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.xyspv"})}if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sjqjcli"})}$("#page2 .darkCover").css("opacity",0);$("#marquee").hide();$(".top_mode").hide();$(".cm_title").hide();$(".pg2_hb").hide();$(".slagain").css({"background-image":"url(http://cxhba.qq.com/myapp/qq_desk/eve/img/zishi.png)"});$(".partSchedule").remove();hbrain("hb");setTimeout(function(){$("#container").addClass("up3")},200);setTimeout(function(){$("#map").css("opacity",0);$("#map2").css("opacity",1);$(".pg2_hb").show();$("#pg2slgain").css("bottom","-220px");$("#pg2slgain").css("right","60px");$("#pg2slgain").show()},800);break;case 5:if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.endingpv"})}if(!!pgvSendClick){pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.xyscli"})}window.lastMax=true;$("#marquee").remove();$(".pg2_hb").hide();$("#show_hb").show();$("#container").addClass("play");window.setTimeout(function(){$("#container").removeClass("play").addClass("rotate_hb");$(".pg4_mv").show()},3900);window.setTimeout(function(){if(mqq.iOS){document.querySelector("#hbvideo").play()}document.querySelector("#hbvideo").addEventListener("ended",function(){this.currentTime=0;this.play()});$(".pre_cloud, .pg4_movie").on("tap",function(){document.querySelector("#hbvideo").play()});$("#map").css("opacity",0);$("#map2").css("opacity",0);$(".last_bg").css("opacity",1);$("canvas").remove();$(".btnwrap").show();$(".sharedata").show()},4200);window.setTimeout(function(){$(".flower").css("opacity",1);$(".flower").addClass("flowerup")},5000);break;default:break}}})}function start(){$("#container").addClass("initRoad");$(".scheduleItemCover,.scheduleItemCoverq").on("webkitAnimationEnd",function(e){setTimeout(function(){$(e.target).find("img").removeClass("jello").addClass("littleMove")},200)})}function page2LazyLoad(){var Gpath="img/";var Gpath2="img/";var Gpath3="img/";var Gpath4="img/";var pageLazyloader=new ResourceLoader([Gpath+"button.png",Gpath+"face.png",Gpath+"hby.png",Gpath2+"hongbao5.png",Gpath2+"p1.png",Gpath2+"p2.png",Gpath2+"p3.png",Gpath2+"p4.png",Gpath2+"p5.png",Gpath3+"road-line.png",Gpath3+"up_btn.png",Gpath+"zishi.png",Gpath+"showshare.png",Gpath2+"wxshare.png"]);pageLazyloader.onchange=function(per){}}function getAudioControl(){return !$(".audioControl").hasClass("close")}return{page2LazyLoad:page2LazyLoad,init:init,start:start,getAudioControl:getAudioControl}})();function hbrain(type){var COUNT=12;if(type=="snow"){COUNT=180}var $sel=$("#mainSchedule").get(0);var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");var width=$sel.clientWidth;var height=$sel.clientHeight;var i=0;var active=false;var hb_img=new Image();hb_img.src="http://cxhba.qq.com/myapp/qq_desk/eve/img/hby.png";console.log(active);function onResize(){width=$sel.clientWidth;height=$sel.clientHeight;canvas.width=width;canvas.height=height;ctx.fillStyle="#FFF";var wasActive=active;requestAnimFrame(update)}var Snowflake=function(){this.x=0;this.y=0;this.vy=0;this.vx=0;this.r=0;this.reset()};Snowflake.prototype.reset=function(){this.x=Math.random()*width;this.y=Math.random()*-height;if(type=="hb"){this.vy=3+Math.random()*3}else{this.vy=1+Math.random()*3}this.vx=this.x;this.r=1+Math.random()*2;this.o=0.2+Math.random()*0.5;this._r=Math.random()*10+26;this.w=parseInt(this._r,10);this.h=142*this.w/24};canvas.style.position="absolute";canvas.style.left=canvas.style.top="0";var snowflakes=[],snowflake;for(i=0;i<COUNT;i++){snowflake=new Snowflake();snowflakes.push(snowflake)}function update(){ctx.clearRect(0,0,width,height);for(i=0;i<COUNT;i++){snowflake=snowflakes[i];snowflake.y+=snowflake.vy;snowflake.x=snowflake.vx;ctx.globalAlpha=snowflake.o;ctx.beginPath();if(type=="snow"){ctx.arc(snowflake.x,snowflake.y,snowflake.r,0,Math.PI*2,false)}else{if(type=="hb"){ctx.drawImage(hb_img,snowflake.x,snowflake.y,snowflake.w,snowflake.h)}}ctx.closePath();ctx.fill();if(snowflake.y>height){snowflake.reset()}}requestAnimFrame(update)}window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)
}})();onResize();window.addEventListener("resize",onResize,false);$sel.appendChild(canvas);if(type=="hb"){window.setTimeout(function(){$("canvas").remove()},180000)}$("canvas").css("z-index",4)}function preloadSource(){if(/qqyy/.test(adtagData)&&/android/.test(navigator.userAgent.toLowerCase())){var proxy_frame2=document.createElement("iframe");proxy_frame2.style.display="none";proxy_frame2.src="mqqapi://forward/url?src_type=web&style=default&=1&version=1&url_prefix="+btoa("index.html?_wv=1025&adtag=fromoutofqq");proxy_frame2.onload=function(){};document.body.appendChild(proxy_frame2);$("#loadMusic").remove();$("#bgm12").remove();$("#loading").remove();$(".audioControl").remove();return false}var Gpath="img/";var Gpath2="img/";var Gpath3="img/";var Gpath4="img/";var pageLazyloader=new ResourceLoader([Gpath2+"door-border2.png",Gpath3+"door-left.jpg",Gpath4+"door-rigt.jpg",Gpath+"hb1.png",Gpath2+"tips.png",Gpath3+"tips2.png",Gpath4+"audioControl.png",Gpath2+"card1.png",Gpath+"card2.png",Gpath3+"mountain-after.png",Gpath4+"mountain-before.png",Gpath3+"fb.png",Gpath+"pt.png",Gpath2+"bg1.jpg",Gpath3+"bg2.jpg",Gpath4+"bg_last.png",Gpath3+"road.png",Gpath4+"title_03.png",Gpath+"lhb.png",Gpath2+"poster.jpg",Gpath3+"hb_ph.png",Gpath2+"flower.png",Gpath+"xts.png",Gpath2+"1.png",Gpath+"2.png",Gpath2+"3.png",Gpath3+"4.png",Gpath4+"5.png",Gpath3+"6.png",Gpath2+"q1.png",Gpath3+"q2.png",Gpath4+"q3.png",Gpath2+"q4.png",Gpath+"q5.png",Gpath4+"q6.png",Gpath3+"q7.png",Gpath4+"q8.png",Gpath+"q9.png",Gpath3+"q10.png",Gpath3+"q11.png",Gpath3+"q12.png"]);document.getElementById("loadMusic").load();document.getElementById("bgm12").load();document.getElementById("drop").load();document.getElementById("jump").load();Page2.page2LazyLoad();Page2.init();document.getElementById("loadMusic").addEventListener("audio",function(){Page2.getAudioControl()&&this.play()},false);window._ios_audio_event=document.createEvent("HTMLEvents");window._ios_audio_event.initEvent("audio",true,true);document.getElementById("loadMusic").dispatchEvent(_ios_audio_event);var bgVoice=document.getElementById("bgm12");bgVoice.addEventListener("audioBg",function(){Page2.getAudioControl()&&bgVoice.play()},false);bgVoice.addEventListener("ended",function(){this.currentTime=0;Page2.getAudioControl()&&this.play()},false);bgVoice.addEventListener("canplaythrough",function(){Page2.getAudioControl()&&bgVoice.play()},false);window._ios_audio_eventBg=document.createEvent("HTMLEvents");window._ios_audio_eventBg.initEvent("audioBg",true,true);document.getElementById("bgm12").dispatchEvent(_ios_audio_eventBg);var jump=document.getElementById("jump");jump.addEventListener("canplaythrough",function(){},false);jump.addEventListener("ended",function(){this.currentTime=0;Page2.getAudioControl()&&document.getElementById("bgm12").play();Page2.getAudioControl()&&document.getElementById("bgm12").dispatchEvent(_ios_audio_eventBg)});var drop=document.getElementById("drop");drop.addEventListener("canplaythrough",function(){},false);drop.addEventListener("ended",function(){this.currentTime=0;Page2.getAudioControl()&&document.getElementById("bgm12").play();Page2.getAudioControl()&&document.getElementById("bgm12").dispatchEvent(_ios_audio_eventBg)});window.beforeloaded=false;window.onunload=function(){document.getElementById("bgm12").pause()};$("body").on("touchstart",function(){Page2.getAudioControl()&&document.getElementById("bgm12").play();Page2.getAudioControl()&&document.getElementById("bgm12").dispatchEvent(_ios_audio_eventBg);if(!window.beforeloaded){document.getElementById("loadMusic").play()}});$(".pg4_movie").on("webkitTransitionEnd",function(e){setTimeout(function(){$(".mvtranslate").addClass("mb")},200)});pageLazyloader.onchange=function(per){setTimeout(function(){if(per==1){resourceloaded=true;if(!!css3loaded&&!!resourceloaded){window.beforeloaded=true;document.getElementById("loadMusic").pause();Page2.getAudioControl()&&document.getElementById("bgm12").play();Page2.getAudioControl()&&document.getElementById("bgm12").dispatchEvent(_ios_audio_eventBg);pageobj.pg0_hb[0].style.cssText+="-webkit-transition-duration:600ms;-webkit-transform:translate3d(0,-1000px,0)";$(".pg0_load_wrap").hide();pageobj.pg0_hb.on("webkitTransitionEnd",function(){$("#loading").hide();$(".pg1_hb").show();$(".pg1_bot_tips").show();pgvSendClick({virtualDomain:"mma.qq.com",hottag:"cxyr.sypv"})})}}else{$(".load_bar").css({"width":per*100+"%"})}},1000)}}preloadSource();if(mqq.device.isMobileQQ()){setTimeout(function(){mqq.data.setShareInfo({share_url:shareconfig.url,title:shareconfig.title,desc:shareconfig.des,image_url:shareconfig.img},function(){})},200)}else{var onBridgeReady=function(){WeixinJSBridge.on("menu:share:timeline",function(e){var data={img_url:shareconfig.img,img_width:"120",img_height:"120",link:shareconfig.wxurl,desc:shareconfig.des,title:shareconfig.title};
WeixinJSBridge.invoke("shareTimeline",data,function(res){WeixinJSBridge.log(res.err_msg)})});WeixinJSBridge.on("menu:share:weibo",function(){WeixinJSBridge.invoke("shareWeibo",{"content":shareconfig.des,"url":shareconfig.wxurl},function(res){WeixinJSBridge.log(res.err_msg)})});WeixinJSBridge.on("menu:share:appmessage",function(argv){WeixinJSBridge.invoke("sendAppMessage",{img_url:shareconfig.img,img_width:"120",img_height:"120",link:shareconfig.wxurl,desc:shareconfig.des,title:shareconfig.title},function(res){WeixinJSBridge.log(res.err_msg)})})};if(typeof top.window.WeixinJSBridge=="undefined"||!top.window.WeixinJSBridge.invoke){if(document.addEventListener){document.addEventListener("WeixinJSBridgeReady",onBridgeReady,false)}else{if(document.attachEvent){document.attachEvent("WeixinJSBridgeReady",onBridgeReady);document.attachEvent("onWeixinJSBridgeReady",onBridgeReady)}}}else{onBridgeReady()}}});
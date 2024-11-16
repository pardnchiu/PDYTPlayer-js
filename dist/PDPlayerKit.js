!function(){const t=document,e=String,i=Array,s=Map,l=(JSON,Math),n=/\.([\w_-]+)?/gi,o=/\#([\w_-]+)?/i,a=/^\w+(?=[\#\.]*)/i,u="id",h="volume",r="match",m="trim",d="body",p="test",y="map",c="ceil",P="youtube",b="vimeo",v="audio",V="video",g="replace",f="length",T="temp",w="createElement",k="getElementById",M="createDocumentFragment",x="createTextNode",I="classList",R="add",F="string",_="number",A="floor",C="isArray",E="object",Y="hasOwnProperty",D="value",B="innerText",S="innerHTML",$="textContent",L="contentEditable",z="indexOf",O="appendChild",j="color",q="backgroundColor",N="width",W="height",X="display",Z="float",J="setAttribute",G="img",H="source",K="head",Q="PDPlayer",U="link",tt="script",et="style",it="preconnect",st="preload",lt="anonymous",nt="stylesheet",ot="rel",at="href",ut="async",ht="as",rt="src",mt="crossOrigin",dt="onmousemove",pt="onmouseleave",yt="https://cdn.jsdelivr.net",ct=yt+"/npm/pdplayerkit@latest/dist/PDPlayerKit.css",Pt="https://fonts.googleapis.com",bt=Pt+"/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,1,0",vt="https://www.youtube.com",Vt=vt+"/iframe_api",gt="https://player.vimeo.com",ft=gt+"/api/player.js",Tt="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",wt=/iphone|ipad|ipod|android/i[p](navigator.userAgent),kt=/iphone|ipad|ipod/i[p](navigator.userAgent),Mt={autoplay:0,controls:0,showinfo:0,modestbranding:1,start:0,loop:0,fs:0,[ot]:0,cc_load_policty:1,iv_load_policy:3,autohide:1};let xt;function It(e="",i,s){const l=((e[r](a)||[])[0]||"")[m](),u=((e[r](o)||[])[1]||"")[m](),h=(n[p](e)?e[r](n):[])[y]((t=>t[g](/^\./,"")));if(l[f]<1)return;let d,c,P,b=!1;e===T?(b=!0,d=t[M]()):d=t[w](l),u[f]&&(d.id=u);for(let t of h)d[I][R](t);if(null==i&&null!=s&&([i,s]=[s,null]),null!=i&&null!=s)[c,P]=[i,s];else if(null==s)typeof i===F||typeof i===_||Array[C](i)?P=i:c=i;else if(null==i)return d;if(typeof c===E&&null!=c)for(const t in c){if(!c[Y](t))continue;const e=c[t];-1!=[D,B,S,$,L][z](t)?d[t]=e:-1!=[j,q,N,W,X,Z][z](t)?d[et][t]=e:null!=e&&d[J](t,e)}if(null!=P){const e=typeof P===F,i=typeof P===_,s=Array[C](P);if(e||i){const e=P;l===G||l===H||"audio"===l?d.src=e:b?d[O](t[x](P)):d[S]=e}else if(s)for(let e of P){const i=e instanceof Element;typeof e===F||typeof e===_?b?d[O](t[x](e)):d[S]+=e:i&&d[O](e)}}return d}function Rt(t,e){const i=t,s=l[A](i>3599?i/3600:0),n=l[A](i>3599?i%3600/60:i>59?i/60:0),o=i>3599?i%3600%60:i>59?i%60:i;return e>=3600?`${s<10?`0${s}`:s}:${n<10?`0${n}`:n}:${o<10?`0${o}`:o}`:e>=60?`${n<10?`0${n}`:n}:${o<10?`0${o}`:o}`:`0:${o<10?`0${o}`:o}`}t[K][O](It(U,{[ot]:it,[at]:yt,[mt]:""})),t[K][O](It(U,{[ot]:st,[at]:ct,[ht]:et,[mt]:lt})),t[K][O](It(U,{[at]:ct,[ot]:nt})),t[K][O](It(U,{[ot]:it,[at]:"https://fonts.gstatic.com",[mt]:""})),t[K][O](It(U,{[ot]:it,[at]:Pt,[mt]:""})),t[K][O](It(U,{[ot]:st,[at]:bt,[ht]:et,[mt]:lt})),t[K][O](It(U,{[at]:bt,[ot]:nt})),t[K][O](It(U,{[ot]:it,[at]:vt,[mt]:""})),t[K][O](It(U,{[ot]:st,[at]:Vt,[ht]:tt,[mt]:lt})),t[K][O](It(tt,{[rt]:Vt,[ut]:""})),t[K][O](It(U,{[ot]:it,[at]:gt,[mt]:""})),t[K][O](It(U,{[ot]:st,[at]:ft,[ht]:tt,[mt]:lt})),t[K][O](It(tt,{[rt]:ft,[ut]:""}));let Ft=new s;function _t(t){const e=Tt[f];let s="";do{s=i.from({length:t},(t=>Tt.charAt(l[A](l.random()*e)))).join("")}while(Ft.has(s));return Ft.set(s,1),s}function At(...e){const i=It(tt,`console.log.apply(void 0, ${JSON.stringify(e)});`);t[d][O](i),i[_remove]()}window.PDPlayer=class{video;audio;youtube;vimeo;when;option={panelType:"",panelItem:["play","progress","time","volumeMini","rate","full"],volume:100,mute:!1};stateFull=!1;#t;#e;#i;#s;#l;#n=!1;#o=100;#a=1;#u=!1;#h=!1;#r=!0;#m=!0;#d=0;#p=0;#y;#c;constructor(t={}){if("object"!=typeof t)return void At("config: 不存在。");const s=t.option||{},l=parseInt(s[h]||t[h]),n=Boolean(s.mute||t.mute);if(this.option.panelType=e(s.panelType||t.type||this.option.panelType),this.option.panelItem=i.from(s.panelItem||t.panel||this.option.panelItem),null==s[h]||null==t[h]||isNaN(l)||(this[h]=l),null!=s.mute&&null!=t.mute&&(this.option.mute=n),this.when=t.when||t.event||{},typeof t[u]===F&&document[k](t[u])?(this[d]=document[k](t[u]),this[d][I][R](Q),this[d].dataset.type=this.option.panelType):this[d]=It("div."+Q,{"data-type":this.option.panelType}),null==this[d])return void At("body: 不存在");this[d][dt]=this[d][pt]=t=>this.#P(1);const o=e(t[V]||"")[m](),a=e(t[P]||"")[m](),r=e(t[b]||"")[m](),p=e(t[v]||"")[m]();o[f]?(this[V]=o,this.#b()):a[f]?(this[P]=a,this.#v()):r[f]?(this[b]=r,this.#V()):p[f]&&(this[v]=p,this.#g())}#f(t){return wt&&t&&null==this[b]?this.#c:this.#y}isPaused(t){const e=this.#f(t);return this.#t||this.#e?e.paused:this.#i?1!==this.ytState:this.#s?this.#r:void 0}play(t){const e=this.#f(t);!t||this.#l||null==this[P]?(this.#t||this.#e?e.play():this.#i?e.playVideo():this.#s&&t?e.requestFullscreen().then((t=>{e.play()})):this.#s&&e.play(),this.panel.setPlayIcon(!1)):alert("not Ready")}pause(t){const e=this.#f(t);this.#t||this.#e?e.pause():this.#i?e.pauseVideo():this.#s&&e.pause(),this.panel.setPlayIcon(!0)}#T(t){const e=this.isPaused(t);e?this.play():this.pause(),this.panel.setPlayIcon(!e)}#w(t,e){const i=this.#f(e);this.#t||this.#e?i.currentTime=t:this.#i?i.seekTo(t):this.#s&&i.setCurrentTime(t),this.pause()}#k(t){const e=this.#f(t);return this.#t||this.#e?100*e[h]:this.#i?e.getVolume():this.#s?100*this.#o:void 0}#M(t,e){const i=this.#f(e);this[h]=t,this.#t||this.#e?i[h]=t/100:this.#i?i.setVolume(t):this.#s&&(this.#o=t/100,i.setVolume(t/100)),this.panel.setVolume(t),this.panel.setMuteIcon(0===t)}#x(t,e){const i=null==t?this.isMuted():!t,s=this.#f(e);if(i&&0===this[h])return this[h]=50,this.#M(50),void this.panel.setMuteIcon(!1);this.#t||this.#e?s.muted=!i:this.#i?i?s.unMute():s.mute():this.#s&&(this.#n=!i,s.setMuted(!i).catch((t=>alert(t)))),this.panel.setMuteIcon(!i)}isMuted(t){const e=this.#f(t);return this.#t||this.#e?e.muted:this.#i?e.isMuted():this.#s?this.#n:void 0}#I(t,e){const i=this.#f(e);this.#t||this.#e?i.playbackRate=t:this.#i?i.setPlaybackRate(t):this.#s&&i.setPlaybackRate(t).catch((t=>alert(t)))}#R(t){const e=this.#f(t);return this.#t||this.#e?e.playbackRate:this.#i?e.getPlaybackRate():this.#s?this.#a:void 0}#F(t){const e=this.#f(t);this.#t||this.#e?this.panel.duration(e.duration):this.#i?this.panel.duration(e.getDuration()):this.#s&&this.#y.getDuration().then((t=>{this.#d=t,this.panel.duration(this.#d)}))}#_(t){const e=this.#f(t);return this.#t||this.#e?l[c](e.duration):null!=this[P]?l[c](e.getDuration()):this.#s?l[c](this.#d):void 0}#A(t){const e=this.#f(t);return this.#t||this.#e?l[c](e.currentTime):null!=this[P]?l[c](e.getCurrentTime()):this.#s?l[c](this.#p):void 0}#C(t){const e=this.#_(t);this.videoTimer=setInterval((()=>{if(this.#s)this.#y.getCurrentTime().then((t=>{this.#p=t,this.panel.setCurrent(l[c](t)),l[c](t)<e||clearInterval(this.videoTimer)}));else{const t=this.#A();if(this.panel.setCurrent(t),l[c](t)<e)return;clearInterval(this.videoTimer)}}),100)}#E(){null!=this.when.ready&&this.when.ready(),null!=this[b]&&(this.#u=this.#r=this.#m=!0,this.#h=!1),this.#t=Boolean(this.video&&this.#y),this.#s=Boolean(this[b]&&this.#y),this.#i=Boolean(this[P]&&this.#y),this.#e=Boolean(this[v]&&this.#y),this.#F(),this.panel.setCurrent(0),this.sec=0,null!=this.option.mute?this.#x(this.option.mute):this.#s&&this.#y.getMuted().then((t=>this.#n=t)),null!=this[h]?this.#M(this[h]):this.#s&&this.#y.getVolume().then((t=>this.#o=100*t))}#Y(){this.#h=!1,this.#r=this.#m=!1,null!=this.when.playing&&this.when.playing(),this.#i&&(this.start&&(this.start=!1),setTimeout((()=>{this.mask.classList[R]("hide")}),500)),this.#C(),this.panel.hide(1)}#D(){this.#r=!0,this.#h=!1,null!=this.when.pause&&this.when.pause(),clearInterval(this.videoTimer),this.#i&&this.mask.classList.remove("hide"),this.panel.show()}#B(){this.#m=this.#r=!0,this.#h=!1,"function"==typeof this.when.end&&this.when.end(),clearInterval(this.videoTimer),this.panel.reset(),this.#t?this.#y.currentTime=0:this.#i?(this.#w(0),setTimeout((()=>{this.start=!0}),50)):this.#s&&this.#w(0)}#S(){this.pause(),this.#w(this.#A(),!0),this.#M(this.#k(),!0),this.#I(this.#R(),!0),this.play(!0)}#$(){const t=this.#A(!0);this.panel.setCurrent(t),this.#w(t),this.#M(this.#k(!0)),this.#I(this.#R(!0))}#L(){if(this.panel=new Ct(this),null!=this.panel.buttonPlay&&(this.panel.buttonPlay.onclick=t=>this.#T()),null!=this.panel.inputProgress&&(this.panel.inputProgress.onclick=t=>{const e=t.target,i=e.children[0],s=t.offsetX,n=e.clientWidth,o=parseInt(i.max),a=l.floor(s/n*o);i.value=a,this.panel.setCurrent(a),this.#w(a),setTimeout((t=>{this.play()}),500)}),null!=this.panel.buttonVolume){let t;this.panel.buttonVolume.onclick=e=>{clearTimeout(t),t=setTimeout((t=>{this.panel.buttonVolume.parentElement.parentElement.open=!1}),1e3)},this.panel.inputVolumeMini.onmouseover=e=>{clearTimeout(t)},this.panel.inputVolumeMini[pt]=e=>{clearTimeout(t),t=setTimeout((t=>{this.panel.buttonVolume.parentElement.parentElement.open=!1}),1e3)},this.panel.inputVolumeMini.onclick=t=>{const e=t.offsetX,i=this.panel.inputVolumeMini.clientWidth,s=parseInt(this.panel.inputVolumeMini.children[0].max),n=l.floor(e/i*s);this.panel.inputVolumeMini.children[0].value=n,this.#M(n),this.#x(0===n),this.panel.setMuteIcon(0===n)}}null!=this.panel.buttonMute&&(this.panel.buttonMute.onclick=t=>this.#x()),null!=this.panel.inputVolume&&(this.panel.inputVolume.onclick=t=>{const e=t.offsetX,i=this.panel.inputVolume.clientWidth,s=parseInt(this.panel.inputVolume.children[0].max),n=l.floor(e/i*s);this.panel.inputVolume.children[0].value=n,this.#M(n),this.#x(0===n),this.panel.setMuteIcon(0===n)}),null!=this.panel.buttonRate&&(this.panel.buttonRate.onclick=t=>{const e=t.target;"1x_mobiledata"===e.innerText?(e.innerText="speed_1_25",this.#I(1.25)):"speed_1_25"===e.innerText?(e.innerText="speed_1_5x",this.#I(1.5)):"speed_1_5x"===e.innerText?(e.innerText="speed_2x",this.#I(2)):"speed_2x"===e.innerText?(e.innerText="speed_0_5x",this.#I(.5)):(e.innerText="1x_mobiledata",this.#I(1))})}#P(t){null!=this.panel&&(this.panel.show(),null!=t&&this.panel.hide(t))}#g(){null!=this[v]&&(this.#y=It("audio",{preload:"auto",controls:""},[It("source",{src:this[v]})]),this.#L(),this[d][O](this.#y),this[d][O](this.panel[d]),this.#y.onloadedmetadata=()=>this.#E(),this.#y.onplaying=()=>this.#Y(),this.#y.onpause=()=>this.#D(),this.#y.onended=()=>this.#B())}#b(){null!=this[V]&&(this.#y=It("video",{preload:"auto",playsinline:""},[It("source",this[V])]),wt||(this.#y.onclick=t=>this.#T()),this[d][O](this.#y),this.#L(),this[d][O](this.panel[d]),this.#y.onloadedmetadata=t=>this.#E(),this.#y.onplaying=t=>this.#Y(),this.#y.onpause=t=>this.#D(),this.#y.onended=t=>this.#B(),wt&&(this.#c=It("video.PDFullPlayer",{preload:"metadata",playsinline:null},[It("source",this[V])]),this.#c.onplaying=t=>this.#S(),this.#c.onpause=t=>this.#$(),this.#c.onended=t=>this.#B(),kt?this.#c.addEventListener("webkitpresentationmodechanged",(t=>{this.stateFull="fullscreen"===this.#c.webkitPresentationMode})):this.#c.addEventListener("fullscreenchange",(t=>{this.stateFull=document.fullscreenElement===this.#c})),this[d][O](this.#c)))}#v(){if(null==this[P])return;const t=_t(24),e=_t(24);this.start=!0;const i=It("div#"+t),s=It("div[_body]",[i]);wt||(s.onclick=t=>this.#T()),this[d][O](s),this.mask=It("div.mask",{sec:this.live?"live":0}),wt||(this.mask.onclick=t=>this.#T()),this[d][O](this.mask),this.#L(),this[d][O](this.panel[d]),xt=async()=>{if(await this.#z(),this.#y=new YT.Player(t,{videoId:this[P],width:"100%",height:"100%",playerVars:{...Mt,playsinline:1},events:{onReady:t=>this.#E(),onStateChange:t=>{this.ytState=t.data,0===t.data?this.#B():1===t.data?this.#Y():2===t.data&&this.#D()}}}),!wt)return;const i=It("div#"+e+".PDFullPlayer");this[d][O](i),this.#c=new YT.Player(e,{videoId:this[P],width:"100%",height:"100%",playerVars:{...Mt,playsinline:0},events:{onReady:t=>{console.log("is Ready"),this.#l=!0},onStateChange:t=>{0===t.data?this.#B():2===t.data?this.#$():3===t.data&&this.#S()}}})},xt()}#V(){if(null==this[b])return;const t=It("iframe",{src:gt+"/video/"+this[b]+"?background=1&loop=0&autoplay=0&controls=0",frameborder:"0",allowfullscreen:"",allow:"autoplay;"}),e=It("div[_body]",[t]);wt||(e.onclick=t=>this.#T()),this[d][O](e),this.mask=It("div.mask.hide"),wt||(this.mask.onclick=t=>this.#T()),this[d][O](this.mask),this.#L(),this[d][O](this.panel[d]),this.#y=new Vimeo.Player(t),this.#y.ready().then((t=>this.#E())),this.#y.on("play",(t=>this.#Y())),this.#y.on("pause",(t=>this.#D())),this.#y.on("ended",(t=>this.#B())),wt&&this.#y.on("fullscreenchange",(t=>{this.panel.setPlayIcon(!t.fullscreen)}))}async#z(t){const e=t=>{if(this[P])return this[P],t(t);if(this[P]=prompt("Youtube 影片ID / 網址"),/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(this[P])){let e=videoId.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);this[P]=e&&11==e[7][f]?e[7]:null,this[P]?(history.pushState(null,null,location.href.split("?")[0]+`?videoId=${this[P]}`),t()):fitVideoId(t)}else t(t)};if(!t)return new Promise(((t,i)=>e(t)));e(t)}destroy(){this[d][dt]=this[d][pt]=null,clearInterval(this.videoTimer),this.#s?this.#y.destroy():this.#i?(this.#y.destroy(),this.#c&&this.#c.destroy()):(this.#t||this.#e)&&(this.#y.pause(),this.#y.src=""),null!=this.panel.buttonPlay&&(this.panel.buttonPlay.onclick=null),null!=this.panel.buttonVolume&&(this.panel.buttonVolume.onclick=null),null!=this.panel.buttonMute&&(this.panel.buttonMute.onclick=null),null!=this.panel.buttonRate&&(this.panel.buttonRate.onclick=null),null!=this.panel.buttonFull&&(this.panel.buttonRate.onclick=null),null!=this.panel.inputVolume&&(this.panel.inputVolume.onclick=null),null!=this.panel.inputVolumeMini&&(this.panel.inputVolumeMini.onmouseover=this.panel.inputVolumeMini[pt]=this.panel.inputVolumeMini.onclick=null),null!=this.panel.inputProgress&&(this.panel.inputProgress.onclick=null),this.panel[d].onmouseover=null,this[d].remove(),"function"==typeof this.when.destroyed&&this.when.destroyed()}};class Ct{body;#O;#f;#F;buttonPlay;buttonVolume;buttonMute;buttonRate;buttonFull;inputProgress;inputVolume;inputVolumeMini;#j;#q;#N=8;constructor(t){this.#f=t,this.body=It("div.panel"),this.body.onmouseover=t=>this.show();for(let e of t.option.panelItem)this.#W(e),this.#X(t,e),this.#Z(t,e),this.#J(t,e),this.#G(e,t.option.volume),this.#H(e,t.option.volume),this.#K(t,e,1),this.#Q(t,e);"minimal"===t.option.panelType&&(this.body.style.width=this.#N+"px")}#W(t){"play"===t&&(this.#N+=24,this.buttonPlay=It("span.material-symbols-outlined","play_arrow"),this.body[O](this.buttonPlay))}#X(t,e){"progress"===e&&(this.inputProgress=It("section.progress",[It("input.progress",{type:"range",name:"progress",min:0,value:0})]),this.body[O](this.inputProgress))}#Z(t,e){"timeMini"===e&&"minimal"!==t.option.panelType&&(this.#j=It("p.time"),this.body[O](this.#j))}#J(t,e){"time"===e&&"minimal"!==t.option.panelType&&(this.#q=It("p.time"),this.body[O](this.#q))}#G(t,e){"volume"===t&&(this.#N+=104,this.buttonMute=It("span.material-symbols-outlined",this.#U),this.inputVolume=It("section",[It("input.volume",{type:"range",name:"volume",min:0,max:100,value:e})]),this.body[O](It("section.volume",[this.buttonMute,this.inputVolume])))}#H(t,e){"volumeMini"===t&&(this.#N+=32,this.buttonVolume=It("span.material-symbols-outlined",this.#U),this.inputVolumeMini=It("section",[It("input.volume",{type:"range",name:"volume",min:0,max:100,value:e})]),this.body[O](It("details.volume",[It("summary",[this.buttonVolume]),this.inputVolumeMini])))}#K(t,e,i){"rate"===e&&(this.#N+=32,this.buttonRate=It("span.material-symbols-outlined","1x_mobiledata"),this.body[O](this.buttonRate))}#Q(t,e){"full"===e&&null==this.#f.audio&&(this.#N+=32,this.buttonFull=It("span.material-symbols-outlined","fullscreen"),this.buttonFull.onclick=e=>{const i=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||!1,s=t.body.requestFullscreen||t.body.msRequestFullscreen||t.body.mozRequestFullScreen||t.body.webkitRequestFullscreen,l=document.exitFullscreen||document.msExitFullscree||document.mozCancelFullScreen||document.webkitExitFullscreen;t.stateFull=!i,i?wt?t.mobilePause():l&&l.call(document):wt?(t.pause(),t.play(!0)):s&&s.call(t.body)},this.body[O](this.buttonFull))}get#U(){return this.#f.isMuted()?"no_sound":"volume_up"}setPlayIcon(t){null!=this.buttonPlay&&(this.buttonPlay.innerText=t?"play_arrow":"pause")}setMuteIcon(t){null!=this.buttonMute&&(this.buttonMute[B]=t?"no_sound":"volume_up"),null!=this.inputVolume&&(this.inputVolume.children[0].value=t?0:this.#f.option.volume)}reset(){null!=this.buttonPlay&&(this.buttonPlay.innerText="play_arrow"),this.show(),this.setCurrent(0)}setVolume(t){null!=this.inputVolume&&(this.inputVolume.children[0].value=t)}duration(t){const e=Math.ceil(t);this.#F=e,null!=this.inputProgress&&(this.inputProgress.children[0].max=e),null!=this.#q&&(this.#q.innerText=Rt(0,e)+"/"+Rt(this.#F,this.#F))}setCurrent(t){null!=this.inputProgress&&(this.inputProgress.children[0].value=t),null==t||null==this.#j&&null==this.#q||(null!=this.#j&&(this.#j.innerText=Rt(t,this.#F)),null!=this.#q&&(this.#q.innerText=Rt(t,this.#F)+"/"+Rt(this.#F,this.#F)))}show(){clearTimeout(this.#O),this.body.classList.remove("hide")}hide(t){clearTimeout(this.#O),this.#O=setTimeout((t=>{this.#f.isPaused()||this.body.classList.add("hide")}),1e3*t)}}}("undefined"==typeof window?window={}:window);
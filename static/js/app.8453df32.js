(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},a={app:0},n=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"7faf":function(t,e,i){"use strict";var r=i("b8ff"),a=i.n(r);a.a},ad9c:function(t,e,i){"use strict";var r=i("c597"),a=i.n(r);a.a},b8ff:function(t,e,i){},c597:function(t,e,i){},cb02:function(t,e,i){"use strict";var r=i("ee7e"),a=i.n(r);a.a},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Demo")],1)},n=[],s=i("d4ec"),o=i("2caf"),l=i("262e"),c=i("9ab4"),p=i("60a3"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",staticStyle:{"padding-top":"40px"}},[i("h2",[t._v("plugin-photo-swiper")]),t._m(0),i("h2",[t._v("Demo")]),i("p",{staticStyle:{color:"#666"}},[t._v("点击图片查看示例")]),i("div",{staticClass:"wrapper wrapper-content"},[i("div",{staticClass:"content gallery"},t._l(t.imagesEnd,(function(e,r){return i("div",{key:r,staticClass:"swiper-item gallery-item",attrs:{"data-origin":e.src,"data-size":e.w+"x"+e.h,"data-med":e.src,"data-med-size":e.w+"x"+e.h},on:{click:function(e){return t.handlePreview(r)}}},[i("img",{staticClass:"image-fit",attrs:{src:e.src,alt:""}})])})),0),i("photo-swiper",{attrs:{pageIndex:{position:"center"},visible:t.visible,options:t.options,gallerySelector:"gallery",gallerySelectorItem:"gallery-item"},on:{close:t.handleClose}})],1),i("h2",[t._v("特性")]),t._m(1)])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticStyle:{color:"#666"}},[t._v(" 一款支持图片缩放归位的预览插件。插件基于Vue实现，使用TypeScript语法，所以兼顾了主流的开发环境，也提供了丰富的api和配置项供您选择。插件依赖于photoswiper,所以支持他所有的可配置项和特性。 👉 "),i("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"https://starfishing.github.io/vue-photo-swiper-docs/"}},[t._v(" 文档地址 ")]),t._v(" 👈 👉 "),i("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"https://github.com/StarFishing/vue-photo-swiper.git"}},[t._v(" GitHub ")]),t._v(" 👈 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticStyle:{color:"#666"}},[i("ul",[i("li",[t._v("移动端双指缩放，双击放大，左右滑动切换")]),i("li",[t._v("pc端支持鼠标左右滑动切换，鼠标单击放大")]),i("li",[t._v(" 支持图片的缩放归位效果，也支持单纯的图片预览 ")]),i("li",[t._v("...")])])])}],h=i("bee2"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"pswp",staticClass:"pswp",attrs:{id:"gallery",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[i("div",{staticClass:"pswp__bg"}),i("div",{staticClass:"pswp__scroll-wrap"},[t._m(0),i("div",{staticClass:"pswp__ui pswp__ui--hidden"},[i("div",{staticClass:"pswp__top-bar"},[i("div",{staticClass:"pswp__counter",style:t.setPagePosition}),i("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t.fullscreen?i("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}):t._e(),t.zoom?i("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}):t._e(),t._t("topbar",null,{gallery:t.gallery}),t._m(1)],2),t.openArrow?i("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}):t._e(),t.openArrow?i("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}):t._e(),t._m(2),i("div",{staticClass:"pswp__footer__bar"},[t._t("footerBar")],2)])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__container"},[i("div",{staticClass:"pswp__item"}),i("div",{staticClass:"pswp__item"}),i("div",{staticClass:"pswp__item"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__preloader"},[i("div",{staticClass:"pswp__preloader__icn"},[i("div",{staticClass:"pswp__preloader__cut"},[i("div",{staticClass:"pswp__preloader__donut"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__caption"},[i("div",{staticClass:"pswp__caption__center"})])}],_=(i("caad"),i("ac1f"),i("2532"),i("1276"),i("53ca")),b=i("b24f"),g=i.n(b),y=i("14fd"),w=i.n(y),m=(i("3fb5"),i("343a"),function(t){Object(l["a"])(i,t);var e=Object(o["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.gallery=null,t.defaultOptions={loop:!1},t}return Object(h["a"])(i,[{key:"toggleGallery",value:function(t){t&&(this.gallerySelector?this.initGaleryByNode():(this.initGallery(),this.gallery&&this.gallery.init()))}},{key:"initGallery",value:function(){var t=this.$refs.pswp;this.gallery=new g.a(t,w.a,this.images,Object.assign({},this.defaultOptions,this.options)),this.gallery.listen("close",this.handleClose)}},{key:"handleClose",value:function(){this.$emit("close")}},{key:"initGaleryByNode",value:function(){for(var t=document.querySelectorAll("."+this.gallerySelector),e=0,i=t.length;e<i;e++){t[e].setAttribute("data-pswp-uid",e+1+"");var r=t[e];r.onclick=this._onThumbnailsClick}}},{key:"_closest",value:function(t,e){return!!t&&(t&&e(t)?t:this._closest(t.parentNode,e))}},{key:"_onThumbnailsClick",value:function(t){var e=this;t=t||window.event,t.preventDefault?t.preventDefault():t.returnValue=!1;var i=t.target||t.srcElement,r=this._closest(i,(function(t){return!!t.className&&t.className.includes(e.gallerySelectorItem)}));if(r){for(var a,n=r.parentNode,s=r.parentNode.childNodes,o=s.length,l=0,c=0;c<o;c++)if(1===s[c].nodeType){if(s[c]===r){a=l;break}l++}return void 0!==a&&a>=0&&this._openPhotoSwipe(a,n),!1}}},{key:"_openPhotoSwipe",value:function(t,e,i,r){var a,n=this,s=document.querySelectorAll(".pswp")[0],o=this._parseThumbnailElements(e);if(a={galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=o[t].el.children[0],i=window.pageYOffset||document.documentElement.scrollTop,r=e.getBoundingClientRect();return{x:r.left,y:r.top+i,w:r.width}},addCaptionHTMLFn:function(t,e,i){return t.title?(e.children[0].innerHTML=t.title+"<br/><small>Photo: "+t.author+"</small>",!0):(e.children[0].innerText="",!1)}},r)if(a.galleryPIDs){for(var l=0;l<o.length;l++)if(o[l].pid==t){a.index=l;break}}else a.index=parseInt(t+"",10)-1;else a.index=parseInt(t+"",10);if(!isNaN(a.index)){i&&(a.showAnimationDuration=0),this.gallery=new g.a(s,w.a,o,Object.assign({},this.defaultOptions,this.options,a));var c,p=!1,u=!0,d=!1;this.gallery.listen("beforeResize",(function(){var t=window.devicePixelRatio?window.devicePixelRatio:1;t=Math.min(t,2.5),c=n.gallery?n.gallery.viewportSize.x*t:0,c>=1200||!n.gallery.likelyTouchDevice&&c>800||screen.width>1200?p||(p=!0,d=!0):p&&(p=!1,d=!0),d&&!u&&n.gallery&&n.gallery.invalidateCurrItems(),u&&(u=!1),d=!1})),this.gallery.listen("gettingData",(function(t,e){p?(e.src=e.o.src,e.w=e.o.w,e.h=e.o.h):e.m&&(e.src=e.m.src,e.w=e.m.w,e.h=e.m.h)})),this.gallery.listen("close",this.handleClose),this.gallery.init()}}},{key:"_parseThumbnailElements",value:function(t){for(var e,i,r,a,n=t.childNodes,s=n.length,o=[],l=0;l<s;l++)if(a=n[l],1===a.nodeType){e=a.children;var c=a.getAttribute("data-size");if(!c)throw new Error("need data-size but got null,please check the prop in the element");i=c.split("x"),r={src:a.getAttribute("data-origin")||e[0].getAttribute("src"),w:parseInt(i[0],10),h:parseInt(i[1],10),author:a.getAttribute("data-author")},r.el=a,e.length>0?r.msrc=e[0].getAttribute("src"):r.msrc=r.src,r.o={src:r.src,w:r.w,h:r.h};var p=a.getAttribute("data-med");p&&(i=a.getAttribute("data-med-size").split("x"),r.m={src:p,w:parseInt(i[0],10),h:parseInt(i[1],10)}),o.push(r)}return o}},{key:"setPagePosition",get:function(){if("object"===Object(_["a"])(this.pageIndex)){var t=this.pageIndex.position;if(t){var e={textAlign:"center"===t?"center":"right"===t?"right":"left"};return e}}else if(!this.pageIndex)return{display:"none"};return""}}]),i}(p["c"]));c["a"]([Object(p["b"])({required:!1})],m.prototype,"images",void 0),c["a"]([Object(p["b"])({type:Boolean,default:!1})],m.prototype,"openArrow",void 0),c["a"]([Object(p["b"])({type:Boolean,default:!1})],m.prototype,"zoom",void 0),c["a"]([Object(p["b"])({type:Boolean,default:!1})],m.prototype,"fullscreen",void 0),c["a"]([Object(p["b"])({type:[Boolean,Object],default:!0})],m.prototype,"pageIndex",void 0),c["a"]([Object(p["b"])({type:Boolean,default:!1})],m.prototype,"visible",void 0),c["a"]([Object(p["b"])({default:function(){}})],m.prototype,"options",void 0),c["a"]([Object(p["b"])()],m.prototype,"gallerySelector",void 0),c["a"]([Object(p["b"])()],m.prototype,"gallerySelectorItem",void 0),c["a"]([Object(p["d"])("visible")],m.prototype,"toggleGallery",null),m=c["a"]([Object(p["a"])({components:{}})],m);var O=m,j=O,C=(i("cb02"),i("2877")),x=Object(C["a"])(j,f,v,!1,null,"ab3a4602",null),S=x.exports,k=function(t){Object(l["a"])(i,t);var e=Object(o["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.imagesEnd=[{src:"https://pic.3h3.com/up/2015-1/20151117170929166317.jpg",w:1920,h:1080},{src:"https://images2.alphacoders.com/743/743487.jpg",w:1920,h:1080},{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4155446215,2192068966&fm=15&gp=0.jpg",w:1920,h:1080}],t.visible=!1,t.options={index:0},t}return Object(h["a"])(i,[{key:"handleClose",value:function(){this.visible=!1,console.log("listen close")}},{key:"handlePreview",value:function(t){this.visible=!0}}]),i}(p["c"]);k=c["a"]([Object(p["a"])({components:{PhotoSwiper:S}})],k);var P=k,I=P,T=(i("ad9c"),Object(C["a"])(I,u,d,!1,null,"f37dda74",null)),A=T.exports,E=function(t){Object(l["a"])(i,t);var e=Object(o["a"])(i);function i(){return Object(s["a"])(this,i),e.apply(this,arguments)}return i}(p["c"]);E=c["a"]([Object(p["a"])({components:{Demo:A}})],E);var N=E,$=N,z=(i("7faf"),Object(C["a"])($,a,n,!1,null,null,null)),B=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(B)}}).$mount("#app")},ee7e:function(t,e,i){}});
webpackJsonp([0xd2a57dc1d883],{227:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(348),options:{plugins:[],trackingId:"UA-110074065-1"}},{plugin:t(350),options:{plugins:[]}}]},228:function(e,n,t){"use strict";var o;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(336),"component---src-templates-blog-post-jsx":t(341),"component---src-pages-index-jsx":t(339),"component---src-pages-resume-jsx":t(340),"component---src-pages-categories-javascript-jsx":t(338)},n.json=(o={"layout-index.json":t(40),"offline-plugin-app-shell-fallback.json":t(345)},o["layout-index.json"]=t(40),o["start-github-blog.json"]=t(347),o["layout-index.json"]=t(40),o["ibm-devcon-review.json"]=t(343),o["layout-index.json"]=t(40),o["index.json"]=t(344),o["layout-index.json"]=t(40),o["resume.json"]=t(346),o["layout-index.json"]=t(40),o["categories-javascript.json"]=t(342),o),n.layouts={"component---src-layouts-index-jsx":t(337)}},229:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(2),s=o(c),l=t(7),f=o(l),p=t(165),d=o(p),h=t(101),g=o(h),m=function(e){var n=e.children;return s.default.createElement("div",null,n())},v=function(e){function n(t){r(this,n);var o=a(this,e.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):d.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(n){n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:m,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=v,e.exports=n.default},101:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(366),a=o(r),u=(0,a.default)();e.exports=u},230:function(e,n,t){"use strict";var o=t(119),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},342:function(e,n,t){t(12),e.exports=function(e){return t.e(0x6a138b5baf9a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(358)})})}},343:function(e,n,t){t(12),e.exports=function(e){return t.e(0x5cf85db5a304,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(359)})})}},344:function(e,n,t){t(12),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(360)})})}},40:function(e,n,t){t(12),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(140)})})}},345:function(e,n,t){t(12),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(361)})})}},346:function(e,n,t){t(12),e.exports=function(e){return t.e(0xc69833dc971c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(362)})})}},347:function(e,n,t){t(12),e.exports=function(e){return t.e(0xb73b10474722,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(363)})})}},337:function(e,n,t){t(12),e.exports=function(e){return t.e(79611799117203,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(231)})})}},165:function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(2),a=(o(r),t(230)),u=o(a),i=t(101),c=o(i),s=void 0,l={},f={},p={},d={},h={},g=[],m=[],v={},y=[],R={},x=function(e){return e&&e.default||e},w=void 0,j=!0;w=t(232)({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){_(e,function(){y=y.filter(function(n){return n!==e}),w.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var b=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},P=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(n,o){d[e]=o,t(n,o)})}},k=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):_(e,function(n,o){if(n)t(n);else{var r=x(o());h[e]=r,t(n,r)}})},C=1,E={empty:function(){m=[],v={},R={},y=[],g=[]},addPagesArray:function(e){g=e;var n="";n="",s=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!g.some(function(n){return n.path===e}))return!1;var n=1/C;C+=1,v[e]?v[e]+=1:v[e]=1,E.has(e)||m.unshift(e),m.sort(P);var t=s(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,y.indexOf(t.jsonName)!==-1||d[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,y.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(b),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:v}},getPage:function(e){return s(e)},has:function(e){return m.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),j=!1;var o=s(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return k(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),k(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&k(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};e.exports=E}).call(n,t(142))},364:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"start-github-blog.json",path:"/start-github-blog/"},{componentChunkName:"component---src-templates-blog-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"ibm-devcon-review.json",path:"/ibm-devcon-review/"},{componentChunkName:"component---src-pages-index-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-resume-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"resume.json",path:"/resume/"},{componentChunkName:"component---src-pages-categories-javascript-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-javascript.json",path:"/categories/javascript/"}]},232:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(227),u=t(2),i=o(u),c=t(196),s=o(c),l=t(119),f=t(354),p=t(138),d=o(p),h=t(320),g=o(h),m=t(101),v=o(m),y=t(364),R=o(y),x=t(365),w=o(x),j=t(229),b=o(j),P=t(228),_=o(P),k=t(165),C=o(k);t(310),window.___emitter=v.default,C.default.addPagesArray(R.default),C.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=C.default,window.matchPath=l.matchPath;var E=(0,d.default)(),N=w.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=N[e];return null!=n&&(E.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){O(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(233);var o=function(e){function n(t){t.page.path===C.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=N[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:E.location,action:E.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:E})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:E},n)},d=(0,l.withRouter)(b.default);C.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(d,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return C.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,g.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},365:function(e,n){e.exports=[]},233:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(101),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},320:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},12:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},348:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},336:function(e,n,t){t(12),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(349)})})}},350:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},366:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},142:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var n=h.length;n;){for(d=h,h=[];++m<n;)d&&d[m].run();m=-1,n=h.length}d=null,g=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new c(e,n)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},338:function(e,n,t){t(12),e.exports=function(e){return t.e(0xb88024636c7a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(238)})})}},339:function(e,n,t){t(12),e.exports=function(e){return t.e(0xc23565d713b7,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(239)})})}},340:function(e,n,t){t(12),e.exports=function(e){return t.e(59872079621741,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(240)})})}},341:function(e,n,t){t(12),e.exports=function(e){return t.e(0xb92941d84ed6,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(241)})})}}});
//# sourceMappingURL=app-04dc5da45ba09ff37bd6.js.map
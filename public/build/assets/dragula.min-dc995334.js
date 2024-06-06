import{c as M}from"./_commonjsHelpers-de833af9.js";import{c as K}from"./_commonjs-dynamic-modules-302442b1.js";var wn={exports:{}};(function(hn,Tn){(function(T){hn.exports=T()})(function(){return function T(E,b,s){function h(i,d){if(!b[i]){if(!E[i]){var r=typeof K=="function"&&K;if(!d&&r)return r(i,!0);if(e)return e(i,!0);throw(r=new Error("Cannot find module '"+i+"'")).code="MODULE_NOT_FOUND",r}r=b[i]={exports:{}},E[i][0].call(r.exports,function(g){return h(E[i][1][g]||g)},r,r.exports,T,E,b,s)}return b[i].exports}for(var e=typeof K=="function"&&K,a=0;a<s.length;a++)h(s[a]);return h}({1:[function(T,E,b){var s={},h="(?:^|\\s)",e="(?:\\s|$)";function a(i){var d=s[i];return d?d.lastIndex=0:s[i]=d=new RegExp(h+i+e,"g"),d}E.exports={add:function(i,d){var r=i.className;r.length?a(d).test(r)||(i.className+=" "+d):i.className=d},rm:function(i,d){i.className=i.className.replace(a(d)," ").trim()}}},{}],2:[function(T,E,b){(function(s){var h=T("contra/emitter"),e=T("crossvent"),a=T("./classes"),i=document,d=i.documentElement;function r(t,S,v,p){s.navigator.pointerEnabled?e[S](t,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[v],p):s.navigator.msPointerEnabled?e[S](t,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[v],p):(e[S](t,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[v],p),e[S](t,v,p))}function g(t){return t.touches!==void 0?t.touches.length:t.which!==void 0&&t.which!==0?t.which:t.buttons!==void 0?t.buttons:(t=t.button,t!==void 0?1&t?1:2&t?3:4&t?2:0:void 0)}function o(t,S){return s[S]!==void 0?s[S]:(d.clientHeight?d:i.body)[t]}function f(t,S,v){var p=(t=t||{}).className||"";return t.className+=" gu-hide",v=i.elementFromPoint(S,v),t.className=p,v}function w(){return!1}function I(){return!0}function B(t){return t.width||t.right-t.left}function _(t){return t.height||t.bottom-t.top}function m(t){return t.parentNode===i?null:t.parentNode}function N(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||function S(v){return!v||v.contentEditable==="false"?!1:v.contentEditable==="true"?!0:S(m(v))}(t)}function O(t){return t.nextElementSibling||function(){for(var S=t;S=S.nextSibling,S&&S.nodeType!==1;);return S}()}function D(t,v){var v=(p=v).targetTouches&&p.targetTouches.length?p.targetTouches[0]:p.changedTouches&&p.changedTouches.length?p.changedTouches[0]:p,p={pageX:"clientX",pageY:"clientY"};return t in p&&!(t in v)&&p[t]in v&&(t=p[t]),v[t]}E.exports=function(t,S){var v,p,X,Z,nn,en,tn,R,k,C,q;arguments.length===1&&Array.isArray(t)===!1&&(S=t,t=[]);var U,j=null,u=S||{};u.moves===void 0&&(u.moves=I),u.accepts===void 0&&(u.accepts=I),u.invalid===void 0&&(u.invalid=function(){return!1}),u.containers===void 0&&(u.containers=t||[]),u.isContainer===void 0&&(u.isContainer=w),u.copy===void 0&&(u.copy=!1),u.copySortSource===void 0&&(u.copySortSource=!1),u.revertOnSpill===void 0&&(u.revertOnSpill=!1),u.removeOnSpill===void 0&&(u.removeOnSpill=!1),u.direction===void 0&&(u.direction="vertical"),u.ignoreInputTextSelection===void 0&&(u.ignoreInputTextSelection=!0),u.mirrorContainer===void 0&&(u.mirrorContainer=i.body);var x=h({containers:u.containers,start:function(n){n=H(n),n&&cn(n)},end:an,cancel:dn,remove:sn,destroy:function(){on(!0),V({})},canMove:function(n){return!!H(n)},dragging:!1});return u.removeOnSpill===!0&&x.on("over",function(n){a.rm(n,"gu-hide")}).on("out",function(n){x.dragging&&a.add(n,"gu-hide")}),on(),x;function z(n){return x.containers.indexOf(n)!==-1||u.isContainer(n)}function on(n){n=n?"remove":"add",r(d,n,"mousedown",gn),r(d,n,"mouseup",V)}function G(n){r(d,n?"remove":"add","mousemove",yn)}function rn(n){n=n?"remove":"add",e[n](d,"selectstart",un),e[n](d,"click",un)}function un(n){U&&n.preventDefault()}function gn(n){var c,l;en=n.clientX,tn=n.clientY,g(n)!==1||n.metaKey||n.ctrlKey||(l=H(c=n.target))&&(U=l,G(),n.type==="mousedown"&&(N(c)?c.focus():n.preventDefault()))}function yn(n){if(U)if(g(n)!==0){if(!(n.clientX!==void 0&&Math.abs(n.clientX-en)<=(u.slideFactorX||0)&&n.clientY!==void 0&&Math.abs(n.clientY-tn)<=(u.slideFactorY||0))){if(u.ignoreInputTextSelection){var c=D("clientX",n)||0,l=D("clientY",n)||0;if(N(i.elementFromPoint(c,l)))return}l=U,G(!0),rn(),an(),cn(l),l=function(y){return y=y.getBoundingClientRect(),{left:y.left+o("scrollLeft","pageXOffset"),top:y.top+o("scrollTop","pageYOffset")}}(X),Z=D("pageX",n)-l.left,nn=D("pageY",n)-l.top,a.add(C||X,"gu-transit"),function(){if(!v){var y=X.getBoundingClientRect();(v=X.cloneNode(!0)).style.width=B(y)+"px",v.style.height=_(y)+"px",a.rm(v,"gu-transit"),a.add(v,"gu-mirror"),u.mirrorContainer.appendChild(v),r(d,"add","mousemove",Q),a.add(u.mirrorContainer,"gu-unselectable"),x.emit("cloned",v,X,"mirror")}}(),Q(n)}}else V({})}function H(n){if(!(x.dragging&&v||z(n))){for(var c=n;m(n)&&z(m(n))===!1;)if(u.invalid(n,c)||!(n=m(n)))return;var l=m(n);if(l&&!u.invalid(n,c)&&u.moves(n,l,c,O(n)))return{item:n,source:l}}}function cn(n){var c,l;c=n.item,l=n.source,(typeof u.copy=="boolean"?u.copy:u.copy(c,l))&&(C=n.item.cloneNode(!0),x.emit("cloned",C,n.item,"copy")),p=n.source,X=n.item,R=k=O(n.item),x.dragging=!0,x.emit("drag",X,p)}function an(){var n;x.dragging&&fn(n=C||X,m(n))}function ln(){G(!(U=!1)),rn(!0)}function V(n){var c,l;ln(),x.dragging&&(c=C||X,l=D("clientX",n)||0,n=D("clientY",n)||0,(n=mn(f(v,l,n),l,n))&&(C&&u.copySortSource||!C||n!==p)?fn(c,n):(u.removeOnSpill?sn:dn)())}function fn(n,c){var l=m(n);C&&u.copySortSource&&c===p&&l.removeChild(X),J(c)?x.emit("cancel",n,p,p):x.emit("drop",n,c,p,k),$()}function sn(){var n,c;x.dragging&&((c=m(n=C||X))&&c.removeChild(n),x.emit(C?"cancel":"remove",n,c,p),$())}function dn(n){var c,l,y;x.dragging&&(c=0<arguments.length?n:u.revertOnSpill,(n=J(y=m(l=C||X)))===!1&&c&&(C?y&&y.removeChild(C):p.insertBefore(l,R)),n||c?x.emit("cancel",l,p,p):x.emit("drop",l,y,p,k),$())}function $(){var n=C||X;ln(),v&&(a.rm(u.mirrorContainer,"gu-unselectable"),r(d,"remove","mousemove",Q),m(v).removeChild(v),v=null),n&&a.rm(n,"gu-transit"),q&&clearTimeout(q),x.dragging=!1,j&&x.emit("out",n,j,p),x.emit("dragend",n),p=X=C=R=k=q=j=null}function J(n,c){return c=c!==void 0?c:v?k:O(C||X),n===p&&c===R}function mn(n,c,l){for(var y=n;y&&!function(){if(z(y)===!1)return!1;var L=vn(y,n),L=pn(y,L,c,l);return J(y,L)?!0:u.accepts(X,y,p,L)}();)y=m(y);return y}function Q(n){if(v){n.preventDefault();var c=D("clientX",n)||0,l=D("clientY",n)||0,Y=c-Z,y=l-nn;v.style.left=Y+"px",v.style.top=y+"px";var L=C||X,n=f(v,c,l),Y=mn(n,c,l),A=Y!==null&&Y!==j;if(!A&&Y!==null||(j&&F("out"),j=Y,A&&F("over")),y=m(L),Y!==p||!C||u.copySortSource){var P,n=vn(Y,n);if(n!==null)P=pn(Y,n,c,l);else{if(u.revertOnSpill!==!0||C)return void(C&&y&&y.removeChild(L));P=R,Y=p}(P===null&&A||P!==L&&P!==O(L))&&(k=P,Y.insertBefore(L,P),x.emit("shadow",L,Y,p))}else y&&y.removeChild(L)}function F(W){x.emit(W,L,j,p)}}function vn(n,c){for(var l=c;l!==n&&m(l)!==n;)l=m(l);return l===d?null:l}function pn(n,c,l,y){var L=u.direction==="horizontal";return(c!==n?function(){var A=c.getBoundingClientRect();return Y(L?l>A.left+B(A)/2:y>A.top+_(A)/2)}:function(){var A,P,F,W=n.children.length;for(A=0;A<W;A++)if(P=n.children[A],F=P.getBoundingClientRect(),L&&F.left+F.width/2>l||!L&&F.top+F.height/2>y)return P;return null})();function Y(A){return A?O(c):c}}}}).call(this,typeof M<"u"?M:typeof self<"u"?self:typeof window<"u"?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(T,E,b){E.exports=function(s,h){return Array.prototype.slice.call(s,h)}},{}],4:[function(T,E,b){var s=T("ticky");E.exports=function(h,e,a){h&&s(function(){h.apply(a||null,e||[])})}},{ticky:10}],5:[function(T,E,b){var s=T("atoa"),h=T("./debounce");E.exports=function(e,a){var i=a||{},d={};return e===void 0&&(e={}),e.on=function(r,g){return d[r]?d[r].push(g):d[r]=[g],e},e.once=function(r,g){return g._once=!0,e.on(r,g),e},e.off=function(r,g){var o=arguments.length;if(o===1)delete d[r];else if(o===0)d={};else{if(r=d[r],!r)return e;r.splice(r.indexOf(g),1)}return e},e.emit=function(){var r=s(arguments);return e.emitterSnapshot(r.shift()).apply(this,r)},e.emitterSnapshot=function(r){var g=(d[r]||[]).slice(0);return function(){var o=s(arguments),f=this||e;if(r==="error"&&i.throws!==!1&&!g.length)throw o.length===1?o[0]:o;return g.forEach(function(w){i.async?h(w,o,f):w.apply(f,o),w._once&&e.off(r,w)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(T,E,b){(function(s){var h=T("custom-event"),e=T("./eventmap"),a=s.document,i=function(o,f,w,I){return o.addEventListener(f,w,I)},d=function(o,f,w,I){return o.removeEventListener(f,w,I)},r=[];function g(o,f,w){if(f=function(I,B,_){var m,N;for(m=0;m<r.length;m++)if((N=r[m]).element===I&&N.type===B&&N.fn===_)return m}(o,f,w),f)return w=r[f].wrapper,r.splice(f,1),w}s.addEventListener||(i=function(o,f,w){return o.attachEvent("on"+f,function(I,B,_){var m=g(I,B,_)||function(N,O){return function(D){var t=D||s.event;t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.which=t.which||t.keyCode,O.call(N,t)}}(I,_);return r.push({wrapper:m,element:I,type:B,fn:_}),m}(o,f,w))},d=function(o,f,w){if(w=g(o,f,w),w)return o.detachEvent("on"+f,w)}),E.exports={add:i,remove:d,fabricate:function(o,f,w){var I=e.indexOf(f)===-1?new h(f,{detail:w}):function(){var B;return a.createEvent?(B=a.createEvent("Event")).initEvent(f,!0,!0):a.createEventObject&&(B=a.createEventObject()),B}();o.dispatchEvent?o.dispatchEvent(I):o.fireEvent("on"+f,I)}}}).call(this,typeof M<"u"?M:typeof self<"u"?self:typeof window<"u"?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(T,E,b){(function(s){var h=[],e="",a=/^on/;for(e in s)a.test(e)&&h.push(e.slice(2));E.exports=h}).call(this,typeof M<"u"?M:typeof self<"u"?self:typeof window<"u"?window:{})},{}],8:[function(T,E,b){(function(s){var h=s.CustomEvent;E.exports=function(){try{var e=new h("cat",{detail:{foo:"bar"}});return e.type==="cat"&&e.detail.foo==="bar"}catch{}}()?h:typeof document<"u"&&typeof document.createEvent=="function"?function(e,a){var i=document.createEvent("CustomEvent");return a?i.initCustomEvent(e,a.bubbles,a.cancelable,a.detail):i.initCustomEvent(e,!1,!1,void 0),i}:function(e,a){var i=document.createEventObject();return i.type=e,a?(i.bubbles=!!a.bubbles,i.cancelable=!!a.cancelable,i.detail=a.detail):(i.bubbles=!1,i.cancelable=!1,i.detail=void 0),i}}).call(this,typeof M<"u"?M:typeof self<"u"?self:typeof window<"u"?window:{})},{}],9:[function(T,e,b){var s,h,e=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function d(m){if(s===setTimeout)return setTimeout(m,0);if((s===a||!s)&&setTimeout)return s=setTimeout,setTimeout(m,0);try{return s(m,0)}catch{try{return s.call(null,m,0)}catch{return s.call(this,m,0)}}}(function(){try{s=typeof setTimeout=="function"?setTimeout:a}catch{s=a}try{h=typeof clearTimeout=="function"?clearTimeout:i}catch{h=i}})();var r,g=[],o=!1,f=-1;function w(){o&&r&&(o=!1,r.length?g=r.concat(g):f=-1,g.length&&I())}function I(){if(!o){var m=d(w);o=!0;for(var N=g.length;N;){for(r=g,g=[];++f<N;)r&&r[f].run();f=-1,N=g.length}r=null,o=!1,function(O){if(h===clearTimeout)return clearTimeout(O);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(O);try{h(O)}catch{try{return h.call(null,O)}catch{return h.call(this,O)}}}(m)}}function B(m,N){this.fun=m,this.array=N}function _(){}e.nextTick=function(m){var N=new Array(arguments.length-1);if(1<arguments.length)for(var O=1;O<arguments.length;O++)N[O-1]=arguments[O];g.push(new B(m,N)),g.length!==1||o||d(I)},B.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=_,e.addListener=_,e.once=_,e.off=_,e.removeListener=_,e.removeAllListeners=_,e.emit=_,e.prependListener=_,e.prependOnceListener=_,e.listeners=function(m){return[]},e.binding=function(m){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(m){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},{}],10:[function(T,E,b){(function(s){var h=typeof s=="function"?function(e){s(e)}:function(e){setTimeout(e,0)};E.exports=h}).call(this,T("timers").setImmediate)},{timers:11}],11:[function(T,E,b){(function(s,h){var e=T("process/browser.js").nextTick,a=Function.prototype.apply,i=Array.prototype.slice,d={},r=0;function g(o,f){this._id=o,this._clearFn=f}b.setTimeout=function(){return new g(a.call(setTimeout,window,arguments),clearTimeout)},b.setInterval=function(){return new g(a.call(setInterval,window,arguments),clearInterval)},b.clearTimeout=b.clearInterval=function(o){o.close()},g.prototype.unref=g.prototype.ref=function(){},g.prototype.close=function(){this._clearFn.call(window,this._id)},b.enroll=function(o,f){clearTimeout(o._idleTimeoutId),o._idleTimeout=f},b.unenroll=function(o){clearTimeout(o._idleTimeoutId),o._idleTimeout=-1},b._unrefActive=b.active=function(o){clearTimeout(o._idleTimeoutId);var f=o._idleTimeout;0<=f&&(o._idleTimeoutId=setTimeout(function(){o._onTimeout&&o._onTimeout()},f))},b.setImmediate=typeof s=="function"?s:function(o){var f=r++,w=!(arguments.length<2)&&i.call(arguments,1);return d[f]=!0,e(function(){d[f]&&(w?o.apply(null,w):o.call(null),b.clearImmediate(f))}),f},b.clearImmediate=typeof h=="function"?h:function(o){delete d[o]}}).call(this,T("timers").setImmediate,T("timers").clearImmediate)},{"process/browser.js":9,timers:11}]},{},[2])(2)})})(wn);
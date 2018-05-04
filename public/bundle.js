!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(){}function o(t,e){for(var n in e)t[n]=e[n];return t}function s(t){return document.createElement(t)}function a(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(t){return document.createTextNode(t)}function c(t,e,n){t.setAttribute(e,n)}function l(t,e){t.removeAttribute(e)}function f(t,e){t.u(),t.d(),e[t.key]=null}function d(t,e){t.o(function(){f(t,e)})}var h={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function p(t){return t}function g(t,e,n,r,i,o){for(var s="{\n",a=0;a<=1;a+=16.666/r){s+=100*a+"%{"+o(t+n*i(a))+"}\n"}return s+"100% {"+o(e)+"}\n}"}function m(t){for(var e=5381,n=t.length;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}var v={running:!1,transitions:[],bound:null,stylesheet:null,activeRules:{},add:function(t){this.transitions.push(t),this.running||(this.running=!0,requestAnimationFrame(this.bound||(this.bound=this.next.bind(this))))},addRule:function(t,e){this.activeRules[e]||(this.activeRules[e]=!0,this.stylesheet.insertRule("@keyframes "+e+" "+t,this.stylesheet.cssRules.length))},next:function(){this.running=!1;for(var t=window.performance.now(),e=this.transitions.length;e--;){var n=this.transitions[e];n.program&&t>=n.program.end&&n.done(),n.pending&&t>=n.pending.start&&n.start(n.pending),n.running?(n.update(t),this.running=!0):n.pending||this.transitions.splice(e,1)}if(this.running)requestAnimationFrame(this.bound);else if(this.stylesheet){for(e=this.stylesheet.cssRules.length;e--;)this.stylesheet.deleteRule(e);this.activeRules={}}},deleteRule:function(t,e){t.style.animation=t.style.animation.split(", ").filter(function(t){return-1===t.indexOf(e)}).join(", ")}};function b(){return Object.create(null)}function _(t){this.destroy=i,this.fire("destroy"),this.set=i,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=null,this._state={}}function y(t){_.call(this,t),this.destroy=function(){console.warn("Component was already destroyed")}}function O(t,e){return t!=t?e==e:t!==e||t&&"object"===(void 0===t?"undefined":r(t))||"function"==typeof t}function j(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var i=n[r];i.__calling||(i.__calling=!0,i.call(this,e),i.__calling=!1)}}function k(){return this._state}function w(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function x(t){this._set(o({},t)),this.root._lock||(this.root._lock=!0,C(this.root._beforecreate),C(this.root._oncreate),C(this.root._aftercreate),this.root._lock=!1)}function S(t){var e=this._state,n={},r=!1;for(var i in t)this._differs(t[i],e[i])&&(n[i]=r=!0);r&&(this._state=o(o({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))}function N(t){if("object"!==(void 0===t?"undefined":r(t)))throw new Error(this._debugName+".set was called without an object of data key-values to update.");this._checkReadOnly(t),x.call(this,t)}function C(t){for(;t&&t.length;)t.shift()()}function A(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}function E(){this._fragment&&this._fragment.u()}var R={destroy:_,get:k,fire:j,on:w,set:x,_recompute:i,_set:S,_mount:A,_unmount:E,_differs:O},P={destroy:y,get:k,fire:j,on:w,set:N,_recompute:i,_set:S,_mount:A,_unmount:E,_differs:O};e.blankObject=b,e.destroy=_,e.destroyDev=y,e._differs=O,e._differsImmutable=function(t,e){return t!=t?e==e:t!==e},e.fire=j,e.get=k,e.init=function(t,e){t._handlers=b(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store},e.on=w,e.run=function(t){t()},e.set=x,e._set=S,e.setDev=N,e.callAll=C,e._mount=A,e._unmount=E,e.isPromise=function(t){return t&&"function"==typeof t.then},e.PENDING={},e.SUCCESS={},e.FAILURE={},e.removeFromStore=function(){this.store._remove(this)},e.proto=R,e.protoDev=P,e.appendNode=function(t,e){e.appendChild(t)},e.insertNode=function(t,e,n){e.insertBefore(t,n)},e.detachNode=function(t){t.parentNode.removeChild(t)},e.detachBetween=function(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)},e.detachBefore=function(t){for(;t.previousSibling;)t.parentNode.removeChild(t.previousSibling)},e.detachAfter=function(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)},e.reinsertBetween=function(t,e,n){for(;t.nextSibling&&t.nextSibling!==e;)n.appendChild(t.parentNode.removeChild(t.nextSibling))},e.reinsertChildren=function(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)},e.reinsertAfter=function(t,e){for(;t.nextSibling;)e.appendChild(t.nextSibling)},e.reinsertBefore=function(t,e){for(var n=t.parentNode;n.firstChild!==t;)e.appendChild(n.firstChild)},e.destroyEach=function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()},e.createFragment=function(){return document.createDocumentFragment()},e.createElement=s,e.createSvgElement=a,e.createText=u,e.createComment=function(){return document.createComment("")},e.addListener=function(t,e,n){t.addEventListener(e,n,!1)},e.removeListener=function(t,e,n){t.removeEventListener(e,n,!1)},e.setAttribute=c,e.setAttributes=function(t,e){for(var n in e)n in t?t[n]=e[n]:void 0===e[n]?l(t,n):c(t,n,e[n])},e.removeAttribute=l,e.setXlinkAttribute=function(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)},e.getBindingGroupValue=function(t){for(var e=[],n=0;n<t.length;n+=1)t[n].checked&&e.push(t[n].__value);return e},e.toNumber=function(t){return""===t?void 0:+t},e.timeRangesToArray=function(t){for(var e=[],n=0;n<t.length;n+=1)e.push({start:t.start(n),end:t.end(n)});return e},e.children=function(t){return Array.from(t.childNodes)},e.claimElement=function(t,e,n,r){for(var i=0;i<t.length;i+=1){var o=t[i];if(o.nodeName===e){for(var u=0;u<o.attributes.length;u+=1){var c=o.attributes[u];n[c.name]||o.removeAttribute(c.name)}return t.splice(i,1)[0]}}return r?a(e):s(e)},e.claimText=function(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=e,t.splice(n,1)[0]}return u(e)},e.setInputType=function(t,e){try{t.type=e}catch(t){}},e.setStyle=function(t,e,n){t.style.setProperty(e,n)},e.selectOption=function(t,e){for(var n=0;n<t.options.length;n+=1){var r=t.options[n];if(r.__value===e)return void(r.selected=!0)}},e.selectOptions=function(t,e){for(var n=0;n<t.options.length;n+=1){var r=t.options[n];r.selected=~e.indexOf(r.__value)}},e.selectValue=function(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value},e.selectMultipleValue=function(t){return[].map.call(t.querySelectorAll(":checked"),function(t){return t.__value})},e.addResizeListener=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");var n=document.createElement("object");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.type="text/html";var r=void 0;return n.onload=function(){(r=n.contentDocument.defaultView).addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:function(){r.removeEventListener("resize",e),t.removeChild(n)}}},e.destroyBlock=f,e.outroAndDestroyBlock=d,e.updateKeyedEach=function(t,e,n,r,i,o,s,a,u,c,l,h,p,g){for(var m=t.length,v=s.length,b=m,_={};b--;)_[t[b].key]=b;var y=[],O={},j={};for(b=v;b--;){var k=g(o,s,b),w=r(k),x=a[w];x?i&&x.p(n,k):(x=l(e,w,k)).c(),y[b]=O[w]=x,w in _&&(j[w]=Math.abs(b-_[w]))}var S={},N={},C=c?d:f;function A(t){t[h](u,p),a[t.key]=t,p=t.first,v--}for(;m&&v;){var E=y[v-1],R=t[m-1],P=E.key,T=R.key;E===R?(p=E.first,m--,v--):O[T]?!a[P]||S[P]?A(E):N[T]?m--:j[P]>j[T]?(N[P]=!0,A(E)):(S[T]=!0,m--):(C(R,a),m--)}for(;m--;)O[(R=t[m]).key]||C(R,a);for(;v;)A(y[v-1]);return y},e.getSpreadUpdate=function(t,e){for(var n={},r={},i={},o=t.length;o--;){var s=t[o],a=e[o];if(a){for(var u in s)u in a||(r[u]=1);for(var u in a)i[u]||(n[u]=a[u],i[u]=1);t[o]=a}else for(var u in s)i[u]=1}for(var u in r)u in n||(n[u]=void 0);return n},e.spread=function(t){var e=Object.assign.apply(Object,[{}].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t))),n="";return Object.keys(e).forEach(function(t){var r=e[t];void 0!==r&&(!0===r&&(n+=" "+t),n+=" "+t+"="+JSON.stringify(r))}),n},e.escaped=h,e.escape=function(t){return String(t).replace(/["'&<>]/g,function(t){return h[t]})},e.each=function(t,e,n){for(var r="",i=0;i<t.length;i+=1)r+=n(e(t[i],i));return r},e.missingComponent={_render:function(){return""}},e.linear=p,e.generateRule=g,e.hash=m,e.wrapTransition=function(t,e,n,r,i,o){var a,u=n(e,r),c=u.duration||300,l=u.easing||p;if(u.css&&!v.stylesheet){var f=s("style");document.head.appendChild(f),v.stylesheet=f.sheet}return i&&(u.css&&u.delay&&(a=e.style.cssText,e.style.cssText+=u.css(0)),u.tick&&u.tick(0)),{t:i?0:1,running:!1,program:null,pending:null,run:function(t,e){var n={start:window.performance.now()+(u.delay||0),intro:t,callback:e};u.delay?this.pending=n:this.start(n),this.running||(this.running=!0,v.add(this))},start:function(n){t.fire(n.intro?"intro.start":"outro.start",{node:e}),n.a=this.t,n.b=n.intro?1:0,n.delta=n.b-n.a,n.duration=c*Math.abs(n.b-n.a),n.end=n.start+n.duration,u.css&&(u.delay&&(e.style.cssText=a),n.rule=g(n.a,n.b,n.delta,n.duration,l,u.css),v.addRule(n.rule,n.name="__svelte_"+m(n.rule)),e.style.animation=(e.style.animation||"").split(", ").filter(function(t){return t&&(n.delta<0||!/__svelte/.test(t))}).concat(n.name+" "+n.duration+"ms linear 1 forwards").join(", ")),this.program=n,this.pending=null},update:function(t){var e=this.program;if(e){var n=t-e.start;this.t=e.a+e.delta*l(n/e.duration),u.tick&&u.tick(this.t)}},done:function(){var t=this.program;this.t=t.b,u.tick&&u.tick(this.t),u.css&&v.deleteRule(e,t.name),t.callback(),t=null,this.running=!!this.pending},abort:function(){u.tick&&u.tick(1),u.css&&v.deleteRule(e,this.program.name),this.program=this.pending=null,this.running=!1}}},e.transitionManager=v,e.noop=i,e.assign=o,e.assignTrue=function(t,e){for(var n in e)t[n]=1;return t}},function(t,e,n){"use strict";n.r(e);var r=n(0);var i={toggleValue(t){"login"==t?(console.log("working"),this.set({loginProp:"logout"})):this.set({loginProp:"login"})}};function o(t){Object(r.init)(this,t),this._state=Object(r.assign)({loginProp:"login"},t.data),this._fragment=function(t,e){var n;function i(n){t.toggleValue(e.loginProp)}return{c(){n=Object(r.createElement)("input"),Object(r.addListener)(n,"click",i),Object(r.setAttribute)(n,"type","button"),n.value=e.loginProp},m(t,e){Object(r.insertNode)(n,t,e)},p(t,r){e=r,t.loginProp&&(n.value=e.loginProp)},u(){Object(r.detachNode)(n)},d(){Object(r.removeListener)(n,"click",i)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}Object(r.assign)(o.prototype,r.proto),Object(r.assign)(o.prototype,i),e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(1);var o=new((r=i)&&r.__esModule?r:{default:r}).default({target:document.body});e.default=o},function(t,e,n){"use strict";n.r(e);var r=n(0);function i(t){Object(r.init)(this,t),this._state=Object(r.assign)({name:"Unknown"},t.data),this._fragment=function(t,e){var n,i,o,s,a,u=!1;function c(){u=!0,t.set({name:n.value}),u=!1}return{c(){n=Object(r.createElement)("input"),i=Object(r.createText)("\r\n"),o=Object(r.createElement)("p"),s=Object(r.createText)("Hello "),a=Object(r.createText)(e.name),Object(r.addListener)(n,"input",c),n.placeholder="enter your name"},m(t,u){Object(r.insertNode)(n,t,u),n.value=e.name,Object(r.insertNode)(i,t,u),Object(r.insertNode)(o,t,u),Object(r.appendNode)(s,o),Object(r.appendNode)(a,o)},p(t,e){u||(n.value=e.name),t.name&&(a.data=e.name)},u(){Object(r.detachNode)(n),Object(r.detachNode)(i),Object(r.detachNode)(o)},d(){Object(r.removeListener)(n,"input",c)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}Object(r.assign)(i.prototype,r.proto),e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3);var o=new((r=i)&&r.__esModule?r:{default:r}).default({target:document.body});o.on("state",function(t){t.changed;var e=t.current;t.previous;console.log("State changed",e.name)}),e.default=o},function(t,e,n){"use strict";r(n(4)),r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}}]);
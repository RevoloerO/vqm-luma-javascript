(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function u(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(d){if(d.ep)return;d.ep=!0;const m=u(d);fetch(d.href,m)}})();function ny(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xc={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function ly(){if(Bh)return Ni;Bh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(s,d,m){var y=null;if(m!==void 0&&(y=""+m),d.key!==void 0&&(y=""+d.key),"key"in d){m={};for(var b in d)b!=="key"&&(m[b]=d[b])}else m=d;return d=m.ref,{$$typeof:o,type:s,key:y,ref:d!==void 0?d:null,props:m}}return Ni.Fragment=r,Ni.jsx=u,Ni.jsxs=u,Ni}var zh;function iy(){return zh||(zh=1,xc.exports=ly()),xc.exports}var h=iy(),wc={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function oy(){if(Hh)return he;Hh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.iterator;function M(A){return A===null||typeof A!="object"?null:(A=C&&A[C]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function K(A,L,Z){this.props=A,this.context=L,this.refs=q,this.updater=Z||k}K.prototype.isReactComponent={},K.prototype.setState=function(A,L){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,L,"setState")},K.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function z(){}z.prototype=K.prototype;function ee(A,L,Z){this.props=A,this.context=L,this.refs=q,this.updater=Z||k}var P=ee.prototype=new z;P.constructor=ee,B(P,K.prototype),P.isPureReactComponent=!0;var ie=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Ae=Object.prototype.hasOwnProperty;function fe(A,L,Z,X,ne,le){return Z=le.ref,{$$typeof:o,type:A,key:L,ref:Z!==void 0?Z:null,props:le}}function Se(A,L){return fe(A.type,L,void 0,void 0,void 0,A.props)}function V(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function I(A){var L={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return L[Z]})}var Y=/\/+/g;function Q(A,L){return typeof A=="object"&&A!==null&&A.key!=null?I(""+A.key):L.toString(36)}function me(){}function je(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(me,me):(A.status="pending",A.then(function(L){A.status==="pending"&&(A.status="fulfilled",A.value=L)},function(L){A.status==="pending"&&(A.status="rejected",A.reason=L)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Ue(A,L,Z,X,ne){var le=typeof A;(le==="undefined"||le==="boolean")&&(A=null);var se=!1;if(A===null)se=!0;else switch(le){case"bigint":case"string":case"number":se=!0;break;case"object":switch(A.$$typeof){case o:case r:se=!0;break;case S:return se=A._init,Ue(se(A._payload),L,Z,X,ne)}}if(se)return ne=ne(A),se=X===""?"."+Q(A,0):X,ie(ne)?(Z="",se!=null&&(Z=se.replace(Y,"$&/")+"/"),Ue(ne,L,Z,"",function(It){return It})):ne!=null&&(V(ne)&&(ne=Se(ne,Z+(ne.key==null||A&&A.key===ne.key?"":(""+ne.key).replace(Y,"$&/")+"/")+se)),L.push(ne)),1;se=0;var it=X===""?".":X+":";if(ie(A))for(var xe=0;xe<A.length;xe++)X=A[xe],le=it+Q(X,xe),se+=Ue(X,L,Z,le,ne);else if(xe=M(A),typeof xe=="function")for(A=xe.call(A),xe=0;!(X=A.next()).done;)X=X.value,le=it+Q(X,xe++),se+=Ue(X,L,Z,le,ne);else if(le==="object"){if(typeof A.then=="function")return Ue(je(A),L,Z,X,ne);throw L=String(A),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return se}function _(A,L,Z){if(A==null)return A;var X=[],ne=0;return Ue(A,X,"","",function(le){return L.call(Z,le,ne++)}),X}function J(A){if(A._status===-1){var L=A._result;L=L(),L.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=L)}if(A._status===1)return A._result.default;throw A._result}var oe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Ce(){}return he.Children={map:_,forEach:function(A,L,Z){_(A,function(){L.apply(this,arguments)},Z)},count:function(A){var L=0;return _(A,function(){L++}),L},toArray:function(A){return _(A,function(L){return L})||[]},only:function(A){if(!V(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},he.Component=K,he.Fragment=u,he.Profiler=d,he.PureComponent=ee,he.StrictMode=s,he.Suspense=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,he.__COMPILER_RUNTIME={__proto__:null,c:function(A){return F.H.useMemoCache(A)}},he.cache=function(A){return function(){return A.apply(null,arguments)}},he.cloneElement=function(A,L,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var X=B({},A.props),ne=A.key,le=void 0;if(L!=null)for(se in L.ref!==void 0&&(le=void 0),L.key!==void 0&&(ne=""+L.key),L)!Ae.call(L,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&L.ref===void 0||(X[se]=L[se]);var se=arguments.length-2;if(se===1)X.children=Z;else if(1<se){for(var it=Array(se),xe=0;xe<se;xe++)it[xe]=arguments[xe+2];X.children=it}return fe(A.type,ne,void 0,void 0,le,X)},he.createContext=function(A){return A={$$typeof:y,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:m,_context:A},A},he.createElement=function(A,L,Z){var X,ne={},le=null;if(L!=null)for(X in L.key!==void 0&&(le=""+L.key),L)Ae.call(L,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ne[X]=L[X]);var se=arguments.length-2;if(se===1)ne.children=Z;else if(1<se){for(var it=Array(se),xe=0;xe<se;xe++)it[xe]=arguments[xe+2];ne.children=it}if(A&&A.defaultProps)for(X in se=A.defaultProps,se)ne[X]===void 0&&(ne[X]=se[X]);return fe(A,le,void 0,void 0,null,ne)},he.createRef=function(){return{current:null}},he.forwardRef=function(A){return{$$typeof:b,render:A}},he.isValidElement=V,he.lazy=function(A){return{$$typeof:S,_payload:{_status:-1,_result:A},_init:J}},he.memo=function(A,L){return{$$typeof:f,type:A,compare:L===void 0?null:L}},he.startTransition=function(A){var L=F.T,Z={};F.T=Z;try{var X=A(),ne=F.S;ne!==null&&ne(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ce,oe)}catch(le){oe(le)}finally{F.T=L}},he.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},he.use=function(A){return F.H.use(A)},he.useActionState=function(A,L,Z){return F.H.useActionState(A,L,Z)},he.useCallback=function(A,L){return F.H.useCallback(A,L)},he.useContext=function(A){return F.H.useContext(A)},he.useDebugValue=function(){},he.useDeferredValue=function(A,L){return F.H.useDeferredValue(A,L)},he.useEffect=function(A,L,Z){var X=F.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(A,L)},he.useId=function(){return F.H.useId()},he.useImperativeHandle=function(A,L,Z){return F.H.useImperativeHandle(A,L,Z)},he.useInsertionEffect=function(A,L){return F.H.useInsertionEffect(A,L)},he.useLayoutEffect=function(A,L){return F.H.useLayoutEffect(A,L)},he.useMemo=function(A,L){return F.H.useMemo(A,L)},he.useOptimistic=function(A,L){return F.H.useOptimistic(A,L)},he.useReducer=function(A,L,Z){return F.H.useReducer(A,L,Z)},he.useRef=function(A){return F.H.useRef(A)},he.useState=function(A){return F.H.useState(A)},he.useSyncExternalStore=function(A,L,Z){return F.H.useSyncExternalStore(A,L,Z)},he.useTransition=function(){return F.H.useTransition()},he.version="19.1.0",he}var Yh;function $c(){return Yh||(Yh=1,wc.exports=oy()),wc.exports}var w=$c();const ry=ny(w);var Cc={exports:{}},Ri={},Nc={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function sy(){return Gh||(Gh=1,function(o){function r(_,J){var oe=_.length;_.push(J);e:for(;0<oe;){var Ce=oe-1>>>1,A=_[Ce];if(0<d(A,J))_[Ce]=J,_[oe]=A,oe=Ce;else break e}}function u(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var J=_[0],oe=_.pop();if(oe!==J){_[0]=oe;e:for(var Ce=0,A=_.length,L=A>>>1;Ce<L;){var Z=2*(Ce+1)-1,X=_[Z],ne=Z+1,le=_[ne];if(0>d(X,oe))ne<A&&0>d(le,X)?(_[Ce]=le,_[ne]=oe,Ce=ne):(_[Ce]=X,_[Z]=oe,Ce=Z);else if(ne<A&&0>d(le,oe))_[Ce]=le,_[ne]=oe,Ce=ne;else break e}}return J}function d(_,J){var oe=_.sortIndex-J.sortIndex;return oe!==0?oe:_.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var y=Date,b=y.now();o.unstable_now=function(){return y.now()-b}}var g=[],f=[],S=1,C=null,M=3,k=!1,B=!1,q=!1,K=!1,z=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function ie(_){for(var J=u(f);J!==null;){if(J.callback===null)s(f);else if(J.startTime<=_)s(f),J.sortIndex=J.expirationTime,r(g,J);else break;J=u(f)}}function F(_){if(q=!1,ie(_),!B)if(u(g)!==null)B=!0,Ae||(Ae=!0,Q());else{var J=u(f);J!==null&&Ue(F,J.startTime-_)}}var Ae=!1,fe=-1,Se=5,V=-1;function I(){return K?!0:!(o.unstable_now()-V<Se)}function Y(){if(K=!1,Ae){var _=o.unstable_now();V=_;var J=!0;try{e:{B=!1,q&&(q=!1,ee(fe),fe=-1),k=!0;var oe=M;try{t:{for(ie(_),C=u(g);C!==null&&!(C.expirationTime>_&&I());){var Ce=C.callback;if(typeof Ce=="function"){C.callback=null,M=C.priorityLevel;var A=Ce(C.expirationTime<=_);if(_=o.unstable_now(),typeof A=="function"){C.callback=A,ie(_),J=!0;break t}C===u(g)&&s(g),ie(_)}else s(g);C=u(g)}if(C!==null)J=!0;else{var L=u(f);L!==null&&Ue(F,L.startTime-_),J=!1}}break e}finally{C=null,M=oe,k=!1}J=void 0}}finally{J?Q():Ae=!1}}}var Q;if(typeof P=="function")Q=function(){P(Y)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,je=me.port2;me.port1.onmessage=Y,Q=function(){je.postMessage(null)}}else Q=function(){z(Y,0)};function Ue(_,J){fe=z(function(){_(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_){_.callback=null},o.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Se=0<_?Math.floor(1e3/_):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_next=function(_){switch(M){case 1:case 2:case 3:var J=3;break;default:J=M}var oe=M;M=J;try{return _()}finally{M=oe}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(_,J){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var oe=M;M=_;try{return J()}finally{M=oe}},o.unstable_scheduleCallback=function(_,J,oe){var Ce=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ce+oe:Ce):oe=Ce,_){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=oe+A,_={id:S++,callback:J,priorityLevel:_,startTime:oe,expirationTime:A,sortIndex:-1},oe>Ce?(_.sortIndex=oe,r(f,_),u(g)===null&&_===u(f)&&(q?(ee(fe),fe=-1):q=!0,Ue(F,oe-Ce))):(_.sortIndex=A,r(g,_),B||k||(B=!0,Ae||(Ae=!0,Q()))),_},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(_){var J=M;return function(){var oe=M;M=J;try{return _.apply(this,arguments)}finally{M=oe}}}}(Rc)),Rc}var qh;function cy(){return qh||(qh=1,Nc.exports=sy()),Nc.exports}var Mc={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function uy(){if(Kh)return mt;Kh=1;var o=$c();function r(g){var f="https://react.dev/errors/"+g;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)f+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(g,f,S){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:""+C,children:g,containerInfo:f,implementation:S}}var y=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(g,f){if(g==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mt.createPortal=function(g,f){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(r(299));return m(g,f,null,S)},mt.flushSync=function(g){var f=y.T,S=s.p;try{if(y.T=null,s.p=2,g)return g()}finally{y.T=f,s.p=S,s.d.f()}},mt.preconnect=function(g,f){typeof g=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,s.d.C(g,f))},mt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},mt.preinit=function(g,f){if(typeof g=="string"&&f&&typeof f.as=="string"){var S=f.as,C=b(S,f.crossOrigin),M=typeof f.integrity=="string"?f.integrity:void 0,k=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;S==="style"?s.d.S(g,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:C,integrity:M,fetchPriority:k}):S==="script"&&s.d.X(g,{crossOrigin:C,integrity:M,fetchPriority:k,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},mt.preinitModule=function(g,f){if(typeof g=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var S=b(f.as,f.crossOrigin);s.d.M(g,{crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&s.d.M(g)},mt.preload=function(g,f){if(typeof g=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var S=f.as,C=b(S,f.crossOrigin);s.d.L(g,S,{crossOrigin:C,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},mt.preloadModule=function(g,f){if(typeof g=="string")if(f){var S=b(f.as,f.crossOrigin);s.d.m(g,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else s.d.m(g)},mt.requestFormReset=function(g){s.d.r(g)},mt.unstable_batchedUpdates=function(g,f){return g(f)},mt.useFormState=function(g,f,S){return y.H.useFormState(g,f,S)},mt.useFormStatus=function(){return y.H.useHostTransitionStatus()},mt.version="19.1.0",mt}var Vh;function dy(){if(Vh)return Mc.exports;Vh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Mc.exports=uy(),Mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function fy(){if(Xh)return Ri;Xh=1;var o=cy(),r=$c(),u=dy();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return b(l),e;if(i===n)return b(l),t;i=i.sibling}throw Error(s(188))}if(a.return!==n.return)a=l,n=i;else{for(var c=!1,p=l.child;p;){if(p===a){c=!0,a=l,n=i;break}if(p===n){c=!0,n=l,a=i;break}p=p.sibling}if(!c){for(p=i.child;p;){if(p===a){c=!0,a=i,n=l;break}if(p===n){c=!0,n=i,a=l;break}p=p.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,C=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case F:return"Suspense";case Ae:return"SuspenseList";case V:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case P:return(e.displayName||"Context")+".Provider";case ee:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var Ue=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Ce=[],A=-1;function L(e){return{current:e}}function Z(e){0>A||(e.current=Ce[A],Ce[A]=null,A--)}function X(e,t){A++,Ce[A]=e.current,e.current=t}var ne=L(null),le=L(null),se=L(null),it=L(null);function xe(e,t){switch(X(se,t),X(le,e),X(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dh(t),e=fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ne),X(ne,e)}function It(){Z(ne),Z(le),Z(se)}function pn(e){e.memoizedState!==null&&X(it,e);var t=ne.current,a=fh(t,e.type);t!==a&&(X(le,e),X(ne,a))}function mn(e){le.current===e&&(Z(ne),Z(le)),it.current===e&&(Z(it),Ai._currentValue=oe)}var Vn=Object.prototype.hasOwnProperty,ea=o.unstable_scheduleCallback,Ha=o.unstable_cancelCallback,da=o.unstable_shouldYield,Ol=o.unstable_requestPaint,St=o.unstable_now,Ya=o.unstable_getCurrentPriorityLevel,gn=o.unstable_ImmediatePriority,yn=o.unstable_UserBlockingPriority,vn=o.unstable_NormalPriority,Hi=o.unstable_LowPriority,Yi=o.unstable_IdlePriority,Dl=o.log,bn=o.unstable_setDisableYieldValue,Lt=null,Be=null;function Ut(e){if(typeof Dl=="function"&&bn(e),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(Lt,e)}catch{}}var dt=Math.clz32?Math.clz32:qi,Gi=Math.log,kl=Math.LN2;function qi(e){return e>>>=0,e===0?32:31-(Gi(e)/kl|0)|0}var fa=256,ha=4194304;function ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~i,n!==0?l=ot(n):(c&=p,c!==0?l=ot(c):a||(a=p&~e,a!==0&&(l=ot(a))))):(p=n&~i,p!==0?l=ot(p):c!==0?l=ot(c):a||(a=n&~e,a!==0&&(l=ot(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function pa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _l(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(){var e=fa;return fa<<=1,(fa&4194048)===0&&(fa=256),e}function Sn(){var e=ha;return ha<<=1,(ha&62914560)===0&&(ha=4194304),e}function Ga(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function En(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function An(e,t,a,n,l,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(a=c&~a;0<a;){var j=31-dt(a),H=1<<j;p[j]=0,v[j]=-1;var O=R[j];if(O!==null)for(R[j]=null,j=0;j<O.length;j++){var D=O[j];D!==null&&(D.lane&=-536870913)}a&=~H}n!==0&&Vi(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Vi(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-dt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Xi(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-dt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function He(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ta(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qi(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Dh(e.type))}function Ji(e,t){var a=J.p;try{return J.p=e,t()}finally{J.p=a}}var Bt=Math.random().toString(36).slice(2),$e="__reactFiber$"+Bt,rt="__reactProps$"+Bt,qa="__reactContainer$"+Bt,Et="__reactEvents$"+Bt,ma="__reactListeners$"+Bt,Ii="__reactHandles$"+Bt,jl="__reactResources$"+Bt,ga="__reactMarker$"+Bt;function Xn(e){delete e[$e],delete e[rt],delete e[Et],delete e[ma],delete e[Ii]}function ft(e){var t=e[$e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[qa]||a[$e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=gh(e);e!==null;){if(a=e[$e])return a;e=gh(e)}return t}e=a,a=e.parentNode}return null}function ya(e){if(e=e[$e]||e[qa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ka(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function va(e){var t=e[jl];return t||(t=e[jl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[ga]=!0}var Zi=new Set,te={};function E(e,t){G(e,t),G(e+"Capture",t)}function G(e,t){for(te[e]=t,e=0;e<t.length;e++)Zi.add(t[e])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Pe={};function qe(e){return Vn.call(Pe,e)?!0:Vn.call(ke,e)?!1:W.test(e)?Pe[e]=!0:(ke[e]=!0,!1)}function We(e,t,a){if(qe(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function At(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ht(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Tn,Ie;function ba(e){if(Tn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tn=t&&t[1]||"",Ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tn+e+Ie}var Qn=!1;function Sr(e,t){if(!e||Qn)return"";Qn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(D){var O=D}Reflect.construct(e,[],H)}else{try{H.call()}catch(D){O=D}e.call(H.prototype)}}else{try{throw Error()}catch(D){O=D}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(D){if(D&&O&&typeof D.stack=="string")return[D.stack,O.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),c=i[0],p=i[1];if(c&&p){var v=c.split(`
`),R=p.split(`
`);for(l=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(n===v.length||l===R.length)for(n=v.length-1,l=R.length-1;1<=n&&0<=l&&v[n]!==R[l];)l--;for(;1<=n&&0<=l;n--,l--)if(v[n]!==R[l]){if(n!==1||l!==1)do if(n--,l--,0>l||v[n]!==R[l]){var j=`
`+v[n].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=n&&0<=l);break}}}finally{Qn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function $p(e){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Sr(e.type,!1);case 11:return Sr(e.type.render,!1);case 1:return Sr(e.type,!0);case 31:return ba("Activity");default:return""}}function lu(e){try{var t="";do t+=$p(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pp(e){var t=iu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){e._valueTracker||(e._valueTracker=Pp(e))}function ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=iu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wp=/[\n"\\]/g;function Ht(e){return e.replace(Wp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Er(e,t,a,n,l,i,c,p){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Ar(e,c,zt(t)):a!=null?Ar(e,c,zt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+zt(p):e.removeAttribute("name")}function ru(e,t,a,n,l,i,c,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+zt(a):"",t=t!=null?""+zt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Ar(e,t,a){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function su(e,t,a){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+zt(a):""}function cu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(s(92));if(Ue(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=zt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function In(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||em.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function du(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&uu(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&uu(e,i,t[i])}function Tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xr=null;function wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zn=null,Fn=null;function fu(e){var t=ya(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Er(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[rt]||null;if(!l)throw Error(s(90));Er(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&ou(n)}break e;case"textarea":su(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Jn(e,!!a.multiple,t,!1)}}}var Cr=!1;function hu(e,t,a){if(Cr)return e(t,a);Cr=!0;try{var n=e(t);return n}finally{if(Cr=!1,(Zn!==null||Fn!==null)&&(zo(),Zn&&(t=Zn,e=Fn,Fn=Zn=null,fu(t),e)))for(t=0;t<e.length;t++)fu(e[t])}}function Ll(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nr=!1;if(Sa)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){Nr=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{Nr=!1}var Va=null,Rr=null,Wi=null;function pu(){if(Wi)return Wi;var e,t=Rr,a=t.length,n,l="value"in Va?Va.value:Va.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var c=a-e;for(n=1;n<=c&&t[a-n]===l[i-n];n++);return Wi=l.slice(e,1<n?1-n:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function mu(){return!1}function Tt(e){function t(a,n,l,i,c){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:mu,this.isPropagationStopped=mu,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Tt(xn),Bl=S({},xn,{view:0,detail:0}),nm=Tt(Bl),Mr,Or,zl,no=S({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Mr=e.screenX-zl.screenX,Or=e.screenY-zl.screenY):Or=Mr=0,zl=e),Mr)},movementY:function(e){return"movementY"in e?e.movementY:Or}}),gu=Tt(no),lm=S({},no,{dataTransfer:0}),im=Tt(lm),om=S({},Bl,{relatedTarget:0}),Dr=Tt(om),rm=S({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Tt(rm),cm=S({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),um=Tt(cm),dm=S({},xn,{data:0}),yu=Tt(dm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pm[e])?!!t[e]:!1}function kr(){return mm}var gm=S({},Bl,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kr,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Tt(gm),vm=S({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=Tt(vm),bm=S({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kr}),Sm=Tt(bm),Em=S({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=Tt(Em),Tm=S({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=Tt(Tm),wm=S({},xn,{newState:0,oldState:0}),Cm=Tt(wm),Nm=[9,13,27,32],_r=Sa&&"CompositionEvent"in window,Hl=null;Sa&&"documentMode"in document&&(Hl=document.documentMode);var Rm=Sa&&"TextEvent"in window&&!Hl,bu=Sa&&(!_r||Hl&&8<Hl&&11>=Hl),Su=" ",Eu=!1;function Au(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Mm(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Eu=!0,Su);case"textInput":return e=t.data,e===Su&&Eu?null:e;default:return null}}function Om(e,t){if($n)return e==="compositionend"||!_r&&Au(e,t)?(e=pu(),Wi=Rr=Va=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bu&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function wu(e,t,a,n){Zn?Fn?Fn.push(n):Fn=[n]:Zn=n,t=Vo(t,"onChange"),0<t.length&&(a=new ao("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Yl=null,Gl=null;function km(e){oh(e,0)}function lo(e){var t=Ka(e);if(ou(t))return e}function Cu(e,t){if(e==="change")return t}var Nu=!1;if(Sa){var jr;if(Sa){var Lr="oninput"in document;if(!Lr){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),Lr=typeof Ru.oninput=="function"}jr=Lr}else jr=!1;Nu=jr&&(!document.documentMode||9<document.documentMode)}function Mu(){Yl&&(Yl.detachEvent("onpropertychange",Ou),Gl=Yl=null)}function Ou(e){if(e.propertyName==="value"&&lo(Gl)){var t=[];wu(t,Gl,e,wr(e)),hu(km,t)}}function _m(e,t,a){e==="focusin"?(Mu(),Yl=t,Gl=a,Yl.attachEvent("onpropertychange",Ou)):e==="focusout"&&Mu()}function jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(Gl)}function Lm(e,t){if(e==="click")return lo(t)}function Um(e,t){if(e==="input"||e==="change")return lo(t)}function Bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Bm;function ql(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Vn.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var a=Du(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Du(a)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$i(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zm=Sa&&"documentMode"in document&&11>=document.documentMode,Pn=null,Br=null,Kl=null,zr=!1;function Lu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zr||Pn==null||Pn!==$i(n)||(n=Pn,"selectionStart"in n&&Ur(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Kl&&ql(Kl,n)||(Kl=n,n=Vo(Br,"onSelect"),0<n.length&&(t=new ao("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Pn)))}function wn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Wn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionrun:wn("Transition","TransitionRun"),transitionstart:wn("Transition","TransitionStart"),transitioncancel:wn("Transition","TransitionCancel"),transitionend:wn("Transition","TransitionEnd")},Hr={},Uu={};Sa&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Cn(e){if(Hr[e])return Hr[e];if(!Wn[e])return e;var t=Wn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Uu)return Hr[e]=t[a];return e}var Bu=Cn("animationend"),zu=Cn("animationiteration"),Hu=Cn("animationstart"),Hm=Cn("transitionrun"),Ym=Cn("transitionstart"),Gm=Cn("transitioncancel"),Yu=Cn("transitionend"),Gu=new Map,Yr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yr.push("scrollEnd");function Ft(e,t){Gu.set(e,t),E(t,[e])}var qu=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var a=qu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:lu(t)},qu.set(e,t),t)}return{value:e,source:t,stack:lu(t)}}var Gt=[],el=0,Gr=0;function io(){for(var e=el,t=Gr=el=0;t<e;){var a=Gt[t];Gt[t++]=null;var n=Gt[t];Gt[t++]=null;var l=Gt[t];Gt[t++]=null;var i=Gt[t];if(Gt[t++]=null,n!==null&&l!==null){var c=n.pending;c===null?l.next=l:(l.next=c.next,c.next=l),n.pending=l}i!==0&&Ku(a,l,i)}}function oo(e,t,a,n){Gt[el++]=e,Gt[el++]=t,Gt[el++]=a,Gt[el++]=n,Gr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function qr(e,t,a,n){return oo(e,t,a,n),ro(e)}function tl(e,t){return oo(e,null,null,t),ro(e)}function Ku(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-dt(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function ro(e){if(50<pi)throw pi=0,Is=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function qm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,a,n){return new qm(e,t,a,n)}function Kr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,t){var a=e.alternate;return a===null?(a=Rt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function so(e,t,a,n,l,i){var c=0;if(n=e,typeof e=="function")Kr(e)&&(c=1);else if(typeof e=="string")c=Vg(e,a,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V:return e=Rt(31,a,t,l),e.elementType=V,e.lanes=i,e;case B:return Nn(a.children,l,i,t);case q:c=8,l|=24;break;case K:return e=Rt(12,a,t,l|2),e.elementType=K,e.lanes=i,e;case F:return e=Rt(13,a,t,l),e.elementType=F,e.lanes=i,e;case Ae:return e=Rt(19,a,t,l),e.elementType=Ae,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:case P:c=10;break e;case ee:c=9;break e;case ie:c=11;break e;case fe:c=14;break e;case Se:c=16,n=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),n=null}return t=Rt(c,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Nn(e,t,a,n){return e=Rt(7,e,n,t),e.lanes=a,e}function Vr(e,t,a){return e=Rt(6,e,null,t),e.lanes=a,e}function Xr(e,t,a){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nl=[],ll=0,co=null,uo=0,qt=[],Kt=0,Rn=null,Aa=1,Ta="";function Mn(e,t){nl[ll++]=uo,nl[ll++]=co,co=e,uo=t}function Xu(e,t,a){qt[Kt++]=Aa,qt[Kt++]=Ta,qt[Kt++]=Rn,Rn=e;var n=Aa;e=Ta;var l=32-dt(n)-1;n&=~(1<<l),a+=1;var i=32-dt(t)+l;if(30<i){var c=l-l%5;i=(n&(1<<c)-1).toString(32),n>>=c,l-=c,Aa=1<<32-dt(t)+l|a<<l|n,Ta=i+e}else Aa=1<<i|a<<l|n,Ta=e}function Qr(e){e.return!==null&&(Mn(e,1),Xu(e,1,0))}function Jr(e){for(;e===co;)co=nl[--ll],nl[ll]=null,uo=nl[--ll],nl[ll]=null;for(;e===Rn;)Rn=qt[--Kt],qt[Kt]=null,Ta=qt[--Kt],qt[Kt]=null,Aa=qt[--Kt],qt[Kt]=null}var gt=null,Ke=null,we=!1,On=null,aa=!1,Ir=Error(s(519));function Dn(e){var t=Error(s(418,""));throw Ql(Yt(t,e)),Ir}function Qu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[$e]=e,t[rt]=n,a){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(a=0;a<gi.length;a++)be(gi[a],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),ru(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Fi(t);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),cu(t,n.value,n.defaultValue,n.children),Fi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||uh(t.textContent,a)?(n.popover!=null&&(be("beforetoggle",t),be("toggle",t)),n.onScroll!=null&&be("scroll",t),n.onScrollEnd!=null&&be("scrollend",t),n.onClick!=null&&(t.onclick=Xo),t=!0):t=!1,t||Dn(e)}function Ju(e){for(gt=e.return;gt;)switch(gt.tag){case 5:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:gt=gt.return}}function Vl(e){if(e!==gt)return!1;if(!we)return Ju(e),we=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||uc(e.type,e.memoizedProps)),a=!a),a&&Ke&&Dn(e),Ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ke=Pt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ke=null}}else t===27?(t=Ke,rn(e.type)?(e=pc,pc=null,Ke=e):Ke=t):Ke=gt?Pt(e.stateNode.nextSibling):null;return!0}function Xl(){Ke=gt=null,we=!1}function Iu(){var e=On;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),On=null),e}function Ql(e){On===null?On=[e]:On.push(e)}var Zr=L(null),kn=null,xa=null;function Xa(e,t,a){X(Zr,t._currentValue),t._currentValue=a}function wa(e){e._currentValue=Zr.current,Z(Zr)}function Fr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function $r(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=l;for(var v=0;v<t.length;v++)if(p.context===t[v]){i.lanes|=a,p=i.alternate,p!==null&&(p.lanes|=a),Fr(i.return,a,e),n||(c=null);break e}i=p.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Fr(c,a,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Jl(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var p=l.type;Nt(l.pendingProps.value,c.value)||(e!==null?e.push(p):e=[p])}}else if(l===it.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ai):e=[Ai])}l=l.return}e!==null&&$r(t,e,a,n),t.flags|=262144}function fo(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _n(e){kn=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return Zu(kn,e)}function ho(e,t){return kn===null&&_n(e),Zu(e,t)}function Zu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(s(308));xa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xa=xa.next=t;return a}var Km=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Vm=o.unstable_scheduleCallback,Xm=o.unstable_NormalPriority,et={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pr(){return{controller:new Km,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&Vm(Xm,function(){e.controller.abort()})}var Zl=null,Wr=0,il=0,ol=null;function Qm(e,t){if(Zl===null){var a=Zl=[];Wr=0,il=tc(),ol={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Wr++,t.then(Fu,Fu),t}function Fu(){if(--Wr===0&&Zl!==null){ol!==null&&(ol.status="fulfilled");var e=Zl;Zl=null,il=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var $u=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qm(e,t),$u!==null&&$u(e,t)};var jn=L(null);function es(){var e=jn.current;return e!==null?e:Le.pooledCache}function po(e,t){t===null?X(jn,jn.current):X(jn,t.pool)}function Pu(){var e=es();return e===null?null:{parent:et._currentValue,pool:e}}var Fl=Error(s(460)),Wu=Error(s(474)),mo=Error(s(542)),ts={then:function(){}};function ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function go(){}function td(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(go,go),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nd(e),e;default:if(typeof t.status=="string")t.then(go,go);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nd(e),e}throw $l=t,Fl}}var $l=null;function ad(){if($l===null)throw Error(s(459));var e=$l;return $l=null,e}function nd(e){if(e===Fl||e===mo)throw Error(s(483))}var Qa=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ns(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ne&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ro(e),Ku(e,null,a),t}return oo(e,n,t,a),ro(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xi(e,a)}}function ls(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var is=!1;function Wl(){if(is){var e=ol;if(e!==null)throw e}}function ei(e,t,a,n){is=!1;var l=e.updateQueue;Qa=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var v=p,R=v.next;v.next=null,c===null?i=R:c.next=R,c=v;var j=e.alternate;j!==null&&(j=j.updateQueue,p=j.lastBaseUpdate,p!==c&&(p===null?j.firstBaseUpdate=R:p.next=R,j.lastBaseUpdate=v))}if(i!==null){var H=l.baseState;c=0,j=R=v=null,p=i;do{var O=p.lane&-536870913,D=O!==p.lane;if(D?(Ee&O)===O:(n&O)===O){O!==0&&O===il&&(is=!0),j!==null&&(j=j.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ue=e,re=p;O=t;var De=a;switch(re.tag){case 1:if(ue=re.payload,typeof ue=="function"){H=ue.call(De,H,O);break e}H=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=re.payload,O=typeof ue=="function"?ue.call(De,H,O):ue,O==null)break e;H=S({},H,O);break e;case 2:Qa=!0}}O=p.callback,O!==null&&(e.flags|=64,D&&(e.flags|=8192),D=l.callbacks,D===null?l.callbacks=[O]:D.push(O))}else D={lane:O,tag:p.tag,payload:p.payload,callback:p.callback,next:null},j===null?(R=j=D,v=H):j=j.next=D,c|=O;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;D=p,p=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);j===null&&(v=H),l.baseState=v,l.firstBaseUpdate=R,l.lastBaseUpdate=j,i===null&&(l.shared.lanes=0),an|=c,e.lanes=c,e.memoizedState=H}}function ld(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function id(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ld(a[e],t)}var rl=L(null),yo=L(0);function od(e,t){e=ka,X(yo,e),X(rl,t),ka=e|t.baseLanes}function os(){X(yo,ka),X(rl,rl.current)}function rs(){ka=yo.current,Z(rl),Z(yo)}var Za=0,pe=null,Me=null,Ze=null,vo=!1,sl=!1,Ln=!1,bo=0,ti=0,cl=null,Im=0;function Qe(){throw Error(s(321))}function ss(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Nt(e[a],t[a]))return!1;return!0}function cs(e,t,a,n,l,i){return Za=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Kd:Vd,Ln=!1,i=a(n,l),Ln=!1,sl&&(i=sd(t,a,n,l)),rd(e),i}function rd(e){_.H=wo;var t=Me!==null&&Me.next!==null;if(Za=0,Ze=Me=pe=null,vo=!1,ti=0,cl=null,t)throw Error(s(300));e===null||at||(e=e.dependencies,e!==null&&fo(e)&&(at=!0))}function sd(e,t,a,n){pe=e;var l=0;do{if(sl&&(cl=null),ti=0,sl=!1,25<=l)throw Error(s(301));if(l+=1,Ze=Me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=tg,i=t(a,n)}while(sl);return i}function Zm(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?ai(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(pe.flags|=1024),t}function us(){var e=bo!==0;return bo=0,e}function ds(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function fs(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}Za=0,Ze=Me=pe=null,sl=!1,ti=bo=0,cl=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?pe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Fe(){if(Me===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ze===null?pe.memoizedState:Ze.next;if(t!==null)Ze=t,Me=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ze===null?pe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function hs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(e){var t=ti;return ti+=1,cl===null&&(cl=[]),e=td(cl,e,t),t=pe,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Kd:Vd),e}function So(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ai(e);if(e.$$typeof===P)return pt(e)}throw Error(s(438,String(e)))}function ps(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=pe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=hs(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=I;return t.index++,a}function Ca(e,t){return typeof t=="function"?t(e):t}function Eo(e){var t=Fe();return ms(t,Me,e)}function ms(e,t,a){var n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var p=c=null,v=null,R=t,j=!1;do{var H=R.lane&-536870913;if(H!==R.lane?(Ee&H)===H:(Za&H)===H){var O=R.revertLane;if(O===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),H===il&&(j=!0);else if((Za&O)===O){R=R.next,O===il&&(j=!0);continue}else H={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(p=v=H,c=i):v=v.next=H,pe.lanes|=O,an|=O;H=R.action,Ln&&a(i,H),i=R.hasEagerState?R.eagerState:a(i,H)}else O={lane:H,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(p=v=O,c=i):v=v.next=O,pe.lanes|=H,an|=H;R=R.next}while(R!==null&&R!==t);if(v===null?c=i:v.next=p,!Nt(i,e.memoizedState)&&(at=!0,j&&(a=ol,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=v,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function gs(e){var t=Fe(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do i=e(i,c.action),c=c.next;while(c!==l);Nt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function cd(e,t,a){var n=pe,l=Fe(),i=we;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!Nt((Me||l).memoizedState,a);c&&(l.memoizedState=a,at=!0),l=l.queue;var p=fd.bind(null,n,l,e);if(ni(2048,8,p,[e]),l.getSnapshot!==t||c||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,ul(9,Ao(),dd.bind(null,n,l,a,t),null),Le===null)throw Error(s(349));i||(Za&124)!==0||ud(n,t,a)}return a}function ud(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=hs(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function dd(e,t,a,n){t.value=a,t.getSnapshot=n,hd(t)&&pd(e)}function fd(e,t,a){return a(function(){hd(t)&&pd(e)})}function hd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Nt(e,a)}catch{return!0}}function pd(e){var t=tl(e,2);t!==null&&_t(t,e,2)}function ys(e){var t=xt();if(typeof e=="function"){var a=e;if(e=a(),Ln){Ut(!0);try{a()}finally{Ut(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},t}function md(e,t,a,n){return e.baseState=a,ms(e,Me,typeof n=="function"?n:Ca)}function Fm(e,t,a,n,l){if(xo(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};_.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,gd(t,i)):(i.next=a.next,t.pending=a.next=i)}}function gd(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=_.T,c={};_.T=c;try{var p=a(l,n),v=_.S;v!==null&&v(c,p),yd(e,t,p)}catch(R){vs(e,t,R)}finally{_.T=i}}else try{i=a(l,n),yd(e,t,i)}catch(R){vs(e,t,R)}}function yd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){vd(e,t,n)},function(n){return vs(e,t,n)}):vd(e,t,a)}function vd(e,t,a){t.status="fulfilled",t.value=a,bd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,gd(e,a)))}function vs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,bd(t),t=t.next;while(t!==n)}e.action=null}function bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sd(e,t){return t}function Ed(e,t){if(we){var a=Le.formState;if(a!==null){e:{var n=pe;if(we){if(Ke){t:{for(var l=Ke,i=aa;l.nodeType!==8;){if(!i){l=null;break t}if(l=Pt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Ke=Pt(l.nextSibling),n=l.data==="F!";break e}}Dn(n)}n=!1}n&&(t=a[0])}}return a=xt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sd,lastRenderedState:t},a.queue=n,a=Yd.bind(null,pe,n),n.dispatch=a,n=ys(!1),i=Ts.bind(null,pe,!1,n.queue),n=xt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Fm.bind(null,pe,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ad(e){var t=Fe();return Td(t,Me,e)}function Td(e,t,a){if(t=ms(e,t,Sd)[0],e=Eo(Ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ai(t)}catch(c){throw c===Fl?mo:c}else n=t;t=Fe();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,ul(9,Ao(),$m.bind(null,l,a),null)),[n,i,e]}function $m(e,t){e.action=t}function xd(e){var t=Fe(),a=Me;if(a!==null)return Td(t,a,e);Fe(),t=t.memoizedState,a=Fe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function ul(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=pe.updateQueue,t===null&&(t=hs(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Ao(){return{destroy:void 0,resource:void 0}}function wd(){return Fe().memoizedState}function To(e,t,a,n){var l=xt();n=n===void 0?null:n,pe.flags|=e,l.memoizedState=ul(1|t,Ao(),a,n)}function ni(e,t,a,n){var l=Fe();n=n===void 0?null:n;var i=l.memoizedState.inst;Me!==null&&n!==null&&ss(n,Me.memoizedState.deps)?l.memoizedState=ul(t,i,a,n):(pe.flags|=e,l.memoizedState=ul(1|t,i,a,n))}function Cd(e,t){To(8390656,8,e,t)}function Nd(e,t){ni(2048,8,e,t)}function Rd(e,t){return ni(4,2,e,t)}function Md(e,t){return ni(4,4,e,t)}function Od(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,a){a=a!=null?a.concat([e]):null,ni(4,4,Od.bind(null,t,e),a)}function bs(){}function kd(e,t){var a=Fe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ss(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function _d(e,t){var a=Fe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ss(t,n[1]))return n[0];if(n=e(),Ln){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[n,t],n}function Ss(e,t,a){return a===void 0||(Za&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Bf(),pe.lanes|=e,an|=e,a)}function jd(e,t,a,n){return Nt(a,t)?a:rl.current!==null?(e=Ss(e,a,n),Nt(e,t)||(at=!0),e):(Za&42)===0?(at=!0,e.memoizedState=a):(e=Bf(),pe.lanes|=e,an|=e,t)}function Ld(e,t,a,n,l){var i=J.p;J.p=i!==0&&8>i?i:8;var c=_.T,p={};_.T=p,Ts(e,!1,t,a);try{var v=l(),R=_.S;if(R!==null&&R(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var j=Jm(v,n);li(e,t,j,kt(e))}else li(e,t,n,kt(e))}catch(H){li(e,t,{then:function(){},status:"rejected",reason:H},kt())}finally{J.p=i,_.T=c}}function Pm(){}function Es(e,t,a,n){if(e.tag!==5)throw Error(s(476));var l=Ud(e).queue;Ld(e,l,t,oe,a===null?Pm:function(){return Bd(e),a(n)})}function Ud(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bd(e){var t=Ud(e).next.queue;li(e,t,{},kt())}function As(){return pt(Ai)}function zd(){return Fe().memoizedState}function Hd(){return Fe().memoizedState}function Wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=kt();e=Ja(a);var n=Ia(t,e,a);n!==null&&(_t(n,t,a),Pl(n,t,a)),t={cache:Pr()},e.payload=t;return}t=t.return}}function eg(e,t,a){var n=kt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xo(e)?Gd(t,a):(a=qr(e,t,a,n),a!==null&&(_t(a,e,n),qd(a,t,n)))}function Yd(e,t,a){var n=kt();li(e,t,a,n)}function li(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xo(e))Gd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,p=i(c,a);if(l.hasEagerState=!0,l.eagerState=p,Nt(p,c))return oo(e,t,l,0),Le===null&&io(),!1}catch{}finally{}if(a=qr(e,t,l,n),a!==null)return _t(a,e,n),qd(a,t,n),!0}return!1}function Ts(e,t,a,n){if(n={lane:2,revertLane:tc(),action:n,hasEagerState:!1,eagerState:null,next:null},xo(e)){if(t)throw Error(s(479))}else t=qr(e,a,n,2),t!==null&&_t(t,e,2)}function xo(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Gd(e,t){sl=vo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function qd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xi(e,a)}}var wo={readContext:pt,use:So,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Kd={readContext:pt,use:So,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Cd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,To(4194308,4,Od.bind(null,t,e),a)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){To(4,2,e,t)},useMemo:function(e,t){var a=xt();t=t===void 0?null:t;var n=e();if(Ln){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=xt();if(a!==void 0){var l=a(t);if(Ln){Ut(!0);try{a(t)}finally{Ut(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=eg.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=ys(e);var t=e.queue,a=Yd.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:bs,useDeferredValue:function(e,t){var a=xt();return Ss(a,e,t)},useTransition:function(){var e=ys(!1);return e=Ld.bind(null,pe,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=pe,l=xt();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Le===null)throw Error(s(349));(Ee&124)!==0||ud(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Cd(fd.bind(null,n,i,e),[e]),n.flags|=2048,ul(9,Ao(),dd.bind(null,n,i,a,t),null),a},useId:function(){var e=xt(),t=Le.identifierPrefix;if(we){var a=Ta,n=Aa;a=(n&~(1<<32-dt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=bo++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Im++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:Ed,useActionState:Ed,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ts.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return xt().memoizedState=Wm.bind(null,pe)}},Vd={readContext:pt,use:So,useCallback:kd,useContext:pt,useEffect:Nd,useImperativeHandle:Dd,useInsertionEffect:Rd,useLayoutEffect:Md,useMemo:_d,useReducer:Eo,useRef:wd,useState:function(){return Eo(Ca)},useDebugValue:bs,useDeferredValue:function(e,t){var a=Fe();return jd(a,Me.memoizedState,e,t)},useTransition:function(){var e=Eo(Ca)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:ai(e),t]},useSyncExternalStore:cd,useId:zd,useHostTransitionStatus:As,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var a=Fe();return md(a,Me,e,t)},useMemoCache:ps,useCacheRefresh:Hd},tg={readContext:pt,use:So,useCallback:kd,useContext:pt,useEffect:Nd,useImperativeHandle:Dd,useInsertionEffect:Rd,useLayoutEffect:Md,useMemo:_d,useReducer:gs,useRef:wd,useState:function(){return gs(Ca)},useDebugValue:bs,useDeferredValue:function(e,t){var a=Fe();return Me===null?Ss(a,e,t):jd(a,Me.memoizedState,e,t)},useTransition:function(){var e=gs(Ca)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:ai(e),t]},useSyncExternalStore:cd,useId:zd,useHostTransitionStatus:As,useFormState:xd,useActionState:xd,useOptimistic:function(e,t){var a=Fe();return Me!==null?md(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ps,useCacheRefresh:Hd},dl=null,ii=0;function Co(e){var t=ii;return ii+=1,dl===null&&(dl=[]),td(dl,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function No(e,t){throw t.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xd(e){var t=e._init;return t(e._payload)}function Qd(e){function t(x,T){if(e){var N=x.deletions;N===null?(x.deletions=[T],x.flags|=16):N.push(T)}}function a(x,T){if(!e)return null;for(;T!==null;)t(x,T),T=T.sibling;return null}function n(x){for(var T=new Map;x!==null;)x.key!==null?T.set(x.key,x):T.set(x.index,x),x=x.sibling;return T}function l(x,T){return x=Ea(x,T),x.index=0,x.sibling=null,x}function i(x,T,N){return x.index=N,e?(N=x.alternate,N!==null?(N=N.index,N<T?(x.flags|=67108866,T):N):(x.flags|=67108866,T)):(x.flags|=1048576,T)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function p(x,T,N,U){return T===null||T.tag!==6?(T=Vr(N,x.mode,U),T.return=x,T):(T=l(T,N),T.return=x,T)}function v(x,T,N,U){var $=N.type;return $===B?j(x,T,N.props.children,U,N.key):T!==null&&(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Se&&Xd($)===T.type)?(T=l(T,N.props),oi(T,N),T.return=x,T):(T=so(N.type,N.key,N.props,null,x.mode,U),oi(T,N),T.return=x,T)}function R(x,T,N,U){return T===null||T.tag!==4||T.stateNode.containerInfo!==N.containerInfo||T.stateNode.implementation!==N.implementation?(T=Xr(N,x.mode,U),T.return=x,T):(T=l(T,N.children||[]),T.return=x,T)}function j(x,T,N,U,$){return T===null||T.tag!==7?(T=Nn(N,x.mode,U,$),T.return=x,T):(T=l(T,N),T.return=x,T)}function H(x,T,N){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Vr(""+T,x.mode,N),T.return=x,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case M:return N=so(T.type,T.key,T.props,null,x.mode,N),oi(N,T),N.return=x,N;case k:return T=Xr(T,x.mode,N),T.return=x,T;case Se:var U=T._init;return T=U(T._payload),H(x,T,N)}if(Ue(T)||Q(T))return T=Nn(T,x.mode,N,null),T.return=x,T;if(typeof T.then=="function")return H(x,Co(T),N);if(T.$$typeof===P)return H(x,ho(x,T),N);No(x,T)}return null}function O(x,T,N,U){var $=T!==null?T.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return $!==null?null:p(x,T,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case M:return N.key===$?v(x,T,N,U):null;case k:return N.key===$?R(x,T,N,U):null;case Se:return $=N._init,N=$(N._payload),O(x,T,N,U)}if(Ue(N)||Q(N))return $!==null?null:j(x,T,N,U,null);if(typeof N.then=="function")return O(x,T,Co(N),U);if(N.$$typeof===P)return O(x,T,ho(x,N),U);No(x,N)}return null}function D(x,T,N,U,$){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return x=x.get(N)||null,p(T,x,""+U,$);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case M:return x=x.get(U.key===null?N:U.key)||null,v(T,x,U,$);case k:return x=x.get(U.key===null?N:U.key)||null,R(T,x,U,$);case Se:var ge=U._init;return U=ge(U._payload),D(x,T,N,U,$)}if(Ue(U)||Q(U))return x=x.get(N)||null,j(T,x,U,$,null);if(typeof U.then=="function")return D(x,T,N,Co(U),$);if(U.$$typeof===P)return D(x,T,N,ho(T,U),$);No(T,U)}return null}function ue(x,T,N,U){for(var $=null,ge=null,ae=T,ce=T=0,lt=null;ae!==null&&ce<N.length;ce++){ae.index>ce?(lt=ae,ae=null):lt=ae.sibling;var Te=O(x,ae,N[ce],U);if(Te===null){ae===null&&(ae=lt);break}e&&ae&&Te.alternate===null&&t(x,ae),T=i(Te,T,ce),ge===null?$=Te:ge.sibling=Te,ge=Te,ae=lt}if(ce===N.length)return a(x,ae),we&&Mn(x,ce),$;if(ae===null){for(;ce<N.length;ce++)ae=H(x,N[ce],U),ae!==null&&(T=i(ae,T,ce),ge===null?$=ae:ge.sibling=ae,ge=ae);return we&&Mn(x,ce),$}for(ae=n(ae);ce<N.length;ce++)lt=D(ae,x,ce,N[ce],U),lt!==null&&(e&&lt.alternate!==null&&ae.delete(lt.key===null?ce:lt.key),T=i(lt,T,ce),ge===null?$=lt:ge.sibling=lt,ge=lt);return e&&ae.forEach(function(fn){return t(x,fn)}),we&&Mn(x,ce),$}function re(x,T,N,U){if(N==null)throw Error(s(151));for(var $=null,ge=null,ae=T,ce=T=0,lt=null,Te=N.next();ae!==null&&!Te.done;ce++,Te=N.next()){ae.index>ce?(lt=ae,ae=null):lt=ae.sibling;var fn=O(x,ae,Te.value,U);if(fn===null){ae===null&&(ae=lt);break}e&&ae&&fn.alternate===null&&t(x,ae),T=i(fn,T,ce),ge===null?$=fn:ge.sibling=fn,ge=fn,ae=lt}if(Te.done)return a(x,ae),we&&Mn(x,ce),$;if(ae===null){for(;!Te.done;ce++,Te=N.next())Te=H(x,Te.value,U),Te!==null&&(T=i(Te,T,ce),ge===null?$=Te:ge.sibling=Te,ge=Te);return we&&Mn(x,ce),$}for(ae=n(ae);!Te.done;ce++,Te=N.next())Te=D(ae,x,ce,Te.value,U),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?ce:Te.key),T=i(Te,T,ce),ge===null?$=Te:ge.sibling=Te,ge=Te);return e&&ae.forEach(function(ay){return t(x,ay)}),we&&Mn(x,ce),$}function De(x,T,N,U){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case M:e:{for(var $=N.key;T!==null;){if(T.key===$){if($=N.type,$===B){if(T.tag===7){a(x,T.sibling),U=l(T,N.props.children),U.return=x,x=U;break e}}else if(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Se&&Xd($)===T.type){a(x,T.sibling),U=l(T,N.props),oi(U,N),U.return=x,x=U;break e}a(x,T);break}else t(x,T);T=T.sibling}N.type===B?(U=Nn(N.props.children,x.mode,U,N.key),U.return=x,x=U):(U=so(N.type,N.key,N.props,null,x.mode,U),oi(U,N),U.return=x,x=U)}return c(x);case k:e:{for($=N.key;T!==null;){if(T.key===$)if(T.tag===4&&T.stateNode.containerInfo===N.containerInfo&&T.stateNode.implementation===N.implementation){a(x,T.sibling),U=l(T,N.children||[]),U.return=x,x=U;break e}else{a(x,T);break}else t(x,T);T=T.sibling}U=Xr(N,x.mode,U),U.return=x,x=U}return c(x);case Se:return $=N._init,N=$(N._payload),De(x,T,N,U)}if(Ue(N))return ue(x,T,N,U);if(Q(N)){if($=Q(N),typeof $!="function")throw Error(s(150));return N=$.call(N),re(x,T,N,U)}if(typeof N.then=="function")return De(x,T,Co(N),U);if(N.$$typeof===P)return De(x,T,ho(x,N),U);No(x,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,T!==null&&T.tag===6?(a(x,T.sibling),U=l(T,N),U.return=x,x=U):(a(x,T),U=Vr(N,x.mode,U),U.return=x,x=U),c(x)):a(x,T)}return function(x,T,N,U){try{ii=0;var $=De(x,T,N,U);return dl=null,$}catch(ae){if(ae===Fl||ae===mo)throw ae;var ge=Rt(29,ae,null,x.mode);return ge.lanes=U,ge.return=x,ge}finally{}}}var fl=Qd(!0),Jd=Qd(!1),Vt=L(null),na=null;function Fa(e){var t=e.alternate;X(tt,tt.current&1),X(Vt,e),na===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(na=e)}function Id(e){if(e.tag===22){if(X(tt,tt.current),X(Vt,e),na===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(na=e)}}else $a()}function $a(){X(tt,tt.current),X(Vt,Vt.current)}function Na(e){Z(Vt),na===e&&(na=null),Z(tt)}var tt=L(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||hc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ws={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=kt(),l=Ja(n);l.payload=t,a!=null&&(l.callback=a),t=Ia(e,l,n),t!==null&&(_t(t,e,n),Pl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=kt(),l=Ja(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ia(e,l,n),t!==null&&(_t(t,e,n),Pl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=kt(),n=Ja(a);n.tag=2,t!=null&&(n.callback=t),t=Ia(e,n,a),t!==null&&(_t(t,e,a),Pl(t,e,a))}};function Zd(e,t,a,n,l,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,c):t.prototype&&t.prototype.isPureReactComponent?!ql(a,n)||!ql(l,i):!0}function Fd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Un(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var Mo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $d(e){Mo(e)}function Pd(e){console.error(e)}function Wd(e){Mo(e)}function Oo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ef(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Cs(e,t,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Oo(e,t)},a}function tf(e){return e=Ja(e),e.tag=3,e}function af(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){ef(t,a,n)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){ef(t,a,n),typeof l!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function ag(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jl(t,a,l,!0),a=Vt.current,a!==null){switch(a.tag){case 13:return na===null?Fs():a.alternate===null&&Ve===0&&(Ve=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===ts?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Ps(e,n,l)),!1;case 22:return a.flags|=65536,n===ts?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Ps(e,n,l)),!1}throw Error(s(435,a.tag))}return Ps(e,n,l),Fs(),!1}if(we)return t=Vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Ir&&(e=Error(s(422),{cause:n}),Ql(Yt(e,a)))):(n!==Ir&&(t=Error(s(423),{cause:n}),Ql(Yt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Yt(n,a),l=Cs(e.stateNode,n,l),ls(e,l),Ve!==4&&(Ve=2)),!1;var i=Error(s(520),{cause:n});if(i=Yt(i,a),hi===null?hi=[i]:hi.push(i),Ve!==4&&(Ve=2),t===null)return!0;n=Yt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Cs(a.stateNode,n,e),ls(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(nn===null||!nn.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=tf(l),af(l,e,a,n),ls(a,l),!1}a=a.return}while(a!==null);return!1}var nf=Error(s(461)),at=!1;function st(e,t,a,n){t.child=e===null?Jd(t,null,a,n):fl(t,e.child,a,n)}function lf(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var c={};for(var p in n)p!=="ref"&&(c[p]=n[p])}else c=n;return _n(t),n=cs(e,t,a,c,i,l),p=us(),e!==null&&!at?(ds(e,t,l),Ra(e,t,l)):(we&&p&&Qr(t),t.flags|=1,st(e,t,n,l),t.child)}function of(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Kr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,rf(e,t,i,n,l)):(e=so(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!js(e,l)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:ql,a(c,n)&&e.ref===t.ref)return Ra(e,t,l)}return t.flags|=1,e=Ea(i,n),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(ql(i,n)&&e.ref===t.ref)if(at=!1,t.pendingProps=n=i,js(e,l))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Ra(e,t,l)}return Ns(e,t,a,n,l)}function sf(e,t,a){var n=t.pendingProps,l=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return cf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&po(t,i!==null?i.cachePool:null),i!==null?od(t,i):os(),Id(t);else return t.lanes=t.childLanes=536870912,cf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(po(t,i.cachePool),od(t,i),$a(),t.memoizedState=null):(e!==null&&po(t,null),os(),$a());return st(e,t,l,a),t.child}function cf(e,t,a,n){var l=es();return l=l===null?null:{parent:et._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&po(t,null),os(),Id(t),e!==null&&Jl(e,t,n,!0),null}function Do(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ns(e,t,a,n,l){return _n(t),a=cs(e,t,a,n,void 0,l),n=us(),e!==null&&!at?(ds(e,t,l),Ra(e,t,l)):(we&&n&&Qr(t),t.flags|=1,st(e,t,a,l),t.child)}function uf(e,t,a,n,l,i){return _n(t),t.updateQueue=null,a=sd(t,n,a,l),rd(e),n=us(),e!==null&&!at?(ds(e,t,i),Ra(e,t,i)):(we&&n&&Qr(t),t.flags|=1,st(e,t,a,i),t.child)}function df(e,t,a,n,l){if(_n(t),t.stateNode===null){var i=al,c=a.contextType;typeof c=="object"&&c!==null&&(i=pt(c)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ws,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},as(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?pt(c):al,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(xs(t,a,c,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&ws.enqueueReplaceState(i,i.state,null),ei(t,n,i,l),Wl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var p=t.memoizedProps,v=Un(a,p);i.props=v;var R=i.context,j=a.contextType;c=al,typeof j=="object"&&j!==null&&(c=pt(j));var H=a.getDerivedStateFromProps;j=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||R!==c)&&Fd(t,i,n,c),Qa=!1;var O=t.memoizedState;i.state=O,ei(t,n,i,l),Wl(),R=t.memoizedState,p||O!==R||Qa?(typeof H=="function"&&(xs(t,a,H,n),R=t.memoizedState),(v=Qa||Zd(t,a,v,n,O,R,c))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),i.props=n,i.state=R,i.context=c,n=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ns(e,t),c=t.memoizedProps,j=Un(a,c),i.props=j,H=t.pendingProps,O=i.context,R=a.contextType,v=al,typeof R=="object"&&R!==null&&(v=pt(R)),p=a.getDerivedStateFromProps,(R=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==H||O!==v)&&Fd(t,i,n,v),Qa=!1,O=t.memoizedState,i.state=O,ei(t,n,i,l),Wl();var D=t.memoizedState;c!==H||O!==D||Qa||e!==null&&e.dependencies!==null&&fo(e.dependencies)?(typeof p=="function"&&(xs(t,a,p,n),D=t.memoizedState),(j=Qa||Zd(t,a,j,n,O,D,v)||e!==null&&e.dependencies!==null&&fo(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,D,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,D,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),i.props=n,i.state=D,i.context=v,n=j):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Do(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=fl(t,e.child,null,l),t.child=fl(t,null,a,l)):st(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Ra(e,t,l),e}function ff(e,t,a,n){return Xl(),t.flags|=256,st(e,t,a,n),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ms(e){return{baseLanes:e,cachePool:Pu()}}function Os(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Xt),e}function hf(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(l?Fa(t):$a(),we){var p=Ke,v;if(v=p){e:{for(v=p,p=aa;v.nodeType!==8;){if(!p){p=null;break e}if(v=Pt(v.nextSibling),v===null){p=null;break e}}p=v}p!==null?(t.memoizedState={dehydrated:p,treeContext:Rn!==null?{id:Aa,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},v=Rt(18,null,null,0),v.stateNode=p,v.return=t,t.child=v,gt=t,Ke=null,v=!0):v=!1}v||Dn(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return hc(p)?t.lanes=32:t.lanes=536870912,null;Na(t)}return p=n.children,n=n.fallback,l?($a(),l=t.mode,p=ko({mode:"hidden",children:p},l),n=Nn(n,l,a,null),p.return=t,n.return=t,p.sibling=n,t.child=p,l=t.child,l.memoizedState=Ms(a),l.childLanes=Os(e,c,a),t.memoizedState=Rs,n):(Fa(t),Ds(t,p))}if(v=e.memoizedState,v!==null&&(p=v.dehydrated,p!==null)){if(i)t.flags&256?(Fa(t),t.flags&=-257,t=ks(e,t,a)):t.memoizedState!==null?($a(),t.child=e.child,t.flags|=128,t=null):($a(),l=n.fallback,p=t.mode,n=ko({mode:"visible",children:n.children},p),l=Nn(l,p,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,fl(t,e.child,null,a),n=t.child,n.memoizedState=Ms(a),n.childLanes=Os(e,c,a),t.memoizedState=Rs,t=l);else if(Fa(t),hc(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var R=c.dgst;c=R,n=Error(s(419)),n.stack="",n.digest=c,Ql({value:n,source:null,stack:null}),t=ks(e,t,a)}else if(at||Jl(e,t,a,!1),c=(a&e.childLanes)!==0,at||c){if(c=Le,c!==null&&(n=a&-a,n=(n&42)!==0?1:He(n),n=(n&(c.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane))throw v.retryLane=n,tl(e,n),_t(c,e,n),nf;p.data==="$?"||Fs(),t=ks(e,t,a)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ke=Pt(p.nextSibling),gt=t,we=!0,On=null,aa=!1,e!==null&&(qt[Kt++]=Aa,qt[Kt++]=Ta,qt[Kt++]=Rn,Aa=e.id,Ta=e.overflow,Rn=t),t=Ds(t,n.children),t.flags|=4096);return t}return l?($a(),l=n.fallback,p=t.mode,v=e.child,R=v.sibling,n=Ea(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,R!==null?l=Ea(R,l):(l=Nn(l,p,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,p=e.child.memoizedState,p===null?p=Ms(a):(v=p.cachePool,v!==null?(R=et._currentValue,v=v.parent!==R?{parent:R,pool:R}:v):v=Pu(),p={baseLanes:p.baseLanes|a,cachePool:v}),l.memoizedState=p,l.childLanes=Os(e,c,a),t.memoizedState=Rs,n):(Fa(t),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Ds(e,t){return t=ko({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ko(e,t){return e=Rt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ks(e,t,a){return fl(t,e.child,null,a),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fr(e.return,t,a)}function _s(e,t,a,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function mf(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(st(e,t,n.children,a),n=tt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pf(e,a,t);else if(e.tag===19)pf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(X(tt,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Ro(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),_s(t,!1,l,a,i);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ro(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}_s(t,!0,a,null,i);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Ea(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function js(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fo(e)))}function ng(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Xa(t,et,e.memoizedState.cache),Xl();break;case 27:case 5:pn(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Xa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Fa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?hf(e,t,a):(Fa(t),e=Ra(e,t,a),e!==null?e.sibling:null);Fa(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jl(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return mf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(tt,tt.current),n)break;return null;case 22:case 23:return t.lanes=0,sf(e,t,a);case 24:Xa(t,et,e.memoizedState.cache)}return Ra(e,t,a)}function gf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!js(e,a)&&(t.flags&128)===0)return at=!1,ng(e,t,a);at=(e.flags&131072)!==0}else at=!1,we&&(t.flags&1048576)!==0&&Xu(t,uo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Kr(n)?(e=Un(n,e),t.tag=1,t=df(null,t,n,e,a)):(t.tag=0,t=Ns(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===ie){t.tag=11,t=lf(null,t,n,e,a);break e}else if(l===fe){t.tag=14,t=of(null,t,n,e,a);break e}}throw t=je(n)||n,Error(s(306,t,""))}}return t;case 0:return Ns(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Un(n,t.pendingProps),df(e,t,n,l,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,ns(e,t),ei(t,n,null,a);var c=t.memoizedState;if(n=c.cache,Xa(t,et,n),n!==i.cache&&$r(t,[et],a,!0),Wl(),n=c.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ff(e,t,n,a);break e}else if(n!==l){l=Yt(Error(s(424)),t),Ql(l),t=ff(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=Pt(e.firstChild),gt=t,we=!0,On=null,aa=!0,a=Jd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xl(),n===l){t=Ra(e,t,a);break e}st(e,t,n,a)}t=t.child}return t;case 26:return Do(e,t),e===null?(a=Sh(t.type,null,t.pendingProps,null))?t.memoizedState=a:we||(a=t.type,e=t.pendingProps,n=Qo(se.current).createElement(a),n[$e]=t,n[rt]=e,ut(n,a,e),Xe(n),t.stateNode=n):t.memoizedState=Sh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pn(t),e===null&&we&&(n=t.stateNode=yh(t.type,t.pendingProps,se.current),gt=t,aa=!0,l=Ke,rn(t.type)?(pc=l,Ke=Pt(n.firstChild)):Ke=l),st(e,t,t.pendingProps.children,a),Do(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((l=n=Ke)&&(n=Dg(n,t.type,t.pendingProps,aa),n!==null?(t.stateNode=n,gt=t,Ke=Pt(n.firstChild),aa=!1,l=!0):l=!1),l||Dn(t)),pn(t),l=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,n=i.children,uc(l,i)?n=null:c!==null&&uc(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=cs(e,t,Zm,null,null,a),Ai._currentValue=l),Do(e,t),st(e,t,n,a),t.child;case 6:return e===null&&we&&((e=a=Ke)&&(a=kg(a,t.pendingProps,aa),a!==null?(t.stateNode=a,gt=t,Ke=null,e=!0):e=!1),e||Dn(t)),null;case 13:return hf(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=fl(t,null,n,a):st(e,t,n,a),t.child;case 11:return lf(e,t,t.type,t.pendingProps,a);case 7:return st(e,t,t.pendingProps,a),t.child;case 8:return st(e,t,t.pendingProps.children,a),t.child;case 12:return st(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Xa(t,t.type,n.value),st(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,_n(t),l=pt(l),n=n(l),t.flags|=1,st(e,t,n,a),t.child;case 14:return of(e,t,t.type,t.pendingProps,a);case 15:return rf(e,t,t.type,t.pendingProps,a);case 19:return mf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=ko(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ea(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return sf(e,t,a);case 24:return _n(t),n=pt(et),e===null?(l=es(),l===null&&(l=Le,i=Pr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},as(t),Xa(t,et,l)):((e.lanes&a)!==0&&(ns(e,t),ei(t,null,null,a),Wl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Xa(t,et,n)):(n=i.cache,Xa(t,et,n),n!==l.cache&&$r(t,[et],a,!0))),st(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ma(e){e.flags|=4}function yf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wh(t)){if(t=Vt.current,t!==null&&((Ee&4194048)===Ee?na!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||t!==na))throw $l=ts,Wu;e.flags|=8192}}function _o(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sn():536870912,e.lanes|=t,gl|=t)}function ri(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function lg(e,t,a){var n=t.pendingProps;switch(Jr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wa(et),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?Ma(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Iu())),Ye(t),null;case 26:return a=t.memoizedState,e===null?(Ma(t),a!==null?(Ye(t),yf(t,a)):(Ye(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Ma(t),Ye(t),yf(t,a)):(Ye(t),t.flags&=-16777217):(e.memoizedProps!==n&&Ma(t),Ye(t),t.flags&=-16777217),null;case 27:mn(t),a=se.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ma(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Ye(t),null}e=ne.current,Vl(t)?Qu(t):(e=yh(l,n,a),t.stateNode=e,Ma(t))}return Ye(t),null;case 5:if(mn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ma(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Ye(t),null}if(e=ne.current,Vl(t))Qu(t);else{switch(l=Qo(se.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[$e]=t,e[rt]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ut(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ma(t)}}return Ye(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ma(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(s(166));if(e=se.current,Vl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=gt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[$e]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||uh(e.nodeValue,a)),e||Dn(t)}else e=Qo(e).createTextNode(n),e[$e]=t,t.stateNode=e}return Ye(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Vl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[$e]=t}else Xl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),l=!1}else l=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Na(t),t):(Na(t),null)}if(Na(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),_o(t,t.updateQueue),Ye(t),null;case 4:return It(),e===null&&ic(t.stateNode.containerInfo),Ye(t),null;case 10:return wa(t.type),Ye(t),null;case 19:if(Z(tt),l=t.memoizedState,l===null)return Ye(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)ri(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ro(e),i!==null){for(t.flags|=128,ri(l,!1),e=i.updateQueue,t.updateQueue=e,_o(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Vu(a,e),a=a.sibling;return X(tt,tt.current&1|2),t.child}e=e.sibling}l.tail!==null&&St()>Uo&&(t.flags|=128,n=!0,ri(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ro(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,_o(t,e),ri(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!we)return Ye(t),null}else 2*St()-l.renderingStartTime>Uo&&a!==536870912&&(t.flags|=128,n=!0,ri(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=St(),t.sibling=null,e=tt.current,X(tt,n?e&1|2:e&1),t):(Ye(t),null);case 22:case 23:return Na(t),rs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),a=t.updateQueue,a!==null&&_o(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Z(jn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),wa(et),Ye(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function ig(e,t){switch(Jr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wa(et),It(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mn(t),null;case 13:if(Na(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(tt),null;case 4:return It(),null;case 10:return wa(t.type),null;case 22:case 23:return Na(t),rs(),e!==null&&Z(jn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wa(et),null;case 25:return null;default:return null}}function vf(e,t){switch(Jr(t),t.tag){case 3:wa(et),It();break;case 26:case 27:case 5:mn(t);break;case 4:It();break;case 13:Na(t);break;case 19:Z(tt);break;case 10:wa(t.type);break;case 22:case 23:Na(t),rs(),e!==null&&Z(jn);break;case 24:wa(et)}}function si(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,c=a.inst;n=i(),c.destroy=n}a=a.next}while(a!==l)}}catch(p){_e(t,t.return,p)}}function Pa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var c=n.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,l=t;var v=a,R=p;try{R()}catch(j){_e(l,v,j)}}}n=n.next}while(n!==i)}}catch(j){_e(t,t.return,j)}}function bf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{id(t,a)}catch(n){_e(e,e.return,n)}}}function Sf(e,t,a){a.props=Un(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){_e(e,t,n)}}function ci(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){_e(e,t,l)}}function la(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){_e(e,t,l)}else a.current=null}function Ef(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){_e(e,e.return,l)}}function Ls(e,t,a){try{var n=e.stateNode;Cg(n,e.type,a,t),n[rt]=t}catch(l){_e(e,e.return,l)}}function Af(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rn(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xo));else if(n!==4&&(n===27&&rn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Bs(e,t,a),e=e.sibling;e!==null;)Bs(e,t,a),e=e.sibling}function jo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&rn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jo(e,t,a),e=e.sibling;e!==null;)jo(e,t,a),e=e.sibling}function Tf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ut(t,n,a),t[$e]=e,t[rt]=a}catch(i){_e(e,e.return,i)}}var Oa=!1,Je=!1,zs=!1,xf=typeof WeakSet=="function"?WeakSet:Set,nt=null;function og(e,t){if(e=e.containerInfo,sc=Po,e=ju(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,p=-1,v=-1,R=0,j=0,H=e,O=null;t:for(;;){for(var D;H!==a||l!==0&&H.nodeType!==3||(p=c+l),H!==i||n!==0&&H.nodeType!==3||(v=c+n),H.nodeType===3&&(c+=H.nodeValue.length),(D=H.firstChild)!==null;)O=H,H=D;for(;;){if(H===e)break t;if(O===a&&++R===l&&(p=c),O===i&&++j===n&&(v=c),(D=H.nextSibling)!==null)break;H=O,O=H.parentNode}H=D}a=p===-1||v===-1?null:{start:p,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(cc={focusedElem:e,selectionRange:a},Po=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var ue=Un(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ue,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(re){_e(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)fc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function wf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Wa(e,a),n&4&&si(5,a);break;case 1:if(Wa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){_e(a,a.return,c)}else{var l=Un(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){_e(a,a.return,c)}}n&64&&bf(a),n&512&&ci(a,a.return);break;case 3:if(Wa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{id(e,t)}catch(c){_e(a,a.return,c)}}break;case 27:t===null&&n&4&&Tf(a);case 26:case 5:Wa(e,a),t===null&&n&4&&Ef(a),n&512&&ci(a,a.return);break;case 12:Wa(e,a);break;case 13:Wa(e,a),n&4&&Rf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mg.bind(null,a),_g(e,a))));break;case 22:if(n=a.memoizedState!==null||Oa,!n){t=t!==null&&t.memoizedState!==null||Je,l=Oa;var i=Je;Oa=n,(Je=t)&&!i?en(e,a,(a.subtreeFlags&8772)!==0):Wa(e,a),Oa=l,Je=i}break;case 30:break;default:Wa(e,a)}}function Cf(e){var t=e.alternate;t!==null&&(e.alternate=null,Cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,wt=!1;function Da(e,t,a){for(a=a.child;a!==null;)Nf(e,t,a),a=a.sibling}function Nf(e,t,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Lt,a)}catch{}switch(a.tag){case 26:Je||la(a,t),Da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||la(a,t);var n=ze,l=wt;rn(a.type)&&(ze=a.stateNode,wt=!1),Da(e,t,a),vi(a.stateNode),ze=n,wt=l;break;case 5:Je||la(a,t);case 6:if(n=ze,l=wt,ze=null,Da(e,t,a),ze=n,wt=l,ze!==null)if(wt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){_e(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){_e(a,t,i)}break;case 18:ze!==null&&(wt?(e=ze,mh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ci(e)):mh(ze,a.stateNode));break;case 4:n=ze,l=wt,ze=a.stateNode.containerInfo,wt=!0,Da(e,t,a),ze=n,wt=l;break;case 0:case 11:case 14:case 15:Je||Pa(2,a,t),Je||Pa(4,a,t),Da(e,t,a);break;case 1:Je||(la(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Sf(a,t,n)),Da(e,t,a);break;case 21:Da(e,t,a);break;case 22:Je=(n=Je)||a.memoizedState!==null,Da(e,t,a),Je=n;break;default:Da(e,t,a)}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ci(e)}catch(a){_e(t,t.return,a)}}function rg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(s(435,e.tag))}}function Hs(e,t){var a=rg(e);t.forEach(function(n){var l=gg.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function Mt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(rn(p.type)){ze=p.stateNode,wt=!1;break e}break;case 5:ze=p.stateNode,wt=!1;break e;case 3:case 4:ze=p.stateNode.containerInfo,wt=!0;break e}p=p.return}if(ze===null)throw Error(s(160));Nf(i,c,l),ze=null,wt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}var $t=null;function Mf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mt(t,e),Ot(e),n&4&&(Pa(3,e,e.return),si(3,e),Pa(5,e,e.return));break;case 1:Mt(t,e),Ot(e),n&512&&(Je||a===null||la(a,a.return)),n&64&&Oa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=$t;if(Mt(t,e),Ot(e),n&512&&(Je||a===null||la(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ga]||i[$e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),ut(i,n,a),i[$e]=e,Xe(i),n=i;break e;case"link":var c=Th("link","href",l).get(n+(a.href||""));if(c){for(var p=0;p<c.length;p++)if(i=c[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}i=l.createElement(n),ut(i,n,a),l.head.appendChild(i);break;case"meta":if(c=Th("meta","content",l).get(n+(a.content||""))){for(p=0;p<c.length;p++)if(i=c[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}i=l.createElement(n),ut(i,n,a),l.head.appendChild(i);break;default:throw Error(s(468,n))}i[$e]=e,Xe(i),n=i}e.stateNode=n}else xh(l,e.type,e.stateNode);else e.stateNode=Ah(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?xh(l,e.type,e.stateNode):Ah(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ls(e,e.memoizedProps,a.memoizedProps)}break;case 27:Mt(t,e),Ot(e),n&512&&(Je||a===null||la(a,a.return)),a!==null&&n&4&&Ls(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Mt(t,e),Ot(e),n&512&&(Je||a===null||la(a,a.return)),e.flags&32){l=e.stateNode;try{In(l,"")}catch(D){_e(e,e.return,D)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Ls(e,l,a!==null?a.memoizedProps:l)),n&1024&&(zs=!0);break;case 6:if(Mt(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(D){_e(e,e.return,D)}}break;case 3:if(Zo=null,l=$t,$t=Jo(t.containerInfo),Mt(t,e),$t=l,Ot(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(D){_e(e,e.return,D)}zs&&(zs=!1,Of(e));break;case 4:n=$t,$t=Jo(e.stateNode.containerInfo),Mt(t,e),Ot(e),$t=n;break;case 12:Mt(t,e),Ot(e);break;case 13:Mt(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xs=St()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hs(e,n)));break;case 22:l=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,R=Oa,j=Je;if(Oa=R||l,Je=j||v,Mt(t,e),Je=j,Oa=R,Ot(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||v||Oa||Je||Bn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=v.stateNode;var H=v.memoizedProps.style,O=H!=null&&H.hasOwnProperty("display")?H.display:null;p.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(D){_e(v,v.return,D)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(D){_e(v,v.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Hs(e,a))));break;case 19:Mt(t,e),Ot(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hs(e,n)));break;case 30:break;case 21:break;default:Mt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Af(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,i=Us(e);jo(e,i,l);break;case 5:var c=a.stateNode;a.flags&32&&(In(c,""),a.flags&=-33);var p=Us(e);jo(e,p,c);break;case 3:case 4:var v=a.stateNode.containerInfo,R=Us(e);Bs(e,R,v);break;default:throw Error(s(161))}}catch(j){_e(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wf(e,t.alternate,t),t=t.sibling}function Bn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),Bn(t);break;case 1:la(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Sf(t,t.return,a),Bn(t);break;case 27:vi(t.stateNode);case 26:case 5:la(t,t.return),Bn(t);break;case 22:t.memoizedState===null&&Bn(t);break;case 30:Bn(t);break;default:Bn(t)}e=e.sibling}}function en(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:en(l,i,a),si(4,i);break;case 1:if(en(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){_e(n,n.return,R)}if(n=i,l=n.updateQueue,l!==null){var p=n.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)ld(v[l],p)}catch(R){_e(n,n.return,R)}}a&&c&64&&bf(i),ci(i,i.return);break;case 27:Tf(i);case 26:case 5:en(l,i,a),a&&n===null&&c&4&&Ef(i),ci(i,i.return);break;case 12:en(l,i,a);break;case 13:en(l,i,a),a&&c&4&&Rf(l,i);break;case 22:i.memoizedState===null&&en(l,i,a),ci(i,i.return);break;case 30:break;default:en(l,i,a)}t=t.sibling}}function Ys(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Il(a))}function Gs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function ia(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Df(e,t,a,n),t=t.sibling}function Df(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ia(e,t,a,n),l&2048&&si(9,t);break;case 1:ia(e,t,a,n);break;case 3:ia(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e)));break;case 12:if(l&2048){ia(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,p=i.onPostCommit;typeof p=="function"&&p(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else ia(e,t,a,n);break;case 13:ia(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?ia(e,t,a,n):ui(e,t):i._visibility&2?ia(e,t,a,n):(i._visibility|=2,hl(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&Ys(c,t);break;case 24:ia(e,t,a,n),l&2048&&Gs(t.alternate,t);break;default:ia(e,t,a,n)}}function hl(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,p=a,v=n,R=c.flags;switch(c.tag){case 0:case 11:case 15:hl(i,c,p,v,l),si(8,c);break;case 23:break;case 22:var j=c.stateNode;c.memoizedState!==null?j._visibility&2?hl(i,c,p,v,l):ui(i,c):(j._visibility|=2,hl(i,c,p,v,l)),l&&R&2048&&Ys(c.alternate,c);break;case 24:hl(i,c,p,v,l),l&&R&2048&&Gs(c.alternate,c);break;default:hl(i,c,p,v,l)}t=t.sibling}}function ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ui(a,n),l&2048&&Ys(n.alternate,n);break;case 24:ui(a,n),l&2048&&Gs(n.alternate,n);break;default:ui(a,n)}t=t.sibling}}var di=8192;function pl(e){if(e.subtreeFlags&di)for(e=e.child;e!==null;)kf(e),e=e.sibling}function kf(e){switch(e.tag){case 26:pl(e),e.flags&di&&e.memoizedState!==null&&Qg($t,e.memoizedState,e.memoizedProps);break;case 5:pl(e);break;case 3:case 4:var t=$t;$t=Jo(e.stateNode.containerInfo),pl(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=di,di=16777216,pl(e),di=t):pl(e));break;default:pl(e)}}function _f(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];nt=n,Lf(n,e)}_f(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 0:case 11:case 15:fi(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:fi(e);break;case 12:fi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Lo(e)):fi(e);break;default:fi(e)}}function Lo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];nt=n,Lf(n,e)}_f(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),Lo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Lo(t));break;default:Lo(t)}e=e.sibling}}function Lf(e,t){for(;nt!==null;){var a=nt;switch(a.tag){case 0:case 11:case 15:Pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Il(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,nt=n;else e:for(a=e;nt!==null;){n=nt;var l=n.sibling,i=n.return;if(Cf(n),n===a){nt=null;break e}if(l!==null){l.return=i,nt=l;break e}nt=i}}}var sg={getCacheForType:function(e){var t=pt(et),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},cg=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Le=null,ve=null,Ee=0,Re=0,Dt=null,tn=!1,ml=!1,qs=!1,ka=0,Ve=0,an=0,zn=0,Ks=0,Xt=0,gl=0,hi=null,Ct=null,Vs=!1,Xs=0,Uo=1/0,Bo=null,nn=null,ct=0,ln=null,yl=null,vl=0,Qs=0,Js=null,Uf=null,pi=0,Is=null;function kt(){if((Ne&2)!==0&&Ee!==0)return Ee&-Ee;if(_.T!==null){var e=il;return e!==0?e:tc()}return Qi()}function Bf(){Xt===0&&(Xt=(Ee&536870912)===0||we?Ki():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Xt}function _t(e,t,a){(e===Le&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(bl(e,0),on(e,Ee,Xt,!1)),En(e,a),((Ne&2)===0||e!==Le)&&(e===Le&&((Ne&2)===0&&(zn|=a),Ve===4&&on(e,Ee,Xt,!1)),oa(e))}function zf(e,t,a){if((Ne&6)!==0)throw Error(s(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||pa(e,t),l=n?fg(e,t):$s(e,t,!0),i=n;do{if(l===0){ml&&!n&&on(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ug(a)){l=$s(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var p=e;l=hi;var v=p.current.memoizedState.isDehydrated;if(v&&(bl(p,c).flags|=256),c=$s(p,c,!1),c!==2){if(qs&&!v){p.errorRecoveryDisabledLanes|=i,zn|=i,l=4;break e}i=Ct,Ct=l,i!==null&&(Ct===null?Ct=i:Ct.push.apply(Ct,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){bl(e,0),on(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:on(n,t,Xt,!tn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Xs+300-St(),10<l)){if(on(n,t,Xt,!tn),Zt(n,0,!0)!==0)break e;n.timeoutHandle=hh(Hf.bind(null,n,a,Ct,Bo,Vs,t,Xt,zn,gl,tn,i,2,-0,0),l);break e}Hf(n,a,Ct,Bo,Vs,t,Xt,zn,gl,tn,i,0,-0,0)}}break}while(!0);oa(e)}function Hf(e,t,a,n,l,i,c,p,v,R,j,H,O,D){if(e.timeoutHandle=-1,H=t.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(Ei={stylesheets:null,count:0,unsuspend:Xg},kf(t),H=Jg(),H!==null)){e.cancelPendingCommit=H(Qf.bind(null,e,t,i,a,n,l,c,p,v,j,1,O,D)),on(e,i,c,!R);return}Qf(e,t,i,a,n,l,c,p,v)}function ug(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!Nt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t,a,n){t&=~Ks,t&=~zn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-dt(l),c=1<<i;n[i]=-1,l&=~c}a!==0&&Vi(e,a,t)}function zo(){return(Ne&6)===0?(mi(0),!1):!0}function Zs(){if(ve!==null){if(Re===0)var e=ve.return;else e=ve,xa=kn=null,fs(e),dl=null,ii=0,e=ve;for(;e!==null;)vf(e.alternate,e),e=e.return;ve=null}}function bl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Rg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zs(),Le=e,ve=a=Ea(e.current,null),Ee=t,Re=0,Dt=null,tn=!1,ml=pa(e,t),qs=!1,gl=Xt=Ks=zn=an=Ve=0,Ct=hi=null,Vs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-dt(n),i=1<<l;t|=e[l],n&=~i}return ka=t,io(),a}function Yf(e,t){pe=null,_.H=wo,t===Fl||t===mo?(t=ad(),Re=3):t===Wu?(t=ad(),Re=4):Re=t===nf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ve===null&&(Ve=1,Oo(e,Yt(t,e.current)))}function Gf(){var e=_.H;return _.H=wo,e===null?wo:e}function qf(){var e=_.A;return _.A=sg,e}function Fs(){Ve=4,tn||(Ee&4194048)!==Ee&&Vt.current!==null||(ml=!0),(an&134217727)===0&&(zn&134217727)===0||Le===null||on(Le,Ee,Xt,!1)}function $s(e,t,a){var n=Ne;Ne|=2;var l=Gf(),i=qf();(Le!==e||Ee!==t)&&(Bo=null,bl(e,t)),t=!1;var c=Ve;e:do try{if(Re!==0&&ve!==null){var p=ve,v=Dt;switch(Re){case 8:Zs(),c=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(t=!0);var R=Re;if(Re=0,Dt=null,Sl(e,p,v,R),a&&ml){c=0;break e}break;default:R=Re,Re=0,Dt=null,Sl(e,p,v,R)}}dg(),c=Ve;break}catch(j){Yf(e,j)}while(!0);return t&&e.shellSuspendCounter++,xa=kn=null,Ne=n,_.H=l,_.A=i,ve===null&&(Le=null,Ee=0,io()),c}function dg(){for(;ve!==null;)Kf(ve)}function fg(e,t){var a=Ne;Ne|=2;var n=Gf(),l=qf();Le!==e||Ee!==t?(Bo=null,Uo=St()+500,bl(e,t)):ml=pa(e,t);e:do try{if(Re!==0&&ve!==null){t=ve;var i=Dt;t:switch(Re){case 1:Re=0,Dt=null,Sl(e,t,i,1);break;case 2:case 9:if(ed(i)){Re=0,Dt=null,Vf(t);break}t=function(){Re!==2&&Re!==9||Le!==e||(Re=7),oa(e)},i.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:ed(i)?(Re=0,Dt=null,Vf(t)):(Re=0,Dt=null,Sl(e,t,i,7));break;case 5:var c=null;switch(ve.tag){case 26:c=ve.memoizedState;case 5:case 27:var p=ve;if(!c||wh(c)){Re=0,Dt=null;var v=p.sibling;if(v!==null)ve=v;else{var R=p.return;R!==null?(ve=R,Ho(R)):ve=null}break t}}Re=0,Dt=null,Sl(e,t,i,5);break;case 6:Re=0,Dt=null,Sl(e,t,i,6);break;case 8:Zs(),Ve=6;break e;default:throw Error(s(462))}}hg();break}catch(j){Yf(e,j)}while(!0);return xa=kn=null,_.H=n,_.A=l,Ne=a,ve!==null?0:(Le=null,Ee=0,io(),Ve)}function hg(){for(;ve!==null&&!da();)Kf(ve)}function Kf(e){var t=gf(e.alternate,e,ka);e.memoizedProps=e.pendingProps,t===null?Ho(e):ve=t}function Vf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=uf(a,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=uf(a,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:fs(t);default:vf(a,t),t=ve=Vu(t,ka),t=gf(a,t,ka)}e.memoizedProps=e.pendingProps,t===null?Ho(e):ve=t}function Sl(e,t,a,n){xa=kn=null,fs(t),dl=null,ii=0;var l=t.return;try{if(ag(e,l,t,a,Ee)){Ve=1,Oo(e,Yt(a,e.current)),ve=null;return}}catch(i){if(l!==null)throw ve=l,i;Ve=1,Oo(e,Yt(a,e.current)),ve=null;return}t.flags&32768?(we||n===1?e=!0:ml||(Ee&536870912)!==0?e=!1:(tn=e=!0,(n===2||n===9||n===3||n===6)&&(n=Vt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Xf(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){Xf(t,tn);return}e=t.return;var a=lg(t.alternate,t,ka);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ve===0&&(Ve=5)}function Xf(e,t){do{var a=ig(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Ve=6,ve=null}function Qf(e,t,a,n,l,i,c,p,v){e.cancelPendingCommit=null;do Yo();while(ct!==0);if((Ne&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Gr,An(e,a,i,c,p,v),e===Le&&(ve=Le=null,Ee=0),yl=t,ln=e,vl=a,Qs=i,Js=l,Uf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yg(vn,function(){return $f(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,l=J.p,J.p=2,c=Ne,Ne|=4;try{og(e,t,a)}finally{Ne=c,J.p=l,_.T=n}}ct=1,Jf(),If(),Zf()}}function Jf(){if(ct===1){ct=0;var e=ln,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=J.p;J.p=2;var l=Ne;Ne|=4;try{Mf(t,e);var i=cc,c=ju(e.containerInfo),p=i.focusedElem,v=i.selectionRange;if(c!==p&&p&&p.ownerDocument&&_u(p.ownerDocument.documentElement,p)){if(v!==null&&Ur(p)){var R=v.start,j=v.end;if(j===void 0&&(j=R),"selectionStart"in p)p.selectionStart=R,p.selectionEnd=Math.min(j,p.value.length);else{var H=p.ownerDocument||document,O=H&&H.defaultView||window;if(O.getSelection){var D=O.getSelection(),ue=p.textContent.length,re=Math.min(v.start,ue),De=v.end===void 0?re:Math.min(v.end,ue);!D.extend&&re>De&&(c=De,De=re,re=c);var x=ku(p,re),T=ku(p,De);if(x&&T&&(D.rangeCount!==1||D.anchorNode!==x.node||D.anchorOffset!==x.offset||D.focusNode!==T.node||D.focusOffset!==T.offset)){var N=H.createRange();N.setStart(x.node,x.offset),D.removeAllRanges(),re>De?(D.addRange(N),D.extend(T.node,T.offset)):(N.setEnd(T.node,T.offset),D.addRange(N))}}}}for(H=[],D=p;D=D.parentNode;)D.nodeType===1&&H.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<H.length;p++){var U=H[p];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Po=!!sc,cc=sc=null}finally{Ne=l,J.p=n,_.T=a}}e.current=t,ct=2}}function If(){if(ct===2){ct=0;var e=ln,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=J.p;J.p=2;var l=Ne;Ne|=4;try{wf(e,t.alternate,t)}finally{Ne=l,J.p=n,_.T=a}}ct=3}}function Zf(){if(ct===4||ct===3){ct=0,Ol();var e=ln,t=yl,a=vl,n=Uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,yl=ln=null,Ff(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(nn=null),ta(a),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Lt,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,l=J.p,J.p=2,_.T=null;try{for(var i=e.onRecoverableError,c=0;c<n.length;c++){var p=n[c];i(p.value,{componentStack:p.stack})}}finally{_.T=t,J.p=l}}(vl&3)!==0&&Yo(),oa(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Is?pi++:(pi=0,Is=e):pi=0,mi(0)}}function Ff(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function Yo(e){return Jf(),If(),Zf(),$f()}function $f(){if(ct!==5)return!1;var e=ln,t=Qs;Qs=0;var a=ta(vl),n=_.T,l=J.p;try{J.p=32>a?32:a,_.T=null,a=Js,Js=null;var i=ln,c=vl;if(ct=0,yl=ln=null,vl=0,(Ne&6)!==0)throw Error(s(331));var p=Ne;if(Ne|=4,jf(i.current),Df(i,i.current,c,a),Ne=p,mi(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Lt,i)}catch{}return!0}finally{J.p=l,_.T=n,Ff(e,t)}}function Pf(e,t,a){t=Yt(a,t),t=Cs(e.stateNode,t,2),e=Ia(e,t,2),e!==null&&(En(e,2),oa(e))}function _e(e,t,a){if(e.tag===3)Pf(e,e,a);else for(;t!==null;){if(t.tag===3){Pf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(nn===null||!nn.has(n))){e=Yt(a,e),a=tf(2),n=Ia(t,a,2),n!==null&&(af(a,n,t,e),En(n,2),oa(n));break}}t=t.return}}function Ps(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new cg;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(qs=!0,l.add(a),e=pg.bind(null,e,t,a),t.then(e,e))}function pg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Le===e&&(Ee&a)===a&&(Ve===4||Ve===3&&(Ee&62914560)===Ee&&300>St()-Xs?(Ne&2)===0&&bl(e,0):Ks|=a,gl===Ee&&(gl=0)),oa(e)}function Wf(e,t){t===0&&(t=Sn()),e=tl(e,t),e!==null&&(En(e,t),oa(e))}function mg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Wf(e,a)}function gg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(t),Wf(e,a)}function yg(e,t){return ea(e,t)}var Go=null,El=null,Ws=!1,qo=!1,ec=!1,Hn=0;function oa(e){e!==El&&e.next===null&&(El===null?Go=El=e:El=El.next=e),qo=!0,Ws||(Ws=!0,bg())}function mi(e,t){if(!ec&&qo){ec=!0;do for(var a=!1,n=Go;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var c=n.suspendedLanes,p=n.pingedLanes;i=(1<<31-dt(42|e)+1)-1,i&=l&~(c&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,nh(n,i))}else i=Ee,i=Zt(n,n===Le?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||pa(n,i)||(a=!0,nh(n,i));n=n.next}while(a);ec=!1}}function vg(){eh()}function eh(){qo=Ws=!1;var e=0;Hn!==0&&(Ng()&&(e=Hn),Hn=0);for(var t=St(),a=null,n=Go;n!==null;){var l=n.next,i=th(n,t);i===0?(n.next=null,a===null?Go=l:a.next=l,l===null&&(El=a)):(a=n,(e!==0||(i&3)!==0)&&(qo=!0)),n=l}mi(e)}function th(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-dt(i),p=1<<c,v=l[c];v===-1?((p&a)===0||(p&n)!==0)&&(l[c]=_l(p,t)):v<=t&&(e.expiredLanes|=p),i&=~p}if(t=Le,a=Ee,a=Zt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||pa(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ha(n),ta(a)){case 2:case 8:a=yn;break;case 32:a=vn;break;case 268435456:a=Yi;break;default:a=vn}return n=ah.bind(null,e),a=ea(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ha(n),e.callbackPriority=2,e.callbackNode=null,2}function ah(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yo()&&e.callbackNode!==a)return null;var n=Ee;return n=Zt(e,e===Le?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(zf(e,n,t),th(e,St()),e.callbackNode!=null&&e.callbackNode===a?ah.bind(null,e):null)}function nh(e,t){if(Yo())return null;zf(e,t,!0)}function bg(){Mg(function(){(Ne&6)!==0?ea(gn,vg):eh()})}function tc(){return Hn===0&&(Hn=Ki()),Hn}function lh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function ih(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Sg(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=lh((l[rt]||null).action),c=n.submitter;c&&(t=(t=c[rt]||null)?lh(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var p=new ao("action","action",null,n,l);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Hn!==0){var v=c?ih(l,c):new FormData(l);Es(a,{pending:!0,data:v,method:l.method,action:i},null,v)}}else typeof i=="function"&&(p.preventDefault(),v=c?ih(l,c):new FormData(l),Es(a,{pending:!0,data:v,method:l.method,action:i},i,v))},currentTarget:l}]})}}for(var ac=0;ac<Yr.length;ac++){var nc=Yr[ac],Eg=nc.toLowerCase(),Ag=nc[0].toUpperCase()+nc.slice(1);Ft(Eg,"on"+Ag)}Ft(Bu,"onAnimationEnd"),Ft(zu,"onAnimationIteration"),Ft(Hu,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Hm,"onTransitionRun"),Ft(Ym,"onTransitionStart"),Ft(Gm,"onTransitionCancel"),Ft(Yu,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function oh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var c=n.length-1;0<=c;c--){var p=n[c],v=p.instance,R=p.currentTarget;if(p=p.listener,v!==i&&l.isPropagationStopped())break e;i=p,l.currentTarget=R;try{i(l)}catch(j){Mo(j)}l.currentTarget=null,i=v}else for(c=0;c<n.length;c++){if(p=n[c],v=p.instance,R=p.currentTarget,p=p.listener,v!==i&&l.isPropagationStopped())break e;i=p,l.currentTarget=R;try{i(l)}catch(j){Mo(j)}l.currentTarget=null,i=v}}}}function be(e,t){var a=t[Et];a===void 0&&(a=t[Et]=new Set);var n=e+"__bubble";a.has(n)||(rh(t,e,2,!1),a.add(n))}function lc(e,t,a){var n=0;t&&(n|=4),rh(a,e,n,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[Ko]){e[Ko]=!0,Zi.forEach(function(a){a!=="selectionchange"&&(Tg.has(a)||lc(a,!1,e),lc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,lc("selectionchange",!1,t))}}function rh(e,t,a,n){switch(Dh(t)){case 2:var l=Fg;break;case 8:l=$g;break;default:l=bc}a=l.bind(null,t,a,e),l=void 0,!Nr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function oc(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var p=n.stateNode.containerInfo;if(p===l)break;if(c===4)for(c=n.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;p!==null;){if(c=ft(p),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){n=i=c;continue e}p=p.parentNode}}n=n.return}hu(function(){var R=i,j=wr(a),H=[];e:{var O=Gu.get(e);if(O!==void 0){var D=ao,ue=e;switch(e){case"keypress":if(eo(a)===0)break e;case"keydown":case"keyup":D=ym;break;case"focusin":ue="focus",D=Dr;break;case"focusout":ue="blur",D=Dr;break;case"beforeblur":case"afterblur":D=Dr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Sm;break;case Bu:case zu:case Hu:D=sm;break;case Yu:D=Am;break;case"scroll":case"scrollend":D=nm;break;case"wheel":D=xm;break;case"copy":case"cut":case"paste":D=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=vu;break;case"toggle":case"beforetoggle":D=Cm}var re=(t&4)!==0,De=!re&&(e==="scroll"||e==="scrollend"),x=re?O!==null?O+"Capture":null:O;re=[];for(var T=R,N;T!==null;){var U=T;if(N=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||N===null||x===null||(U=Ll(T,x),U!=null&&re.push(yi(T,U,N))),De)break;T=T.return}0<re.length&&(O=new D(O,ue,null,a,j),H.push({event:O,listeners:re}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",O&&a!==xr&&(ue=a.relatedTarget||a.fromElement)&&(ft(ue)||ue[qa]))break e;if((D||O)&&(O=j.window===j?j:(O=j.ownerDocument)?O.defaultView||O.parentWindow:window,D?(ue=a.relatedTarget||a.toElement,D=R,ue=ue?ft(ue):null,ue!==null&&(De=m(ue),re=ue.tag,ue!==De||re!==5&&re!==27&&re!==6)&&(ue=null)):(D=null,ue=R),D!==ue)){if(re=gu,U="onMouseLeave",x="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(re=vu,U="onPointerLeave",x="onPointerEnter",T="pointer"),De=D==null?O:Ka(D),N=ue==null?O:Ka(ue),O=new re(U,T+"leave",D,a,j),O.target=De,O.relatedTarget=N,U=null,ft(j)===R&&(re=new re(x,T+"enter",ue,a,j),re.target=N,re.relatedTarget=De,U=re),De=U,D&&ue)t:{for(re=D,x=ue,T=0,N=re;N;N=Al(N))T++;for(N=0,U=x;U;U=Al(U))N++;for(;0<T-N;)re=Al(re),T--;for(;0<N-T;)x=Al(x),N--;for(;T--;){if(re===x||x!==null&&re===x.alternate)break t;re=Al(re),x=Al(x)}re=null}else re=null;D!==null&&sh(H,O,D,re,!1),ue!==null&&De!==null&&sh(H,De,ue,re,!0)}}e:{if(O=R?Ka(R):window,D=O.nodeName&&O.nodeName.toLowerCase(),D==="select"||D==="input"&&O.type==="file")var $=Cu;else if(xu(O))if(Nu)$=Um;else{$=jm;var ge=_m}else D=O.nodeName,!D||D.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&Tr(R.elementType)&&($=Cu):$=Lm;if($&&($=$(e,R))){wu(H,$,a,j);break e}ge&&ge(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&Ar(O,"number",O.value)}switch(ge=R?Ka(R):window,e){case"focusin":(xu(ge)||ge.contentEditable==="true")&&(Pn=ge,Br=R,Kl=null);break;case"focusout":Kl=Br=Pn=null;break;case"mousedown":zr=!0;break;case"contextmenu":case"mouseup":case"dragend":zr=!1,Lu(H,a,j);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":Lu(H,a,j)}var ae;if(_r)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else $n?Au(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(bu&&a.locale!=="ko"&&($n||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&$n&&(ae=pu()):(Va=j,Rr="value"in Va?Va.value:Va.textContent,$n=!0)),ge=Vo(R,ce),0<ge.length&&(ce=new yu(ce,e,null,a,j),H.push({event:ce,listeners:ge}),ae?ce.data=ae:(ae=Tu(a),ae!==null&&(ce.data=ae)))),(ae=Rm?Mm(e,a):Om(e,a))&&(ce=Vo(R,"onBeforeInput"),0<ce.length&&(ge=new yu("onBeforeInput","beforeinput",null,a,j),H.push({event:ge,listeners:ce}),ge.data=ae)),Sg(H,e,R,a,j)}oh(H,t)})}function yi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vo(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ll(e,a),l!=null&&n.unshift(yi(e,l,i)),l=Ll(e,t),l!=null&&n.push(yi(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Al(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sh(e,t,a,n,l){for(var i=t._reactName,c=[];a!==null&&a!==n;){var p=a,v=p.alternate,R=p.stateNode;if(p=p.tag,v!==null&&v===n)break;p!==5&&p!==26&&p!==27||R===null||(v=R,l?(R=Ll(a,i),R!=null&&c.unshift(yi(a,R,v))):l||(R=Ll(a,i),R!=null&&c.push(yi(a,R,v)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var xg=/\r\n?/g,wg=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace(xg,`
`).replace(wg,"")}function uh(e,t){return t=ch(t),ch(e)===t}function Xo(){}function Oe(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||In(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&In(e,""+n);break;case"className":At(e,"class",n);break;case"tabIndex":At(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":At(e,a,n);break;case"style":du(e,n,i);break;case"data":if(t!=="object"){At(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Pi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",l.name,l,null),Oe(e,t,"formEncType",l.formEncType,l,null),Oe(e,t,"formMethod",l.formMethod,l,null),Oe(e,t,"formTarget",l.formTarget,l,null)):(Oe(e,t,"encType",l.encType,l,null),Oe(e,t,"method",l.method,l,null),Oe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Pi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Xo);break;case"onScroll":n!=null&&be("scroll",e);break;case"onScrollEnd":n!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Pi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":be("beforetoggle",e),be("toggle",e),We(e,"popover",n);break;case"xlinkActuate":ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ht(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ht(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ht(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ht(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":We(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tm.get(a)||a,We(e,a,n))}}function rc(e,t,a,n,l,i){switch(a){case"style":du(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof n=="string"?In(e,n):(typeof n=="number"||typeof n=="bigint")&&In(e,""+n);break;case"onScroll":n!=null&&be("scroll",e);break;case"onScrollEnd":n!=null&&be("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[rt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):We(e,a,n)}}}function ut(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Oe(e,t,i,c,a,null)}}l&&Oe(e,t,"srcSet",a.srcSet,a,null),n&&Oe(e,t,"src",a.src,a,null);return;case"input":be("invalid",e);var p=i=c=l=null,v=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var j=a[n];if(j!=null)switch(n){case"name":l=j;break;case"type":c=j;break;case"checked":v=j;break;case"defaultChecked":R=j;break;case"value":i=j;break;case"defaultValue":p=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:Oe(e,t,n,j,a,null)}}ru(e,i,p,v,R,c,l,!1),Fi(e);return;case"select":be("invalid",e),n=c=i=null;for(l in a)if(a.hasOwnProperty(l)&&(p=a[l],p!=null))switch(l){case"value":i=p;break;case"defaultValue":c=p;break;case"multiple":n=p;default:Oe(e,t,l,p,a,null)}t=i,a=c,e.multiple=!!n,t!=null?Jn(e,!!n,t,!1):a!=null&&Jn(e,!!n,a,!0);return;case"textarea":be("invalid",e),i=l=n=null;for(c in a)if(a.hasOwnProperty(c)&&(p=a[c],p!=null))switch(c){case"value":n=p;break;case"defaultValue":l=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(91));break;default:Oe(e,t,c,p,a,null)}cu(e,n,l,i),Fi(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Oe(e,t,v,n,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(n=0;n<gi.length;n++)be(gi[n],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Oe(e,t,R,n,a,null)}return;default:if(Tr(t)){for(j in a)a.hasOwnProperty(j)&&(n=a[j],n!==void 0&&rc(e,t,j,n,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(n=a[p],n!=null&&Oe(e,t,p,n,a,null))}function Cg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,p=null,v=null,R=null,j=null;for(D in a){var H=a[D];if(a.hasOwnProperty(D)&&H!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=H;default:n.hasOwnProperty(D)||Oe(e,t,D,null,n,H)}}for(var O in n){var D=n[O];if(H=a[O],n.hasOwnProperty(O)&&(D!=null||H!=null))switch(O){case"type":i=D;break;case"name":l=D;break;case"checked":R=D;break;case"defaultChecked":j=D;break;case"value":c=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:D!==H&&Oe(e,t,O,D,n,H)}}Er(e,c,p,v,R,j,i,l);return;case"select":D=c=p=O=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":D=v;default:n.hasOwnProperty(i)||Oe(e,t,i,null,n,v)}for(l in n)if(i=n[l],v=a[l],n.hasOwnProperty(l)&&(i!=null||v!=null))switch(l){case"value":O=i;break;case"defaultValue":p=i;break;case"multiple":c=i;default:i!==v&&Oe(e,t,l,i,n,v)}t=p,a=c,n=D,O!=null?Jn(e,!!a,O,!1):!!n!=!!a&&(t!=null?Jn(e,!!a,t,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":D=O=null;for(p in a)if(l=a[p],a.hasOwnProperty(p)&&l!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Oe(e,t,p,null,n,l)}for(c in n)if(l=n[c],i=a[c],n.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":O=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&Oe(e,t,c,l,n,i)}su(e,O,D);return;case"option":for(var ue in a)if(O=a[ue],a.hasOwnProperty(ue)&&O!=null&&!n.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Oe(e,t,ue,null,n,O)}for(v in n)if(O=n[v],D=a[v],n.hasOwnProperty(v)&&O!==D&&(O!=null||D!=null))switch(v){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Oe(e,t,v,O,n,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)O=a[re],a.hasOwnProperty(re)&&O!=null&&!n.hasOwnProperty(re)&&Oe(e,t,re,null,n,O);for(R in n)if(O=n[R],D=a[R],n.hasOwnProperty(R)&&O!==D&&(O!=null||D!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Oe(e,t,R,O,n,D)}return;default:if(Tr(t)){for(var De in a)O=a[De],a.hasOwnProperty(De)&&O!==void 0&&!n.hasOwnProperty(De)&&rc(e,t,De,void 0,n,O);for(j in n)O=n[j],D=a[j],!n.hasOwnProperty(j)||O===D||O===void 0&&D===void 0||rc(e,t,j,O,n,D);return}}for(var x in a)O=a[x],a.hasOwnProperty(x)&&O!=null&&!n.hasOwnProperty(x)&&Oe(e,t,x,null,n,O);for(H in n)O=n[H],D=a[H],!n.hasOwnProperty(H)||O===D||O==null&&D==null||Oe(e,t,H,O,n,D)}var sc=null,cc=null;function Qo(e){return e.nodeType===9?e:e.ownerDocument}function dh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dc=null;function Ng(){var e=window.event;return e&&e.type==="popstate"?e===dc?!1:(dc=e,!0):(dc=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(e){return ph.resolve(null).then(e).catch(Og)}:hh;function Og(e){setTimeout(function(){throw e})}function rn(e){return e==="head"}function mh(e,t){var a=t,n=0,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<n&&8>n){a=n;var c=e.ownerDocument;if(a&1&&vi(c.documentElement),a&2&&vi(c.body),a&4)for(a=c.head,vi(a),c=a.firstChild;c;){var p=c.nextSibling,v=c.nodeName;c[ga]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}if(l===0){e.removeChild(i),Ci(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=i}while(a);Ci(t)}function fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fc(a),Xn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dg(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function kg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function _g(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var pc=null;function gh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function yh(e,t,a){switch(t=Qo(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function vi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xn(e)}var Qt=new Map,vh=new Set;function Jo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=J.d;J.d={f:jg,r:Lg,D:Ug,C:Bg,L:zg,m:Hg,X:Gg,S:Yg,M:qg};function jg(){var e=_a.f(),t=zo();return e||t}function Lg(e){var t=ya(e);t!==null&&t.tag===5&&t.type==="form"?Bd(t):_a.r(e)}var Tl=typeof document>"u"?null:document;function bh(e,t,a){var n=Tl;if(n&&typeof t=="string"&&t){var l=Ht(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),vh.has(l)||(vh.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ut(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Ug(e){_a.D(e),bh("dns-prefetch",e,null)}function Bg(e,t){_a.C(e,t),bh("preconnect",e,t)}function zg(e,t,a){_a.L(e,t,a);var n=Tl;if(n&&e&&t){var l='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ht(a.imageSizes)+'"]')):l+='[href="'+Ht(e)+'"]';var i=l;switch(t){case"style":i=xl(e);break;case"script":i=wl(e)}Qt.has(i)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(bi(i))||t==="script"&&n.querySelector(Si(i))||(t=n.createElement("link"),ut(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Hg(e,t){_a.m(e,t);var a=Tl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ht(n)+'"][href="'+Ht(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wl(e)}if(!Qt.has(i)&&(e=S({rel:"modulepreload",href:e},t),Qt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Si(i)))return}n=a.createElement("link"),ut(n,"link",e),Xe(n),a.head.appendChild(n)}}}function Yg(e,t,a){_a.S(e,t,a);var n=Tl;if(n&&e){var l=va(n).hoistableStyles,i=xl(e);t=t||"default";var c=l.get(i);if(!c){var p={loading:0,preload:null};if(c=n.querySelector(bi(i)))p.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(i))&&mc(e,a);var v=c=n.createElement("link");Xe(v),ut(v,"link",e),v._p=new Promise(function(R,j){v.onload=R,v.onerror=j}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Io(c,t,n)}c={type:"stylesheet",instance:c,count:1,state:p},l.set(i,c)}}}function Gg(e,t){_a.X(e,t);var a=Tl;if(a&&e){var n=va(a).hoistableScripts,l=wl(e),i=n.get(l);i||(i=a.querySelector(Si(l)),i||(e=S({src:e,async:!0},t),(t=Qt.get(l))&&gc(e,t),i=a.createElement("script"),Xe(i),ut(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function qg(e,t){_a.M(e,t);var a=Tl;if(a&&e){var n=va(a).hoistableScripts,l=wl(e),i=n.get(l);i||(i=a.querySelector(Si(l)),i||(e=S({src:e,async:!0,type:"module"},t),(t=Qt.get(l))&&gc(e,t),i=a.createElement("script"),Xe(i),ut(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Sh(e,t,a,n){var l=(l=se.current)?Jo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xl(a.href),a=va(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xl(a.href);var i=va(l).hoistableStyles,c=i.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=l.querySelector(bi(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),i||Kg(l,e,a,c.state))),t&&n===null)throw Error(s(528,""));return c}if(t&&n!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wl(a),a=va(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xl(e){return'href="'+Ht(e)+'"'}function bi(e){return'link[rel="stylesheet"]['+e+"]"}function Eh(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Kg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ut(t,"link",a),Xe(t),e.head.appendChild(t))}function wl(e){return'[src="'+Ht(e)+'"]'}function Si(e){return"script[async]"+e}function Ah(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(n)return t.instance=n,Xe(n),n;var l=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Xe(n),ut(n,"style",l),Io(n,a.precedence,e),t.instance=n;case"stylesheet":l=xl(a.href);var i=e.querySelector(bi(l));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;n=Eh(a),(l=Qt.get(l))&&mc(n,l),i=(e.ownerDocument||e).createElement("link"),Xe(i);var c=i;return c._p=new Promise(function(p,v){c.onload=p,c.onerror=v}),ut(i,"link",n),t.state.loading|=4,Io(i,a.precedence,e),t.instance=i;case"script":return i=wl(a.src),(l=e.querySelector(Si(i)))?(t.instance=l,Xe(l),l):(n=a,(l=Qt.get(i))&&(n=S({},a),gc(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Xe(l),ut(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Io(n,a.precedence,e));return t.instance}function Io(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,c=0;c<n.length;c++){var p=n[c];if(p.dataset.precedence===t)i=p;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zo=null;function Th(e,t,a){if(Zo===null){var n=new Map,l=Zo=new Map;l.set(a,n)}else l=Zo,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[ga]||i[$e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var p=n.get(c);p?p.push(i):n.set(c,[i])}}return n}function xh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Vg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ei=null;function Xg(){}function Qg(e,t,a){if(Ei===null)throw Error(s(475));var n=Ei;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=xl(a.href),i=e.querySelector(bi(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Fo.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,Xe(i);return}i=e.ownerDocument||e,a=Eh(a),(l=Qt.get(l))&&mc(a,l),i=i.createElement("link"),Xe(i);var c=i;c._p=new Promise(function(p,v){c.onload=p,c.onerror=v}),ut(i,"link",a),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Fo.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Jg(){if(Ei===null)throw Error(s(475));var e=Ei;return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Fo(){if(this.count--,this.count===0){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $o=null;function yc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$o=new Map,t.forEach(Ig,e),$o=null,Fo.call(e))}function Ig(e,t){if(!(t.state.loading&4)){var a=$o.get(e);if(a)var n=a.get(null);else{a=new Map,$o.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),n=c)}n&&a.set(null,n)}l=t.instance,c=l.getAttribute("data-precedence"),i=a.get(c)||n,i===n&&a.set(null,l),a.set(c,l),this.count++,n=Fo.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ai={$$typeof:P,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Zg(e,t,a,n,l,i,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ga(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.hiddenUpdates=Ga(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Ch(e,t,a,n,l,i,c,p,v,R,j,H){return e=new Zg(e,t,a,c,p,v,R,H),t=1,i===!0&&(t|=24),i=Rt(3,null,null,t),e.current=i,i.stateNode=e,t=Pr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},as(i),e}function Nh(e){return e?(e=al,e):al}function Rh(e,t,a,n,l,i){l=Nh(l),n.context===null?n.context=l:n.pendingContext=l,n=Ja(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=Ia(e,n,t),a!==null&&(_t(a,e,t),Pl(a,e,t))}function Mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function vc(e,t){Mh(e,t),(e=e.alternate)&&Mh(e,t)}function Oh(e){if(e.tag===13){var t=tl(e,67108864);t!==null&&_t(t,e,67108864),vc(e,67108864)}}var Po=!0;function Fg(e,t,a,n){var l=_.T;_.T=null;var i=J.p;try{J.p=2,bc(e,t,a,n)}finally{J.p=i,_.T=l}}function $g(e,t,a,n){var l=_.T;_.T=null;var i=J.p;try{J.p=8,bc(e,t,a,n)}finally{J.p=i,_.T=l}}function bc(e,t,a,n){if(Po){var l=Sc(n);if(l===null)oc(e,t,n,Wo,a),kh(e,n);else if(Wg(l,e,t,a,n))n.stopPropagation();else if(kh(e,n),t&4&&-1<Pg.indexOf(e)){for(;l!==null;){var i=ya(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ot(i.pendingLanes);if(c!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var v=1<<31-dt(c);p.entanglements[1]|=v,c&=~v}oa(i),(Ne&6)===0&&(Uo=St()+500,mi(0))}}break;case 13:p=tl(i,2),p!==null&&_t(p,i,2),zo(),vc(i,2)}if(i=Sc(n),i===null&&oc(e,t,n,Wo,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else oc(e,t,n,null,a)}}function Sc(e){return e=wr(e),Ec(e)}var Wo=null;function Ec(e){if(Wo=null,e=ft(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wo=e,null}function Dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ya()){case gn:return 2;case yn:return 8;case vn:case Hi:return 32;case Yi:return 268435456;default:return 32}default:return 32}}var Ac=!1,sn=null,cn=null,un=null,Ti=new Map,xi=new Map,dn=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kh(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function wi(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ya(t),t!==null&&Oh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Wg(e,t,a,n,l){switch(t){case"focusin":return sn=wi(sn,e,t,a,n,l),!0;case"dragenter":return cn=wi(cn,e,t,a,n,l),!0;case"mouseover":return un=wi(un,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Ti.set(i,wi(Ti.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,xi.set(i,wi(xi.get(i)||null,e,t,a,n,l)),!0}return!1}function _h(e){var t=ft(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,Ji(e.priority,function(){if(a.tag===13){var n=kt();n=He(n);var l=tl(a,n);l!==null&&_t(l,a,n),vc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Sc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);xr=n,a.target.dispatchEvent(n),xr=null}else return t=ya(a),t!==null&&Oh(t),e.blockedOn=a,!1;t.shift()}return!0}function jh(e,t,a){er(e)&&a.delete(t)}function ey(){Ac=!1,sn!==null&&er(sn)&&(sn=null),cn!==null&&er(cn)&&(cn=null),un!==null&&er(un)&&(un=null),Ti.forEach(jh),xi.forEach(jh)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ac||(Ac=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ey)))}var ar=null;function Lh(e){ar!==e&&(ar=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ar===e&&(ar=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Ec(n||a)===null)continue;break}var i=ya(a);i!==null&&(e.splice(t,3),t-=3,Es(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Ci(e){function t(v){return tr(v,e)}sn!==null&&tr(sn,e),cn!==null&&tr(cn,e),un!==null&&tr(un,e),Ti.forEach(t),xi.forEach(t);for(var a=0;a<dn.length;a++){var n=dn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<dn.length&&(a=dn[0],a.blockedOn===null);)_h(a),a.blockedOn===null&&dn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],c=l[rt]||null;if(typeof i=="function")c||Lh(a);else if(c){var p=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[rt]||null)p=c.formAction;else if(Ec(l)!==null)continue}else p=c.action;typeof p=="function"?a[n+1]=p:(a.splice(n,3),n-=3),Lh(a)}}}function Tc(e){this._internalRoot=e}nr.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,n=kt();Rh(a,n,e,t,null,null)},nr.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rh(e.current,2,null,e,null,null),zo(),t[qa]=null}};function nr(e){this._internalRoot=e}nr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qi();e={blockedOn:null,target:e,priority:t};for(var a=0;a<dn.length&&t!==0&&t<dn[a].priority;a++);dn.splice(a,0,e),a===0&&_h(e)}};var Uh=r.version;if(Uh!=="19.1.0")throw Error(s(527,Uh,"19.1.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var ty={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{Lt=lr.inject(ty),Be=lr}catch{}}return Ri.createRoot=function(e,t){if(!d(e))throw Error(s(299));var a=!1,n="",l=$d,i=Pd,c=Wd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=Ch(e,1,!1,null,null,a,n,l,i,c,p,null),e[qa]=t.current,ic(e),new Tc(t)},Ri.hydrateRoot=function(e,t,a){if(!d(e))throw Error(s(299));var n=!1,l="",i=$d,c=Pd,p=Wd,v=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),t=Ch(e,1,!0,t,a??null,n,l,i,c,p,v,R),t.context=Nh(null),a=t.current,n=kt(),n=He(n),l=Ja(n),l.callback=null,Ia(a,l,n),a=n,t.current.lanes=a,En(t,a),oa(t),e[qa]=t.current,ic(e),new nr(t)},Ri.version="19.1.0",Ri}var Qh;function hy(){if(Qh)return Cc.exports;Qh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Cc.exports=fy(),Cc.exports}var py=hy();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jh="popstate";function my(o={}){function r(s,d){let{pathname:m,search:y,hash:b}=s.location;return Yc("",{pathname:m,search:y,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(s,d){return typeof d=="string"?d:Li(d)}return yy(r,u,null,o)}function Ge(o,r){if(o===!1||o===null||typeof o>"u")throw new Error(r)}function ca(o,r){if(!o){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function gy(){return Math.random().toString(36).substring(2,10)}function Ih(o,r){return{usr:o.state,key:o.key,idx:r}}function Yc(o,r,u=null,s){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof r=="string"?Nl(r):r,state:u,key:r&&r.key||s||gy()}}function Li({pathname:o="/",search:r="",hash:u=""}){return r&&r!=="?"&&(o+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(o+=u.charAt(0)==="#"?u:"#"+u),o}function Nl(o){let r={};if(o){let u=o.indexOf("#");u>=0&&(r.hash=o.substring(u),o=o.substring(0,u));let s=o.indexOf("?");s>=0&&(r.search=o.substring(s),o=o.substring(0,s)),o&&(r.pathname=o)}return r}function yy(o,r,u,s={}){let{window:d=document.defaultView,v5Compat:m=!1}=s,y=d.history,b="POP",g=null,f=S();f==null&&(f=0,y.replaceState({...y.state,idx:f},""));function S(){return(y.state||{idx:null}).idx}function C(){b="POP";let K=S(),z=K==null?null:K-f;f=K,g&&g({action:b,location:q.location,delta:z})}function M(K,z){b="PUSH";let ee=Yc(q.location,K,z);f=S()+1;let P=Ih(ee,f),ie=q.createHref(ee);try{y.pushState(P,"",ie)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;d.location.assign(ie)}m&&g&&g({action:b,location:q.location,delta:1})}function k(K,z){b="REPLACE";let ee=Yc(q.location,K,z);f=S();let P=Ih(ee,f),ie=q.createHref(ee);y.replaceState(P,"",ie),m&&g&&g({action:b,location:q.location,delta:0})}function B(K){return vy(K)}let q={get action(){return b},get location(){return o(d,y)},listen(K){if(g)throw new Error("A history only accepts one active listener");return d.addEventListener(Jh,C),g=K,()=>{d.removeEventListener(Jh,C),g=null}},createHref(K){return r(d,K)},createURL:B,encodeLocation(K){let z=B(K);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:M,replace:k,go(K){return y.go(K)}};return q}function vy(o,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let s=typeof o=="string"?o:Li(o);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function hp(o,r,u="/"){return by(o,r,u,!1)}function by(o,r,u,s){let d=typeof r=="string"?Nl(r):r,m=La(d.pathname||"/",u);if(m==null)return null;let y=pp(o);Sy(y);let b=null;for(let g=0;b==null&&g<y.length;++g){let f=Dy(m);b=My(y[g],f,s)}return b}function pp(o,r=[],u=[],s=""){let d=(m,y,b)=>{let g={relativePath:b===void 0?m.path||"":b,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};g.relativePath.startsWith("/")&&(Ge(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let f=ja([s,g.relativePath]),S=u.concat(g);m.children&&m.children.length>0&&(Ge(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),pp(m.children,r,S,f)),!(m.path==null&&!m.index)&&r.push({path:f,score:Ny(f,m.index),routesMeta:S})};return o.forEach((m,y)=>{if(m.path===""||!m.path?.includes("?"))d(m,y);else for(let b of mp(m.path))d(m,y,b)}),r}function mp(o){let r=o.split("/");if(r.length===0)return[];let[u,...s]=r,d=u.endsWith("?"),m=u.replace(/\?$/,"");if(s.length===0)return d?[m,""]:[m];let y=mp(s.join("/")),b=[];return b.push(...y.map(g=>g===""?m:[m,g].join("/"))),d&&b.push(...y),b.map(g=>o.startsWith("/")&&g===""?"/":g)}function Sy(o){o.sort((r,u)=>r.score!==u.score?u.score-r.score:Ry(r.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var Ey=/^:[\w-]+$/,Ay=3,Ty=2,xy=1,wy=10,Cy=-2,Zh=o=>o==="*";function Ny(o,r){let u=o.split("/"),s=u.length;return u.some(Zh)&&(s+=Cy),r&&(s+=Ty),u.filter(d=>!Zh(d)).reduce((d,m)=>d+(Ey.test(m)?Ay:m===""?xy:wy),s)}function Ry(o,r){return o.length===r.length&&o.slice(0,-1).every((s,d)=>s===r[d])?o[o.length-1]-r[r.length-1]:0}function My(o,r,u=!1){let{routesMeta:s}=o,d={},m="/",y=[];for(let b=0;b<s.length;++b){let g=s[b],f=b===s.length-1,S=m==="/"?r:r.slice(m.length)||"/",C=hr({path:g.relativePath,caseSensitive:g.caseSensitive,end:f},S),M=g.route;if(!C&&f&&u&&!s[s.length-1].route.index&&(C=hr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},S)),!C)return null;Object.assign(d,C.params),y.push({params:d,pathname:ja([m,C.pathname]),pathnameBase:Ly(ja([m,C.pathnameBase])),route:M}),C.pathnameBase!=="/"&&(m=ja([m,C.pathnameBase]))}return y}function hr(o,r){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[u,s]=Oy(o.path,o.caseSensitive,o.end),d=r.match(u);if(!d)return null;let m=d[0],y=m.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:s.reduce((f,{paramName:S,isOptional:C},M)=>{if(S==="*"){let B=b[M]||"";y=m.slice(0,m.length-B.length).replace(/(.)\/+$/,"$1")}const k=b[M];return C&&!k?f[S]=void 0:f[S]=(k||"").replace(/%2F/g,"/"),f},{}),pathname:m,pathnameBase:y,pattern:o}}function Oy(o,r=!1,u=!0){ca(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let s=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,g)=>(s.push({paramName:b,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(s.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,r?void 0:"i"),s]}function Dy(o){try{return o.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ca(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),o}}function La(o,r){if(r==="/")return o;if(!o.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,s=o.charAt(u);return s&&s!=="/"?null:o.slice(u)||"/"}function ky(o,r="/"){let{pathname:u,search:s="",hash:d=""}=typeof o=="string"?Nl(o):o;return{pathname:u?u.startsWith("/")?u:_y(u,r):r,search:Uy(s),hash:By(d)}}function _y(o,r){let u=r.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Oc(o,r,u,s){return`Cannot include a '${o}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jy(o){return o.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function gp(o){let r=jy(o);return r.map((u,s)=>s===r.length-1?u.pathname:u.pathnameBase)}function yp(o,r,u,s=!1){let d;typeof o=="string"?d=Nl(o):(d={...o},Ge(!d.pathname||!d.pathname.includes("?"),Oc("?","pathname","search",d)),Ge(!d.pathname||!d.pathname.includes("#"),Oc("#","pathname","hash",d)),Ge(!d.search||!d.search.includes("#"),Oc("#","search","hash",d)));let m=o===""||d.pathname==="",y=m?"/":d.pathname,b;if(y==null)b=u;else{let C=r.length-1;if(!s&&y.startsWith("..")){let M=y.split("/");for(;M[0]==="..";)M.shift(),C-=1;d.pathname=M.join("/")}b=C>=0?r[C]:"/"}let g=ky(d,b),f=y&&y!=="/"&&y.endsWith("/"),S=(m||y===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(f||S)&&(g.pathname+="/"),g}var ja=o=>o.join("/").replace(/\/\/+/g,"/"),Ly=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Uy=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,By=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function zy(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var vp=["POST","PUT","PATCH","DELETE"];new Set(vp);var Hy=["GET",...vp];new Set(Hy);var Rl=w.createContext(null);Rl.displayName="DataRouter";var gr=w.createContext(null);gr.displayName="DataRouterState";w.createContext(!1);var bp=w.createContext({isTransitioning:!1});bp.displayName="ViewTransition";var Yy=w.createContext(new Map);Yy.displayName="Fetchers";var Gy=w.createContext(null);Gy.displayName="Await";var ua=w.createContext(null);ua.displayName="Navigation";var Ui=w.createContext(null);Ui.displayName="Location";var Ba=w.createContext({outlet:null,matches:[],isDataRoute:!1});Ba.displayName="Route";var Pc=w.createContext(null);Pc.displayName="RouteError";function qy(o,{relative:r}={}){Ge(Bi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=w.useContext(ua),{hash:d,pathname:m,search:y}=zi(o,{relative:r}),b=m;return u!=="/"&&(b=m==="/"?u:ja([u,m])),s.createHref({pathname:b,search:y,hash:d})}function Bi(){return w.useContext(Ui)!=null}function za(){return Ge(Bi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Ui).location}var Sp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ep(o){w.useContext(ua).static||w.useLayoutEffect(o)}function Kn(){let{isDataRoute:o}=w.useContext(Ba);return o?tv():Ky()}function Ky(){Ge(Bi(),"useNavigate() may be used only in the context of a <Router> component.");let o=w.useContext(Rl),{basename:r,navigator:u}=w.useContext(ua),{matches:s}=w.useContext(Ba),{pathname:d}=za(),m=JSON.stringify(gp(s)),y=w.useRef(!1);return Ep(()=>{y.current=!0}),w.useCallback((g,f={})=>{if(ca(y.current,Sp),!y.current)return;if(typeof g=="number"){u.go(g);return}let S=yp(g,JSON.parse(m),d,f.relative==="path");o==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:ja([r,S.pathname])),(f.replace?u.replace:u.push)(S,f.state,f)},[r,u,m,d,o])}w.createContext(null);function zi(o,{relative:r}={}){let{matches:u}=w.useContext(Ba),{pathname:s}=za(),d=JSON.stringify(gp(u));return w.useMemo(()=>yp(o,JSON.parse(d),s,r==="path"),[o,d,s,r])}function Vy(o,r){return Ap(o,r)}function Ap(o,r,u,s){Ge(Bi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=w.useContext(ua),{matches:m}=w.useContext(Ba),y=m[m.length-1],b=y?y.params:{},g=y?y.pathname:"/",f=y?y.pathnameBase:"/",S=y&&y.route;{let z=S&&S.path||"";Tp(g,!S||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let C=za(),M;if(r){let z=typeof r=="string"?Nl(r):r;Ge(f==="/"||z.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${z.pathname}" was given in the \`location\` prop.`),M=z}else M=C;let k=M.pathname||"/",B=k;if(f!=="/"){let z=f.replace(/^\//,"").split("/");B="/"+k.replace(/^\//,"").split("/").slice(z.length).join("/")}let q=hp(o,{pathname:B});ca(S||q!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),ca(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Zy(q&&q.map(z=>Object.assign({},z,{params:Object.assign({},b,z.params),pathname:ja([f,d.encodeLocation?d.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?f:ja([f,d.encodeLocation?d.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),m,u,s);return r&&K?w.createElement(Ui.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},K):K}function Xy(){let o=ev(),r=zy(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),u=o instanceof Error?o.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},y=null;return console.error("Error handled by React Router default ErrorBoundary:",o),y=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:m},"ErrorBoundary")," or"," ",w.createElement("code",{style:m},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},r),u?w.createElement("pre",{style:d},u):null,y)}var Qy=w.createElement(Xy,null),Jy=class extends w.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,r){return r.location!==o.location||r.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:r.error,location:r.location,revalidation:o.revalidation||r.revalidation}}componentDidCatch(o,r){console.error("React Router caught the following error during render",o,r)}render(){return this.state.error!==void 0?w.createElement(Ba.Provider,{value:this.props.routeContext},w.createElement(Pc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Iy({routeContext:o,match:r,children:u}){let s=w.useContext(Rl);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Ba.Provider,{value:o},u)}function Zy(o,r=[],u=null,s=null){if(o==null){if(!u)return null;if(u.errors)o=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)o=u.matches;else return null}let d=o,m=u?.errors;if(m!=null){let g=d.findIndex(f=>f.route.id&&m?.[f.route.id]!==void 0);Ge(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let y=!1,b=-1;if(u)for(let g=0;g<d.length;g++){let f=d[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(b=g),f.route.id){let{loaderData:S,errors:C}=u,M=f.route.loader&&!S.hasOwnProperty(f.route.id)&&(!C||C[f.route.id]===void 0);if(f.route.lazy||M){y=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((g,f,S)=>{let C,M=!1,k=null,B=null;u&&(C=m&&f.route.id?m[f.route.id]:void 0,k=f.route.errorElement||Qy,y&&(b<0&&S===0?(Tp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,B=null):b===S&&(M=!0,B=f.route.hydrateFallbackElement||null)));let q=r.concat(d.slice(0,S+1)),K=()=>{let z;return C?z=k:M?z=B:f.route.Component?z=w.createElement(f.route.Component,null):f.route.element?z=f.route.element:z=g,w.createElement(Iy,{match:f,routeContext:{outlet:g,matches:q,isDataRoute:u!=null},children:z})};return u&&(f.route.ErrorBoundary||f.route.errorElement||S===0)?w.createElement(Jy,{location:u.location,revalidation:u.revalidation,component:k,error:C,children:K(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):K()},null)}function Wc(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fy(o){let r=w.useContext(Rl);return Ge(r,Wc(o)),r}function $y(o){let r=w.useContext(gr);return Ge(r,Wc(o)),r}function Py(o){let r=w.useContext(Ba);return Ge(r,Wc(o)),r}function eu(o){let r=Py(o),u=r.matches[r.matches.length-1];return Ge(u.route.id,`${o} can only be used on routes that contain a unique "id"`),u.route.id}function Wy(){return eu("useRouteId")}function ev(){let o=w.useContext(Pc),r=$y("useRouteError"),u=eu("useRouteError");return o!==void 0?o:r.errors?.[u]}function tv(){let{router:o}=Fy("useNavigate"),r=eu("useNavigate"),u=w.useRef(!1);return Ep(()=>{u.current=!0}),w.useCallback(async(d,m={})=>{ca(u.current,Sp),u.current&&(typeof d=="number"?o.navigate(d):await o.navigate(d,{fromRouteId:r,...m}))},[o,r])}var Fh={};function Tp(o,r,u){!r&&!Fh[o]&&(Fh[o]=!0,ca(!1,u))}w.memo(av);function av({routes:o,future:r,state:u}){return Ap(o,void 0,u,r)}function Cl(o){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nv({basename:o="/",children:r=null,location:u,navigationType:s="POP",navigator:d,static:m=!1}){Ge(!Bi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=o.replace(/^\/*/,"/"),b=w.useMemo(()=>({basename:y,navigator:d,static:m,future:{}}),[y,d,m]);typeof u=="string"&&(u=Nl(u));let{pathname:g="/",search:f="",hash:S="",state:C=null,key:M="default"}=u,k=w.useMemo(()=>{let B=La(g,y);return B==null?null:{location:{pathname:B,search:f,hash:S,state:C,key:M},navigationType:s}},[y,g,f,S,C,M,s]);return ca(k!=null,`<Router basename="${y}"> is not able to match the URL "${g}${f}${S}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:w.createElement(ua.Provider,{value:b},w.createElement(Ui.Provider,{children:r,value:k}))}function lv({children:o,location:r}){return Vy(Gc(o),r)}function Gc(o,r=[]){let u=[];return w.Children.forEach(o,(s,d)=>{if(!w.isValidElement(s))return;let m=[...r,d];if(s.type===w.Fragment){u.push.apply(u,Gc(s.props.children,m));return}Ge(s.type===Cl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!s.props.index||!s.props.children,"An index route cannot have child routes.");let y={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(y.children=Gc(s.props.children,m)),u.push(y)}),u}var ur="get",dr="application/x-www-form-urlencoded";function yr(o){return o!=null&&typeof o.tagName=="string"}function iv(o){return yr(o)&&o.tagName.toLowerCase()==="button"}function ov(o){return yr(o)&&o.tagName.toLowerCase()==="form"}function rv(o){return yr(o)&&o.tagName.toLowerCase()==="input"}function sv(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function cv(o,r){return o.button===0&&(!r||r==="_self")&&!sv(o)}var ir=null;function uv(){if(ir===null)try{new FormData(document.createElement("form"),0),ir=!1}catch{ir=!0}return ir}var dv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dc(o){return o!=null&&!dv.has(o)?(ca(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dr}"`),null):o}function fv(o,r){let u,s,d,m,y;if(ov(o)){let b=o.getAttribute("action");s=b?La(b,r):null,u=o.getAttribute("method")||ur,d=Dc(o.getAttribute("enctype"))||dr,m=new FormData(o)}else if(iv(o)||rv(o)&&(o.type==="submit"||o.type==="image")){let b=o.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=o.getAttribute("formaction")||b.getAttribute("action");if(s=g?La(g,r):null,u=o.getAttribute("formmethod")||b.getAttribute("method")||ur,d=Dc(o.getAttribute("formenctype"))||Dc(b.getAttribute("enctype"))||dr,m=new FormData(b,o),!uv()){let{name:f,type:S,value:C}=o;if(S==="image"){let M=f?`${f}.`:"";m.append(`${M}x`,"0"),m.append(`${M}y`,"0")}else f&&m.append(f,C)}}else{if(yr(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ur,s=null,d=dr,y=o}return m&&d==="text/plain"&&(y=m,m=void 0),{action:s,method:u.toLowerCase(),encType:d,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tu(o,r){if(o===!1||o===null||typeof o>"u")throw new Error(r)}function hv(o,r,u){let s=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return s.pathname==="/"?s.pathname=`_root.${u}`:r&&La(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${u}`,s}async function pv(o,r){if(o.id in r)return r[o.id];try{let u=await import(o.module);return r[o.id]=u,u}catch(u){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mv(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function gv(o,r,u){let s=await Promise.all(o.map(async d=>{let m=r.routes[d.route.id];if(m){let y=await pv(m,u);return y.links?y.links():[]}return[]}));return Sv(s.flat(1).filter(mv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function $h(o,r,u,s,d,m){let y=(g,f)=>u[f]?g.route.id!==u[f].route.id:!0,b=(g,f)=>u[f].pathname!==g.pathname||u[f].route.path?.endsWith("*")&&u[f].params["*"]!==g.params["*"];return m==="assets"?r.filter((g,f)=>y(g,f)||b(g,f)):m==="data"?r.filter((g,f)=>{let S=s.routes[g.route.id];if(!S||!S.hasLoader)return!1;if(y(g,f)||b(g,f))return!0;if(g.route.shouldRevalidate){let C=g.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function yv(o,r,{includeHydrateFallback:u}={}){return vv(o.map(s=>{let d=r.routes[s.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function vv(o){return[...new Set(o)]}function bv(o){let r={},u=Object.keys(o).sort();for(let s of u)r[s]=o[s];return r}function Sv(o,r){let u=new Set;return new Set(r),o.reduce((s,d)=>{let m=JSON.stringify(bv(d));return u.has(m)||(u.add(m),s.push({key:m,link:d})),s},[])}function xp(){let o=w.useContext(Rl);return tu(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Ev(){let o=w.useContext(gr);return tu(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var au=w.createContext(void 0);au.displayName="FrameworkContext";function wp(){let o=w.useContext(au);return tu(o,"You must render this element inside a <HydratedRouter> element"),o}function Av(o,r){let u=w.useContext(au),[s,d]=w.useState(!1),[m,y]=w.useState(!1),{onFocus:b,onBlur:g,onMouseEnter:f,onMouseLeave:S,onTouchStart:C}=r,M=w.useRef(null);w.useEffect(()=>{if(o==="render"&&y(!0),o==="viewport"){let q=z=>{z.forEach(ee=>{y(ee.isIntersecting)})},K=new IntersectionObserver(q,{threshold:.5});return M.current&&K.observe(M.current),()=>{K.disconnect()}}},[o]),w.useEffect(()=>{if(s){let q=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(q)}}},[s]);let k=()=>{d(!0)},B=()=>{d(!1),y(!1)};return u?o!=="intent"?[m,M,{}]:[m,M,{onFocus:Mi(b,k),onBlur:Mi(g,B),onMouseEnter:Mi(f,k),onMouseLeave:Mi(S,B),onTouchStart:Mi(C,k)}]:[!1,M,{}]}function Mi(o,r){return u=>{o&&o(u),u.defaultPrevented||r(u)}}function Tv({page:o,...r}){let{router:u}=xp(),s=w.useMemo(()=>hp(u.routes,o,u.basename),[u.routes,o,u.basename]);return s?w.createElement(wv,{page:o,matches:s,...r}):null}function xv(o){let{manifest:r,routeModules:u}=wp(),[s,d]=w.useState([]);return w.useEffect(()=>{let m=!1;return gv(o,r,u).then(y=>{m||d(y)}),()=>{m=!0}},[o,r,u]),s}function wv({page:o,matches:r,...u}){let s=za(),{manifest:d,routeModules:m}=wp(),{basename:y}=xp(),{loaderData:b,matches:g}=Ev(),f=w.useMemo(()=>$h(o,r,g,d,s,"data"),[o,r,g,d,s]),S=w.useMemo(()=>$h(o,r,g,d,s,"assets"),[o,r,g,d,s]),C=w.useMemo(()=>{if(o===s.pathname+s.search+s.hash)return[];let B=new Set,q=!1;if(r.forEach(z=>{let ee=d.routes[z.route.id];!ee||!ee.hasLoader||(!f.some(P=>P.route.id===z.route.id)&&z.route.id in b&&m[z.route.id]?.shouldRevalidate||ee.hasClientLoader?q=!0:B.add(z.route.id))}),B.size===0)return[];let K=hv(o,y,"data");return q&&B.size>0&&K.searchParams.set("_routes",r.filter(z=>B.has(z.route.id)).map(z=>z.route.id).join(",")),[K.pathname+K.search]},[y,b,s,d,f,r,o,m]),M=w.useMemo(()=>yv(S,d),[S,d]),k=xv(S);return w.createElement(w.Fragment,null,C.map(B=>w.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...u})),M.map(B=>w.createElement("link",{key:B,rel:"modulepreload",href:B,...u})),k.map(({key:B,link:q})=>w.createElement("link",{key:B,...q})))}function Cv(...o){return r=>{o.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Cp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cp&&(window.__reactRouterVersion="7.7.0")}catch{}function Nv({basename:o,children:r,window:u}){let s=w.useRef();s.current==null&&(s.current=my({window:u,v5Compat:!0}));let d=s.current,[m,y]=w.useState({action:d.action,location:d.location}),b=w.useCallback(g=>{w.startTransition(()=>y(g))},[y]);return w.useLayoutEffect(()=>d.listen(b),[d,b]),w.createElement(nv,{basename:o,children:r,location:m.location,navigationType:m.action,navigator:d})}var Np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rp=w.forwardRef(function({onClick:r,discover:u="render",prefetch:s="none",relative:d,reloadDocument:m,replace:y,state:b,target:g,to:f,preventScrollReset:S,viewTransition:C,...M},k){let{basename:B}=w.useContext(ua),q=typeof f=="string"&&Np.test(f),K,z=!1;if(typeof f=="string"&&q&&(K=f,Cp))try{let V=new URL(window.location.href),I=f.startsWith("//")?new URL(V.protocol+f):new URL(f),Y=La(I.pathname,B);I.origin===V.origin&&Y!=null?f=Y+I.search+I.hash:z=!0}catch{ca(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=qy(f,{relative:d}),[P,ie,F]=Av(s,M),Ae=Dv(f,{replace:y,state:b,target:g,preventScrollReset:S,relative:d,viewTransition:C});function fe(V){r&&r(V),V.defaultPrevented||Ae(V)}let Se=w.createElement("a",{...M,...F,href:K||ee,onClick:z||m?r:fe,ref:Cv(k,ie),target:g,"data-discover":!q&&u==="render"?"true":void 0});return P&&!q?w.createElement(w.Fragment,null,Se,w.createElement(Tv,{page:ee})):Se});Rp.displayName="Link";var Rv=w.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:s="",end:d=!1,style:m,to:y,viewTransition:b,children:g,...f},S){let C=zi(y,{relative:f.relative}),M=za(),k=w.useContext(gr),{navigator:B,basename:q}=w.useContext(ua),K=k!=null&&Uv(C)&&b===!0,z=B.encodeLocation?B.encodeLocation(C).pathname:C.pathname,ee=M.pathname,P=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;u||(ee=ee.toLowerCase(),P=P?P.toLowerCase():null,z=z.toLowerCase()),P&&q&&(P=La(P,q)||P);const ie=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let F=ee===z||!d&&ee.startsWith(z)&&ee.charAt(ie)==="/",Ae=P!=null&&(P===z||!d&&P.startsWith(z)&&P.charAt(z.length)==="/"),fe={isActive:F,isPending:Ae,isTransitioning:K},Se=F?r:void 0,V;typeof s=="function"?V=s(fe):V=[s,F?"active":null,Ae?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let I=typeof m=="function"?m(fe):m;return w.createElement(Rp,{...f,"aria-current":Se,className:V,ref:S,style:I,to:y,viewTransition:b},typeof g=="function"?g(fe):g)});Rv.displayName="NavLink";var Mv=w.forwardRef(({discover:o="render",fetcherKey:r,navigate:u,reloadDocument:s,replace:d,state:m,method:y=ur,action:b,onSubmit:g,relative:f,preventScrollReset:S,viewTransition:C,...M},k)=>{let B=jv(),q=Lv(b,{relative:f}),K=y.toLowerCase()==="get"?"get":"post",z=typeof b=="string"&&Np.test(b),ee=P=>{if(g&&g(P),P.defaultPrevented)return;P.preventDefault();let ie=P.nativeEvent.submitter,F=ie?.getAttribute("formmethod")||y;B(ie||P.currentTarget,{fetcherKey:r,method:F,navigate:u,replace:d,state:m,relative:f,preventScrollReset:S,viewTransition:C})};return w.createElement("form",{ref:k,method:K,action:q,onSubmit:s?g:ee,...M,"data-discover":!z&&o==="render"?"true":void 0})});Mv.displayName="Form";function Ov(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(o){let r=w.useContext(Rl);return Ge(r,Ov(o)),r}function Dv(o,{target:r,replace:u,state:s,preventScrollReset:d,relative:m,viewTransition:y}={}){let b=Kn(),g=za(),f=zi(o,{relative:m});return w.useCallback(S=>{if(cv(S,r)){S.preventDefault();let C=u!==void 0?u:Li(g)===Li(f);b(o,{replace:C,state:s,preventScrollReset:d,relative:m,viewTransition:y})}},[g,b,f,u,s,r,o,d,m,y])}var kv=0,_v=()=>`__${String(++kv)}__`;function jv(){let{router:o}=Mp("useSubmit"),{basename:r}=w.useContext(ua),u=Wy();return w.useCallback(async(s,d={})=>{let{action:m,method:y,encType:b,formData:g,body:f}=fv(s,r);if(d.navigate===!1){let S=d.fetcherKey||_v();await o.fetch(S,u,d.action||m,{preventScrollReset:d.preventScrollReset,formData:g,body:f,formMethod:d.method||y,formEncType:d.encType||b,flushSync:d.flushSync})}else await o.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:g,body:f,formMethod:d.method||y,formEncType:d.encType||b,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,r,u])}function Lv(o,{relative:r}={}){let{basename:u}=w.useContext(ua),s=w.useContext(Ba);Ge(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),m={...zi(o||".",{relative:r})},y=za();if(o==null){m.search=y.search;let b=new URLSearchParams(m.search),g=b.getAll("index");if(g.some(S=>S==="")){b.delete("index"),g.filter(C=>C).forEach(C=>b.append("index",C));let S=b.toString();m.search=S?`?${S}`:""}}return(!o||o===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:ja([u,m.pathname])),Li(m)}function Uv(o,r={}){let u=w.useContext(bp);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Mp("useViewTransitionState"),d=zi(o,{relative:r.relative});if(!u.isTransitioning)return!1;let m=La(u.currentLocation.pathname,s)||u.currentLocation.pathname,y=La(u.nextLocation.pathname,s)||u.nextLocation.pathname;return hr(d.pathname,y)!=null||hr(d.pathname,m)!=null}const Op=w.createContext(),Dp="luma_progress",Ph="luma_bookmarks",Bv=()=>{try{const o=localStorage.getItem(Dp);return o?JSON.parse(o):{}}catch(o){return console.error("Error loading progress:",o),{}}},zv=o=>{try{localStorage.setItem(Dp,JSON.stringify(o))}catch(r){console.error("Error saving progress:",r)}},Hv=({children:o})=>{const[r,u]=w.useState(Bv);w.useEffect(()=>{zv(r)},[r]);const s=w.useCallback((C,M=!0)=>{u(k=>({...k,[C]:{completed:M,timestamp:new Date().toISOString()}}))},[]),d=w.useCallback(C=>r[C]?.completed||!1,[r]),m=w.useCallback(()=>{u({})},[]),y=w.useCallback(C=>{if(!C||C.length===0)return{completed:0,total:0,percentage:0};let M=0,k=0;return C.forEach(B=>{B.subTopics?B.subTopics.forEach(q=>{M++,r[q.id]?.completed&&k++}):(M++,r[B.id]?.completed&&k++)}),{completed:k,total:M,percentage:M>0?Math.round(k/M*100):0}},[r]),b=w.useCallback(()=>{try{const C=localStorage.getItem(Ph),M={version:"1.0",exportDate:new Date().toISOString(),progress:r,bookmarks:C?JSON.parse(C):{}},k=JSON.stringify(M,null,2),B=new Blob([k],{type:"application/json"}),q=URL.createObjectURL(B),K=document.createElement("a");return K.href=q,K.download=`luma-progress-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(q),{success:!0,message:"Data exported successfully!"}}catch(C){return console.error("Error exporting data:",C),{success:!1,message:"Failed to export data. Please try again."}}},[r]),g=w.useCallback(C=>new Promise(M=>{if(!C){M({success:!1,message:"No file selected."});return}if(!C.name.endsWith(".json")){M({success:!1,message:"Please select a valid JSON file."});return}const k=new FileReader;k.onload=B=>{try{const q=JSON.parse(B.target.result);if(!q.progress||typeof q.progress!="object"){M({success:!1,message:"Invalid file format: missing progress data."});return}u(q.progress),q.bookmarks&&typeof q.bookmarks=="object"&&localStorage.setItem(Ph,JSON.stringify(q.bookmarks)),M({success:!0,message:`Data imported successfully! Restored ${Object.keys(q.progress).length} topic(s) progress.`})}catch(q){console.error("Error parsing import file:",q),M({success:!1,message:"Failed to parse the file. Please ensure it's a valid LUMA export file."})}},k.onerror=()=>{M({success:!1,message:"Failed to read the file. Please try again."})},k.readAsText(C)}),[]),f=w.useCallback(()=>{const C=Object.entries(r).filter(([,z])=>z.completed),M=C.map(([,z])=>new Date(z.timestamp)).filter(z=>!isNaN(z.getTime()));if(M.length===0)return{totalCompleted:0,firstCompletedDate:null,lastCompletedDate:null,learningStreak:0};M.sort((z,ee)=>z-ee);const k=new Date;k.setHours(0,0,0,0);const B=[...new Set(M.map(z=>{const ee=new Date(z);return ee.setHours(0,0,0,0),ee.getTime()}))].sort((z,ee)=>ee-z);let q=0,K=k.getTime();for(const z of B)if((K-z)/864e5<=1)q++,K=z;else break;return{totalCompleted:C.length,firstCompletedDate:M[0],lastCompletedDate:M[M.length-1],learningStreak:q}},[r]),S={progress:r,markTopicComplete:s,isTopicComplete:d,resetProgress:m,getCompletionStats:y,exportData:b,importData:g,getLearningStats:f};return h.jsx(Op.Provider,{value:S,children:o})},vr=()=>{const o=w.useContext(Op);if(!o)throw new Error("useProgress must be used within a ProgressProvider");return o},kp=w.createContext(),_p="luma_bookmarks",Yv=()=>{try{const o=localStorage.getItem(_p);return o?JSON.parse(o):{}}catch(o){return console.error("Error loading bookmarks:",o),{}}},Gv=o=>{try{localStorage.setItem(_p,JSON.stringify(o))}catch(r){console.error("Error saving bookmarks:",r)}},qv=({children:o})=>{const[r,u]=w.useState(Yv);w.useEffect(()=>{Gv(r)},[r]);const g={bookmarks:r,toggleBookmark:(f,S)=>{u(C=>{const M={...C};return M[f]?delete M[f]:M[f]={title:S.title,section:S.section,parentTitle:S.parentTitle,route:S.route,timestamp:new Date().toISOString()},M})},isBookmarked:f=>!!r[f],getBookmarks:()=>Object.entries(r).map(([f,S])=>({id:f,...S})),getBookmarkCount:()=>Object.keys(r).length,clearBookmarks:()=>{u({})}};return h.jsx(kp.Provider,{value:g,children:o})},br=()=>{const o=w.useContext(kp);if(!o)throw new Error("useBookmarks must be used within a BookmarkProvider");return o},Kv={id:"part-1",title:"Part I: Foundational Concepts",icon:"fa-book-open",subTopics:[{id:"giving-commands",title:"1.1 Giving Computers Commands",icon:"fa-terminal",content:`
        <h4>Core Concept: Programming is Precise Communication</h4>
        <p>This is the fundamental logic, from the main idea to the details.</p>
        
        <h5>1. PROGRAMMING</h5>
        <p><strong>Keyword:</strong> <code>Instruction</code></p>
        <p>The act of giving a computer a set of precise instructions.</p>
        <p><strong>Example:</strong> A single line of code like <code>console.log("Hello, World!");</code> is an instruction to the computer to display "Hello, World!" on the screen.</p>
        <hr>

        <h5>2. THE COMPUTER</h5>
        <p><strong>Keyword:</strong> <code>Literal</code></p>
        <p>The computer follows instructions exactly. It cannot guess intent or understand ambiguity. This demands <strong>precision</strong> from the programmer.</p>
        <p><strong>Example:</strong> If you tell a person to "get the glasses," they might ask "drinking glasses or eye glasses?". A computer given a command <code>get("glasses")</code> would fail unless the variable "glasses" was defined with perfect precision.</p>
        <hr>

        <h5>3. THE PLAN</h5>
        <p><strong>Keyword:</strong> <code>Algorithm</code></p>
        <p>The step-by-step plan of instructions you create for the computer to follow. The order of these steps (the <strong>sequence</strong>) is critical.</p>
        <p><strong>Example:</strong> An algorithm for making tea: (1) Boil water. (2) Put tea bag in cup. (3) Pour boiled water into cup. (4) Wait 3 minutes. Changing the sequence would result in a bad cup of tea.</p>
        <hr>

        <h5>4. THE LANGUAGE</h5>
        <p><strong>Keyword:</strong> <code>Syntax</code></p>
        <p>The strict grammar and punctuation rules of the programming language. If the syntax is wrong, the computer cannot understand the instruction.</p>
        <p><strong>Example:</strong> In JavaScript, ending an instruction with a semicolon is correct syntax: <code>let x = 5;</code>. Writing <code>let x be 5</code> is incorrect syntax and will cause an error.</p>
      `,code:null,mindMap:{center:"Programming",nodes:[{title:"The Act",keyword:"Instruction",description:"The core of programming is telling a computer what to do, one precise step at a time."},{title:"The Tool",keyword:"Computer (Literal)",description:"A computer does exactly what it is told. It cannot infer meaning or handle ambiguity."},{title:"The Plan",keyword:"Algorithm (Sequence)",description:"A step-by-step plan for solving a problem. The order of instructions is crucial."},{title:"The Rules",keyword:"Syntax (Grammar)",description:"The specific grammar of a programming language that the computer can understand."}]}},{id:"repeating-deciding",title:"1.2 Repeating & Deciding",icon:"fa-code-branch",content:`
        <h4>Core Concept: Programs Need to Control Their Flow</h4>
        <p>Beyond a simple sequence, programs need to repeat actions and make choices. This is called <strong>control flow</strong>.</p>
        <div class="two-column-layout">
          <div class="column">
            <h5>1. REPETITION</h5>
            <p><strong>Keyword:</strong> <code>Loop</code></p>
            <p>A loop allows a set of instructions to be repeated multiple times. This is useful for automating repetitive tasks without writing the same code over and over.</p>
            <p><strong>Example:</strong> To say "Hello" three times, you can use a loop:</p>
            <pre><code>for (let i = 0; i < 3; i++) {
  console.log("Hello");
}</code></pre>
          </div>
          <div class="column">
            <h5>2. DECISION MAKING</h5>
            <p><strong>Keyword:</strong> <code>Conditional</code></p>
            <p>A conditional allows a program to make a choice. It follows "if-then" logic to execute different instructions based on whether a certain condition is true.</p>
            <p><strong>Example:</strong> To only perform an action if a user is logged in:</p>
            <pre><code>let isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("Welcome back!");
}</code></pre>
          </div>
        </div>
      `,code:null,mindMap:{center:"Control Flow",nodes:[{title:"Repetition",keyword:"Loop",description:"Repeats a block of code multiple times to avoid redundancy. (e.g., A daily routine)"},{title:"Decision Making",keyword:"Conditional",description:'Allows the program to follow different paths based on "if-then" logic. (e.g., If it rains, take an umbrella)'}]}},{id:"intro-js",title:"1.3 Introducing JavaScript",icon:"fa-magic",content:`
        <h4>Core Concept: JavaScript Brings Websites to Life</h4>
        <p>While other technologies build a website's structure and apply style, JavaScript provides the "brains" and interactivity. The relationship is best understood with an analogy:</p>
        <div class="three-column-layout">
          <div class="column">
            <h5>1. STRUCTURE</h5>
            <p><strong>Keyword:</strong> <code>HTML</code></p>
            <p>HTML (HyperText Markup Language) is the <strong>skeleton</strong> of a website. It defines the core elements, like headings, paragraphs, and images.</p>
            <p><strong>Example:</strong> An HTML tag <code>&lt;h1&gt;My Website&lt;/h1&gt;</code> creates a main heading.</p>
          </div>
          <div class="column">
            <h5>2. STYLE</h5>
            <p><strong>Keyword:</strong> <code>CSS</code></p>
            <p>CSS (Cascading Style Sheets) is the <strong>decoration</strong>. It styles the HTML, controlling colors, fonts, and layout.</p>
            <p><strong>Example:</strong> A CSS rule <code>h1 { color: blue; }</code> would turn that main heading blue.</p>
          </div>
          <div class="column">
            <h5>3. INTERACTIVITY</h5>
            <p><strong>Keyword:</strong> <code>JavaScript</code></p>
            <p>JavaScript is the <strong>nervous system</strong>. It makes the website functional and allows it to react to user actions.</p>
            <p><strong>Example:</strong> JavaScript can make a button clickable, so when a user clicks it, a pop-up message appears.</p>
          </div>
        </div>
      `,code:null,mindMap:{center:"A Website",nodes:[{title:"The Skeleton",keyword:"HTML",description:"Provides the core structure and elements of the page."},{title:"The Decoration",keyword:"CSS",description:"Styles the structure with colors, fonts, and layouts."},{title:"The Brains",keyword:"JavaScript",description:"Adds interactivity and makes the website dynamic."}]}},{id:"conceptual-summary",title:"Part I Summary",icon:"fa-table",content:`
        <h5>Consolidated Reference Guide</h5>
        <p>This table links the abstract programming terms to their real-world analogies.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Analogy</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Algorithm</strong></td>
              <td>A recipe, a treasure map</td>
              <td>A step-by-step plan for completing a task.</td>
            </tr>
            <tr>
              <td><strong>Sequence</strong></td>
              <td>The order of steps in a recipe</td>
              <td>Instructions are followed in a specific order.</td>
            </tr>
            <tr>
              <td><strong>Syntax</strong></td>
              <td>Grammar and punctuation</td>
              <td>The rules for how to write instructions the computer understands.</td>
            </tr>
            <tr>
              <td><strong>Loop</strong></td>
              <td>A daily routine (e.g., bedtime)</td>
              <td>Repeating a set of instructions multiple times.</td>
            </tr>
            <tr>
              <td><strong>Conditional</strong></td>
              <td>A choice based on a situation</td>
              <td>Deciding which instructions to follow (e.g., "If it's Tuesday...").</td>
            </tr>
             <tr>
              <td><strong>Variable</strong></td>
              <td>A labeled box or bucket</td>
              <td>A named placeholder for storing information.</td>
            </tr>
             <tr>
              <td><strong>Function</strong></td>
              <td>A mini-recipe within a larger recipe</td>
              <td>A named, reusable set of instructions for a specific task.</td>
            </tr>
          </tbody>
        </table>
      `,code:null,mindMap:null}]},Vv={id:"part-2",title:"Part II: The Building Blocks",icon:"fa-cubes",subTopics:[{id:"variables-data-types",title:"2.1 Variables & Data Types",icon:"fa-box",content:`
        <h4>Core Concept: Storing Information in Labeled Boxes</h4>
        <p>Programs need to work with information. In JavaScript, we store this information in <strong>variables</strong>, which are like labeled containers. The information itself comes in different forms, known as <strong>data types</strong>.</p>
        
        <h5>1. THE CONTAINER</h5>
        <p><strong>Keyword:</strong> <code>Variable</code></p>
        <p>A named placeholder for a value. Use <code>let</code> for values that can change and <code>const</code> for values that should not. The <code>=</code> sign is for assignment, not equality. <code>let score = 100;</code> means "the variable 'score' gets the value 100."</p>
        <p><strong>Example:</strong></p>
        <pre><code>let playerName = "VQM";
const highScore = 10000;</code></pre>
        <hr>

        <h4>The Three Core Data Types</h4>
        <div class="three-column-layout">
          <div class="column">
            <h5>2. TEXT</h5>
            <p><strong>Keyword:</strong> <code>String</code></p>
            <p>A sequence of text characters, always enclosed in quotes.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let greeting = "Hello, world!";</code></pre>
          </div>
          <div class="column">
            <h5>3. NUMBERS</h5>
            <p><strong>Keyword:</strong> <code>Number</code></p>
            <p>Represents any kind of numerical data, including decimals.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let userAge = 25;
let price = 19.99;</code></pre>
          </div>
          <div class="column">
            <h5>4. LOGIC</h5>
            <p><strong>Keyword:</strong> <code>Boolean</code></p>
            <p>Represents a logical value that can only be <code>true</code> or <code>false</code>.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let isLoggedIn = true;</code></pre>
          </div>
        </div>
      `,code:null,mindMap:{center:"Data Storage",nodes:[{title:"The Container",keyword:"Variable",description:"A named container for storing information. Declared with `let` or `const`."},{title:"Text Data",keyword:"String",description:"A sequence of text, like a word or sentence. Always in quotes."},{title:"Numerical Data",keyword:"Number",description:"Represents all numbers, including whole numbers and decimals."},{title:"Logical Data",keyword:"Boolean",description:"Represents a value that can only be `true` or `false`."}]}},{id:"conditionals-logic",title:"2.2 Conditionals & Logic",icon:"fa-sitemap",content:`
        <h4>Core Concept: Making Decisions in Code</h4>
        <p>Programs become powerful when they can make decisions. This is achieved through <strong>conditional statements</strong>, which execute different blocks of code based on whether a certain condition is true or false.</p>
        
        <h5>1. BASIC DECISIONS</h5>
        <p><strong>Keyword:</strong> <code>if...else</code></p>
        <p>The most fundamental conditional. If the condition is true, the <code>if</code> block runs. Otherwise, the <code>else</code> block runs.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let age = 12;

if (age >= 18) {
  console.log("This person is an adult.");
} else {
  console.log("This person is a child.");
}</code></pre>
        <hr>

        <h5>2. MULTIPLE OUTCOMES</h5>
        <p><strong>Keyword:</strong> <code>else if</code></p>
        <p>Used to chain multiple conditions together to handle more than two possible outcomes.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "F";
}

console.log("The grade is: " + grade);</code></pre>
        <hr>

        <h5>3. COMPLEX CONDITIONS</h5>
        <p><strong>Keyword:</strong> <code>Logical Operators</code></p>
        <p>Used to combine multiple conditions. <code>&&</code> (AND) requires both to be true. <code>||</code> (OR) requires at least one to be true. <code>!</code> (NOT) inverts a value.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let age = 20;
let hasLicense = true;

if (age >= 16 && hasLicense) {
  console.log("Can legally drive.");
}</code></pre>
      `,code:null,mindMap:{center:"Decision Making",nodes:[{title:"Basic Choice",keyword:"if...else",description:"Runs one of two code blocks based on a condition."},{title:"Multiple Choices",keyword:"else if",description:"Chains multiple conditions for several possible outcomes."},{title:"Combined Logic",keyword:"&&, ||, !",description:"Logical operators for creating complex conditions."}]}},{id:"loops",title:"2.3 Repeating Actions: Loops",icon:"fa-sync-alt",content:`
        <h4>Core Concept: Repeating Actions Efficiently</h4>
        <p>Loops are used to execute a block of code repeatedly, saving you from writing the same lines over and over.</p>
        
        <div class="two-column-layout">
          <div class="column">
            <h5>1. KNOWN REPETITIONS</h5>
            <p><strong>Keyword:</strong> <code>for loop</code></p>
            <p>Ideal when the number of repetitions is known beforehand. It consists of an initializer, a condition, and an incrementer.</p>
            <p><strong>Example:</strong></p>
            <pre><code>// Prints numbers 1 through 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}</code></pre>
          </div>
          <div class="column">
            <h5>2. UNKNOWN REPETITIONS</h5>
            <p><strong>Keyword:</strong> <code>while loop</code></p>
            <p>Used when the loop should continue as long as a certain condition remains true, and the number of iterations is not known in advance.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let count = 0;

while (count < 3) {
  console.log("Counting...");
  count++;
}</code></pre>
          </div>
        </div>
      `,code:null,mindMap:{center:"Repetition",nodes:[{title:"For Known Counts",keyword:"for loop",description:"Repeats a specific number of times."},{title:"For Unknown Counts",keyword:"while loop",description:"Repeats as long as a condition is true."}]}},{id:"functions",title:"2.4 Reusable Recipes: Functions",icon:"fa-cogs",content:`
        <h4>Core Concept: Creating Reusable Recipes</h4>
        <p>A function is a reusable block of code designed to perform a specific task. This is fundamental to writing clean and maintainable code ("Don't Repeat Yourself").</p>
        
        <h5>1. DEFINING & CALLING</h5>
        <p><strong>Keyword:</strong> <code>function</code></p>
        <p>A function is defined with the <code>function</code> keyword, a name, parentheses <code>()</code>, and a code block <code>{}</code>. To run it, you "call" it by its name.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function greetUser() {
  console.log("Welcome!");
}

greetUser(); // Calls the function</code></pre>
        <hr>

        <div class="two-column-layout">
          <div class="column">
            <h5>2. INPUTS</h5>
            <p><strong>Keyword:</strong> <code>Parameters</code></p>
            <p>Parameters are placeholder variables in a function's definition that allow it to accept input values (arguments).</p>
            <p><strong>Example:</strong></p>
            <pre><code>// 'name' is a parameter
function greet(name) {
  console.log("Hello, " + name);
}

greet("VQM"); // "VQM" is the argument</code></pre>
          </div>
          <div class="column">
            <h5>3. OUTPUTS</h5>
            <p><strong>Keyword:</strong> <code>return</code></p>
            <p>The <code>return</code> keyword allows a function to send a value back to the code that called it.</p>
            <p><strong>Example:</strong></p>
            <pre><code>function multiply(num1, num2) {
  return num1 * num2;
}

let result = multiply(4, 7);
// 'result' is now 28</code></pre>
          </div>
        </div>
      `,code:null,mindMap:{center:"Functions",nodes:[{title:"The Recipe",keyword:"function",description:"A named, reusable block of code."},{title:"The Ingredients",keyword:"Parameters",description:"Inputs a function can accept to work with."},{title:"The Result",keyword:"return",description:"The value a function sends back after it runs."}]}},{id:"data-structures",title:"2.5 Organizing Data",icon:"fa-database",content:`
        <h4>Core Concept: Organizing Data Collections</h4>
        <p>To build complex applications, data must be organized efficiently. JavaScript provides two primary structures for this: arrays and objects.</p>
        
        <div class="two-column-layout">
          <div class="column">
            <h5>1. ORDERED LISTS</h5>
            <p><strong>Keyword:</strong> <code>Array</code></p>
            <p>An array is a single variable that holds an ordered list of multiple values. Arrays are zero-indexed, meaning the first item is at position 0.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let favoriteFruits = ["apple", "banana", "cherry"];

console.log(favoriteFruits[0]); // Output: apple</code></pre>
          </div>
          <div class="column">
            <h5>2. UNORDERED COLLECTIONS</h5>
            <p><strong>Keyword:</strong> <code>Object</code></p>
            <p>An object is a collection of related data stored as key-value pairs. It's perfect for describing a single entity with multiple characteristics.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2021
};

console.log(myCar.make); // Output: Toyota</code></pre>
          </div>
        </div>
      `,code:null,mindMap:{center:"Data Organization",nodes:[{title:"Ordered Lists",keyword:"Array",description:"A numbered list of items, starting at index 0."},{title:"Unordered Collections",keyword:"Object",description:"A collection of named key-value pairs."}]}},{id:"template-literals",title:"2.6 Template Literals",icon:"fa-quote-right",content:`
        <h4>Core Concept: Modern String Formatting</h4>
        <p><strong>Template literals</strong> (also called template strings) provide a cleaner, more powerful way to work with strings in JavaScript. They use backticks (\`) instead of quotes and allow for embedded expressions and multi-line strings.</p>

        <h5>1. STRING INTERPOLATION</h5>
        <p><strong>Keyword:</strong> <code>\${expression}</code></p>
        <p>Instead of concatenating strings with <code>+</code>, you can embed variables and expressions directly using <code>\${}</code> syntax.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let name = "Alice";
let age = 25;

// Old way (string concatenation)
let oldGreeting = "Hello, " + name + "! You are " + age + " years old.";

// New way (template literal)
let newGreeting = \`Hello, \${name}! You are \${age} years old.\`;

console.log(newGreeting); // "Hello, Alice! You are 25 years old."</code></pre>
        <hr>

        <h5>2. MULTI-LINE STRINGS</h5>
        <p><strong>Keyword:</strong> Backticks <code>\`\`</code></p>
        <p>Template literals preserve line breaks, making it easy to create multi-line strings without escape characters.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let message = \`This is line 1
This is line 2
This is line 3\`;

console.log(message);</code></pre>
        <hr>

        <h5>3. EMBEDDED EXPRESSIONS</h5>
        <p><strong>Keyword:</strong> <code>\${}</code> with calculations</p>
        <p>You can embed any JavaScript expression inside <code>\${}</code>, including calculations, function calls, and ternary operators.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let price = 29.99;
let quantity = 3;

let total = \`Total cost: $\${price * quantity}\`;
console.log(total); // "Total cost: $89.97"

let age = 20;
let status = \`You are \${age >= 18 ? 'an adult' : 'a minor'}\`;
console.log(status); // "You are an adult"</code></pre>
      `,code:null,mindMap:{center:"Template Literals",nodes:[{title:"String Interpolation",keyword:"${expression}",description:"Embed variables and expressions directly in strings."},{title:"Multi-line Support",keyword:"Backticks",description:"Create strings that span multiple lines naturally."},{title:"Expression Power",keyword:"Embedded JS",description:"Include calculations, functions, and logic within strings."}]}},{id:"array-methods",title:"2.7 Array Methods",icon:"fa-list-ul",content:`
        <h4>Core Concept: Powerful Array Transformations</h4>
        <p>JavaScript provides powerful built-in methods for working with arrays. These methods make it easy to transform, filter, and process data without writing manual loops.</p>

        <h5>1. TRANSFORM EACH ITEM</h5>
        <p><strong>Keyword:</strong> <code>.map()</code></p>
        <p>Creates a new array by transforming each element according to a function. Use it when you want to convert each item to something else.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// Arrow function version (modern syntax)
let tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12]</code></pre>
        <hr>

        <h5>2. FILTER BY CONDITION</h5>
        <p><strong>Keyword:</strong> <code>.filter()</code></p>
        <p>Creates a new array containing only elements that pass a test. Use it when you want to keep only certain items.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let ages = [12, 17, 22, 8, 35];
let adults = ages.filter(function(age) {
  return age >= 18;
});

console.log(adults); // [22, 35]

// Filtering objects
let users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];

let activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{name: "Alice", active: true}, {name: "Charlie", active: true}]</code></pre>
        <hr>

        <h5>3. REDUCE TO SINGLE VALUE</h5>
        <p><strong>Keyword:</strong> <code>.reduce()</code></p>
        <p>Reduces an array to a single value by repeatedly applying a function. Perfect for summing, counting, or combining values.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let prices = [19.99, 4.95, 12.50];

// Sum all prices
let total = prices.reduce(function(sum, price) {
  return sum + price;
}, 0); // 0 is the starting value

console.log(total); // 37.44

// Count occurrences
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // {apple: 3, banana: 2, orange: 1}</code></pre>
        <hr>

        <h5>4. EXECUTE FOR EACH ITEM</h5>
        <p><strong>Keyword:</strong> <code>.forEach()</code></p>
        <p>Executes a function for each array element. Use it when you want to do something with each item but don't need a new array.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let names = ["Alice", "Bob", "Charlie"];

names.forEach(function(name, index) {
  console.log(\`\${index + 1}. \${name}\`);
});

// Output:
// 1. Alice
// 2. Bob
// 3. Charlie</code></pre>
      `,code:null,mindMap:{center:"Array Methods",nodes:[{title:"Transform",keyword:".map()",description:"Create a new array by transforming each element."},{title:"Filter",keyword:".filter()",description:"Create a new array with only items that pass a test."},{title:"Reduce",keyword:".reduce()",description:"Reduce an array to a single value (sum, count, etc)."},{title:"Iterate",keyword:".forEach()",description:"Execute a function for each array element."}]}},{id:"string-methods",title:"2.8 String Methods",icon:"fa-font",content:`
        <h4>Core Concept: String Manipulation Tools</h4>
        <p>JavaScript provides many built-in methods for working with strings. These methods help you search, modify, and extract information from text.</p>

        <h5>COMMON STRING METHODS</h5>
        <div class="two-column-layout">
          <div class="column">
            <p><strong>1. Length</strong></p>
            <pre><code>let text = "Hello";
console.log(text.length); // 5</code></pre>

            <p><strong>2. Change Case</strong></p>
            <pre><code>let name = "Alice";
console.log(name.toUpperCase()); // "ALICE"
console.log(name.toLowerCase()); // "alice"</code></pre>

            <p><strong>3. Extract Parts</strong></p>
            <pre><code>let phrase = "JavaScript is fun";
console.log(phrase.slice(0, 10)); // "JavaScript"
console.log(phrase.substring(11, 13)); // "is"</code></pre>

            <p><strong>4. Replace Text</strong></p>
            <pre><code>let sentence = "I like cats";
let updated = sentence.replace("cats", "dogs");
console.log(updated); // "I like dogs"</code></pre>
          </div>

          <div class="column">
            <p><strong>5. Search & Check</strong></p>
            <pre><code>let url = "https://example.com";
console.log(url.includes("example")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com")); // true
console.log(url.indexOf("example")); // 8</code></pre>

            <p><strong>6. Split & Join</strong></p>
            <pre><code>// Split string into array
let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

// Join array into string
let joined = fruits.join(" - ");
console.log(joined); // "apple - banana - cherry"</code></pre>

            <p><strong>7. Trim Whitespace</strong></p>
            <pre><code>let messy = "  hello  ";
console.log(messy.trim()); // "hello"</code></pre>
          </div>
        </div>

        <h5>CHAINING METHODS</h5>
        <p>String methods can be chained together for powerful transformations:</p>
        <pre><code>let input = "  JAVASCRIPT is AWESOME  ";
let cleaned = input.trim().toLowerCase().replace("javascript", "JS");
console.log(cleaned); // "js is awesome"</code></pre>
      `,code:null,mindMap:{center:"String Methods",nodes:[{title:"Transform",keyword:"toUpperCase/toLowerCase",description:"Change the case of strings."},{title:"Extract",keyword:"slice/substring",description:"Get a portion of a string."},{title:"Search",keyword:"includes/indexOf",description:"Find text within a string."},{title:"Modify",keyword:"replace/trim/split",description:"Change or restructure strings."}]}},{id:"error-handling",title:"2.9 Error Handling",icon:"fa-exclamation-triangle",content:`
        <h4>Core Concept: Graceful Error Management</h4>
        <p>Errors are inevitable in programming. <strong>Error handling</strong> allows your program to catch and respond to errors gracefully instead of crashing.</p>

        <h5>1. TRY-CATCH BLOCK</h5>
        <p><strong>Keyword:</strong> <code>try...catch</code></p>
        <p>The <code>try</code> block contains code that might throw an error. If an error occurs, execution immediately jumps to the <code>catch</code> block.</p>
        <p><strong>Example:</strong></p>
        <pre><code>try {
  let data = JSON.parse('invalid json'); // This will throw an error
  console.log(data);
} catch (error) {
  console.log("An error occurred:", error.message);
  // Program continues running!
}</code></pre>
        <hr>

        <h5>2. FINALLY BLOCK</h5>
        <p><strong>Keyword:</strong> <code>finally</code></p>
        <p>The <code>finally</code> block runs regardless of whether an error occurred. Use it for cleanup code that must always execute.</p>
        <p><strong>Example:</strong></p>
        <pre><code>try {
  console.log("Attempting operation...");
  // Some risky operation
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Cleanup complete");
  // This ALWAYS runs
}</code></pre>
        <hr>

        <h5>3. THROWING CUSTOM ERRORS</h5>
        <p><strong>Keyword:</strong> <code>throw</code></p>
        <p>You can create and throw your own errors using the <code>throw</code> keyword.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
} catch (error) {
  console.log("Caught error:", error.message);
  // "Caught error: Cannot divide by zero!"
}</code></pre>

        <h5>4. PRACTICAL USE CASE</h5>
        <p>Handling user input or network requests:</p>
        <pre><code>function fetchUserData(userId) {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    // Simulate fetching data
    let userData = { id: userId, name: "Alice" };
    return userData;

  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    return null; // Return safe fallback value
  }
}

let user = fetchUserData(123); // Works
let noUser = fetchUserData(); // Handles error gracefully</code></pre>
      `,code:null,mindMap:{center:"Error Handling",nodes:[{title:"Catch Errors",keyword:"try...catch",description:"Safely handle code that might fail."},{title:"Cleanup Code",keyword:"finally",description:"Code that runs regardless of errors."},{title:"Custom Errors",keyword:"throw",description:"Create and throw your own error messages."}]}},{id:"regular-expressions",title:"2.10 Regular Expressions",icon:"fa-search",content:`
        <h4>Core Concept: Pattern Matching in Text</h4>
        <p><strong>Regular expressions</strong> (regex) are powerful patterns used to match, search, and manipulate text. They're essential for validating input, extracting data, and text processing.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>/pattern/flags</code></p>
        <p>Regex patterns are enclosed between forward slashes. Flags modify how the pattern matches.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let pattern = /hello/;    // Matches "hello"
let caseInsensitive = /hello/i;  // i flag = case insensitive
let global = /hello/g;    // g flag = find all matches (global)</code></pre>
        <hr>

        <h5>2. COMMON PATTERNS</h5>
        <div class="two-column-layout">
          <div class="column">
            <p><strong>Character Classes</strong></p>
            <ul>
              <li><code>\\d</code> - Any digit (0-9)</li>
              <li><code>\\w</code> - Any word character (a-z, A-Z, 0-9, _)</li>
              <li><code>\\s</code> - Any whitespace</li>
              <li><code>.</code> - Any character except newline</li>
            </ul>

            <p><strong>Quantifiers</strong></p>
            <ul>
              <li><code>+</code> - One or more</li>
              <li><code>*</code> - Zero or more</li>
              <li><code>?</code> - Zero or one</li>
              <li><code>{3}</code> - Exactly 3</li>
              <li><code>{2,5}</code> - Between 2 and 5</li>
            </ul>
          </div>

          <div class="column">
            <p><strong>Anchors</strong></p>
            <ul>
              <li><code>^</code> - Start of string</li>
              <li><code>$</code> - End of string</li>
            </ul>

            <p><strong>Special Characters</strong></p>
            <ul>
              <li><code>[abc]</code> - Match any of: a, b, or c</li>
              <li><code>[0-9]</code> - Match any digit</li>
              <li><code>[^abc]</code> - NOT a, b, or c</li>
              <li><code>|</code> - OR operator</li>
            </ul>
          </div>
        </div>
        <hr>

        <h5>3. REGEX METHODS</h5>
        <p><strong>Testing & Matching</strong></p>
        <pre><code>let text = "My phone number is 123-456-7890";

// Test if pattern exists
let phonePattern = /\\d{3}-\\d{3}-\\d{4}/;
console.log(phonePattern.test(text)); // true

// Extract matches
let numbers = text.match(/\\d+/g); // g flag finds all matches
console.log(numbers); // ["123", "456", "7890"]

// Search for position
console.log(text.search(/phone/)); // 3 (index where "phone" starts)</code></pre>
        <hr>

        <h5>4. PRACTICAL EXAMPLES</h5>
        <pre><code>// Validate email
let emailPattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("invalid.email")); // false

// Validate phone number
let phonePattern = /^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$/;
console.log(phonePattern.test("(123) 456-7890")); // true
console.log(phonePattern.test("123-456-7890")); // true

// Extract hashtags
let tweet = "Learning #JavaScript and #WebDev is fun!";
let hashtags = tweet.match(/#\\w+/g);
console.log(hashtags); // ["#JavaScript", "#WebDev"]

// Replace patterns
let html = "Visit our site at http://example.com";
let linked = html.replace(/(https?:\\/\\/[\\w.-]+)/g, '<a href="$1">$1</a>');
console.log(linked); // Links become clickable</code></pre>
      `,code:null,mindMap:{center:"Regular Expressions",nodes:[{title:"Patterns",keyword:"/pattern/",description:"Define text patterns to match."},{title:"Character Classes",keyword:"\\d, \\w, \\s",description:"Match specific types of characters."},{title:"Test & Match",keyword:"test(), match()",description:"Test patterns and extract matches."},{title:"Validation",keyword:"Email, Phone",description:"Validate user input formats."}]}},{id:"json",title:"2.11 JSON (JavaScript Object Notation)",icon:"fa-code",content:`
        <h4>Core Concept: Data Exchange Format</h4>
        <p><strong>JSON</strong> (JavaScript Object Notation) is a lightweight, text-based format for storing and exchanging data. It's the standard format for APIs and configuration files.</p>

        <h5>1. JSON STRUCTURE</h5>
        <p><strong>Keyword:</strong> <code>Key-Value Pairs</code></p>
        <p>JSON looks similar to JavaScript objects but with stricter rules: keys must be in double quotes, and only certain data types are allowed.</p>
        <p><strong>Example:</strong></p>
        <pre><code>{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}</code></pre>
        <hr>

        <h5>2. PARSING JSON</h5>
        <p><strong>Keyword:</strong> <code>JSON.parse()</code></p>
        <p>Converts a JSON string into a JavaScript object that you can work with.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// JSON string (from API or file)
let jsonString = '{"name":"Bob","score":95}';

// Parse into JavaScript object
let user = JSON.parse(jsonString);

console.log(user.name);  // "Bob"
console.log(user.score); // 95</code></pre>
        <hr>

        <h5>3. STRINGIFYING TO JSON</h5>
        <p><strong>Keyword:</strong> <code>JSON.stringify()</code></p>
        <p>Converts a JavaScript object into a JSON string for storage or transmission.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  inStock: true
};

// Convert to JSON string
let jsonString = JSON.stringify(product);
console.log(jsonString);
// '{"id":101,"name":"Laptop","price":999.99,"inStock":true}'

// Pretty print with indentation
let prettyJson = JSON.stringify(product, null, 2);
console.log(prettyJson);
/*
{
  "id": 101,
  "name": "Laptop",
  "price": 999.99,
  "inStock": true
}
*/</code></pre>
        <hr>

        <h5>4. PRACTICAL USE CASES</h5>
        <p><strong>Local Storage</strong></p>
        <pre><code>// Saving data to localStorage
let settings = { theme: "dark", fontSize: 16 };
localStorage.setItem('userSettings', JSON.stringify(settings));

// Loading data from localStorage
let saved = localStorage.getItem('userSettings');
let loadedSettings = JSON.parse(saved);
console.log(loadedSettings.theme); // "dark"</code></pre>

        <p><strong>Working with APIs</strong></p>
        <pre><code>// Fetching data from an API (modern approach)
fetch('https://api.example.com/users/1')
  .then(response => response.json()) // Parse JSON automatically
  .then(user => {
    console.log(user.name);
    console.log(user.email);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });</code></pre>

        <p><strong>Error Handling with JSON</strong></p>
        <pre><code>let invalidJson = '{"name": "Alice", age: 25}'; // Missing quotes around "age"

try {
  let data = JSON.parse(invalidJson);
} catch (error) {
  console.error("Invalid JSON:", error.message);
  // Handle the error gracefully
}</code></pre>

        <h5>5. JSON RULES</h5>
        <ul>
          <li>Keys must be in <strong>double quotes</strong> (not single)</li>
          <li>Strings must use <strong>double quotes</strong></li>
          <li>No trailing commas allowed</li>
          <li>Supports: strings, numbers, booleans, arrays, objects, null</li>
          <li>Does NOT support: functions, undefined, Date objects</li>
        </ul>
      `,code:null,mindMap:{center:"JSON",nodes:[{title:"Format",keyword:"Key-Value",description:"Structured text format for data exchange."},{title:"Parse",keyword:"JSON.parse()",description:"Convert JSON string to JavaScript object."},{title:"Stringify",keyword:"JSON.stringify()",description:"Convert JavaScript object to JSON string."},{title:"Use Cases",keyword:"APIs, Storage",description:"Data exchange and local storage."}]}},{id:"part-2-summary",title:"Part II Summary",icon:"fa-table",content:`
        <h5>Consolidated Reference Guide for Part II</h5>
        <p>This table summarizes the core building blocks of JavaScript.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Keyword(s)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Variable</strong></td>
              <td><code>let</code>, <code>const</code></td>
              <td>A named container for storing a value.</td>
            </tr>
            <tr>
              <td><strong>String</strong></td>
              <td><code>"..."</code> or <code>'...'</code></td>
              <td>A sequence of text characters.</td>
            </tr>
            <tr>
              <td><strong>Number</strong></td>
              <td><code>123</code>, <code>19.99</code></td>
              <td>Represents numerical data.</td>
            </tr>
            <tr>
              <td><strong>Boolean</strong></td>
              <td><code>true</code>, <code>false</code></td>
              <td>Represents a logical value of true or false.</td>
            </tr>
            <tr>
              <td><strong>Conditional</strong></td>
              <td><code>if</code>, <code>else</code>, <code>else if</code></td>
              <td>Makes decisions and executes different code blocks.</td>
            </tr>
            <tr>
              <td><strong>Loop</strong></td>
              <td><code>for</code>, <code>while</code></td>
              <td>Repeats a block of code multiple times.</td>
            </tr>
            <tr>
              <td><strong>Function</strong></td>
              <td><code>function</code>, <code>return</code></td>
              <td>A reusable block of code that can accept inputs.</td>
            </tr>
            <tr>
              <td><strong>Array</strong></td>
              <td><code>[]</code></td>
              <td>An ordered, numbered list of values.</td>
            </tr>
            <tr>
              <td><strong>Object</strong></td>
              <td><code>{}</code></td>
              <td>An unordered collection of named key-value pairs.</td>
            </tr>
          </tbody>
        </table>
      `,code:null,mindMap:null}]},Xv={id:"part-3",title:"Part III: JavaScript in Action",icon:"fa-bolt",subTopics:[{id:"dom-intro",title:"3.1 The DOM",icon:"fa-tree",content:`
        <h4>Core Concept: The Web Page's Blueprint</h4>
        <p>When a browser loads an HTML document, it creates a live, in-memory representation of the page's structure called the <strong>Document Object Model (DOM)</strong>. The DOM represents the document as a tree of objects that JavaScript can interact with.</p>
        
        <h5>1. THE BLUEPRINT</h5>
        <p><strong>Keyword:</strong> <code>DOM</code></p>
        <p>The Document Object Model is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.</p>
        <p><strong>Analogy:</strong> Think of the DOM as a family tree for your webpage. The <code>&lt;html&gt;</code> tag is the ancestor, and all other elements are its descendants.</p>
        <hr>

        <h5>2. THE FAMILY TREE</h5>
        <p><strong>Keyword:</strong> <code>Nodes</code></p>
        <p>Every part of the document—elements, attributes, and text—is a <strong>node</strong> in the DOM tree. These nodes have relationships like a family.</p>
        <ul>
          <li><strong>Parent:</strong> An element that directly contains another element.</li>
          <li><strong>Child:</strong> An element directly contained within another.</li>
          <li><strong>Sibling:</strong> Elements that share the same parent.</li>
        </ul>
      `,code:null,mindMap:{center:"The DOM",nodes:[{title:"The Blueprint",keyword:"DOM Tree",description:"A live, object-based representation of an HTML document."},{title:"The Members",keyword:"Nodes",description:"Every part of the document (elements, text) is a node."},{title:"The Relationships",keyword:"Parent, Child, Sibling",description:"Nodes have hierarchical relationships, like a family tree."}]}},{id:"dom-manipulation",title:"3.2 DOM Manipulation",icon:"fa-paint-brush",content:`
        <h4>Core Concept: Dynamically Changing the Page</h4>
        <p><strong>DOM Manipulation</strong> is the process of using JavaScript to add, remove, or change the elements (nodes) of the DOM tree after the page has loaded. This is what makes a web page interactive.</p>
        
        <h5>1. SELECTING ELEMENTS</h5>
        <p><strong>Keyword:</strong> <code>Selectors</code></p>
        <p>Before you can change an element, you must select it. Modern JavaScript uses CSS-style selectors.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// Selects the first element with the ID 'main-title'
let title = document.querySelector('#main-title');

// Selects ALL elements with the class 'paragraph'
let paragraphs = document.querySelectorAll('.paragraph');</code></pre>
        <hr>

        <h5>2. MODIFYING ELEMENTS</h5>
        <p><strong>Keyword:</strong> <code>Properties</code></p>
        <p>Once an element is selected, you can change its content or style using its properties.</p>
        <ul>
          <li><code>.textContent</code>: Changes only the text inside an element.</li>
          <li><code>.innerHTML</code>: Changes the entire HTML content, including tags.</li>
          <li><code>.style</code>: Allows you to directly manipulate CSS properties.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>let title = document.querySelector('#main-title');

title.textContent = "Welcome to LUMA!";
title.style.color = "purple";</code></pre>
      `,code:null,mindMap:{center:"Manipulation",nodes:[{title:"Find",keyword:"Selectors",description:"Use methods like `querySelector` to find elements on the page."},{title:"Change Content",keyword:".textContent",description:"Modify the text inside a selected element."},{title:"Change Style",keyword:".style",description:"Modify the CSS properties of a selected element."},{title:"Create & Add",keyword:".createElement",description:"Create new elements and add them to the page."}]}},{id:"event-handling",title:"3.3 Event Handling",icon:"fa-hand-pointer",content:`
        <h4>Core Concept: Responding to User Actions</h4>
        <p>True interactivity comes from responding to user actions. In JavaScript, these actions—such as a mouse click or a key press—are known as <strong>events</strong>.</p>
        
        <h5>1. LISTENING FOR EVENTS</h5>
        <p><strong>Keyword:</strong> <code>addEventListener</code></p>
        <p>The standard way to handle events. This method is attached to a DOM element and "listens" for a specific event. When the event occurs, it executes a function.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let myButton = document.querySelector('#myButton');

myButton.addEventListener('click', function() {
  alert('Button was clicked!');
});</code></pre>
        <hr>

        <h5>2. THE EVENT HANDLER</h5>
        <p><strong>Keyword:</strong> <code>Callback Function</code></p>
        <p>The function that runs when an event is detected. This function automatically receives an <strong>event object</strong> with details about the user's interaction.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// 'event' is the event object
myButton.addEventListener('click', function(event) {
  console.log(event.target); // Logs the button element itself
});</code></pre>
        <hr>

        <h5>3. COMMON EVENT TYPES</h5>
        <p><strong>Keyword:</strong> <code>Event Types</code></p>
        <p>Different user actions have different event types that you can listen for.</p>
        <ul>
          <li><strong>Mouse Events:</strong> <code>click</code>, <code>mouseover</code>, <code>mouseout</code></li>
          <li><strong>Keyboard Events:</strong> <code>keydown</code>, <code>keyup</code></li>
          <li><strong>Form Events:</strong> <code>submit</code>, <code>change</code></li>
        </ul>
      `,code:null,mindMap:{center:"Event Handling",nodes:[{title:"The Trigger",keyword:"Event",description:"A user action, like a click or key press."},{title:"The Listener",keyword:"addEventListener",description:"A method that waits for a specific event on an element."},{title:"The Response",keyword:"Callback Function",description:"The function that executes when the event occurs."}]}},{id:"part-3-summary",title:"Part III Summary",icon:"fa-table",content:`
        <h5>Consolidated Reference Guide for Part III</h5>
        <p>This table summarizes how JavaScript interacts with a web page.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Keyword(s)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>DOM</strong></td>
              <td><code>document</code></td>
              <td>The live, scriptable blueprint of a webpage.</td>
            </tr>
            <tr>
              <td><strong>Selectors</strong></td>
              <td><code>querySelector</code></td>
              <td>Methods for finding and selecting HTML elements.</td>
            </tr>
            <tr>
              <td><strong>Properties</strong></td>
              <td><code>.textContent</code>, <code>.style</code></td>
              <td>Used to change the content and style of elements.</td>
            </tr>
            <tr>
              <td><strong>Event</strong></td>
              <td><code>'click'</code>, <code>'mouseover'</code></td>
              <td>A user action that JavaScript can respond to.</td>
            </tr>
            <tr>
              <td><strong>Event Listener</strong></td>
              <td><code>addEventListener</code></td>
              <td>A method that waits for a specific event to occur.</td>
            </tr>
          </tbody>
        </table>
      `,code:null,mindMap:null}]},Qv=[Kv,Vv,Xv],Jv={id:"part-4",title:"Part IV: Advanced Mechanics",icon:"fa-cogs",subTopics:[{id:"scope-context",title:"4.1 Context & Scope",icon:"fa-map-signs",content:`
        <h4>Core Concept: Where Variables Live</h4>
        <p><strong>Scope</strong> defines the accessibility of variables. Understanding scope is critical for preventing bugs and writing predictable code.</p>
        
        <div class="three-column-layout">
          <div class="column">
            <h5>1. GLOBAL SCOPE</h5>
            <p><strong>Keyword:</strong> <code>Global</code></p>
            <p>A variable declared outside any function or block. It can be accessed from anywhere in the code.</p>
            <pre><code>let globalVar = "I'm everywhere!";

function showVar() {
  console.log(globalVar);
}</code></pre>
          </div>
          <div class="column">
            <h5>2. FUNCTION SCOPE</h5>
            <p><strong>Keyword:</strong> <code>Function</code></p>
            <p>A variable declared inside a function. It cannot be accessed from outside that function.</p>
            <pre><code>function hideVar() {
  let functionVar = "I'm hidden!";
}
// console.log(functionVar); // Error!</code></pre>
          </div>
          <div class="column">
            <h5>3. BLOCK SCOPE</h5>
            <p><strong>Keyword:</strong> <code>Block</code></p>
            <p>A variable declared with <code>let</code> or <code>const</code> inside a block <code>{...}</code>. It's confined to that block.</p>
            <pre><code>if (true) {
  let blockVar = "Just in this block";
}
// console.log(blockVar); // Error!</code></pre>
          </div>
        </div>
        <hr>
        <h5>Hoisting & The Temporal Dead Zone (TDZ)</h5>
        <p><strong>Hoisting</strong> is JavaScript's behavior of moving declarations to the top of their scope. <code>var</code> is initialized as <code>undefined</code>, while <code>let</code> and <code>const</code> are not, creating a "Temporal Dead Zone" where they cannot be accessed before declaration.</p>
        <hr>
        <h5>Variable Declaration Comparison</h5>
        <table class="analogy-table">
          <thead>
            <tr><th>Feature</th><th>var</th><th>let</th><th>const</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Scope</strong></td><td>Function or Global</td><td>Block ({})</td><td>Block ({})</td></tr>
            <tr><td><strong>Hoisting</strong></td><td>Hoisted & initialized</td><td>Hoisted, not initialized (TDZ)</td><td>Hoisted, not initialized (TDZ)</td></tr>
            <tr><td><strong>Reassignable?</strong></td><td>Yes</td><td>Yes</td><td>No</td></tr>
            <tr><td><strong>Redeclarable?</strong></td><td>Yes</td><td>No</td><td>No</td></tr>
          </tbody>
        </table>
      `,code:null,mindMap:{center:"Variable Scope",nodes:[{title:"Global Scope",keyword:"Global",description:"Accessible from anywhere in the code."},{title:"Function Scope",keyword:"Function",description:"Accessible only inside the function where it is declared."},{title:"Block Scope",keyword:"Block",description:"Accessible only inside the code block `{...}` where it is declared."},{title:"Hoisting",keyword:"Hoisting",description:"Declarations are moved to the top of their scope during compilation."}]}},{id:"closures",title:"4.2 The Power of Closures",icon:"fa-memory",content:`
        <h4>Core Concept: Functions That Remember</h4>
        <p>A <strong>closure</strong> is a function that "remembers" the variables from the scope where it was created, even if it's called in a different scope. This is one of JavaScript's most powerful features.</p>
        
        <h5>1. THE MECHANISM</h5>
        <p><strong>Keyword:</strong> <code>Lexical Environment</code></p>
        <p>A closure is the combination of a function and its lexical environment (the scope chain from where it was defined). The inner function "closes over" the variables of its outer function.</p>
        <p><strong>Example (Function Factory):</strong></p>
        <pre><code>function makeAdder(x) {
  // The inner function is a closure, it remembers 'x'
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
console.log(add5(2)); // Output: 7</code></pre>
        <hr>

        <h5>2. PRACTICAL APPLICATIONS</h5>
        <p><strong>Keyword:</strong> <code>Encapsulation</code></p>
        <p>Closures are used to create private variables and methods, a core concept of object-oriented programming. They allow you to hide implementation details and expose a public interface.</p>
        <p><strong>Example (Private Counter):</strong></p>
        <pre><code>function createCounter() {
  let count = 0; // 'count' is a private variable

  return {
    increment: function() { count++; },
    getValue: function() { return count; }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // Output: 1
// console.log(counter.count); // undefined (cannot access private var)</code></pre>
      `,code:null,mindMap:{center:"Closures",nodes:[{title:"The Concept",keyword:"Function with Memory",description:"A function that remembers variables from its creation scope."},{title:'The "Why"',keyword:"Lexical Scoping",description:"Scope is determined by where code is written, not where it is called."},{title:"The Use Case",keyword:"Data Encapsulation",description:"Creating private variables and methods that cannot be accessed from outside."}]}},{id:"this-keyword",title:'4.3 The Enigma of "this"',icon:"fa-user-secret",content:`
        <h4>Core Concept: The Invocation Context</h4>
        <p>The <code>this</code> keyword is a reference to an object, but its value is dynamic. The cardinal rule is: the value of <strong>this</strong> is determined by <strong>how a function is called</strong>, not where it is defined.</p>
        
        <h5>1. IMPLICIT BINDING</h5>
        <p><strong>Keyword:</strong> <code>Method Invocation</code></p>
        <p>When a function is called as a method of an object, <code>this</code> is bound to the object the method is called on (the object to the left of the dot).</p>
        <p><strong>Example:</strong></p>
        <pre><code>const person = {
  name: 'VQM',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // 'this' refers to 'person'. Output: Hello, VQM</code></pre>
        <hr>

        <h5>2. DEFAULT/GLOBAL BINDING</h5>
        <p><strong>Keyword:</strong> <code>Standalone Invocation</code></p>
        <p>When a function is called by itself (not as a method), <code>this</code> defaults to the global object (<code>window</code> in browsers) or <code>undefined</code> in strict mode.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function showThis() {
  console.log(this);
}

showThis(); // In a browser, 'this' would be the window object.</code></pre>
        <hr>
        
        <h5>3. THE MODERN SOLUTION</h5>
        <p><strong>Keyword:</strong> <code>Arrow Functions</code></p>
        <p>Arrow functions (<code>=></code>) do not have their own <code>this</code> binding. Instead, they lexically inherit <code>this</code> from their parent scope. This makes them predictable and solves many common issues with <code>this</code>.</p>
        <p><strong>Example:</strong></p>
        <pre><code>const person = {
  name: 'VQM',
  greet: function() {
    // Arrow function inherits 'this' from greet
    setTimeout(() => {
      console.log('Hello, ' + this.name);
    }, 1000);
  }
};

person.greet(); // After 1s, logs: Hello, VQM</code></pre>
      `,code:null,mindMap:{center:'The "this" Keyword',nodes:[{title:"The Rule",keyword:"Invocation Context",description:"The value of `this` depends on HOW a function is called."},{title:"As a Method",keyword:"Implicit Binding",description:"`this` is the object to the left of the dot."},{title:"As a Function",keyword:"Default Binding",description:"`this` is the global object (e.g., window) or undefined."},{title:"The Exception",keyword:"Arrow Functions",description:"Inherit `this` from their parent scope; they do not have their own."}]}},{id:"async-js",title:"4.4 Asynchronous JavaScript",icon:"fa-clock",content:`
        <h4>Core Concept: Handling Delays</h4>
        <p>JavaScript is single-threaded, meaning it can only do one thing at a time. <strong>Asynchronous</strong> programming prevents the UI from freezing during long-running tasks like network requests.</p>
        
        <div class="three-column-layout">
          <div class="column">
            <h5>1. THE OLD WAY</h5>
            <p><strong>Keyword:</strong> <code>Callbacks</code></p>
            <p>A function passed as an argument to be executed after an operation completes. Can lead to "Callback Hell."</p>
            <pre><code>getData(function(a) {
  getMoreData(a, function(b) {
    // ...and so on
  });
});</code></pre>
          </div>
          <div class="column">
            <h5>2. THE BETTER WAY</h5>
            <p><strong>Keyword:</strong> <code>Promises</code></p>
            <p>An object representing the eventual completion or failure of an async operation. Allows for cleaner chaining with <code>.then()</code>.</p>
            <pre><code>getData()
  .then(a => getMoreData(a))
  .then(b => ...)
  .catch(err => ...);</code></pre>
          </div>
          <div class="column">
            <h5>3. THE MODERN WAY</h5>
            <p><strong>Keyword:</strong> <code>async/await</code></p>
            <p>Syntactic sugar over Promises that makes async code look synchronous, improving readability.</p>
            <pre><code>async function fetchData() {
  const a = await getData();
  const b = await getMoreData(a);
}</code></pre>
          </div>
        </div>
      `,code:null,mindMap:{center:"Async Operations",nodes:[{title:"The Old Way",keyword:"Callbacks",description:"A function passed as an argument to run later."},{title:"The Better Way",keyword:"Promises",description:"An object representing a future value."},{title:"The Modern Way",keyword:"async/await",description:"Syntax to make asynchronous code look synchronous."}]}},{id:"prototypal-inheritance",title:"4.5 Prototypal Inheritance",icon:"fa-project-diagram",content:`
        <h4>Core Concept: The Blueprint of Objects</h4>
        <p>JavaScript's inheritance model is <strong>prototypal</strong>. Objects inherit directly from other objects. There are no true classes, only objects linked to other objects.</p>
        
        <h5>1. THE CHAIN</h5>
        <p><strong>Keyword:</strong> <code>Prototype Chain</code></p>
        <p>Every object has a hidden link to another object called its prototype. When a property is accessed, JavaScript searches up this chain until it's found or the chain ends.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// 'myArray' inherits methods like .push() from Array.prototype
let myArray = [];</code></pre>
        <hr>

        <h5>2. THE OLD WAY</h5>
        <p><strong>Keyword:</strong> <code>Constructor Functions</code></p>
        <p>A regular function called with the <code>new</code> keyword. It creates a new object and links its prototype to the function's <code>.prototype</code> property.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function() { console.log('Woof!'); };

const myDog = new Dog('Rex');
myDog.bark(); // 'myDog' inherits 'bark'</code></pre>
        <hr>

        <h5>3. THE MODERN WAY</h5>
        <p><strong>Keyword:</strong> <code>class</code></p>
        <p>The <code>class</code> keyword is modern syntactic sugar over constructor functions. It provides a cleaner, more familiar syntax but uses the same prototypal inheritance mechanism underneath.</p>
        <p><strong>Example:</strong></p>
        <pre><code>class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog('Rex');
myDog.bark();</code></pre>
      `,code:null,mindMap:{center:"Inheritance",nodes:[{title:"The Mechanism",keyword:"Prototype Chain",description:"Objects are linked, inheriting properties from objects up the chain."},{title:"The Old Way",keyword:"Constructor Function",description:"A function used with `new` to create object instances."},{title:"The Modern Way",keyword:"class",description:"Syntactic sugar that provides a cleaner syntax for constructors."}]}},{id:"modules",title:"4.6 ES6 Modules",icon:"fa-cubes",content:`
        <h4>Core Concept: Code Organization and Reusability</h4>
        <p><strong>Modules</strong> allow you to split your code into separate files and import/export functionality between them. This promotes code organization, reusability, and maintainability.</p>

        <h5>1. EXPORTING FROM A MODULE</h5>
        <p><strong>Keyword:</strong> <code>export</code></p>
        <p>You can export functions, objects, or primitive values from a module so they can be used by other modules.</p>
        <p><strong>Named Exports:</strong></p>
        <pre><code>// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;</code></pre>
        <p><strong>Default Export:</strong></p>
        <pre><code>// calculator.js
export default class Calculator {
  add(a, b) { return a + b; }
}</code></pre>
        <hr>

        <h5>2. IMPORTING INTO A MODULE</h5>
        <p><strong>Keyword:</strong> <code>import</code></p>
        <p>Use the <code>import</code> statement to bring in exported functionality from other modules.</p>
        <p><strong>Named Imports:</strong></p>
        <pre><code>import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
console.log(PI); // 3.14159</code></pre>
        <p><strong>Default Import:</strong></p>
        <pre><code>import Calculator from './calculator.js';
const calc = new Calculator();</code></pre>
        <p><strong>Import All:</strong></p>
        <pre><code>import * as math from './math.js';
console.log(math.add(2, 3)); // 5</code></pre>
        <hr>

        <h5>3. BENEFITS OF MODULES</h5>
        <ul>
          <li><strong>Encapsulation:</strong> Each module has its own scope, preventing global namespace pollution.</li>
          <li><strong>Dependency Management:</strong> Explicit imports make it clear what code depends on what.</li>
          <li><strong>Reusability:</strong> Write code once, import it anywhere.</li>
          <li><strong>Maintainability:</strong> Smaller, focused files are easier to understand and maintain.</li>
        </ul>
      `,code:null,mindMap:{center:"ES6 Modules",nodes:[{title:"Export",keyword:"export",description:"Make functions, objects, or values available to other modules."},{title:"Import",keyword:"import",description:"Bring in functionality from other modules."},{title:"Default Export",keyword:"export default",description:"Export a single main value from a module."},{title:"Named Exports",keyword:"export { }",description:"Export multiple named values from a module."}]}},{id:"destructuring-spread",title:"4.7 Destructuring & Spread Operators",icon:"fa-expand-arrows-alt",content:`
        <h4>Core Concept: Unpacking and Spreading Values</h4>
        <p>Destructuring and spread operators are modern ES6 features that make it easier to work with arrays and objects by unpacking or spreading their values.</p>

        <h5>1. ARRAY DESTRUCTURING</h5>
        <p><strong>Keyword:</strong> <code>[ ]</code></p>
        <p>Extract values from an array into individual variables.</p>
        <pre><code>const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // 'red'

// Skip elements
const [primary, , tertiary] = colors;
console.log(tertiary); // 'blue'</code></pre>
        <hr>

        <h5>2. OBJECT DESTRUCTURING</h5>
        <p><strong>Keyword:</strong> <code>{ }</code></p>
        <p>Extract properties from an object into individual variables.</p>
        <pre><code>const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = user;
console.log(name); // 'Alice'

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName); // 'Alice'

// Default values
const { country = 'USA' } = user;
console.log(country); // 'USA'</code></pre>
        <hr>

        <h5>3. SPREAD OPERATOR (...)</h5>
        <p><strong>Keyword:</strong> <code>...</code></p>
        <p>The spread operator expands an array or object into individual elements.</p>
        <p><strong>Array Spread:</strong></p>
        <pre><code>const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1]; // [1, 2, 3]</code></pre>
        <p><strong>Object Spread:</strong></p>
        <pre><code>const defaults = { theme: 'dark', lang: 'en' };
const userSettings = { lang: 'fr', fontSize: 14 };
const settings = { ...defaults, ...userSettings };
// { theme: 'dark', lang: 'fr', fontSize: 14 }</code></pre>
        <hr>

        <h5>4. PRACTICAL USE CASES</h5>
        <pre><code>// Function parameters
function greet({ name, age }) {
  console.log(\`Hello \${name}, age \${age}\`);
}
greet({ name: 'Bob', age: 30 });

// React props destructuring
function Button({ label, onClick }) {
  return &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;;
}</code></pre>
      `,code:null,mindMap:{center:"Destructuring & Spread",nodes:[{title:"Array Destructuring",keyword:"[ ]",description:"Unpack array values into variables."},{title:"Object Destructuring",keyword:"{ }",description:"Extract object properties into variables."},{title:"Spread Operator",keyword:"...",description:"Expand arrays or objects into individual elements."}]}},{id:"default-parameters",title:"4.8 Default Parameters",icon:"fa-sliders-h",content:`
        <h4>Core Concept: Function Parameter Defaults</h4>
        <p><strong>Default parameters</strong> allow you to specify default values for function parameters if no value or <code>undefined</code> is passed.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>=</code></p>
        <p>Assign a default value directly in the parameter list.</p>
        <pre><code>function greet(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}

greet('Alice'); // "Hello, Alice!"
greet();        // "Hello, Guest!"</code></pre>
        <hr>

        <h5>2. MULTIPLE DEFAULT PARAMETERS</h5>
        <pre><code>function createUser(name = 'Anonymous', role = 'user', active = true) {
  return { name, role, active };
}

console.log(createUser());
// { name: 'Anonymous', role: 'user', active: true }

console.log(createUser('Bob', 'admin'));
// { name: 'Bob', role: 'admin', active: true }</code></pre>
        <hr>

        <h5>3. DEFAULT VALUES WITH EXPRESSIONS</h5>
        <p>Default values can be expressions, including function calls.</p>
        <pre><code>function getDefaultId() {
  return Math.random().toString(36).substr(2, 9);
}

function createItem(name, id = getDefaultId()) {
  return { name, id };
}

console.log(createItem('Book'));
// { name: 'Book', id: 'x7k2m9p1q' }</code></pre>
        <hr>

        <h5>4. BEFORE ES6 (OLD WAY)</h5>
        <pre><code>// Old approach using || operator
function greet(name) {
  name = name || 'Guest';
  console.log('Hello, ' + name);
}

// Problem: falsy values like 0, '', false are replaced
function add(a, b) {
  a = a || 0;  // If a is 0, it becomes 0 (unexpected!)
  b = b || 0;
  return a + b;
}</code></pre>
      `,code:null,mindMap:{center:"Default Parameters",nodes:[{title:"The Syntax",keyword:"param = value",description:"Assign default values directly in function parameters."},{title:"The Trigger",keyword:"undefined",description:"Defaults are used when parameter is undefined or not passed."},{title:"The Power",keyword:"Expressions",description:"Default values can be expressions or function calls."}]}},{id:"rest-parameters",title:"4.9 Rest Parameters",icon:"fa-ellipsis-h",content:`
        <h4>Core Concept: Variable Number of Arguments</h4>
        <p><strong>Rest parameters</strong> allow a function to accept an indefinite number of arguments as an array, replacing the older <code>arguments</code> object.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>...paramName</code></p>
        <p>The rest parameter must be the last parameter in the function definition.</p>
        <pre><code>function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15</code></pre>
        <hr>

        <h5>2. COMBINING WITH REGULAR PARAMETERS</h5>
        <pre><code>function introduce(greeting, ...names) {
  return \`\${greeting} \${names.join(', ')}!\`;
}

console.log(introduce('Hello', 'Alice', 'Bob', 'Charlie'));
// "Hello Alice, Bob, Charlie!"</code></pre>
        <hr>

        <h5>3. REST VS SPREAD</h5>
        <p>While they use the same <code>...</code> syntax, they serve opposite purposes:</p>
        <ul>
          <li><strong>Rest Parameters:</strong> Collect multiple arguments into an array (function definition)</li>
          <li><strong>Spread Operator:</strong> Expand an array into individual arguments (function call)</li>
        </ul>
        <pre><code>// REST: Collecting arguments
function multiply(...numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}

// SPREAD: Expanding array
const nums = [2, 3, 4];
console.log(multiply(...nums)); // 24</code></pre>
        <hr>

        <h5>4. BEFORE ES6 (ARGUMENTS OBJECT)</h5>
        <pre><code>// Old way using 'arguments' object
function oldSum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Problems with arguments:
// - Not a real array (no array methods)
// - Not available in arrow functions
// - Less clear intent</code></pre>
      `,code:null,mindMap:{center:"Rest Parameters",nodes:[{title:"The Syntax",keyword:"...params",description:"Collect remaining arguments into an array."},{title:"The Rule",keyword:"Last Parameter",description:"Rest parameter must be the last parameter."},{title:"The Difference",keyword:"vs Spread",description:"Rest collects, Spread expands."}]}},{id:"optional-chaining",title:"4.10 Optional Chaining (?.)",icon:"fa-link",content:`
        <h4>Core Concept: Safe Property Access</h4>
        <p><strong>Optional chaining</strong> (<code>?.</code>) allows you to safely access nested object properties without worrying about <code>null</code> or <code>undefined</code> values causing errors.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>?.</code></p>
        <p>If the value before <code>?.</code> is <code>null</code> or <code>undefined</code>, the expression short-circuits and returns <code>undefined</code>.</p>
        <pre><code>const user = {
  name: 'Alice',
  address: {
    city: 'NYC'
  }
};

console.log(user.address?.city);        // 'NYC'
console.log(user.contact?.email);       // undefined (no error!)
console.log(user.contact.email);        // Error: Cannot read property 'email' of undefined</code></pre>
        <hr>

        <h5>2. ARRAY ELEMENT ACCESS</h5>
        <pre><code>const users = [
  { name: 'Alice' },
  { name: 'Bob' }
];

console.log(users[0]?.name);   // 'Alice'
console.log(users[5]?.name);   // undefined
console.log(users?.[0]?.name); // 'Alice' (also checks if users exists)</code></pre>
        <hr>

        <h5>3. FUNCTION CALLS</h5>
        <p>Use <code>?.()</code> to safely call methods that might not exist.</p>
        <pre><code>const user = {
  name: 'Alice',
  greet: function() { return 'Hello!'; }
};

console.log(user.greet?.());      // 'Hello!'
console.log(user.farewell?.());   // undefined (no error!)

// Callback functions
const config = {};
config.onSuccess?.();  // Safe call, does nothing if undefined</code></pre>
        <hr>

        <h5>4. BEFORE OPTIONAL CHAINING</h5>
        <pre><code>// Old way: Manual null checks
const city = user && user.address && user.address.city;

// Or using try-catch
let email;
try {
  email = user.contact.email;
} catch (e) {
  email = undefined;
}

// New way: Much cleaner!
const city = user?.address?.city;
const email = user?.contact?.email;</code></pre>
      `,code:null,mindMap:{center:"Optional Chaining",nodes:[{title:"Object Properties",keyword:"obj?.prop",description:"Safely access nested properties."},{title:"Array Elements",keyword:"arr?.[index]",description:"Safely access array elements."},{title:"Function Calls",keyword:"func?.()",description:"Safely call functions that might not exist."}]}},{id:"nullish-coalescing",title:"4.11 Nullish Coalescing (??)",icon:"fa-question-circle",content:`
        <h4>Core Concept: Default Values for Null/Undefined</h4>
        <p>The <strong>nullish coalescing operator</strong> (<code>??</code>) returns the right-hand operand when the left-hand operand is <code>null</code> or <code>undefined</code>, and otherwise returns the left-hand operand.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>??</code></p>
        <pre><code>const username = null;
const displayName = username ?? 'Guest';
console.log(displayName); // 'Guest'

const age = 0;
const userAge = age ?? 18;
console.log(userAge); // 0 (not 18!)</code></pre>
        <hr>

        <h5>2. THE PROBLEM WITH || (OR OPERATOR)</h5>
        <p>The <code>||</code> operator treats all falsy values (<code>0</code>, <code>''</code>, <code>false</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>) the same way.</p>
        <pre><code>// Using ||
const count = 0;
const display1 = count || 10;
console.log(display1); // 10 (unexpected! 0 is valid)

// Using ??
const display2 = count ?? 10;
console.log(display2); // 0 (correct! only null/undefined trigger default)</code></pre>
        <hr>

        <h5>3. PRACTICAL EXAMPLES</h5>
        <pre><code>// Configuration with defaults
function loadConfig(userConfig) {
  const config = {
    theme: userConfig.theme ?? 'light',
    volume: userConfig.volume ?? 50,
    autoplay: userConfig.autoplay ?? false
  };
  return config;
}

console.log(loadConfig({ volume: 0 }));
// { theme: 'light', volume: 0, autoplay: false }
// volume is 0, not 50!

// Form input handling
const formData = {
  name: '',
  age: 0
};

const name = formData.name ?? 'No name';
console.log(name); // '' (empty string is not null/undefined)

const age = formData.age ?? 18;
console.log(age); // 0 (zero is not null/undefined)</code></pre>
        <hr>

        <h5>4. COMBINING WITH OPTIONAL CHAINING</h5>
        <pre><code>const user = {
  profile: {
    settings: {
      theme: null
    }
  }
};

const theme = user?.profile?.settings?.theme ?? 'light';
console.log(theme); // 'light'</code></pre>
      `,code:null,mindMap:{center:"Nullish Coalescing",nodes:[{title:"The Operator",keyword:"??",description:"Returns right side only if left is null or undefined."},{title:"vs OR (||)",keyword:"Only nullish",description:'Unlike ||, treats 0, false, "" as valid values.'},{title:"Use Case",keyword:"Default Values",description:"Provide defaults only for null/undefined, not all falsy values."}]}},{id:"symbol-type",title:"4.12 Symbol Type",icon:"fa-fingerprint",content:`
        <h4>Core Concept: Unique Identifiers</h4>
        <p><strong>Symbol</strong> is a primitive data type introduced in ES6. Every Symbol value is unique and immutable, making it perfect for creating unique property keys.</p>

        <h5>1. CREATING SYMBOLS</h5>
        <p><strong>Keyword:</strong> <code>Symbol()</code></p>
        <pre><code>const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false (always unique!)

// With description (for debugging)
const id = Symbol('id');
console.log(id.toString()); // 'Symbol(id)'</code></pre>
        <hr>

        <h5>2. SYMBOLS AS OBJECT KEYS</h5>
        <p>Symbols can be used as unique property keys that won't conflict with string keys.</p>
        <pre><code>const ID = Symbol('id');
const user = {
  name: 'Alice',
  [ID]: 12345  // Symbol as property key
};

console.log(user[ID]); // 12345
console.log(user.ID);  // undefined

// Symbols are hidden from normal iteration
console.log(Object.keys(user));        // ['name']
console.log(JSON.stringify(user));     // {"name":"Alice"}
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]</code></pre>
        <hr>

        <h5>3. GLOBAL SYMBOL REGISTRY</h5>
        <p><strong>Keyword:</strong> <code>Symbol.for()</code></p>
        <p>Create symbols that can be shared across different parts of your code.</p>
        <pre><code>// Create or retrieve global symbol
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
console.log(globalSym1 === globalSym2); // true

// Get key from symbol
console.log(Symbol.keyFor(globalSym1)); // 'app.id'</code></pre>
        <hr>

        <h5>4. WELL-KNOWN SYMBOLS</h5>
        <p>JavaScript provides built-in symbols that modify object behavior.</p>
        <pre><code>// Symbol.iterator - make object iterable
const myCollection = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.data[index++],
        done: index > this.data.length
      })
    };
  }
};

for (let item of myCollection) {
  console.log(item); // 1, 2, 3
}

// Other well-known symbols:
// Symbol.toStringTag, Symbol.toPrimitive, Symbol.hasInstance, etc.</code></pre>
        <hr>

        <h5>5. USE CASES</h5>
        <ul>
          <li><strong>Private Properties:</strong> Create properties that won't appear in normal enumeration</li>
          <li><strong>Avoid Conflicts:</strong> Ensure property names don't clash with other code</li>
          <li><strong>Meta-programming:</strong> Customize object behavior using well-known symbols</li>
        </ul>
      `,code:null,mindMap:{center:"Symbol",nodes:[{title:"Uniqueness",keyword:"Symbol()",description:"Every symbol is unique, even with same description."},{title:"Hidden Keys",keyword:"Property Keys",description:"Symbol keys are hidden from normal object iteration."},{title:"Global Registry",keyword:"Symbol.for()",description:"Share symbols across different scopes."},{title:"Well-Known",keyword:"Built-in Symbols",description:"Control object behavior with special symbols."}]}},{id:"weakmap-weakset",title:"4.13 WeakMap & WeakSet",icon:"fa-trash-alt",content:`
        <h4>Core Concept: Garbage-Collection-Friendly Collections</h4>
        <p><strong>WeakMap</strong> and <strong>WeakSet</strong> are special collections that hold "weak" references to objects, allowing them to be garbage collected if there are no other references.</p>

        <h5>1. WEAKMAP BASICS</h5>
        <p><strong>Keyword:</strong> <code>WeakMap</code></p>
        <p>A WeakMap is a collection of key-value pairs where keys must be objects and are held weakly.</p>
        <pre><code>const wm = new WeakMap();

let user = { name: 'Alice' };
wm.set(user, 'user data');

console.log(wm.get(user)); // 'user data'
console.log(wm.has(user)); // true

// When user is set to null, it can be garbage collected
user = null;
// The entry in WeakMap is automatically removed</code></pre>
        <hr>

        <h5>2. WEAKMAP VS MAP</h5>
        <table class="analogy-table">
          <thead>
            <tr><th>Feature</th><th>Map</th><th>WeakMap</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Keys</strong></td><td>Any type</td><td>Objects only</td></tr>
            <tr><td><strong>Garbage Collection</strong></td><td>Prevents GC</td><td>Allows GC</td></tr>
            <tr><td><strong>Iteration</strong></td><td>Iterable (.keys(), .values(), .forEach())</td><td>Not iterable</td></tr>
            <tr><td><strong>Size</strong></td><td>.size property</td><td>No .size property</td></tr>
          </tbody>
        </table>
        <hr>

        <h5>3. WEAKMAP USE CASES</h5>
        <p><strong>Private Data Storage:</strong></p>
        <pre><code>const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user = new User('Alice');
console.log(user.getName()); // 'Alice'
// Cannot access private data directly</code></pre>
        <p><strong>Caching/Memoization:</strong></p>
        <pre><code>const cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    const result = expensiveComputation(obj);
    cache.set(obj, result);
  }
  return cache.get(obj);
}

// When obj is no longer referenced, cache entry is auto-removed</code></pre>
        <hr>

        <h5>4. WEAKSET BASICS</h5>
        <p><strong>Keyword:</strong> <code>WeakSet</code></p>
        <p>A WeakSet is a collection of objects only, held weakly.</p>
        <pre><code>const ws = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true

obj1 = null; // obj1 can now be garbage collected</code></pre>
        <hr>

        <h5>5. WEAKSET USE CASES</h5>
        <p><strong>Tracking Object State:</strong></p>
        <pre><code>const processedObjects = new WeakSet();

function processOnce(obj) {
  if (processedObjects.has(obj)) {
    console.log('Already processed');
    return;
  }

  // Process the object
  console.log('Processing:', obj);
  processedObjects.add(obj);
}</code></pre>
      `,code:null,mindMap:{center:"WeakMap & WeakSet",nodes:[{title:"WeakMap",keyword:"Weak Key-Value",description:"Map with object keys held weakly."},{title:"WeakSet",keyword:"Weak Objects",description:"Set of objects held weakly."},{title:"Garbage Collection",keyword:"Auto Cleanup",description:"Entries removed when objects are no longer referenced."},{title:"Use Cases",keyword:"Private Data",description:"Store private data, caching, tracking state."}]}},{id:"proxy-reflect",title:"4.14 Proxy & Reflect",icon:"fa-mirror",content:`
        <h4>Core Concept: Meta-programming in JavaScript</h4>
        <p><strong>Proxy</strong> allows you to intercept and customize fundamental operations on objects. <strong>Reflect</strong> provides methods for interceptable JavaScript operations.</p>

        <h5>1. PROXY BASICS</h5>
        <p><strong>Keyword:</strong> <code>new Proxy(target, handler)</code></p>
        <p>A Proxy wraps an object and intercepts operations on it through "traps" defined in a handler object.</p>
        <pre><code>const target = { name: 'Alice', age: 25 };

const handler = {
  get(target, property) {
    console.log(\`Getting \${property}\`);
    return target[property];
  },
  set(target, property, value) {
    console.log(\`Setting \${property} to \${value}\`);
    target[property] = value;
    return true; // Indicates success
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: "Getting name", then "Alice"
proxy.age = 26;          // Logs: "Setting age to 26"</code></pre>
        <hr>

        <h5>2. COMMON PROXY TRAPS</h5>
        <ul>
          <li><strong>get(target, property, receiver)</strong> - Intercept property access</li>
          <li><strong>set(target, property, value, receiver)</strong> - Intercept property assignment</li>
          <li><strong>has(target, property)</strong> - Intercept 'in' operator</li>
          <li><strong>deleteProperty(target, property)</strong> - Intercept 'delete' operator</li>
          <li><strong>apply(target, thisArg, args)</strong> - Intercept function calls</li>
          <li><strong>construct(target, args)</strong> - Intercept 'new' operator</li>
        </ul>
        <hr>

        <h5>3. PRACTICAL PROXY EXAMPLES</h5>
        <p><strong>Validation:</strong></p>
        <pre><code>const validator = {
  set(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number' || value < 0) {
        throw new TypeError('Age must be a positive number');
      }
    }
    target[property] = value;
    return true;
  }
};

const person = new Proxy({}, validator);
person.age = 25;  // OK
person.age = -5;  // Error: Age must be a positive number</code></pre>
        <p><strong>Default Values:</strong></p>
        <pre><code>const withDefaults = (target, defaults) => {
  return new Proxy(target, {
    get(target, property) {
      return property in target ? target[property] : defaults[property];
    }
  });
};

const settings = withDefaults({}, { theme: 'light', lang: 'en' });
console.log(settings.theme); // 'light' (from defaults)
console.log(settings.lang);  // 'en' (from defaults)</code></pre>
        <p><strong>Negative Array Indexing:</strong></p>
        <pre><code>const negativeArray = (array) => {
  return new Proxy(array, {
    get(target, property) {
      const index = Number(property);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[property];
    }
  });
};

const arr = negativeArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // 5 (last element)
console.log(arr[-2]); // 4 (second to last)</code></pre>
        <hr>

        <h5>4. REFLECT API</h5>
        <p><strong>Keyword:</strong> <code>Reflect</code></p>
        <p>Reflect provides methods that mirror Proxy traps, offering a cleaner way to perform default operations.</p>
        <pre><code>const handler = {
  get(target, property, receiver) {
    console.log(\`Accessing: \${property}\`);
    // Use Reflect for default behavior
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    console.log(\`Setting: \${property} = \${value}\`);
    return Reflect.set(target, property, value, receiver);
  }
};

const obj = new Proxy({ x: 10 }, handler);
console.log(obj.x);  // Logs access, returns 10
obj.x = 20;          // Logs setting</code></pre>
        <hr>

        <h5>5. REFLECT METHODS</h5>
        <pre><code>// Same methods as Proxy traps
Reflect.get(target, property);
Reflect.set(target, property, value);
Reflect.has(target, property);
Reflect.deleteProperty(target, property);
Reflect.apply(func, thisArg, args);
Reflect.construct(target, args);

// Additional utility methods
Reflect.ownKeys(target);           // Get all keys (including symbols)
Reflect.getPrototypeOf(target);    // Get prototype
Reflect.setPrototypeOf(target, proto); // Set prototype</code></pre>
        <hr>

        <h5>6. USE CASES</h5>
        <ul>
          <li><strong>Validation:</strong> Enforce constraints on object properties</li>
          <li><strong>Logging:</strong> Track property access and modifications</li>
          <li><strong>Data Binding:</strong> Automatically update UI when data changes (Vue.js uses this!)</li>
          <li><strong>API Wrapping:</strong> Add functionality to existing objects without modifying them</li>
          <li><strong>Lazy Loading:</strong> Load properties on-demand</li>
        </ul>
      `,code:null,mindMap:{center:"Proxy & Reflect",nodes:[{title:"Proxy",keyword:"Intercept Operations",description:"Wrap objects to customize their behavior."},{title:"Traps",keyword:"Handler Methods",description:"Functions that intercept operations (get, set, etc.)."},{title:"Reflect",keyword:"Default Operations",description:"Provides methods to perform default object operations."},{title:"Use Cases",keyword:"Validation, Logging",description:"Validation, data binding, API wrapping, etc."}]}},{id:"part-4-summary",title:"Part IV Summary",icon:"fa-table",content:`
        <h5>Consolidated Reference Guide for Part IV</h5>
        <p>This table summarizes the advanced mechanics of JavaScript.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Keyword(s)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Scope</strong></td>
              <td><code>Global</code>, <code>Function</code>, <code>Block</code></td>
              <td>Defines where variables are accessible.</td>
            </tr>
            <tr>
              <td><strong>Closure</strong></td>
              <td><code>Lexical Environment</code></td>
              <td>A function that remembers variables from its creation scope.</td>
            </tr>
            <tr>
              <td><strong>"this" Keyword</strong></td>
              <td><code>this</code>, <code>=></code></td>
              <td>A reference to an object, determined by how a function is called.</td>
            </tr>
            <tr>
              <td><strong>Asynchronous</strong></td>
              <td><code>Promise</code>, <code>async/await</code></td>
              <td>Handles delays and long-running tasks without freezing the UI.</td>
            </tr>
            <tr>
              <td><strong>Inheritance</strong></td>
              <td><code>prototype</code>, <code>class</code></td>
              <td>How objects get properties and methods from other objects.</td>
            </tr>
          </tbody>
        </table>
      `,code:null,mindMap:null}]},Iv={id:"part-5",title:"Part V: The Modern Ecosystem",icon:"fa-project-diagram",subTopics:[{id:"ecosystem-overview",title:"5.1 Landscape Overview",icon:"fa-map",content:`
        <h4>Core Concept: The Modern JavaScript Ecosystem</h4>
        <p>Core JavaScript provides the language, but modern web development is dominated by an ecosystem of tools that provide structure, efficiency, and advanced capabilities.</p>
        
        <h5>1. KEY TERMINOLOGY</h5>
        <ul>
            <li><strong>Library vs. Framework:</strong> The key difference is "inversion of control." With a <strong>library</strong>, you are in control and call its code when you need it. With a <strong>framework</strong>, it is in control and calls your code at the appropriate times.</li>
            <li><strong>Runtime Environment:</strong> This is the environment where JavaScript code is executed. For the front-end, this is the browser. For the back-end, it's a dedicated runtime like Node.js.</li>
        </ul>
        <hr>
        <h5>Technology Landscape</h5>
        <p>This table offers a high-level map of the most important technologies in the modern JavaScript landscape.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Type</th>
              <th>Core Philosophy</th>
              <th>Primary Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>React</strong></td>
              <td>Library</td>
              <td>Declarative, Component-Based UI, Virtual DOM</td>
              <td>Building interactive UIs for Single-Page Applications (SPAs).</td>
            </tr>
            <tr>
              <td><strong>Angular</strong></td>
              <td>Framework</td>
              <td>Full-featured, Opinionated MVC/MVVM</td>
              <td>Building large-scale, enterprise-level SPAs.</td>
            </tr>
            <tr>
              <td><strong>Vue.js</strong></td>
              <td>Framework</td>
              <td>Progressive, Approachable, Performant</td>
              <td>Versatile, from enhancing existing pages to full SPAs.</td>
            </tr>
            <tr>
              <td><strong>Node.js</strong></td>
              <td>Runtime Env.</td>
              <td>Asynchronous, Event-Driven, Non-Blocking I/O</td>
              <td>Building fast, scalable server-side applications and APIs.</td>
            </tr>
            <tr>
              <td><strong>jQuery</strong></td>
              <td>Library</td>
              <td>"Write Less, Do More"</td>
              <td>Simplifying DOM manipulation, events, and AJAX (legacy).</td>
            </tr>
            <tr>
              <td><strong>Express.js</strong></td>
              <td>Framework</td>
              <td>Minimalist, Unopinionated (for Node.js)</td>
              <td>Creating web servers and APIs with Node.js.</td>
            </tr>
          </tbody>
        </table>
      `,code:null,mindMap:null},{id:"react-library",title:"5.2 React: The UI Library",icon:"fab fa-react",content:`
            <h4>Core Concept: Component-Driven User Interfaces</h4>
            <p>Developed by Meta (Facebook), React is the most popular JavaScript library for building user interfaces. It focuses on the "view" layer of an application.</p>
            
            <h5>1. DECLARATIVE UI</h5>
            <p><strong>Keyword:</strong> <code>Declarative</code></p>
            <p>You describe what the UI should look like for a given state, and React handles the complex DOM updates efficiently.</p>
            <p><strong>Example:</strong> Instead of manually writing steps to change text, you just change the state variable, and the UI automatically updates.</p>
            <hr>

            <h5>2. REUSABLE PIECES</h5>
            <p><strong>Keyword:</strong> <code>Components</code></p>
            <p>UIs are built from isolated, reusable pieces of code called components. Each component manages its own state and can be composed to build complex interfaces.</p>
            <p><strong>Example:</strong> A single <code>&lt;Button /&gt;</code> component can be reused throughout an application with different labels and functions.</p>
            <hr>

            <h5>3. HTML IN JAVASCRIPT</h5>
            <p><strong>Keyword:</strong> <code>JSX</code></p>
            <p>A syntax extension that allows you to write HTML-like markup directly within your JavaScript code, making component creation intuitive.</p>
            <p><strong>Example:</strong></p>
            <pre><code>const myElement = &lt;h1&gt;Hello, React!&lt;/h1&gt;;</code></pre>
        `,code:null,mindMap:{center:"React",nodes:[{title:"The Philosophy",keyword:"Declarative UI",description:"Describe the final UI, React will handle the rest."},{title:"The Building Blocks",keyword:"Components",description:"Create reusable, isolated pieces of UI."},{title:"The Syntax",keyword:"JSX",description:"Write HTML-like code directly in your JavaScript."},{title:"The Performance",keyword:"Virtual DOM",description:"An in-memory copy of the DOM for efficient updates."}]}},{id:"nodejs-runtime",title:"5.3 Node.js: JS on the Server",icon:"fab fa-node-js",content:`
            <h4>Core Concept: JavaScript Outside the Browser</h4>
            <p>Node.js is a runtime environment that allows JavaScript to be executed on a server. It enables the "JavaScript everywhere" paradigm, using one language for both client and server.</p>
            
            <h5>1. THE ARCHITECTURE</h5>
            <p><strong>Keyword:</strong> <code>Event-Driven</code></p>
            <p>Node.js uses a non-blocking, single-threaded event loop. This makes it exceptionally efficient at handling many concurrent connections, perfect for I/O-intensive tasks like APIs and web servers.</p>
            <p><strong>Example:</strong> A Node.js server can handle thousands of simultaneous requests to read from a database without getting blocked waiting for each one to finish.</p>
            <hr>

            <h5>2. THE ECOSYSTEM</h5>
            <p><strong>Keyword:</strong> <code>Modules (npm)</code></p>
            <p>Node.js has a rich ecosystem of third-party modules, managed by the Node Package Manager (npm). These modules provide functionality for almost any task.</p>
            <p><strong>Example:</strong> To create a web server, you would typically use the popular <code>Express.js</code> module, installed via npm.</p>
        `,code:null,mindMap:{center:"Node.js",nodes:[{title:"The Engine",keyword:"V8 Engine",description:"Allows JavaScript to run outside of a browser environment."},{title:"The Model",keyword:"Event-Driven",description:"Uses a non-blocking event loop for high efficiency."},{title:"The Ecosystem",keyword:"npm",description:"The largest software registry for reusable code packages (modules)."}]}},{id:"other-players",title:"5.4 Other Major Players",icon:"fa-users",content:`
            <h4>Core Concept: A Comparative Analysis</h4>
            <p>While React and Node.js are dominant, other powerful tools play a crucial role in the ecosystem.</p>
            
            <div class="two-column-layout">
                <div class="column">
                    <h5>1. ANGULAR</h5>
                    <p><strong>Keyword:</strong> <code>Framework</code></p>
                    <p>Maintained by Google, Angular is a comprehensive, "batteries-included" web framework. It provides a complete, opinionated solution for building large-scale, enterprise-level applications.</p>
                </div>
                <div class="column">
                    <h5>2. VUE.JS</h5>
                    <p><strong>Keyword:</strong> <code>Progressive Framework</code></p>
                    <p>Known for its approachability and high performance. It's designed to be incrementally adoptable, meaning it can be used for a small part of a page or a full-scale application.</p>
                </div>
            </div>
            <hr>
            <div class="two-column-layout">
                <div class="column">
                    <h5>3. JQUERY</h5>
                    <p><strong>Keyword:</strong> <code>Legacy Library</code></p>
                    <p>Historically important, jQuery simplified cross-browser DOM manipulation and AJAX. While still found on many websites, its direct manipulation approach has been largely superseded by modern libraries.</p>
                </div>
                <div class="column">
                    <h5>4. EXPRESS.JS</h5>
                    <p><strong>Keyword:</strong> <code>Server Framework</code></p>
                    <p>The de facto standard server framework for Node.js. It is a minimal and flexible framework for building web servers and APIs.</p>
                </div>
            </div>
        `,code:null,mindMap:null},{id:"part-5-summary",title:"Part V Summary",icon:"fa-table",content:`
        <h5>Consolidated Reference Guide for Part V</h5>
        <p>This table summarizes the major players in the modern JavaScript ecosystem.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Type</th>
              <th>Primary Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>React</strong></td>
              <td>Library</td>
              <td>Building component-based user interfaces for SPAs.</td>
            </tr>
            <tr>
              <td><strong>Node.js</strong></td>
              <td>Runtime</td>
              <td>Running JavaScript on the server for back-end applications.</td>
            </tr>
            <tr>
              <td><strong>Angular</strong></td>
              <td>Framework</td>
              <td>Building large-scale, enterprise-level applications.</td>
            </tr>
            <tr>
              <td><strong>Vue.js</strong></td>
              <td>Framework</td>
              <td>A progressive framework, adaptable for projects of any size.</td>
            </tr>
            <tr>
              <td><strong>Express.js</strong></td>
              <td>Framework</td>
              <td>The standard for creating web servers and APIs with Node.js.</td>
            </tr>
          </tbody>
        </table>
      `,code:null,mindMap:null}]},Yn=[Jv,Iv],Gn={fundamentals:Qv},Zv="/vqm-luma-javascript/assets/LUMA-logo-BY6-yrgA.png";function Fv({toggleTheme:o,theme:r}){const u=Kn(),{getCompletionStats:s,resetProgress:d}=vr(),{getBookmarkCount:m}=br(),[y,b]=w.useState(!1),g=s(Gn.fundamentals),f=s(Yn),S=m(),C=()=>{window.confirm("Are you sure you want to reset all progress? This action cannot be undone.")&&(d(),b(!1))};return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"header-buttons",children:[h.jsx("button",{onClick:o,className:"theme-toggle-button","aria-label":"Toggle theme",children:h.jsx("i",{className:r==="dark"?"fas fa-sun":"fas fa-moon"})}),h.jsx("button",{onClick:()=>b(!y),className:"settings-button","aria-label":"Settings",children:h.jsx("i",{className:"fas fa-cog"})})]}),y&&h.jsxs("div",{className:"settings-dropdown",children:[h.jsx("div",{className:"settings-header",children:"Settings"}),h.jsxs("button",{onClick:C,className:"reset-button",children:[h.jsx("i",{className:"fas fa-redo"})," Reset Progress"]})]}),h.jsxs("div",{className:"home-container",children:[h.jsxs("header",{className:"home-header",children:[h.jsx("div",{className:"logo-container",children:h.jsx("img",{src:Zv,alt:"LUMA Logo",className:"luma-logo"})}),h.jsx("h1",{className:"main-title",children:"LUMA"}),h.jsx("p",{className:"subtitle",children:"Learn, Uncover, Master, Archive"})]}),h.jsxs("div",{className:"nav-cards",children:[h.jsxs("div",{className:"nav-card",onClick:()=>u("/vqm-luma-javascript/fundamentals"),children:[g.percentage===100&&h.jsx("div",{className:"completion-badge",children:h.jsx("i",{className:"fas fa-check-circle"})}),h.jsx("i",{className:"fas fa-book"}),h.jsx("h2",{children:"Fundamentals"}),h.jsx("p",{children:"Start with the core concepts. Essential for every JavaScript developer."}),g.total>0&&h.jsxs("div",{className:"card-progress",children:[h.jsx("div",{className:"card-progress-bar",children:h.jsx("div",{className:"card-progress-fill",style:{width:`${g.percentage}%`}})}),h.jsxs("div",{className:"card-progress-text",children:[g.percentage,"% Complete"]})]})]}),h.jsxs("div",{className:"nav-card",onClick:()=>u("/vqm-luma-javascript/advanced"),children:[f.percentage===100&&h.jsx("div",{className:"completion-badge",children:h.jsx("i",{className:"fas fa-check-circle"})}),h.jsx("i",{className:"fas fa-brain"}),h.jsx("h2",{children:"Advanced Topics"}),h.jsx("p",{children:"Explore complex patterns, features, and best practices to level up."}),f.total>0&&h.jsxs("div",{className:"card-progress",children:[h.jsx("div",{className:"card-progress-bar",children:h.jsx("div",{className:"card-progress-fill",style:{width:`${f.percentage}%`}})}),h.jsxs("div",{className:"card-progress-text",children:[f.percentage,"% Complete"]})]})]}),h.jsxs("div",{className:"nav-card",onClick:()=>u("/vqm-luma-javascript/bookmarks"),children:[S>0&&h.jsx("div",{className:"bookmark-count-badge",children:S}),h.jsx("i",{className:"fas fa-bookmark"}),h.jsx("h2",{children:"My Bookmarks"}),h.jsx("p",{children:"Quick access to your saved topics for easy reference."}),S>0&&h.jsxs("div",{className:"bookmark-info",children:[h.jsx("i",{className:"fas fa-bookmark"})," ",S," bookmark",S!==1?"s":""," saved"]})]}),h.jsxs("div",{className:"nav-card",onClick:()=>u("/vqm-luma-javascript/exercises"),children:[h.jsx("i",{className:"fas fa-keyboard"}),h.jsx("h2",{children:"Exercises"}),h.jsx("p",{children:"Solidify your knowledge with hands-on coding challenges."})]})]})]})]})}/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:jp,setPrototypeOf:Wh,isFrozen:$v,getPrototypeOf:Pv,getOwnPropertyDescriptor:Wv}=Object;let{freeze:vt,seal:Jt,create:qc}=Object,{apply:Kc,construct:Vc}=typeof Reflect<"u"&&Reflect;vt||(vt=function(r){return r});Jt||(Jt=function(r){return r});Kc||(Kc=function(r,u){for(var s=arguments.length,d=new Array(s>2?s-2:0),m=2;m<s;m++)d[m-2]=arguments[m];return r.apply(u,d)});Vc||(Vc=function(r){for(var u=arguments.length,s=new Array(u>1?u-1:0),d=1;d<u;d++)s[d-1]=arguments[d];return new r(...s)});const or=bt(Array.prototype.forEach),eb=bt(Array.prototype.lastIndexOf),ep=bt(Array.prototype.pop),Oi=bt(Array.prototype.push),tb=bt(Array.prototype.splice),fr=bt(String.prototype.toLowerCase),kc=bt(String.prototype.toString),_c=bt(String.prototype.match),Di=bt(String.prototype.replace),ab=bt(String.prototype.indexOf),nb=bt(String.prototype.trim),Wt=bt(Object.prototype.hasOwnProperty),yt=bt(RegExp.prototype.test),ki=lb(TypeError);function bt(o){return function(r){r instanceof RegExp&&(r.lastIndex=0);for(var u=arguments.length,s=new Array(u>1?u-1:0),d=1;d<u;d++)s[d-1]=arguments[d];return Kc(o,r,s)}}function lb(o){return function(){for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return Vc(o,u)}}function ye(o,r){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:fr;Wh&&Wh(o,null);let s=r.length;for(;s--;){let d=r[s];if(typeof d=="string"){const m=u(d);m!==d&&($v(r)||(r[s]=m),d=m)}o[d]=!0}return o}function ib(o){for(let r=0;r<o.length;r++)Wt(o,r)||(o[r]=null);return o}function ra(o){const r=qc(null);for(const[u,s]of jp(o))Wt(o,u)&&(Array.isArray(s)?r[u]=ib(s):s&&typeof s=="object"&&s.constructor===Object?r[u]=ra(s):r[u]=s);return r}function _i(o,r){for(;o!==null;){const s=Wv(o,r);if(s){if(s.get)return bt(s.get);if(typeof s.value=="function")return bt(s.value)}o=Pv(o)}function u(){return null}return u}const tp=vt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),jc=vt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Lc=vt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ob=vt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Uc=vt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),rb=vt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ap=vt(["#text"]),np=vt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Bc=vt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lp=vt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),rr=vt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),sb=Jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),cb=Jt(/<%[\w\W]*|[\w\W]*%>/gm),ub=Jt(/\$\{[\w\W]*/gm),db=Jt(/^data-[\-\w.\u00B7-\uFFFF]+$/),fb=Jt(/^aria-[\-\w]+$/),Lp=Jt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hb=Jt(/^(?:\w+script|data):/i),pb=Jt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Up=Jt(/^html$/i),mb=Jt(/^[a-z][.\w]*(-[.\w]+)+$/i);var ip=Object.freeze({__proto__:null,ARIA_ATTR:fb,ATTR_WHITESPACE:pb,CUSTOM_ELEMENT:mb,DATA_ATTR:db,DOCTYPE_NAME:Up,ERB_EXPR:cb,IS_ALLOWED_URI:Lp,IS_SCRIPT_OR_DATA:hb,MUSTACHE_EXPR:sb,TMPLIT_EXPR:ub});const ji={element:1,text:3,progressingInstruction:7,comment:8,document:9},gb=function(){return typeof window>"u"?null:window},yb=function(r,u){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let s=null;const d="data-tt-policy-suffix";u&&u.hasAttribute(d)&&(s=u.getAttribute(d));const m="dompurify"+(s?"#"+s:"");try{return r.createPolicy(m,{createHTML(y){return y},createScriptURL(y){return y}})}catch{return console.warn("TrustedTypes policy "+m+" could not be created."),null}},op=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Bp(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gb();const r=te=>Bp(te);if(r.version="3.3.1",r.removed=[],!o||!o.document||o.document.nodeType!==ji.document||!o.Element)return r.isSupported=!1,r;let{document:u}=o;const s=u,d=s.currentScript,{DocumentFragment:m,HTMLTemplateElement:y,Node:b,Element:g,NodeFilter:f,NamedNodeMap:S=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement:C,DOMParser:M,trustedTypes:k}=o,B=g.prototype,q=_i(B,"cloneNode"),K=_i(B,"remove"),z=_i(B,"nextSibling"),ee=_i(B,"childNodes"),P=_i(B,"parentNode");if(typeof y=="function"){const te=u.createElement("template");te.content&&te.content.ownerDocument&&(u=te.content.ownerDocument)}let ie,F="";const{implementation:Ae,createNodeIterator:fe,createDocumentFragment:Se,getElementsByTagName:V}=u,{importNode:I}=s;let Y=op();r.isSupported=typeof jp=="function"&&typeof P=="function"&&Ae&&Ae.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Q,ERB_EXPR:me,TMPLIT_EXPR:je,DATA_ATTR:Ue,ARIA_ATTR:_,IS_SCRIPT_OR_DATA:J,ATTR_WHITESPACE:oe,CUSTOM_ELEMENT:Ce}=ip;let{IS_ALLOWED_URI:A}=ip,L=null;const Z=ye({},[...tp,...jc,...Lc,...Uc,...ap]);let X=null;const ne=ye({},[...np,...Bc,...lp,...rr]);let le=Object.seal(qc(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),se=null,it=null;const xe=Object.seal(qc(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let It=!0,pn=!0,mn=!1,Vn=!0,ea=!1,Ha=!0,da=!1,Ol=!1,St=!1,Ya=!1,gn=!1,yn=!1,vn=!0,Hi=!1;const Yi="user-content-";let Dl=!0,bn=!1,Lt={},Be=null;const Ut=ye({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let dt=null;const Gi=ye({},["audio","video","img","source","image","track"]);let kl=null;const qi=ye({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),fa="http://www.w3.org/1998/Math/MathML",ha="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml";let Zt=ot,pa=!1,_l=null;const Ki=ye({},[fa,ha,ot],kc);let Sn=ye({},["mi","mo","mn","ms","mtext"]),Ga=ye({},["annotation-xml"]);const En=ye({},["title","style","font","a","script"]);let An=null;const Vi=["application/xhtml+xml","text/html"],Xi="text/html";let He=null,ta=null;const Qi=u.createElement("form"),Ji=function(E){return E instanceof RegExp||E instanceof Function},Bt=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ta&&ta===E)){if((!E||typeof E!="object")&&(E={}),E=ra(E),An=Vi.indexOf(E.PARSER_MEDIA_TYPE)===-1?Xi:E.PARSER_MEDIA_TYPE,He=An==="application/xhtml+xml"?kc:fr,L=Wt(E,"ALLOWED_TAGS")?ye({},E.ALLOWED_TAGS,He):Z,X=Wt(E,"ALLOWED_ATTR")?ye({},E.ALLOWED_ATTR,He):ne,_l=Wt(E,"ALLOWED_NAMESPACES")?ye({},E.ALLOWED_NAMESPACES,kc):Ki,kl=Wt(E,"ADD_URI_SAFE_ATTR")?ye(ra(qi),E.ADD_URI_SAFE_ATTR,He):qi,dt=Wt(E,"ADD_DATA_URI_TAGS")?ye(ra(Gi),E.ADD_DATA_URI_TAGS,He):Gi,Be=Wt(E,"FORBID_CONTENTS")?ye({},E.FORBID_CONTENTS,He):Ut,se=Wt(E,"FORBID_TAGS")?ye({},E.FORBID_TAGS,He):ra({}),it=Wt(E,"FORBID_ATTR")?ye({},E.FORBID_ATTR,He):ra({}),Lt=Wt(E,"USE_PROFILES")?E.USE_PROFILES:!1,It=E.ALLOW_ARIA_ATTR!==!1,pn=E.ALLOW_DATA_ATTR!==!1,mn=E.ALLOW_UNKNOWN_PROTOCOLS||!1,Vn=E.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ea=E.SAFE_FOR_TEMPLATES||!1,Ha=E.SAFE_FOR_XML!==!1,da=E.WHOLE_DOCUMENT||!1,Ya=E.RETURN_DOM||!1,gn=E.RETURN_DOM_FRAGMENT||!1,yn=E.RETURN_TRUSTED_TYPE||!1,St=E.FORCE_BODY||!1,vn=E.SANITIZE_DOM!==!1,Hi=E.SANITIZE_NAMED_PROPS||!1,Dl=E.KEEP_CONTENT!==!1,bn=E.IN_PLACE||!1,A=E.ALLOWED_URI_REGEXP||Lp,Zt=E.NAMESPACE||ot,Sn=E.MATHML_TEXT_INTEGRATION_POINTS||Sn,Ga=E.HTML_INTEGRATION_POINTS||Ga,le=E.CUSTOM_ELEMENT_HANDLING||{},E.CUSTOM_ELEMENT_HANDLING&&Ji(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(le.tagNameCheck=E.CUSTOM_ELEMENT_HANDLING.tagNameCheck),E.CUSTOM_ELEMENT_HANDLING&&Ji(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(le.attributeNameCheck=E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),E.CUSTOM_ELEMENT_HANDLING&&typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(le.allowCustomizedBuiltInElements=E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ea&&(pn=!1),gn&&(Ya=!0),Lt&&(L=ye({},ap),X=[],Lt.html===!0&&(ye(L,tp),ye(X,np)),Lt.svg===!0&&(ye(L,jc),ye(X,Bc),ye(X,rr)),Lt.svgFilters===!0&&(ye(L,Lc),ye(X,Bc),ye(X,rr)),Lt.mathMl===!0&&(ye(L,Uc),ye(X,lp),ye(X,rr))),E.ADD_TAGS&&(typeof E.ADD_TAGS=="function"?xe.tagCheck=E.ADD_TAGS:(L===Z&&(L=ra(L)),ye(L,E.ADD_TAGS,He))),E.ADD_ATTR&&(typeof E.ADD_ATTR=="function"?xe.attributeCheck=E.ADD_ATTR:(X===ne&&(X=ra(X)),ye(X,E.ADD_ATTR,He))),E.ADD_URI_SAFE_ATTR&&ye(kl,E.ADD_URI_SAFE_ATTR,He),E.FORBID_CONTENTS&&(Be===Ut&&(Be=ra(Be)),ye(Be,E.FORBID_CONTENTS,He)),E.ADD_FORBID_CONTENTS&&(Be===Ut&&(Be=ra(Be)),ye(Be,E.ADD_FORBID_CONTENTS,He)),Dl&&(L["#text"]=!0),da&&ye(L,["html","head","body"]),L.table&&(ye(L,["tbody"]),delete se.tbody),E.TRUSTED_TYPES_POLICY){if(typeof E.TRUSTED_TYPES_POLICY.createHTML!="function")throw ki('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof E.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ki('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ie=E.TRUSTED_TYPES_POLICY,F=ie.createHTML("")}else ie===void 0&&(ie=yb(k,d)),ie!==null&&typeof F=="string"&&(F=ie.createHTML(""));vt&&vt(E),ta=E}},$e=ye({},[...jc,...Lc,...ob]),rt=ye({},[...Uc,...rb]),qa=function(E){let G=P(E);(!G||!G.tagName)&&(G={namespaceURI:Zt,tagName:"template"});const W=fr(E.tagName),ke=fr(G.tagName);return _l[E.namespaceURI]?E.namespaceURI===ha?G.namespaceURI===ot?W==="svg":G.namespaceURI===fa?W==="svg"&&(ke==="annotation-xml"||Sn[ke]):!!$e[W]:E.namespaceURI===fa?G.namespaceURI===ot?W==="math":G.namespaceURI===ha?W==="math"&&Ga[ke]:!!rt[W]:E.namespaceURI===ot?G.namespaceURI===ha&&!Ga[ke]||G.namespaceURI===fa&&!Sn[ke]?!1:!rt[W]&&(En[W]||!$e[W]):!!(An==="application/xhtml+xml"&&_l[E.namespaceURI]):!1},Et=function(E){Oi(r.removed,{element:E});try{P(E).removeChild(E)}catch{K(E)}},ma=function(E,G){try{Oi(r.removed,{attribute:G.getAttributeNode(E),from:G})}catch{Oi(r.removed,{attribute:null,from:G})}if(G.removeAttribute(E),E==="is")if(Ya||gn)try{Et(G)}catch{}else try{G.setAttribute(E,"")}catch{}},Ii=function(E){let G=null,W=null;if(St)E="<remove></remove>"+E;else{const qe=_c(E,/^[\r\n\t ]+/);W=qe&&qe[0]}An==="application/xhtml+xml"&&Zt===ot&&(E='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+E+"</body></html>");const ke=ie?ie.createHTML(E):E;if(Zt===ot)try{G=new M().parseFromString(ke,An)}catch{}if(!G||!G.documentElement){G=Ae.createDocument(Zt,"template",null);try{G.documentElement.innerHTML=pa?F:ke}catch{}}const Pe=G.body||G.documentElement;return E&&W&&Pe.insertBefore(u.createTextNode(W),Pe.childNodes[0]||null),Zt===ot?V.call(G,da?"html":"body")[0]:da?G.documentElement:Pe},jl=function(E){return fe.call(E.ownerDocument||E,E,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},ga=function(E){return E instanceof C&&(typeof E.nodeName!="string"||typeof E.textContent!="string"||typeof E.removeChild!="function"||!(E.attributes instanceof S)||typeof E.removeAttribute!="function"||typeof E.setAttribute!="function"||typeof E.namespaceURI!="string"||typeof E.insertBefore!="function"||typeof E.hasChildNodes!="function")},Xn=function(E){return typeof b=="function"&&E instanceof b};function ft(te,E,G){or(te,W=>{W.call(r,E,G,ta)})}const ya=function(E){let G=null;if(ft(Y.beforeSanitizeElements,E,null),ga(E))return Et(E),!0;const W=He(E.nodeName);if(ft(Y.uponSanitizeElement,E,{tagName:W,allowedTags:L}),Ha&&E.hasChildNodes()&&!Xn(E.firstElementChild)&&yt(/<[/\w!]/g,E.innerHTML)&&yt(/<[/\w!]/g,E.textContent)||E.nodeType===ji.progressingInstruction||Ha&&E.nodeType===ji.comment&&yt(/<[/\w]/g,E.data))return Et(E),!0;if(!(xe.tagCheck instanceof Function&&xe.tagCheck(W))&&(!L[W]||se[W])){if(!se[W]&&va(W)&&(le.tagNameCheck instanceof RegExp&&yt(le.tagNameCheck,W)||le.tagNameCheck instanceof Function&&le.tagNameCheck(W)))return!1;if(Dl&&!Be[W]){const ke=P(E)||E.parentNode,Pe=ee(E)||E.childNodes;if(Pe&&ke){const qe=Pe.length;for(let We=qe-1;We>=0;--We){const At=q(Pe[We],!0);At.__removalCount=(E.__removalCount||0)+1,ke.insertBefore(At,z(E))}}}return Et(E),!0}return E instanceof g&&!qa(E)||(W==="noscript"||W==="noembed"||W==="noframes")&&yt(/<\/no(script|embed|frames)/i,E.innerHTML)?(Et(E),!0):(ea&&E.nodeType===ji.text&&(G=E.textContent,or([Q,me,je],ke=>{G=Di(G,ke," ")}),E.textContent!==G&&(Oi(r.removed,{element:E.cloneNode()}),E.textContent=G)),ft(Y.afterSanitizeElements,E,null),!1)},Ka=function(E,G,W){if(vn&&(G==="id"||G==="name")&&(W in u||W in Qi))return!1;if(!(pn&&!it[G]&&yt(Ue,G))){if(!(It&&yt(_,G))){if(!(xe.attributeCheck instanceof Function&&xe.attributeCheck(G,E))){if(!X[G]||it[G]){if(!(va(E)&&(le.tagNameCheck instanceof RegExp&&yt(le.tagNameCheck,E)||le.tagNameCheck instanceof Function&&le.tagNameCheck(E))&&(le.attributeNameCheck instanceof RegExp&&yt(le.attributeNameCheck,G)||le.attributeNameCheck instanceof Function&&le.attributeNameCheck(G,E))||G==="is"&&le.allowCustomizedBuiltInElements&&(le.tagNameCheck instanceof RegExp&&yt(le.tagNameCheck,W)||le.tagNameCheck instanceof Function&&le.tagNameCheck(W))))return!1}else if(!kl[G]){if(!yt(A,Di(W,oe,""))){if(!((G==="src"||G==="xlink:href"||G==="href")&&E!=="script"&&ab(W,"data:")===0&&dt[E])){if(!(mn&&!yt(J,Di(W,oe,"")))){if(W)return!1}}}}}}}return!0},va=function(E){return E!=="annotation-xml"&&_c(E,Ce)},Xe=function(E){ft(Y.beforeSanitizeAttributes,E,null);const{attributes:G}=E;if(!G||ga(E))return;const W={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:X,forceKeepAttr:void 0};let ke=G.length;for(;ke--;){const Pe=G[ke],{name:qe,namespaceURI:We,value:At}=Pe,ht=He(qe),Tn=At;let Ie=qe==="value"?Tn:nb(Tn);if(W.attrName=ht,W.attrValue=Ie,W.keepAttr=!0,W.forceKeepAttr=void 0,ft(Y.uponSanitizeAttribute,E,W),Ie=W.attrValue,Hi&&(ht==="id"||ht==="name")&&(ma(qe,E),Ie=Yi+Ie),Ha&&yt(/((--!?|])>)|<\/(style|title|textarea)/i,Ie)){ma(qe,E);continue}if(ht==="attributename"&&_c(Ie,"href")){ma(qe,E);continue}if(W.forceKeepAttr)continue;if(!W.keepAttr){ma(qe,E);continue}if(!Vn&&yt(/\/>/i,Ie)){ma(qe,E);continue}ea&&or([Q,me,je],Qn=>{Ie=Di(Ie,Qn," ")});const ba=He(E.nodeName);if(!Ka(ba,ht,Ie)){ma(qe,E);continue}if(ie&&typeof k=="object"&&typeof k.getAttributeType=="function"&&!We)switch(k.getAttributeType(ba,ht)){case"TrustedHTML":{Ie=ie.createHTML(Ie);break}case"TrustedScriptURL":{Ie=ie.createScriptURL(Ie);break}}if(Ie!==Tn)try{We?E.setAttributeNS(We,qe,Ie):E.setAttribute(qe,Ie),ga(E)?Et(E):ep(r.removed)}catch{ma(qe,E)}}ft(Y.afterSanitizeAttributes,E,null)},Zi=function te(E){let G=null;const W=jl(E);for(ft(Y.beforeSanitizeShadowDOM,E,null);G=W.nextNode();)ft(Y.uponSanitizeShadowNode,G,null),ya(G),Xe(G),G.content instanceof m&&te(G.content);ft(Y.afterSanitizeShadowDOM,E,null)};return r.sanitize=function(te){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},G=null,W=null,ke=null,Pe=null;if(pa=!te,pa&&(te="<!-->"),typeof te!="string"&&!Xn(te))if(typeof te.toString=="function"){if(te=te.toString(),typeof te!="string")throw ki("dirty is not a string, aborting")}else throw ki("toString is not a function");if(!r.isSupported)return te;if(Ol||Bt(E),r.removed=[],typeof te=="string"&&(bn=!1),bn){if(te.nodeName){const At=He(te.nodeName);if(!L[At]||se[At])throw ki("root node is forbidden and cannot be sanitized in-place")}}else if(te instanceof b)G=Ii("<!---->"),W=G.ownerDocument.importNode(te,!0),W.nodeType===ji.element&&W.nodeName==="BODY"||W.nodeName==="HTML"?G=W:G.appendChild(W);else{if(!Ya&&!ea&&!da&&te.indexOf("<")===-1)return ie&&yn?ie.createHTML(te):te;if(G=Ii(te),!G)return Ya?null:yn?F:""}G&&St&&Et(G.firstChild);const qe=jl(bn?te:G);for(;ke=qe.nextNode();)ya(ke),Xe(ke),ke.content instanceof m&&Zi(ke.content);if(bn)return te;if(Ya){if(gn)for(Pe=Se.call(G.ownerDocument);G.firstChild;)Pe.appendChild(G.firstChild);else Pe=G;return(X.shadowroot||X.shadowrootmode)&&(Pe=I.call(s,Pe,!0)),Pe}let We=da?G.outerHTML:G.innerHTML;return da&&L["!doctype"]&&G.ownerDocument&&G.ownerDocument.doctype&&G.ownerDocument.doctype.name&&yt(Up,G.ownerDocument.doctype.name)&&(We="<!DOCTYPE "+G.ownerDocument.doctype.name+`>
`+We),ea&&or([Q,me,je],At=>{We=Di(We,At," ")}),ie&&yn?ie.createHTML(We):We},r.setConfig=function(){let te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bt(te),Ol=!0},r.clearConfig=function(){ta=null,Ol=!1},r.isValidAttribute=function(te,E,G){ta||Bt({});const W=He(te),ke=He(E);return Ka(W,ke,G)},r.addHook=function(te,E){typeof E=="function"&&Oi(Y[te],E)},r.removeHook=function(te,E){if(E!==void 0){const G=eb(Y[te],E);return G===-1?void 0:tb(Y[te],G,1)[0]}return ep(Y[te])},r.removeHooks=function(te){Y[te]=[]},r.removeAllHooks=function(){Y=op()},r}var zp=Bp();const Hp=o=>o?zp.sanitize(o,{ALLOWED_TAGS:["h1","h2","h3","h4","h5","h6","p","br","hr","ul","ol","li","strong","b","em","i","u","s","mark","code","pre","kbd","blockquote","q","cite","a","span","div","table","thead","tbody","tr","th","td","img","figure","figcaption","details","summary","sup","sub"],ALLOWED_ATTR:["href","target","rel","src","alt","width","height","class","id","colspan","rowspan","title"],ALLOW_DATA_ATTR:!1,ADD_ATTR:["target"],FORBID_TAGS:["script","style","iframe","form","input","button"],FORBID_ATTR:["onerror","onload","onclick","onmouseover"]}):"",sr=o=>o?zp.sanitize(o,{ALLOWED_TAGS:[]}):"",Yp=()=>h.jsxs("div",{className:"topic-skeleton","aria-busy":"true","aria-label":"Loading content",children:[h.jsxs("div",{className:"skeleton-header",children:[h.jsx("div",{className:"skeleton-title"}),h.jsx("div",{className:"skeleton-badge"})]}),h.jsxs("div",{className:"skeleton-content",children:[h.jsxs("div",{className:"skeleton-paragraph",children:[h.jsx("div",{className:"skeleton-line skeleton-line-full"}),h.jsx("div",{className:"skeleton-line skeleton-line-full"}),h.jsx("div",{className:"skeleton-line skeleton-line-medium"})]}),h.jsxs("div",{className:"skeleton-paragraph",children:[h.jsx("div",{className:"skeleton-line skeleton-line-full"}),h.jsx("div",{className:"skeleton-line skeleton-line-long"}),h.jsx("div",{className:"skeleton-line skeleton-line-full"}),h.jsx("div",{className:"skeleton-line skeleton-line-short"})]}),h.jsx("div",{className:"skeleton-code-block"}),h.jsxs("div",{className:"skeleton-paragraph",children:[h.jsx("div",{className:"skeleton-line skeleton-line-medium"}),h.jsx("div",{className:"skeleton-line skeleton-line-full"}),h.jsx("div",{className:"skeleton-line skeleton-line-long"})]})]})]}),vb=({code:o})=>h.jsx("div",{className:"code-block",children:h.jsx("pre",{children:h.jsx("code",{children:o.trim()})})}),bb=o=>o===2?[{x:20,y:50},{x:80,y:50}]:o===3?[{x:50,y:15},{x:20,y:85},{x:80,y:85}]:[{x:25,y:20},{x:75,y:20},{x:75,y:80},{x:25,y:80}],Gp=ry.memo(({data:o})=>{const[r,u]=w.useState(new Set),s=w.useCallback(y=>{u(b=>{const g=new Set(b);return g.has(y)?g.delete(y):g.add(y),g})},[]),d=w.useMemo(()=>bb(o.nodes.length),[o.nodes.length]),m={x:50,y:50};return h.jsxs("div",{className:"mind-map-view",role:"img","aria-label":`Mind map showing ${o.center} and related concepts`,children:[h.jsx("svg",{className:"mind-map-svg","aria-hidden":"true",children:d.map((y,b)=>h.jsx("line",{x1:`${m.x}%`,y1:`${m.y}%`,x2:`${y.x}%`,y2:`${y.y}%`,stroke:"var(--border-color)",strokeWidth:"2"},b))}),h.jsx("div",{className:"mind-map-center-node",children:o.center}),o.nodes.map((y,b)=>{const g=r.has(b);return h.jsxs("div",{className:`mind-map-node ${g?"expanded":""}`,style:{left:`${d[b].x}%`,top:`${d[b].y}%`},children:[h.jsxs("div",{className:"node-content",children:[h.jsx("div",{className:"node-title",children:y.title}),h.jsx("div",{className:"node-keyword",children:h.jsx("code",{children:y.keyword})}),h.jsx("div",{className:"node-description-container",children:h.jsx("p",{className:"node-description",children:y.description})})]}),h.jsx("button",{className:"node-toggle-button",onClick:()=>s(b),"aria-expanded":g,"aria-label":`${g?"Collapse":"Expand"} ${y.title} details`,children:h.jsx("i",{className:`fas ${g?"fa-minus":"fa-plus"}`,"aria-hidden":"true"})})]},b)})]})});Gp.displayName="MindMap";function Sb(){const o=Kn(),r=za(),{isTopicComplete:u,markTopicComplete:s,getCompletionStats:d}=vr(),{isBookmarked:m,toggleBookmark:y}=br(),b=Gn.fundamentals[0],g=b.subTopics?b.subTopics[0]:b,[f,S]=w.useState(g),[C,M]=w.useState("normal"),[k,B]=w.useState(new Set([b.id])),[q,K]=w.useState(!1),[z,ee]=w.useState(!1),[P,ie]=w.useState(!1),F=d(Gn.fundamentals),Ae=w.useMemo(()=>Gn.fundamentals.find(Y=>Y.subTopics?.some(Q=>Q.id===f.id)),[f.id]);w.useEffect(()=>{if(r.state?.topicId){let Y=null,Q=null;Gn.fundamentals.forEach(me=>{if(me.subTopics){const je=me.subTopics.find(Ue=>Ue.id===r.state.topicId);je&&(Y=je,Q=me.id)}else me.id===r.state.topicId&&(Y=me)}),Y&&(S(Y),Q&&B(me=>new Set([...me,Q])))}},[r.state]),w.useEffect(()=>{let Y;const Q=()=>{clearTimeout(Y),Y=setTimeout(()=>{K(window.scrollY>300)},150)};return window.addEventListener("scroll",Q,{passive:!0}),()=>{window.removeEventListener("scroll",Q),clearTimeout(Y)}},[]);const fe=w.useCallback(Y=>{ie(!0),S(Y),M("normal"),ee(!1),window.scrollTo(0,0),setTimeout(()=>ie(!1),150)},[]),Se=w.useCallback(Y=>{B(Q=>{const me=new Set(Q);return me.has(Y)?me.delete(Y):me.add(Y),me})},[]),V=w.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),I=w.useMemo(()=>Hp(f.content),[f.content]);return h.jsxs("div",{className:"topic-page-container",children:[h.jsx("button",{className:"mobile-menu-toggle",onClick:()=>ee(!z),"aria-label":z?"Close navigation menu":"Open navigation menu","aria-expanded":z,children:h.jsx("i",{className:`fas ${z?"fa-times":"fa-bars"}`,"aria-hidden":"true"})}),h.jsxs("aside",{className:`topic-sidebar ${z?"sidebar-open":""}`,"aria-label":"Topic navigation",children:[h.jsxs("div",{className:"sidebar-header",children:[h.jsxs("button",{className:"back-button",onClick:()=>o("/vqm-luma-javascript/"),"aria-label":"Go back to home page",children:[h.jsx("i",{className:"fas fa-arrow-left","aria-hidden":"true"})," Back to Home"]}),h.jsx("h2",{id:"sidebar-title",children:"Fundamentals"}),h.jsxs("div",{className:"progress-indicator",role:"region","aria-label":"Learning progress",children:[h.jsxs("div",{className:"progress-text",children:[F.completed," / ",F.total," completed"]}),h.jsx("div",{className:"progress-bar-container",role:"progressbar","aria-valuenow":F.percentage,"aria-valuemin":"0","aria-valuemax":"100","aria-label":`${F.percentage}% complete`,children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${F.percentage}%`}})}),h.jsxs("div",{className:"progress-percentage",children:[F.percentage,"%"]})]})]}),h.jsx("nav",{className:"topic-nav","aria-labelledby":"sidebar-title",children:h.jsx("ul",{className:"topic-list",role:"tree",children:Gn.fundamentals.map(Y=>h.jsx("li",{className:`topic-list-item-wrapper ${Y.subTopics?"has-sub-topics":""}`,role:"treeitem","aria-expanded":Y.subTopics?k.has(Y.id):void 0,children:Y.subTopics?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:`parent-topic ${k.has(Y.id)?"expanded":""} ${Y.subTopics.some(Q=>Q.id===f.id)?"parent-active":""}`,onClick:()=>Se(Y.id),onKeyDown:Q=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),Se(Y.id))},tabIndex:0,role:"button","aria-expanded":k.has(Y.id),"aria-label":`${Y.title}, ${k.has(Y.id)?"collapse":"expand"} section`,children:[h.jsx("i",{className:`fas ${Y.icon}`,"aria-hidden":"true"}),h.jsx("span",{children:Y.title}),h.jsx("i",{className:"fas fa-chevron-down expand-icon","aria-hidden":"true"})]}),k.has(Y.id)&&h.jsx("ul",{className:"sub-topic-list",role:"group",children:Y.subTopics.map(Q=>h.jsxs("li",{className:`sub-topic ${f.id===Q.id?"active":""}`,role:"treeitem","aria-selected":f.id===Q.id,children:[h.jsxs("div",{className:"topic-item-content",onClick:()=>fe(Q),onKeyDown:me=>{(me.key==="Enter"||me.key===" ")&&(me.preventDefault(),fe(Q))},tabIndex:0,role:"button","aria-label":`View ${Q.title}`,children:[h.jsx("i",{className:`fas ${Q.icon}`,"aria-hidden":"true"}),h.jsx("span",{children:Q.title})]}),h.jsxs("div",{className:"topic-actions",children:[h.jsx("button",{className:"bookmark-button",onClick:me=>{me.stopPropagation(),y(Q.id,{title:Q.title,section:"Fundamentals",parentTitle:Y.title,route:"/vqm-luma-javascript/fundamentals"})},"aria-label":m(Q.id)?`Remove ${Q.title} from bookmarks`:`Add ${Q.title} to bookmarks`,"aria-pressed":m(Q.id),children:h.jsx("i",{className:`${m(Q.id)?"fas":"far"} fa-bookmark`,"aria-hidden":"true"})}),h.jsxs("label",{className:"checkbox-label",htmlFor:`checkbox-${Q.id}`,children:[h.jsx("input",{type:"checkbox",id:`checkbox-${Q.id}`,className:"topic-checkbox",checked:u(Q.id),onChange:me=>{me.stopPropagation(),s(Q.id,me.target.checked)},onClick:me=>me.stopPropagation(),"aria-label":`Mark ${Q.title} as ${u(Q.id)?"incomplete":"complete"}`}),h.jsx("span",{className:"sr-only",children:"Mark as complete"})]})]})]},Q.id))})]}):h.jsxs("div",{className:`topic-list-item ${f.id===Y.id?"active":""}`,"aria-selected":f.id===Y.id,children:[h.jsxs("div",{className:"topic-item-content",onClick:()=>fe(Y),onKeyDown:Q=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),fe(Y))},tabIndex:0,role:"button","aria-label":`View ${Y.title}`,children:[h.jsx("i",{className:`fas ${Y.icon}`,"aria-hidden":"true"}),h.jsx("span",{children:Y.title})]}),h.jsxs("div",{className:"topic-actions",children:[h.jsx("button",{className:"bookmark-button",onClick:Q=>{Q.stopPropagation(),y(Y.id,{title:Y.title,section:"Fundamentals",route:"/vqm-luma-javascript/fundamentals"})},"aria-label":m(Y.id)?`Remove ${Y.title} from bookmarks`:`Add ${Y.title} to bookmarks`,"aria-pressed":m(Y.id),children:h.jsx("i",{className:`${m(Y.id)?"fas":"far"} fa-bookmark`,"aria-hidden":"true"})}),h.jsxs("label",{className:"checkbox-label",htmlFor:`checkbox-${Y.id}`,children:[h.jsx("input",{type:"checkbox",id:`checkbox-${Y.id}`,className:"topic-checkbox",checked:u(Y.id),onChange:Q=>{Q.stopPropagation(),s(Y.id,Q.target.checked)},onClick:Q=>Q.stopPropagation(),"aria-label":`Mark ${Y.title} as ${u(Y.id)?"incomplete":"complete"}`}),h.jsx("span",{className:"sr-only",children:"Mark as complete"})]})]})]})},Y.id))})})]}),h.jsxs("main",{className:"topic-content","aria-live":"polite",children:[h.jsxs("div",{className:"topic-header",children:[Ae&&h.jsxs("nav",{className:"breadcrumb","aria-label":"Breadcrumb",children:[h.jsx("span",{className:"breadcrumb-item",children:Ae.title}),h.jsx("i",{className:"fas fa-chevron-right breadcrumb-separator","aria-hidden":"true"}),h.jsx("span",{className:"breadcrumb-item active","aria-current":"page",children:f.title})]}),h.jsx("h3",{children:f.title}),f.mindMap&&h.jsxs("div",{className:"view-toggle",role:"tablist","aria-label":"Content view options",children:[h.jsxs("button",{onClick:()=>M("normal"),className:C==="normal"?"active":"",role:"tab","aria-selected":C==="normal","aria-controls":"content-panel",children:[h.jsx("i",{className:"fas fa-align-left","aria-hidden":"true"})," Normal"]}),h.jsxs("button",{onClick:()=>M("mindmap"),className:C==="mindmap"?"active":"",role:"tab","aria-selected":C==="mindmap","aria-controls":"content-panel",children:[h.jsx("i",{className:"fas fa-project-diagram","aria-hidden":"true"})," Mind Map"]})]})]}),h.jsx("div",{id:"content-panel",role:"tabpanel",children:P?h.jsx(Yp,{}):C==="mindmap"&&f.mindMap?h.jsx(Gp,{data:f.mindMap}):h.jsxs(h.Fragment,{children:[h.jsx("div",{dangerouslySetInnerHTML:{__html:I},className:"topic-body"}),f.code&&h.jsx(vb,{code:f.code})]})})]}),q&&h.jsx("button",{onClick:V,className:"scroll-to-top-button","aria-label":"Scroll to top of page",children:h.jsx("i",{className:"fas fa-arrow-up","aria-hidden":"true"})})]})}const Eb=({code:o})=>h.jsx("div",{className:"code-block",children:h.jsx("pre",{children:h.jsx("code",{children:o.trim()})})});function Ab(){const o=Kn(),r=za(),{isTopicComplete:u,markTopicComplete:s,getCompletionStats:d}=vr(),{isBookmarked:m,toggleBookmark:y}=br(),b=Yn[0],g=b.subTopics?b.subTopics[0]:b,[f,S]=w.useState(g),[C,M]=w.useState(new Set([b.id])),[k,B]=w.useState(!1),[q,K]=w.useState(!1),[z,ee]=w.useState(!1),P=d(Yn),ie=w.useMemo(()=>Yn.find(V=>V.subTopics?.some(I=>I.id===f.id)),[f.id]);w.useEffect(()=>{if(r.state?.topicId){let V=null,I=null;Yn.forEach(Y=>{if(Y.subTopics){const Q=Y.subTopics.find(me=>me.id===r.state.topicId);Q&&(V=Q,I=Y.id)}else Y.id===r.state.topicId&&(V=Y)}),V&&(S(V),I&&M(Y=>new Set([...Y,I])))}},[r.state]),w.useEffect(()=>{let V;const I=()=>{clearTimeout(V),V=setTimeout(()=>{K(window.scrollY>300)},150)};return window.addEventListener("scroll",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),clearTimeout(V)}},[]);const F=w.useCallback(V=>{ee(!0),S(V),B(!1),window.scrollTo(0,0),setTimeout(()=>ee(!1),150)},[]),Ae=w.useCallback(V=>{M(I=>{const Y=new Set(I);return Y.has(V)?Y.delete(V):Y.add(V),Y})},[]),fe=w.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),Se=w.useMemo(()=>Hp(f.content),[f.content]);return h.jsxs("div",{className:"topic-page-container",children:[h.jsx("button",{className:"mobile-menu-toggle",onClick:()=>B(!k),"aria-label":k?"Close navigation menu":"Open navigation menu","aria-expanded":k,children:h.jsx("i",{className:`fas ${k?"fa-times":"fa-bars"}`,"aria-hidden":"true"})}),h.jsxs("aside",{className:`topic-sidebar ${k?"sidebar-open":""}`,"aria-label":"Topic navigation",children:[h.jsxs("div",{className:"sidebar-header",children:[h.jsxs("button",{className:"back-button",onClick:()=>o("/vqm-luma-javascript/"),"aria-label":"Go back to home page",children:[h.jsx("i",{className:"fas fa-arrow-left","aria-hidden":"true"})," Back to Home"]}),h.jsx("h2",{id:"sidebar-title",children:"Advanced Topics"}),h.jsxs("div",{className:"progress-indicator",role:"region","aria-label":"Learning progress",children:[h.jsxs("div",{className:"progress-text",children:[P.completed," / ",P.total," completed"]}),h.jsx("div",{className:"progress-bar-container",role:"progressbar","aria-valuenow":P.percentage,"aria-valuemin":"0","aria-valuemax":"100","aria-label":`${P.percentage}% complete`,children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${P.percentage}%`}})}),h.jsxs("div",{className:"progress-percentage",children:[P.percentage,"%"]})]})]}),h.jsx("nav",{className:"topic-nav","aria-labelledby":"sidebar-title",children:h.jsx("ul",{className:"topic-list",role:"tree",children:Yn.map(V=>h.jsx("li",{className:`topic-list-item-wrapper ${V.subTopics?"has-sub-topics":""}`,role:"treeitem","aria-expanded":V.subTopics?C.has(V.id):void 0,children:V.subTopics?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:`parent-topic ${C.has(V.id)?"expanded":""} ${V.subTopics.some(I=>I.id===f.id)?"parent-active":""}`,onClick:()=>Ae(V.id),onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),Ae(V.id))},tabIndex:0,role:"button","aria-expanded":C.has(V.id),"aria-label":`${V.title}, ${C.has(V.id)?"collapse":"expand"} section`,children:[h.jsx("i",{className:`fas ${V.icon}`,"aria-hidden":"true"}),h.jsx("span",{children:V.title}),h.jsx("i",{className:"fas fa-chevron-down expand-icon","aria-hidden":"true"})]}),C.has(V.id)&&h.jsx("ul",{className:"sub-topic-list",role:"group",children:V.subTopics.map(I=>h.jsxs("li",{className:`sub-topic ${f.id===I.id?"active":""}`,role:"treeitem","aria-selected":f.id===I.id,children:[h.jsxs("div",{className:"topic-item-content",onClick:()=>F(I),onKeyDown:Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),F(I))},tabIndex:0,role:"button","aria-label":`View ${I.title}`,children:[h.jsx("i",{className:`fas ${I.icon}`,"aria-hidden":"true"}),h.jsx("span",{children:I.title})]}),h.jsxs("div",{className:"topic-actions",children:[h.jsx("button",{className:"bookmark-button",onClick:Y=>{Y.stopPropagation(),y(I.id,{title:I.title,section:"Advanced",parentTitle:V.title,route:"/vqm-luma-javascript/advanced"})},"aria-label":m(I.id)?`Remove ${I.title} from bookmarks`:`Add ${I.title} to bookmarks`,"aria-pressed":m(I.id),children:h.jsx("i",{className:`${m(I.id)?"fas":"far"} fa-bookmark`,"aria-hidden":"true"})}),h.jsxs("label",{className:"checkbox-label",htmlFor:`adv-checkbox-${I.id}`,children:[h.jsx("input",{type:"checkbox",id:`adv-checkbox-${I.id}`,className:"topic-checkbox",checked:u(I.id),onChange:Y=>{Y.stopPropagation(),s(I.id,Y.target.checked)},onClick:Y=>Y.stopPropagation(),"aria-label":`Mark ${I.title} as ${u(I.id)?"incomplete":"complete"}`}),h.jsx("span",{className:"sr-only",children:"Mark as complete"})]})]})]},I.id))})]}):h.jsxs("div",{className:`topic-list-item ${f.id===V.id?"active":""}`,"aria-selected":f.id===V.id,children:[h.jsxs("div",{className:"topic-item-content",onClick:()=>F(V),onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),F(V))},tabIndex:0,role:"button","aria-label":`View ${V.title}`,children:[h.jsx("i",{className:`fas ${V.icon}`,"aria-hidden":"true"}),h.jsx("span",{children:V.title})]}),h.jsxs("div",{className:"topic-actions",children:[h.jsx("button",{className:"bookmark-button",onClick:I=>{I.stopPropagation(),y(V.id,{title:V.title,section:"Advanced",route:"/vqm-luma-javascript/advanced"})},"aria-label":m(V.id)?`Remove ${V.title} from bookmarks`:`Add ${V.title} to bookmarks`,"aria-pressed":m(V.id),children:h.jsx("i",{className:`${m(V.id)?"fas":"far"} fa-bookmark`,"aria-hidden":"true"})}),h.jsxs("label",{className:"checkbox-label",htmlFor:`adv-checkbox-${V.id}`,children:[h.jsx("input",{type:"checkbox",id:`adv-checkbox-${V.id}`,className:"topic-checkbox",checked:u(V.id),onChange:I=>{I.stopPropagation(),s(V.id,I.target.checked)},onClick:I=>I.stopPropagation(),"aria-label":`Mark ${V.title} as ${u(V.id)?"incomplete":"complete"}`}),h.jsx("span",{className:"sr-only",children:"Mark as complete"})]})]})]})},V.id))})})]}),h.jsxs("main",{className:"topic-content","aria-live":"polite",children:[h.jsxs("div",{className:"topic-header",children:[ie&&h.jsxs("nav",{className:"breadcrumb","aria-label":"Breadcrumb",children:[h.jsx("span",{className:"breadcrumb-item",children:ie.title}),h.jsx("i",{className:"fas fa-chevron-right breadcrumb-separator","aria-hidden":"true"}),h.jsx("span",{className:"breadcrumb-item active","aria-current":"page",children:f.title})]}),h.jsx("h3",{children:f.title})]}),z?h.jsx(Yp,{}):h.jsxs(h.Fragment,{children:[h.jsx("div",{dangerouslySetInnerHTML:{__html:Se},className:"topic-body"}),f.code&&h.jsx(Eb,{code:f.code})]})]}),q&&h.jsx("button",{onClick:fe,className:"scroll-to-top-button","aria-label":"Scroll to top of page",children:h.jsx("i",{className:"fas fa-arrow-up","aria-hidden":"true"})})]})}const rp=[{id:"foundational",title:"Section 6.1: Foundational Exercises",description:"Small, targeted coding challenges to reinforce core language features. They provide immediate feedback and build confidence with fundamental syntax and logic.",items:[{id:"ex1",title:"The Fortune Teller",task:`Store a number of children, a partner's name, a location, and a job title in variables. Output a sentence like: "You will be a [job title] in [location], and married to [partner's name] with [number] kids."`,hint1:"You will need four different variables. What are the best names for them?",hint2:"To combine strings and variables, look into template literals (using backticks ``) for an easy way to build the final sentence.",solution:{code:'const numKids = 5;\nconst partnerName = "David Beckham";\nconst location = "Costa Rica";\nconst jobTitle = "web developer";\n\nconst fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numKids} kids.`;\nconsole.log(fortune);',explanation:'This solution uses `const` for variables that do not change. A template literal (``) is used to embed the variables directly into the string, which is cleaner than traditional string concatenation with "+".'}},{id:"ex2",title:"The Age Calculator",task:"Store a birth year and a future year in variables. Calculate the two possible ages for that year and output them.",hint1:"The primary calculation is simply subtracting the birth year from the future year.",hint2:"Why are there two possible ages? Because it depends on whether the person has had their birthday in the future year yet. The second age will be one less than the first.",solution:{code:`const birthYear = 1990;
const futureYear = 2045;

const age1 = futureYear - birthYear;
const age2 = age1 - 1;

console.log(\`You will be either \${age2} or \${age1} in \${futureYear}.\`);`,explanation:"We calculate the maximum possible age by simple subtraction. The other possible age is one less than that, accounting for the time before their birthday in the target year."}},{id:"ex3",title:"The Lifetime Supply Calculator",task:"Store your current age, a maximum age, and an estimated daily consumption of a snack. Calculate the total amount needed for the rest of your life.",hint1:"First, calculate the number of years remaining. Then, how can you convert that to days?",hint2:"Once you have the total number of days remaining, you can find the final answer by multiplying it by the daily consumption amount.",solution:{code:`const currentAge = 30;
const maxAge = 90;
const amountPerDay = 2;

const yearsRemaining = maxAge - currentAge;
const daysRemaining = yearsRemaining * 365;
const totalSupply = daysRemaining * amountPerDay;

console.log(\`You will need \${totalSupply} snacks to last you until the ripe old age of \${maxAge}.\`);`,explanation:"This problem is solved by breaking it down into smaller steps. We first find the number of years left, convert that to days, and then multiply by the daily amount to get the final total."}}]},{id:"interactive",title:"Section 6.2: Building an Interactive Web Application",description:"A guided, medium-scale project that integrates the concepts of DOM manipulation and event handling. A visually rewarding project is ideal for this stage.",items:[{title:"Project: Pixel Art Maker",steps:["HTML and CSS Setup: Create a static HTML file with a container for the art grid and another for a color palette. Style the grid and create CSS classes for different colors.",'Grid Generation (JavaScript): Use nested for loops to dynamically create a grid of div elements (e.g., a 16x16 grid). Append each "pixel" to the main grid container in the DOM.',"Event Handling (JavaScript): Add a single click event listener to the parent grid container (this is called event delegation). Use `event.target` to identify which specific pixel was clicked.","Drawing Logic (JavaScript): Inside the event listener, get the currently selected color from the palette. Then, change the `backgroundColor` style of the clicked pixel.",'Adding Features: Implement a "Clear Grid" button. Add a color picker `<input type="color">` to allow for custom colors.']}]},{id:"advanced",title:"Section 6.3: Advanced Project: A Real-World Application",description:"This capstone project requires you to use advanced concepts, particularly asynchronous JavaScript, to build a functional, data-driven application.",items:[{title:"Project: Weather Dashboard",steps:["API Key Acquisition: Sign up for a free API key from a weather data provider like OpenWeatherMap.",'Interface Design (HTML/CSS): Build a simple UI with a text input for a city name, a "Get Weather" button, and a div to display the results.',"Data Fetching (async/await): Write an `async` function that is triggered by the button click. Inside, construct the API URL and use `fetch()` with `await` to make the network request.","Promise Handling: The `fetch()` call returns a Promise. Use `await` again on the `response.json()` method to parse the JSON data from the response body.","Error Handling: Wrap the `await` calls inside a `try...catch` block to handle network errors or invalid city names gracefully.","Displaying Results (DOM Manipulation): Once the weather data is retrieved, use DOM manipulation to access its properties and display them in the results div."]}]}];function Tb(){const o=Kn(),[r,u]=w.useState(rp[0].id),[s,d]=w.useState({}),m=b=>{u(r===b?null:b)},y=(b,g)=>{d(f=>({...f,[b]:{...f[b],[g]:!f[b]?.[g]}}))};return h.jsxs("div",{className:"exercises-container",children:[h.jsxs("button",{className:"back-button",onClick:()=>o("/vqm-luma-javascript/"),children:[h.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),h.jsxs("div",{className:"exercises-header",children:[h.jsxs("h2",{children:[h.jsx("i",{className:"fas fa-keyboard"})," Coding Exercises"]}),h.jsx("p",{children:"Knowledge becomes skill through application. Solidify your understanding with these hands-on challenges and projects."})]}),h.jsx("div",{className:"accordion",children:rp.map(b=>h.jsxs("div",{className:"accordion-section",children:[h.jsxs("div",{className:"accordion-header",onClick:()=>m(b.id),children:[h.jsx("h3",{children:b.title}),h.jsx("i",{className:`fas fa-chevron-down ${r===b.id?"expanded":""}`})]}),r===b.id&&h.jsxs("div",{className:"accordion-content",children:[h.jsx("p",{className:"section-description",children:b.description}),h.jsx("div",{className:"items-grid",children:b.items.map((g,f)=>h.jsxs("div",{className:"exercise-card",children:[h.jsx("h4",{children:g.title}),g.task&&h.jsx("p",{className:"task-description",children:g.task}),g.steps&&h.jsx("ol",{children:g.steps.map((S,C)=>h.jsx("li",{children:S},C))}),g.solution&&h.jsxs("div",{className:"solution-container",children:[h.jsxs("div",{className:"hint-buttons",children:[h.jsx("button",{onClick:()=>y(g.id,1),className:"hint-toggle-button",children:s[g.id]?.[1]?"Hide Hint 1":"Show Hint 1"}),s[g.id]?.[1]&&h.jsx("button",{onClick:()=>y(g.id,2),className:"hint-toggle-button",children:s[g.id]?.[2]?"Hide Hint 2":"Show Hint 2"})]}),s[g.id]?.[1]&&h.jsx("div",{className:"hint-content",children:h.jsxs("p",{children:[h.jsx("strong",{children:"Hint 1:"})," ",g.hint1]})}),s[g.id]?.[2]&&h.jsx("div",{className:"hint-content",children:h.jsxs("p",{children:[h.jsx("strong",{children:"Hint 2:"})," ",g.hint2]})}),s[g.id]?.[1]&&s[g.id]?.[2]&&h.jsx("button",{onClick:()=>y(g.id,"solution"),className:"solution-toggle-button",children:s[g.id]?.solution?"Hide Solution":"Show Solution"}),s[g.id]?.solution&&h.jsxs("div",{className:"solution-code",children:[h.jsx("p",{className:"solution-explanation",children:g.solution.explanation}),h.jsx("pre",{children:h.jsx("code",{children:g.solution.code})})]})]})]},g.id||f))})]})]},b.id))})]})}const xb=()=>{const{exportData:o,importData:r,resetProgress:u,getLearningStats:s}=vr(),[d,m]=w.useState(null),[y,b]=w.useState(!1),[g,f]=w.useState(!1),S=w.useRef(null),C=s(),M=()=>{b(!0);const K=o();m(K),b(!1),setTimeout(()=>m(null),3e3)},k=()=>{S.current?.click()},B=async K=>{const z=K.target.files?.[0];if(!z)return;b(!0);const ee=await r(z);m(ee),b(!1),S.current&&(S.current.value=""),setTimeout(()=>m(null),4e3),ee.success&&setTimeout(()=>window.location.reload(),1500)},q=()=>{u(),localStorage.removeItem("luma_bookmarks"),f(!1),m({success:!0,message:"All progress has been reset."}),setTimeout(()=>{m(null),window.location.reload()},1500)};return h.jsxs("div",{className:"data-management",children:[h.jsxs("div",{className:"data-management-header",children:[h.jsxs("h3",{children:[h.jsx("i",{className:"fas fa-database","aria-hidden":"true"}),"Data Management"]}),h.jsx("p",{className:"data-management-description",children:"Export your progress to a file for backup, or import from a previous export."})]}),h.jsxs("div",{className:"learning-stats",children:[h.jsxs("div",{className:"stat-item",children:[h.jsx("span",{className:"stat-value",children:C.totalCompleted}),h.jsx("span",{className:"stat-label",children:"Topics Completed"})]}),h.jsxs("div",{className:"stat-item",children:[h.jsx("span",{className:"stat-value",children:C.learningStreak}),h.jsx("span",{className:"stat-label",children:"Day Streak"})]}),C.lastCompletedDate&&h.jsxs("div",{className:"stat-item",children:[h.jsx("span",{className:"stat-value",children:new Date(C.lastCompletedDate).toLocaleDateString()}),h.jsx("span",{className:"stat-label",children:"Last Activity"})]})]}),h.jsxs("div",{className:"data-actions",children:[h.jsxs("button",{className:"data-button export-button",onClick:M,disabled:y,"aria-label":"Export progress and bookmarks to JSON file",children:[h.jsx("i",{className:"fas fa-download","aria-hidden":"true"}),"Export Data"]}),h.jsxs("button",{className:"data-button import-button",onClick:k,disabled:y,"aria-label":"Import progress and bookmarks from JSON file",children:[h.jsx("i",{className:"fas fa-upload","aria-hidden":"true"}),"Import Data"]}),h.jsx("input",{type:"file",ref:S,onChange:B,accept:".json",style:{display:"none"},"aria-hidden":"true"}),h.jsxs("button",{className:"data-button reset-button",onClick:()=>f(!0),disabled:y,"aria-label":"Reset all progress and bookmarks",children:[h.jsx("i",{className:"fas fa-trash-alt","aria-hidden":"true"}),"Reset All"]})]}),g&&h.jsx("div",{className:"confirm-dialog-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:h.jsxs("div",{className:"confirm-dialog",children:[h.jsxs("h4",{id:"confirm-title",children:[h.jsx("i",{className:"fas fa-exclamation-triangle","aria-hidden":"true"}),"Confirm Reset"]}),h.jsx("p",{children:"Are you sure you want to reset all your progress and bookmarks? This action cannot be undone."}),h.jsxs("div",{className:"confirm-actions",children:[h.jsx("button",{className:"confirm-button cancel",onClick:()=>f(!1),children:"Cancel"}),h.jsx("button",{className:"confirm-button danger",onClick:q,children:"Yes, Reset Everything"})]})]})}),d&&h.jsxs("div",{className:`data-message ${d.success?"success":"error"}`,role:"alert","aria-live":"polite",children:[h.jsx("i",{className:`fas ${d.success?"fa-check-circle":"fa-exclamation-circle"}`,"aria-hidden":"true"}),d.message]})]})};function wb(){const o=Kn(),{getBookmarks:r,toggleBookmark:u,getBookmarkCount:s}=br(),m=r().sort((f,S)=>new Date(S.timestamp)-new Date(f.timestamp)),y=m.reduce((f,S)=>(f[S.section]||(f[S.section]=[]),f[S.section].push(S),f),{}),b=f=>{o(f.route,{state:{topicId:f.id}})},g=(f,S)=>{f.stopPropagation(),u(S,{})};return h.jsxs("div",{className:"bookmarks-page",children:[h.jsxs("button",{className:"back-button",onClick:()=>o("/vqm-luma-javascript/"),children:[h.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),h.jsxs("div",{className:"bookmarks-container",children:[h.jsx("header",{className:"bookmarks-header",children:h.jsxs("div",{children:[h.jsxs("h1",{children:[h.jsx("i",{className:"fas fa-bookmark"})," My Bookmarks"]}),h.jsxs("p",{className:"bookmarks-count",children:[s()," bookmark",s()!==1?"s":""," saved"]})]})}),m.length===0?h.jsxs("div",{className:"bookmarks-empty",children:[h.jsx("i",{className:"fas fa-bookmark"}),h.jsx("h2",{children:"No Bookmarks Yet"}),h.jsx("p",{children:"Click the bookmark icon next to any topic to save it here for quick access."}),h.jsx("button",{className:"cta-button",onClick:()=>o("/vqm-luma-javascript/fundamentals"),children:"Browse Fundamentals"})]}):h.jsx("div",{className:"bookmarks-sections",children:Object.entries(y).map(([f,S])=>h.jsxs("div",{className:"bookmark-section",children:[h.jsxs("h2",{className:"section-title",children:[h.jsx("i",{className:`fas ${f==="Fundamentals"?"fa-book":"fa-brain"}`}),f,h.jsx("span",{className:"section-count",children:S.length})]}),h.jsx("div",{className:"bookmark-grid",children:S.map(C=>h.jsxs("div",{className:"bookmark-card",onClick:()=>b(C),children:[h.jsxs("div",{className:"bookmark-card-header",children:[h.jsx("h3",{className:"bookmark-title",children:C.title}),h.jsx("button",{className:"remove-bookmark",onClick:M=>g(M,C.id),"aria-label":"Remove bookmark",children:h.jsx("i",{className:"fas fa-times"})})]}),C.parentTitle&&h.jsxs("div",{className:"bookmark-breadcrumb",children:[C.parentTitle," → ",C.title]}),h.jsxs("div",{className:"bookmark-footer",children:[h.jsx("span",{className:"bookmark-section-badge",children:f}),h.jsx("span",{className:"bookmark-date",children:new Date(C.timestamp).toLocaleDateString()})]})]},C.id))})]},f))}),h.jsx(xb,{})]})]})}function Ua(o){return Array.isArray?Array.isArray(o):Vp(o)==="[object Array]"}function Cb(o){if(typeof o=="string")return o;let r=o+"";return r=="0"&&1/o==-1/0?"-0":r}function Nb(o){return o==null?"":Cb(o)}function sa(o){return typeof o=="string"}function qp(o){return typeof o=="number"}function Rb(o){return o===!0||o===!1||Mb(o)&&Vp(o)=="[object Boolean]"}function Kp(o){return typeof o=="object"}function Mb(o){return Kp(o)&&o!==null}function jt(o){return o!=null}function zc(o){return!o.trim().length}function Vp(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(o)}const Ob="Incorrect 'index' type",Db=o=>`Invalid value for key ${o}`,kb=o=>`Pattern length exceeds max of ${o}.`,_b=o=>`Missing ${o} property in key`,jb=o=>`Property 'weight' in key '${o}' must be a positive integer`,sp=Object.prototype.hasOwnProperty;class Lb{constructor(r){this._keys=[],this._keyMap={};let u=0;r.forEach(s=>{let d=Xp(s);this._keys.push(d),this._keyMap[d.id]=d,u+=d.weight}),this._keys.forEach(s=>{s.weight/=u})}get(r){return this._keyMap[r]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Xp(o){let r=null,u=null,s=null,d=1,m=null;if(sa(o)||Ua(o))s=o,r=cp(o),u=Xc(o);else{if(!sp.call(o,"name"))throw new Error(_b("name"));const y=o.name;if(s=y,sp.call(o,"weight")&&(d=o.weight,d<=0))throw new Error(jb(y));r=cp(y),u=Xc(y),m=o.getFn}return{path:r,id:u,weight:d,src:s,getFn:m}}function cp(o){return Ua(o)?o:o.split(".")}function Xc(o){return Ua(o)?o.join("."):o}function Ub(o,r){let u=[],s=!1;const d=(m,y,b)=>{if(jt(m))if(!y[b])u.push(m);else{let g=y[b];const f=m[g];if(!jt(f))return;if(b===y.length-1&&(sa(f)||qp(f)||Rb(f)))u.push(Nb(f));else if(Ua(f)){s=!0;for(let S=0,C=f.length;S<C;S+=1)d(f[S],y,b+1)}else y.length&&d(f,y,b+1)}};return d(o,sa(r)?r.split("."):r,0),s?u:u[0]}const Bb={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},zb={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(o,r)=>o.score===r.score?o.idx<r.idx?-1:1:o.score<r.score?-1:1},Hb={location:0,threshold:.6,distance:100},Yb={useExtendedSearch:!1,getFn:Ub,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={...zb,...Bb,...Hb,...Yb};const Gb=/[^ ]+/g;function qb(o=1,r=3){const u=new Map,s=Math.pow(10,r);return{get(d){const m=d.match(Gb).length;if(u.has(m))return u.get(m);const y=1/Math.pow(m,.5*o),b=parseFloat(Math.round(y*s)/s);return u.set(m,b),b},clear(){u.clear()}}}class nu{constructor({getFn:r=de.getFn,fieldNormWeight:u=de.fieldNormWeight}={}){this.norm=qb(u,3),this.getFn=r,this.isCreated=!1,this.setIndexRecords()}setSources(r=[]){this.docs=r}setIndexRecords(r=[]){this.records=r}setKeys(r=[]){this.keys=r,this._keysMap={},r.forEach((u,s)=>{this._keysMap[u.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,sa(this.docs[0])?this.docs.forEach((r,u)=>{this._addString(r,u)}):this.docs.forEach((r,u)=>{this._addObject(r,u)}),this.norm.clear())}add(r){const u=this.size();sa(r)?this._addString(r,u):this._addObject(r,u)}removeAt(r){this.records.splice(r,1);for(let u=r,s=this.size();u<s;u+=1)this.records[u].i-=1}getValueForItemAtKeyId(r,u){return r[this._keysMap[u]]}size(){return this.records.length}_addString(r,u){if(!jt(r)||zc(r))return;let s={v:r,i:u,n:this.norm.get(r)};this.records.push(s)}_addObject(r,u){let s={i:u,$:{}};this.keys.forEach((d,m)=>{let y=d.getFn?d.getFn(r):this.getFn(r,d.path);if(jt(y)){if(Ua(y)){let b=[];const g=[{nestedArrIndex:-1,value:y}];for(;g.length;){const{nestedArrIndex:f,value:S}=g.pop();if(jt(S))if(sa(S)&&!zc(S)){let C={v:S,i:f,n:this.norm.get(S)};b.push(C)}else Ua(S)&&S.forEach((C,M)=>{g.push({nestedArrIndex:M,value:C})})}s.$[m]=b}else if(sa(y)&&!zc(y)){let b={v:y,n:this.norm.get(y)};s.$[m]=b}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function Qp(o,r,{getFn:u=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){const d=new nu({getFn:u,fieldNormWeight:s});return d.setKeys(o.map(Xp)),d.setSources(r),d.create(),d}function Kb(o,{getFn:r=de.getFn,fieldNormWeight:u=de.fieldNormWeight}={}){const{keys:s,records:d}=o,m=new nu({getFn:r,fieldNormWeight:u});return m.setKeys(s),m.setIndexRecords(d),m}function cr(o,{errors:r=0,currentLocation:u=0,expectedLocation:s=0,distance:d=de.distance,ignoreLocation:m=de.ignoreLocation}={}){const y=r/o.length;if(m)return y;const b=Math.abs(s-u);return d?y+b/d:b?1:y}function Vb(o=[],r=de.minMatchCharLength){let u=[],s=-1,d=-1,m=0;for(let y=o.length;m<y;m+=1){let b=o[m];b&&s===-1?s=m:!b&&s!==-1&&(d=m-1,d-s+1>=r&&u.push([s,d]),s=-1)}return o[m-1]&&m-s>=r&&u.push([s,m-1]),u}const qn=32;function Xb(o,r,u,{location:s=de.location,distance:d=de.distance,threshold:m=de.threshold,findAllMatches:y=de.findAllMatches,minMatchCharLength:b=de.minMatchCharLength,includeMatches:g=de.includeMatches,ignoreLocation:f=de.ignoreLocation}={}){if(r.length>qn)throw new Error(kb(qn));const S=r.length,C=o.length,M=Math.max(0,Math.min(s,C));let k=m,B=M;const q=b>1||g,K=q?Array(C):[];let z;for(;(z=o.indexOf(r,B))>-1;){let fe=cr(r,{currentLocation:z,expectedLocation:M,distance:d,ignoreLocation:f});if(k=Math.min(fe,k),B=z+S,q){let Se=0;for(;Se<S;)K[z+Se]=1,Se+=1}}B=-1;let ee=[],P=1,ie=S+C;const F=1<<S-1;for(let fe=0;fe<S;fe+=1){let Se=0,V=ie;for(;Se<V;)cr(r,{errors:fe,currentLocation:M+V,expectedLocation:M,distance:d,ignoreLocation:f})<=k?Se=V:ie=V,V=Math.floor((ie-Se)/2+Se);ie=V;let I=Math.max(1,M-V+1),Y=y?C:Math.min(M+V,C)+S,Q=Array(Y+2);Q[Y+1]=(1<<fe)-1;for(let je=Y;je>=I;je-=1){let Ue=je-1,_=u[o.charAt(Ue)];if(q&&(K[Ue]=+!!_),Q[je]=(Q[je+1]<<1|1)&_,fe&&(Q[je]|=(ee[je+1]|ee[je])<<1|1|ee[je+1]),Q[je]&F&&(P=cr(r,{errors:fe,currentLocation:Ue,expectedLocation:M,distance:d,ignoreLocation:f}),P<=k)){if(k=P,B=Ue,B<=M)break;I=Math.max(1,2*M-B)}}if(cr(r,{errors:fe+1,currentLocation:M,expectedLocation:M,distance:d,ignoreLocation:f})>k)break;ee=Q}const Ae={isMatch:B>=0,score:Math.max(.001,P)};if(q){const fe=Vb(K,b);fe.length?g&&(Ae.indices=fe):Ae.isMatch=!1}return Ae}function Qb(o){let r={};for(let u=0,s=o.length;u<s;u+=1){const d=o.charAt(u);r[d]=(r[d]||0)|1<<s-u-1}return r}const pr=String.prototype.normalize?o=>o.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):o=>o;class Jp{constructor(r,{location:u=de.location,threshold:s=de.threshold,distance:d=de.distance,includeMatches:m=de.includeMatches,findAllMatches:y=de.findAllMatches,minMatchCharLength:b=de.minMatchCharLength,isCaseSensitive:g=de.isCaseSensitive,ignoreDiacritics:f=de.ignoreDiacritics,ignoreLocation:S=de.ignoreLocation}={}){if(this.options={location:u,threshold:s,distance:d,includeMatches:m,findAllMatches:y,minMatchCharLength:b,isCaseSensitive:g,ignoreDiacritics:f,ignoreLocation:S},r=g?r:r.toLowerCase(),r=f?pr(r):r,this.pattern=r,this.chunks=[],!this.pattern.length)return;const C=(k,B)=>{this.chunks.push({pattern:k,alphabet:Qb(k),startIndex:B})},M=this.pattern.length;if(M>qn){let k=0;const B=M%qn,q=M-B;for(;k<q;)C(this.pattern.substr(k,qn),k),k+=qn;if(B){const K=M-qn;C(this.pattern.substr(K),K)}}else C(this.pattern,0)}searchIn(r){const{isCaseSensitive:u,ignoreDiacritics:s,includeMatches:d}=this.options;if(r=u?r:r.toLowerCase(),r=s?pr(r):r,this.pattern===r){let q={isMatch:!0,score:0};return d&&(q.indices=[[0,r.length-1]]),q}const{location:m,distance:y,threshold:b,findAllMatches:g,minMatchCharLength:f,ignoreLocation:S}=this.options;let C=[],M=0,k=!1;this.chunks.forEach(({pattern:q,alphabet:K,startIndex:z})=>{const{isMatch:ee,score:P,indices:ie}=Xb(r,q,K,{location:m+z,distance:y,threshold:b,findAllMatches:g,minMatchCharLength:f,includeMatches:d,ignoreLocation:S});ee&&(k=!0),M+=P,ee&&ie&&(C=[...C,...ie])});let B={isMatch:k,score:k?M/this.chunks.length:1};return k&&d&&(B.indices=C),B}}class hn{constructor(r){this.pattern=r}static isMultiMatch(r){return up(r,this.multiRegex)}static isSingleMatch(r){return up(r,this.singleRegex)}search(){}}function up(o,r){const u=o.match(r);return u?u[1]:null}class Jb extends hn{constructor(r){super(r)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(r){const u=r===this.pattern;return{isMatch:u,score:u?0:1,indices:[0,this.pattern.length-1]}}}class Ib extends hn{constructor(r){super(r)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(r){const s=r.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,r.length-1]}}}class Zb extends hn{constructor(r){super(r)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(r){const u=r.startsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[0,this.pattern.length-1]}}}class Fb extends hn{constructor(r){super(r)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(r){const u=!r.startsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[0,r.length-1]}}}class $b extends hn{constructor(r){super(r)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(r){const u=r.endsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[r.length-this.pattern.length,r.length-1]}}}class Pb extends hn{constructor(r){super(r)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(r){const u=!r.endsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[0,r.length-1]}}}class Ip extends hn{constructor(r,{location:u=de.location,threshold:s=de.threshold,distance:d=de.distance,includeMatches:m=de.includeMatches,findAllMatches:y=de.findAllMatches,minMatchCharLength:b=de.minMatchCharLength,isCaseSensitive:g=de.isCaseSensitive,ignoreDiacritics:f=de.ignoreDiacritics,ignoreLocation:S=de.ignoreLocation}={}){super(r),this._bitapSearch=new Jp(r,{location:u,threshold:s,distance:d,includeMatches:m,findAllMatches:y,minMatchCharLength:b,isCaseSensitive:g,ignoreDiacritics:f,ignoreLocation:S})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(r){return this._bitapSearch.searchIn(r)}}class Zp extends hn{constructor(r){super(r)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(r){let u=0,s;const d=[],m=this.pattern.length;for(;(s=r.indexOf(this.pattern,u))>-1;)u=s+m,d.push([s,u-1]);const y=!!d.length;return{isMatch:y,score:y?0:1,indices:d}}}const Qc=[Jb,Zp,Zb,Fb,Pb,$b,Ib,Ip],dp=Qc.length,Wb=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,e0="|";function t0(o,r={}){return o.split(e0).map(u=>{let s=u.trim().split(Wb).filter(m=>m&&!!m.trim()),d=[];for(let m=0,y=s.length;m<y;m+=1){const b=s[m];let g=!1,f=-1;for(;!g&&++f<dp;){const S=Qc[f];let C=S.isMultiMatch(b);C&&(d.push(new S(C,r)),g=!0)}if(!g)for(f=-1;++f<dp;){const S=Qc[f];let C=S.isSingleMatch(b);if(C){d.push(new S(C,r));break}}}return d})}const a0=new Set([Ip.type,Zp.type]);class n0{constructor(r,{isCaseSensitive:u=de.isCaseSensitive,ignoreDiacritics:s=de.ignoreDiacritics,includeMatches:d=de.includeMatches,minMatchCharLength:m=de.minMatchCharLength,ignoreLocation:y=de.ignoreLocation,findAllMatches:b=de.findAllMatches,location:g=de.location,threshold:f=de.threshold,distance:S=de.distance}={}){this.query=null,this.options={isCaseSensitive:u,ignoreDiacritics:s,includeMatches:d,minMatchCharLength:m,findAllMatches:b,ignoreLocation:y,location:g,threshold:f,distance:S},r=u?r:r.toLowerCase(),r=s?pr(r):r,this.pattern=r,this.query=t0(this.pattern,this.options)}static condition(r,u){return u.useExtendedSearch}searchIn(r){const u=this.query;if(!u)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:d,ignoreDiacritics:m}=this.options;r=d?r:r.toLowerCase(),r=m?pr(r):r;let y=0,b=[],g=0;for(let f=0,S=u.length;f<S;f+=1){const C=u[f];b.length=0,y=0;for(let M=0,k=C.length;M<k;M+=1){const B=C[M],{isMatch:q,indices:K,score:z}=B.search(r);if(q){if(y+=1,g+=z,s){const ee=B.constructor.type;a0.has(ee)?b=[...b,...K]:b.push(K)}}else{g=0,y=0,b.length=0;break}}if(y){let M={isMatch:!0,score:g/y};return s&&(M.indices=b),M}}return{isMatch:!1,score:1}}}const Jc=[];function l0(...o){Jc.push(...o)}function Ic(o,r){for(let u=0,s=Jc.length;u<s;u+=1){let d=Jc[u];if(d.condition(o,r))return new d(o,r)}return new Jp(o,r)}const mr={AND:"$and",OR:"$or"},Zc={PATH:"$path",PATTERN:"$val"},Fc=o=>!!(o[mr.AND]||o[mr.OR]),i0=o=>!!o[Zc.PATH],o0=o=>!Ua(o)&&Kp(o)&&!Fc(o),fp=o=>({[mr.AND]:Object.keys(o).map(r=>({[r]:o[r]}))});function Fp(o,r,{auto:u=!0}={}){const s=d=>{let m=Object.keys(d);const y=i0(d);if(!y&&m.length>1&&!Fc(d))return s(fp(d));if(o0(d)){const g=y?d[Zc.PATH]:m[0],f=y?d[Zc.PATTERN]:d[g];if(!sa(f))throw new Error(Db(g));const S={keyId:Xc(g),pattern:f};return u&&(S.searcher=Ic(f,r)),S}let b={children:[],operator:m[0]};return m.forEach(g=>{const f=d[g];Ua(f)&&f.forEach(S=>{b.children.push(s(S))})}),b};return Fc(o)||(o=fp(o)),s(o)}function r0(o,{ignoreFieldNorm:r=de.ignoreFieldNorm}){o.forEach(u=>{let s=1;u.matches.forEach(({key:d,norm:m,score:y})=>{const b=d?d.weight:null;s*=Math.pow(y===0&&b?Number.EPSILON:y,(b||1)*(r?1:m))}),u.score=s})}function s0(o,r){const u=o.matches;r.matches=[],jt(u)&&u.forEach(s=>{if(!jt(s.indices)||!s.indices.length)return;const{indices:d,value:m}=s;let y={indices:d,value:m};s.key&&(y.key=s.key.src),s.idx>-1&&(y.refIndex=s.idx),r.matches.push(y)})}function c0(o,r){r.score=o.score}function u0(o,r,{includeMatches:u=de.includeMatches,includeScore:s=de.includeScore}={}){const d=[];return u&&d.push(s0),s&&d.push(c0),o.map(m=>{const{idx:y}=m,b={item:r[y],refIndex:y};return d.length&&d.forEach(g=>{g(m,b)}),b})}class Ml{constructor(r,u={},s){this.options={...de,...u},this.options.useExtendedSearch,this._keyStore=new Lb(this.options.keys),this.setCollection(r,s)}setCollection(r,u){if(this._docs=r,u&&!(u instanceof nu))throw new Error(Ob);this._myIndex=u||Qp(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(r){jt(r)&&(this._docs.push(r),this._myIndex.add(r))}remove(r=()=>!1){const u=[];for(let s=0,d=this._docs.length;s<d;s+=1){const m=this._docs[s];r(m,s)&&(this.removeAt(s),s-=1,d-=1,u.push(m))}return u}removeAt(r){this._docs.splice(r,1),this._myIndex.removeAt(r)}getIndex(){return this._myIndex}search(r,{limit:u=-1}={}){const{includeMatches:s,includeScore:d,shouldSort:m,sortFn:y,ignoreFieldNorm:b}=this.options;let g=sa(r)?sa(this._docs[0])?this._searchStringList(r):this._searchObjectList(r):this._searchLogical(r);return r0(g,{ignoreFieldNorm:b}),m&&g.sort(y),qp(u)&&u>-1&&(g=g.slice(0,u)),u0(g,this._docs,{includeMatches:s,includeScore:d})}_searchStringList(r){const u=Ic(r,this.options),{records:s}=this._myIndex,d=[];return s.forEach(({v:m,i:y,n:b})=>{if(!jt(m))return;const{isMatch:g,score:f,indices:S}=u.searchIn(m);g&&d.push({item:m,idx:y,matches:[{score:f,value:m,norm:b,indices:S}]})}),d}_searchLogical(r){const u=Fp(r,this.options),s=(b,g,f)=>{if(!b.children){const{keyId:C,searcher:M}=b,k=this._findMatches({key:this._keyStore.get(C),value:this._myIndex.getValueForItemAtKeyId(g,C),searcher:M});return k&&k.length?[{idx:f,item:g,matches:k}]:[]}const S=[];for(let C=0,M=b.children.length;C<M;C+=1){const k=b.children[C],B=s(k,g,f);if(B.length)S.push(...B);else if(b.operator===mr.AND)return[]}return S},d=this._myIndex.records,m={},y=[];return d.forEach(({$:b,i:g})=>{if(jt(b)){let f=s(u,b,g);f.length&&(m[g]||(m[g]={idx:g,item:b,matches:[]},y.push(m[g])),f.forEach(({matches:S})=>{m[g].matches.push(...S)}))}}),y}_searchObjectList(r){const u=Ic(r,this.options),{keys:s,records:d}=this._myIndex,m=[];return d.forEach(({$:y,i:b})=>{if(!jt(y))return;let g=[];s.forEach((f,S)=>{g.push(...this._findMatches({key:f,value:y[S],searcher:u}))}),g.length&&m.push({idx:b,item:y,matches:g})}),m}_findMatches({key:r,value:u,searcher:s}){if(!jt(u))return[];let d=[];if(Ua(u))u.forEach(({v:m,i:y,n:b})=>{if(!jt(m))return;const{isMatch:g,score:f,indices:S}=s.searchIn(m);g&&d.push({score:f,key:r,value:m,idx:y,norm:b,indices:S})});else{const{v:m,n:y}=u,{isMatch:b,score:g,indices:f}=s.searchIn(m);b&&d.push({score:g,key:r,value:m,norm:y,indices:f})}return d}}Ml.version="7.1.0";Ml.createIndex=Qp;Ml.parseIndex=Kb;Ml.config=de;Ml.parseQuery=Fp;l0(n0);let Hc=null;const d0=()=>{if(Hc)return Hc;const o=[];return Gn.fundamentals.forEach(r=>{r.subTopics?r.subTopics.forEach(u=>{o.push({id:u.id,title:u.title,content:sr(u.content||""),code:u.code||"",section:"Fundamentals",parentTitle:r.title,route:"/vqm-luma-javascript/fundamentals"})}):o.push({id:r.id,title:r.title,content:sr(r.content||""),code:r.code||"",section:"Fundamentals",route:"/vqm-luma-javascript/fundamentals"})}),Yn.forEach(r=>{r.subTopics?r.subTopics.forEach(u=>{o.push({id:u.id,title:u.title,content:sr(u.content||""),code:u.code||"",section:"Advanced",parentTitle:r.title,route:"/vqm-luma-javascript/advanced"})}):o.push({id:r.id,title:r.title,content:sr(r.content||""),code:r.code||"",section:"Advanced",route:"/vqm-luma-javascript/advanced"})}),Hc=o,o},f0=()=>{const[o,r]=w.useState(!1),[u,s]=w.useState(""),[d,m]=w.useState([]),y=Kn(),b=w.useRef(null),g=w.useRef(null),f=w.useRef(null);w.useEffect(()=>{const k=d0();f.current=new Ml(k,{keys:["title","content","code"],threshold:.3,includeScore:!0,minMatchCharLength:2})},[]),w.useEffect(()=>{const k=B=>{(B.ctrlKey||B.metaKey)&&B.key==="k"&&(B.preventDefault(),r(!0)),B.key==="Escape"&&(r(!1),s(""))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]),w.useEffect(()=>{o&&b.current&&b.current.focus()},[o]),w.useEffect(()=>{const k=B=>{g.current&&!g.current.contains(B.target)&&r(!1)};if(o)return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[o]);const S=k=>{if(s(k),k.trim().length>=2&&f.current){const B=f.current.search(k);m(B.slice(0,8))}else m([])},C=k=>{y(k.route,{state:{topicId:k.id}}),r(!1),s(""),m([])},M=(k,B)=>B?k.split(new RegExp(`(${B})`,"gi")).map((K,z)=>K.toLowerCase()===B.toLowerCase()?h.jsx("mark",{children:K},z):K):k;return h.jsxs(h.Fragment,{children:[h.jsxs("button",{onClick:()=>r(!0),className:"search-trigger","aria-label":"Search",children:[h.jsx("i",{className:"fas fa-search"}),h.jsx("span",{className:"search-hint",children:"Search (Ctrl+K)"})]}),o&&h.jsx("div",{className:"search-overlay",children:h.jsxs("div",{className:"search-modal",ref:g,children:[h.jsxs("div",{className:"search-input-container",children:[h.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),h.jsx("label",{htmlFor:"search-input",className:"sr-only",children:"Search topics, content, and code"}),h.jsx("input",{ref:b,id:"search-input",type:"text",className:"search-input",placeholder:"Search topics, content, and code...",value:u,onChange:k=>S(k.target.value),"aria-label":"Search topics, content, and code","aria-describedby":"search-help",autoComplete:"off"}),h.jsx("button",{onClick:()=>r(!1),className:"search-close","aria-label":"Close search",children:h.jsx("i",{className:"fas fa-times","aria-hidden":"true"})})]}),d.length>0&&h.jsx("div",{className:"search-results",children:d.map(({item:k})=>h.jsxs("div",{className:"search-result-item",onClick:()=>C(k),children:[h.jsxs("div",{className:"result-header",children:[h.jsx("span",{className:"result-title",children:M(k.title,u)}),h.jsx("span",{className:"result-section",children:k.section})]}),k.parentTitle&&h.jsxs("div",{className:"result-breadcrumb",children:[k.parentTitle," → ",k.title]}),h.jsxs("div",{className:"result-preview",children:[k.content.substring(0,120),"..."]})]},k.id))}),u.trim().length>=2&&d.length===0&&h.jsxs("div",{className:"search-no-results",children:[h.jsx("i",{className:"fas fa-search"}),h.jsxs("p",{children:['No results found for "',u,'"']})]}),u.trim().length<2&&h.jsxs("div",{className:"search-help",id:"search-help",children:[h.jsxs("div",{className:"search-help-item",children:[h.jsx("kbd",{children:"Ctrl"})," + ",h.jsx("kbd",{children:"K"})," to open search"]}),h.jsxs("div",{className:"search-help-item",children:[h.jsx("kbd",{children:"Esc"})," to close"]})]})]})})]})};function h0(){const[o,r]=w.useState("light");w.useEffect(()=>{document.body.setAttribute("data-theme",o)},[o]);const u=()=>{r(s=>s==="dark"?"light":"dark")};return h.jsxs("div",{className:"luma-app",children:[h.jsx(f0,{}),h.jsxs(lv,{children:[h.jsx(Cl,{path:"/vqm-luma-javascript/",element:h.jsx(Fv,{toggleTheme:u,theme:o})}),h.jsx(Cl,{path:"/vqm-luma-javascript/fundamentals",element:h.jsx(Sb,{theme:o})}),h.jsx(Cl,{path:"/vqm-luma-javascript/advanced",element:h.jsx(Ab,{theme:o})}),h.jsx(Cl,{path:"/vqm-luma-javascript/exercises",element:h.jsx(Tb,{theme:o})}),h.jsx(Cl,{path:"/vqm-luma-javascript/bookmarks",element:h.jsx(wb,{theme:o})})]})]})}py.createRoot(document.getElementById("root")).render(h.jsx(w.StrictMode,{children:h.jsx(Nv,{children:h.jsx(Hv,{children:h.jsx(qv,{children:h.jsx(h0,{})})})})}));

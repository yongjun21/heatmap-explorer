(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vueSelect = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e), o.loaded=!0, o.exports}var n={};return e.m=t, e.c=n, e.p="/", e(0)}([function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}), e.mixins=e.VueSelect=void 0;var o=n(83),i=r(o),a=n(42),s=r(a);e.default=i.default, e.VueSelect=i.default, e.mixins=s.default;},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)};},function(t,e,n){var r=n(10),o=n(33),i=n(25),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t), e=i(e,!0), r(n), o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value), t};},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n);},function(t,e,n){var r=n(4),o=n(14);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n, t};},function(t,e,n){var r=n(59),o=n(16);t.exports=function(t){return r(o(t))};},function(t,e,n){var r=n(23)("wks"),o=n(15),i=n(1).Symbol,a="function"==typeof i,s=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};s.store=r;},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}};},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t};},function(t,e,n){var r=n(1),o=n(5),i=n(56),a=n(6),s="prototype",u=function(t,e,n){var l,c,f,p=t&u.F,d=t&u.G,h=t&u.S,b=t&u.P,v=t&u.B,g=t&u.W,y=d?o:o[e]||(o[e]={}),m=y[s],x=d?r:h?r[e]:(r[e]||{})[s];d&&(n=e);for(l in n)c=!p&&x&&void 0!==x[l], c&&l in y||(f=c?x[l]:n[l], y[l]=d&&"function"!=typeof x[l]?n[l]:v&&c?i(f,r):g&&x[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s], e}(f):b&&"function"==typeof f?i(Function.call,f):f, b&&((y.virtual||(y.virtual={}))[l]=f, t&u.R&&m&&!m[l]&&a(m,l,f)));};u.F=1, u.G=2, u.S=4, u.P=8, u.B=16, u.W=32, u.U=64, u.R=128, t.exports=u;},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t};},function(t,e,n){var r=n(38),o=n(17);t.exports=Object.keys||function(t){return r(t,o)};},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))};},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},function(t,e){t.exports={};},function(t,e){t.exports=!0;},function(t,e){e.f={}.propertyIsEnumerable;},function(t,e,n){var r=n(4).f,o=n(3),i=n(8)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e});};},function(t,e,n){var r=n(23)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))};},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})};},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)};},function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},function(t,e,n){var r=n(1),o=n(5),i=n(19),a=n(27),s=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)});};},function(t,e,n){e.f=n(8);},function(t,e){t.exports={props:{loading:{type:Boolean,default:!1},onSearch:{type:Function,default:function(t,e){}}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.search.length>0&&(this.onSearch(this.search,this.toggleLoading), this.$emit("search",this.search,this.toggleLoading));},loading:function(t){this.mutableLoading=t;}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null==t?this.mutableLoading=!this.mutableLoading:this.mutableLoading=t}}};},function(t,e){t.exports={watch:{typeAheadPointer:function(){this.maybeAdjustScroll();}},methods:{maybeAdjustScroll:function(){var t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom();return t<=this.viewport().top?this.scrollTo(t):e>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function t(){var t=0;if(this.$refs.dropdownMenu)for(var e=0;e<this.typeAheadPointer;e++)t+=this.$refs.dropdownMenu.children[e].offsetHeight;return t},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var t=!!this.$refs.dropdownMenu&&this.$refs.dropdownMenu.children[this.typeAheadPointer];return t?t.offsetHeight:0},viewport:function(){return{top:this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop:0,bottom:this.$refs.dropdownMenu?this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop:0}},scrollTo:function(t){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop=t:null}}};},function(t,e){t.exports={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){this.typeAheadPointer=0;}},methods:{typeAheadUp:function(){this.typeAheadPointer>0&&(this.typeAheadPointer--, this.maybeAdjustScroll&&this.maybeAdjustScroll());},typeAheadDown:function(){this.typeAheadPointer<this.filteredOptions.length-1&&(this.typeAheadPointer++, this.maybeAdjustScroll&&this.maybeAdjustScroll());},typeAheadSelect:function(){this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search), this.clearSearchOnSelect&&(this.search="");}}};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},function(t,e,n){var r=n(12),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}};},function(t,e,n){t.exports=!n(2)&&!n(9)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a});},function(t,e,n){var r=n(19),o=n(11),i=n(39),a=n(6),s=n(3),u=n(18),l=n(61),c=n(21),f=n(67),p=n(8)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",b="keys",v="values",g=function(){return this};t.exports=function(t,e,n,y,m,x,w){l(n,e,y);var S,O,_,j=function(t){if(!d&&t in M)return M[t];switch(t){case b:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",k=m==v,A=!1,M=t.prototype,L=M[p]||M[h]||m&&M[m],C=L||j(m),T=m?k?j("entries"):C:void 0,E="Array"==e?M.entries||L:L;if(E&&(_=f(E.call(new t)), _!==Object.prototype&&_.next&&(c(_,P,!0), r||s(_,p)||a(_,p,g))), k&&L&&L.name!==v&&(A=!0, C=function(){return L.call(this)}), r&&!w||!d&&!A&&M[p]||a(M,p,C), u[e]=C, u[P]=g, m)if(S={values:k?C:j(v),keys:x?C:j(b),entries:T}, w)for(O in S)O in M||i(M,O,S[O]);else o(o.P+o.F*(d||A),e,S);return S};},function(t,e,n){var r=n(10),o=n(64),i=n(17),a=n(22)("IE_PROTO"),s=function(){},u="prototype",l=function(){var t,e=n(32)("iframe"),r=i.length,o="<",a=">";for(e.style.display="none", n(58).appendChild(e), e.src="javascript:", t=e.contentWindow.document, t.open(), t.write(o+"script"+a+"document.F=Object"+o+"/script"+a), t.close(), l=t.F;r--;)delete l[u][i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[u]=r(t), n=new s, s[u]=null, n[a]=t):n=l(), void 0===e?n:o(n,e)};},function(t,e,n){var r=n(38),o=n(17).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)};},function(t,e){e.f=Object.getOwnPropertySymbols;},function(t,e,n){var r=n(3),o=n(7),i=n(55)(!1),a=n(22)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(l,n)||l.push(n));return l};},function(t,e,n){t.exports=n(6);},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))};},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(44),i=r(o),a=n(47),s=r(a),u=n(48),l=r(u),c=n(29),f=r(c),p=n(30),d=r(p),h=n(28),b=r(h);e.default={mixins:[f.default,d.default,b.default],props:{value:{default:null},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},maxHeight:{type:String,default:"400px"},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},getOptionLabel:{type:Function,default:function(t){return"object"===("undefined"==typeof t?"undefined":(l.default)(t))&&this.label&&t[this.label]?t[this.label]:t}},onChange:{type:Function,default:function(t){this.$emit("input",t);}},taggable:{type:Boolean,default:!1},pushTags:{type:Boolean,default:!1},createOption:{type:Function,default:function(t){return"object"===(l.default)(this.mutableOptions[0])&&(t=(s.default)({},this.label,t)), this.$emit("option:created",t), t}},resetOnOptionsChange:{type:Boolean,default:!1},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"}},data:function(){return{search:"",open:!1,mutableValue:null,mutableOptions:[]}},watch:{value:function(t){this.mutableValue=t;},mutableValue:function(t,e){this.multiple?this.onChange?this.onChange(t):null:this.onChange&&t!==e?this.onChange(t):null;},options:function(t){this.mutableOptions=t;},mutableOptions:function(){!this.taggable&&this.resetOnOptionsChange&&(this.mutableValue=this.multiple?[]:null);},multiple:function(t){this.mutableValue=t?[]:null;}},created:function(){this.mutableValue=this.value, this.mutableOptions=this.options.slice(0), this.mutableLoading=this.loading, this.$on("option:created",this.maybePushTag);},methods:{select:function(t){this.isOptionSelected(t)?this.deselect(t):(this.taggable&&!this.optionExists(t)&&(t=this.createOption(t)), this.multiple&&!this.mutableValue?this.mutableValue=[t]:this.multiple?this.mutableValue.push(t):this.mutableValue=t), this.onAfterSelect(t);},deselect:function(t){var e=this;if(this.multiple){var n=-1;this.mutableValue.forEach(function(r){(r===t||"object"===("undefined"==typeof r?"undefined":(l.default)(r))&&r[e.label]===t[e.label])&&(n=r);});var r=this.mutableValue.indexOf(n);this.mutableValue.splice(r,1);}else this.mutableValue=null;},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open, this.$refs.search.blur()), this.clearSearchOnSelect&&(this.search="");},toggleDropdown:function(t){t.target!==this.$refs.openIndicator&&t.target!==this.$refs.search&&t.target!==this.$refs.toggle&&t.target!==this.$el||(this.open?this.$refs.search.blur():this.disabled||(this.open=!0, this.$refs.search.focus()));},isOptionSelected:function(t){var e=this;if(this.multiple&&this.mutableValue){var n=!1;return this.mutableValue.forEach(function(r){"object"===("undefined"==typeof r?"undefined":(l.default)(r))&&r[e.label]===t[e.label]?n=!0:"object"===("undefined"==typeof r?"undefined":(l.default)(r))&&r[e.label]===t?n=!0:r===t&&(n=!0);}), n}return this.mutableValue===t},onEscape:function(){this.search.length?this.search="":this.$refs.search.blur();},onSearchBlur:function(){this.clearSearchOnBlur&&(this.search=""), this.open=!1, this.$emit("search:blur");},onSearchFocus:function(){this.open=!0, this.$emit("search:focus");},maybeDeleteValue:function(){if(!this.$refs.search.value.length&&this.mutableValue)return this.multiple?this.mutableValue.pop():this.mutableValue=null},optionExists:function(t){var e=this,n=!1;return this.mutableOptions.forEach(function(r){"object"===("undefined"==typeof r?"undefined":(l.default)(r))&&r[e.label]===t?n=!0:r===t&&(n=!0);}), n},maybePushTag:function(t){this.pushTags&&this.mutableOptions.push(t);}},computed:{dropdownClasses:function(){return{open:this.dropdownOpen,single:!this.multiple,searching:this.searching,searchable:this.searchable,unsearchable:!this.searchable,loading:this.mutableLoading,rtl:"rtl"===this.dir}},clearSearchOnBlur:function(){return this.clearSearchOnSelect&&!this.multiple},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=this,e=this.mutableOptions.filter(function(e){return"object"===("undefined"==typeof e?"undefined":(l.default)(e))&&e.hasOwnProperty(t.label)?e[t.label].toLowerCase().indexOf(t.search.toLowerCase())>-1:"object"!==("undefined"==typeof e?"undefined":(l.default)(e))||e.hasOwnProperty(t.label)?e.toLowerCase().indexOf(t.search.toLowerCase())>-1:console.warn('[vue-select warn]: Label key "option.'+t.label+'" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels')});return this.taggable&&this.search.length&&!this.optionExists(this.search)&&e.unshift(this.search), e},isValueEmpty:function(){return!this.mutableValue||("object"===(l.default)(this.mutableValue)?!(i.default)(this.mutableValue).length:!this.mutableValue.length)},valueAsArray:function(){return this.multiple?this.mutableValue:this.mutableValue?[this.mutableValue]:[]}}};},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=r(o),a=n(30),s=r(a),u=n(29),l=r(u);e.default={ajax:i.default,pointer:s.default,pointerScroll:l.default};},function(t,e,n){t.exports={default:n(49),__esModule:!0};},function(t,e,n){t.exports={default:n(50),__esModule:!0};},function(t,e,n){t.exports={default:n(51),__esModule:!0};},function(t,e,n){t.exports={default:n(52),__esModule:!0};},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(43),i=r(o);e.default=function(t,e,n){return e in t?(i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n, t};},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(46),i=r(o),a=n(45),s=r(a),u="function"==typeof s.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===u(i.default)?function(t){return"undefined"==typeof t?"undefined":u(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":"undefined"==typeof t?"undefined":u(t)};},function(t,e,n){n(73);var r=n(5).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)};},function(t,e,n){n(74), t.exports=n(5).Object.keys;},function(t,e,n){n(77), n(75), n(78), n(79), t.exports=n(5).Symbol;},function(t,e,n){n(76), n(80), t.exports=n(27).f("iterator");},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,e){t.exports=function(){};},function(t,e,n){var r=n(7),o=n(71),i=n(70);t.exports=function(t){return function(e,n,a){var s,u=r(e),l=o(u.length),c=i(a,l);if(t&&n!=n){for(;l>c;)if(s=u[c++], s!=s)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}};},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t), void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}};},function(t,e,n){var r=n(13),o=n(37),i=n(20);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,s=n(t),u=i.f,l=0;s.length>l;)u.call(t,a=s[l++])&&e.push(a);return e};},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement;},function(t,e,n){var r=n(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)};},function(t,e,n){var r=n(31);t.exports=Array.isArray||function(t){return"Array"==r(t)};},function(t,e,n){var r=n(35),o=n(14),i=n(21),a={};n(6)(a,n(8)("iterator"),function(){return this}), t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}), i(t,e+" Iterator");};},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}};},function(t,e,n){var r=n(15)("meta"),o=n(12),i=n(3),a=n(4).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(9)(function(){return u(Object.preventExtensions({}))}),c=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}});},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";c(t);}return t[r].i},p=function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;c(t);}return t[r].w},d=function(t){return l&&h.NEED&&u(t)&&!i(t,r)&&c(t), t},h=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:d};},function(t,e,n){var r=n(4),o=n(10),i=n(13);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t};},function(t,e,n){var r=n(20),o=n(14),i=n(7),a=n(25),s=n(3),u=n(33),l=Object.getOwnPropertyDescriptor;e.f=n(2)?l:function(t,e){if(t=i(t), e=a(e,!0), u)try{return l(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])};},function(t,e,n){var r=n(7),o=n(36).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))};},function(t,e,n){var r=n(3),o=n(40),i=n(22)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t), r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null};},function(t,e,n){var r=n(11),o=n(5),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n), r(r.S+r.F*i(function(){n(1);}),"Object",a);};},function(t,e,n){var r=n(24),o=n(16);t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),u=r(n),l=s.length;return u<0||u>=l?t?"":void 0:(i=s.charCodeAt(u), i<55296||i>56319||u+1===l||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):i:t?s.slice(u,u+2):(i-55296<<10)+(a-56320)+65536)}};},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t), t<0?o(t+e,0):i(t,e)};},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0};},function(t,e,n){var r=n(54),o=n(62),i=n(18),a=n(7);t.exports=n(34)(Array,"Array",function(t,e){this._t=a(t), this._i=0, this._k=e;},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0, o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"), i.Arguments=i.Array, r("keys"), r("values"), r("entries");},function(t,e,n){var r=n(11);r(r.S+r.F*!n(2),"Object",{defineProperty:n(4).f});},function(t,e,n){var r=n(40),o=n(13);n(68)("keys",function(){return function(t){return o(r(t))}});},function(t,e){},function(t,e,n){var r=n(69)(!0);n(34)(String,"String",function(t){this._t=String(t), this._i=0;},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n), this._i+=t.length, {value:t,done:!1})});},function(t,e,n){var r=n(1),o=n(3),i=n(2),a=n(11),s=n(39),u=n(63).KEY,l=n(9),c=n(23),f=n(21),p=n(15),d=n(8),h=n(27),b=n(26),v=n(57),g=n(60),y=n(10),m=n(7),x=n(25),w=n(14),S=n(35),O=n(66),_=n(65),j=n(4),P=n(13),k=_.f,A=j.f,M=O.f,L=r.Symbol,C=r.JSON,T=C&&C.stringify,E="prototype",V=d("_hidden"),F=d("toPrimitive"),$={}.propertyIsEnumerable,B=c("symbol-registry"),N=c("symbols"),D=c("op-symbols"),I=Object[E],R="function"==typeof L,z=r.QObject,H=!z||!z[E]||!z[E].findChild,G=i&&l(function(){return 7!=S(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(I,e);r&&delete I[e], A(t,e,n), r&&t!==I&&A(I,e,r);}:A,U=function(t){var e=N[t]=S(L[E]);return e._k=t, e},W=R&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},J=function(t,e,n){return t===I&&J(D,e,n), y(t), e=x(e,!0), y(n), o(N,e)?(n.enumerable?(o(t,V)&&t[V][e]&&(t[V][e]=!1), n=S(n,{enumerable:w(0,!1)})):(o(t,V)||A(t,V,w(1,{})), t[V][e]=!0), G(t,e,n)):A(t,e,n)},K=function(t,e){y(t);for(var n,r=v(e=m(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?S(t):K(S(t),e)},q=function(t){var e=$.call(this,t=x(t,!0));return!(this===I&&o(N,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,V)&&this[V][t])||e)},Q=function(t,e){if(t=m(t), e=x(e,!0), t!==I||!o(N,e)||o(D,e)){var n=k(t,e);return!n||!o(N,e)||o(t,V)&&t[V][e]||(n.enumerable=!0), n}},Z=function(t){for(var e,n=M(m(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==V||e==u||r.push(e);return r},X=function(t){for(var e,n=t===I,r=M(n?D:m(t)),i=[],a=0;r.length>a;)!o(N,e=r[a++])||n&&!o(I,e)||i.push(N[e]);return i};R||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===I&&e.call(D,n), o(this,V)&&o(this[V],t)&&(this[V][t]=!1), G(this,t,w(1,n));};return i&&H&&G(I,t,{configurable:!0,set:e}), U(t)}, s(L[E],"toString",function(){return this._k}), _.f=Q, j.f=J, n(36).f=O.f=Z, n(20).f=q, n(37).f=X, i&&!n(19)&&s(I,"propertyIsEnumerable",q,!0), h.f=function(t){return U(d(t))}), a(a.G+a.W+a.F*!R,{Symbol:L});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=P(d.store),rt=0;nt.length>rt;)b(nt[rt++]);a(a.S+a.F*!R,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=L(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){H=!0;},useSimple:function(){H=!1;}}), a(a.S+a.F*!R,"Object",{create:Y,defineProperty:J,defineProperties:K,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:X}), C&&a(a.S+a.F*(!R||l(function(){var t=L();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!W(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1], "function"==typeof e&&(n=e), !n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)), !W(e))return e}), r[1]=e, T.apply(C,r)}}}), L[E][F]||n(6)(L[E],F,L[E].valueOf), f(L,"Symbol"), f(Math,"Math",!0), f(r.JSON,"JSON",!0);},function(t,e,n){n(26)("asyncIterator");},function(t,e,n){n(26)("observable");},function(t,e,n){n(72);for(var r=n(1),o=n(6),i=n(18),a=n(8)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var l=s[u],c=r[l],f=c&&c.prototype;f&&!f[a]&&o(f,a,l), i[l]=i.Array;}},function(t,e,n){e=t.exports=n(82)(), e.push([t.id,'.v-select{position:relative;font-family:sans-serif}.v-select .disabled{cursor:not-allowed!important;background-color:#f8f8f8!important}.v-select,.v-select *{box-sizing:border-box}.v-select.rtl .open-indicator{left:10px;right:auto}.v-select.rtl .selected-tag{float:right;margin-right:3px;margin-left:1px}.v-select.rtl .dropdown-menu{text-align:right}.v-select .open-indicator{position:absolute;bottom:6px;right:10px;cursor:pointer;pointer-events:all;opacity:1;height:20px}.v-select .open-indicator,.v-select .open-indicator:before{display:inline-block;transition:all .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855);width:10px}.v-select .open-indicator:before{border-color:rgba(60,60,60,.5);border-style:solid;border-width:3px 3px 0 0;content:"";height:10px;vertical-align:top;transform:rotate(133deg);box-sizing:inherit}.v-select.open .open-indicator:before{transform:rotate(315deg)}.v-select.loading .open-indicator{opacity:0}.v-select.open .open-indicator{bottom:1px}.v-select .dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;padding:0;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.v-select .dropdown-toggle:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.v-select.searchable .dropdown-toggle{cursor:text}.v-select.unsearchable .dropdown-toggle{cursor:pointer}.v-select.open .dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.v-select .dropdown-menu{display:block;position:absolute;top:100%;left:0;z-index:1000;min-width:160px;padding:5px 0;margin:0;width:100%;overflow-y:scroll;border:1px solid rgba(0,0,0,.26);box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border-top:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.v-select .no-options{text-align:center}.v-select .selected-tag{color:#333;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;height:26px;margin:4px 1px 0 3px;padding:1px .25em;float:left;line-height:24px}.v-select.single .selected-tag{background-color:transparent;border-color:transparent}.v-select.single.open .selected-tag{position:absolute;opacity:.5}.v-select.single.loading .selected-tag,.v-select.single.open.searching .selected-tag{display:none}.v-select .selected-tag .close{float:none;margin-right:0;font-size:20px;appearance:none;padding:0;cursor:pointer;background:0 0;border:0;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.v-select.single.searching:not(.open):not(.loading) input[type=search]{opacity:.2}.v-select input[type=search]::-webkit-search-cancel-button,.v-select input[type=search]::-webkit-search-decoration,.v-select input[type=search]::-webkit-search-results-button,.v-select input[type=search]::-webkit-search-results-decoration{display:none}.v-select input[type=search]::-ms-clear{display:none}.v-select input[type=search],.v-select input[type=search]:focus{appearance:none;-webkit-appearance:none;-moz-appearance:none;line-height:1.42857143;font-size:1em;height:34px;display:inline-block;border:none;outline:none;margin:0;padding:0 .5em;width:10em;max-width:100%;background:none;position:relative;box-shadow:none;float:left;clear:none}.v-select li{line-height:1.42857143}.v-select li>a{display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.v-select li:hover{cursor:pointer}.v-select .dropdown-menu .active>a{color:#333;background:rgba(50,50,50,.1)}.v-select .dropdown-menu>.highlight>a{background:#5897fb;color:#fff}.v-select .highlight:not(:last-child){margin-bottom:0}.v-select .spinner{opacity:0;position:absolute;top:5px;right:10px;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid hsla(0,0%,39%,.1);border-right:.9em solid hsla(0,0%,39%,.1);border-bottom:.9em solid hsla(0,0%,39%,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0);animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.v-select .spinner,.v-select .spinner:after{border-radius:50%;width:5em;height:5em}.v-select.loading .spinner{opacity:1}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fade-enter-active,.fade-leave-active{transition:opacity .15s cubic-bezier(1,.5,.8,1)}.fade-enter,.fade-leave-to{opacity:0}',""]);},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1]);}return t.join("")}, t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0);}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"), t.push(a));}}, t};},function(t,e,n){n(87);var r=n(84)(n(41),n(85),null,null);t.exports=r.exports;},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t, i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render, s.staticRenderFns=e.staticRenderFns), n&&(s._scopeId=n), r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e};});}return{esModule:o,exports:i,options:s}};},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown v-select",class:t.dropdownClasses,attrs:{dir:t.dir}},[n("div",{ref:"toggle",class:["dropdown-toggle","clearfix",{disabled:t.disabled}],on:{mousedown:function(e){e.preventDefault(), t.toggleDropdown(e);}}},[t._l(t.valueAsArray,function(e){return n("span",{key:e.index,staticClass:"selected-tag"},[t._t("selected-option",[t._v("\n        "+t._s(t.getOptionLabel(e))+"\n      ")],null,e),t._v(" "),t.multiple?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Remove option"},on:{click:function(n){t.deselect(e);}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e()],2)}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",class:[{disabled:t.disabled},"form-control"],style:{width:t.isValueEmpty?"100%":"auto"},attrs:{type:"search",placeholder:t.searchPlaceholder,readonly:!t.searchable,id:t.inputId,"aria-label":"Search for option"},domProps:{value:t.search},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"delete",[8,46])?void t.maybeDeleteValue(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?(e.preventDefault(), void t.typeAheadUp(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?(e.preventDefault(), void t.typeAheadDown(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(), void t.typeAheadSelect(e)):null}],keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.onEscape(e):null},blur:t.onSearchBlur,focus:t.onSearchFocus,input:function(e){e.target.composing||(t.search=e.target.value);}}}),t._v(" "),t.noDrop?t._e():n("i",{ref:"openIndicator",class:[{disabled:t.disabled},"open-indicator"],attrs:{role:"presentation"}}),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"spinner"},[t._v("Loading...")])])],2),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{ref:"dropdownMenu",staticClass:"dropdown-menu",style:{"max-height":t.maxHeight}},[t._l(t.filteredOptions,function(e,r){return n("li",{key:r,class:{active:t.isOptionSelected(e),highlight:r===t.typeAheadPointer},on:{mouseover:function(e){t.typeAheadPointer=r;}}},[n("a",{on:{mousedown:function(n){n.preventDefault(), t.select(e);}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,e)],2)])}),t._v(" "),t.filteredOptions.length?t._e():n("li",{
staticClass:"no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")])],2)],2):t._e()])],1)},staticRenderFns:[]};},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e));}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a};}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],s=o[2],u=o[3],l={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(l):e.push(n[i]={id:i,parts:[l]});}return e}function i(t,e){var n=h(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild), g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);}}function a(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1);}function s(t){var e=document.createElement("style");return e.type="text/css", i(t,e), e}function u(t,e){var n,r,o;if(e.singleton){var i=v++;n=b||(b=s(e)), r=l.bind(null,n,i,!1), o=l.bind(null,n,i,!0);}else n=s(e), r=c.bind(null,n), o=function(){a(n);};return r(t), function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e);}else o();}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]), a.length?t.insertBefore(i,a[e]):t.appendChild(i);}}function c(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r), o&&(n+="\n/*# sourceURL="+o.sources[0]+" */", n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"), t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n));}}var f={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)), e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,g=[];t.exports=function(t,e){e=e||{}, "undefined"==typeof e.singleton&&(e.singleton=d()), "undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e), function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=f[s.id];u.refs--, i.push(u);}if(t){var l=o(t);r(l,e);}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id];}}}};var y=function(){var t=[];return function(e,n){return t[e]=n, t.filter(Boolean).join("\n")}}();},function(t,e,n){var r=n(81);"string"==typeof r&&(r=[[t.id,r,""]]);n(86)(r,{});r.locals&&(t.exports=r.locals);}])});
});
var vSelect = unwrapExports(vueSelect);
var vueSelect_1 = vueSelect.VueSelect;

var dist = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e), r.l=!0, r.exports}var i={};return e.m=t, e.c=i, e.i=function(t){return t}, e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s});}, e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i), i}, e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}, e.p="", e(e.s=2)}([function(t,e,i){i(7);var s=i(5)(i(1),i(6),null,null);t.exports=s.exports;},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}), e.default={name:"VueSliderComponent",data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0}},props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},dotWidth:{type:Number,required:!1},dotHeight:{type:Number,required:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1},value:{type:[String,Number,Array],default:0},piecewiseLabel:{type:Boolean,default:!1},sliderStyle:[Array,Object],tooltipDir:[Array,String],formatter:[String,Function],piecewiseStyle:Object,piecewiseActiveStyle:Object,processStyle:Object,bgStyle:Object,tooltipStyle:[Array,Object],labelStyle:Object,labelActiveStyle:Object},computed:{dotWidthVal:function(){return"number"==typeof this.dotWidth?this.dotWidth:this.dotSize},dotHeightVal:function(){return"number"==typeof this.dotHeight?this.dotHeight:this.dotSize},flowDirection:function(){return"vue-slider-"+this.direction+(this.reverse?"-reverse":"")},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},tooltipClass:function(){return["vue-slider-tooltip-"+this.tooltipDirection,"vue-slider-tooltip"]},isDisabled:function(){return"none"===this.eventType||this.disabled},disabledClass:function(){return this.disabled?"vue-slider-disabled":""},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i]);}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s);}else this.currentValue=t;}},currentIndex:function(){return this.isRange?this.data?this.currentValue:[(this.currentValue[0]-this.minimum)/this.spacing,(this.currentValue[1]-this.minimum)/this.spacing]:(this.currentValue-this.minimum)/this.spacing},indexRange:function(){return this.isRange?this.currentIndex:[0,this.currentIndex]},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(~~((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&console.error("[Vue-slider warn]: Prop[interval] is illegal, Please make sure that the interval can be divisible"), (this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return this.isRange?[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",left:-(this.dotWidthVal-this.width)/2+"px"}:{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",top:-(this.dotHeightVal-this.height)/2+"px"}},piecewiseDotStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotWrap:function(){if(!this.piecewise&&!this.piecewiseLabel)return!1;for(var t=[],e=0;e<=this.total;e++){var i="vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:0}:{left:this.gap*e-this.height/2+"px",top:0},s=this.reverse?this.total-e:e,r=this.data?this.data[s]:this.spacing*s+this.min;t.push({style:i,label:this.formatter?this.formatting(r):r,inRange:s>=this.indexRange[0]&&s<=this.indexRange[1]});}return t}},watch:{value:function(t){this.flag||this.setValue(t,!0);},max:function(t){var e=this.limitValue(this.val);!1!==e&&this.setValue(e), this.refresh();},min:function(t){var e=this.limitValue(this.val);!1!==e&&this.setValue(e), this.refresh();},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh();});}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}), document.addEventListener("touchend",this.moveEnd,{passive:!1}), document.addEventListener("mousemove",this.moving), document.addEventListener("mouseup",this.moveEnd), document.addEventListener("mouseleave",this.moveEnd), window.addEventListener("resize",this.refresh);},unbindEvents:function(){window.removeEventListener("resize",this.refresh), document.removeEventListener("touchmove",this.moving), document.removeEventListener("touchend",this.moveEnd), document.removeEventListener("mousemove",this.moving), document.removeEventListener("mouseup",this.moveEnd), document.removeEventListener("mouseleave",this.moveEnd);},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},getPos:function(t){return this.realTime&&this.getStaticData(), "vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled||!this.clickable)return!1;var e=this.getPos(t);this.isRange&&(this.currentSlider=e>(this.position[1]-this.position[0])/2+this.position[0]?1:0), this.setValueOnPos(e);},moveStart:function(t,e){if(this.stopPropagation&&t.stopPropagation(), this.isDisabled)return!1;this.isRange&&(this.currentSlider=e), this.flag=!0, this.$emit("drag-start",this);},moving:function(t){if(this.stopPropagation&&t.stopPropagation(), !this.flag)return!1;t.preventDefault(), t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]), this.setValueOnPos(this.getPos(t),!0);},moveEnd:function(t){if(this.stopPropagation&&t.stopPropagation(), !this.flag)return!1;this.$emit("drag-end",this), this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(), this.flag=!1, this.setPosition();},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var r=(Math.round(t/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(r,e);}else t<i[0]?(this.setTransform(i[0]), this.setCurrentValue(s[0]), 1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]), this.setCurrentValue(s[1]), 0===this.currentSlider&&(this.currentSlider=1));},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){if(t<this.minimum||t>this.maximum)return!1;this.isRange?this.isDiff(this.currentValue[this.currentSlider],t)&&(this.currentValue.splice(this.currentSlider,1,t), this.lazy&&this.flag||this.syncValue()):this.isDiff(this.currentValue,t)&&(this.currentValue=t, this.lazy&&this.flag||this.syncValue()), e||this.setPosition();},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.spacing*t[0]+this.minimum,this.spacing*t[1]+this.minimum], this.setValue(e);}else t=this.spacing*t+this.minimum, this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0), this.setCurrentValue(t);},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var r=this.limitValue(t);this.val=!1!==r?this.isRange?r.concat():r:this.isRange?t.concat():t, this.syncValue(e);}this.$nextTick(function(){return s.setPosition(i)});},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t), this.isRange?(this.currentSlider=0, this.setTransform(this.position[this.currentSlider]), this.currentSlider=1, this.setTransform(this.position[this.currentSlider])):this.setTransform(this.position), this.flag||this.setTransitionTime(0);},setTransform:function(t){var e=("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1),i="vertical"===this.direction?"translateY("+e+"px)":"translateX("+e+"px)",s=(0===this.currentSlider?this.position[1]-t:t-this.position[0])+"px",r=(0===this.currentSlider?t:this.position[0])+"px";this.isRange?(this.slider[this.currentSlider].style.transform=i, this.slider[this.currentSlider].style.WebkitTransform=i, this.slider[this.currentSlider].style.msTransform=i, "vertical"===this.direction?(this.$refs.process.style.height=s, this.$refs.process.style[this.reverse?"top":"bottom"]=r):(this.$refs.process.style.width=s, this.$refs.process.style[this.reverse?"right":"left"]=r)):(this.slider.style.transform=i, this.slider.style.WebkitTransform=i, this.slider.style.msTransform=i, "vertical"===this.direction?(this.$refs.process.style.height=t+"px", this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px", this.$refs.process.style[this.reverse?"right":"left"]=0));},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth, this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s", this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s", this.$refs.process.style.WebkitTransitionDuration=t+"s";}else this.slider.style.transitionDuration=t+"s", this.slider.style.WebkitTransitionDuration=t+"s", this.$refs.process.style.transitionDuration=t+"s", this.$refs.process.style.WebkitTransitionDuration=t+"s";},limitValue:function(t){var e=this;if(this.data)return t;var i=!1;return this.isRange?t=t.map(function(t){return t<e.min?(i=!0, e.min):t>e.max?(i=!0, e.max):t}):t>this.max?(i=!0, t=this.max):t<this.min&&(i=!0, t=this.min), i&&t},syncValue:function(t){t||this.$emit("callback",this.val), this.$emit("input",this.isRange?this.val.concat():this.val);},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth, this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left);},refresh:function(){this.$refs.elem&&(this.getStaticData(), this.setPosition());}},mounted:function(){var t=this;"undefined"!=typeof window&&"undefined"!=typeof document&&this.$nextTick(function(){t.getStaticData(), t.setValue(t.value,!0,0), t.bindEvents();});},beforeDestroy:function(){this.unbindEvents();}};},function(t,e,i){var s=i(0);t.exports=s;},function(t,e,i){e=t.exports=i(4)(), e.push([t.i,'.vue-slider-component{position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-component.vue-slider-has-label{margin-bottom:15px}.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed}.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-component .vue-slider:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1}.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0}.vue-slider-component .vue-slider-dot{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);transition:all 0s;will-change:transform;cursor:pointer;z-index:3}.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0}.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0}.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9}.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important}.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px}.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(-50%,8px);transform:translate(-50%,8px);visibility:visible}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(8px,-50%);transform:translate(8px,-50%);visibility:visible}.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}',""]);},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1]);}return t.join("")}, t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(s[n]=!0);}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&s[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"), t.push(o));}}, t};},function(t,e){t.exports=function(t,e,i,s){var r,n=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t, n=t.default);var l="function"==typeof n?n.options:n;if(e&&(l.render=e.render, l.staticRenderFns=e.staticRenderFns), i&&(l._scopeId=i), s){var a=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var e=s[t];a[t]=function(){return e};}), l.computed=a;}return{esModule:r,exports:n,options:l}};},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrap",class:["vue-slider-component",t.flowDirection,t.disabledClass,{"vue-slider-has-label":t.piecewiseLabel}],style:t.wrapStyles,on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slider",style:[t.elemStyles,t.bgStyle],attrs:{"aria-hidden":"true"}},[t.isRange?[i("div",{ref:"dot0",class:[t.tooltipStatus,"vue-slider-dot"],style:[t.dotStyles,t.sliderStyles[0]],on:{mousedown:function(e){t.moveStart(e,0);},touchstart:function(e){t.moveStart(e,0);}}},[i("span",{class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[0]},[t._v(t._s(t.formatter?t.formatting(t.val[0]):t.val[0]))])],{value:t.val[0],index:0})],2)]),t._v(" "),i("div",{ref:"dot1",class:[t.tooltipStatus,"vue-slider-dot"],style:[t.dotStyles,t.sliderStyles[1]],on:{mousedown:function(e){t.moveStart(e,1);},touchstart:function(e){t.moveStart(e,1);}}},[i("span",{class:["vue-slider-tooltip-"+t.tooltipDirection[1],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[1]},[t._v(t._s(t.formatter?t.formatting(t.val[1]):t.val[1]))])],{value:t.val[1],index:1})],2)])]:[i("div",{ref:"dot",class:[t.tooltipStatus,"vue-slider-dot"],style:[t.dotStyles,t.sliderStyles],on:{mousedown:t.moveStart,touchstart:t.moveStart}},[i("span",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v(t._s(t.formatter?t.formatting(t.val):t.val))])],{value:t.val})],2)])],t._v(" "),i("ul",{staticClass:"vue-slider-piecewise"},t._l(t.piecewiseDotWrap,function(e,s){return i("li",{key:s,staticClass:"vue-slider-piecewise-item",style:[t.piecewiseDotStyle,e.style]},[t._t("piecewise",[t.piecewise?i("span",{staticClass:"vue-slider-piecewise-dot",style:[t.piecewiseStyle,e.inRange?t.piecewiseActiveStyle:null]}):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1}),t._v(" "),t._t("label",[t.piecewiseLabel?i("span",{staticClass:"vue-slider-piecewise-label",style:[t.labelStyle,e.inRange?t.labelActiveStyle:null]},[t._v("\n\t\t\t\t\t\t"+t._s(e.label)+"\n\t\t\t\t\t")]):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1})],2)})),t._v(" "),i("div",{ref:"process",staticClass:"vue-slider-process",style:t.processStyle})],2),t._v(" "),t.isRange||t.data?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.val},on:{__r:function(e){t.val=e.target.value;}}})])},staticRenderFns:[]};},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.i,s,""]]), s.locals&&(t.exports=s.locals);i(8)("743d98f5",s,!0);},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=h[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(n(i.parts[r]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length);}else{for(var o=[],r=0;r<i.parts.length;r++)o.push(n(i.parts[r]));h[i.id]={id:i.id,refs:1,parts:o};}}}function r(){var t=document.createElement("style");return t.type="text/css", d.appendChild(t), t}function n(t){var e,i,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(f)return v;s.parentNode.removeChild(s);}if(m){var n=c++;s=p||(p=r()), e=o.bind(null,s,n,!1), i=o.bind(null,s,n,!0);}else s=r(), e=l.bind(null,s), i=function(){s.parentNode.removeChild(s);};return e(t), function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s);}else i();}}function o(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var n=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]), o.length?t.insertBefore(n,o[e]):t.appendChild(n);}}function l(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s), r&&(i+="\n/*# sourceURL="+r.sources[0]+" */", i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"), t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i));}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(9),h={},d=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,c=0,f=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var r=u(t,e);return s(r), function(e){for(var i=[],n=0;n<r.length;n++){var o=r[n],l=h[o.id];l.refs--, i.push(l);}e?(r=u(t,e), s(r)):r=[];for(var n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete h[l.id];}}}};var g=function(){var t=[];return function(e,i){return t[e]=i, t.filter(Boolean).join("\n")}}();},function(t,e){t.exports=function(t,e){for(var i=[],s={},r=0;r<e.length;r++){var n=e[r],o=n[0],l=n[1],a=n[2],u=n[3],h={id:t+":"+r,css:l,media:a,sourceMap:u};s[o]?s[o].parts.push(h):i.push(s[o]={id:o,parts:[h]});}return i};}])});
});
var vSlider = unwrapExports(dist);

var dist$1 = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t), i.l=!0, i.exports}var n={};return t.m=e, t.c=n, t.i=function(e){return e}, t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o});}, t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n), n}, t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}, t.p="", t(t.s=7)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")}, t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0);}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"), t.push(a));}}, t};},function(e,t){e.exports=function(e,t,n,o,i){var r,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e, a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render, u.staticRenderFns=t.staticRenderFns), o&&(u._scopeId=o);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext, e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__), n&&n.call(this,e), e&&e._registeredComponents&&e._registeredComponents.add(i);}, u._ssrRegister=c):n&&(c=n), c){var l=u.functional,d=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t), d(e,t)}:u.beforeCreate=d?[].concat(d,c):[c];}return{esModule:r,exports:a,options:u}};},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length);}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(r(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a};}}}function i(){var e=document.createElement("style");return e.type="text/css", d.appendChild(e), e}function r(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return m;o.parentNode.removeChild(o);}if(b){var r=f++;o=p||(p=i()), t=a.bind(null,o,r,!1), n=a.bind(null,o,r,!0);}else o=i(), t=s.bind(null,o), n=function(){o.parentNode.removeChild(o);};return t(e), function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o);}else n();}}function a(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]), a.length?e.insertBefore(r,a[t]):e.appendChild(r);}}function s(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o), i&&(n+="\n/*# sourceURL="+i.sources[0]+" */", n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"), e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n));}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(14),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,m=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=c(e,t);return o(i), function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=l[a.id];s.refs--, n.push(s);}t?(i=c(e,t), o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id];}}}};var v=function(){var e=[];return function(t,n){return e[t]=n, e.filter(Boolean).join("\n")}}();},function(e,t,n){function o(e){n(13);}var i=n(1)(n(5),n(11),o,null,null);e.exports=i.exports;},function(e,t,n){function o(e){n(12);}var i=n(1)(n(6),n(10),o,null,null);e.exports=i.exports;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}), t.default={model:{prop:"modelValue",event:"input"},props:{id:{type:String,default:function(){return"checkbox-id-"+this._uid}},name:{type:String,default:null},value:{default:null},modelValue:{default:void 0},className:{type:String,default:null},checked:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},model:{}},computed:{state:function(){return void 0===this.modelValue?this.checked:Array.isArray(this.modelValue)?this.modelValue.indexOf(this.value)>-1:!!this.modelValue}},methods:{onChange:function(){this.toggle();},toggle:function(){var e=void 0;Array.isArray(this.modelValue)?(e=this.modelValue.slice(0), this.state?e.splice(e.indexOf(this.value),1):e.push(this.value)):e=!this.state, this.$emit("input",e);}},watch:{checked:function(e){e!==this.state&&this.toggle();}},mounted:function(){this.checked&&!this.state&&this.toggle();}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}), t.default={model:{prop:"modelValue",event:"input"},props:{id:{type:String,default:function(){return"radio-id-"+this._uid}},name:{type:String,default:null},value:{default:""},modelValue:{default:void 0},className:{type:String,default:null},checked:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},model:{}},computed:{state:function(){return void 0===this.modelValue?this.checked:this.modelValue===this.value}},methods:{onChange:function(){this.toggle();},toggle:function(){this.$emit("input",this.state?"":this.value);}},watch:{checked:function(e){e!==this.state&&this.toggle();}},mounted:function(){this.checked&&!this.state&&this.toggle();}};},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}), t.Radio=t.Checkbox=void 0;var i=n(3),r=o(i),a=n(4),s=o(a);t.default={install:function(e){e.component("checkbox",r.default), e.component("radio",s.default);}}, t.Checkbox=r.default, t.Radio=s.default;},function(e,t,n){t=e.exports=n(0)(void 0), t.push([e.i,".radio-component>input{opacity:0;position:absolute}.radio-component>input+label>.input-box{display:inline-block;border:1px solid #000;border-radius:50%;margin:0;padding:0;width:1em;height:1em;background:#fff;overflow:hidden;vertical-align:-5%;user-select:none}.radio-component>input+label>.input-box>.input-box-circle{display:block;margin:50%;width:0;height:0%;background:#000;border-radius:50%;opacity:0;transition:width .15s ease-in,height .15s ease-in,margin .15s ease-in}.radio-component>input:checked+label>.input-box>.input-box-circle{opacity:1;margin:22%;width:56%;height:56%}.radio-component>input:focus+label>.input-box{box-shadow:0 0 2px 3px #73b9ff}.radio-component>input:disabled+label{opacity:.7}",""]);},function(e,t,n){t=e.exports=n(0)(void 0), t.push([e.i,".checkbox-component>input{opacity:0;position:absolute}.checkbox-component>input+label>.input-box{display:inline-block;border:1px solid #000;border-radius:14%;margin:0;padding:0;width:1em;height:1em;background:#fff;overflow:hidden;vertical-align:-5%;user-select:none}.checkbox-component>input+label>.input-box>.input-box-tick{width:100%;height:100%}.checkbox-component>input+label>.input-box>.input-box-tick>path{opacity:0;stroke:#000;stroke-width:2.3px;stroke-dashoffset:20;stroke-dasharray:20;transition:stroke-dashoffset .15s ease-in}.checkbox-component>input:checked+label>.input-box>.input-box-tick>path{opacity:1;stroke-dashoffset:0}.checkbox-component>input:focus+label>.input-box{box-shadow:0 0 2px 3px rgba(115,185,255,.69)}.checkbox-component>input:disabled+label{opacity:.7}",""]);},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"radio-component"},[n("input",{class:e.className,attrs:{type:"radio",id:e.id,name:e.name,required:e.required,disabled:e.disabled},domProps:{value:e.value,checked:e.state},on:{change:e.onChange}}),e._v(" "),n("label",{attrs:{for:e.id}},[e._t("input-box",[e._m(0)]),e._v(" "),e._t("default")],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"input-box"},[n("span",{staticClass:"input-box-circle"})])}]};},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox-component"},[n("input",{class:e.className,attrs:{type:"checkbox",id:e.id,name:e.name,required:e.required,disabled:e.disabled},domProps:{value:e.value,checked:e.state},on:{change:e.onChange}}),e._v(" "),n("label",{attrs:{for:e.id}},[e._t("input-box",[n("span",{staticClass:"input-box"},[n("svg",{staticClass:"input-box-tick",attrs:{viewBox:"0 0 16 16"}},[n("path",{attrs:{fill:"none",d:"M1.7,7.8l3.8,3.4l9-8.8"}})])])]),e._v(" "),e._t("default")],2)])},staticRenderFns:[]};},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.i,o,""]]), o.locals&&(e.exports=o.locals);n(2)("141dde0d",o,!0);},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]), o.locals&&(e.exports=o.locals);n(2)("0734c2c4",o,!0);},function(e,t){e.exports=function(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=r[0],s=r[1],u=r[2],c=r[3],l={id:e+":"+i,css:s,media:u,sourceMap:c};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]});}return n};}])});
});
var CheckboxRadio = unwrapExports(dist$1);

var chroma = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2017, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
(function() {
  var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hcg2rgb, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hcg, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
    slice = [].slice;
  type = (function() {
    var classToType, len, name, o, ref;
    classToType = {};
    ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
    for (o = 0, len = ref.length; o < len; o++) {
      name = ref[o];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    return function(obj) {
      var strType;
      strType = Object.prototype.toString.call(obj);
      return classToType[strType] || "object";
    };
  })();
  limit = function(x, min, max) {
    if (min == null) {
      min = 0;
    }
    if (max == null) {
      max = 1;
    }
    if (x < min) {
      x = min;
    }
    if (x > max) {
      x = max;
    }
    return x;
  };
  unpack = function(args) {
    if (args.length >= 3) {
      return [].slice.call(args);
    } else {
      return args[0];
    }
  };
  clip_rgb = function(rgb) {
    var i, o;
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for (i = o = 0; o < 3; i = ++o) {
      if (i < 3) {
        if (rgb[i] < 0 || rgb[i] > 255) {
          rgb._clipped = true;
        }
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 255) {
          rgb[i] = 255;
        }
      } else if (i === 3) {
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 1) {
          rgb[i] = 1;
        }
      }
    }
    if (!rgb._clipped) {
      delete rgb._unclipped;
    }
    return rgb;
  };
  PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;
  TWOPI = PI * 2;
  PITHIRD = PI / 3;
  DEG2RAD = PI / 180;
  RAD2DEG = 180 / PI;
  chroma = function() {
    if (arguments[0] instanceof Color) {
      return arguments[0];
    }
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, arguments, function(){});
  };
  _interpolators = [];
  if (('object' !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = chroma;
  }
  if (typeof undefined === 'function' && undefined.amd) {
    undefined([], function() {
      return chroma;
    });
  } else {
    root = 'object' !== "undefined" && exports !== null ? exports : this;
    root.chroma = chroma;
  }
  chroma.version = '1.3.4';
  _input = {};
  _guess_formats = [];
  _guess_formats_sorted = false;
  Color = (function() {
    function Color() {
      var arg, args, chk, len, len1, me, mode, o, w;
      me = this;
      args = [];
      for (o = 0, len = arguments.length; o < len; o++) {
        arg = arguments[o];
        if (arg != null) {
          args.push(arg);
        }
      }
      mode = args[args.length - 1];
      if (_input[mode] != null) {
        me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
      } else {
        if (!_guess_formats_sorted) {
          _guess_formats = _guess_formats.sort(function(a, b) {
            return b.p - a.p;
          });
          _guess_formats_sorted = true;
        }
        for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
          chk = _guess_formats[w];
          mode = chk.test.apply(chk, args);
          if (mode) {
            break;
          }
        }
        if (mode) {
          me._rgb = clip_rgb(_input[mode].apply(_input, args));
        }
      }
      if (me._rgb == null) {
        console.warn('unknown format: ' + args);
      }
      if (me._rgb == null) {
        me._rgb = [0, 0, 0];
      }
      if (me._rgb.length === 3) {
        me._rgb.push(1);
      }
    }
    Color.prototype.toString = function() {
      return this.hex();
    };
    Color.prototype.clone = function() {
      return chroma(me._rgb);
    };
    return Color;
  })();
  chroma._input = _input;
  /**
  	ColorBrewer colors for chroma.js
  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
  	Pennsylvania State University.
  	Licensed under the Apache License, Version 2.0 (the "License");
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at
  	http://www.apache.org/licenses/LICENSE-2.0
  	Unless required by applicable law or agreed to in writing, software distributed
  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
  	specific language governing permissions and limitations under the License.
      @preserve
   */
  chroma.brewer = brewer = {
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  };
  (function() {
    var key, results;
    results = [];
    for (key in brewer) {
      results.push(brewer[key.toLowerCase()] = brewer[key]);
    }
    return results;
  })();
  w3cx11 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflower: '#6495ed',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    laserlemon: '#ffff54',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrod: '#fafad2',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    maroon2: '#7f0000',
    maroon3: '#b03060',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    purple2: '#7f007f',
    purple3: '#a020f0',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };
  chroma.colors = colors = w3cx11;
  lab2rgb = function() {
    var a, args, b, g, l, r, x, y, z;
    args = unpack(arguments);
    l = args[0], a = args[1], b = args[2];
    y = (l + 16) / 116;
    x = isNaN(a) ? y : y + a / 500;
    z = isNaN(b) ? y : y - b / 200;
    y = LAB_CONSTANTS.Yn * lab_xyz(y);
    x = LAB_CONSTANTS.Xn * lab_xyz(x);
    z = LAB_CONSTANTS.Zn * lab_xyz(z);
    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  xyz_rgb = function(r) {
    return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
  };
  lab_xyz = function(t) {
    if (t > LAB_CONSTANTS.t1) {
      return t * t * t;
    } else {
      return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
    }
  };
  LAB_CONSTANTS = {
    Kn: 18,
    Xn: 0.950470,
    Yn: 1,
    Zn: 1.088830,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452
  };
  rgb2lab = function() {
    var b, g, r, ref, ref1, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  };
  rgb_xyz = function(r) {
    if ((r /= 255) <= 0.04045) {
      return r / 12.92;
    } else {
      return pow((r + 0.055) / 1.055, 2.4);
    }
  };
  xyz_lab = function(t) {
    if (t > LAB_CONSTANTS.t3) {
      return pow(t, 1 / 3);
    } else {
      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
    }
  };
  rgb2xyz = function() {
    var b, g, r, ref, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
    return [x, y, z];
  };
  chroma.lab = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['lab']), function(){});
  };
  _input.lab = lab2rgb;
  Color.prototype.lab = function() {
    return rgb2lab(this._rgb);
  };
  bezier = function(colors) {
    var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
    colors = (function() {
      var len, o, results;
      results = [];
      for (o = 0, len = colors.length; o < len; o++) {
        c = colors[o];
        results.push(chroma(c));
      }
      return results;
    })();
    if (colors.length === 2) {
      ref = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref[0], lab1 = ref[1];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push(lab0[i] + t * (lab1[i] - lab0[i]));
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 3) {
      ref1 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 4) {
      ref2 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 5) {
      I0 = bezier(colors.slice(0, 3));
      I1 = bezier(colors.slice(2, 5));
      I = function(t) {
        if (t < 0.5) {
          return I0(t * 2);
        } else {
          return I1((t - 0.5) * 2);
        }
      };
    }
    return I;
  };
  chroma.bezier = function(colors) {
    var f;
    f = bezier(colors);
    f.scale = function() {
      return chroma.scale(f);
    };
    return f;
  };
  chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
    var dh, dl, f;
    if (start == null) {
      start = 300;
    }
    if (rotations == null) {
      rotations = -1.5;
    }
    if (hue == null) {
      hue = 1;
    }
    if (gamma == null) {
      gamma = 1;
    }
    if (lightness == null) {
      lightness = [0, 1];
    }
    dh = 0;
    if (type(lightness) === 'array') {
      dl = lightness[1] - lightness[0];
    } else {
      dl = 0;
      lightness = [lightness, lightness];
    }
    f = function(fract) {
      var a, amp, b, cos_a, g, h, l, r, sin_a;
      a = TWOPI * ((start + 120) / 360 + rotations * fract);
      l = pow(lightness[0] + dl * fract, gamma);
      h = dh !== 0 ? hue[0] + fract * dh : hue;
      amp = h * l * (1 - l) / 2;
      cos_a = cos(a);
      sin_a = sin(a);
      r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      b = l + amp * (+1.97294 * cos_a);
      return chroma(clip_rgb([r * 255, g * 255, b * 255]));
    };
    f.start = function(s) {
      if (s == null) {
        return start;
      }
      start = s;
      return f;
    };
    f.rotations = function(r) {
      if (r == null) {
        return rotations;
      }
      rotations = r;
      return f;
    };
    f.gamma = function(g) {
      if (g == null) {
        return gamma;
      }
      gamma = g;
      return f;
    };
    f.hue = function(h) {
      if (h == null) {
        return hue;
      }
      hue = h;
      if (type(hue) === 'array') {
        dh = hue[1] - hue[0];
        if (dh === 0) {
          hue = hue[1];
        }
      } else {
        dh = 0;
      }
      return f;
    };
    f.lightness = function(h) {
      if (h == null) {
        return lightness;
      }
      if (type(h) === 'array') {
        lightness = h;
        dl = h[1] - h[0];
      } else {
        lightness = [h, h];
        dl = 0;
      }
      return f;
    };
    f.scale = function() {
      return chroma.scale(f);
    };
    f.hue(hue);
    return f;
  };
  chroma.random = function() {
    var code, digits, i, o;
    digits = '0123456789abcdef';
    code = '#';
    for (i = o = 0; o < 6; i = ++o) {
      code += digits.charAt(floor(Math.random() * 16));
    }
    return new Color(code);
  };
  chroma.average = function(colors, mode) {
    var A, alpha, c, cnt, dx, dy, first, i, l, len, o, xyz, xyz2;
    if (mode == null) {
      mode = 'rgb';
    }
    l = colors.length;
    colors = colors.map(function(c) {
      return chroma(c);
    });
    first = colors.splice(0, 1)[0];
    xyz = first.get(mode);
    cnt = [];
    dx = 0;
    dy = 0;
    for (i in xyz) {
      xyz[i] = xyz[i] || 0;
      cnt.push(!isNaN(xyz[i]) ? 1 : 0);
      if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
        A = xyz[i] / 180 * PI;
        dx += cos(A);
        dy += sin(A);
      }
    }
    alpha = first.alpha();
    for (o = 0, len = colors.length; o < len; o++) {
      c = colors[o];
      xyz2 = c.get(mode);
      alpha += c.alpha();
      for (i in xyz) {
        if (!isNaN(xyz2[i])) {
          xyz[i] += xyz2[i];
          cnt[i] += 1;
          if (mode.charAt(i) === 'h') {
            A = xyz[i] / 180 * PI;
            dx += cos(A);
            dy += sin(A);
          }
        }
      }
    }
    for (i in xyz) {
      xyz[i] = xyz[i] / cnt[i];
      if (mode.charAt(i) === 'h') {
        A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
        while (A < 0) {
          A += 360;
        }
        while (A >= 360) {
          A -= 360;
        }
        xyz[i] = A;
      }
    }
    return chroma(xyz, mode).alpha(alpha / l);
  };
  _input.rgb = function() {
    var k, ref, results, v;
    ref = unpack(arguments);
    results = [];
    for (k in ref) {
      v = ref[k];
      results.push(v);
    }
    return results;
  };
  chroma.rgb = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['rgb']), function(){});
  };
  Color.prototype.rgb = function(round) {
    if (round == null) {
      round = true;
    }
    if (round) {
      return this._rgb.map(Math.round).slice(0, 3);
    } else {
      return this._rgb.slice(0, 3);
    }
  };
  Color.prototype.rgba = function(round) {
    if (round == null) {
      round = true;
    }
    if (!round) {
      return this._rgb.slice(0);
    }
    return [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]];
  };
  _guess_formats.push({
    p: 3,
    test: function(n) {
      var a;
      a = unpack(arguments);
      if (type(a) === 'array' && a.length === 3) {
        return 'rgb';
      }
      if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
        return 'rgb';
      }
    }
  });
  hex2rgb = function(hex) {
    var a, b, g, r, rgb, u;
    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      }
      if (hex.length === 3) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      u = parseInt(hex, 16);
      r = u >> 16;
      g = u >> 8 & 0xFF;
      b = u & 0xFF;
      return [r, g, b, 1];
    }
    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
      if (hex.length === 9) {
        hex = hex.substr(1);
      }
      u = parseInt(hex, 16);
      r = u >> 24 & 0xFF;
      g = u >> 16 & 0xFF;
      b = u >> 8 & 0xFF;
      a = round((u & 0xFF) / 0xFF * 100) / 100;
      return [r, g, b, a];
    }
    if ((_input.css != null) && (rgb = _input.css(hex))) {
      return rgb;
    }
    throw "unknown color: " + hex;
  };
  rgb2hex = function(channels, mode) {
    var a, b, g, hxa, r, str, u;
    if (mode == null) {
      mode = 'rgb';
    }
    r = channels[0], g = channels[1], b = channels[2], a = channels[3];
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    u = r << 16 | g << 8 | b;
    str = "000000" + u.toString(16);
    str = str.substr(str.length - 6);
    hxa = '0' + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    return "#" + (function() {
      switch (mode.toLowerCase()) {
        case 'rgba':
          return str + hxa;
        case 'argb':
          return hxa + str;
        default:
          return str;
      }
    })();
  };
  _input.hex = function(h) {
    return hex2rgb(h);
  };
  chroma.hex = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hex']), function(){});
  };
  Color.prototype.hex = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2hex(this._rgb, mode);
  };
  _guess_formats.push({
    p: 4,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "string") {
        return 'hex';
      }
    }
  });
  hsl2rgb = function() {
    var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
    args = unpack(arguments);
    h = args[0], s = args[1], l = args[2];
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      t3 = [0, 0, 0];
      c = [0, 0, 0];
      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      t1 = 2 * l - t2;
      h /= 360;
      t3[0] = h + 1 / 3;
      t3[1] = h;
      t3[2] = h - 1 / 3;
      for (i = o = 0; o <= 2; i = ++o) {
        if (t3[i] < 0) {
          t3[i] += 1;
        }
        if (t3[i] > 1) {
          t3[i] -= 1;
        }
        if (6 * t3[i] < 1) {
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        } else if (2 * t3[i] < 1) {
          c[i] = t2;
        } else if (3 * t3[i] < 2) {
          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
        } else {
          c[i] = t1;
        }
      }
      ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
    }
    if (args.length > 3) {
      return [r, g, b, args[3]];
    } else {
      return [r, g, b];
    }
  };
  rgb2hsl = function(r, g, b) {
    var h, l, min, ref, s;
    if (r !== void 0 && r.length >= 3) {
      ref = r, r = ref[0], g = ref[1], b = ref[2];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }
    if (r === max) {
      h = (g - b) / (max - min);
    } else if (g === max) {
      h = 2 + (b - r) / (max - min);
    } else if (b === max) {
      h = 4 + (r - g) / (max - min);
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return [h, s, l];
  };
  chroma.hsl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsl']), function(){});
  };
  _input.hsl = hsl2rgb;
  Color.prototype.hsl = function() {
    return rgb2hsl(this._rgb);
  };
  hsv2rgb = function() {
    var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
    args = unpack(arguments);
    h = args[0], s = args[1], v = args[2];
    v *= 255;
    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = v * (1 - s);
      q = v * (1 - s * f);
      t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  rgb2hsv = function() {
    var b, delta, g, h, min, r, ref, s, v;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    v = max / 255.0;
    if (max === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max;
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, s, v];
  };
  chroma.hsv = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsv']), function(){});
  };
  _input.hsv = hsv2rgb;
  Color.prototype.hsv = function() {
    return rgb2hsv(this._rgb);
  };
  num2rgb = function(num) {
    var b, g, r;
    if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
      r = num >> 16;
      g = (num >> 8) & 0xFF;
      b = num & 0xFF;
      return [r, g, b, 1];
    }
    console.warn("unknown num color: " + num);
    return [0, 0, 0, 1];
  };
  rgb2num = function() {
    var b, g, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    return (r << 16) + (g << 8) + b;
  };
  chroma.num = function(num) {
    return new Color(num, 'num');
  };
  Color.prototype.num = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2num(this._rgb, mode);
  };
  _input.num = num2rgb;
  _guess_formats.push({
    p: 1,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
        return 'num';
      }
    }
  });
  hcg2rgb = function() {
    var _c, _g, args, b, c, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, t, v;
    args = unpack(arguments);
    h = args[0], c = args[1], _g = args[2];
    c = c / 100;
    g = g / 100 * 255;
    _c = c * 255;
    if (c === 0) {
      r = g = b = _g;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = _g * (1 - c);
      q = p + _c * (1 - f);
      t = p + _c * f;
      v = p + _c;
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  rgb2hcg = function() {
    var _g, b, c, delta, g, h, min, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    c = delta * 100 / 255;
    _g = min / (255 - delta) * 100;
    if (delta === 0) {
      h = Number.NaN;
    } else {
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, c, _g];
  };
  chroma.hcg = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hcg']), function(){});
  };
  _input.hcg = hcg2rgb;
  Color.prototype.hcg = function() {
    return rgb2hcg(this._rgb);
  };
  css2rgb = function(css) {
    var aa, ab, hsl, i, m, o, rgb, w;
    css = css.toLowerCase();
    if ((chroma.colors != null) && chroma.colors[css]) {
      return hex2rgb(chroma.colors[css]);
    }
    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = o = 0; o <= 2; i = ++o) {
        rgb[i] = +rgb[i];
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = w = 0; w <= 3; i = ++w) {
        rgb[i] = +rgb[i];
      }
    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = aa = 0; aa <= 2; i = ++aa) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = ab = 0; ab <= 2; i = ++ab) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = +rgb[3];
    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = 1;
    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = +m[4];
    }
    return rgb;
  };
  rgb2css = function(rgba) {
    var mode;
    mode = rgba[3] < 1 ? 'rgba' : 'rgb';
    if (mode === 'rgb') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
    } else if (mode === 'rgba') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
    } else {
    }
  };
  rnd = function(a) {
    return round(a * 100) / 100;
  };
  hsl2css = function(hsl, alpha) {
    var mode;
    mode = alpha < 1 ? 'hsla' : 'hsl';
    hsl[0] = rnd(hsl[0] || 0);
    hsl[1] = rnd(hsl[1] * 100) + '%';
    hsl[2] = rnd(hsl[2] * 100) + '%';
    if (mode === 'hsla') {
      hsl[3] = alpha;
    }
    return mode + '(' + hsl.join(',') + ')';
  };
  _input.css = function(h) {
    return css2rgb(h);
  };
  chroma.css = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['css']), function(){});
  };
  Color.prototype.css = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    if (mode.slice(0, 3) === 'rgb') {
      return rgb2css(this._rgb);
    } else if (mode.slice(0, 3) === 'hsl') {
      return hsl2css(this.hsl(), this.alpha());
    }
  };
  _input.named = function(name) {
    return hex2rgb(w3cx11[name]);
  };
  _guess_formats.push({
    p: 5,
    test: function(n) {
      if (arguments.length === 1 && (w3cx11[n] != null)) {
        return 'named';
      }
    }
  });
  Color.prototype.name = function(n) {
    var h, k;
    if (arguments.length) {
      if (w3cx11[n]) {
        this._rgb = hex2rgb(w3cx11[n]);
      }
      this._rgb[3] = 1;
      
    }
    h = this.hex();
    for (k in w3cx11) {
      if (h === w3cx11[k]) {
        return k;
      }
    }
    return h;
  };
  lch2lab = function() {
    var c, h, l, ref;
    ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
    h = h * DEG2RAD;
    return [l, cos(h) * c, sin(h) * c];
  };
  lch2rgb = function() {
    var L, a, args, b, c, g, h, l, r, ref, ref1;
    args = unpack(arguments);
    l = args[0], c = args[1], h = args[2];
    ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
    ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  lab2lch = function() {
    var a, b, c, h, l, ref;
    ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
    c = sqrt(a * a + b * b);
    h = (atan2(b, a) * RAD2DEG + 360) % 360;
    if (round(c * 10000) === 0) {
      h = Number.NaN;
    }
    return [l, c, h];
  };
  rgb2lch = function() {
    var a, b, g, l, r, ref, ref1;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
    return lab2lch(l, a, b);
  };
  chroma.lch = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'lch');
  };
  chroma.hcl = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'hcl');
  };
  _input.lch = lch2rgb;
  _input.hcl = function() {
    var c, h, l, ref;
    ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
    return lch2rgb([l, c, h]);
  };
  Color.prototype.lch = function() {
    return rgb2lch(this._rgb);
  };
  Color.prototype.hcl = function() {
    return rgb2lch(this._rgb).reverse();
  };
  rgb2cmyk = function(mode) {
    var b, c, f, g, k, m, r, ref, y;
    if (mode == null) {
      mode = 'rgb';
    }
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = r / 255;
    g = g / 255;
    b = b / 255;
    k = 1 - Math.max(r, Math.max(g, b));
    f = k < 1 ? 1 / (1 - k) : 0;
    c = (1 - r - k) * f;
    m = (1 - g - k) * f;
    y = (1 - b - k) * f;
    return [c, m, y, k];
  };
  cmyk2rgb = function() {
    var alpha, args, b, c, g, k, m, r, y;
    args = unpack(arguments);
    c = args[0], m = args[1], y = args[2], k = args[3];
    alpha = args.length > 4 ? args[4] : 1;
    if (k === 1) {
      return [0, 0, 0, alpha];
    }
    r = c >= 1 ? 0 : 255 * (1 - c) * (1 - k);
    g = m >= 1 ? 0 : 255 * (1 - m) * (1 - k);
    b = y >= 1 ? 0 : 255 * (1 - y) * (1 - k);
    return [r, g, b, alpha];
  };
  _input.cmyk = function() {
    return cmyk2rgb(unpack(arguments));
  };
  chroma.cmyk = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['cmyk']), function(){});
  };
  Color.prototype.cmyk = function() {
    return rgb2cmyk(this._rgb);
  };
  _input.gl = function() {
    var i, k, o, rgb, v;
    rgb = (function() {
      var ref, results;
      ref = unpack(arguments);
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(v);
      }
      return results;
    }).apply(this, arguments);
    for (i = o = 0; o <= 2; i = ++o) {
      rgb[i] *= 255;
    }
    return rgb;
  };
  chroma.gl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['gl']), function(){});
  };
  Color.prototype.gl = function() {
    var rgb;
    rgb = this._rgb;
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
  };
  rgb2luminance = function(r, g, b) {
    var ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  luminance_x = function(x) {
    x /= 255;
    if (x <= 0.03928) {
      return x / 12.92;
    } else {
      return pow((x + 0.055) / 1.055, 2.4);
    }
  };
  _interpolators = [];
  interpolate = function(col1, col2, f, m) {
    var interpol, len, o, res;
    if (f == null) {
      f = 0.5;
    }
    if (m == null) {
      m = 'rgb';
    }
    if (type(col1) !== 'object') {
      col1 = chroma(col1);
    }
    if (type(col2) !== 'object') {
      col2 = chroma(col2);
    }
    for (o = 0, len = _interpolators.length; o < len; o++) {
      interpol = _interpolators[o];
      if (m === interpol[0]) {
        res = interpol[1](col1, col2, f, m);
        break;
      }
    }
    if (res == null) {
      throw "color mode " + m + " is not supported";
    }
    return res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
  };
  chroma.interpolate = interpolate;
  Color.prototype.interpolate = function(col2, f, m) {
    return interpolate(this, col2, f, m);
  };
  chroma.mix = interpolate;
  Color.prototype.mix = Color.prototype.interpolate;
  interpolate_rgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };
  _interpolators.push(['rgb', interpolate_rgb]);
  Color.prototype.luminance = function(lum, mode) {
    var cur_lum, eps, max_iter, test;
    if (mode == null) {
      mode = 'rgb';
    }
    if (!arguments.length) {
      return rgb2luminance(this._rgb);
    }
    if (lum === 0) {
      this._rgb = [0, 0, 0, this._rgb[3]];
    } else if (lum === 1) {
      this._rgb = [255, 255, 255, this._rgb[3]];
    } else {
      eps = 1e-7;
      max_iter = 20;
      test = function(l, h) {
        var lm, m;
        m = l.interpolate(h, 0.5, mode);
        lm = m.luminance();
        if (Math.abs(lum - lm) < eps || !max_iter--) {
          return m;
        }
        if (lm > lum) {
          return test(l, m);
        }
        return test(m, h);
      };
      cur_lum = rgb2luminance(this._rgb);
      this._rgb = (cur_lum > lum ? test(chroma('black'), this) : test(this, chroma('white'))).rgba();
    }
    return this;
  };
  temperature2rgb = function(kelvin) {
    var b, g, r, temp;
    temp = kelvin / 100;
    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }
    return [r, g, b];
  };
  rgb2temperature = function() {
    var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    minTemp = 1000;
    maxTemp = 40000;
    eps = 0.4;
    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      rgb = temperature2rgb(temp);
      if ((rgb[2] / rgb[0]) >= (b / r)) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }
    return round(temp);
  };
  chroma.temperature = chroma.kelvin = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['temperature']), function(){});
  };
  _input.temperature = _input.kelvin = _input.K = temperature2rgb;
  Color.prototype.temperature = function() {
    return rgb2temperature(this._rgb);
  };
  Color.prototype.kelvin = Color.prototype.temperature;
  chroma.contrast = function(a, b) {
    var l1, l2, ref, ref1;
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.luminance();
    l2 = b.luminance();
    if (l1 > l2) {
      return (l1 + 0.05) / (l2 + 0.05);
    } else {
      return (l2 + 0.05) / (l1 + 0.05);
    }
  };
  chroma.distance = function(a, b, mode) {
    var d, i, l1, l2, ref, ref1, sum_sq;
    if (mode == null) {
      mode = 'lab';
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.get(mode);
    l2 = b.get(mode);
    sum_sq = 0;
    for (i in l1) {
      d = (l1[i] || 0) - (l2[i] || 0);
      sum_sq += d * d;
    }
    return Math.sqrt(sum_sq);
  };
  chroma.deltaE = function(a, b, L, C) {
    var L1, L2, a1, a2, b1, b2, c1, c2, c4, dH2, delA, delB, delC, delL, f, h1, ref, ref1, ref2, ref3, sc, sh, sl, t, v1, v2, v3;
    if (L == null) {
      L = 1;
    }
    if (C == null) {
      C = 1;
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    ref2 = a.lab(), L1 = ref2[0], a1 = ref2[1], b1 = ref2[2];
    ref3 = b.lab(), L2 = ref3[0], a2 = ref3[1], b2 = ref3[2];
    c1 = sqrt(a1 * a1 + b1 * b1);
    c2 = sqrt(a2 * a2 + b2 * b2);
    sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + 0.01765 * L1);
    sc = (0.0638 * c1) / (1.0 + 0.0131 * c1) + 0.638;
    h1 = c1 < 0.000001 ? 0.0 : (atan2(b1, a1) * 180.0) / PI;
    while (h1 < 0) {
      h1 += 360;
    }
    while (h1 >= 360) {
      h1 -= 360;
    }
    t = (h1 >= 164.0) && (h1 <= 345.0) ? 0.56 + abs(0.2 * cos((PI * (h1 + 168.0)) / 180.0)) : 0.36 + abs(0.4 * cos((PI * (h1 + 35.0)) / 180.0));
    c4 = c1 * c1 * c1 * c1;
    f = sqrt(c4 / (c4 + 1900.0));
    sh = sc * (f * t + 1.0 - f);
    delL = L1 - L2;
    delC = c1 - c2;
    delA = a1 - a2;
    delB = b1 - b2;
    dH2 = delA * delA + delB * delB - delC * delC;
    v1 = delL / (L * sl);
    v2 = delC / (C * sc);
    v3 = sh;
    return sqrt(v1 * v1 + v2 * v2 + (dH2 / (v3 * v3)));
  };
  Color.prototype.get = function(modechan) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    src = me[mode]();
    if (channel) {
      i = mode.indexOf(channel);
      if (i > -1) {
        return src[i];
      } else {
        return console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      return src;
    }
  };
  Color.prototype.set = function(modechan, value) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    if (channel) {
      src = me[mode]();
      i = mode.indexOf(channel);
      if (i > -1) {
        if (type(value) === 'string') {
          switch (value.charAt(0)) {
            case '+':
              src[i] += +value;
              break;
            case '-':
              src[i] += +value;
              break;
            case '*':
              src[i] *= +(value.substr(1));
              break;
            case '/':
              src[i] /= +(value.substr(1));
              break;
            default:
              src[i] = +value;
          }
        } else {
          src[i] = value;
        }
      } else {
        console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      src = value;
    }
    return chroma(src, mode).alpha(me.alpha());
  };
  Color.prototype.clipped = function() {
    return this._rgb._clipped || false;
  };
  Color.prototype.alpha = function(a) {
    if (arguments.length) {
      return chroma.rgb([this._rgb[0], this._rgb[1], this._rgb[2], a]);
    }
    return this._rgb[3];
  };
  Color.prototype.darken = function(amount) {
    var lab, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lab = me.lab();
    lab[0] -= LAB_CONSTANTS.Kn * amount;
    return chroma.lab(lab).alpha(me.alpha());
  };
  Color.prototype.brighten = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.darken(-amount);
  };
  Color.prototype.darker = Color.prototype.darken;
  Color.prototype.brighter = Color.prototype.brighten;
  Color.prototype.saturate = function(amount) {
    var lch, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lch = me.lch();
    lch[1] += amount * LAB_CONSTANTS.Kn;
    if (lch[1] < 0) {
      lch[1] = 0;
    }
    return chroma.lch(lch).alpha(me.alpha());
  };
  Color.prototype.desaturate = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.saturate(-amount);
  };
  Color.prototype.premultiply = function() {
    var a, rgb;
    rgb = this.rgb();
    a = this.alpha();
    return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
  };
  blend = function(bottom, top, mode) {
    if (!blend[mode]) {
      throw 'unknown blend mode ' + mode;
    }
    return blend[mode](bottom, top);
  };
  blend_f = function(f) {
    return function(bottom, top) {
      var c0, c1;
      c0 = chroma(top).rgb();
      c1 = chroma(bottom).rgb();
      return chroma(f(c0, c1), 'rgb');
    };
  };
  each = function(f) {
    return function(c0, c1) {
      var i, o, out;
      out = [];
      for (i = o = 0; o <= 3; i = ++o) {
        out[i] = f(c0[i], c1[i]);
      }
      return out;
    };
  };
  normal = function(a, b) {
    return a;
  };
  multiply = function(a, b) {
    return a * b / 255;
  };
  darken = function(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  };
  lighten = function(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };
  screen = function(a, b) {
    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
  };
  overlay = function(a, b) {
    if (b < 128) {
      return 2 * a * b / 255;
    } else {
      return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    }
  };
  burn = function(a, b) {
    return 255 * (1 - (1 - b / 255) / (a / 255));
  };
  dodge = function(a, b) {
    if (a === 255) {
      return 255;
    }
    a = 255 * (b / 255) / (1 - a / 255);
    if (a > 255) {
      return 255;
    } else {
      return a;
    }
  };
  blend.normal = blend_f(each(normal));
  blend.multiply = blend_f(each(multiply));
  blend.screen = blend_f(each(screen));
  blend.overlay = blend_f(each(overlay));
  blend.darken = blend_f(each(darken));
  blend.lighten = blend_f(each(lighten));
  blend.dodge = blend_f(each(dodge));
  blend.burn = blend_f(each(burn));
  chroma.blend = blend;
  chroma.analyze = function(data) {
    var len, o, r, val;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    for (o = 0, len = data.length; o < len; o++) {
      val = data[o];
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };
  chroma.scale = function(colors, positions) {
    var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, _useCache, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
    _mode = 'rgb';
    _nacol = chroma('#ccc');
    _spread = 0;
    _domain = [0, 1];
    _pos = [];
    _padding = [0, 0];
    _classes = false;
    _colors = [];
    _out = false;
    _min = 0;
    _max = 1;
    _correctLightness = false;
    _colorCache = {};
    _useCache = true;
    setColors = function(colors) {
      var c, col, o, ref, ref1, w;
      if (colors == null) {
        colors = ['#fff', '#000'];
      }
      if ((colors != null) && type(colors) === 'string' && (chroma.brewer != null)) {
        colors = chroma.brewer[colors] || chroma.brewer[colors.toLowerCase()] || colors;
      }
      if (type(colors) === 'array') {
        colors = colors.slice(0);
        for (c = o = 0, ref = colors.length - 1; 0 <= ref ? o <= ref : o >= ref; c = 0 <= ref ? ++o : --o) {
          col = colors[c];
          if (type(col) === "string") {
            colors[c] = chroma(col);
          }
        }
        _pos.length = 0;
        for (c = w = 0, ref1 = colors.length - 1; 0 <= ref1 ? w <= ref1 : w >= ref1; c = 0 <= ref1 ? ++w : --w) {
          _pos.push(c / (colors.length - 1));
        }
      }
      resetCache();
      return _colors = colors;
    };
    getClass = function(value) {
      var i, n;
      if (_classes != null) {
        n = _classes.length - 1;
        i = 0;
        while (i < n && value >= _classes[i]) {
          i++;
        }
        return i - 1;
      }
      return 0;
    };
    tmap = function(t) {
      return t;
    };
    getColor = function(val, bypassMap) {
      var c, col, i, k, o, p, ref, t;
      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val)) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          c = getClass(val);
          t = c / (_classes.length - 2);
          t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
        } else if (_max !== _min) {
          t = (val - _min) / (_max - _min);
          t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
          t = Math.min(1, Math.max(0, t));
        } else {
          t = 1;
        }
      } else {
        t = val;
      }
      if (!bypassMap) {
        t = tmap(t);
      }
      k = Math.floor(t * 10000);
      if (_useCache && _colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type(_colors) === 'array') {
          for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
            p = _pos[i];
            if (t <= p) {
              col = _colors[i];
              break;
            }
            if (t >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }
            if (t > p && t < _pos[i + 1]) {
              t = (t - p) / (_pos[i + 1] - p);
              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
              break;
            }
          }
        } else if (type(_colors) === 'function') {
          col = _colors(t);
        }
        if (_useCache) {
          _colorCache[k] = col;
        }
      }
      return col;
    };
    resetCache = function() {
      return _colorCache = {};
    };
    setColors(colors);
    f = function(v) {
      var c;
      c = chroma(getColor(v));
      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };
    f.classes = function(classes) {
      var d;
      if (classes != null) {
        if (type(classes) === 'array') {
          _classes = classes;
          _domain = [classes[0], classes[classes.length - 1]];
        } else {
          d = chroma.analyze(_domain);
          if (classes === 0) {
            _classes = [d.min, d.max];
          } else {
            _classes = chroma.limits(d, 'e', classes);
          }
        }
        return f;
      }
      return _classes;
    };
    f.domain = function(domain) {
      var c, d, k, len, o, ref, w;
      if (!arguments.length) {
        return _domain;
      }
      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      k = _colors.length;
      if (domain.length === k && _min !== _max) {
        for (o = 0, len = domain.length; o < len; o++) {
          d = domain[o];
          _pos.push((d - _min) / (_max - _min));
        }
      } else {
        for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
          _pos.push(c / (k - 1));
        }
      }
      _domain = [_min, _max];
      return f;
    };
    f.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f;
    };
    f.range = function(colors, _pos) {
      setColors(colors, _pos);
      return f;
    };
    f.out = function(_o) {
      _out = _o;
      return f;
    };
    f.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f;
    };
    f.correctLightness = function(v) {
      if (v == null) {
        v = true;
      }
      _correctLightness = v;
      resetCache();
      if (_correctLightness) {
        tmap = function(t) {
          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
          L0 = getColor(0, true).lab()[0];
          L1 = getColor(1, true).lab()[0];
          pol = L0 > L1;
          L_actual = getColor(t, true).lab()[0];
          L_ideal = L0 + (L1 - L0) * t;
          L_diff = L_actual - L_ideal;
          t0 = 0;
          t1 = 1;
          max_iter = 20;
          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t;
                t += (t1 - t) * 0.5;
              } else {
                t1 = t;
                t += (t0 - t) * 0.5;
              }
              L_actual = getColor(t, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t;
        };
      } else {
        tmap = function(t) {
          return t;
        };
      }
      return f;
    };
    f.padding = function(p) {
      if (p != null) {
        if (type(p) === 'number') {
          p = [p, p];
        }
        _padding = p;
        return f;
      } else {
        return _padding;
      }
    };
    f.colors = function(numColors, out) {
      var dd, dm, i, o, ref, result, results, samples, w;
      if (arguments.length < 2) {
        out = 'hex';
      }
      result = [];
      if (arguments.length === 0) {
        result = _colors.slice(0);
      } else if (numColors === 1) {
        result = [f(0.5)];
      } else if (numColors > 1) {
        dm = _domain[0];
        dd = _domain[1] - dm;
        result = (function() {
          results = [];
          for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
          return results;
        }).apply(this).map(function(i) {
          return f(dm + i / (numColors - 1) * dd);
        });
      } else {
        colors = [];
        samples = [];
        if (_classes && _classes.length > 2) {
          for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _domain;
        }
        result = samples.map(function(v) {
          return f(v);
        });
      }
      if (chroma[out]) {
        result = result.map(function(c) {
          return c[out]();
        });
      }
      return result;
    };
    f.cache = function(c) {
      if (c != null) {
        return _useCache = c;
      } else {
        return _useCache;
      }
    };
    return f;
  };
  if (chroma.scales == null) {
    chroma.scales = {};
  }
  chroma.scales.cool = function() {
    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
  };
  chroma.scales.hot = function() {
    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
  };
  chroma.analyze = function(data, key, filter) {
    var add, k, len, o, r, val, visit;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (filter == null) {
      filter = function() {
        return true;
      };
    }
    add = function(val) {
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    };
    visit = function(val, k) {
      if (filter(val, k)) {
        if ((key != null) && type(key) === 'function') {
          return add(key(val));
        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
          return add(val[key]);
        } else {
          return add(val);
        }
      }
    };
    if (type(data) === 'array') {
      for (o = 0, len = data.length; o < len; o++) {
        val = data[o];
        visit(val);
      }
    } else {
      for (k in data) {
        val = data[k];
        visit(val, k);
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };
  chroma.limits = function(data, mode, num) {
    var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, v, value, values, w;
    if (mode == null) {
      mode = 'equal';
    }
    if (num == null) {
      num = 7;
    }
    if (type(data) === 'array') {
      data = chroma.analyze(data);
    }
    min = data.min;
    max = data.max;
    sum = data.sum;
    values = data.values.sort(function(a, b) {
      return a - b;
    });
    if (num === 1) {
      return [min, max];
    }
    limits = [];
    if (mode.substr(0, 1) === 'c') {
      limits.push(min);
      limits.push(max);
    }
    if (mode.substr(0, 1) === 'e') {
      limits.push(min);
      for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
        limits.push(min + (i / num) * (max - min));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
      if (min <= 0) {
        throw 'Logarithmic scales are only possible for values > 0';
      }
      min_log = Math.LOG10E * log(min);
      max_log = Math.LOG10E * log(max);
      limits.push(min);
      for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
        limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
      limits.push(min);
      for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
        p = (values.length - 1) * i / num;
        pb = floor(p);
        if (pb === p) {
          limits.push(values[pb]);
        } else {
          pr = p - pb;
          limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
        }
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {
      n = values.length;
      assignments = new Array(n);
      clusterSizes = new Array(num);
      repeat = true;
      nb_iters = 0;
      centroids = null;
      centroids = [];
      centroids.push(min);
      for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
        centroids.push(min + (i / num) * (max - min));
      }
      centroids.push(max);
      while (repeat) {
        for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
          clusterSizes[j] = 0;
        }
        for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
          value = values[i];
          mindist = Number.MAX_VALUE;
          for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
            dist = abs(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
        newCentroids = new Array(num);
        for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
          newCentroids[j] = null;
        }
        for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
          cluster = assignments[i];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i];
          } else {
            newCentroids[cluster] += values[i];
          }
        }
        for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
          if (newCentroids[j] !== centroids[i]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      kClusters = {};
      for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
        kClusters[j] = [];
      }
      for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
        cluster = assignments[i];
        kClusters[cluster].push(values[i]);
      }
      tmpKMeansBreaks = [];
      for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
        return a - b;
      });
      limits.push(tmpKMeansBreaks[0]);
      for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
        v = tmpKMeansBreaks[i];
        if (!isNaN(v) && limits.indexOf(v) === -1) {
          limits.push(v);
        }
      }
    }
    return limits;
  };
  hsi2rgb = function(h, s, i) {
    var args, b, g, r;
    args = unpack(arguments);
    h = args[0], s = args[1], i = args[2];
    if (isNaN(h)) {
      h = 0;
    }
    h /= 360;
    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      r = 1 - (g + b);
    }
    r = limit(i * r * 3);
    g = limit(i * g * 3);
    b = limit(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
  };
  rgb2hsi = function() {
    var b, g, h, i, min, r, ref, s;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    TWOPI = Math.PI * 2;
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    i = (r + g + b) / 3;
    s = 1 - min / i;
    if (s === 0) {
      h = 0;
    } else {
      h = ((r - g) + (r - b)) / 2;
      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
      h = Math.acos(h);
      if (b > g) {
        h = TWOPI - h;
      }
      h /= TWOPI;
    }
    return [h * 360, s, i];
  };
  chroma.hsi = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsi']), function(){});
  };
  _input.hsi = hsi2rgb;
  Color.prototype.hsi = function() {
    return rgb2hsi(this._rgb);
  };
  interpolate_hsx = function(col1, col2, f, m) {
    var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
    if (m === 'hsl') {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m === 'hsv') {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m === 'hcg') {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m === 'hsi') {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m === 'lch' || m === 'hcl') {
      m = 'hcl';
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    }
    if (m.substr(0, 1) === 'h') {
      hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
      hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
    }
    if (!isNaN(hue0) && !isNaN(hue1)) {
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh = hue1 + 360 - hue0;
      } else {
        dh = hue1 - hue0;
      }
      hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
      hue = hue0;
      if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
        sat = sat0;
      }
    } else if (!isNaN(hue1)) {
      hue = hue1;
      if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
        sat = sat1;
      }
    } else {
      hue = Number.NaN;
    }
    if (sat == null) {
      sat = sat0 + f * (sat1 - sat0);
    }
    lbv = lbv0 + f * (lbv1 - lbv0);
    return res = chroma[m](hue, sat, lbv);
  };
  _interpolators = _interpolators.concat((function() {
    var len, o, ref, results;
    ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch', 'hcg'];
    results = [];
    for (o = 0, len = ref.length; o < len; o++) {
      m = ref[o];
      results.push([m, interpolate_hsx]);
    }
    return results;
  })());
  interpolate_num = function(col1, col2, f, m) {
    var n1, n2;
    n1 = col1.num();
    n2 = col2.num();
    return chroma.num(n1 + (n2 - n1) * f, 'num');
  };
  _interpolators.push(['num', interpolate_num]);
  interpolate_lab = function(col1, col2, f, m) {
    var res, xyz0, xyz1;
    xyz0 = col1.lab();
    xyz1 = col2.lab();
    return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };
  _interpolators.push(['lab', interpolate_lab]);
}).call(commonjsGlobal);
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
function getColorScale(colorArray) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.assign({
    bezierInterpolate: false,
    correctLightness: true,
    interpolationMode: 'lab'
  }, options);
  var scale = options.bezierInterpolate ? chroma.bezier(colorArray).scale() : chroma.scale(colorArray).mode(options.interpolationMode);
  if (options.correctLightness) scale = scale.correctLightness();
  return function (value) {
    return scale(value).css();
  };
}
function optimizePointSpread(stat, options) {
  options = Object.assign({
    epsilon: 0.000001,
    gamma: 0.3,
    maxIteration: 300
  }, options);
  var values = stat.values,
      min = stat.min,
      max = stat.max;
  var domain = options.domain || [min, max];
  var v = Object.keys(values).map(function (key) {
    return (values[key] - domain[0]) / (domain[1] - domain[0]);
  });
  v.sort(function (a, b) {
    return a - b;
  });
  var k = 1;
  var kHistory = [];
  var scoreHistory = [];
  var _loop = function _loop() {
    var vk = v.map(function (item) {
      return Math.pow(item, k);
    });
    var lnV = v.map(function (item) {
      return item ? Math.log(item) : 0;
    });
    var deltaVk = [];
    var deltalnVvk = [];
    for (var i = 1; i < v.length; i++) {
      deltaVk.push(vk[i] - vk[i - 1]);
      deltalnVvk.push(lnV[i] * vk[i] - lnV[i - 1] * vk[i - 1]);
    }
    var beta = deltaVk.reduce(function (sum, dVk, i) {
      return sum + 2 * dVk * deltalnVvk[i];
    }, 0);
    var score = deltaVk.reduce(function (sum, dVn) {
      return sum + Math.pow(dVn, 2);
    }, 0);
    kHistory.push(k);
    scoreHistory.push(score);
    k = Math.exp(Math.log(k) - options.gamma * beta * k);
    if (scoreHistory.length >= 2) {
      var _scoreHistory$slice = scoreHistory.slice(-2),
          _scoreHistory$slice2 = _slicedToArray(_scoreHistory$slice, 2),
          prevScore = _scoreHistory$slice2[0],
          lastScore = _scoreHistory$slice2[1];
      if (Math.abs(lastScore - prevScore) < options.epsilon) return 'break';
    }
  };
  while (kHistory.length < options.maxIteration) {
    var _ret = _loop();
    if (_ret === 'break') break;
  }
  return { domain: domain, transform: k, kHistory: kHistory, scoreHistory: scoreHistory };
}


function GnBu() {
  return getColorScale('GnBu', { correctLightness: false });
}








function YlOrRd() {
  return getColorScale('YlOrRd', { correctLightness: false });
}

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag;

var objectProto$1 = Object.prototype;
var nativeObjectToString$1 = objectProto$1.toString;
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}
var _objectToString = objectToString;

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}
var _baseGetTag = baseGetTag;

function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
var isObjectLike_1 = isObjectLike;

var symbolTag = '[object Symbol]';
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}
var isSymbol_1 = isSymbol;

function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;
  while (++index < length) {
    var value = array[index],
        current = iteratee(value);
    if (current != null && (computed === undefined
          ? (current === current && !isSymbol_1(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}
var _baseExtremum = baseExtremum;

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear;

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
var eq_1 = eq;

function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf;

var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete;

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
var _listCacheGet = listCacheGet;

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas;

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet;

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;

function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}
var _stackClear = stackClear;

function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete;

function stackGet(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet;

function stackHas(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas;

function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject;

var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction;

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;

var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
var _isMasked = isMasked;

var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
var _toSource = toSource;

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype;
var objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}
var _baseIsNative = baseIsNative;

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
var _getValue = getValue;

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}
var _getNative = getNative;

var Map = _getNative(_root, 'Map');
var _Map = Map;

var nativeCreate = _getNative(Object, 'create');
var _nativeCreate = nativeCreate;

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}
var _hashClear = hashClear;

function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete;

var HASH_UNDEFINED = '__lodash_hash_undefined__';
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}
var _hashGet = hashGet;

var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}
var _hashHas = hashHas;

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet;

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}
var _mapCacheClear = mapCacheClear;

function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
var _isKeyable = isKeyable;

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
var _getMapData = getMapData;

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete;

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}
var _mapCacheGet = mapCacheGet;

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}
var _mapCacheHas = mapCacheHas;

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet;

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;

var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet;

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;

var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}
var _setCacheAdd = setCacheAdd;

function setCacheHas(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas;

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
var _SetCache = SetCache;

function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome;

function cacheHas(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas;

var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      arrLength = array.length,
      othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new _SetCache : undefined;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];
    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
var _equalArrays = equalArrays;

var Uint8Array = _root.Uint8Array;
var _Uint8Array = Uint8Array;

function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray;

function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray;

var COMPARE_PARTIAL_FLAG$3 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag$1 = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq_1(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == (other + '');
    case mapTag:
      var convert = _mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3;
      convert || (convert = _setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag;

function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush;

var isArray = Array.isArray;
var isArray_1 = isArray;

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys;

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter;

function stubArray() {
  return [];
}
var stubArray_1 = stubArray;

var objectProto$7 = Object.prototype;
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols;

function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes;

var argsTag$1 = '[object Arguments]';
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments;

var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$7.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};
var isArguments_1 = isArguments;

function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? _root.Buffer : undefined;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
var isBuffer = nativeIsBuffer || stubFalse_1;
module.exports = isBuffer;
});

var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex;

var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength;

var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag$1 = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray;

function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && _freeGlobal.process;
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());
module.exports = nodeUtil;
});

var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;

var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           key == 'length' ||
           (isBuff && (key == 'offset' || key == 'parent')) ||
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys;

var objectProto$11 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$11;
  return value === proto;
}
var _isPrototype = isPrototype;

function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg;

var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;

var objectProto$10 = Object.prototype;
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys;

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}
var isArrayLike_1 = isArrayLike;

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}
var keys_1 = keys;

function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}
var _getAllKeys = getAllKeys;

var COMPARE_PARTIAL_FLAG$4 = 1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$5.call(other, key))) {
      return false;
    }
  }
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];
    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
var _equalObjects = equalObjects;

var DataView = _getNative(_root, 'DataView');
var _DataView = DataView;

var Promise$1 = _getNative(_root, 'Promise');
var _Promise = Promise$1;

var Set = _getNative(_root, 'Set');
var _Set = Set;

var WeakMap = _getNative(_root, 'WeakMap');
var _WeakMap = WeakMap;

var mapTag$2 = '[object Map]';
var objectTag$2 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);
var getTag = _baseGetTag;
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag;

var COMPARE_PARTIAL_FLAG$1 = 1;
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var objectTag = '[object Object]';
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag : _getTag(object),
      othTag = othIsArr ? arrayTag : _getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$4.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep;

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var _baseIsEqual = baseIsEqual;

var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch;

function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}
var _isStrictComparable = isStrictComparable;

function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;
  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}
var _getMatchData = getMatchData;

function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}
var _matchesStrictComparable = matchesStrictComparable;

function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches;

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}
var _isKey = isKey;

var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}
memoize.Cache = _MapCache;
var memoize_1 = memoize;

var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped;

var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});
var _stringToPath = stringToPath;

function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap;

var INFINITY = 1 / 0;
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
var _baseToString = baseToString;

function toString(value) {
  return value == null ? '' : _baseToString(value);
}
var toString_1 = toString;

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}
var _castPath = castPath;

var INFINITY$1 = 1 / 0;
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}
var _toKey = toKey;

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;
  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}
var _baseGet = baseGet;

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
var get_1 = get;

function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn;

function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;
  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}
var _hasPath = hasPath;

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}
var hasIn_1 = hasIn;

var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}
var _baseMatchesProperty = baseMatchesProperty;

function identity(value) {
  return value;
}
var identity_1 = identity;

function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}
var _baseProperty = baseProperty;

function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep;

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}
var property_1 = property;

function baseIteratee(value) {
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}
var _baseIteratee = baseIteratee;

function baseLt(value, other) {
  return value < other;
}
var _baseLt = baseLt;

function minBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, _baseIteratee(iteratee, 2), _baseLt)
    : undefined;
}
var minBy_1 = minBy;

function baseGt(value, other) {
  return value > other;
}
var _baseGt = baseGt;

function maxBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, _baseIteratee(iteratee, 2), _baseGt)
    : undefined;
}
var maxBy_1 = maxBy;

function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());
var _defineProperty$1 = defineProperty;

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue;

var objectProto$12 = Object.prototype;
var hasOwnProperty$9 = objectProto$12.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$9.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}
var _assignValue = assignValue;

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject;

function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}
var _baseAssign = baseAssign;

function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn;

var objectProto$13 = Object.prototype;
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$10.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn;

function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}
var keysIn_1 = keysIn$1;

function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}
var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
module.exports = cloneBuffer;
});

function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray;

function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}
var _copySymbols = copySymbols;

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn;

function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}
var _copySymbolsIn = copySymbolsIn;

function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn;

var objectProto$14 = Object.prototype;
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);
  if (length && typeof array[0] == 'string' && hasOwnProperty$11.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray;

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer;

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView;

function addMapEntry(map, pair) {
  map.set(pair[0], pair[1]);
  return map;
}
var _addMapEntry = addMapEntry;

function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce;

var CLONE_DEEP_FLAG$2 = 1;
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_mapToArray(map), CLONE_DEEP_FLAG$2) : _mapToArray(map);
  return _arrayReduce(array, _addMapEntry, new map.constructor);
}
var _cloneMap = cloneMap;

var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp;

function addSetEntry(set, value) {
  set.add(value);
  return set;
}
var _addSetEntry = addSetEntry;

var CLONE_DEEP_FLAG$3 = 1;
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_setToArray(set), CLONE_DEEP_FLAG$3) : _setToArray(set);
  return _arrayReduce(array, _addSetEntry, new set.constructor);
}
var _cloneSet = cloneSet;

var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol;

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray;

var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var mapTag$4 = '[object Map]';
var numberTag$3 = '[object Number]';
var regexpTag$3 = '[object RegExp]';
var setTag$4 = '[object Set]';
var stringTag$3 = '[object String]';
var symbolTag$3 = '[object Symbol]';
var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return _cloneArrayBuffer(object);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);
    case dataViewTag$4:
      return _cloneDataView(object, isDeep);
    case float32Tag$2: case float64Tag$2:
    case int8Tag$2: case int16Tag$2: case int32Tag$2:
    case uint8Tag$2: case uint8ClampedTag$2: case uint16Tag$2: case uint32Tag$2:
      return _cloneTypedArray(object, isDeep);
    case mapTag$4:
      return _cloneMap(object, isDeep, cloneFunc);
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$3:
      return _cloneRegExp(object);
    case setTag$4:
      return _cloneSet(object, isDeep, cloneFunc);
    case symbolTag$3:
      return _cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag;

var objectCreate = Object.create;
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());
var _baseCreate = baseCreate;

function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}
var _initCloneObject = initCloneObject;

var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var errorTag$2 = '[object Error]';
var funcTag$2 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var objectTag$3 = '[object Object]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$2 = '[object Symbol]';
var weakMapTag$2 = '[object WeakMap]';
var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] =
cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] =
cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$3] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] =
cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] =
cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);
  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
var _baseClone = baseClone;

var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;

function isEqual(value, other) {
  return _baseIsEqual(value, other);
}
var isEqual_1 = isEqual;

function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
var _arrayAggregator = arrayAggregator;

function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor;

var baseFor = _createBaseFor();
var _baseFor = baseFor;

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}
var _baseForOwn = baseForOwn;

function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);
    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach;

var baseEach = _createBaseEach(_baseForOwn);
var _baseEach = baseEach;

function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}
var _baseAggregator = baseAggregator;

function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};
    return func(collection, setter, _baseIteratee(iteratee, 2), accumulator);
  };
}
var _createAggregator = createAggregator;

var partition = _createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });
var partition_1 = partition;

var polyline_1 = createCommonjsModule(function (module) {
var polyline = {};
function py2_round(value) {
    return Math.floor(Math.abs(value) + 0.5) * Math.sign(value);
}
function encode(current, previous, factor) {
    current = py2_round(current * factor);
    previous = py2_round(previous * factor);
    var coordinate = current - previous;
    coordinate <<= 1;
    if (current - previous < 0) {
        coordinate = ~coordinate;
    }
    var output = '';
    while (coordinate >= 0x20) {
        output += String.fromCharCode((0x20 | (coordinate & 0x1f)) + 63);
        coordinate >>= 5;
    }
    output += String.fromCharCode(coordinate + 63);
    return output;
}
polyline.decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 5);
    while (index < str.length) {
        byte = null;
        shift = 0;
        result = 0;
        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);
        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
        shift = result = 0;
        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);
        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += latitude_change;
        lng += longitude_change;
        coordinates.push([lat / factor, lng / factor]);
    }
    return coordinates;
};
polyline.encode = function(coordinates, precision) {
    if (!coordinates.length) { return ''; }
    var factor = Math.pow(10, precision || 5),
        output = encode(coordinates[0][0], 0, factor) + encode(coordinates[0][1], 0, factor);
    for (var i = 1; i < coordinates.length; i++) {
        var a = coordinates[i], b = coordinates[i - 1];
        output += encode(a[0], b[0], factor);
        output += encode(a[1], b[1], factor);
    }
    return output;
};
function flipped(coords) {
    var flipped = [];
    for (var i = 0; i < coords.length; i++) {
        flipped.push(coords[i].slice().reverse());
    }
    return flipped;
}
polyline.fromGeoJSON = function(geojson, precision) {
    if (geojson && geojson.type === 'Feature') {
        geojson = geojson.geometry;
    }
    if (!geojson || geojson.type !== 'LineString') {
        throw new Error('Input must be a GeoJSON LineString');
    }
    return polyline.encode(flipped(geojson.coordinates), precision);
};
polyline.toGeoJSON = function(str, precision) {
    var coords = polyline.decode(str, precision);
    return {
        type: 'LineString',
        coordinates: flipped(coords)
    };
};
if ('object' === 'object' && module.exports) {
    module.exports = polyline;
}
});

function SVY21(config) {
  var defaultConfig = {
    a: 6378137,
    f: 1 / 298.257223563,
    oLat: 1.366666,
    oLon: 103.833333,
    oN: 38744.572,
    oE: 28001.642,
    k: 1
  };
  Object.assign(this, defaultConfig, config);
  this.b = this.a * (1 - this.f);
  this.e2 = 2 * this.f - this.f * this.f;
  this.e4 = this.e2 * this.e2;
  this.e6 = this.e4 * this.e2;
  this.A0 = 1 - this.e2 / 4 - 3 * this.e4 / 64 - 5 * this.e6 / 256;
  this.A2 = 3.0 / 8.0 * (this.e2 + this.e4 / 4 + 15 * this.e6 / 128);
  this.A4 = 15.0 / 256.0 * (this.e4 + 3 * this.e6 / 4);
  this.A6 = 35 * this.e6 / 3072;
}
SVY21.prototype.computeSVY21 = function (lat, lon) {
  var latR = lat * Math.PI / 180;
  var sinLat = Math.sin(latR);
  var sin2Lat = sinLat * sinLat;
  var cosLat = Math.cos(latR);
  var cos2Lat = cosLat * cosLat;
  var cos3Lat = cos2Lat * cosLat;
  var cos4Lat = cos3Lat * cosLat;
  var cos5Lat = cos4Lat * cosLat;
  var cos6Lat = cos5Lat * cosLat;
  var cos7Lat = cos6Lat * cosLat;
  var rho = this.calcRho(sin2Lat);
  var v = this.calcV(sin2Lat);
  var psi = v / rho;
  var t = Math.tan(latR);
  var w = (lon - this.oLon) * Math.PI / 180;
  var M = this.calcM(lat);
  var Mo = this.calcM(this.oLat);
  var w2 = w * w;
  var w4 = w2 * w2;
  var w6 = w4 * w2;
  var w8 = w6 * w2;
  var psi2 = psi * psi;
  var psi3 = psi2 * psi;
  var psi4 = psi3 * psi;
  var t2 = t * t;
  var t4 = t2 * t2;
  var t6 = t4 * t2;
  var nTerm1 = w2 / 2 * v * sinLat * cosLat;
  var nTerm2 = w4 / 24 * v * sinLat * cos3Lat * (4 * psi2 + psi - t2);
  var nTerm3 = w6 / 720 * v * sinLat * cos5Lat * (8 * psi4 * (11 - 24 * t2) - 28 * psi3 * (1 - 6 * t2) + psi2 * (1 - 32 * t2) - psi * 2 * t2 + t4);
  var nTerm4 = w8 / 40320 * v * sinLat * cos7Lat * (1385 - 3111 * t2 + 543 * t4 - t6);
  var N = this.oN + this.k * (M - Mo + nTerm1 + nTerm2 + nTerm3 + nTerm4);
  var eTerm1 = w2 / 6 * cos2Lat * (psi - t2);
  var eTerm2 = w4 / 120 * cos4Lat * (4 * psi3 * (1 - 6 * t2) + psi2 * (1 + 8 * t2) - psi * 2 * t2 + t4);
  var eTerm3 = w6 / 5040 * cos6Lat * (61 - 479 * t2 + 179 * t4 - t6);
  var E = this.oE + this.k * v * w * cosLat * (1 + eTerm1 + eTerm2 + eTerm3);
  return { N: N, E: E };
};
SVY21.prototype.computeLatLon = function (N, E) {
  var Nprime = N - this.oN;
  var Mo = this.calcM(this.oLat);
  var Mprime = Mo + Nprime / this.k;
  var n = (this.a - this.b) / (this.a + this.b);
  var n2 = n * n;
  var n3 = n2 * n;
  var n4 = n2 * n2;
  var G = this.a * (1 - n) * (1 - n2) * (1 + 9 * n2 / 4 + 225 * n4 / 64) * (Math.PI / 180);
  var sigma = Mprime * Math.PI / (180.0 * G);
  var latPrimeT1 = (3 * n / 2 - 27 * n3 / 32) * Math.sin(2 * sigma);
  var latPrimeT2 = (21 * n2 / 16 - 55 * n4 / 32) * Math.sin(4 * sigma);
  var latPrimeT3 = 151 * n3 / 96 * Math.sin(6 * sigma);
  var latPrimeT4 = 1097 * n4 / 512 * Math.sin(8 * sigma);
  var latPrime = sigma + latPrimeT1 + latPrimeT2 + latPrimeT3 + latPrimeT4;
  var sinLatPrime = Math.sin(latPrime);
  var sin2LatPrime = sinLatPrime * sinLatPrime;
  var rhoPrime = this.calcRho(sin2LatPrime);
  var vPrime = this.calcV(sin2LatPrime);
  var psiPrime = vPrime / rhoPrime;
  var psiPrime2 = psiPrime * psiPrime;
  var psiPrime3 = psiPrime2 * psiPrime;
  var psiPrime4 = psiPrime3 * psiPrime;
  var tPrime = Math.tan(latPrime);
  var tPrime2 = tPrime * tPrime;
  var tPrime4 = tPrime2 * tPrime2;
  var tPrime6 = tPrime4 * tPrime2;
  var Eprime = E - this.oE;
  var x = Eprime / (this.k * vPrime);
  var x2 = x * x;
  var x3 = x2 * x;
  var x5 = x3 * x2;
  var x7 = x5 * x2;
  var latFactor = tPrime / (this.k * rhoPrime);
  var latTerm1 = latFactor * (Eprime * x / 2);
  var latTerm2 = latFactor * (Eprime * x3 / 24) * (-4 * psiPrime2 + 9 * psiPrime * (1 - tPrime2) + 12 * tPrime2);
  var latTerm3 = latFactor * (Eprime * x5 / 720) * (8 * psiPrime4 * (11 - 24 * tPrime2) - 12 * psiPrime3 * (21 - 71 * tPrime2) + 15 * psiPrime2 * (15 - 98 * tPrime2 + 15 * tPrime4) + 180 * psiPrime * (5 * tPrime2 - 3 * tPrime4) + 360 * tPrime4);
  var latTerm4 = latFactor * (Eprime * x7 / 40320) * (1385 - 3633 * tPrime2 + 4095 * tPrime4 + 1575 * tPrime6);
  var lat = latPrime - latTerm1 + latTerm2 - latTerm3 + latTerm4;
  var secLatPrime = 1.0 / Math.cos(lat);
  var lonTerm1 = x * secLatPrime;
  var lonTerm2 = x3 * secLatPrime / 6 * (psiPrime + 2 * tPrime2);
  var lonTerm3 = x5 * secLatPrime / 120 * (-4 * psiPrime3 * (1 - 6 * tPrime2) + psiPrime2 * (9 - 68 * tPrime2) + 72 * psiPrime * tPrime2 + 24 * tPrime4);
  var lonTerm4 = x7 * secLatPrime / 5040 * (61 + 662 * tPrime2 + 1320 * tPrime4 + 720 * tPrime6);
  var lon = this.oLon * Math.PI / 180 + lonTerm1 - lonTerm2 + lonTerm3 - lonTerm4;
  return { lat: lat / (Math.PI / 180), lon: lon / (Math.PI / 180) };
};
SVY21.prototype.calcM = function (lat, lon) {
  var latR = lat * Math.PI / 180;
  return this.a * (this.A0 * latR - this.A2 * Math.sin(2 * latR) + this.A4 * Math.sin(4 * latR) - this.A6 * Math.sin(6 * latR));
};
SVY21.prototype.calcRho = function (sin2Lat) {
  var num = this.a * (1 - this.e2);
  var denom = Math.pow(1 - this.e2 * sin2Lat, 3.0 / 2.0);
  return num / denom;
};
SVY21.prototype.calcV = function (sin2Lat) {
  var poly = 1 - this.e2 * sin2Lat;
  return this.a / Math.sqrt(poly);
};

var _slicedToArray$2 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var PRECISION = 7;
var svy21 = new SVY21();
function inside(_ref, polyline$$1) {
  var _ref2 = _slicedToArray$2(_ref, 2),
      lng = _ref2[0],
      lat = _ref2[1];
  var isInside = false;
  for (var i = 1; i < polyline$$1.length; i++) {
    var deltaY_plus = polyline$$1[i][1] - lat;
    var deltaY_minus = lat - polyline$$1[i - 1][1];
    if (deltaY_plus > 0 && deltaY_minus <= 0) continue;
    if (deltaY_plus < 0 && deltaY_minus >= 0) continue;
    var deltaX = (deltaY_plus * polyline$$1[i - 1][0] + deltaY_minus * polyline$$1[i][0]) / (deltaY_plus + deltaY_minus) - lng;
    if (deltaX <= 0) continue;
    isInside = !isInside;
  }
  return isInside;
}
function encodePolyline(arr) {
  return polyline_1.encode(arr, PRECISION);
}
function decodePolyline(str) {
  return polyline_1.decode(str, PRECISION).map(function (_ref3) {
    var _ref4 = _slicedToArray$2(_ref3, 2),
        lng = _ref4[0],
        lat = _ref4[1];
    return [Math.round(lng * Math.pow(10, PRECISION - 2)) / Math.pow(10, PRECISION - 2), Math.round(lat * Math.pow(10, PRECISION - 2)) / Math.pow(10, PRECISION - 2)];
  });
}


function toLinearRing(polyline$$1) {
  var linearRing = typeof polyline$$1 === 'string' ? decodePolyline(polyline$$1) : cloneDeep_1(polyline$$1);
  var firstPoint = linearRing[0];
  var lastPoint = linearRing[linearRing.length - 1];
  if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
    linearRing.push(firstPoint);
  }
  return linearRing;
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var SgHeatmap = function () {
  function SgHeatmap(data) {
    _classCallCheck(this, SgHeatmap);
    var _data = typeof data === 'string' ? JSON.parse(data) : data;
    if (!(_data instanceof Array)) throw new Error('Expects an array of feature objects');
    this.children = _data.map(function (f) {
      return new Feature(f);
    });
    this._defaultState = {};
    this._updaters = [];
    this._stats = {};
  }
  _createClass(SgHeatmap, [{
    key: 'setDefaultState',
    value: function setDefaultState(_key, value) {
      this._defaultState[_key] = value;
      this.children.forEach(function (c) {
        if (_key in c.state) return;
        c.state[_key] = cloneDeep_1(value);
      });
      return this;
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      var _this = this;
      this.children.forEach(function (c) {
        c.state = cloneDeep_1(_this._defaultState);
      });
      return this;
    }
  }, {
    key: 'registerUpdater',
    value: function registerUpdater(fn) {
      this._updaters.push(fn);
      return this;
    }
  }, {
    key: 'inspectUpdaters',
    value: function inspectUpdaters() {
      this._updaters.map(function (fn, i) {
        console.log('Inspecting updater "' + (i + 1) + '"');
        console.log(fn);
      });
    }
  }, {
    key: 'registerStat',
    value: function registerStat(key, fn) {
      this._stats[key] = fn;
      return this;
    }
  }, {
    key: 'inspectStats',
    value: function inspectStats() {
      var _this2 = this;
      Object.keys(this._stats).forEach(function (key, i) {
        console.log('Inspecting stat "' + key + '"');
        console.log(_this2._stats[key]);
      });
    }
  }, {
    key: 'bin',
    value: function bin(lnglat) {
      return this.children.filter(function (c) {
        return c.inside(lnglat);
      });
    }
  }, {
    key: 'update',
    value: function update(lnglat, weight) {
      var _this3 = this;
      this.bin(lnglat).forEach(function (c) {
        c.state = _this3._updaters.reduce(function (nextState, fn) {
          return Object.assign(nextState, fn(weight, c.state));
        }, {});
      });
      return this;
    }
  }, {
    key: 'getStat',
    value: function getStat(stat) {
      var _this4 = this;
      var fn = typeof stat === 'function' ? stat : this._stats[stat];
      var _partition = partition_1(this.children, function (c) {
        return !isEqual_1(_this4._defaultState, c.state);
      }),
          _partition2 = _slicedToArray$1(_partition, 2),
          changed = _partition2[0],
          unchanged = _partition2[1];
      var listedValues = [];
      var values = changed.reduce(function (stats, c) {
        var value = fn(c.state, c.properties);
        listedValues.push(value);
        return Object.assign(stats, _defineProperty({}, c.id, value));
      }, {});
      return {
        stat: stat,
        values: values,
        unchanged: unchanged.map(function (c) {
          return c.id;
        }),
        min: minBy_1(listedValues),
        max: maxBy_1(listedValues)
      };
    }
  }, {
    key: 'initializeRenderer',
    value: function initializeRenderer(colorScale) {
      var _this5 = this;
      var defaultStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var addonStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!window) throw new Error('Method initializeRenderer should only be called browser-side');
      if (!window.google) throw new Error('Google Maps not loaded');
      if ('renderer' in this) {
        console.log('Existing renderer replaced');
        this.renderer.setMap(null);
      }
      this.colorScale = colorScale;
      this.renderer = new window.google.maps.Data({
        style: function style(feature) {
          var styleOptions = Object.assign({}, defaultStyle);
          var color = feature.getProperty('color');
          if (color) Object.assign(styleOptions, addonStyle, { fillColor: color });
          return styleOptions;
        }
      });
      this.children.forEach(function (c) {
        _this5.renderer.addGeoJson({
          id: c.id,
          type: 'Feature',
          geometry: c.geometry,
          properties: Object.assign({ color: null }, c.properties)
        });
      });
      return this.renderer;
    }
  }, {
    key: 'render',
    value: function render(stat) {
      var _this6 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.renderer) throw new Error('Renderer has not been initialized');
      var colorScale = options.colorScale || this.colorScale;
      var _getStat = this.getStat(stat),
          statValues = _getStat.values,
          unchanged = _getStat.unchanged,
          min = _getStat.min,
          max = _getStat.max;
      var domain = options.domain || [min, max];
      function normalize(value) {
        return (value - domain[0]) / (domain[1] - domain[0]);
      }
      Object.keys(statValues).forEach(function (key) {
        var normalized = normalize(statValues[key]);
        var transformed = Math.pow(normalized, options.transform || 1);
        var color = colorScale(transformed);
        _this6.renderer.getFeatureById(key).setProperty('color', color);
      });
      unchanged.forEach(function (key) {
        _this6.renderer.getFeatureById(key).setProperty('color', null);
      });
    }
  }, {
    key: 'clone',
    value: function clone() {
      var includeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var cloned = new SgHeatmap(this.children);
      cloned._updaters = [].concat(_toConsumableArray(this._updaters));
      cloned._stats = _extends({}, this._stats);
      if (includeState) {
        cloned._defaultState = this._defaultState;
      } else {
        cloned.children.forEach(function (c) {
          c.state = {};
        });
      }
      return cloned;
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var includeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return '[' + this.children.map(function (c) {
        return c.serialize(includeState);
      }).join(',') + ']';
    }
  }]);
  return SgHeatmap;
}();
var Feature = function () {
  function Feature(data) {
    _classCallCheck(this, Feature);
    if (!('id' in data)) throw new Error('Feature object requires id');
    if (!('geometry' in data)) throw new Error('Geometry not specified in feature object');
    this.type = 'Feature';
    this.id = data.id;
    this.properties = data.properties ? cloneDeep_1(data.properties) : {};
    this.geometry = {};
    this.geometry.type = data.geometry.type;
    if (this.geometry.type === 'Polygon') {
      this.geometry.coordinates = data.geometry.coordinates.map(toLinearRing);
      this.geometry.bbox = 'bbox' in data.geometry ? cloneDeep_1(data.geometry.bbox) : [minBy_1(this.geometry.coordinates[0], function (v) {
        return v[0];
      })[0], minBy_1(this.geometry.coordinates[0], function (v) {
        return v[1];
      })[1], maxBy_1(this.geometry.coordinates[0], function (v) {
        return v[0];
      })[0], maxBy_1(this.geometry.coordinates[0], function (v) {
        return v[1];
      })[1]];
    } else if (this.geometry.type === 'MultiPolygon') {
      this.geometry.coordinates = data.geometry.coordinates.map(function (polygon) {
        return polygon.map(toLinearRing);
      });
      if ('bbox' in data.geometry) {
        this.geometry.bbox = cloneDeep_1(data.geometry.bbox);
      } else {
        var bboxs = this.geometry.coordinates.map(function (polygon) {
          return [minBy_1(polygon[0], function (v) {
            return v[0];
          })[0], minBy_1(polygon[0], function (v) {
            return v[1];
          })[1], maxBy_1(polygon[0], function (v) {
            return v[0];
          })[0], maxBy_1(polygon[0], function (v) {
            return v[1];
          })[1]];
        });
        this.geometry.bbox = [minBy_1(bboxs, function (v) {
          return v[0];
        })[0], minBy_1(bboxs, function (v) {
          return v[1];
        })[1], maxBy_1(bboxs, function (v) {
          return v[2];
        })[2], maxBy_1(bboxs, function (v) {
          return v[3];
        })[3]];
      }
    } else {
      throw new Error('Feature geometry must be of type Polygon or MultiPolygon');
    }
    this.state = 'state' in data ? cloneDeep_1(data.state) : {};
  }
  _createClass(Feature, [{
    key: 'inside',
    value: function inside$$1(location) {
      var _location = _slicedToArray$1(location, 2),
          lng = _location[0],
          lat = _location[1];
      if (lng < this.geometry.bbox[0]) return false;
      if (lat < this.geometry.bbox[1]) return false;
      if (lng > this.geometry.bbox[2]) return false;
      if (lat > this.geometry.bbox[3]) return false;
      if (this.geometry.type === 'Polygon') {
        return inside([lng, lat], this.geometry.coordinates[0]);
      } else {
        return this.geometry.coordinates.some(function (polygon) {
          return inside([lng, lat], polygon[0]);
        });
      }
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var includeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var id = this.id,
          properties = this.properties,
          geometry = this.geometry,
          state = this.state;
      var _geometry = {
        type: geometry.type,
        bbox: geometry.bbox,
        coordinates: geometry.type === 'Polygon' ? geometry.coordinates.map(encodePolyline) : geometry.coordinates.map(function (polygon) {
          return polygon.map(encodePolyline);
        })
      };
      var _state = includeState ? state : {};
      return JSON.stringify({ id: id, properties: properties, geometry: _geometry, state: _state });
    }
  }]);
  return Feature;
}();

function supportLeaflet(heatmap) {
  function initializeRenderer(colorScale) {
    var defaultStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var addonStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!window) throw new Error('Method initializeRenderer should only be called browser-side');
    if (!window.L) throw new Error('Leaflet not loaded');
    if ('renderer' in this) {
      console.log('Existing renderer replaced');
      this.renderer.remove();
    }
    this.colorScale = colorScale;
    this.renderer = window.L.geoJSON(null, {
      style: function style(feature) {
        var styleOptions = Object.assign({}, defaultStyle);
        var color = feature.properties.color;
        if (color) Object.assign(styleOptions, addonStyle, { fillColor: color });
        return styleOptions;
      }
    }).addData(this.children.map(function (c) {
      return {
        id: c.id,
        type: 'Feature',
        geometry: c.geometry,
        properties: Object.assign({ color: null }, c.properties)
      };
    }));
    return this.renderer;
  }
  function render(stat) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.renderer) throw new Error('Renderer has not been initialized');
    var colorScale = options.colorScale || this.colorScale;
    var _getStat = this.getStat(stat),
        statValues = _getStat.values,
        min = _getStat.min,
        max = _getStat.max;
    var domain = options.domain || [min, max];
    function normalize(value) {
      return (value - domain[0]) / (domain[1] - domain[0]);
    }
    this.renderer.eachLayer(function (layer) {
      var key = layer.feature.id;
      if (key in statValues) {
        var normalized = normalize(statValues[key]);
        var transformed = Math.pow(normalized, options.transform || 1);
        layer.feature.properties.color = colorScale(transformed);
      } else {
        layer.feature.properties.color = null;
      }
      _this.renderer.resetStyle(layer);
    });
  }
  heatmap.initializeRenderer = initializeRenderer.bind(heatmap);
  heatmap.render = render.bind(heatmap);
}

var numeral = createCommonjsModule(function (module) {
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function (global, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
        undefined(factory);
    } else if ('object' === 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.numeral = factory();
    }
}(commonjsGlobal, function () {
    var numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
            currentLocale: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0',
            scalePercentBy100: true
        },
        options = {
            currentLocale: defaults.currentLocale,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat,
            scalePercentBy100: defaults.scalePercentBy100
        };
    function Numeral(input, number) {
        this._input = input;
        this._value = number;
    }
    numeral = function(input) {
        var value,
            kind,
            unformatFunction,
            regexp;
        if (numeral.isNumeral(input)) {
            value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            value = 0;
        } else if (input === null || _.isNaN(input)) {
            value = null;
        } else if (typeof input === 'string') {
            if (options.zeroFormat && input === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                for (kind in formats) {
                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;
                    if (regexp && input.match(regexp)) {
                        unformatFunction = formats[kind].unformat;
                        break;
                    }
                }
                unformatFunction = unformatFunction || numeral._.stringToNumber;
                value = unformatFunction(input);
            }
        } else {
            value = Number(input)|| null;
        }
        return new Numeral(input, value);
    };
    numeral.version = VERSION;
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };
    numeral._ = _ = {
        numberToFormat: function(value, format, roundingFunction) {
            var locale = locales[numeral.options.currentLocale],
                negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                trillion = 1000000000000,
                billion = 1000000000,
                million = 1000000,
                thousand = 1000,
                decimal = '',
                neg = false,
                abbrForce,
                abs,
                min,
                max,
                power,
                int,
                precision,
                signed,
                thousands,
                output;
            value = value || 0;
            abs = Math.abs(value);
            if (numeral._.includes(format, '(')) {
                negP = true;
                format = format.replace(/[\(|\)]/g, '');
            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[\+|\-]/g, '');
            }
            if (numeral._.includes(format, 'a')) {
                abbrForce = format.match(/a(k|m|b|t)?/);
                abbrForce = abbrForce ? abbrForce[1] : false;
                if (numeral._.includes(format, ' a')) {
                    abbr = ' ';
                }
                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');
                if (abs >= trillion && !abbrForce || abbrForce === 't') {
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
                    abbr += locale.abbreviations.million;
                    value = value / million;
                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }
            if (numeral._.includes(format, '[.]')) {
                optDec = true;
                format = format.replace('[.]', '.');
            }
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;
            if (precision) {
                if (numeral._.includes(precision, '[')) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
                }
                int = decimal.split('.')[0];
                if (numeral._.includes(decimal, '.')) {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                } else {
                    decimal = '';
                }
                if (optDec && Number(decimal.slice(1)) === 0) {
                    decimal = '';
                }
            } else {
                int = numeral._.toFixed(value, 0, roundingFunction);
            }
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
                int = String(Number(int) / 1000);
                switch (abbr) {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }
            if (numeral._.includes(int, '-')) {
                int = int.slice(1);
                neg = true;
            }
            if (int.length < leadingCount) {
                for (var i = leadingCount - int.length; i > 0; i--) {
                    int = '0' + int;
                }
            }
            if (thousands > -1) {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }
            if (format.indexOf('.') === 0) {
                int = '';
            }
            output = int + decimal + (abbr ? abbr : '');
            if (negP) {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            } else {
                if (signed >= 0) {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                } else if (neg) {
                    output = '-' + output;
                }
            }
            return output;
        },
        stringToNumber: function(string) {
            var locale = locales[options.currentLocale],
                stringOriginal = string,
                abbreviations = {
                    thousand: 3,
                    million: 6,
                    billion: 9,
                    trillion: 12
                },
                abbreviation,
                value,
                i,
                regexp;
            if (options.zeroFormat && string === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                value = 1;
                if (locale.delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }
                for (abbreviation in abbreviations) {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');
                    if (stringOriginal.match(regexp)) {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;
                string = string.replace(/[^0-9\.]+/g, '');
                value *= Number(string);
            }
            return value;
        },
        isNaN: function(value) {
            return typeof value === 'number' && isNaN(value);
        },
        includes: function(string, search) {
            return string.indexOf(search) !== -1;
        },
        insert: function(string, subString, start) {
            return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function(array, callback                   ) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var t = Object(array),
                len = t.length >>> 0,
                k = 0,
                value;
            if (arguments.length === 3) {
                value = arguments[2];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }
                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        },
        multiplier: function (x) {
            var parts = x.toString().split('.');
            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        correctionFactor: function () {
            var args = Array.prototype.slice.call(arguments);
            return args.reduce(function(accum, next) {
                var mn = _.multiplier(next);
                return accum > mn ? accum : mn;
            }, 1);
        },
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
            var splitValue = value.toString().split('.'),
                minDecimals = maxDecimals - (optionals || 0),
                boundedPrecision,
                optionalsRegExp,
                power,
                output;
            if (splitValue.length === 2) {
              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
            } else {
              boundedPrecision = minDecimals;
            }
            power = Math.pow(10, boundedPrecision);
            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);
            if (optionals > maxDecimals - boundedPrecision) {
                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
                output = output.replace(optionalsRegExp, '');
            }
            return output;
        }
    };
    numeral.options = options;
    numeral.formats = formats;
    numeral.locales = locales;
    numeral.locale = function(key) {
        if (key) {
            options.currentLocale = key.toLowerCase();
        }
        return options.currentLocale;
    };
    numeral.localeData = function(key) {
        if (!key) {
            return locales[options.currentLocale];
        }
        key = key.toLowerCase();
        if (!locales[key]) {
            throw new Error('Unknown locale : ' + key);
        }
        return locales[key];
    };
    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };
    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };
    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };
    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };
    numeral.register = function(type, name, format) {
        name = name.toLowerCase();
        if (this[type + 's'][name]) {
            throw new TypeError(name + ' ' + type + ' already registered.');
        }
        this[type + 's'][name] = format;
        return format;
    };
    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            localeData,
            temp;
        if (typeof val !== 'string') {
            val += '';
            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }
        val = val.trim();
        if (!!val.match(/^\d+$/)) {
            return true;
        }
        if (val === '') {
            return false;
        }
        try {
            localeData = numeral.localeData(culture);
        } catch (e) {
            localeData = numeral.localeData(numeral.locale());
        }
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = localeData.delimiters.thousands;
        }
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }
        _thousandRegEx = new RegExp(_thousandSep + '{2}');
        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }
        return false;
    };
    numeral.fn = Numeral.prototype = {
        clone: function() {
            return numeral(this);
        },
        format: function(inputString, roundingFunction) {
            var value = this._value,
                format = inputString || options.defaultFormat,
                kind,
                output,
                formatFunction;
            roundingFunction = roundingFunction || Math.round;
            if (value === 0 && options.zeroFormat !== null) {
                output = options.zeroFormat;
            } else if (value === null && options.nullFormat !== null) {
                output = options.nullFormat;
            } else {
                for (kind in formats) {
                    if (format.match(formats[kind].regexps.format)) {
                        formatFunction = formats[kind].format;
                        break;
                    }
                }
                formatFunction = formatFunction || numeral._.numberToFormat;
                output = formatFunction(value, format, roundingFunction);
            }
            return output;
        },
        value: function() {
            return this._value;
        },
        input: function() {
            return this._input;
        },
        set: function(value) {
            this._value = Number(value);
            return this;
        },
        add: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);
            function cback(accum, curr, currI, O) {
                return accum + Math.round(corrFactor * curr);
            }
            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
            return this;
        },
        subtract: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);
            function cback(accum, curr, currI, O) {
                return accum - Math.round(corrFactor * curr);
            }
            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
            return this;
        },
        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
            }
            this._value = _.reduce([this._value, value], cback, 1);
            return this;
        },
        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
            }
            this._value = _.reduce([this._value, value], cback);
            return this;
        },
        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }
    };
    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });
(function() {
        numeral.register('format', 'bps', {
            regexps: {
                format: /(BPS)/,
                unformat: /(BPS)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
                    output;
                value = value * 10000;
                format = format.replace(/\s?BPS/, '');
                output = numeral._.numberToFormat(value, format, roundingFunction);
                if (numeral._.includes(output, ')')) {
                    output = output.split('');
                    output.splice(-1, 0, space + 'BPS');
                    output = output.join('');
                } else {
                    output = output + space + 'BPS';
                }
                return output;
            },
            unformat: function(string) {
                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
            }
        });
})();
(function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        binary = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };
    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
            return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|');
        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';
    numeral.register('format', 'bytes', {
        regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
        },
        format: function(value, format, roundingFunction) {
            var output,
                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
                power,
                min,
                max;
            format = format.replace(/\s?i?b/, '');
            for (power = 0; power <= bytes.suffixes.length; power++) {
                min = Math.pow(bytes.base, power);
                max = Math.pow(bytes.base, power + 1);
                if (value === null || value === 0 || value >= min && value < max) {
                    suffix += bytes.suffixes[power];
                    if (min > 0) {
                        value = value / min;
                    }
                    break;
                }
            }
            output = numeral._.numberToFormat(value, format, roundingFunction);
            return output + suffix;
        },
        unformat: function(string) {
            var value = numeral._.stringToNumber(string),
                power,
                bytesMultiplier;
            if (value) {
                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                    if (numeral._.includes(string, decimal.suffixes[power])) {
                        bytesMultiplier = Math.pow(decimal.base, power);
                        break;
                    }
                    if (numeral._.includes(string, binary.suffixes[power])) {
                        bytesMultiplier = Math.pow(binary.base, power);
                        break;
                    }
                }
                value *= (bytesMultiplier || 1);
            }
            return value;
        }
    });
})();
(function() {
        numeral.register('format', 'currency', {
        regexps: {
            format: /(\$)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                symbols = {
                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                },
                output,
                symbol,
                i;
            format = format.replace(/\s?\$\s?/, '');
            output = numeral._.numberToFormat(value, format, roundingFunction);
            if (value >= 0) {
                symbols.before = symbols.before.replace(/[\-\(]/, '');
                symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
                symbols.before = '-' + symbols.before;
            }
            for (i = 0; i < symbols.before.length; i++) {
                symbol = symbols.before[i];
                switch (symbol) {
                    case '$':
                        output = numeral._.insert(output, locale.currency.symbol, i);
                        break;
                    case ' ':
                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                        break;
                }
            }
            for (i = symbols.after.length - 1; i >= 0; i--) {
                symbol = symbols.after[i];
                switch (symbol) {
                    case '$':
                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                        break;
                    case ' ':
                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                        break;
                }
            }
            return output;
        }
    });
})();
(function() {
        numeral.register('format', 'exponential', {
        regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
        },
        format: function(value, format, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');
            format = format.replace(/e[\+|\-]{1}0/, '');
            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);
            return output + 'e' + parts[1];
        },
        unformat: function(string) {
            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);
            power = numeral._.includes(string, 'e-') ? power *= -1 : power;
            function cback(accum, curr, currI, O) {
                var corrFactor = numeral._.correctionFactor(accum, curr),
                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
                return num;
            }
            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
        }
    });
})();
(function() {
        numeral.register('format', 'ordinal', {
        regexps: {
            format: /(o)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                output,
                ordinal = numeral._.includes(format, ' o') ? ' ' : '';
            format = format.replace(/\s?o/, '');
            ordinal += locale.ordinal(value);
            output = numeral._.numberToFormat(value, format, roundingFunction);
            return output + ordinal;
        }
    });
})();
(function() {
        numeral.register('format', 'percentage', {
        regexps: {
            format: /(%)/,
            unformat: /(%)/
        },
        format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, ' %') ? ' ' : '',
                output;
            if (numeral.options.scalePercentBy100) {
                value = value * 100;
            }
            format = format.replace(/\s?\%/, '');
            output = numeral._.numberToFormat(value, format, roundingFunction);
            if (numeral._.includes(output, ')')) {
                output = output.split('');
                output.splice(-1, 0, space + '%');
                output = output.join('');
            } else {
                output = output + space + '%';
            }
            return output;
        },
        unformat: function(string) {
            var number = numeral._.stringToNumber(string);
            if (numeral.options.scalePercentBy100) {
                return number * 0.01;
            }
            return number;
        }
    });
})();
(function() {
        numeral.register('format', 'time', {
        regexps: {
            format: /(:)/,
            unformat: /(:)/
        },
        format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));
            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        unformat: function(string) {
            var timeArray = string.split(':'),
                seconds = 0;
            if (timeArray.length === 3) {
                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
                seconds = seconds + (Number(timeArray[1]) * 60);
                seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
                seconds = seconds + (Number(timeArray[0]) * 60);
                seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
        }
    });
})();
return numeral;
}));
});

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var store = {
  map: null,
  cache: {},
  add: function add() {
    var layerId = Symbol();
    this[layerId] = { source: null, heatmap: null };
    return layerId;
  },
  load: function load(layer, key, colorScale, style) {
    var _this = this;
    if (key in this.cache) {
      if (this.cache[key] instanceof Promise) return this.cache[key];
      if (this[layer].heatmap) {
        this[layer].heatmap.renderer.removeFrom(this.map);
      }
      var heatmap = this.cache[key].clone(true);
      supportLeaflet(heatmap);
      modifyGetStat(heatmap);
      heatmap.initializeRenderer(colorScale, {
        weight: 1,
        color: 'black',
        opacity: 0.3,
        fillColor: 'white',
        fillOpacity: 0.3
      }, {
        weight: 2,
        fillOpacity: 0.7,
        opacity: 1
      });
      heatmap.renderer.bindTooltip(function (layer) {
        var content = [layer.feature.properties.Planning_Area_Name, layer.feature.properties.Subzone_Name, layer.feature.properties._value];
        var $content = document.createElement('div');
        content.filter(function (item) {
          return item;
        }).forEach(function (item) {
          var $p = document.createElement('p');
          $p.textContent = item;
          $content.appendChild($p);
        });
        return $content;
      });
      this[layer].source = key;
      this[layer].heatmap = heatmap;
      heatmap.renderer.addTo(this.map);
      heatmap.renderer.bringToBack();
      return heatmap;
    } else {
      this.cache[key] = window.fetch('./data/' + key + '.json').then(function (res) {
        return res.json();
      }).then(function (data) {
        return new SgHeatmap(data);
      }).then(function (heatmap) {
        _this.cache[key] = heatmap;
        return heatmap;
      });
      return this.cache[key];
    }
  },
  unload: function unload(layer) {
    if (!this[layer].heatmap) return;
    this[layer].heatmap.renderer.removeFrom(this.map);
    this[layer].source = null;
    this[layer].heatmap = null;
  },
  render: function render(layer, accessor, format) {
    if (!this[layer].heatmap) return;
    var stat = this[layer].heatmap.getStat(accessor);
    this[layer].heatmap.renderer.eachLayer(function (layer) {
      if (layer.feature.id in stat.values) {
        var formatted = numeral(stat.values[layer.feature.id]).format(format || '0');
        layer.feature.properties._value = formatted;
      } else {
        delete layer.feature.properties._value;
      }
    });
    this[layer].heatmap.render(accessor, optimizePointSpread(stat));
  },
  adjust: function adjust(layer, style) {
    if (!this[layer].heatmap) return;
    this[layer].heatmap.renderer.setStyle(function (feature) {
      return style;
    });
  },
  reorder: function reorder(layer) {
    if (!this[layer].heatmap) return;
    this[layer].heatmap.renderer.bringToFront();
  }
};
function modifyGetStat(heatmap) {
  var _getStat = heatmap.getStat;
  heatmap.getStat = function () {
    var stat = _getStat.apply(heatmap, arguments);
    Object.keys(stat.values).forEach(function (key) {
      if (stat.values[key] == null) {
        stat.unchanged.push(key);
        delete stat.values[key];
      }
    });
    stat.min = Math.min.apply(Math, toConsumableArray(Object.values(stat.values)));
    return stat;
  };
}

var themes = [{
  label: 'Resident Population By Gender & Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'radio',
    items: [{ label: 'Total', keys: ['Resident.Total.TOTAL'], selected: true }, { label: 'Female', keys: ['Resident.Female.TOTAL'] }, { label: 'Male', keys: ['Resident.Male.TOTAL'] }],
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Gender & Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'radio',
    items: [{ label: 'Total', keys: ['Resident.Total.TOTAL'], selected: true }, { label: 'Female', keys: ['Resident.Female.TOTAL'] }, { label: 'Male', keys: ['Resident.Male.TOTAL'] }],
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Age & Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Total.BET0TO4'] }, { label: '5', keys: ['Resident.Total.BET5TO9'] }, { label: '10', keys: ['Resident.Total.BET10TO14'] }, { label: '15', keys: ['Resident.Total.BET15TO19'] }, { label: '20', keys: ['Resident.Total.BET20TO24'] }, { label: '25', keys: ['Resident.Total.BET25TO29'] }, { label: '30', keys: ['Resident.Total.BET30TO34'] }, { label: '35', keys: ['Resident.Total.BET35TO39'] }, { label: '40', keys: ['Resident.Total.BET40TO44'] }, { label: '45', keys: ['Resident.Total.BET45TO49'] }, { label: '50', keys: ['Resident.Total.BET50TO54'] }, { label: '55', keys: ['Resident.Total.BET55TO59'] }, { label: '60', keys: ['Resident.Total.BET60TO64'] }, { label: '65', keys: ['Resident.Total.BET65TO69'] }, { label: '70', keys: ['Resident.Total.BET70TO74'] }, { label: '75', keys: ['Resident.Total.BET75TO79'] }, { label: '80', keys: ['Resident.Total.BET80TO84'] }, { label: '85', keys: ['Resident.Total.OVER85'] }, { label: 'Over 85', keys: [] }],
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Age & Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Total.BET0TO4'] }, { label: '5', keys: ['Resident.Total.BET5TO9'] }, { label: '10', keys: ['Resident.Total.BET10TO14'] }, { label: '15', keys: ['Resident.Total.BET15TO19'] }, { label: '20', keys: ['Resident.Total.BET20TO24'] }, { label: '25', keys: ['Resident.Total.BET25TO29'] }, { label: '30', keys: ['Resident.Total.BET30TO34'] }, { label: '35', keys: ['Resident.Total.BET35TO39'] }, { label: '40', keys: ['Resident.Total.BET40TO44'] }, { label: '45', keys: ['Resident.Total.BET45TO49'] }, { label: '50', keys: ['Resident.Total.BET50TO54'] }, { label: '55', keys: ['Resident.Total.BET55TO59'] }, { label: '60', keys: ['Resident.Total.BET60TO64'] }, { label: '65', keys: ['Resident.Total.BET65TO69'] }, { label: '70', keys: ['Resident.Total.BET70TO74'] }, { label: '75', keys: ['Resident.Total.BET75TO79'] }, { label: '80', keys: ['Resident.Total.BET80TO84'] }, { label: '85', keys: ['Resident.Total.OVER85'] }, { label: 'Over 85', keys: [] }],
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Age & Planning Area (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Female.BET0TO4'] }, { label: '5', keys: ['Resident.Female.BET5TO9'] }, { label: '10', keys: ['Resident.Female.BET10TO14'] }, { label: '15', keys: ['Resident.Female.BET15TO19'] }, { label: '20', keys: ['Resident.Female.BET20TO24'] }, { label: '25', keys: ['Resident.Female.BET25TO29'] }, { label: '30', keys: ['Resident.Female.BET30TO34'] }, { label: '35', keys: ['Resident.Female.BET35TO39'] }, { label: '40', keys: ['Resident.Female.BET40TO44'] }, { label: '45', keys: ['Resident.Female.BET45TO49'] }, { label: '50', keys: ['Resident.Female.BET50TO54'] }, { label: '55', keys: ['Resident.Female.BET55TO59'] }, { label: '60', keys: ['Resident.Female.BET60TO64'] }, { label: '65', keys: ['Resident.Female.BET65TO69'] }, { label: '70', keys: ['Resident.Female.BET70TO74'] }, { label: '75', keys: ['Resident.Female.BET75TO79'] }, { label: '80', keys: ['Resident.Female.BET80TO84'] }, { label: '85', keys: ['Resident.Female.OVER85'] }, { label: 'Over 85', keys: [] }],
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Age & Subzone (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Female.BET0TO4'] }, { label: '5', keys: ['Resident.Female.BET5TO9'] }, { label: '10', keys: ['Resident.Female.BET10TO14'] }, { label: '15', keys: ['Resident.Female.BET15TO19'] }, { label: '20', keys: ['Resident.Female.BET20TO24'] }, { label: '25', keys: ['Resident.Female.BET25TO29'] }, { label: '30', keys: ['Resident.Female.BET30TO34'] }, { label: '35', keys: ['Resident.Female.BET35TO39'] }, { label: '40', keys: ['Resident.Female.BET40TO44'] }, { label: '45', keys: ['Resident.Female.BET45TO49'] }, { label: '50', keys: ['Resident.Female.BET50TO54'] }, { label: '55', keys: ['Resident.Female.BET55TO59'] }, { label: '60', keys: ['Resident.Female.BET60TO64'] }, { label: '65', keys: ['Resident.Female.BET65TO69'] }, { label: '70', keys: ['Resident.Female.BET70TO74'] }, { label: '75', keys: ['Resident.Female.BET75TO79'] }, { label: '80', keys: ['Resident.Female.BET80TO84'] }, { label: '85', keys: ['Resident.Female.OVER85'] }, { label: 'Over 85', keys: [] }],
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Age & Planning Area (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Male.BET0TO4'] }, { label: '5', keys: ['Resident.Male.BET5TO9'] }, { label: '10', keys: ['Resident.Male.BET10TO14'] }, { label: '15', keys: ['Resident.Male.BET15TO19'] }, { label: '20', keys: ['Resident.Male.BET20TO24'] }, { label: '25', keys: ['Resident.Male.BET25TO29'] }, { label: '30', keys: ['Resident.Male.BET30TO34'] }, { label: '35', keys: ['Resident.Male.BET35TO39'] }, { label: '40', keys: ['Resident.Male.BET40TO44'] }, { label: '45', keys: ['Resident.Male.BET45TO49'] }, { label: '50', keys: ['Resident.Male.BET50TO54'] }, { label: '55', keys: ['Resident.Male.BET55TO59'] }, { label: '60', keys: ['Resident.Male.BET60TO64'] }, { label: '65', keys: ['Resident.Male.BET65TO69'] }, { label: '70', keys: ['Resident.Male.BET70TO74'] }, { label: '75', keys: ['Resident.Male.BET75TO79'] }, { label: '80', keys: ['Resident.Male.BET80TO84'] }, { label: '85', keys: ['Resident.Male.OVER85'] }, { label: 'Over 85', keys: [] }],
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Age & Subzone (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Male.BET0TO4'] }, { label: '5', keys: ['Resident.Male.BET5TO9'] }, { label: '10', keys: ['Resident.Male.BET10TO14'] }, { label: '15', keys: ['Resident.Male.BET15TO19'] }, { label: '20', keys: ['Resident.Male.BET20TO24'] }, { label: '25', keys: ['Resident.Male.BET25TO29'] }, { label: '30', keys: ['Resident.Male.BET30TO34'] }, { label: '35', keys: ['Resident.Male.BET35TO39'] }, { label: '40', keys: ['Resident.Male.BET40TO44'] }, { label: '45', keys: ['Resident.Male.BET45TO49'] }, { label: '50', keys: ['Resident.Male.BET50TO54'] }, { label: '55', keys: ['Resident.Male.BET55TO59'] }, { label: '60', keys: ['Resident.Male.BET60TO64'] }, { label: '65', keys: ['Resident.Male.BET65TO69'] }, { label: '70', keys: ['Resident.Male.BET70TO74'] }, { label: '75', keys: ['Resident.Male.BET75TO79'] }, { label: '80', keys: ['Resident.Male.BET80TO84'] }, { label: '85', keys: ['Resident.Male.OVER85'] }, { label: 'Over 85', keys: [] }],
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Dwelling Type & Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'checkbox',
    items: [{ label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO'] }, { label: '3 room HDB', keys: ['DwellingType.THREE_RM'] }, { label: '4 room HDB', keys: ['DwellingType.FOUR_RM'] }, { label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX'] }, { label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH'] }, { label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO'] }, { label: 'Others', keys: ['DwellingType.OTHERS'] }],
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Resident Population By Dwelling Type & Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'checkbox',
    items: [{ label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO'] }, { label: '3 room HDB', keys: ['DwellingType.THREE_RM'] }, { label: '4 room HDB', keys: ['DwellingType.FOUR_RM'] }, { label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX'] }, { label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH'] }, { label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO'] }, { label: 'Others', keys: ['DwellingType.OTHERS'] }],
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0,0'
}, {
  label: 'Gender Distribution of Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'radio',
    items: [{ label: 'Male to Female', keys: ['Resident.Male.TOTAL'] }],
    normalize: 'Resident.Female.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0.00'
}, {
  label: 'Gender Distribution of Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'radio',
    items: [{ label: 'Male to Female', keys: ['Resident.Male.TOTAL'] }],
    normalize: 'Resident.Female.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0.00'
}, {
  label: 'Age Distribution of Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Total.BET0TO4'] }, { label: '5', keys: ['Resident.Total.BET5TO9'] }, { label: '10', keys: ['Resident.Total.BET10TO14'] }, { label: '15', keys: ['Resident.Total.BET15TO19'] }, { label: '20', keys: ['Resident.Total.BET20TO24'] }, { label: '25', keys: ['Resident.Total.BET25TO29'] }, { label: '30', keys: ['Resident.Total.BET30TO34'] }, { label: '35', keys: ['Resident.Total.BET35TO39'] }, { label: '40', keys: ['Resident.Total.BET40TO44'] }, { label: '45', keys: ['Resident.Total.BET45TO49'] }, { label: '50', keys: ['Resident.Total.BET50TO54'] }, { label: '55', keys: ['Resident.Total.BET55TO59'] }, { label: '60', keys: ['Resident.Total.BET60TO64'] }, { label: '65', keys: ['Resident.Total.BET65TO69'] }, { label: '70', keys: ['Resident.Total.BET70TO74'] }, { label: '75', keys: ['Resident.Total.BET75TO79'] }, { label: '80', keys: ['Resident.Total.BET80TO84'] }, { label: '85', keys: ['Resident.Total.OVER85'] }, { label: 'Over 85', keys: [] }],
    normalize: 'Resident.Total.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Total.BET0TO4'] }, { label: '5', keys: ['Resident.Total.BET5TO9'] }, { label: '10', keys: ['Resident.Total.BET10TO14'] }, { label: '15', keys: ['Resident.Total.BET15TO19'] }, { label: '20', keys: ['Resident.Total.BET20TO24'] }, { label: '25', keys: ['Resident.Total.BET25TO29'] }, { label: '30', keys: ['Resident.Total.BET30TO34'] }, { label: '35', keys: ['Resident.Total.BET35TO39'] }, { label: '40', keys: ['Resident.Total.BET40TO44'] }, { label: '45', keys: ['Resident.Total.BET45TO49'] }, { label: '50', keys: ['Resident.Total.BET50TO54'] }, { label: '55', keys: ['Resident.Total.BET55TO59'] }, { label: '60', keys: ['Resident.Total.BET60TO64'] }, { label: '65', keys: ['Resident.Total.BET65TO69'] }, { label: '70', keys: ['Resident.Total.BET70TO74'] }, { label: '75', keys: ['Resident.Total.BET75TO79'] }, { label: '80', keys: ['Resident.Total.BET80TO84'] }, { label: '85', keys: ['Resident.Total.OVER85'] }, { label: 'Over 85', keys: [] }],
    normalize: 'Resident.Total.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Planning Area (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Female.BET0TO4'] }, { label: '5', keys: ['Resident.Female.BET5TO9'] }, { label: '10', keys: ['Resident.Female.BET10TO14'] }, { label: '15', keys: ['Resident.Female.BET15TO19'] }, { label: '20', keys: ['Resident.Female.BET20TO24'] }, { label: '25', keys: ['Resident.Female.BET25TO29'] }, { label: '30', keys: ['Resident.Female.BET30TO34'] }, { label: '35', keys: ['Resident.Female.BET35TO39'] }, { label: '40', keys: ['Resident.Female.BET40TO44'] }, { label: '45', keys: ['Resident.Female.BET45TO49'] }, { label: '50', keys: ['Resident.Female.BET50TO54'] }, { label: '55', keys: ['Resident.Female.BET55TO59'] }, { label: '60', keys: ['Resident.Female.BET60TO64'] }, { label: '65', keys: ['Resident.Female.BET65TO69'] }, { label: '70', keys: ['Resident.Female.BET70TO74'] }, { label: '75', keys: ['Resident.Female.BET75TO79'] }, { label: '80', keys: ['Resident.Female.BET80TO84'] }, { label: '85', keys: ['Resident.Female.OVER85'] }, { label: 'Over 85', keys: [] }],
    normalize: 'Resident.Female.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Subzone (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Female.BET0TO4'] }, { label: '5', keys: ['Resident.Female.BET5TO9'] }, { label: '10', keys: ['Resident.Female.BET10TO14'] }, { label: '15', keys: ['Resident.Female.BET15TO19'] }, { label: '20', keys: ['Resident.Female.BET20TO24'] }, { label: '25', keys: ['Resident.Female.BET25TO29'] }, { label: '30', keys: ['Resident.Female.BET30TO34'] }, { label: '35', keys: ['Resident.Female.BET35TO39'] }, { label: '40', keys: ['Resident.Female.BET40TO44'] }, { label: '45', keys: ['Resident.Female.BET45TO49'] }, { label: '50', keys: ['Resident.Female.BET50TO54'] }, { label: '55', keys: ['Resident.Female.BET55TO59'] }, { label: '60', keys: ['Resident.Female.BET60TO64'] }, { label: '65', keys: ['Resident.Female.BET65TO69'] }, { label: '70', keys: ['Resident.Female.BET70TO74'] }, { label: '75', keys: ['Resident.Female.BET75TO79'] }, { label: '80', keys: ['Resident.Female.BET80TO84'] }, { label: '85', keys: ['Resident.Female.OVER85'] }, { label: 'Over 85', keys: [] }],
    normalize: 'Resident.Female.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Planning Area (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Male.BET0TO4'] }, { label: '5', keys: ['Resident.Male.BET5TO9'] }, { label: '10', keys: ['Resident.Male.BET10TO14'] }, { label: '15', keys: ['Resident.Male.BET15TO19'] }, { label: '20', keys: ['Resident.Male.BET20TO24'] }, { label: '25', keys: ['Resident.Male.BET25TO29'] }, { label: '30', keys: ['Resident.Male.BET30TO34'] }, { label: '35', keys: ['Resident.Male.BET35TO39'] }, { label: '40', keys: ['Resident.Male.BET40TO44'] }, { label: '45', keys: ['Resident.Male.BET45TO49'] }, { label: '50', keys: ['Resident.Male.BET50TO54'] }, { label: '55', keys: ['Resident.Male.BET55TO59'] }, { label: '60', keys: ['Resident.Male.BET60TO64'] }, { label: '65', keys: ['Resident.Male.BET65TO69'] }, { label: '70', keys: ['Resident.Male.BET70TO74'] }, { label: '75', keys: ['Resident.Male.BET75TO79'] }, { label: '80', keys: ['Resident.Male.BET80TO84'] }, { label: '85', keys: ['Resident.Male.OVER85'] }, { label: 'Over 85', keys: [] }],
    normalize: 'Resident.Male.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Subzone (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: 'Below 5', keys: ['Resident.Male.BET0TO4'] }, { label: '5', keys: ['Resident.Male.BET5TO9'] }, { label: '10', keys: ['Resident.Male.BET10TO14'] }, { label: '15', keys: ['Resident.Male.BET15TO19'] }, { label: '20', keys: ['Resident.Male.BET20TO24'] }, { label: '25', keys: ['Resident.Male.BET25TO29'] }, { label: '30', keys: ['Resident.Male.BET30TO34'] }, { label: '35', keys: ['Resident.Male.BET35TO39'] }, { label: '40', keys: ['Resident.Male.BET40TO44'] }, { label: '45', keys: ['Resident.Male.BET45TO49'] }, { label: '50', keys: ['Resident.Male.BET50TO54'] }, { label: '55', keys: ['Resident.Male.BET55TO59'] }, { label: '60', keys: ['Resident.Male.BET60TO64'] }, { label: '65', keys: ['Resident.Male.BET65TO69'] }, { label: '70', keys: ['Resident.Male.BET70TO74'] }, { label: '75', keys: ['Resident.Male.BET75TO79'] }, { label: '80', keys: ['Resident.Male.BET80TO84'] }, { label: '85', keys: ['Resident.Male.OVER85'] }, { label: 'Over 85', keys: [] }],
    normalize: 'Resident.Male.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Distribution of Dwelling Type By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'checkbox',
    items: [{ label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO'] }, { label: '3 room HDB', keys: ['DwellingType.THREE_RM'] }, { label: '4 room HDB', keys: ['DwellingType.FOUR_RM'] }, { label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX'] }, { label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH'] }, { label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO'] }, { label: 'Others', keys: ['DwellingType.OTHERS'] }],
    normalize: 'DwellingType.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Distribution of Dwelling Type By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'checkbox',
    items: [{ label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO'] }, { label: '3 room HDB', keys: ['DwellingType.THREE_RM'] }, { label: '4 room HDB', keys: ['DwellingType.FOUR_RM'] }, { label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX'] }, { label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH'] }, { label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO'] }, { label: 'Others', keys: ['DwellingType.OTHERS'] }],
    normalize: 'DwellingType.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Distribution of HDB Dwelling Type By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'checkbox',
    items: [{ label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO'] }, { label: '3 room HDB', keys: ['DwellingType.THREE_RM'] }, { label: '4 room HDB', keys: ['DwellingType.FOUR_RM'] }, { label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX'] }],
    normalize: 'DwellingType.HDB',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}, {
  label: 'Distribution of HDB Dwelling Type By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'checkbox',
    items: [{ label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO'] }, { label: '3 room HDB', keys: ['DwellingType.THREE_RM'] }, { label: '4 room HDB', keys: ['DwellingType.FOUR_RM'] }, { label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX'] }],
    normalize: 'DwellingType.HDB',
    threshold: 1000
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  },
  format: '0%'
}];

var RadioGroup = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "radio-group" }, _vm._l(_vm.options, function (option, index) {
      return _c('radio', { attrs: { "value": index }, model: { value: _vm.state, callback: function callback($$v) {
            _vm.state = $$v;
          }, expression: "state" } }, [_vm._v(" " + _vm._s(option.label) + " ")]);
    }));
  }, staticRenderFns: [],
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: Number,
    options: Array
  },
  computed: {
    state: {
      get: function get() {
        return this.selected;
      },
      set: function set(value) {
        this.$emit('change', value);
      }
    }
  }
};

var CheckboxGroup = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "checkbox-group" }, _vm._l(_vm.options, function (option, index) {
      return _c('checkbox', { attrs: { "value": index }, model: { value: _vm.state, callback: function callback($$v) {
            _vm.state = $$v;
          }, expression: "state" } }, [_vm._v(" " + _vm._s(option.label) + " ")]);
    }));
  }, staticRenderFns: [],
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: Array,
    options: Array
  },
  computed: {
    state: {
      get: function get() {
        return this.selected;
      },
      set: function set(value) {
        this.$emit('change', value);
      }
    }
  }
};

var RangeSelector = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('v-slider', { staticClass: "range-selector", attrs: { "data": _vm.options, "formatter": function formatter(option) {
          return option && option.label;
        }, "lazy": "", "direction": "vertical", "reverse": "", "piecewise-label": "", "tooltip": false, "speed": 0.1, "width": "8", "height": "100%" }, model: { value: _vm.state, callback: function callback($$v) {
          _vm.state = $$v;
        }, expression: "state" } });
  }, staticRenderFns: [],
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: Array,
    options: Array
  },
  computed: {
    state: {
      get: function get() {
        var _this = this;

        return this.selected.map(function (index) {
          return _this.options[index];
        });
      },
      set: function set(values) {
        var _this2 = this;

        var indexes = values.map(function (value) {
          return _this2.options.indexOf(value);
        });
        if (indexes[0] === indexes[1]) {
          indexes[1] += 1;
        }
        if (indexes[1] === this.options.length) {
          indexes[0] -= 1;
          indexes[1] -= 1;
        }
        this.$emit('change', indexes);
      }
    }
  }
};

var Layer = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "filter-control" }, [_vm.control ? _c(_vm.controlType, { tag: "component", attrs: { "options": _vm.control.items }, model: { value: _vm.selectedFilter, callback: function callback($$v) {
          _vm.selectedFilter = $$v;
        }, expression: "selectedFilter" } }) : _vm._e()], 1);
  }, staticRenderFns: [],
  data: function data() {
    return {
      id: store.add(),
      selectedFilter: null
    };
  },

  props: {
    theme: Object,
    year: Number,
    color: Function,
    opacity: Number
  },
  computed: {
    source: function source() {
      return this.theme && this.theme.sources[this.theme.mapping[this.year].source];
    },
    control: function control() {
      return this.theme && this.theme.controls[this.theme.mapping[this.year].control];
    },
    controlType: function controlType() {
      var component = {
        radio: 'RadioGroup',
        checkbox: 'CheckboxGroup',
        range: 'RangeSelector'
      };
      return this.control && component[this.control.type];
    },
    accessor: function accessor() {
      var control = this.control,
          year = this.year;

      if (!control || !year) return;
      var accessors = control.items.map(function (item) {
        return function (d) {
          return item.keys.reduce(function (sum, path) {
            return sum + get$3(d[year], path);
          }, 0);
        };
      });

      var threshold = control.threshold || 0;
      var norm = control.normalize ? function (d) {
        return get$3(d[year], control.normalize);
      } : function (d) {
        return 1;
      };

      switch (control.type) {
        case 'radio':
          return function (selected) {
            return function (d) {
              var nom = accessors[selected](d);
              var denom = norm(d);
              if ((control.normalize ? denom : nom) < threshold) return null;
              return nom / denom;
            };
          };

        case 'checkbox':
          return function (selected) {
            return function (d) {
              var nom = selected.reduce(function (sum, index) {
                return sum + accessors[index](d);
              }, 0);
              var denom = norm(d);
              if ((control.normalize ? denom : nom) < threshold) return null;
              return nom / denom;
            };
          };

        case 'range':
          return function (selected) {
            return function (d) {
              var nom = accessors.reduce(function (sum, accessor, index) {
                if (index < selected[0] || index >= selected[1]) return sum;
                return sum + accessor(d);
              }, 0);
              var denom = norm(d);
              if ((control.normalize ? denom : nom) < threshold) return null;
              return nom / denom;
            };
          };
      }
    },
    style: function style() {
      return {
        opacity: this.opacity * 1,
        fillOpacity: this.opacity * 0.7
      };
    }
  },
  methods: {
    onChange: function onChange() {
      var _this = this;

      if (!this.accessor) return;
      if (store[this.id].source === this.source) {
        store.render(this.id, this.accessor(this.selectedFilter), this.theme.format);
        store.adjust(this.id, this.style);
        return;
      }

      var heatmap = store.load(this.id, this.source, this.color);
      if (heatmap instanceof Promise) {
        heatmap.then(function () {
          return _this.onChange();
        });
      } else {
        store.render(this.id, this.accessor(this.selectedFilter), this.theme.format);
        store.adjust(this.id, this.style);
        if (this.opacity > 0.5) store.reorder(this.id);
      }
    }
  },
  watch: {
    accessor: 'onChange',
    selectedFilter: 'onChange',
    control: function control(newValue, oldValue) {
      if (newValue === oldValue) return;
      if (this.control) {
        if (this.control.type === 'radio') this.selectedFilter = 0;else if (this.control.type === 'checkbox') this.selectedFilter = [0];else if (this.control.type === 'range') this.selectedFilter = [0, 1];
      } else {
        store.unload(this.id);
      }
    },
    opacity: function opacity() {
      store.adjust(this.id, this.style);
      if (this.opacity > 0.5) store.reorder(this.id);
    }
  },
  components: {
    RadioGroup: RadioGroup,
    CheckboxGroup: CheckboxGroup,
    RangeSelector: RangeSelector
  }
};

function get$3(d, path) {
  var value = d;
  path.split('.').forEach(function (key) {
    value = value[key];
  });
  return value;
}

Vue.use(CheckboxRadio);
Vue.component('v-select', vSelect);
Vue.component('v-slider', vSlider);
window.vm = new Vue({
  el: '#app',
  data: {
    themes: themes,
    years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    colors: [YlOrRd(), GnBu()],
    baseTheme: null,
    compareTheme: null,
    selectedYear: 2016,
    blend: 0
  },
  computed: {
    selectedTheme: {
      get: function get() {
        var arr = [];
        if (this.baseTheme) arr.push(this.baseTheme);
        if (this.compareTheme) arr.push(this.compareTheme);
        return arr;
      },
      set: function set(arr) {
        this.baseTheme = arr[0];
        this.compareTheme = arr[2] || arr[1];
      }
    },
    baseYear: function baseYear() {
      var _this = this;
      return this.baseTheme && this.baseTheme.years.filter(function (year) {
        return year <= _this.selectedYear;
      }).pop();
    },
    compareYear: function compareYear() {
      var _this2 = this;
      return this.compareTheme && this.compareTheme.years.filter(function (year) {
        return year <= _this2.selectedYear;
      }).pop();
    }
  },
  watch: {
    compareTheme: function compareTheme(theme) {
      if (!theme) this.blend = 0;
    }
  },
  mounted: function mounted() {
    store.map = L.map(this.$refs.map, {
      center: [1.352083, 103.819836],
      zoom: 12,
      minZoom: 12,
      maxZoom: 17,
      maxBounds: [[1.16, 103.582], [1.48073, 104.1647]],
      maxBoundsViscosity: 1.0
    });
    L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution: 'Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
    }).addTo(store.map);
    store.map.attributionControl.setPrefix('<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/>');
  },
  components: { Layer: Layer }
});

}());

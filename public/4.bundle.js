(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{24:function(t,n,e){"use strict";e(25);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(e){var r=f();return function(){var t,n=l(e);return t=r?(t=l(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function c(t){var e="function"==typeof Map?new Map:void 0;return function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)}(t)}function r(t,n,e){return(r=f()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&a(r,e.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(o,c(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"menus",set:function(t){this._menus=t,this.render()}},{key:"renderError",value:function(t){this.innerHTML="",this.innerHTML+='<p class="no-data">'.concat(t,"</p>"),console.log(t)}},{key:"render",value:function(){var e=this;this.innerHTML="",this._menus.forEach(function(t){var n=document.createElement("menu-item");n.menu=t,e.appendChild(n)})}}])&&u(t.prototype,n),e&&u(t,e),o}();customElements.define("menu-list",p)},25:function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(e){var r=f();return function(){var t,n=l(e);return t=r?(t=l(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function c(t){var e="function"==typeof Map?new Map:void 0;return function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)}(t)}function r(t,n,e){return(r=f()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&a(r,e.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(o,c(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"menu",set:function(t){this._menu=t,this.render()}},{key:"render",value:function(){var t=this._menu;this.innerHTML='\n        <a href="'.concat(t.link,'" target="').concat(t.target,'" rel="').concat(t.rel,'">').concat(t.label,"</a>\n    ")}}])&&u(t.prototype,n),e&&u(t,e),o}();customElements.define("menu-item",e)},26:function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(e){var r=f();return function(){var t,n=l(e);return t=r?(t=l(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function c(t){var e="function"==typeof Map?new Map:void 0;return function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)}(t)}function r(t,n,e){return(r=f()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&a(r,e.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(o,c(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"show",value:function(){this.render()}},{key:"hide",value:function(){this.innerHTML=""}},{key:"renderLoader",value:function(){this.innerHTML='\n      <div class="ph-item">\n          <div class="ph-col-12">\n              <div class="ph-picture"></div>\n          </div>\n      </div>\n    '}},{key:"render",value:function(){this.innerHTML='\n      <div class="hero">\n        <div class="hero__inner">\n          <div>\n            <h1 class="hero__title"><strong>Menu Makanan 4 Sehat, 5 Sempurna</strong></h1>\n            <p class="hero__tagline">Hidup sehat dengan makan makanan pokok, lauk pauk, sayur-sayuran, buah-buahan, dan lengkapi dengan meminum susu.</p>\n          </div>\n        </div>\n      </div>\n    '}}])&&u(t.prototype,n),e&&u(t,e),o}();customElements.define("hero-bar",e)},34:function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(e){var r=f();return function(){var t,n=l(e);return t=r?(t=l(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function c(t){var e="function"==typeof Map?new Map:void 0;return function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)}(t)}function r(t,n,e){return(r=f()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&a(r,e.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(o,c(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"buttons",set:function(t){var n=t.id,t=t.text;this._id=n,this._text=t,this.render()}},{key:"render",value:function(){this.innerHTML='<button type="button" class="btn btn-primary" id="'.concat(this._id,'" data-toggle="false">').concat(this._text,"</button>")}}])&&u(t.prototype,n),e&&u(t,e),o}();customElements.define("link-all-button",e)}}]);
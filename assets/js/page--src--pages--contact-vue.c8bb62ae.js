(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{w981:function(t,e,a){"use strict";a.r(e);var n,o=a("G0B5"),s=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),r=function(){return(r=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t,e,a,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(s<3?o(r):s>3?o(e,a,r):o(e,a))||r);return s>3&&r&&Object.defineProperty(e,a,r),r},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.formData={},e}return s(e,t),e.prototype.handleSubmit=function(t){var e=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this._encode(r({"form-name":t.target.getAttribute("name")},this.formData))}).then((function(){return e.$router.push("/send-success")})).catch((function(t){return alert(t)}))},e.prototype._encode=function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},e=i([o.a],e)}(o.c),c=a("KHd+"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("h1",{staticClass:"title"},[t._v("Contact")]),a("div",{staticClass:"content"},[a("p",[t._v("\n      お問合せはこちらからお願いいたします。 ご返信にお時間をいただく場合がございます。\n      作品の販売は現在展覧会でのみ行っております。詳細は作家のSNSをご確認ください。\n    ")]),a("p",[t._v("\n      To contact us, please fill in this form. Please note that it may take some time for us to reply to your inquiry.\n      The works are currently available for sale only at the exhibition. Please check the artist's SNS for details.\n    ")])]),a("form",{attrs:{name:"contact",method:"POST","data-netlify":"true"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("お名前")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"input",attrs:{type:"text",name:"name"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("メールアドレス")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",attrs:{type:"email",name:"email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("件名")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.subject,expression:"formData.subject"}],staticClass:"input",attrs:{type:"text",name:"subject"},domProps:{value:t.formData.subject},on:{input:function(e){e.target.composing||t.$set(t.formData,"subject",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("内容")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],staticClass:"textarea",attrs:{name:"message"},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}})])]),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("div",{attrs:{"data-netlify-recaptcha":"true"}}),a("button",{staticClass:"button is-link has-text-white",attrs:{type:"submit"}},[t._v("送信")])])])])])}),[],!1,null,null,null);e.default=u.exports}}]);
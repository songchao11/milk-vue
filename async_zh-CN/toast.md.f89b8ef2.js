webpackJsonp([18],{

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(416);

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51abeddc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_toast_md__ = __webpack_require__(417);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51abeddc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_toast_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Toast 轻提示")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Toast } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    toast(type,info){\n      Toast[type](info);\n    },\n    toastDiy(){\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" second = "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("3")]),_vm._v("; "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//倒计时3秒")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" toast = Toast.loading({\n         "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("mask")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//背景蒙层")]),_vm._v("\n         duration: "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(",       "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// 持续展示 toast")]),_vm._v("\n         forbidClick: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// 禁用背景点击")]),_vm._v("\n         message: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'倒计时 3 秒'")]),_vm._v("\n       });\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" timer = setInterval("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {\n        second--;\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" (second) {\n          toast.message = "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("`倒计时 "),_c('span',{attrs:{"class":"hljs-subst"}},[_vm._v("${second}")]),_vm._v(" 秒`")]),_vm._v(";\n        } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("else")]),_vm._v(" {\n          clearInterval(timer);\n          Toast.clear();\n        }\n      }, "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1000")]),_vm._v(");\n    }\n  }\n}\n")])]),_vm._v(" "),_c('h4',[_vm._v("文字提示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_vm._v("Toast("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提示文案，建议不超过15个字~'")]),_vm._v(");\n")])]),_vm._v(" "),_c('h4',[_vm._v("加载提示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_vm._v("Toast.loading("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'加载中提示'")]),_vm._v(");\n")])]),_vm._v(" "),_c('h4',[_vm._v("成功/失败提示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_vm._v("Toast.success("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'成功文案'")]),_vm._v(");\nToast.fail("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'失败文案'")]),_vm._v(");\n")])]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"default\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toast('info','提示文案，建议不超过15个字~')\"")]),_vm._v(">")]),_vm._v("default"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"default\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toast('loading','加载中提示')\"")]),_vm._v(">")]),_vm._v("loading"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"default\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toast('success','成功文案')\"")]),_vm._v(">")]),_vm._v("success"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"default\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toast('fail','失败文案')\"")]),_vm._v(">")]),_vm._v("fail"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("高级用法")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastDiy\"")]),_vm._v(">")]),_vm._v("toast diy"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("Function")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("方法名")]),_vm._v(" "),_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("返回值")]),_vm._v(" "),_c('th',[_vm._v("介绍")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("Toast")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options | message")])]),_vm._v(" "),_c('td',[_vm._v("toast 实例")]),_vm._v(" "),_c('td',[_vm._v("展示提示信息")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Toast.loading")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options | message")])]),_vm._v(" "),_c('td',[_vm._v("toast 实例")]),_vm._v(" "),_c('td',[_vm._v("展示加载提示")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Toast.success")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options | message")])]),_vm._v(" "),_c('td',[_vm._v("toast 实例")]),_vm._v(" "),_c('td',[_vm._v("展示成功提示")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Toast.fail")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options | message")])]),_vm._v(" "),_c('td',[_vm._v("toast 实例")]),_vm._v(" "),_c('td',[_vm._v("展示失败提示")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Toast.clear")]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("void")])]),_vm._v(" "),_c('td',[_vm._v("关闭提示")])])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("type")]),_vm._v(" "),_c('td',[_vm._v("提示类型")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("text")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("loading")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("success")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("fail")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("html")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("message")]),_vm._v(" "),_c('td',[_vm._v("内容")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("''")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("position")]),_vm._v(" "),_c('td',[_vm._v("位置")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("middle")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("top")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("bottom")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("mask")]),_vm._v(" "),_c('td',[_vm._v("是否显示背景蒙层")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("forbidClick")]),_vm._v(" "),_c('td',[_vm._v("禁止背景点击")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("duration")]),_vm._v(" "),_c('td',[_vm._v("时长(ms)")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("3000")])]),_vm._v(" "),_c('td',[_vm._v("值为 0 时，toast 不会消失")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
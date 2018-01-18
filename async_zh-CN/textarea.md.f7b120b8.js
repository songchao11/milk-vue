webpackJsonp([19],{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(406);

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f9f39e9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_textarea_md__ = __webpack_require__(407);
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f9f39e9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_textarea_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Textarea 多行输入")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Textarea } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(Textarea.name, Textarea);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" {Toast} "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"packages\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  data(){\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("modelValue")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phoneError")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    setFocus(){\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.clickfocus.$refs.input.focus();\n    },\n    checkValue(value){\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".phoneError=!!value;\n    },\n    errorClick(value){\n      Toast.fail("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("`Error:"),_c('span',{attrs:{"class":"hljs-subst"}},[_vm._v("${value}")]),_vm._v("`")]),_vm._v(");\n    },\n    handleChange(val){\n      "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'change:'")]),_vm._v("+val);\n    }\n  }\n}\n")])]),_vm._v(" "),_c('h4',[_vm._v("基本")]),_vm._v(" "),_c('p',[_vm._v("type 支持"),_c('code',{pre:true},[_vm._v("text")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("number")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("date")]),_vm._v("等类型，默认为"),_c('code',{pre:true},[_vm._v("text")])]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"autoHeight\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"autoHeight\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"123\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"handleChange\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("auto-height")]),_vm._v(">")]),_vm._v("autoHeight"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"multi-rows\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rows")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autofocus")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"auto focus\"")]),_vm._v(">")]),_vm._v("autofocus"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"clickfocus\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click to focus\"")]),_vm._v(">")]),_vm._v("click focus"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"setFocus\"")]),_vm._v(">")]),_vm._v("click button to focus"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("标题")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("空值")]),_vm._v(" "),_c('li',[_vm._v("label-align 支持"),_c('code',{pre:true},[_vm._v("left")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("center")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("right")]),_vm._v("类型，默认为"),_c('code',{pre:true},[_vm._v("left")])]),_vm._v(" "),_c('li',[_vm._v("label-number 值为1-10，默认为5")]),_vm._v(" "),_c('li',[_vm._v("click-to-focus 点击标题聚焦")])]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"label empty\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"label icon\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"display: inline-flex;vertical-align: middle;\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"search\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"#108ee9\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-icon")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"label align left\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(">")]),_vm._v("left"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"label align center\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("center"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"label align right\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"right\"")]),_vm._v(">")]),_vm._v("right"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"label number 3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-number")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_vm._v("labelNumber 3"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click-to-focus")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click label to focus\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-number")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"7\"")]),_vm._v(" >")]),_vm._v("click to focus"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("计数")]),_vm._v(" "),_c('p',[_vm._v("count: 计数功能,兼具最大长度,默认为0,代表不开启计数功能")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"limited value length 10\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":count")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"10\"")]),_vm._v(">")]),_vm._v("count"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"limited value length 100\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Limited value length 100\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rows")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":count")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"100\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("输入绑定")]),_vm._v(" "),_c('p',[_vm._v("输入绑定及 "),_c('code',{pre:true},[_vm._v("readonly")]),_vm._v("，"),_c('code',{pre:true},[_vm._v("disabled")]),_vm._v(" 状态")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"textarea model\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("auto-height")]),_vm._v(">")]),_vm._v("v-model"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value readonly\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modelValue\"")]),_vm._v(">")]),_vm._v("readonly"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value disabled\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modelValue\"")]),_vm._v(">")]),_vm._v("disabled"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("输入验证")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("添加 error 属性，显示错误提示")]),_vm._v(" "),_c('li',[_vm._v("添加 clear 属性，显示清除标识")])]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"enter show error\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkValue\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":error")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"phoneError\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@error-click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"errorClick\"")]),_vm._v(">")]),_vm._v("error"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"enter show clear\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("clear")]),_vm._v(">")]),_vm._v("clear"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-textarea")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("id")]),_vm._v(" "),_c('td',[_vm._v("输入框的id")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("name")]),_vm._v(" "),_c('td',[_vm._v("输入框的name")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("value")]),_vm._v(" "),_c('td',[_vm._v("输入框的值")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("label-number")]),_vm._v(" "),_c('td',[_vm._v("输入框标签最大字数")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_vm._v("5")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("label-align")]),_vm._v(" "),_c('td',[_vm._v("输入框标签对齐方式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("left")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("click-to-focus")]),_vm._v(" "),_c('td',[_vm._v("点击标签是否聚焦")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("autofocus")]),_vm._v(" "),_c('td',[_vm._v("是否自动聚焦")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("auto-height")]),_vm._v(" "),_c('td',[_vm._v("是否高度自适应")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("readonly")]),_vm._v(" "),_c('td',[_vm._v("是否只读")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("disabled")]),_vm._v(" "),_c('td',[_vm._v("是否禁用输入框")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("error")]),_vm._v(" "),_c('td',[_vm._v("输入框是否有错误")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("clear")]),_vm._v(" "),_c('td',[_vm._v("显示清除")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td')]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("count")]),_vm._v(" "),_c('td',[_vm._v("计数功能,兼具最大长度"),_c('br'),_vm._v("默认为0,代表不开启计数功能")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("0")])]),_vm._v(" "),_c('td')])])]),_vm._v(" "),_c('h3',[_vm._v("Event")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("事件名称")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("回调参数")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("change")]),_vm._v(" "),_c('td',[_vm._v("输入框之改变时触发")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String|Number")]),_vm._v(" 输入框值")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("focus")]),_vm._v(" "),_c('td',[_vm._v("输入框聚焦时触发")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String|Number")]),_vm._v(" 输入框值")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("blur")]),_vm._v(" "),_c('td',[_vm._v("输入框失焦时触发")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String|Number")]),_vm._v(" 输入框值")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("error-click")]),_vm._v(" "),_c('td',[_vm._v("点击错误提示时触发")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String|Number")]),_vm._v(" 输入框值")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
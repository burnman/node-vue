(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11465fb4"],{"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},"5ec1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("分类列表")]),n("el-table",{attrs:{data:t.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),n("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),n("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.$router.push("/categories/edit/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},o=[],c=(n("7f7f"),n("96cf"),n("3b8d")),i={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("rest/categories");case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),remove:function(t){var e=this;this.$confirm('是否确定要删除分类 "'.concat(t.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("rest/categories/".concat(t._id));case 2:n.sent,e.$message({type:"success",message:"删除成功!"}),e.fetch();case 5:case"end":return n.stop()}}),n)}))))}}},u=i,a=n("2877"),f=Object(a["a"])(u,r,o,!1,null,null,null);e["default"]=f.exports},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,c=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&r(o,i,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),c=n("6a99"),i=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),o)try{return i(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"9e1e":function(t,e,n){t.exports=!n("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")((function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a}))},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-11465fb4.08a17ce7.js.map
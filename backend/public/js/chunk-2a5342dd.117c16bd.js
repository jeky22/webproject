(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a5342dd"],{"188f":function(t,s,e){},"5f6c":function(t,s,e){"use strict";var i=e("188f"),c=e.n(i);c.a},c84b:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"outer"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"notice"},[e("div",{staticClass:"notice_"},[e("div",{staticClass:"com1"},[e("a",[t._v("Study: "+t._s(t.notice.studyName)+" ")]),e("a",[t._v(" Type: "+t._s(t.notice.studyType))]),e("br"),e("a",[t._v("작성자: "+t._s(t.notice.writer))]),e("a",[t._v("제목: "+t._s(t.notice.title))])]),e("br"),e("a",[t._v("content")]),e("div",{staticClass:"com2"},[t._v(t._s(t.notice.content))])]),e("button",{staticClass:"mybtn",on:{click:t.editNotice}},[t._v("수정")]),t._v(" "),e("button",{staticClass:"mybtn",on:{click:t.deleteNotice}},[t._v("삭제")]),t._v(" "),e("button",{staticClass:"mybtn"},[t._v("참가")])])])])},c=[],a={data:function(){return{notice:{}}},methods:{editNotice(){var t=this.$route.params.id;this.$router.push({name:"Edit",params:{id:t}})},async deleteNotice(){const t=await this.$store.dispatch("deleteNotice",{id:this.$route.params.id});!1===t.success?alert(t.message):this.$router.push("/notice")}},async beforeCreate(){const t=await this.$store.dispatch("fetchNotice",{id:this.$route.params.id});!1===t.success?alert(t.message):this.notice=t.result}},n=a,o=(e("5f6c"),e("2877")),r=Object(o["a"])(n,i,c,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2a5342dd.117c16bd.js.map
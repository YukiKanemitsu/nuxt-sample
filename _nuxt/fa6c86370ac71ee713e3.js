(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e){e.exports=JSON.parse('{"items":[{"id":1,"name":"Apple","price":120,"description":"An apple is a sweet, edible fruit produced by an apple tree.","new":true},{"id":2,"name":"Banana","price":80,"description":"A banana is an edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.","new":true},{"id":3,"name":"Grape","price":320,"description":"A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.","new":true},{"id":4,"name":"Peach","price":300,"description":"The peach is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated.","new":false},{"id":5,"name":"Melon","price":800,"description":"A melon is any of various plants of the family Cucurbitaceae with sweet edible, fleshy fruit.","new":false}]}')},167:function(e,t,n){"use strict";n.r(t);var i=n(166),r={data:function(){return{items:i.items}}},a=n(10),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("\n        Items\n    ")]),e._v(" "),n("table",{attrs:{border:"1"}},[e._m(0),e._v(" "),n("tbody",e._l(e.items,(function(t){return n("tr",{key:t.id},[n("td",[e._v("\n                    "+e._s(t.id)+"\n                ")]),e._v(" "),n("td",[n("nuxt-link",{attrs:{to:"/items/"+t.id}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])],1),e._v(" "),n("td",[e._v("\n                    "+e._s(t.price)+"\n                ")])])})),0)]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("button",[n("router-link",{attrs:{to:"/items/new"}},[e._v("\n            Add Item\n        ")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("\n                    id\n                ")]),this._v(" "),t("th",[this._v("\n                    name\n                ")]),this._v(" "),t("th",[this._v("\n                    price\n                ")])])])}],!1,null,null,null);t.default=s.exports}}]);
import qlextent from '../extent/qlextent.js';
/*
*将el转成文档碎片fragment,解析完成后再添加回真实的dom节点中
 */
function Compile (el, vm) {
	this.vm = vm;
	this.el = document.querySelector(el);
	this.fragment = null;
	this.init();
}
qlextent.extendClass(Compile, {
	init: function () {
		if (this.el) {
			this.fragment = this.node2Fragment(this.el);
			this.compileElement(this.fragment);
			this.el.appendChild(this.fragment);
		}
		else {
			alert('DOM元素不存在！');
		}
	},
	node2Fragment: function (el) {
		var fragment = document.createDocumentFragment();
		var child = el.firstChild;
		while (child) {
			fragment.appendChild(child);
		}
		return fragment;
	},
	compileElement: function (el) {
		var childNodes = el.childNodes;
		var t = this;
		[].slice.call(childNodes).forEach(function (node) {
			var reg = 
		})
	}
})

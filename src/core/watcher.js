import qlextent from '../extent/qlextent.js';
import Dep from './dep.js';

function Watcher (vm, exp, cb ) {
	this.cb = cb;
	this.vm = vm;
	this.exp = exp;
	this.value = this.get();//将自己添加到订阅器
}
qlextent.extendClass(Watcher,{
	update: function () {
		this.run();
	},
	run: function () {
		var value = this.vm.data[this.exp];
		var oldVal = this.value;
		if (value !== oldVal) {
			this.value = value;
			this.cb.call(this.vm, value, oldVal);
		}
	},
	get : function () {
		Dep.target = this;
		var value = this.vm.data[this.exp]
		Dep.target = null;
		return value;
	}
});
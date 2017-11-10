import qlextent from '../extent/qlextent.js';
import observe from './observer.js';
import Compile from './compile.js';

function Cuni (options) {
	var t = this;
	this.data = options.data;
	this.methods = options.methods;

	Object.keys(this.data).forEach(function (key) {
		t.proxyKeys(key);
	});

	observe(this.data);
	new Compile(options.el, this);
	options.mounted.call(this);
}
qlextent.extendClass(Cuni, {
	proxyKeys: function (key) {
		var t = this;
		Object.defineProperty(this, key, {
			enumerable: false,
			configurable: true,
			get: function () {
				return t.data[key];
			},
			set: function (newVal) {
				t.data[key] = newVal;
			}
		});
	}
})
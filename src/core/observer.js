import qlextent from '../extent/qlextent.js';
import Dep from './dep.js';
function Observer (data) {
	this.data = data;
	this.walk(data);
}
qlextent.extendClass(Observer, {
	definePro: function (obj, key, val ) {
		observer(val);//遍历属性
		var dep = new Dep();
		var childObj = observe(val);
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get: function () {
				if (Dep.target) {
					dep.addSubs(Dep.target);//增加订阅者
				}
				return val;
			},
			set: function(newVal) {
				if (val === newVal) {
					return ;
				}
				else {
					val = newVal;
					console.log('key被监听');
					dep.notify();//通知订阅者
				}
			}
		});
	},
	walk: function (obj) {
		var t = this;
		Object.keys(obj).forEach(function (key) {
			t.definePro(obj,key,obj[key]);
		});
	}
})


function observe (obj) {
	if (!obj || typeof obj !== 'object') {
		return ;
	}
	else {
		return new Observer(obj);
	}
}

export default observer
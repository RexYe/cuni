import qlextent from '../extent/qlextent.js';

function definePro (obj,key,val) {
	observer(val);
	var dep = new Dep();
	Object.defineProperty(obj,key, {
		enumerable: true,
		configurable: true,
		get: function () {
			if () {
				//增加订阅者
				dep.addSubs();
			}
			return val;
		},
		set: function (newVal) {
			if(val === newVal) {
				return ;
			}
			else{
				val = newVal;
				console.log('key被监听');
				dep.notify();
			}
		}
	});
}

function observer (obj) {
	if(!obj || typeof obj !== 'object') {
		return ;
	}
	else{
		Object.keys(obj).forEach(function (key) {
			definePro(obj,key,obj[key]);
		});
	}
}
//消息容器
function Dep () {
	//订阅者
	this.subscribers = [];
}
qlextent.extendClass(Dep,{
	//添加订阅者
	addSubs: function (sub) {
		this.subscribers.push(sub)
	},
	notify: function () {

	}
})
var library = {
	book1: {
		name: ''
	},
	book2: ' '
}

observer(library);
library.book1.name = 'Vue权威指南';
library.book2 = 'nobook';

export default observer
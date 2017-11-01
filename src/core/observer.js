import qlextent from '../extent/qlextent.js';

function definePro (obj,key,val) {
	observer(val);
	Object.defineProperty(obj,key, {
		enumerable: true,
		configurable: true,
		get: function () {
			return val;
		},
		set: function (newVal) {
			val = newVal;
			console.log('key被监听');
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
function Dep () {
	this.subs = [];
}

var library = {
	book1: {
		name: ''
	},
	book2: ' '
}

observer(library);
library.book1.name = 'Vue权威指南';
library.book2 = 'nobook';

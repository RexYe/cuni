function definePro(obj,key,val) {
	observer(val);
	Object.defineProperty(obj,key, {
		enumerable: true,
		configurable: true,
		get: function () {
			reutrn val;
		},
		set : function (newVa) {
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
		Object.key(obj).forEach(function (key) {
			definePro(obj,key,obj[key]);
		});
	}
}
var library = {
	book1: {
		name: ''
	},
	book2: ' '
}

observer(library);
library.book1.name = 'Vue权威指南';

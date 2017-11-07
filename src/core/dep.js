import qlextent from '../extent/qlextent.js';

//消息容器
function Dep () {
	this.subscribers = [];//订阅者
}
qlextent.extendClass(Dep, {
	//添加订阅者
	addSubs: function (sub) {
		this.subscribers.push(sub);
	},
	notify: function () {
		this.subscribers.forEach(function (sub) {
			sub.update();
		});
	}
});

Dep.target = null;

export default Dep
import qlextent from '../extent/qlextent.js';
//消息容器
function Dep () {
	//订阅者
	this.subscribers = [];
}
qlextent.extendClass(Dep,{
	//添加订阅者
	addSubs: function (sub) {
		this.subscribers.push(sub);
	},
	notify: function () {
		this.subscribers.forEach(function (sub) {
			sub.update();
		})
	}
})
Dep.target = null;

export default Dep
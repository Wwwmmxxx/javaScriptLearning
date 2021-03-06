// WakeMap的键名对象不会增加引用计数器，如果一个对象不被引用了会自动删除

// 下例当hd删除时内存即清除，因为WeakMap是弱引用不会产生引用计数
// 当垃圾回收时因为对象被删除，这时WakeMap也就没有记录了

let map = new WeakMap();
let hd = { "abc": '1' };
map.set(hd, "hdcms");
hd = null;

// 此时还未进行垃圾回收,里面的key还是hd = {"abc":"a"};
console.log(map);

// 当程序运行一段时间后,垃圾回收触发
setTimeout(() => {
  console.log(map);
}, 1000);
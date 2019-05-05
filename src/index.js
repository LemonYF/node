'use strict';
// 引入hello模块:
// import { greet, GoodBye } from './module/hello'
// 需要引入整个export的对象，使用其方法和变量,继承时不加括号
// 如果要输出一个键值对象{}，可以利用exports这个已存在的空对象{}，并继续在上面添加新的键值；
// 如果要输出一个函数或数组，必须直接对module.exports对象赋值。
// 所以我们可以得出结论：直接对module.exports赋值，可以应对任何情况：


// let greet1 = require('../../FrontEnd/article/node/src/module/hello').greet
let file = require('./module/module')
let http = require('./module/http-module')
let fileServer = require('./module/file_server')
// 或者
// let greet1 = require('./module/hello')
// 错误写法
// let greet1 = require('./module/hello').greet()

console.log('this is a node program!')

let name = 'Lemony'

// greet1(name)
// console.log(global)
// 判断js执行环境
// if (typeof(window) === 'undefined') {
//     console.log('node.js');
// } else {
//     console.log('browser');
// }

// file.read()
// file.readSync()
// file.writeFile()
// file.readStream()
// file.writeStream()
// http.startServer()

fileServer.fileServer()

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

// greet1.greet(name)
// greet1.goodBye(name)
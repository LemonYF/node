/**
 * 什么是事件
 *
 * **/

let events = require('events')
let myEmitter = new events.EventEmitter()

// 定义事件，传递参数
myEmitter.on('someEvent', function (message) {
    console.log(message)
})

// 手动触发，通过emit
myEmitter.emit('someEvent', 'hello event')
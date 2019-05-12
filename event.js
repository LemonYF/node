let events = require('events')
let myEmitter = new events.EventEmitter()

// 写时间
myEmitter.on('someEvent', function (message) {
    console.log(message)
})


// 触发事件
myEmitter.emit('someEvent', '11111')

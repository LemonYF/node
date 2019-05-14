/**
 * 什么是事件
 *
 * **/

let events = require('events')
let util = require('util')
let myEmitter = new events.EventEmitter()
let Person = function (name) {
    this.name = name
}

// 让Person继承event.EventEmitter
util.inherits(Person, myEmitter.constructor)

let xiaoming = new Person('xiaoming')
let lili = new Person('lili')
let lucy = new Person('lucy')

let person =[xiaoming, lili, lucy]
// 循环绑定事件
person.forEach(person => {
    person.on('speak', function (message) {
        console.log(person.name + message)
    })
})
// 循环触发事件
person.forEach(item => {
    item.emit('speak', 'nihao')
})

// 定义事件，传递参数
myEmitter.on('someEvent', function (message) {
    console.log(message)
})

// 手动触发，通过emit
myEmitter.emit('someEvent', 'hello event')
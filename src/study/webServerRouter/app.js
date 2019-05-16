let server = require('./server')
let route = require('./router')
let handler = require('./handler')

let handle = {}
handle['/'] = handler.home
handle['/homepage'] = handler.home
handle['/other'] = handler.other

console.log(handle)

// 把函数对象传入进去
server.startServer(route.route, handle)
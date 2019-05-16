/**
 * 服务器路由
 * **/

let http = require('http')
let fs = require('fs')
let path = require('path')
let url = require('url')

function startServer(route, handle) {
    let onRequest = (request, response) => {
        console.log('request received')
        console.log('url', request.url)

        // 对url做格式处理
        let url1 = url.parse(request.url).pathname
        // 参数取值
        let params = url.parse(request.url, true).query


        route(url1, handle, response, params)
        response.end()
    }
    let server = http.createServer(onRequest)

    server.listen(2999)
    console.log('server on 2999')
}

module.exports = {
    startServer: startServer
}
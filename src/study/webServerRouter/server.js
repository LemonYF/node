/**
 * 服务器路由
 * **/

let http = require('http')
let fs = require('fs')
let path = require('path')
console.log(path.resolve(__dirname,'../../'))

function startServer(route, handle) {
    let onRequest = (request, response) => {
        console.log('request received')
        console.log('url', request.url)

        const url = request.url
        route(url, handle, response)
        // if (url === '/' || url === '/home') {
        //     // 操作response
        //     response.writeHead(200, {
        //         'Content-Type': 'text/html'
        //     })
        //
        //     let readStream = fs.createReadStream(path.resolve(__dirname,'../../') + '/mediaQuery.html')
        //     // response.write('hello node')
        //     readStream.pipe(response)
        // } else {
        //     // 操作response
        //     response.writeHead(200, {
        //         'Content-Type': 'text/html'
        //     })
        //
        //     // let readStream = response.write('hello node')
        //     response.end('sorry, you are lost')
        //     // readStream.pipe(response)
        // }
        response.end()
    }
    let server = http.createServer(onRequest)

    server.listen(2999)
    console.log('server on 2999')
}

module.exports = {
    startServer: startServer
}
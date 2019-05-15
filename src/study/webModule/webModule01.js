/**
 * 返回响应HTML
 * **/
let http = require('http')
let fs = require('fs')
let path = require('path')

// 启动一个web服务
function startServer() {
    let onRequest = (request, response) => {
        console.log('request received')
        // 操作response
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })

        let readStream = fs.createReadStream(path.resolve(__dirname,'../../../') + '/mediaQuery.html')
        readStream.pipe(response)
    }
    let server = http.createServer(onRequest)
    server.listen(2999)
    console.log(path.resolve(__dirname,'../../'))
    console.log('server on 2999')
}

module.exports = {
    startServer: startServer
}
// exports.startServer = startServer()
/**
 * 响应纯文本
 * **/
let http = require('http')

let onRequest = (request, response) => {
    console.log('request received')
    // 操作response
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.write('hello node')
    response.end()
}
let server = http.createServer(onRequest)

server.listen(2999)
console.log('server on 2999')
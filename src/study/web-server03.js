/**
 * 返回响应HTML
 * **/
let http = require('http')
let fs = require('fs')
let path = require('path')
console.log(path.resolve(__dirname,'../../'))

let onRequest = (request, response) => {
    console.log('request received')
    // 操作response
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    let readStream = fs.createReadStream(path.resolve(__dirname,'../../') + '/mediaQuery.html')
    let html = ''
    // response.write('hello node')
    readStream.pipe(response)
}
let server = http.createServer(onRequest)

server.listen(2999)
console.log('server on 2999')
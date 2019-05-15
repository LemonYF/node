/**
 * 返回响应JSON
 * **/
let http = require('http')

let onRequest = (request, response) => {
    console.log('request received')
    // 操作response
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    let myJson = {
        name: '1111',
        job: '2222',
        age: '33'
    }
    // response.write('hello node')
    response.end(JSON.stringify(myJson))
}
let server = http.createServer(onRequest)

server.listen(2999)
console.log('server on 2999')
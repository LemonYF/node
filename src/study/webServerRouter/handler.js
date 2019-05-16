let fs = require('fs')
let path =require('path')
// 定义处理函数
function home(response, params) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    // response.end('hello home page' + JSON.stringify(params))
    // console.log((__dirname + '/index.html'))
    let readStream = fs.createReadStream(path.resolve(__dirname,'../../../') + '/mediaQuery.html')
    readStream.pipe(response)
}

function other(response, params) {
    response.end('other page' + JSON.stringify(params))
}

module.exports = {
    home: home,
    other: other
}
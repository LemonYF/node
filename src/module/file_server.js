'use strict';

// 文件服务器
function createServer() {
    let fs = require('fs'),
        url = require('url'),
        path = require('path'),
        http = require('http');

    let root = path.resolve(process.argv[2] || '')
    console.log('Static root dir: ' + root)

    let server = http.createServer(function (request, response) {
        // 获取url path,解析url，获取url对象，并获取名称
        let pathName = url.parse(request.url).pathname
        // 获取对应的本地文件路径
        let filepath = path.join(root, pathName)
        // 获取文件状态
        fs.stat(filepath, function (err, stats) {
            if (!err && stats.isFile()) {
                // 没有出错并且文件存在:
                console.log('200 ' + request.url);
                // 发送200响应:
                response.writeHead(200);
                // 将文件流导向response:
                fs.createReadStream(filepath).pipe(response);
            } else {
                // 出错了或者文件不存在:
                console.log('404 ' + request.url);
                // 发送404响应:
                response.writeHead(404);
                response.end('404 Not Found');
            }
        })
    })

    server.listen(8080);
    console.log('Server is running at http://127.0.0.1:8080/');
}


module.exports = {
    fileServer: createServer
}


'use strict';

// 导入http模块:
let http = require('http');
// 导入url模块
let url = require('url')
// 导入path模块 解析当前目录
let path = require('path')

function startServer() {
    // request对象封装了HTTP请求，调用我们request对象的属性状语从句：方法就可以拿到所有HTTP请求的信息;
    // response对象封装了HTTP响应，操作我们response对象的方法，就可以把HTTP响应返回给浏览器。
    // 创建http server，并传入回调函数:
    let server = http.createServer(function (request, response) {
        // 回调函数接收request和response对象,
        // 获得HTTP请求的method和url:
        console.log(request.method + ': ' + request.url);
        // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
        response.writeHead(200, {'Content-Type': 'text/html'});
        // 将HTTP响应的HTML内容写入response:
        response.end('<h1>Hello world!</h1>');
    });

// url.parse 将字符串解析为url对象
    console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))

// 解析当前目录
    let workDir = path.resolve('.')
// 组合完整的文件路径:当前目录+'pub'+'index.html':
    let filePath = path.join(workDir, 'src', 'index.js');

    console.log(filePath)
    // 让服务器监听8080端口:
    server.listen(8080);

    console.log('Server is running at http://127.0.0.1:8080/');
}

module.exports = {
    startServer: startServer
}
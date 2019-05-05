'use strict';

let fs = require('fs')

// 异步代码读取
function readFile() {
    // node标准的回调函数，第一个参数代表错误信息，第二个代表结果
    fs.readFile('sample.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

// 同步代码读取
function readFileSync() {
    try {
        let data = fs.readFileSync('sample.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        // 出错了
        console.log(111, err)
    }
}

// 异步代码写入
function writeFile() {
    let data = 'hello, lemony'
    fs.writeFile('./src/module/output.md', data, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('ok')
            fs.stat('output.md', function (err, stat) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(stat)
                }
            })
        }
    })
}

// 流数据 data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
function readStream() {
    let rs = fs.createReadStream('output.md', 'utf-8')
    rs.on('data', function (chunk) {
        console.log('DATA')
        console.log('读取流', chunk)
    })

    rs.on('end', function () {
        console.log('END');
    })

    rs.on('error', function (err) {
        console.log('ERROR: ' + err);
    })
}

// 流数据 流的形式写入文件，只需要不断调用write()方法，最后以end()结束
function writeStream() {
    console.log('写入流')
    let ws = fs.createWriteStream('output.md', 'utf-8');
    ws.write('使用Stream写入文本数据...\n');

    ws.write('END.');

    ws.end();
}

// pipe , 水管，流的顺序化
function Pipe() {
    let read = new readStream()
    let write = new writeStream()
    read.pipe(write)
}

module.exports = {
    read: readFile,
    readSync: readFileSync,
    writeFile: writeFile,
    readStream: readStream,
    writeStream: writeStream

}
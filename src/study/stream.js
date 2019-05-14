/**
 * nodejs中的流也是一样，是有序且有方向的
 * nodejs中的流可以是可读的，可写的或者是可读写的。
 * 而且另外一点，所有的流都是事件中EventEmitter的实例
 * 可以处理数据，提高性能
 * **/

let fs = require('fs')
// 新建一个读取流
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt')
// 新建一个写入流
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

let data = ''

// 这个是流读取时触发
myReadStream.on('data', chunk => {
    data += chunk
    // console.log('new chunk recevied')
    // console.log(chunk)
    //将流写入文件中
    myWriteStream.write(chunk)
})

// myReadStream.on('data', function (chunk) {
//     console.log('new chunk recevied')
//     console.log(chunk)
// })

// 这个是流读取结束时触发
myReadStream.on('end', () => {
    console.log(data)
})

// 另外一个读取和写入的方法
/**
 let writeData = 'hello world'
 myWriteStream.write(writeData)
 myWriteStream.end()
 myWriteStream.on('finish', () => {
    console.log('finished')
})
**/


/**
 * 以下是管道内容
 **/

myReadStream.pipe(myWriteStream)
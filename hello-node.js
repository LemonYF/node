// console.log(global)
console.log(__dirname)
console.log(__filename)

function Hi(name) {
    console.log('hi', name)
}

function callBackFun(fun, name) { // 回调函数，传递函数为参数
    fun(name)
}

callBackFun(Hi, 'YeFan') // 回调函数

callBackFun(function (name) {
    console.log(name + ' hi')
}, 'yefan1')

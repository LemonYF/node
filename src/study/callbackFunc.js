/**
 * 构造函数
 * **/
function sayHi() {
    console.log('hello hi')
}

sayHi()

/**
 * 函数表达式
 **/

const sayBye = function (name) {
    console.log('bye' + name)
}

sayBye()

/**
 * 什么是回调函数
 * 参数传一个函数，并在其中执行
 * **/

function call(fun, name) {
    fun(name)
}

call(sayBye, 'yefan')



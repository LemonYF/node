/**
 * 什么是全局对象
 * 在浏览器中是window 在node中是global
 * **/

console.log('hello')

// setTimeout(()=> {
//     console.log('hello')
// }, 3000)

setInterval(() => {
    console.log('hello')
}, 1000)

console.log(__dirname)
console.log(__filename)
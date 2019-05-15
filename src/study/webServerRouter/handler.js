// 定义处理函数
function home(response) {
    response.end('hello home page')
    console.log('home-page')
}

function other() {
    console.log('404')
}

module.exports = {
    home: home,
    other: other
}
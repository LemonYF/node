function route(pathname, handle, response, params) {
    if (typeof handle[pathname] === 'function') {
        console.log('handle', pathname)
        handle[pathname](response, params)
    } else {
        // 这里处理404
        handle['/other'](response, params)
    }

}

module.exports = {
    route: route
}
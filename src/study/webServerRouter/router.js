function route(pathname, handle, response) {
    if (typeof handle[pathname] === 'function') {
        console.log('handle', pathname)
        handle[pathname](response)
    } else {
        console.log('pathname no path')
    }

}

module.exports = {
    route: route
}
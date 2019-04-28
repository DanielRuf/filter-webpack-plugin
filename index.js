function FilterPlugin(options) {
    files = options.files
}

const cb = function (compilation, callback) {
    if (typeof files !== 'undefined' && files.length) {
        if (files.constructor === Array) {
            for (let i = 0; i < files.length; i++) {
                delete compilation.assets[files[i]]
            }
        } else {
            delete compilation.assets[files]
        }
    }
    callback()
}

FilterPlugin.prototype.apply = function (compiler) {
    if (compiler.hooks) {
        compiler.hooks.emit.tapAsync('FilterPlugin', cb)
    } else {
        compiler.plugin('emit', cb)
    }
}

module.exports = FilterPlugin
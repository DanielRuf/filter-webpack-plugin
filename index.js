function FilterPlugin(options) {
    files = options.files
}

FilterPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    if(typeof files !=='undefined' && files.length){
        if(files.constructor === Array){
            for(i = 0; i < files.length; i++){
                delete compilation.assets[files[i]]
            }
        } else {
            delete compilation.assets[files]
        }
    }
    callback()
  })
}

module.exports = FilterPlugin
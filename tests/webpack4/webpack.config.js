const FilterPlugin = require('../../index.js');

module.exports = {
    entry: {
        js: "./src/index.js",
	    css: "./src/index.css"
    },
    plugins: [
        new FilterPlugin({files:['css.js', 'css.js.map']}),
    ]
};
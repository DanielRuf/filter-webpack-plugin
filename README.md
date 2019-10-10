# filter-webpack-plugin

[![Build Status](https://github.com/DanielRuf/filter-webpack-plugin/workflows/CI/badge.svg)](https://github.com/DanielRuf/filter-webpack-plugin/actions?workflow=CI)

`filter-webpack-plugin` removes unwanted emitted assets from the output of webpack.  

This is often needed when you have entry points which are not JavaScript files and processed by other plugins like `extract-text-webpack-plugin`.

## Installation

`npm i filter-webpack-plugin -D`  
`yarn add filter-webpack-plugin -D`

## Usage

```js
const FilterPlugin = require('filter-webpack-plugin');
...
module.exports = {
... 
    entry: {
	    css: "./src/scss/main.scss"
    },
    ...
    plugins: [
        new FilterPlugin({files:['css.js', 'css.js.map']}),
    ],
...
};
```

Check the full names and paths of the emitted files to know which files you have to filter.

## FAQ

### Aren't there already plugins which do the same?
Yes, but most of them are not as small as this one.

### How can I use a dynamic files array?
You can use `globby` or any other glob solution for this.
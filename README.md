# filter-webpack-plugin

`filter-webpack-plugin` removes unwanted emitted assets from the output of webpack.  

This is often needed when you have entry points which are not JavaScript files and processed by other plugins like `extract-text-webpack-plugin`.

## install

`npm i filter-webpack-plugin -D`

## FAQ

### Aren't there already plugins which do the same?
Yes, but most of them are not as small as this one.

### How can I use a dynamic files array?
You can use `globby` or any glob solution for this.
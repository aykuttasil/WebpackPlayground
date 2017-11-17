Babel ?

- npm install --save-dev babel-loader babel-core
Yukarıda ki kod ile babel gereksinimlerini yüklüyoruz.
  
**Loader Nedir?**

```
We need to somehow use the babel-loader. What is a loader? The official documentation puts it in a perfect way — webpack has really nice documentation, don’t be shy to dive in!

Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps. Loaders can transform files from a different language like, CoffeeScript to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() css files right in your JavaScript!

Link: https://webpack.github.io/docs/loaders.html
```

**webpack.config.js** dosyasına aşağıda ki kodu ekliyoruz.
```
 module: {
        rules: [{
          test: /\.js$/, // files ending with .js
          exclude: /node_modules/, // exclude the node_modules directory
          loader: "babel-loader" // use this (babel-core) loader
        }]
      }
```

      
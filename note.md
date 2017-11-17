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

---

## babel-preset-es2015

- npm install --save-dev babel-preset-es2015
- http://babeljs.io/docs/plugins/preset-es2015/

```
We need to explicitly tell babel what and when to use. We can do that by using .babelrc file and babel preset plugins. I know it’s a lot to swallow but keep learning with me, you are doing great. I won’t dive too deep into babel presets — just know they are a set of predefined rules and we need to pass them to our babel so it knows what to do.
```

Babel a ne zaman ve ne yapması gerektiğini söylemek için **.babelrc** dosyası oluşturuyoruz.

**babel-preset-es2015**  bize önceden belirlenmiş kuralları kısa yoldan babel a söylememize yarıyor.
`
**.babelrc** dosyasına,
```
{
    "presets": [
        "es2015"
    ]
}
```
şeklinde ekleme yapıyoruz.

---

## SCSS to CSS compilation

- npm i --save-dev sass-loader node-sass css-loader style-loader

Right to left, sass-loader compiles SCSS, css-loader allows us to require the SCSS and style-loader injects it to our page.

---

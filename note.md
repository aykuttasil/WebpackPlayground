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

## Cleaning up time!
#### Directory Structure

- How about we make a src directory where we store our stylesheets and application logic, public directory for static assets, which the browser gets to read and possibly in the future make a config directory for our webpack configuration.

İlgili dosyaları ilgili klasörlere taşıdıktan sonra **webpack.config.js** dosyasında aşağıda ki değişiklikleri yapıyoruz.

```
  output: {
        path: path.resolve(__dirname, './public'),
        filename: "output.js"
    }
```

---

## Extract SCSS to a Dedicated CSS File

- Right now we are injecting our CSS to the DOM. It would be much more preferable if we had a dedicated styles.css file made for us after compilation from SCSS to CSS.

- Let me introduce a new webpack concept called plugins. Plugins are basically like adding custom functionality on top of our config. We can extract a dedicated CSS file with the help of extract-text-webpack-plugin.

- The plugins option is used to customize the webpack build process in a variety of ways.

- npm install --save-dev extract-text-webpack-plugin

Aşağıdaki adımlar takip edilmelidir.

- We need to require the plugin and save it as a constant.
- Next we specify a loader for each file ending with a .scss extension (we can use our existing one!)
- We need to call the ExtractTextWebpackPlugin plugin with a extract() method in the loader.
- Finally we initialize our plugin constructor with the new keyword and pass our CSS file name as an argument.

---


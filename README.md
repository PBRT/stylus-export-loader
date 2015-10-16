### Stylus Webpack Loader

Expose your stylus variable globally to your app. Used and build for my personal website [PBRT](https://github.com/PBRT/PBRT)

## Motivations

With React and inline CSS, the UI Kit needs to be stored in JS files. Most of the case, you already get one written with one of the CSS Preprocessor such as Stylus or Sass. This imply you need to create and maintain two UI kit written in differents langages. This loader enable you to access to your Stylus Var in JS globally in your app.

## Installation

```npm i git+https://git@github.com/PBRT/stylus-export-loader.git```

## Usage

In your ```webpack.config.js``` add ```UI: '!stylus-export-loader!' + path.resolve(__dirname, './path/to/your/variables.styl')``` Used in the ```WebpackPluginProvider```your will have access to the ``ÙI```object everywhere in your app.

## How it's work

The loader take the path of your file in parameter. It will parse all the Stylus file, detect the variables and do two things. First , it will wrote them in a JS file as an object located in the same path as your stylus file (enabling to you check the camelCase synthax). Secondly, it will put the same object in the UI one, which is exposed globally thanks to the ```WebpackPluginProvider```. You can acess to your variables this way ``backgroundColor: UI.lightRed```

### Improvements

Write test, enable file writting options, support Sass

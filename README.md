# Task-Webpack-JS
 Proyecto realizado en base al curso de Udemy "Javascript Moderno"

# Requerimientos
  * node v16.0.0
  * npm 7.10.0

# Instalacion
  * `npm i`
  * `npm start` // Nos permite levantar un servidor
  * `npm run build:prod` // Nos permite construir el proyecto para produccion
  * `npm run build:dev` // Nos permite construir el proyecto para desarrollo

# ¿Como se fue creando el proyecto?
Paso por paso:

    //////////////////////////////////////////////////////////////////////
    *1- npm init //-> Ejecutar comando
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *2- npm install webpack webpack-cli --save-dev //-> Ejecutar comando
      https://webpack.js.org/guides/getting-started/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *3- npm install --save-dev html-loader //-> Ejecutar comando
      https://webpack.js.org/loaders/html-loader/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *4- Crear un nuevo archivo llamado "./webpack.dev.js" y pegar el siguiente codigo:

    module.exports = {
        mode: 'development',
        output: {
            clean: true,
            filename: '[name].[contenthash].js',
        },
        module: {
            rules: [{
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        sources: false,
                    }
                }],
            }, ],
        }
    }
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *5- Añadir la siguiente linea a el archivo "./package.json"

    "scripts": {
        "build:dev": "webpack --config webpack.dev.js" //-> Linea agregada, esto nos permite el npm run build:dev
    },
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *6- npm install --save-dev html-webpack-plugin //-> Ejecutar comando
      https://webpack.js.org/plugins/html-webpack-plugin/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *7- Copiar y pegar la siguiente linea en el archivo "./webpack.dev.js"

    const HtmlWebPackPlugin = require('html-webpack-plugin');

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *8- npm i -D webpack-dev-server //-> Ejecutar comando
      https://webpack.js.org/configuration/dev-server/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *9- Agregar la siguiente linea al "./package.json"
    
    "scripts": {
        "start": "webpack serve --config webpack.dev.js --open --port=8080" //-> Linea agregada
    },    
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *10- npm install --save-dev style-loader //-> Ejecutar comando
      https://webpack.js.org/loaders/style-loader/
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *11- npm install --save-dev css-loader //-> Ejecutar comando
      https://webpack.js.org/loaders/css-loader/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////    
    *12- Agregar la siguiente regla en rules de "./webpack.dev.js"
    
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *13- npm install --save-dev mini-css-extract-plugin //-> Ejecutar comando
      https://webpack.js.org/plugins/mini-css-extract-plugin/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *14- Agregar las siguientes lineas en "./webpack.dev.js"
    
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    module: {
        rules: [ //-> Añadir esta nueva regla
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [ //-> Añadir este nuevo plugin
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false,
        }),
    ]
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *15- npm install file-loader --save-dev //-> Ejecutar comando
      https://v4.webpack.js.org/loaders/file-loader/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *16- Agregar la siguiente linea de codigo en "./webpack.dev.js"

    rules: [ //-> Añadir esta nueva regla
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader',
        },
    ]
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *17- npm install copy-webpack-plugin --save-dev //-> Ejecutar comando
      https://webpack.js.org/plugins/copy-webpack-plugin/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *18- Copiar y pegar el siguiente codigo en "./webpack.dev.js"
    
    const CopyPlugin = require("copy-webpack-plugin");

    plugins:[ //-> Añadir el siguiente plugin        
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/", to: "./assets/" },
            ],
        }),
    ]    
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *19- Clonar el "./webpack.dev.js" y cambiarle el nombre a "./webpack.prod.js".

    Ademas remplazar la linea por el siguiente:    
    module.exports = { //--> Ponerlo mode production
        mode: 'production',
        ...
    }
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *20- Agregar la siguiente linea en el "./package.json"
    
    "scripts": { //-> La siguiente linea
        "build:prod": "webpack --config webpack.prod.js",
    },
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *21- npm install css-minimizer-webpack-plugin --save-dev //-> Ejecutar comando
      https://webpack.js.org/plugins/css-minimizer-webpack-plugin/#root
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *22- npm install terser-webpack-plugin --save-dev //-> Ejecutar comando
      https://webpack.js.org/plugins/terser-webpack-plugin/#root
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *23- Agregar la siguiente linea en "./webpack.prod.js"

    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
    const TerserPlugin = require("terser-webpack-plugin");

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *24- npm install --save-dev babel-loader @babel/core //-> Ejecutar comando
      https://babeljs.io/setup
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *25- Añadir la siguiente regla en "./webpack.prod.js"

    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *26- npm install @babel/preset-env --save-dev //-> Ejecutar comando
      https://babeljs.io/setup
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *27- Crear el archivo "./babel.config.json" (Debe estar en la raiz)

    Ademas, dentro de ese archivo deberemos pegar el siguiente codigo

    {
        "presets": ["@babel/preset-env"]
    }
    //////////////////////////////////////////////////////////////////////
    

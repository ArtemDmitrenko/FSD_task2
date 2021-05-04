const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');



const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

function filename(name, ext) {
  if (ext === 'html') {
    return `${name}.${ext}`
  }

  if (name) {
    if (isDev) {
      return `${ext}/${name}.${ext}`
    } else {
      return `${ext}/${name}.[hash].${ext}`
    }
  } else {
    if (isDev) {
      return `${ext}/[name].${ext}`
    } else {
      return `${ext}/[name].[hash].${ext}`
    }
    // isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`
  }
}

const PAGES_DIR = [];
let PAGES_NAME;
const createEntryPoints = () => {
  const entryPoints = {};
  const uiKitPath = path.resolve(__dirname, 'src/UI-kit');
  const uiKitPagesName = fs.readdirSync(uiKitPath);

  uiKitPagesName.forEach((pageName, index, obj) => {
    if (pageName === '.DS_Store') {
      obj.splice(index, 1);
    }
  });
  uiKitPagesName.forEach((pageName) => {
    PAGES_DIR.push(path.resolve(__dirname, `src/UI-kit/${pageName}`));
  });
  PAGES_NAME = uiKitPagesName;
  uiKitPagesName.forEach((pageName) => {
    entryPoints[pageName] = path.join(uiKitPath, `/${pageName}/main.js`);
  });

  const webPagesPath = path.resolve(__dirname, 'src/pages');
  const webPagesName = fs.readdirSync(webPagesPath);
  webPagesName.forEach((item, index, obj) => {
    if (item === '.DS_Store') {
      webPagesName.splice(index, 1);
    };
  });
  webPagesName.forEach((item) => {
    PAGES_DIR.push(path.resolve(__dirname, `src/pages/${item}`));
  });
  PAGES_NAME = PAGES_NAME.concat(webPagesName);
  webPagesName.forEach((pageName) => {
    entryPoints[pageName] = path.join(webPagesPath, `/${pageName}/main.js`);
  });
  return entryPoints;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };
  // if (isProd) {
  //   config.minimizer = [
  //     new OptimizeCssAssetWebpackPlugin(),
  //     new TerserWebpackPlugin(),
  //   ];
  // };
  return config;
};


module.exports = {
  entry: createEntryPoints(),
  // entry: {
  //   'room-details': path.resolve(__dirname, 'src/pages/room-details/main.js')
  // },
  output: {
    filename: filename(false, 'js'),
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist',
  },
  devtool: isDev ? 'source-map' : '',
  // optimization: optimization(),
  devServer: {
    // overlay: true,
    port: 4200,
    hot: isDev,
    // openPage: 'dist/index.html',
    // publicPath: "/dist/", // here's the change
    // contentBase: path.join(__dirname, '/src')
  },
  module: {
    rules: [{
        test: /\.pug$/,
        use: 'pug-loader?pretty=true'
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        exclude: [
          path.resolve(__dirname, 'src/fonts'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            publicPath: './assets/images',
            name: '[name].[ext]',
            outputPath: 'assets/images/',
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|gif|svg)$/,
        include: [
          path.resolve(__dirname, 'src/fonts'),
          path.resolve(__dirname, 'node_modules/slick-carousel/slick/fonts')
        ],
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../assets/fonts',
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          },
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "../",
              // hmr: isDev,
              // reloadAll: true
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      grid: true,
                    },
                  ],
                ],
              },
            },
          },
          // {
          //   loader: 'resolve-url-loader',
          // },
          {
            loader: 'sass-loader'
          },
        ],
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: filename(false, 'css')
    }),

    // new HTMLWebpackPlugin({
    //   filename: filename('room-details', 'html'),
    //   // filename: `${pageName}.html`,
    //   template: path.resolve(__dirname, `src/pages/room-details/room-details.pug`),
    //   chunks: ['room-details'],
    //   minify: {
    //     collapseWhitespace: isProd
    //   }
    // }),


    ...PAGES_NAME.map((pageName, i) => new HTMLWebpackPlugin({
      filename: filename(pageName, 'html'),
      template: `${PAGES_DIR[i]}/${pageName}.pug`,
      chunks: [pageName],
      minify: {
        collapseWhitespace: isProd
      }
    })),

    new CleanWebpackPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    })
  ],
};
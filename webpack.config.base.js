'use strict';
var path = require("path");
var src_dir = path.resolve(__dirname, 'src');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var deps = [
  'react/dist/react.min.js',
  'react-dom/dist/react-dom.min.js'
];

var config = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], include: src_dir }
    ],
    noParse: []
  },
  output: {
    library: 'ReactObser',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {}
  },
  externals: {
    react: true,
    "react-dom": true
  }
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
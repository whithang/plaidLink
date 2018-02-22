var path = require( 'path' );
var SRC_DIR = path.join( __dirname, '/react-client/src' );
var DIST_DIR = path.join( __dirname, '/react-client/dist' );

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
       }
      }
    ]
  },
   resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  }
};

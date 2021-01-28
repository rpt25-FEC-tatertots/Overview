module.exports = {
  mode: 'development',
  entry: __dirname + '/client/src/OverviewComponent.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'overviewBundle.js',
    path: __dirname + '/public/dist',
  },
};

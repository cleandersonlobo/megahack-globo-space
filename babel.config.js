const path = require('path');

const paths = {
  assets: path.resolve(__dirname, 'assets'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.android.js', '.ios.js', '.web.js'],
          root: ['./src'],
          alias: paths,
        },
      ],
    ],
  };
};

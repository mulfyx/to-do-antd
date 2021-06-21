const config = {
  babel: {
    plugins: [
      ['babel-plugin-import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }],
    ],
  },
};

module.exports = config;

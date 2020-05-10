module.exports = {
    devServer: {
      proxy: {
        '/v1': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: { '^/v1': ''}
        }
      }
    },
    lintOnSave: false
  }
module.exports = {
    devServer: {
      proxy: {
        '^v1/send_mail': {
          target: 'http://164.92.108.26:8080/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }
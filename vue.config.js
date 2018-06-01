module.exports = {
  configureWebpack: {
    resolve: {
        alias: {
          'framework7$': 'framework7/dist/framework7.esm.bundle'
        }
    }
  }
}
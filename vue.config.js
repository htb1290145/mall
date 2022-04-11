const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  resolve: {
    // extensions: ['.js', '.vue', '.json'],
    alias: {
      // '@': resolve('src'), //@ == src
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'views': resolve('src/views'),
      'network': resolve('src/network'),
    }
  },
}
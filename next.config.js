
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
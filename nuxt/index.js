const path = require("path")

module.exports = function() {
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    ssr: false
  })
}

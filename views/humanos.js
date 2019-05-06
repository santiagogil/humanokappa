var View = require('kappa-view-level')
var memdb = require('memdb')

var lvl = memdb()

var humanos = View(lvl, {
  map: function (msg) {
    return [
      [ msg.value.key, msg.value.value ]  // map first element to second element
    ]
  },
  
  api: {
    get: function (core, key, cb) {
      lvl.get(key, cb)
    },
    stream: function (core, opts) {
      return lvl.createReadStream(opts)
    }
  }
})

module.exports = humanos

var kappa = require('kappa-core')
var View = require('kappa-view-level')
var memdb = require('memdb')

// TODO reemplazar constantes por mensajes de configuracion + vista de configuracion actual
const MARGENHUMANO = 20
const MARGENCONSIGNA = 30
const TAZADEBITO = 0
const TAZACREDITO = 0
const PLAZOACREDITACION = 0

var core = kappa('./log', { valueEncoding: 'json' })
var lvl = memdb()

var humanos = View(lvl, {
  map: function (msg) {
    console.log(msg)
    return [
      [ msg.value.key, msg.value.value ]  // map first element to second element
    ]
  },
  
  api: {
    get: function (core, key, cb) {
      lvl.get(key, cb)
    },
    stream: function (core, opts) {
      console.log(opts)
      return lvl.createReadStream(opts)
    }
  }
})

core.use('humanos', humanos)

core.feed('default', function (err, feed) {
  if (err) return err
  feed.append({key: '0001', value: '{"name": "tito", "marca": "blah"}'}, console.log)
  feed.append({key: '0002', value: '{"name": "cacho", "marca": "otra"}'}, console.log)
  feed.append({key: '0001', value: '{"name": "alberto", "marca": "blah"}'}, console.log)
  core.ready('humanos', function () {
console.log(core.feeds())
    core.api.humanos.stream({ge: '0001', lt: '9999'}).on('data', console.log)
  })
})

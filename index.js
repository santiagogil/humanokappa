var kappa = require('kappa-core')
var humanos = require('./views/humanos')

// TODO reemplazar constantes por mensajes de configuracion + vista de configuracion actual
const MARGENHUMANO = 20
const MARGENCONSIGNA = 30
const TAZADEBITO = 0
const TAZACREDITO = 0
const PLAZOACREDITACION = 0

var core = kappa('./log', { valueEncoding: 'json' })

core.use('humanos', humanos)

core.feed('default', function (err, feed) {
  if (err) return err
  feed.append({key: '0001', value: '{"name": "tito", "marca": "blah"}'}, console.log)
  feed.append({key: '0002', value: '{"name": "cacho", "marca": "otra"}'}, console.log)
  feed.append({key: '0001', value: '{"name": "alberto", "marca": "blah"}'}, console.log)
  core.ready('humanos', function () {
    core.api.humanos.stream({ge: '0001', lt: '9999'}).on('data', console.log)
  })
})

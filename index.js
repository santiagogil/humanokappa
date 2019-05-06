// Core
var kappa = require('kappa-core')
// Vistas
var config = require('./views/config')
var humanos = require('./views/humanos')
var movimientos = require('./views/movimientos')
var productos = require('./views/productos')
// Schemas para validacion de mensajes
var configSchema = require('./schemas/config')
var humanosSchema = require('./schemas/humanos')
var movimientosSchema = require('./schemas/movimientos')
var productosSchema = require('./schemas/productos')


// TODO reemplazar constantes por mensajes de configuracion + vista de configuracion actual
const MARGENHUMANO = 20
const MARGENCONSIGNA = 30
const TAZADEBITO = 0
const TAZACREDITO = 0
const PLAZOACREDITACION = 0
// TODO exponer metodos de las vistas de manera mas directa
// xej: humano.config.get en lugar de humano.api.config.get
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

function validate (msg) {
  switch (msg) {
    case 'config':
      return configSchema(msg)
      break
    case 'humanos':
      return humanosSchema(msg)
      break
    case 'movimientos':
      return movimientosSchema(msg)
      break
    case 'productos':
      return productosSchema(msg)
      break
    default:
      return {isValid: false, reason: 'Tipo de mensaje inexistente'}
  }
}

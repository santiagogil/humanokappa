# Humano Kappa Core

Libreria base para sistema de gestion para local cooperativo humano.

## Tipos de mensajes

### Humano

```
{
  type: 'humano', // String indicando el tipo de mensaje
  key: '0001', // String de numeros entre 0001 y 9999
  value: {
    name: 'Fulano', // String representando solo el/los nombre/s de pila
    lastname: 'De Tal', // String representando solo el/los apellido/s
    brand: 'Los mates de Fulano', // String representando la marca de sus productos
    sector: 'Utilitarios', // String representando el rubro al que se dedica
    comission: 'Marketing', // String detallando a que comision pertenece
    phone: '99999999', // String representando el numero de telefono tal cual se muestra en whatsapp
    email: 'fulano@talserver.com', // String representando el email
    web: 'https://losmatesdefulano.com', // String representando el sitio web de la marca
    sameas: ['https://twitter.com/fulanomates', 'https://facebook.com/fulano'] // Array de strings representando otras presencias web
  }
}
```

### Producto

```
{
  type: 'producto', // String indicando el tipo de mensaje
  key: '0001-0001', // Id compuesto de los id de humano y producto
  value: {
    desc: 'Mate tallado, etc.', // String detallando la descripcion del producto (TODO: cuantos caracteres?)
    price: '300', // String representando su valor en pesos sin signo
    stock: {
      add: '10' // Numero de unidades a sumar al stock actual
      substract: '10' // Numero de unidades a restar del stock actual
    }
  }
}
```

### Movimiento 

### Configuracion

## API

Todas las operaciones de escritura se realizan mediante la escritura de mensajes en el feed.
Las operaciones de lectura poseen metodos por vista.

### humano.config.get()

Devuelve la configuracion actual del sistema

### humano.humanos.getAll([cb])

Devuelve un array conteniendo los datos de todos los humanos si se provee un callback o un `readableStream` si no.

``` js

// Pasando console.log como parametro

humano.humanos.getAll(console.log) // devuelve [objeto humano 0001, objeto humano 0002, etc.]

// Sin callback

humano.humanos.getAll()
  .on('data', console.log) // devuelve los humanos uno a uno de manera individual

```

### humano.humanos.get(id)

Devuelve los datos de un humano en particular

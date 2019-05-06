# Humano Kappa Core

Libreria base para sistema de gestion para local cooperativo humano.

## Tipos de mensajes

### Humano

```
{
  key: '0001', // String de numeros entre 0001 y 9999
  value: {
    name: 'Fulano', // String representando solo el/los nombre/s de pila
    lastname: 'De Tal', // String representando solo el/los apellido/s
    brand: 'Los mates de Fulano', // String representando la marca de sus productos
    sector: 'Utilitarios', // String representando el rubro al que se dedica
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

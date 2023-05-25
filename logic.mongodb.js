const database = 'Poc';
use(database);


// Operadores lógicos

/*

$exists: Comprueba si el campo existe.
$type: Comprueba el tipo de dato del campo.

*/


// Obtener usuarios cuyo campo edad exista
db.clientes.find({edad: {$exists: true}});

/*
// Resultado 3
[
  {
    "_id": {"$oid": "62c0946602d55365f6a8b737"},
    "edad": 25,
    "email": "dcortes@example.com",
    "nombre": "Diego"
  },
  {
    "_id": {"$oid": "62c0957402d55365f6a8b739"},
    "edad": 20,
    "email": "franco@example.com",
    "nombre": "Franco"
  },
  {
    "_id": {"$oid": "62c0957402d55365f6a8b73a"},
    "edad": 40,
    "email": "juan@example.com",
    "nombre": "Juan"
  }
]
*/


// Operadores logicos

/*

$or: Filtra documento que cumpla alguna de las condiciones descrita en un array de elementos.
$and: Filtra documentos que cumplan todas las condiciones descritas en un array de elementos.

*/


// Obtener usuarios cuyo nombre sea Diego o Franco
db.usuarios.find({$or: [{ nombre: "Diego" }, {nombre: "Franco"}]});

/*
// reultado 2
[
  {
    "_id": {"$oid": "62c0946602d55365f6a8b737"},
    "edad": 25,
    "email": "dcortes@example.com",
    "nombre": "Diego"
  },
  {
    "_id": {"$oid": "62c0957402d55365f6a8b739"},
    "edad": 20,
    "email": "franco@example.com",
    "nombre": "Franco"
  }
]

*/
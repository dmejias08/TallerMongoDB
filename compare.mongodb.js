
const database = 'Poc';
use(database);

// Operadores de comparación

/*

$eq: Igual que.
$ne: Distinto de.
$gt: valores mayores que.
$gte: Valores mayores o iguales que.
$lt: Valores menores que.
$lte: Valores menores o iguales que.
$in: Valores que se encuentran en un array de elementos.
$nin: Obtiene valores que NO se encuentran en un array de elementos.

*/

// Obtener usuarios cuya edad es mayor o igual a 40
db.clientes.find({edad: {$gte: 40}});
/*
// Resultado 1
[
  {
    "_id": {"$oid": "62c0957402d55365f6a8b73a"},
    "edad": 40,
    "email": "juan@example.com",
    "nombre": "Juan"
  }
]
*/

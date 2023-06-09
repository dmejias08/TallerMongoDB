
const database = 'Poc';
use(database);


db.createCollection("clientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "email", "edad"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre del cliente",
                },
                email: {
                    bsonType: "string",
                    description: "Email del cliente",
                },
                edad: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 100,
                    description: "Edad del cliente",
                },
            },
        },
    },
});


db.clientes.insertOne({
    nombre: "Diego",
    email: "dcortes@example.com",
    edad: 25,
});

db.clientes.insertMany([
    {
        nombre: "Franco",
        email: "franco@example.com",
        edad: 20,
    },
    {
        nombre: "Juan",
        email: "juan@example.com",
        edad: 40,
    },
]);

db.clientes.find({});

db.clientes.find({nombre: "Diego", edad: 25});


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

//  Actualizar documentos

db.clientes.updateOne(
    {_id:ObjectId("62c0946602d55365f6a8b737")},
    {$set: { email: "dcortes@update.com" }}
);

db.clientes.updateMany(
    {},
    {$set: { email: "all@update.com" }}
  );


// Eliminar documentos

db.clientes.deleteOne({_id: ObjectId("62c0957402d55365f6a8b739")})

db.clientes.deleteMany({email: "all@update.com"});
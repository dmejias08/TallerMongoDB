const database = 'Poc';
use(database);

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
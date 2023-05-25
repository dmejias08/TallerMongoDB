
const database = 'Poc';
use(database);


db.createCollection("test", {
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
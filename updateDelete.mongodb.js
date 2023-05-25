const database = 'Poc';
use(database);


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
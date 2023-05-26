
/*
// Users collection
{
    "_id" : ObjectId("6342ef6f73d381100e27b8e4"),
    "name" : "Juan",
    "age" : 40
  }
  
  // Address collection
  {
    "_id" : ObjectId("6342efb173d381100e27b8e5"),
    "street" : "Cartago",
    "city" : "Cartago",
    "user_id" : ObjectId("6342ef6f73d381100e27b8e4") 
  }
  */
  // Query
  db.getCollection("employees").aggregate({
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "user_id",
      as: "address"
    }
  })
  
  /*
  // Result
  {
    "_id" : ObjectId("6342ef6f73d381100e27b8e4"),
    "name" : "Juan",
    "age" : 40.0,
    "address" : [{
      "_id" : ObjectId("6342efb173d381100e27b8e5"),
      "street" : "Cartago",
      "city" : "Cartago",
      "user_id" : ObjectId("6342ef6f73d381100e27b8e4")
    }]
  }
  */



  
  /*

  // Authors Collection
{
    "_id" : ObjectId("63430b9e73d381100e27b8e9"),
    "name" : "Diana M",
    "books" : [
       ObjectId("63430b8a73d381100e27b8e7"),
       ObjectId("63430b8a73d381100e27b8e8")
    ]
  }
  
  // Books Collection
  {
    "_id" : ObjectId("63430b8a73d381100e27b8e7"),
    "name" : "Life in a nutshell"
  },
  {
    "_id" : ObjectId("63430b8a73d381100e27b8e8"),
    "name" : "My book"
  }
  

  */
  // Query
  db.getCollection("authors").aggregate({
    $lookup: {
      from: "books",
      localField: "books",
      foreignField: "_id",
      as: "books"
    }
  })
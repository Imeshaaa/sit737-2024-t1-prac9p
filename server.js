//import express module
const express= require("express");
//import mongoDB Client driver library
const { MongoClient } = require('mongodb');
const app = express();


// Connection URI
const uri =
  "mongodb://admin1:super-secret-password@mongodb:27017/";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/read", async(req,res)=>{
    try {
        // Connect the client to the server
        const client_ = await client.connect();
    
        // Establish and verify connection
        const db = client_.db("week9DB");
        const collection = db.collection("wk9collection");
        const documents = await collection.find({}).toArray();  
    
        console.log("Results from the database", documents);

        res.json({statuscocde:200, data: documents }); 

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    
});


app.get("/create", async(req,res)=>{
    try {
        // Connect the client to the server
        const client_ = await client.connect();
    
        // Establish and verify connection
        const db = client_.db("week9DB");
        const collection = db.collection("wk9collection");

        const doc = { name: "imesha2"};
        const result = await collection.insertOne(doc); 

        console.log("Results from the database", result);

        res.json({statuscocde:200, data: result }); 

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    
});


app.get("/delete", async(req,res)=>{
    try {
        // Connect the client to the server
        const client_ = await client.connect();
    
        // Establish and verify connection
        const db = client_.db("week9DB");
        const collection = db.collection("wk9collection");

        const doc = { name: "imesha2"};
        const result = await collection.deleteOne(doc); 

        console.log("Results from the database", result);

        res.json({statuscocde:200, data: result }); 

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    
});


app.get("/update", async(req,res)=>{
    try {
        // Connect the client to the server
        const client_ = await client.connect();
    
        // Establish and verify connection
        const db = client_.db("week9DB");
        const collection = db.collection("wk9collection");

        const query = { name: "imesha2" };
        const update = { $set: { name: "imesha3"}};
        const options = {};
        const result = await collection.updateOne(query, update, options);

        console.log("Results from the database", result);

        res.json({statuscocde:200, data: result }); 

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    
});

//define port number
const port=3000;
//start the server and listen to port 3000
app.listen(port,()=> {
    console.log("Hello! I'm listening to port "+port);
})
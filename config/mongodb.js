const { MongoClient } = require("mongodb");

let database = null;

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();

    const db = client.db("Widya");
    database = db;
    return db;
  } catch (err) {
    console.log("ERROR from MongoDB Config", err);
  }
}

function getDatabase() {
  return database;
}

module.exports = { connect, getDatabase };

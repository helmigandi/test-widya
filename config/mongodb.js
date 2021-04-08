const { MongoClient } = require("mongodb");

// golobal variable untuk menyimpan database status
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
    database = db; // simpan ke global variable
    return db;
  } catch (err) {
    console.log("ERROR from MongoDB Config", err);
  }
}

// get database dari global variable
// dibuat fungsi agar dipanggil jika butuh
function getDatabase() {
  return database;
}

module.exports = { connect, getDatabase };

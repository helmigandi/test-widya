const { MongoClient } = require("mongodb");

// golobal variable untuk menyimpan database status
let database = null;

// Connection URI
const uri = `mongodb://dbUser:dbUser@cluster0-shard-00-00.tfq7o.mongodb.net:27017,cluster0-shard-00-01.tfq7o.mongodb.net:27017,cluster0-shard-00-02.tfq7o.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1437y7-shard-0&authSource=admin&retryWrites=true&w=majority`;

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

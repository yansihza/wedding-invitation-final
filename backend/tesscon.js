// tessconn.js
const { MongoClient } = require("mongodb");
require("dotenv").config();

console.log("MONGODB_URI dari .env:", process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Berhasil konek ke MongoDB Atlas!");
    await client.close();
  } catch (err) {
    console.error("❌ Gagal koneksi MongoDB:", err.message);
  }
}

run();
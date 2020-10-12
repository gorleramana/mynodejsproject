// import { createConnection } from 'pg';

// var con = createConnection({
//   host: "jdbc:postgresql://localhost:5432/RamanaGorle",
//   //database: "RamanaGorle",
//   user: "RamanaGorle",
//   password: "RamanaGorle"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const mongo = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017'
// mongo.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err, client) => {
// if (err) {
//   console.error(err)
//   return
// }
// //...
// })

// const db = client.db('kennel')
// const collection = db.collection('dogs')

// const {Pool, Client} = require('pg')
// const connectionString = 'jdbc:postgresql://localhost:5432/RamanaGorle'

// const client = new Client({
//     connectionString: connectionString
// })
// client.connect()
// client.query('select * from persons',(err,res)=>{
//     console.log(err,res)
//     client.end()
// })

// const pg = require('pg');
// const connectionString = process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/RamanaGorle';

// const client = new pg.Client(connectionString);
// client.connect();
// const query = client.query(
//   'select * from persons');
// query.on('end', () => { client.end(); });

// const { Client } = require('pg')
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

const pg = require('pg');

const config = {
  user: 'RamanaGorle', //this is the db user credential
  database: 'RamanaGorle',
  password: 'RamanaGorle',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

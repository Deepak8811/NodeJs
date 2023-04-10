const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://root:root@cluster0.3yxyoso.mongodb.net/test'

const Client = new MongoClient(url);
const database = 'e-comm';

async function dbConnect() {
    let result = await Client.connect();

    let db = result.db(database);
    return db.collection('products');
}
//Export this file for index.js file .....

module.exports = dbConnect;
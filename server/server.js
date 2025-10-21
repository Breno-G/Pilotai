require("dotenv").config();

const {MongoClient} = require('mongodb');

async function main() {
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    try{
        await client.connect();
        console.log("MongoDB conectado")
       // await listDatabases(client);
    } catch (e) {
        console.error('Erro de conexão', e);
    } finally {
        await client.close();
    }
}

main().catch(console.error)

async function listDatabases(client){
    const databasesList =  await client.db().admin().listDatabases;

    console.log("Databases: ");
    databasesList.databases.forEach(db => {
        console.log(`- $ {db.name}`);  
    })
}
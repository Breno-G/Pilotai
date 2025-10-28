require("dotenv").config();

const {MongoClient} = require('mongodb');

async function main() {
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    try{
        await client.connect();
        console.log("MongoDB conectado");
    } catch (e) {
        console.error('Erro de conexão', e);
    } finally {
        await client.close();
    }
}

main().catch(console.error)

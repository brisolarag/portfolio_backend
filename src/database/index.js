require('dotenv').config();
const mongoose = require('mongoose');

const db_user = process.env.dbUser;
const db_pass = process.env.dbPass;
const db_name = process.env.dbName;


const connection_string = `mongodb+srv://${db_user}:${db_pass}@${db_name}.phathck.mongodb.net/?retryWrites=true&w=majority`

const connectToMongo = async () => {
    try {
        await mongoose.connect(connection_string, {});
        console.log('Conectado com sucesso ao MongoDB');
    } catch (err) {
        console.log('Erro ao conectar-se ao MongoDB');
        console.log(err);
    }
}

connectToMongo();


mongoose.Promise = global.Promise;

module.exports = mongoose;
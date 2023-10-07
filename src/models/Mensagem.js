const mongoose = require('../database/index');


const MensagemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const Mensagem = mongoose.model("Mensagem", MensagemSchema);

module.exports = Mensagem;
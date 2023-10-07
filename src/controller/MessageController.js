const MessageModel = require('../models/Mensagem');


const controller = {
    getAll: async (req, res) => {
        const messages = await MessageModel.find({});
        return res.status(200).json(messages)
    },

    sendMessage: async (req, res) => {
        const msg = await MessageModel.create(req.body);
        return res.status(200).json({
            error:false,
            msg:"Mensagem enviada com sucesso",
            data: msg
        })
    }

}








module.exports = controller;








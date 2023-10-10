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
    },

    deleteMessage: async (req, res) => {
        try {
            id = req.body.id
            const msg = await MessageModel.findByIdAndDelete(id);


            if (!msg) {
                return res.status(404).json({
                    error:true,
                    msg:"Mensagem não encontrada"
                })
            }

            return res.status(200).json({
                error:false,
                msg:"Mensagem excluída com sucesso.",
                id_excluido:req.body.id
            })

        } catch (e) {
            console.log("Erro ao exluir a mensagem. Erro:")
            console.log(e)
            res.status(500).json({
                error:true,
                msg:"Erro ao excluir mensagem."
            })
        }



    },

}








module.exports = controller;








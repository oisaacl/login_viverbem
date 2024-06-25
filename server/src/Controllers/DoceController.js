import DoceModel from "../Models/DoceModel.js";

class DoceController {
    constructor() {
    }

    create(req, res) {
        const nome = req.body.nome;
        DoceModel.create(nome).then(
            resposta => {
                console.debug("Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        DoceModel.read().then(
            resposta => {
                console.debug("Mostrando um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro mostrando um Doce");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    update(req, res) {
        const id_doce = req.params.id_doce;
        const nome = req.body.nome;

        DoceModel.update(id_doce, nome).then(
            resposta => {
                console.debug("atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug("erro: atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    delete(req, res) {
        const id_doce = req.params.id_doce;

        DoceModelModel.delete(id_doce).then(
            resposta => {

                console.debug("Deletando um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug(resposta)
                console.debug("Erro ao deletar doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new DoceController();
import LoginModel from "../Models/LoginModel.js";

class LoginController {
    constructor() {
    }

    create(req, res) {
        // const cpf = req.body.cpf;
        const {cpf,senha} = req.body;

        LoginModel.create(cpf, senha).then(
            resposta => {
                console.debug("Login efetuado com sucesso");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: CPF ou Senha inválido");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        LoginModel.read().then(
            resposta => {
                console.debug("Login efetuado");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao efetuar login");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    update(req, res) {
        const id_usuario = req.params.id_usuario;
        const {cpf,senha} = req.body;

        LoginModel.update(id_usuario,cpf,senha).then(
            resposta => {
                console.debug("atualizando login")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug("erro: ao atualizar login")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    delete(req, res) {
        const id_usuario = req.params.id_usuario;

        LoginModel.delete(id_usuario).then(
            resposta => {

                console.debug("Deletando um usuario");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug(resposta)
                console.debug("Erro ao deletar um usuario");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new LoginController();
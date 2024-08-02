import mysql from "mysql2"
import config from "../Config.js";

class LoginModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

  
   create(id_usuario, cpf, senha) {
    let sql = `insert into usuarios (nome) values ("${nome}");`
    
    return new Promise ((resolve,reject)=>{
    this.conexao.query(sql,(erro,retorno)=>{
    if(erro){
    reject([400,erro])
    }
    resolve([201, "Usuário Adicionado"])
    })
    });
    }

    read() {
        let sql = `SELECT * FROM usuarios;`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }

    update(id_doce, nome) {
        let sql = `update usuarios set nome = "${nome}" WHERE id_usuario="${id_usuario}"`


        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, "Usuario Atualizado"])
                } else {
                    resolve([404, "Usuario nao encontrado"])
                }
            })
        });
    }

    delete(id_usuario) {
        let sql = `delete from usuarios where id_usuario ="${id_usuario}"`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, retorno])
                } else {
                    resolve([404], "Usuario não encontrado")
                }
            })
        });
    }
}


export default new LoginModel(0);
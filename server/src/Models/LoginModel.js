import mysql from "mysql2"
import config from "../Config.js";

class LoginModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

  
   create( cpf, senha) {
    let sql = `insert into pagina_login (cpf,senha) values ("${cpf}","${senha}");`
    
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
        let sql = `SELECT * FROM pagina_login;`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }

    update(id_usuario,cpf,senha) {
        let sql = `update pagina_login set cpf  = "${cpf}", senha = "${senha}" WHERE id_usuario="${id_usuario}"`


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
        let sql = `delete from pagina_login where id_usuario ="${id_usuario}"`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno)=>{
                console.debug (erro)
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, "Usuario Deletado"])
                } else {
                    resolve([404, "Usuario não encontrado"])
                }
            })
        });
    }
}


export default new LoginModel(0);
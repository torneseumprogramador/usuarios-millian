//Aqui vai ficar o teste para a model
const User = require('../../src/models/User');
User.deleteMany({email: /torneseumprogramador/}).then(error => {});

describe('Modelo User', () => {

  // beforeEach(function() {
  // });

  it('Deve retornar o modelo de User', () => {
    User.find().then(dado => {
      expect(dado !== undefined).toBe(true);
    });

  });

  it('Deve incluir um usuario', () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr = new User({nome: nome, senha: "12345", email: cpfg+"@torneseumprogramador.com.br", cpf: cpfg, telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1});
    
    usr.save(error => {
      expect(error == undefined || error == null).toBe(false);
    });
  });

  it('Não deve incluir um usuario repetido', () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr =  new User({nome: nome, senha: "12345", email: cpfg+"@torneseumprogramador.com.br", cpf: cpfg, telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1});
    usr.save(error => {
      const usr2 =  new User({nome: nome, senha: "12345", email: cpfg+"2@torneseumprogramador.com.br", cpf: cpfg+"1", telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1});
      usr2.save(error => {
        expect(error == undefined || error == null).toBe(false);
      });
    })
  });

  it('Não deve incluir um usuario sem nome', () => {
    let nome = null;
    let cpfg = `${new Date().getTime()}`;
    const usr =  new User({nome: nome, senha: "12345", email: cpfg+"@torneseumprogramador.com.br", cpf: cpfg, telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1});

    usr.save(error => {
      expect(error == undefined || error == null).toBe(false);
    })
  });

  it('Não deve alterar um registro', () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr =  new User({nome: nome, senha: "12345", email: cpfg+"@torneseumprogramador.com.br", cpf: cpfg, telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1});
    usr.save(error => {
      let novoNome = "Danilo" + new Date().getTime();
      usr.nome = novoNome
      usr.save(error => {
        expect(error == undefined || error == null).toBe(false);
        User.find({nome: novoNome}).then(dado => {
          expect(dado.length > 0).toBe(true);
        });
      });
    })
  });
});
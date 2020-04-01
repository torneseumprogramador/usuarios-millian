//teste de controller
const axios = require('axios').default;
const host = "http://localhost:3000";
const Usr = require('../../src/models/User');
const TOKEN = "123456";
const _headers = {};//{headers: {'token':TOKEN}};
//nome, senha,email,cpf,telefone,logradouro_rua,logradouro_cep,logradouro_bairro,logradouro_cidade,banco_transferencia,nivel_investidor
describe("UsrController", () => {
  beforeEach(async()=>{
    await Usr.deleteMany()
    await Usr.create( [
            { 
                nome: "nome2",
                senha: "12345",
                email: "eu2@torneseumprogramador.com.br",
                cpf: "cpfg2",
                telefone: "12457845",
                logradouro_rua: "rua seia la",
                logradouro_cep: "rua seia la",
                logradouro_bairro: "rua seia la",
                logradouro_cidade: "rua seia la",                
                banco_transferencia: 1,
                nivel_investidor: 1
            },
            { 
              nome: "nome1",
              senha: "123415",
              email: "eu1@torneseumprogramador.com.br",
              cpf: "cpfg1",
              telefone: "112457845",
              logradouro_rua: "rua seia la1",
              logradouro_cep: "rua seia la1",
              logradouro_bairro: "rua seia la1",
              logradouro_cidade: "rua seia la1",                
              banco_transferencia: 1,
              nivel_investidor: 1
            }            
    ]);

  describe("GET /usr.json - deve retornar uma lista de usuarios", () => {
    it("deve retornar o status code de 200", async(done) => {
      const response = await axios.get(`${host}/usr.json`, _headers)
      expect(response.status).toBe(200)
      done();
    });

    it("deve dados na API", async(done) => {
       const response = await axios.get(`${host}/usr.json`, _headers)
        const itens = response.data;
        expect(itens[0].nome).toBe("Danilo1");
        expect(itens[1].nome).toBe("Danilo2");
        done()
      })
  });
// 

  describe("POST /usr.json - usuario", () => {
    it("deve cadastrar um usuario", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
        const body = { 
          nome,
          senha: '123456',
          email: nome + '@torneseumprogramador.com.br' 
        }
        const response = await axios.post(`${host}/usr.json`, body, _headers)
        expect(response.status).toBe(201)
      done();
    });
  });
// 
  describe("PUT /usr.json - usuario", () => {
    it("deve alterar um usuario", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
      let cpfg = `${new Date().getTime()}`;
     const adm = await Usr.create({nome: nome, senha: "12345", email: cpfg+"@torneseumprogramador.com.br", cpf: cpfg, telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1}) 
        const body = { 
            nome,
            senha: '123456',
            email: nome + '@torneseumprogramador.com.br' 
          }
        const response = await axios.put(`${host}/adm/${adm._id}.json`, body, _headers)
        expect(response.status).toBe(204);
        done();
      });
    });

  describe("DELETE /usr.json - usuario", () => {
    it("deve apagar um usuario", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
      let cpfg = `${new Date().getTime()}`;
      const adm = await Usr.create({nome: nome, senha: "12345", email: cpfg+"@torneseumprogramador.com.br", cpf: cpfg, telefone: "12457845", logradouro_rua: "rua seia la", logradouro_cep: "rua seia la", logradouro_bairro: "rua seia la", logradouro_cidade: "rua seia la", banco_transferencia: 1, nivel_investidor: 1})        // let options = {
        const response = await axios.delete(`${host}/adm/${adm._id}.json`, _headers)
        expect(response.status).toBe(204)
        done();
    });
  });
}
)})

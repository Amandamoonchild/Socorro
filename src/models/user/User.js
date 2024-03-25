export default class User {
  constructor(name, data, cor1, cor2, func, turmas, bairro, cidade, cep, tel, email, resp, cargo) {
    this.id = this.generateId();
    this.name = name;
    this.email = email;
    this.data = data;
    this.cor1 = cor1;
    this.cor2 = cor2;
    this.func = func;
    this.turmas = turmas;
    this.bairro = bairro;
    this.cidade = cidade;
    this.cep = cep;
    this.tel = tel;
    this.resp = resp;
    this.cargo = cargo;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}

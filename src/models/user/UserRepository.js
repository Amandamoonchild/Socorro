import { user } from "../../data/Profile";
import User from "./User";

class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, name, data, cor1, cor2, func, turmas, bairro, cidade, cep, tel, email, resp, cargo) {
    const user = this.get(id);

    if (user) {
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
    return user;
  }
}

const usersRepository = new UsersRepository();
const newUser = new User(user.name, user.data, user.cor1, user.cor2, user.func, user.turmas, user.bairro, user.cidade, user.cep, user.tel, user.email, user.resp, user.cargo);

usersRepository.add(newUser);

export default usersRepository;

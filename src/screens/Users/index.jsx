import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

import User from "../../models/user/User";
import UsersRepository from "../../models/user/UserRepository";
import { useNavigation } from "@react-navigation/native";

const usersList = new UsersRepository();

let userId = 1; // Inicia o ID do usuário

export default function Users() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const createUser = () => {
    const newUser = new User(userId++, name, email, parseInt(age) || 0); // Incrementa o ID após o uso

    usersList.add(newUser);
    setAllUsers(usersList.getAll());

    clearInputs();

    return newUser;
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <View style={styles.container}>
      <Title title="Users" />

      <View>
        <TextInput
          placeholder="Digite o nome"
          style={styles.userInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Digite o ano de fundação"
          style={styles.userInput}
          onChangeText={setFund}
          value={fund}
        />
          <TextInput
          placeholder="Digite o xxx"
          style={styles.userInput}
          onChangeText={setEmail}
          value={email}
        />
         <TextInput
          placeholder="Digite a cor primária"
          style={styles.userInput}
          onChangeText={setCor1}
          value={cor1}
        />
         <TextInput
          placeholder="Digite a cor secundária"
          style={styles.userInput}
          onChangeText={setCor2}
          value={cor2}
        />
         <TextInput
          placeholder="Digite a quantidade de funcionários"
          style={styles.userInput}
          onChangeText={setQnt}
          value={qnt}
        />
        <TextInput
          placeholder="Digite a quantidade de turmas"
          style={styles.userInput}
          onChangeText={setTurmas}
          value={turmas}
        />
        <TextInput
          placeholder="Digite o endereço"
          style={styles.userInput}
          onChangeText={setEnder}
          value={ender}
        />
        <TextInput
          placeholder="Digite o telefone de contato"
          style={styles.userInput}
          onChangeText={setTel}
          value={tel}
        />
        <TextInput
          placeholder="Digite o contato"
          style={styles.userInput}
          onChangeText={setCtt}
          value={ctt}
        />
        <TextInput
          placeholder="Digite o cargo do responsável"
          style={styles.userInput}
          onChangeText={setCargo}
          value={cargo}
        />
        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text>Criar Usuário</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allUsers.length > 0 ? (
          allUsers.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => navigation.navigate("Profile", { data: user })}
            >
              <Text>{user.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há filiais cadastradas</Text>
        )}
      </View>

      <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}

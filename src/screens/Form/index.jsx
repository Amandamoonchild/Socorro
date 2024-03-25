import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";

export default function Form({ route }) {
  let { user, edit } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fund, setFund] = useState("");
  const [data, setData] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [func, setFunc] = useState("");
  const [turmas, setTurmas] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [tel, setTel] = useState("");
  const [resp, setResp] = useState("");
  const [cargo, setCargo] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(user.name);
      setEmail(user.email);
      setFund(user.fund);
      setData(user.data);
      setCor1(user.cor1);
      setCor2(user.cor2);
      setFunc(user.func);
      setTurmas(user.turmas);
      setBairro(user.bairro);
      setCidade(user.cidade);
      setCep(user.cep);
      setTel(user.tel);
      setResp(user.resp);
      setCargo(user.cargo);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      usersRepository.update(user.id,user.name, user.data, user.cor1, user.cor2, user.func, user.turmas, user.bairro, user.cidade, user.cep, user.tel, user.email, user.resp, user.cargo);
      clearInputs();
    } else {
      const newUser = new User(name, data, cor1, cor2, func, turmas, bairro, cidade, cep, tel, email, resp, cargo );
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setEmail("");
    setFund("");
    setData("");
    setCor1("");
    setCor2("");
    setFunc("");
    setTurmas("");
    setBairro("");
    setCidade("");
    setCep("");
    setTel("");
    setResp("");
    setCargo("");
  };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Usuário" : "Novo Usuário"} />
      <TextInput
        placeholder="Digite o nome da filial"
        style={styles.userInput}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Digite o email"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite a data de fundação"
        style={styles.userInput}
        onChangeText={setFund}
        value={fund}
       
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
        onChangeText={setFunc}
        value={func}
       
      />
      <TextInput
        placeholder="Digite a quantidade de turmas"
        style={styles.userInput}
        onChangeText={setTurmas}
        value={turmas}
        
      />
      <TextInput
        placeholder="Digite o bairro"
        style={styles.userInput}
        onChangeText={setBairro}
        value={bairro}
       
      />
      <TextInput
        placeholder="Digite a cidade"
        style={styles.userInput}
        onChangeText={setCidade}
        value={cidade}
       
      />
      <TextInput
        placeholder="Digite o cep"
        style={styles.userInput}
        onChangeText={setCep}
        value={cep}
       
      />
      <TextInput
        placeholder="Digite o telefone de contato"
        style={styles.userInput}
        onChangeText={setTel}
        value={cidade}
       
      />
      <TextInput
        placeholder="Digite o nome do responsável"
        style={styles.userInput}
        onChangeText={setResp}
        value={resp}
       
      />
      <TextInput
        placeholder="Digite o cargo"
        style={styles.userInput}
        onChangeText={setCargo}
        value={cargo}
        
      />
      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Filial"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

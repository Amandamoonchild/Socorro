import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editUser = () => {
    navigation.navigate("Form", { user: data, edit: true });
  };

  const deleteUser = () => {
    usersRepository.remove(data.id);
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      {data ? (
        <Text>Detalhes da filial</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}

      <View style={styles.user}>
        <View style={styles.userDetail}>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.email}</Text>
          <Text style={styles.text}>{data.data}</Text>
          <Text style={styles.text}>{data.cor1}</Text>
          <Text style={styles.text}>{data.cor2}</Text>
          <Text style={styles.text}>{data.func}</Text>
          <Text style={styles.text}>{data.turmas}</Text>
          <Text style={styles.text}>{data.bairro}</Text>
          <Text style={styles.text}>{data.cidade}</Text>
          <Text style={styles.text}>{data.cep}</Text>
          <Text style={styles.text}>{data.tel}</Text>
          <Text style={styles.text}>{data.resp}</Text>
          <Text style={styles.text}>{data.cargo}</Text>
        </View>

        <View style={styles.userActions}>
          <TouchableOpacity style={styles.editButton} onPress={editUser}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

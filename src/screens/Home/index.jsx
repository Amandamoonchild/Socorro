import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import { Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Logo1.png')}
    />
      <Title title="Bem vindo a Rede Tim Maia Colégios!" />

      <TouchButton route="Profile" title="Profile" data={user} />

      <TouchButton route="Form" title="Cadastrar Filial" />

      <TouchButton route="Users" title="Ver Filiais" />

      <TouchButton route="DevPage" title="Sobre a Dev" />

    </View>
  );
}

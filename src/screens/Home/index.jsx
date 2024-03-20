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
      style={styles.img}></Image>
      <Title title="Bem vindo a Rede Tim Maia Colégios!" />

      <TouchButton route="Filiais" title="Ver filiais" data={user} />

      <TouchButton route="Category" title="Conheça a Dev" />

      <TouchButton route="Sobre" title="Sobre" />

      <TouchButton route="Users" title="Adicionar Filial" />
    </View>
  );
}

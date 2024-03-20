import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
import { Image } from "react-native";
import { Text } from "react-native-web";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Title title="Sobre" />

      <Image source={require('../../../assets/timmaia.jpg')}
      style={styles.img}></Image>

      <Text style={styles.txt}>Tim Maia, cujo nome de nascimento é Sebastião Rodrigues Maia, 
        nasceu em 28 de setembro de 1942, no Rio de Janeiro, Brasil. Ele foi 
        um dos mais influentes e icônicos cantores, compositores e produtores 
        da música brasileira. 
        
        Nossa Rede de colégios, fundada em 1998 é uma homenagem a uma das 
        maiores vozes da riqueza cultural que é a música brasileira!</Text>

      <TouchButton route="Sobre" title="Ir para Sobre" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}

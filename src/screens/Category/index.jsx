import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
import { Image } from "react-native";
import { Text } from "react-native-web";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Sobre a Dev" />

      <Image source={require('../../../assets/DevOficial.png')}
      style={styles.img}></Image>
      <Text style={styles.txt}>Olá! Me chamo Amnada dos Santos Silva, mas prefiro só "Amanda Silva",
         que é a única coisa que eu tenho em comum com o Ayrton Senna (da Silva); um dos meus
          maiores Ídolos. Sou uma pessoa extremamente eclética, e uma das coisas que mais amo,
          É a música. Se voc?ê espera que eu diga que toco algum instrumento ou canto, sinto em 
          te decepcionar, mas eu só amo escutar mesmo. Esolhi o Tim Maia para ser o nome da escola
           pois estava com "Descobridor dos 7 mares" na cabeça.</Text>

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}

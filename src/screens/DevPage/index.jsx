import { Image, Text, TouchableOpacity, View, handleUserAction, ScrollView } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";


export default function DevPage() {

  return (

      <ScrollView style={styles.container}>
      <Title title={"Sobre a desenvolvedora"} />
      <View>
        <Image source={require('../../../assets/DevOficial.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Olá! Me chamo Amanda dos Santos Silva, mas prefiro usar só o silva por
          conta do nome do meu herói, "Ayrton Senna da Silva". Eu usei o Tim maia pro
          tema da escola pois amo música brasileira e sou clubista com meu país, e
          acho que nós Latinos devemos ter o mesmo nível de autoestima dos EUA.</Text>
      </View>
      <Image source={require('../../../assets/Logo3.png')}
        style={styles.img}
      />
      <Title title={"O que a rede Tim maia colégios oeferece?"} />
      <Text style={styles.txt}>Bem-vindos a uma breve visão do Colégio Tim Maia, onde a educação encontra o
        ritmo e a energia para transformar vidas. Inspirado pelo legado do lendário artista brasileiro, nosso
        colégio busca trazer uma abordagem única para o aprendizado, combinando talento, paixão e inovação para
        proporcionar uma experiência educacional excepcional.

        Vantagens do Colégio Tim Maia:</Text>
      <Title title={"Cultura Musical Vibrante"} />
      <Image source={require('../../../assets/motivo1.jpg')}
        style={styles.img}
      />
      <Text style={styles.txt}>Assim como Tim Maia, conhecido por sua música inovadora e envolvente, nosso colégio 
      valoriza a expressão artística e musical. Oferecemos um ambiente onde os alunos podem explorar sua criatividade 
      através da música, dança e outras formas de expressão artística.</Text>
      <Title title={"Diversidade e Inclusão"} />
      <Image source={require('../../../assets/motivo2.jpg')}
        style={styles.img}
      />
      <Text style={styles.txt}>Assim como a música de Tim Maia transcendeu fronteiras e uniu pessoas de diferentes 
      origens, no Colégio Tim Maia, celebramos a diversidade e promovemos um ambiente inclusivo onde todos os alunos 
      são valorizados e respeitados.</Text>
      <Title title={"Foco no Bem-Estar"} />
      <Image source={require('../../../assets/motivo3.jpg')}
        style={styles.img}
      />
      <Text style={styles.txt}> Inspirados pela mensagem de alegria e positividade de Tim Maia, priorizamos o 
      bem-estar emocional e físico de nossos alunos. Oferecemos programas e atividades que promovem a saúde mental, 
      o autocuidado e o equilíbrio entre trabalho e lazer.</Text>
      <Title title={"Excelência Acadêmica"} />
      <Image source={require('../../../assets/motivo4.jpg')}
        style={styles.img}
      />
      <Text style={styles.txt}>ssim como Tim Maia se esforçou para alcançar a excelência em sua arte, no Colégio 
      Tim Maia, buscamos a excelência acadêmica em todos os aspectos. Nossos professores são dedicados e qualificados, 
      proporcionando um ambiente de aprendizado estimulante e desafiador.</Text>
      <Title title={"Preparação para o Futuro"} />
      <Image source={require('../../../assets/motivo5.jpg')}
        style={styles.img}
      />
      <Text style={styles.txt}>Seguindo o exemplo de determinação e perseverança de Tim Maia, nosso colégio se
       compromete a preparar os alunos para os desafios do futuro. Além do currículo acadêmico, enfatizamos o 
       desenvolvimento de habilidades essenciais, como pensamento crítico, criatividade e colaboração.</Text>
       </ScrollView>
  );
}

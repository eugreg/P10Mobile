import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "././styles";
import Card from "../../components/Ofertas/CardProduto/Card";
const Pesquisa = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <TextInput
          mode="outlined"
          label="O que você está procurando?"
          placeholder="Camisa, brinquedo, caderno, etc"
          right={<TextInput.Affix />}
        />
        <View style={styles.produtos}>

        </View>
      </View>
    </ScrollView>
  );
};

export default Pesquisa;

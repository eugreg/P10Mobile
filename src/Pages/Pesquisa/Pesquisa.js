import { ScrollView, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from "././styles";
import Card from  "../../components/Ofertas/CardProduto/Card"
const Pesquisa = () => {


  return (
    <ScrollView>

    <TextInput
      
      mode="outlined"
      label="pesquisar"
      placeholder="pesquisar"
      right={<TextInput.Affix  />}
      
      />
      <View style={styles.produtos}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </View>
    </ScrollView>
  );
};

export default Pesquisa
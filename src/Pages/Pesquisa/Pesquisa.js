import { ScrollView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./styles";

function CategoriaCard(props) {
  return (
    <View style={styles.cardCategorias}>
      <Text style={{ marginTop: 40 }}>{props.categoria.nomeCategoria}</Text>
    </View>
  );
}

const categorias = [
  {
    id: 1,
    nomeCategoria: "Papelaria",
  },
  {
    id: 2,
    nomeCategoria: "Brinquedos",
  },
  {
    id: 3,
    nomeCategoria: "Limpeza",
  },
  {
    id: 4,
    nomeCategoria: "Casa",
  },
  {
    id: 5,
    nomeCategoria: "Roupas",
  },
  {
    id: 6,
    nomeCategoria: "Livraria",
  },
  {
    id: 7,
    nomeCategoria: "Mercado",
  },
];

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
        <View style={styles.main}>
          <Text style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}>
            CATEGORIAS
          </Text>
          <View style={styles.categorias}>
            {categorias.map((categoria) => (
              <CategoriaCard key={categoria.id} categoria={categoria} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Pesquisa;

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  imagemPromo: {
    width: "94%",
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  navCategorias: {
    height: 140,
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
  },
  categoriaImagem: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 50,
  },
  cardCategorias: {
    flexDirection: "column",
    width: 110,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  produtos: {
    padding: 10,
    backgroundColor: "#FFF",
    marginTop: 10,

    alignItems: "center",
  },
  iconeNav: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 15,
  },
});

export default styles;

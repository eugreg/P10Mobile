import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  imagemPromo: {
    width: "94%",
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  navCategorias: {
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
    flexDirection: "row",
    marginRight: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "black",
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
    padding: 10,
  },
});

export default styles;

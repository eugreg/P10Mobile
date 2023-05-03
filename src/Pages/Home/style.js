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
  cardCategorias: {
    flexDirection: "row",
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
  },
  textoCategoria: {
    fontWeight: "600",
    fontSize: 14,
    marginHorizontal: 10,
    color: "black",
  },
  produtos: {
    padding: 10,
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

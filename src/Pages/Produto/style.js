import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  cardCor: {
    backgroundColor: "red",
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardTamanho: {
    backgroundColor: "black",
    borderRadius: 10,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  especificacao: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
  },
  descricao: {
    width: "100%",
    height: 150,
    justifyContent: "space-between",
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    flexDirection: "column",
    borderRadius: 10,
  },
  avaliacao: {
    width: "100%",
    marginBottom: 10,
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    flexDirection: "column",
    borderRadius: 10,
  },
  cardAvalicao:{
    marginHorizontal: 5,
  }
});

export default styles;

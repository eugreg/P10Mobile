import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import Produtos from "../../components/Visitados/Produtos.js";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../Carrinho/style";
export class Carrinho extends Component {
  render() {
    return (
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.aviso}>
            <FontAwesome name="shopping-cart" size={50} color="black" />
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Seu carrinho está vazio!
            </Text>
          </View>
          <View style={{ marginVertical: 15 }}>
            <Text
              style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}
            >
              VEJA TAMBÉM
            </Text>
            <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.btnVeja}>DESTAQUES</Text>
              <Text style={styles.btnVeja}>OFERTAS</Text>
              <Text style={styles.btnVeja}>LIVRARIA</Text>
              <Text style={styles.btnVeja}>MERCADO</Text>
            </View>
          </View>
          <Produtos />
        </ScrollView>
      </View>
    );
  }
}

export default Carrinho;

import { Text, View } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardProdutos from "./CardProduto/Card";
import styles from "./style";

export default class Visitados extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 10, width: "100%", marginTop: 20}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}>
            VOCÊ VISITOU RECENTEMENTE ;)
          </Text>
        </View>
        <View style={styles.produtos}>
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
        </View>
      </View>
    );
  }
}

import { Text, View } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardProdutos from "./CardProduto/Card";
import styles from "./style";

export default class NovosProdutos extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 10, width: "100%", marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}>
            VEJA TAMBÉM
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#555",
                marginRight: 5,
                fontSize: 14,
              }}
            >
              ver mais
            </Text>
            <Ionicons
              name="ios-arrow-forward-circle-sharp"
              size={24}
              color="#555"
            />
          </View>
        </View>
        <View style={styles.produtos}>
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
        </View>
      </View>
    );
  }
}

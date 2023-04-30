import { Text, View } from "react-native";
import React, { Component } from "react";
import CardProdutos from "../../components/CardProduto/Card";
import styles from "./style";

export default class Destaques extends Component {
  render() {
    return (
      <View style={{alignItems: "center"}}>
        <Text style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}>
          DESTAQUES
        </Text>
        <View style={styles.produtos}>
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

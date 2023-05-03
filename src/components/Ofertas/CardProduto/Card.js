import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import styles from "./style";

export default class card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10}}
          source={{
            uri: this.props.card.imagem,
          }}
        ></Image>
        <View>
          <Text style={{ fontWeight: "700" }}>{this.props.card.nome}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              R${this.props.card.preco}
            </Text>
            <Text style={{ fontSize: 15, color: "#555", textDecorationLine: 'line-through' }}>
              R${this.props.card.preco}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

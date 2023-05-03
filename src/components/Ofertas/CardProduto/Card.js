import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./style";

export default class card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image
          style={{ width: "100%", height: 100, borderRadius: 20 }}
          source={{
            uri: this.props.card.imagem,
          }}
        ></Image>
        <Text style={{fontWeight: "600"}}>{this.props.card.nome}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>R${this.props.card.preco}</Text>
          <Text
            style={{
              backgroundColor: "#FF0000",
              color: "white",
              padding: 5,
              fontSize: 10,
              borderRadius: 10,
            }}
          >
            {this.props.card.quantidade} Unid.
          </Text>
        </View>
      </View>
    );
  }
}

import { Text, View } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardProdutos from "./CardProduto/Card";
import styles from "./style";

export default class Visitados extends Component {
  render() {
    const cards = [
      {
        id: 1,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        quantidade: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 2,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        quantidade: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 3,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        quantidade: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 4,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        quantidade: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
    ];
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
            VOCÊ VISITOU RECENTEMENTE ;)
          </Text>
        </View>
        <View style={styles.produtos}>
          {cards.map((card) => (
            <CardProdutos key={card.id} card={card} />
          ))}
        </View>
      </View>
    );
  }
}

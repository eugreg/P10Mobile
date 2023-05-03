import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardProdutos from "./CardProduto/Card.js";
import styles from "./style";

export default class Destaques extends Component {
  /*   handlePress = () => {
    this.props.navigation.navigate("Teste");
  }; */
  render() {
    const cards = [
      {
        id: 1,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        desconto: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 2,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        desconto: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 3,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        desconto: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 4,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        desconto: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 5,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        desconto: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
      {
        id: 6,
        nome: "EVGA Mouse gamer",
        preco: 5.22,
        desconto: 5,
        imagem:
          "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
      },
    ];
    return (
      <View
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}>
            DESTAQUES
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
          {cards.map((card) => (
            <CardProdutos
              key={card.id}
              card={card}
              navigation={this.props.navigation}
            />
          ))}
        </View>
      </View>
    );
  }
}

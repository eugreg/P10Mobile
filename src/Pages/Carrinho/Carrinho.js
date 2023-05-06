import { Text, View } from "react-native";
import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../Carrinho/style";
export class Carrinho extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.aviso}>
          <FontAwesome name="shopping-cart" size={50} color="black" />
          <Text style={{fontSize: 20, fontWeight: "600"}}>Seu carrinho está vazio!</Text>
        </View>
        <View>
            <Text>Veja</Text>
            <View style={{flexWrap: "wrap",}}>
                <Text>Destaques</Text>
                <Text>Destaques</Text>
                <Text>Destaques</Text>
                <Text>Destaques</Text>
            </View>
        </View>
      </View>
    );
  }
}

export default Carrinho;

import { Text, View } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardProdutos from "./CardProduto/Card";
import styles from "./style";
import { TouchableOpacity } from "react-native-web";


 export default class Destaques extends Component {

  handlePress = () => {
    this.props.navigation.navigate('Teste');
  };
  
  render() {
    
    return (
      <View style={{ paddingHorizontal: 10, width: "100%" }}>
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
          <TouchableOpacity onPress={this.handlePress}>
            <CardProdutos />
          </TouchableOpacity>
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

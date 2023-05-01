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
            uri: "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
          }}
        ></Image>
        <Text style={{fontWeight: "600"}}>EVGA Mouse gamer</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>R$10.00</Text>
          <Text
            style={{
              backgroundColor: "#FF0000",
              color: "white",
              padding: 5,
              fontSize: 10,
              borderRadius: 10,
            }}
          >
            10 Unid.
          </Text>
        </View>
      </View>
    );
  }
}

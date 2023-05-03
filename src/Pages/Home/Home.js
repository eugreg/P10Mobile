import { View, Image, Text, ScrollView } from "react-native";
import React, { Component } from "react";
import styles from "./style.js";
import {
  Feather,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import Destaques from "../../components/Destaques/Produtos";
import Visitados from "../../components/Visitados/Produtos";
import Ofertas from "../../components/Ofertas/Produtos";
import NovosProdutos from "../../components/Novos/Produtos";

import Produto from "../Produto/Produto";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

class HomeClass extends Component {
  render() {
    return (
      <View style={styles.main}>
        <ScrollView>
          <Image
            style={styles.imagemPromo}
            source={require("../../../assets/img/promo.png")}
          />
          <View style={styles.navCategorias}>
            <Text
              style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}
            >
              CATEGORIAS
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <Feather name="paperclip" size={24} color="white" />
                </View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    marginHorizontal: 10,
                    color: "white",
                  }}
                >
                  Papelaria
                </Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <MaterialIcons name="toys" size={24} color="white" />
                </View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    marginHorizontal: 10,
                    color: "white",
                  }}
                >
                  Brinquedos
                </Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <FontAwesome5 name="pump-soap" size={24} color="white" />
                </View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    marginHorizontal: 10,
                    color: "white",
                  }}
                >
                  Limpeza
                </Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <FontAwesome5 name="house-damage" size={24} color="white" />
                </View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    marginHorizontal: 10,
                    color: "white",
                  }}
                >
                  Casa
                </Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <Ionicons name="shirt" size={24} color="white" />
                </View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    marginHorizontal: 10,
                    color: "white",
                  }}
                >
                  Roupas
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.produtos}>
            <Destaques navigation={this.props.navigation} />
            <Ofertas />
            <Visitados />
            <NovosProdutos />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function HomeWrap({navigation}) {
  return <HomeClass navigation={navigation} />
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeWrap} options={{headerShown: false}} />
      <Stack.Screen name="Produto" component={Produto} />
    </Stack.Navigator>
  )
}
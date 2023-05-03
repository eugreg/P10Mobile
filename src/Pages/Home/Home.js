import Destaques from "../../components/Destaques/Produtos";
import Visitados from "../../components/Visitados/Produtos";
import Ofertas from "../../components/Ofertas/Produtos";
import NovosProdutos from "../../components/Novos/Produtos";
import { View, Image, Text, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  Feather,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import styles from "./style.js";

import Produto from "../Produto/Produto";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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
              style={{
                fontWeight: "bold",
                color: "#FF0000",
                fontSize: 17,
                marginBottom: 5,
              }}
            >
              CATEGORIAS
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <Feather name="paperclip" size={24} color="white" />
                </View>
                <Text style={styles.textoCategoria}>Papelaria</Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <MaterialIcons name="toys" size={24} color="white" />
                </View>
                <Text style={styles.textoCategoria}>Brinquedos</Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <FontAwesome5 name="pump-soap" size={24} color="white" />
                </View>
                <Text style={styles.textoCategoria}>Limpeza</Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <FontAwesome5 name="house-damage" size={24} color="white" />
                </View>
                <Text style={styles.textoCategoria}>Casa</Text>
              </View>
              <View style={styles.cardCategorias}>
                <View style={styles.iconeNav}>
                  <Ionicons name="shirt" size={24} color="white" />
                </View>
                <Text style={styles.textoCategoria}>Roupas</Text>
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

function HomeWrap({ navigation }) {
  return <HomeClass navigation={navigation} />;
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeWrap}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Produto" component={Produto} />
    </Stack.Navigator>
  );
}

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

function CategoriaCard(props) {
  return (
    <View style={styles.cardCategorias}>
      <View style={styles.iconeNav}>
        <MaterialIcons name={props.categoria.nameIcon} size={24} color="white" />
      </View>
      <Text style={styles.textoCategoria}>{props.categoria.nomeCategoria}</Text>
    </View>
  );
}

class HomeClass extends Component {
  render() {
    const categorias = [
      {
        id: 1,
        nomeCategoria: "Papelaria",
        nameIcon: "description",
      },
      {
        id: 2,
        nomeCategoria: "Brinquedos",
        nameIcon: "toys",
      },
      {
        id: 3,
        nomeCategoria: "Limpeza",
        nameIcon: "sanitizer",
      },
      {
        id: 4,
        nomeCategoria: "Casa",
        nameIcon: "home",
      },
      {
        id: 5,
        nomeCategoria: "Roupas",
        nameIcon: "checkroom",
      },
      {
        id: 6,
        nomeCategoria: "Livraria",
        nameIcon: "book",
      },
      {
        id: 7,
        nomeCategoria: "Mercado",
        nameIcon: "shopping-cart",
      },
    ];
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
              {categorias.map((categoria) => (
                <CategoriaCard key={categoria.id} categoria={categoria} />
              ))}
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

import { View, Image, Text } from "react-native";
import React, { Component } from "react";
import styles from "./style.js";
import { ScrollView } from "react-native";
import Produtos from "../../components/Produtos/Produtos";
export default class Home extends Component {
  render() {
    return (
      <View style={styles.main}>
        <ScrollView>
          <Image
            style={styles.imagemPromo}
            source={require("/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/assets/img/promo.png")}
          />
          <View style={styles.navCategorias}>
            <Text
              style={{ fontWeight: "bold", color: "#FF0000", fontSize: 17 }}
            >
              CATEGORIAS
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.cardCategorias}>
                <Image
                  style={styles.categoriaImagem}
                  source={require("/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/assets/img/categorias/papelaria.jpg")}
                />
                <Text style={{ fontWeight: "600", fontSize: 14 }}>
                  Papelaria
                </Text>
              </View>
              <View style={styles.cardCategorias}>
                <Image
                  style={styles.categoriaImagem}
                  source={require("/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/assets/img/categorias/brinquedos.jpg")}
                />
                <Text style={{ fontWeight: "600", fontSize: 14 }}>
                  Brinquedos
                </Text>
              </View>
              <View style={styles.cardCategorias}>
                <Image
                  style={styles.categoriaImagem}
                  source={require("/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/assets/img/categorias/limpeza.jpg")}
                />
                <Text style={{ fontWeight: "600", fontSize: 14 }}>Limpeza</Text>
              </View>
              <View style={styles.cardCategorias}>
                <Image
                  style={styles.categoriaImagem}
                  source={require("/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/assets/img/categorias/casa.jpg")}
                />
                <Text style={{ fontWeight: "600", fontSize: 14 }}>Casa</Text>
              </View>
              <View style={styles.cardCategorias}>
                <Image
                  style={styles.categoriaImagem}
                  source={require("/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/assets/img/categorias/roupa.jpg")}
                />
                <Text style={{ fontWeight: "600", fontSize: 14 }}>Roupas</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.produtos}>
            <Produtos />
          </View>
        </ScrollView>
      </View>
    );
  }
}

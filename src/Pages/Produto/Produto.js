import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import styles from "./style.js";
import ProdutoNovos from "../../components/Novos/Produtos.js";
import { Ionicons } from "@expo/vector-icons";

/* import Carousel from "react-native-reanimated-carousel";
 */


function Produto({route}) {
  /*   const width = Dimensions.get("window").width;
   */ return (
    <View style={styles.main}>

      <View
        style={{ width: "100%", height: 200, backgroundColor: "black" }}
      ></View>
      {/* imagem aqui */}
      <View style={{ padding: 10 }}>
        <ScrollView>
          <View style={{marginVertical: 10}}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }} >NOME DO DO PRODUTO -{route.params.id}</Text>
            <Text style={{ fontWeight: "bold", color: "#FF0000", fontSize: 20 }}>R$3,00</Text>

      <ScrollView>
        <View
          style={{ width: "100%", height: 200, backgroundColor: "black" }}
        ></View>
        {/* imagem aqui */}
        <View style={{ padding: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              NOME DO DO PRODUTO
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#FF0000", fontSize: 20 }}
            >
              R$3,00
            </Text>
          </View>
          <View style={styles.filtros}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}
              >
                Cor do produto
              </Text>
              <ScrollView horizontal={true}>
                <View style={styles.cardCor}></View>
                <View style={styles.cardCor}></View>
                <View style={styles.cardCor}></View>
                <View style={styles.cardCor}></View>
              </ScrollView>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}
              >
                Tamanho do produto
              </Text>
              <ScrollView horizontal={true}>
                <View style={styles.cardTamanho}>
                  <Text>Gigante</Text>
                </View>
                <View style={styles.cardTamanho}>
                  <Text>Muito Gigante</Text>
                </View>
                <View style={styles.cardTamanho}>
                  <Text>Gigante novamente</Text>
                </View>
                <View style={styles.cardTamanho}>
                  <Text>Mas muito Gigante MESMO</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.especificacao}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
              Especificação
            </Text>
            <Ionicons
              name="ios-arrow-forward-circle-sharp"
              size={24}
              color="#000"
            />
          </View>
          <View style={styles.descricao}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
              Descrição
            </Text>
          </View>
          <View style={styles.avaliacao}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
              Avaliação
            </Text>
            <Ionicons
              name="ios-arrow-forward-circle-sharp"
              size={24}
              color="#000"
            />
          </View>
        </View>
        <ProdutoNovos />
      </ScrollView>

      {/*       <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(produto) => console.log("current produto:", produto)}
        renderItem={({ produto }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{produto}</Text>
          </View>
        )}
      /> */}
    </View>
  );
}
export default Produto;

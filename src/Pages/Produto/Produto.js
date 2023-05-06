import ProdutoNovos from "../../components/Novos/Produtos.js";
import { Image, ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style.js";

/* import Carousel from "react-native-reanimated-carousel";
 */

function Produto({ route }) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
          }}
          style={{ width: "100%", height: 200, backgroundColor: "black" }}
        ></Image>
        {/* imagem aqui */}
        <View style={{ padding: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              NOME DO DO PRODUTO -{route.params.id}
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#FF0000", fontSize: 20 }}
            >
              R$5.22
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
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg",
                  }}
                  style={styles.cardCor}
                ></Image>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71AqxlHMiEL._AC_SX679_.jpg",
                  }}
                  style={styles.cardCor}
                ></Image>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/714T5ONQmwL._AC_SX679_.jpg",
                  }}
                  style={styles.cardCor}
                ></Image>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/61B1mziixFL._AC_SX679_.jpg",
                  }}
                  style={styles.cardCor}
                ></Image>
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
                  <Text style={{ color: "white" }}>Gigante</Text>
                </View>
                <View style={styles.cardTamanho}>
                  <Text style={{ color: "white" }}>Muito Gigante</Text>
                </View>
                <View style={styles.cardTamanho}>
                  <Text style={{ color: "white" }}>Gigante novamente</Text>
                </View>
                <View style={styles.cardTamanho}>
                  <Text style={{ color: "white" }}>
                    Mas muito Gigante MESMO
                  </Text>
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
            <Text style={{ height: 110 }}>
              Tecnologia de matriz de sensor duplo de 2 dimensões, sensor LOD
              emparelhado com um sensor óptico Pixart 3389 Microprocessador de
              núcleo Arm Cortex-M33 de alta velocidade USB2.0, suporta uma taxa
              nativa de 8K Hz. Oito vezes o padrão de 1K Hz em mouses de jogos
              concorrentes para um tempo de resposta mais rápido e movimentos
              precisos. 5 perfis integrados personalizáveis com configurações
              DPI rápidas permitem que você leve o mouse para qualquer lugar.
              Iluminação RGB de 3 zonas personalizável através do software
              UNLEASH RGB Corpo ambidestro leve e cabo USB paracord flexível
            </Text>
            {/* como faz esse efeito? */}
          </View>
          <View style={styles.avaliacao}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 5,
                }}
              >
                Avaliação
              </Text>
              <Ionicons
                name="ios-arrow-forward-circle-sharp"
                size={24}
                color="#000"
              />
            </View>
            <View style={styles.cardAvalicao}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    marginRight: 10,
                  }}
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/849206?v=4",
                  }}
                ></Image>
                <Text style={{ fontWeight: "600", fontSize: 17 }}>
                  @ldmfabio
                </Text>
                <View></View>
              </View>
              <View style={{ marginLeft: 35 }}>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="star" size={15} color="#555" />
                  <AntDesign name="staro" size={15} color="#555" />
                  <AntDesign name="staro" size={15} color="#555" />
                  <AntDesign name="staro" size={15} color="#555" />
                  <AntDesign name="staro" size={15} color="#555" />
                </View>
                <Text style={{ color: "#555", fontSize: 15 }}>
                  Variação: X12, branco e Gigante
                </Text>
                <Text style={{ color: "#000", fontSize: 15 }}>
                  Muito ruim!!
                </Text>
              </View>
            </View>
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

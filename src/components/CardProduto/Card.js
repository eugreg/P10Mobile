import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"

export default class card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image
        style={{width: "100%", height: 100, borderRadius: 20,}} 
        source={{uri: "https://m.media-amazon.com/images/I/71j5dgh0GSL._AC_SX679_.jpg"}}></Image>
        <Text>EVGA Mouse gamer X15 MMO</Text>
      </View>
    )
  }
}
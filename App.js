import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header/Header";
import Nav from "./src/components/Nav/Nav";

export default function App() {
  return (
    <View style={styles.body}>
      <Header />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
});

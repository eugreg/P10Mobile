import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { Provider as PaperProvider } from 'react-native-paper';
import Header from "./src/components/Header/Header"
import Nav from "./src/components/Nav/Nav"
export default function App() {
  return (
    <PaperProvider>

    <View style={styles.body}>
      <Header />
      {/* <ScrollView> */}
      <Nav />
      {/* </ScrollView> */}
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

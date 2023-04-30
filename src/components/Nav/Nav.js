import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pesquisa from "/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/src/Pages/Pesquisa/Pesquisa.js";
import Home from "/home/geos/Documentos/desen/P10Mobilegreg/Novo/P10Mobile/src/Pages/Home/Home.js";
/*arrumar para o caminho relativo que no meu pc não ta funcionando (geos)*/
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
      /*como raios coloca estilo nesse nav? ngm sabe, ou seja, não dá*/
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Nav"
        style={styles.nav}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "red",
          style: {
            padding: 58,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisa"
          component={Pesquisa}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="search-web"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="carrinho"
          component={Pesquisa}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shopping"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Pesquisa}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pesquisa from "../../Pages/Pesquisa/Pesquisa";
import Carrinho from "../../Pages/Carrinho/Carrinho";
import Home from "../../Pages/Home/Home";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "red",
        tabBarStyle: [
          {
            alignItems: "center",
          },
        ],
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
        name="Produto"
        component={Carrinho}
        /* por enquanto produto */
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
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
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

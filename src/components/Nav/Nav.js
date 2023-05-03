import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./Tabs";

export default function Nav() {
  return (
    /*como raios coloca estilo nesse nav? ngm sabe, ou seja, não dá*/
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

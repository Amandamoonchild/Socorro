import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";

import Category from "../screens/Category";
import Sobre from "../screens/Sobre";
import Filiais from "../screens/Filiais";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Filiais" component={Filiais} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
};

export default StackRoutes;

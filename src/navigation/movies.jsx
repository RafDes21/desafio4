import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, List, DetailList } from "../screens/index";

const Stack = createNativeStackNavigator();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories"
    screenOptions={{
        headerTitleAlign:"center"
    }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="DetailList" component={DetailList} />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;

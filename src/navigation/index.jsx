import { NavigationContainer } from "@react-navigation/native";
import MoviesNavigator from "./movies";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MoviesNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";

import { styles } from "./styles";
import AppNavigator from "./navigation";

export const App = () => {
  const [loaded] = useFonts({
    "Inconsolata-Bold": require("../assets/fonts/Inconsolata-Bold.ttf"),
    "Inconsolata-Light": require("../assets/fonts/Inconsolata-Light.ttf"),
    "Inconsolata-Medium": require("../assets/fonts/Inconsolata-Medium.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
};

export default App;

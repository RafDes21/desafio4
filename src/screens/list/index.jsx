import { Text, View, Button } from "react-native";
import { styles } from "./styles";

const List = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("DetailList")}
      />
    </View>
  );
};

export default List;

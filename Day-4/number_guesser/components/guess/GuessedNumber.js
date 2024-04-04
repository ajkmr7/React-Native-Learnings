import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const GuessedNumber = ({ children }) => {
  return <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary800,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.primary800,
    fontSize: 36,
  },
});

export default GuessedNumber;
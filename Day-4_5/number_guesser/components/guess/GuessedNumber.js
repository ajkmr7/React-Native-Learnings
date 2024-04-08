import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const GuessedNumber = ({ children }) => {
  return <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500 ,
    fontSize: 36,
    fontFamily: "open-sans",
  },
});

export default GuessedNumber;
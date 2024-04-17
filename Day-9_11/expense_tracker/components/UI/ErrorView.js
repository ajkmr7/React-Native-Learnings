import { View, StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

const ErrorView = (message, onConfirm) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        Something went wrong. Try again later!
      </Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>OK</Button>
    </View>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
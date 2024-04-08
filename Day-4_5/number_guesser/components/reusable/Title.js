import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    padding: 12,
    borderWidth: 4,
    color: Colors.primary800,
    textAlign: "center",
    borderColor: Colors.primary800,
  },
});

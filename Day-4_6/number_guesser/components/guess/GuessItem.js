import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

const GuessItem = ({number, guess}) => {
  return (
    <View style={styles.guessItem}>
        <Text style={styles.guessItemText}>Guess {number}: <Text style={styles.guessHighlightText}>{guess}</Text></Text>
    </View>
  );
};

export default GuessItem;

const styles = StyleSheet.create({
  guessItem: {
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    borderRadius: 18,
  },
  guessItemText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    padding: 12,
    fontSize: 16
  },
  guessHighlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
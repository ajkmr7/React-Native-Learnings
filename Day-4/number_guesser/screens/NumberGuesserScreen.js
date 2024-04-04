import { useState } from "react";
import { View, StyleSheet, SafeAreaView, Alert } from "react-native";

import Title from "../components/Title";
import GuessedNumber from "../components/guess/GuessedNumber";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let minBoundary = 1;
let maxBoundary = 100;

const NumberGuesserScreen = () => {
  const initialGuess = generateRandomNumber(1, 100);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (isLower) => {
    if (minBoundary == maxBoundary) {
      Alert.alert("Don't lie", "You know that it is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (isLower) {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    setCurrentGuess(generateRandomNumber(minBoundary, maxBoundary));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title>Opponent's Guess</Title>
        <GuessedNumber>{currentGuess}</GuessedNumber>
        <View style={styles.buttonStack}>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, true)}
          >
            -
          </PrimaryButton>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, false)}
          >
            +
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NumberGuesserScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
  },
  buttonStack: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 8,
  },
});

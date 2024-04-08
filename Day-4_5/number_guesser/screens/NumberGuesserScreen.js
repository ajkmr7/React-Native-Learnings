import { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Alert } from "react-native";

import Title from "../components/Title";
import GuessedNumber from "../components/guess/GuessedNumber";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let minBoundary = 1;
let maxBoundary = 99;

const NumberGuesserScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess]);

  const nextGuessHandler = (isLower) => {
    if (
      (minBoundary == maxBoundary && currentGuess != userNumber) ||
      currentGuess < minBoundary ||
      currentGuess > maxBoundary
    ) {
      Alert.alert("Don't lie", "You know that it is wrong...", [
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            minBoundary = 1;
            maxBoundary = 100;
            setCurrentGuess(generateRandomNumber(minBoundary, maxBoundary));
          },
        },
      ]);
      return;
    }
    if (isLower && maxBoundary) {
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
        <Card>
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
        </Card>
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
    flexDirection: "row",
    marginVertical: 8,
  },
});

import { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/reusable/Title";
import PrimaryButton from "../components/reusable/PrimaryButton";
import Card from "../components/reusable/Card";

import GuessItem from "../components/guess/GuessItem";
import GuessedNumber from "../components/guess/GuessedNumber";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let minBoundary = 1;
let maxBoundary = 99;

const NumberGuesserScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 99);
  const [guesses, setGuesses] = useState([initialGuess]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guesses.length);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 99;
  }, []);

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
            let guess = generateRandomNumber(minBoundary, maxBoundary);
            setCurrentGuess(guess);
            setGuesses([guess]);
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
    let guess = generateRandomNumber(minBoundary, maxBoundary);
    setCurrentGuess(guess);
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
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
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={nextGuessHandler.bind(this, false)}
            >
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </Card>
        <View style={styles.guessRounds}>
          <FlatList
            data={guesses}
            renderItem={(itemData) => {
              return (
                <GuessItem number={itemData.index + 1} guess={itemData.item} />
              );
            }}
            keyExtractor={(_, index) => index + 1}
            inverted
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NumberGuesserScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  buttonStack: {
    flexDirection: "row",
    marginVertical: 8,
  },
  guessRounds: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
});

import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import Colors from "./constants/Colors";

import NumberPickerScreen from "./screens/NumberPickerScreen";
import NumberGuesserScreen from "./screens/NumberGuesserScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [isFontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!isFontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber);

  const gameOverHandler = (rounds) => {
    setIsGameOver(true);
    setGuessRounds(rounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
    setIsGameOver(false);
  }

  let screen = <NumberPickerScreen onNumberPicked={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <NumberGuesserScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  }

  if (isGameOver) {
    screen = <ResultScreen number={userNumber} rounds={guessRounds} onRestart={startNewGameHandler}/>;
  }

  return (
    <ImageBackground
      source={require("./assets/favicon.png")}
      resizeMode="repeat"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView>{screen}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

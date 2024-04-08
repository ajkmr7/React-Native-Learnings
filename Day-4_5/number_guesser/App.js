import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import Colors from "./constants/Colors";

import NumberPickerScreen from "./screens/NumberPickerScreen";
import NumberGuesserScreen from "./screens/NumberGuesserScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber);

  const gameOverHandler = () => setIsGameOver(true);

  let screen = <NumberPickerScreen onNumberPicked={pickedNumberHandler} />;

  if (userNumber) {
    screen = <NumberGuesserScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(isGameOver) {
    screen = <ResultScreen/>;
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

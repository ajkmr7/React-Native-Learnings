import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import Title from "../components/reusable/Title";
import PrimaryButton from "../components/reusable/PrimaryButton";

const ResultScreen = ({rounds, number, onRestart}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{rounds}</Text> rounds to
        guess the number <Text style={styles.highlightText}>{number}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>
        Restart <MaterialIcons name="restart-alt"/>
      </PrimaryButton>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlightText: {
    color: Colors.primary800,
    fontFamily: "open-sans-bold",
  },
});

import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import Colors from "../constants/Colors";

import PrimaryButton from "../components/reusable/PrimaryButton";
import Card from "../components/reusable/Card";
import Title from "../components/reusable/Title";

const NumberPickerScreen = ({ onNumberPicked }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => setEnteredNumber(enteredText);

  const resetInputHandler = () => setEnteredNumber("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onNumberPicked(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <Title style={{fontSize: 36}}>Guess My Number</Title>
      <Card>
      <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          value={enteredNumber}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonStack}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default NumberPickerScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center"
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
  numberInput: {
    textAlign: "center",
    width: 50,
    height: 50,
    fontSize: 32,
    color: Colors.accent500,
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontFamily: "open-sans-bold",
  },
  buttonStack: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
});

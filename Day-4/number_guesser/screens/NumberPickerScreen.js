import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import Colors from "../constants/Colors"
import PrimaryButton from "../components/PrimaryButton";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default NumberPickerScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 100,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "bold",
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

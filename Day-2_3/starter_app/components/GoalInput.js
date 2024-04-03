import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    dismissModal();
  };

  const dismissModal = () => {
    props.onDismiss();
  };

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/icon.png")} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Type a new goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonStack}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={dismissModal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 16,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: "90%",
  },
  buttonStack: {
    flexDirection: "row",
  },
});

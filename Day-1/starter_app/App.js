import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);
  const addGoalHandler = () =>
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoal, id: Math.random().toString()}]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a new goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 24,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 18,
    backgroundColor: "#ccc",
  },
});

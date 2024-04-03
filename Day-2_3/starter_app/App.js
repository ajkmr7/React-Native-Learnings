import { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) =>
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);

  const deleteGoalHandler = (goalID) =>
    setGoals((currentGoals) =>
      currentGoals.filter((currentGoal) => currentGoal.id != goalID)
    );

  const dismissModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onDismiss={dismissModal}
        isVisible={isModalVisible}
      />
      {goals.length == 0 && <Text>No Goals set yet!</Text>}
      <GoalsList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
});

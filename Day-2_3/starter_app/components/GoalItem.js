import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  const deleteGoalHandler = () => {
    props.onDeleteGoal(props.item.id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#ccc",
    borderRadius: 18,
  },
  goalItemText: {
    padding: 12,
  },
  pressedItem: {
    backgroundColor: "#555",
    borderRadius: 18,
  },
});

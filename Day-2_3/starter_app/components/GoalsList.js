import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./GoalItem";

const GoalsList = (props) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.goals}
        renderItem={(itemData) => {
          return (
            <GoalItem item={itemData.item} onDeleteGoal={props.onDeleteGoal} />
          );
        }}
        keyExtractor={(item, _) => item.id}
      />
    </View>
  );
};

export default GoalsList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 4,
  },
});

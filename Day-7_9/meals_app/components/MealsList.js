import { View, FlatList } from "react-native";
import { StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

const MealsList = ({ items }) => {
  function renderMeals(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

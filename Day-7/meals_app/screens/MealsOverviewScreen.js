import { View, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const filteredMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  function renderMeals(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem
        {...mealItemProps}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

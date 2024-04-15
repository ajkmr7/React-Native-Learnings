import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const filteredMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle }, [categoryId, navigation]);
  });

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

  return <MealsList items={filteredMeals} />;
};

export default MealsOverviewScreen;

import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { FavoritesContext } from "../store/context/favorites-context";

import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoritesContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoritesContext.ids.includes(meal.id)
  // );

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.placeholderText}>
          You have no favorite meals yet!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

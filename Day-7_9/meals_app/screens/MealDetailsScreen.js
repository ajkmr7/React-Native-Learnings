import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/meal_detail/Subtitle";
import List from "../components/meal_detail/List";
import IconButton from "../components/IconButton";
import favorites from "../store/redux/favorites";
import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
  // const favoritesContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const isFavorite = favoritesContext.ids.includes(mealId);
  const isFavorite = favoriteMealIds.includes(mealId);

  // const toggleFavoriteStatusHandler = () => {
  //   isFavorite
  //     ? favoritesContext.removeFavorite(mealId)
  //     : favoritesContext.addFavorite(mealId);
  // };

  const toggleFavoriteStatusHandler = () => {
    isFavorite
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  };

  useLayoutEffect(() =>
    navigation.setOptions(
      {
        headerRight: () => (
          <IconButton
            iconName={isFavorite ? "star" : "star-outline"}
            color="white"
            onPress={toggleFavoriteStatusHandler}
          />
        ),
      },
      [navigation, toggleFavoriteStatusHandler]
    )
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailsStyle}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List items={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List items={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ffffff",
  },
  detailsStyle: {
    color: "#ffffff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});

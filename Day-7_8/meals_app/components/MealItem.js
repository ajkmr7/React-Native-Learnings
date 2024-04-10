import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imageURL,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  const navigateToMealDetailsScreen = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={navigateToMealDetailsScreen}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: { margin: 8, fontWeight: "bold", textAlign: "center", fontSize: 18 },
});

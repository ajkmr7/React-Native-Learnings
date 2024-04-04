import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from '../constants/Colors'

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    borderRadius: 100,
  },
  innerContainer: {
    padding: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

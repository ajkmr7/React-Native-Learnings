import { View, StyleSheet } from 'react-native';

import Colors from "../constants/Colors";

const Card = ({children}) => {
    return <View style={styles.inputContainer}>{children}</View>
};

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
      marginHorizontal: 24,
      borderRadius: 8,
      elevation: 100,
      marginTop: 36,
      padding: 16,
      backgroundColor: Colors.primary800,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
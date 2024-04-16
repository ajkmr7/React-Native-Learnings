import { Text, TextInput, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig, style }) => {
  const input = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    input.push(styles.inputMultiLine);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={input} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiLine: { minHeight: 100, textAlignVertical: "top" },
});

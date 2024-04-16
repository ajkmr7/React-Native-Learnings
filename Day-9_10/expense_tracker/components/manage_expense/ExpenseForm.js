import { Text, View, StyleSheet, Alert } from "react-native";

import { getFormattedTime } from "../../util/date";

import Input from "./Input";
import { useState } from "react";
import Button from "../../components/UI/Button";

const ExpenseForm = ({
  submitButtonLabel,
  defaultValues,
  onCancel,
  onSubmit,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedTime(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredValue };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
        Alert.alert('Invalid Input!', 'Please check your input values')
        return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 80,
  },
  title: {
    marginVertical: 24,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

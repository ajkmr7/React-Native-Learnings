import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ navigation, route }) => {
  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    isEditing
      ? expensesContext.updateExpense(editedExpenseId, {
          description: "Expense Updated",
          amount: 1000,
          date: new Date(),
        })
      : expensesContext.addExpense({
          description: "Expense Added",
          amount: 1000,
          date: new Date(),
        });
    navigation.goBack();
  };

  useLayoutEffect(
    () =>
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      }),
    [isEditing, navigation]
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
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

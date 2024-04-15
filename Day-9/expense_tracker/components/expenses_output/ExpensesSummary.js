import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.periodStyle}>{periodName}</Text>
      <Text style={styles.sum}>Rs.{expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  periodStyle: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  sum: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  },
});

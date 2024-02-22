import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 5,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#5E0ACC",
  },
  goalText: {
    color: "#FFFFFF",
  },
});

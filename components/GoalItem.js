import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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

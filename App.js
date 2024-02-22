import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (goalInput) => {
    setGoalList((newGoal) => [
      ...newGoal,
      { text: goalInput, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        {/* <ScrollView>
          {goalList.map((data, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={styles.goalText}>{data}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    width: "70%",
    marginRight: 5,
    padding: 8,
    borderWidth: 2,
    borderColor: "#CCCCCC",
  },
  listContainer: {
    flex: 5,
    flexDirection: "column",
  },
});

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goalList, setGoalList] = useState([]);

  const textInputHandler = (e) => {
    setGoalInput(e);
  };

  const buttonHandler = () => {
    setGoalList((newGoal) => [
      ...newGoal,
      { text: goalInput, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type Input"
          onChangeText={textInputHandler}
        />
        <Button title="Press" onPress={buttonHandler} />
      </View>
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
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
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

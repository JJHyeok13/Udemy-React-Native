import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goalList, setGoalList] = useState([]);

  const textInputHandler = (e) => {
    setGoalInput(e);
  };

  const buttonHandler = () => {
    setGoalList((newGoal) => [...newGoal, goalInput]);
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
        {goalList.map((data, index) => (
          <Text key={index}>{data}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
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

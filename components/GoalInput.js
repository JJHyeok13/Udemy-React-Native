import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [goalInput, setGoalInput] = useState("");

  const textInputHandler = (e) => {
    setGoalInput(e);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalInput);
    setGoalInput("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type Input"
          value={goalInput}
          onChangeText={textInputHandler}
        />
        <Button title="Press" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});

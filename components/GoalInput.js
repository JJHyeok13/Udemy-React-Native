import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type Input"
          value={goalInput}
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Press" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311B6B",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    padding: 8,
    borderWidth: 2,
    borderColor: "#CCCCCC",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

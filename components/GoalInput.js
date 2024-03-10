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
            <Button title="Cancel" onPress={props.onCancel} color="#F31282" />
          </View>
        </View>
        <View style={styles.button}>
          <Button title="Press" onPress={addGoalHandler} color="#B180F0" />
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
    padding: 16,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#E4D0FF",
    backgroundColor: "#E4D0FF",
    color: "#120438",
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

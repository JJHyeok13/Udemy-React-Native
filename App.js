import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
      <Text>다른 텍스트도 집어 넣기</Text>
      <TextInput placeholder="Type Input" />
      <Button title="Press Button" />
    </View>
  );
}

const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Image
          style={{ width: 100, height: 100, borderRadius: 50, paddingTop: 40 }}
          source={require("./logo.png")}
        />
        <Text style={styles.baseText}>HARAL Technologies</Text>
      </View>

      <View
        style={{
          flex: 0.4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: 180,
            height: 60,
            backgroundColor: "#91eded",
            paddingLeft: 10,
            borderRadius: 20,
          }}
          placeholder="Enter Your Name"
        />

        <TextInput
          style={{
            width: 180,
            height: 60,
            backgroundColor: "#91eded",
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 20,
          }}
          placeholder="Enter-Email"
        />
        <TextInput
          style={{
            width: 180,
            height: 60,
            backgroundColor: "#91eded",
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 20,
          }}
          placeholder="password"
        />

        <TextInput
          style={{
            width: 180,
            height: 60,
            backgroundColor: "#91eded",
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 20,
          }}
          placeholder="re-enter password"
        />
      </View>
      <View style={{ flex: 0.15, paddingLeft: 110, paddingTop: 30 }}>
        <Pressable>
          <Text>Already have an account? click here!</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 0.15,
          alignItems: "center",
          // justifyContent: "center",
          // backgroundColor: "grey",
        }}
      >
        <Pressable style={styles.pressButton}>
          <Text>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    paddingTop: 20,
    fontWeight: "bold",
    color: "#006A4E",
  },

  pressButton: {
    backgroundColor: "#91eded",
    padding: 20,
    borderRadius: 30,
  },
});

import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  View,
} from "react-native"
import welcomeBanner from "./assets/welcome.png"

export default function App() {
  const [signInData, setSignInData] = useState({ username: "", password: "" })
  console.log("App - signInData", signInData)

  return (
    <View style={styles.container}>
      <Image source={welcomeBanner} style={styles.image}></Image>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(username) =>
          setSignInData({ username, password: signInData.password })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) =>
          setSignInData({ username: signInData.username, password })
        }
      />

      <Button onPress={() => {}} title="Sign in" />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 8,
  },
})

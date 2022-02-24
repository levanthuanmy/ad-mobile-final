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
  const [signInData, setSignInData] = useState({ email: "", password: "" })

  const handleSignIn = async () => {
    const res = await fetch(`https://sandbox.api.lettutor.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...signInData }),
    })
    console.log("handleSignIn - res", await res.json())
  }

  return (
    <View style={styles.container}>
      <Image source={welcomeBanner} style={styles.image}></Image>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) =>
          setSignInData({ email, password: signInData.password })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) =>
          setSignInData({ email: signInData.email, password })
        }
      />

      <Button onPress={handleSignIn} title="Sign in" />
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

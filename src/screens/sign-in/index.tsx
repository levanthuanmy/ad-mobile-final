import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import React, { FC, useState } from "react"
import { Image, Text, TextInput, View } from "react-native"
import { RootStackParamList } from "../../../App"
import welcomeBanner from "../../../assets/welcome.png"
import MyButton from "../../components/button"
import { styles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "Sign In">

const SignInScreen: FC<Props> = ({ navigation }) => {
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
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign in</Text>
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
        <MyButton onPress={handleSignIn} title="Sign in" />
        <Text style={styles.textSecondary}>Forgot password?</Text>

        <View style={styles.textSignUpContainer}>
          <Text style={styles.textSecondary}>Don't have an account? </Text>
          <Text
            onPress={() => navigation.navigate("Sign Up")}
            style={styles.textPrimary}
          >
            Sign up{" "}
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

export default SignInScreen

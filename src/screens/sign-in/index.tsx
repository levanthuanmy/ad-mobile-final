import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import React, { FC } from "react"
import { Image, Text, TextInput, View } from "react-native"
import { RootStackParamList } from "../../../App"
import welcomeBanner from "../../../assets/img/welcome.png"
import MyButton from "../../components/button"
import { signInStyles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "Sign In">

const SignInScreen: FC<Props> = ({ navigation }) => {
  // const [signInData, setSignInData] = useState({ email: "", password: "" })

  const handleSignIn = async () => {
    // const res = await fetch(`https://sandbox.api.lettutor.com/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...signInData }),
    // })
    // console.log("handleSignIn - res", await res.json())
    navigation.navigate("Bottom Tab Navigation")
  }

  return (
    <View style={signInStyles.container}>
      <Image source={welcomeBanner} style={signInStyles.image}></Image>
      <View style={signInStyles.formContainer}>
        <Text style={signInStyles.title}>Sign in</Text>
        <TextInput
          style={signInStyles.input}
          placeholder="Email"
          // onChangeText={(email) =>
          //   setSignInData({ email, password: signInData.password })
          // }
        />
        <TextInput
          style={signInStyles.input}
          placeholder="Password"
          secureTextEntry
          // onChangeText={(password) =>
          //   setSignInData({ email: signInData.email, password })
          // }
        />
        <MyButton onPress={handleSignIn} title="Sign in" />
        <Text style={signInStyles.textSecondary}>Forgot password?</Text>

        <View style={signInStyles.textSignUpContainer}>
          <Text style={signInStyles.textSecondary}>
            Don't have an account?{" "}
          </Text>
          <Text
            onPress={() => navigation.navigate("Sign Up")}
            style={signInStyles.textPrimary}
          >
            Sign up
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

export default SignInScreen

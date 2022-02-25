import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { RootStackParamList } from "../../../App"
import MyButton from "../../components/button"
import { signInStyles } from "../sign-in/styles"

type Props = NativeStackScreenProps<RootStackParamList, "Sign Up">

const SignUpScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={signUpStyles.formContainer}>
      <Text style={signInStyles.title}>Sign up</Text>

      <TextInput style={signUpStyles.input} placeholder="Email" />
      <TextInput style={signUpStyles.input} placeholder="Name" />
      <TextInput
        style={signUpStyles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={signUpStyles.input}
        placeholder="Confirm password"
        secureTextEntry
      />
      <MyButton onPress={() => {}} title="Sign up" />

      <View style={signInStyles.textSignUpContainer}>
        <Text style={signInStyles.textSecondary}>
          Already have an account?{" "}
        </Text>
        <Text
          onPress={() => navigation.navigate("Sign In")}
          style={signInStyles.textPrimary}
        >
          Sign in
        </Text>
      </View>
    </View>
  )
}

const signUpStyles = StyleSheet.create({
  formContainer: {
    paddingTop: 100,
    padding: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    paddingHorizontal: 12,
    marginBottom: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
})

export default SignUpScreen

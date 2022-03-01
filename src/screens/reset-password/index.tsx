import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { View, TextInput, Text, StyleSheet } from "react-native"
import { RootStackParamList } from "../../../App"
import {
  PRIMARY_COLOR,
  TITLE_TEXT_SIZE,
  TITLE_TEXT_WEIGHT,
} from "../../../constants"
import MyButton from "../../components/button"

type Props = NativeStackScreenProps<RootStackParamList, "Reset Password">

const ResetPasswordScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={resetPasswordStyles.formContainer}>
      <Text style={resetPasswordStyles.title}>Reset password</Text>

      <TextInput style={resetPasswordStyles.input} placeholder="Email" />
      <MyButton onPress={() => {}} title="Reset password" />

      <Text
        onPress={() => navigation.navigate("Sign In")}
        style={resetPasswordStyles.textPrimary}
      >
        Return to Sign in
      </Text>
    </View>
  )
}

const resetPasswordStyles = StyleSheet.create({
  formContainer: { paddingTop: 100, padding: 30 },
  title: {
    fontSize: TITLE_TEXT_SIZE,
    fontWeight: TITLE_TEXT_WEIGHT,
    paddingBottom: 16,
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
  textPrimary: {
    color: PRIMARY_COLOR,
    fontWeight: "500",
    textAlign: "center",
  },
})

export default ResetPasswordScreen

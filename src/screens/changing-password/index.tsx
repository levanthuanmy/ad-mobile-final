import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { RootStackParamList } from "../../../App"
import MyButton from "../../components/button"

type Props = NativeStackScreenProps<RootStackParamList, "Changing Password">
const ChangingPassword: FC<Props> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={24}
            color="black"
            style={{ marginStart: 8 }}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <SafeAreaView style={changingPasswordStyles.container}>
      <ScrollView style={changingPasswordStyles.scrollViewContainer}>
        <Text>Old password</Text>
        <TextInput
          style={changingPasswordStyles.input}
          defaultValue="123456"
          secureTextEntry
        />

        <Text>New password</Text>
        <TextInput
          style={changingPasswordStyles.input}
          defaultValue="123456"
          secureTextEntry
        />

        <Text>Reenter new password</Text>
        <TextInput
          style={changingPasswordStyles.input}
          defaultValue="123456"
          secureTextEntry
        />

        <MyButton onPress={() => navigation.goBack()} title="Save" />
      </ScrollView>
    </SafeAreaView>
  )
}

const changingPasswordStyles = StyleSheet.create({
  input: {
    marginTop: 4,
    height: 40,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    paddingHorizontal: 12,
    marginBottom: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    padding: 16,
  },
})

export default ChangingPassword

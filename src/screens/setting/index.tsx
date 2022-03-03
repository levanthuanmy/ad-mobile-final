import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { RootStackParamList } from "../../../App"

type Props = NativeStackScreenProps<RootStackParamList, "Setting">

const SettingScreen: FC<Props> = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

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
    <SafeAreaView style={settingScreenStyles.container}>
      <ScrollView style={settingScreenStyles.scrollContainer}>
        <View style={settingScreenStyles.optionContainer}>
          <Text style={settingScreenStyles.title}>Dark mode</Text>
          <Switch
            trackColor={{ false: "#fff", true: "#767577" }}
            thumbColor={"#fff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={settingScreenStyles.optionContainer}>
          <Text style={settingScreenStyles.title}>Language</Text>
          <Text>English</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const settingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    padding: 16,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontWeight: "500",
  },
})

export default SettingScreen

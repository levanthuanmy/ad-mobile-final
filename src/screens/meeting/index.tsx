import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { RootStackParamList } from "../../../App"

type Props = NativeStackScreenProps<RootStackParamList, "Meeting">

const MeetingScreen: FC<Props> = ({ navigation }) => {
  const [countDown, setCountDown] = React.useState<number>(0)
  const [runTimer, setRunTimer] = React.useState<boolean>(true)

  React.useEffect(() => {
    let timerId: NodeJS.Timer = null as unknown as NodeJS.Timer

    if (runTimer) {
      setCountDown(60 * 10)
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1)
      }, 1000)
    } else {
      clearInterval(timerId)
    }

    return () => clearInterval(timerId)
  }, [runTimer])

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      setRunTimer(false)
      setCountDown(0)
    }
  }, [countDown, runTimer])

  const seconds = String(countDown % 60).padStart(2, "0")
  const minutes = String(Math.floor(countDown / 60)).padStart(2, "0")

  return (
    <SafeAreaView style={meetingStyles.container}>
      <View style={meetingStyles.statusBar}>
        <View style={meetingStyles.statusBarMain}>
          <MaterialCommunityIcons
            name="clock-time-two-outline"
            size={24}
            color="black"
          />
          <Text>
            {"  "}Time remaining: {minutes}:{seconds}
          </Text>
        </View>
      </View>
      <View style={meetingStyles.actionBar}>
        <View style={meetingStyles.statusBarMain}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={meetingStyles.leave}>
              <Ionicons name="exit-outline" size={16} color="white" /> Leave
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const meetingStyles = StyleSheet.create({
  statusBarMain: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    height: Dimensions.get("window").height - 64,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#000011",
    position: "relative",
  },
  actionBar: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
  statusBar: {
    position: "absolute",
    top: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
  leave: {
    backgroundColor: "red",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
})

export default MeetingScreen

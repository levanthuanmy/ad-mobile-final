import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import { RootStackParamList } from "../../../App"

type Props = NativeStackScreenProps<RootStackParamList, "Meeting">

const MeetingScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={meetingStyles.container}>
      <View style={meetingStyles.statusBar}></View>
      <View style={meetingStyles.actionBar}></View>
    </SafeAreaView>
  )
}

const meetingStyles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 64,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#000011",
    position: "relative",
  },
  actionBar: {
    // width: Dimensions.get("window").width - 30,
    height: 80,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  statusBar:{
    height: 80,
    backgroundColor: "#fff",
    position: "absolute",
    top: 20,
    width: "100%",
  }
})

export default MeetingScreen

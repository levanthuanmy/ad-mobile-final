import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { View } from "react-native"
import { RootStackParamList } from "../../../App"

type Props = NativeStackScreenProps<RootStackParamList, "Meeting">

const MeetingScreen: FC<Props> = ({ navigation }) => {
  return <View>

  </View>
}

export default MeetingScreen

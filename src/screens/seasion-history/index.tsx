import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Ionicons } from "@expo/vector-icons"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { RootStackParamList } from "../../../App"
import CardScheduleHistory from "../../components/card-schedule-history"

type Props = NativeStackScreenProps<RootStackParamList, "Session history">

const SessionHistory: FC<Props> = ({ navigation }) => {
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
  }, [])

  return (
    <SafeAreaView style={sessionHistoryStyles.container}>
      <ScrollView style={sessionHistoryStyles.scrollViewContainer}>
        <CardScheduleHistory />
        <CardScheduleHistory />
        <CardScheduleHistory />
        <CardScheduleHistory />
        <CardScheduleHistory />
      </ScrollView>
    </SafeAreaView>
  )
}

const sessionHistoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    padding: 16,
  },
})

export default SessionHistory

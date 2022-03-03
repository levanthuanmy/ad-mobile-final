import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC, useState } from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { RootStackParamList } from "../../../App"
import { PRIMARY_COLOR, TINT_PRIMARY_COLOR } from "../../../constants"
import { RootBottomTabParamList } from "../../components/bottom-tab-navigation"
import CardSchedule from "../../components/card-schedule"
import PopupModal from "../../components/popup-modal"

type Props = NativeStackScreenProps<
  RootBottomTabParamList & RootStackParamList,
  "Schedule"
>

const ScheduleScreen: FC<Props> = ({ navigation }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  const handleCloseModal = () => {
    setIsShowModal(false)
  }

  return (
    <SafeAreaView style={scheduleStyles.container}>
      <ScrollView>
        <Text style={scheduleStyles.textNotification}>
          You have 3 upcoming events
        </Text>
        <View style={scheduleStyles.scrollViewContainer}>
          <CardSchedule
            setShowModal={setIsShowModal}
            handleJoinMeeting={() => navigation.navigate("Meeting")}
          />
          <CardSchedule
            setShowModal={setIsShowModal}
            handleJoinMeeting={() => navigation.navigate("Meeting")}
          />
          <CardSchedule
            setShowModal={setIsShowModal}
            handleJoinMeeting={() => navigation.navigate("Meeting")}
          />
        </View>
      </ScrollView>

      <PopupModal show={isShowModal} handleCloseModal={handleCloseModal} />
    </SafeAreaView>
  )
}

const scheduleStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    padding: 16,
  },
  textNotification: {
    backgroundColor: TINT_PRIMARY_COLOR,
    color: PRIMARY_COLOR,
    fontWeight: "600",
    padding: 16,
    textAlign: "center",
  },
})

export default ScheduleScreen

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { RootStackParamList } from "../../../App"
import {
  PRIMARY_COLOR,
  TITLE_TEXT_SIZE,
  TITLE_TEXT_WEIGHT,
} from "../../../constants"
import { RootBottomTabParamList } from "../../components/bottom-tab-navigation"
import MyButton from "../../components/button"
import CardTeacher from "../../components/card-teacher"

type Props = NativeStackScreenProps<
  RootBottomTabParamList & RootStackParamList,
  "Home"
>

const HomeScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <ScrollView style={homeStyles.scrollViewContainer}>
        <View style={homeStyles.noti}>
          <Text style={homeStyles.textTotal}>Total study time: 120:19:59</Text>
          <Text style={homeStyles.textNoti}>Upcoming meeting</Text>
          <Text style={homeStyles.textNoti}>20:30 - 21:00 Thu, 03/03/2022</Text>
          <MyButton
            onPress={() => {}}
            title="Join now"
            btnContainer={homeStyles.btnJoin}
            btnText={homeStyles.btnJoinText}
          />
        </View>

        <View style={homeStyles.recommended}>
          <Text style={homeStyles.textRecommended}>Recommended</Text>
          <CardTeacher
            onToTeacherDetail={() => navigation.navigate("Teacher Detail")}
          />
          <CardTeacher
            onToTeacherDetail={() => navigation.navigate("Teacher Detail")}
          />
          <CardTeacher
            onToTeacherDetail={() => navigation.navigate("Teacher Detail")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {},
  noti: {
    backgroundColor: PRIMARY_COLOR,
    padding: 16,
    textAlign: "center",
  },
  textTotal: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 8,
  },
  textNoti: {
    color: "#fff",
  },
  btnJoin: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 40,
    paddingVertical: 10,
  },
  btnJoinText: {
    color: PRIMARY_COLOR,
    fontWeight: "500",
  },
  recommended: {
    padding: 16,
  },
  textRecommended: {
    fontWeight: TITLE_TEXT_WEIGHT,
    fontSize: TITLE_TEXT_SIZE,
    marginBottom: 4,
  },
})

export default HomeScreen

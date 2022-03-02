import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native"
import { RootStackParamList } from "../../../App"
import { RootBottomTabParamList } from "../../components/bottom-tab-navigation"
import CardCourse from "../../components/card-course"

type Props = NativeStackScreenProps<
  RootBottomTabParamList & RootStackParamList,
  "Course List"
>

const CourseListScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={courseListStyles.container}>
      <ScrollView style={courseListStyles.scrollViewContainer}>
        <CardCourse onPress={() => navigation.navigate("Course Detail")} />
        <CardCourse onPress={() => navigation.navigate("Course Detail")} />
        <CardCourse onPress={() => navigation.navigate("Course Detail")} />
        <CardCourse onPress={() => navigation.navigate("Course Detail")} />
      </ScrollView>
    </SafeAreaView>
  )
}

const courseListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    padding: 16,
  },
  banner: {
    width: "100%",
    height: 200,
  },
})

export default CourseListScreen

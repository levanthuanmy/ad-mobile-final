import React, { FC } from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native"
import CardCourse from "../../components/card-course"

const CourseListScreen: FC = () => {
  return (
    <SafeAreaView style={courseListStyles.container}>
      <ScrollView style={courseListStyles.scrollViewContainer}>
        <CardCourse />
        <CardCourse />
        <CardCourse />
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

import React, { FC } from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native"
import CardTeacher from "../../components/card-teacher"

const TeacherListScreen: FC = () => {
  return (
    <SafeAreaView style={teacherListStyles.container}>
      <ScrollView style={teacherListStyles.scrollViewContainer}>
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
      </ScrollView>
    </SafeAreaView>
  )
}

const teacherListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    padding: 16,
  },
})

export default TeacherListScreen

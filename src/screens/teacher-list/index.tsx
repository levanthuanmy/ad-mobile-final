import React, { FC } from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native"
import CardTeacher from "../../components/card-teacher"
import SubjectBadge from "../../components/subject-badge"

const TeacherListScreen: FC = () => {
  return (
    <SafeAreaView style={teacherListStyles.container}>
      <ScrollView style={teacherListStyles.scrollViewContainer}>
        <TextInput
          style={teacherListStyles.search}
          placeholder="Search teacher..."
        />

        <ScrollView
          horizontal={true}
          style={teacherListStyles.horizontalScrollViewContainer}
        >
          <SubjectBadge active={false} name="Python" />
          <SubjectBadge active={false} name="Marketing" />
          <SubjectBadge active={false} name="Business English" />
          <SubjectBadge active={false} name="Mathematic" />
          <SubjectBadge active={false} name="Physic" />
          <SubjectBadge active={false} name="IELTS" />
          <SubjectBadge active={false} name="Web development" />
        </ScrollView>

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
  search: {
    height: 40,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    paddingHorizontal: 12,
    marginBottom: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  horizontalScrollViewContainer: {
    paddingBottom: 16,
  },
})

export default TeacherListScreen

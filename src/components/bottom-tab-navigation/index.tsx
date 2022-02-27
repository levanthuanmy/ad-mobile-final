import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React, { FC } from "react"
import CourseListScreen from "../../screens/course-list"
import ScheduleScreen from "../../screens/schedule"
import TeacherListScreen from "../../screens/teacher-list"

const BottomTabNavigation: FC = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name="Teacher List" component={TeacherListScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Course List" component={CourseListScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { FC } from "react"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"
import CourseListScreen from "../../screens/course-list"
import HomeScreen from "../../screens/home"
import ProfileScreen from "../../screens/profile"
import ScheduleScreen from "../../screens/schedule"
import TeacherListScreen from "../../screens/teacher-list"

export type RootBottomTabParamList = {
  Home: undefined
  "Teacher List": undefined
  Schedule: undefined
  "Course List": undefined
  Profile: undefined
}

const BottomTabNavigation: FC = () => {
  const Tab = createBottomTabNavigator<RootBottomTabParamList>()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconComponent: React.ReactNode = <></>

          if (route.name === "Teacher List") {
            iconComponent = (
              <Ionicons name="people-outline" size={18} color={color} />
            )
          } else if (route.name === "Schedule") {
            iconComponent = (
              <MaterialIcons name="schedule" size={18} color={color} />
            )
          } else if (route.name === "Course List") {
            iconComponent = (
              <FontAwesome5 name="chalkboard-teacher" size={18} color={color} />
            )
          } else if (route.name === "Profile") {
            iconComponent = (
              <MaterialIcons name="account-circle" size={18} color={color} />
            )
          } else if (route.name === "Home") {
            iconComponent = <Entypo name="home" size={18} color={color} />
          }

          return iconComponent
        },
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: SECONDARY_COLOR,
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Teacher List" component={TeacherListScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Course List" component={CourseListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

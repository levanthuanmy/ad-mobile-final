import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTabNavigation from "./src/components/bottom-tab-navigation"
import ChangingPassword from "./src/screens/changing-password"
import CourseDetailScreen from "./src/screens/course-detail"
import MeetingScreen from "./src/screens/meeting"
import ProfileManagement from "./src/screens/profile-management"
import ResetPasswordScreen from "./src/screens/reset-password"
import SessionHistory from "./src/screens/seasion-history"
import SettingScreen from "./src/screens/setting"
import SignInScreen from "./src/screens/sign-in"
import SignUpScreen from "./src/screens/sign-up"
import TeacherDetailScreen from "./src/screens/teacher-detail"

export type RootStackParamList = {
  "Sign In": undefined
  "Sign Up": undefined
  "Reset Password": undefined
  "Bottom Tab Navigation": undefined
  "Teacher Detail": undefined
  "Course Detail": undefined
  "Session history": undefined
  Setting: undefined
  Meeting: undefined
  "Profile Management": undefined
  "Changing Password": undefined
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Sign In"
      >
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
        <Stack.Screen
          name="Bottom Tab Navigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Teacher Detail"
          component={TeacherDetailScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Course Detail"
          component={CourseDetailScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Session history"
          component={SessionHistory}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Setting"
          component={SettingScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Meeting"
          component={MeetingScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Profile Management"
          component={ProfileManagement}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Changing Password"
          component={ChangingPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

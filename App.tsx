import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTabNavigation from "./src/components/bottom-tab-navigation"
import ResetPasswordScreen from "./src/screens/reset-password"
import SignInScreen from "./src/screens/sign-in"
import SignUpScreen from "./src/screens/sign-up"
import TeacherDetailScreen from "./src/screens/teacher-detail"

export type RootStackParamList = {
  "Sign In": undefined
  "Sign Up": undefined
  "Reset Password": undefined
  "Bottom Tab Navigation": undefined
  "Teacher Detail": undefined
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Teacher Detail"
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

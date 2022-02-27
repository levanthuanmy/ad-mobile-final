import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTabNavigation from "./src/components/bottom-tab-navigation"
import SignInScreen from "./src/screens/sign-in"
import SignUpScreen from "./src/screens/sign-up"

export type RootStackParamList = {
  "Sign In": undefined
  "Sign Up": undefined
  "Bottom Tab Navigation": undefined
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen
          name="Bottom Tab Navigation"
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

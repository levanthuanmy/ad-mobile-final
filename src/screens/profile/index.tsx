import React, { FC } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import menAvt from "../../../assets/img/avatar-2.jpg"
import { SECONDARY_COLOR } from "../../../constants"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import MyButton from "../../components/button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootBottomTabParamList } from "../../components/bottom-tab-navigation"
import { RootStackParamList } from "../../../App"

type Props = NativeStackScreenProps<
  RootBottomTabParamList & RootStackParamList,
  "Profile"
>

const ProfileScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={profileStyles.container}>
      <ScrollView style={profileStyles.scrollViewContainer}>
        <View style={profileStyles.infoContainer}>
          <Image source={menAvt} style={profileStyles.avatar} />
          <View>
            <Text style={profileStyles.textName}>John King</Text>
            <Text style={profileStyles.textMail}>jking@gmail.com</Text>
          </View>
        </View>

        <View style={profileStyles.optionContainer}>
          <TouchableOpacity style={profileStyles.option}>
            <Ionicons name="ios-key-outline" size={24} color="black" />
            <Text style={profileStyles.textOption}>Change password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={profileStyles.option}
            onPress={() => navigation.navigate("Session history")}
          >
            <MaterialCommunityIcons
              name="timeline-clock-outline"
              size={24}
              color="black"
            />
            <Text style={profileStyles.textOption}>Session history</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profileStyles.option}>
            <MaterialCommunityIcons name="teach" size={24} color="black" />
            <Text style={profileStyles.textOption}>Become a teacher</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profileStyles.option}>
            <Ionicons name="settings-outline" size={24} color="black" />
            <Text style={profileStyles.textOption}>Setting</Text>
          </TouchableOpacity>
        </View>

        <MyButton
          onPress={() => {
            navigation.navigate("Sign In")
          }}
          title="Sign out"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    padding: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginEnd: 16,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textName: { fontWeight: "500", fontSize: 16 },
  textMail: {
    color: SECONDARY_COLOR,
  },
  optionContainer: {
    marginTop: 32,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: SECONDARY_COLOR,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    padding: 16,
    borderRadius: 8,
  },
  textOption: {
    paddingStart: 16,
  },
})

export default ProfileScreen

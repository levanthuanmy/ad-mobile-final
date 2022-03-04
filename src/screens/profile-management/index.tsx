import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { RootStackParamList } from "../../../App"
import menAvt from "../../../assets/img/avatar-2.jpg"
import { TINT_SECONDARY_COLOR } from "../../../constants"
import MyButton from "../../components/button"
import SubjectBadge from "../../components/subject-badge"

type Props = NativeStackScreenProps<RootStackParamList, "Profile Management">

const ProfileManagement: FC<Props> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={24}
            color="black"
            style={{ marginStart: 8 }}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <SafeAreaView style={profileManagementStyles.container}>
      <ScrollView style={profileManagementStyles.scrollViewContainer}>
        <Image source={menAvt} style={profileManagementStyles.avatar} />
        <Text style={profileManagementStyles.textMail}>jking@gmail.com</Text>

        <Text>Full name</Text>
        <TextInput
          style={profileManagementStyles.input}
          defaultValue="John Dove"
        />

        <Text>Date of birth</Text>
        <TextInput
          style={profileManagementStyles.input}
          defaultValue="11/05/2000"
        />

        <Text>Phone number</Text>
        <TextInput
          style={[
            profileManagementStyles.input,
            { backgroundColor: TINT_SECONDARY_COLOR },
          ]}
          defaultValue="0328586954"
          editable={false}
        />

        <Text>Nationality</Text>
        <TextInput
          style={profileManagementStyles.input}
          defaultValue="Vietnam"
        />

        <Text>Level</Text>
        <TextInput
          style={profileManagementStyles.input}
          defaultValue="Beginner"
        />

        <Text>Subjects</Text>
        <View style={profileManagementStyles.subject}>
          <SubjectBadge active name="English" />
          <SubjectBadge active name="Math" />
          <SubjectBadge active name="Programing" />
        </View>

        <Text>Test preparation</Text>
        <View style={profileManagementStyles.subject}>
          <SubjectBadge name="IELTS" active={false} />
          <SubjectBadge name="IELTS" active={false} />
          <SubjectBadge name="IELTS" active={false} />
          <SubjectBadge name="IELTS" active={false} />
        </View>

        <MyButton onPress={() => navigation.goBack()} title="Save" />
      </ScrollView>
    </SafeAreaView>
  )
}

const profileManagementStyles = StyleSheet.create({
  subject: {
    flexDirection: "row",
    paddingBottom: 16,
    paddingTop: 4,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    padding: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginEnd: 16,
    alignSelf: "center",
    marginBottom: 16,
  },
  textMail: {
    textAlign: "center",
  },
  input: {
    marginTop: 4,
    height: 40,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    paddingHorizontal: 12,
    marginBottom: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
})

export default ProfileManagement

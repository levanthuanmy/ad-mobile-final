import React, { FC } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import banner from "../../../assets/img/course-banner.png"
import avatar from "../../../assets/img/avatar-2.jpg"
import { TITLE_TEXT_SIZE, TITLE_TEXT_WEIGHT } from "../../../constants"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"
import MyButton from "../../components/button"
import SubjectBadge from "../../components/subject-badge"
import RatingBadge from "../../components/rating-badge"
import CardComment from "../../components/card-comment"

type Props = NativeStackScreenProps<RootStackParamList, "Sign In">

const TeacherDetailScreen: FC<Props> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MyButton onPress={() => navigation.goBack()} title="back" />
      ),
    })
  }, [])

  return (
    <SafeAreaView style={teacherDetailStyles.container}>
      <ScrollView style={teacherDetailStyles.scrollViewContainer}>
        <Image source={banner} style={teacherDetailStyles.banner} />
        <View style={teacherDetailStyles.main}>
          <View style={teacherDetailStyles.basicInfoContainer}>
            <Image source={avatar} style={teacherDetailStyles.avatar} />
            <View style={teacherDetailStyles.nameContainer}>
              <Text style={teacherDetailStyles.textName}>John Dove</Text>
              <Text>English teacher</Text>
              <Text>Vietnam</Text>
            </View>
          </View>

          <MyButton onPress={() => {}} title="Book now" />

          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            libero odio sequi amet cum. Reprehenderit, quas. Sunt id aut, sint
            neque ex quisquam eveniet est magnam, culpa vel quia minus? Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione
            possimus aspernatur debitis illum adipisci eum mollitia, saepe,
            culpa sed delectus praesentium ad doloremque voluptate vero. Vel
            sapiente similique dolore?
          </Text>

          <Text>Language</Text>
          <View>
            <SubjectBadge active name="English" />
          </View>

          <Text>Major</Text>
          <View>
            <SubjectBadge active name="English" />
            <SubjectBadge active name="English" />
            <SubjectBadge active name="English" />
          </View>

          <Text>Review & comment</Text>
          <CardComment />
          <CardComment />
          <CardComment />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const teacherDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  basicInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  scrollViewContainer: {},
  banner: {
    height: 200,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  main: {
    padding: 16,
  },
  nameContainer: {
    paddingStart: 16,
  },
  textName: {
    fontWeight: TITLE_TEXT_WEIGHT,
    fontSize: TITLE_TEXT_SIZE,
  },
})

export default TeacherDetailScreen

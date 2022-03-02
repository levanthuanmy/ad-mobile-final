import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC, useState } from "react"
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
import { RootStackParamList } from "../../../App"
import avatar from "../../../assets/img/avatar-2.jpg"
import banner from "../../../assets/img/course-banner.png"
import { TITLE_TEXT_SIZE, TITLE_TEXT_WEIGHT } from "../../../constants"
import BottomSheetModal from "../../components/bottom-sheet-modal"
import MyButton from "../../components/button"
import CardComment from "../../components/card-comment"
import CardDatetime from "../../components/card-datetime"
import RatingBadge from "../../components/rating-badge"
import SubjectBadge from "../../components/subject-badge"

type Props = NativeStackScreenProps<RootStackParamList, "Sign In">

const TeacherDetailScreen: FC<Props> = ({ navigation }) => {
  const [isShowDateModal, setIsShowDateModal] = useState<boolean>(false)
  const [isShowTimeModal, setIsShowTimeModal] = useState<boolean>(false)

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
            <View style={teacherDetailStyles.actionContainer}>
              <RatingBadge rating={4.5} />
              <Ionicons name="ios-heart-outline" size={22} color="red" />
              <Ionicons name="ios-warning" size={22} color="gold" />
            </View>
          </View>

          <MyButton
            onPress={() => {
              setIsShowDateModal(true)
            }}
            title="Book now"
          />

          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            libero odio sequi amet cum. Reprehenderit, quas. Sunt id aut, sint
            neque ex quisquam eveniet est magnam, culpa vel quia minus? Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione
            possimus aspernatur debitis illum adipisci eum mollitia, saepe,
            culpa sed delectus praesentium ad doloremque voluptate vero. Vel
            sapiente similique dolore?
          </Text>

          <Text style={teacherDetailStyles.textTitle}>Language</Text>
          <ScrollView horizontal>
            <SubjectBadge active name="English" />
          </ScrollView>

          <Text style={teacherDetailStyles.textTitle}>Major</Text>
          <ScrollView horizontal>
            <SubjectBadge active name="English" />
            <SubjectBadge active name="English" />
            <SubjectBadge active name="English" />
          </ScrollView>

          <Text style={teacherDetailStyles.textTitle}>Review & comment</Text>
          <CardComment />
          <CardComment />
          <CardComment />
        </View>
      </ScrollView>

      <BottomSheetModal
        size={0.7}
        show={isShowDateModal}
        handleClose={() => setIsShowDateModal(false)}
        title="Choose a date"
      >
        <ScrollView>
          <View style={teacherDetailStyles.chooseDate}>
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
            <CardDatetime
              content="Wed, Mar 2"
              onPress={() => setIsShowTimeModal(true)}
            />
          </View>
        </ScrollView>
      </BottomSheetModal>

      <BottomSheetModal
        size={0.7}
        show={isShowTimeModal}
        handleClose={() => setIsShowTimeModal(false)}
        title="Choose a date"
      >
        <ScrollView>
          <View style={teacherDetailStyles.chooseDate}>
            <CardDatetime
              content="19:00 - 20:20"
              onPress={() => setIsShowTimeModal(false)}
            />
            <CardDatetime
              content="19:00 - 20:20"
              onPress={() => setIsShowTimeModal(false)}
            />
            <CardDatetime
              content="19:00 - 20:20"
              onPress={() => setIsShowTimeModal(false)}
            />
            <CardDatetime
              content="19:00 - 20:20"
              onPress={() => setIsShowTimeModal(false)}
            />
            <CardDatetime
              content="19:00 - 20:20"
              onPress={() => setIsShowTimeModal(false)}
            />
          </View>
        </ScrollView>
      </BottomSheetModal>
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
    position: "relative",
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
  textTitle: {
    fontWeight: TITLE_TEXT_WEIGHT,
    fontSize: TITLE_TEXT_SIZE,
    marginTop: 16,
    marginBottom: 8,
  },
  chooseDate: {
    paddingTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  actionContainer: {
    position: "absolute",
    textAlign: "right",
    right: 0,
  },
})

export default TeacherDetailScreen

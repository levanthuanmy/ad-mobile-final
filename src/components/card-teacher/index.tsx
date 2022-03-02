import React, { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import womenAvatar from "../../../assets/img/avatar-1.jpg"
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TINT_PRIMARY_COLOR,
} from "../../../constants"
import MyButton from "../button"
import RatingBadge from "../rating-badge"
import SubjectBadge from "../subject-badge"

const CardTeacher: FC<{ onToTeacherDetail: () => void }> = ({
  onToTeacherDetail,
}) => {
  return (
    <View style={teacherCardStyles.container}>
      <View style={teacherCardStyles.header}>
        <Image source={womenAvatar} style={teacherCardStyles.avatar}></Image>
        <View style={teacherCardStyles.titleContainer}>
          <Text style={teacherCardStyles.textName}>John Doe</Text>
          <RatingBadge rating={4} />
        </View>
      </View>

      <View style={teacherCardStyles.descriptionContainer}>
        <View style={teacherCardStyles.subjectBadgeContainer}>
          <SubjectBadge active name="Python" />
          <SubjectBadge active name="Marketing" />
          <SubjectBadge active name="IELTS" />
          <SubjectBadge active name="TOEIC" />
        </View>
        <Text style={teacherCardStyles.textDescription}>
          Professor from Howard University.
        </Text>
        <MyButton
          onPress={onToTeacherDetail}
          title="Book now"
          btnContainer={teacherCardStyles.btnContainer}
        />
      </View>
    </View>
  )
}

export const teacherCardStyles = StyleSheet.create({
  container: {
    backgroundColor: TINT_PRIMARY_COLOR,
    borderRadius: 10,
    shadowColor: SECONDARY_COLOR,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  titleContainer: {
    padding: 8,
    flex: 1,
  },
  descriptionContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    position: "relative",
  },
  btnContainer: {
    position: "absolute",
    backgroundColor: PRIMARY_COLOR,
    bottom: 0,
    right: 0,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
  },
  textName: {
    fontWeight: "600",
    fontSize: 18,
  },
  subjectBadgeContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textDescription: {
    paddingTop: 8,
  },
})

export default CardTeacher

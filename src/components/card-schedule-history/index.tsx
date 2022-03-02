import React, { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import menAvatar from "../../../assets/img/avatar-2.jpg"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"
import MyButton from "../button"

const CardScheduleHistory: FC = () => {
  return (
    <View style={cardScheduleHistoryStyles.cardEventContainer}>
      <View style={cardScheduleHistoryStyles.header}>
        <Image
          source={menAvatar}
          style={cardScheduleHistoryStyles.avatar}
        ></Image>
        <View style={cardScheduleHistoryStyles.titleContainer}>
          <Text style={cardScheduleHistoryStyles.textName}>John Doe</Text>
          <Text>Mon, 11/05/2022</Text>
          <Text>07:30 - 12:30</Text>
          <Text>Grade: 10/10</Text>
        </View>
      </View>

      <View style={cardScheduleHistoryStyles.actionContainer}>
        <View style={cardScheduleHistoryStyles.btnContainer}>
          <MyButton
            onPress={() => {}}
            title="Comment"
            btnContainer={cardScheduleHistoryStyles.btnComment}
          />
        </View>
        <View style={cardScheduleHistoryStyles.btnContainer}>
          <MyButton
            onPress={() => {}}
            title="Review"
            btnContainer={cardScheduleHistoryStyles.btnReview}
          />
        </View>
      </View>
    </View>
  )
}

const cardScheduleHistoryStyles = StyleSheet.create({
  cardEventContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: SECONDARY_COLOR,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginBottom: 16,
  },
  header: {
    padding: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  titleContainer: { padding: 8, paddingBottom: 0 },
  textName: {
    fontWeight: "600",
    fontSize: 18,
  },
  actionContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: "flex-end",
  },
  btnContainer: {
    width: "50%",
  },
  btnComment: {
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    marginEnd: 8,
  },
  btnReview: {
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    paddingVertical: 8,
    marginStart: 8,
  },
})

export default CardScheduleHistory

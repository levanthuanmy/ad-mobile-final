import React, { FC } from "react"
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native"
import menAvatar from "../../../assets/img/avatar-2.jpg"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"
import MyButton from "../button"

const CardSchedule: FC<{
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  handleJoinMeeting: (event: GestureResponderEvent) => void
}> = ({ setShowModal, handleJoinMeeting }) => {
  return (
    <View style={cardEventStyles.cardEventContainer}>
      <View style={cardEventStyles.header}>
        <Image source={menAvatar} style={cardEventStyles.avatar}></Image>
        <View style={cardEventStyles.titleContainer}>
          <Text style={cardEventStyles.textName}>John Doe</Text>
          <Text>Mon, 11/05/2022</Text>
          <Text>07:30 - 12:30</Text>
        </View>
      </View>

      <View style={cardEventStyles.actionContainer}>
        <View style={cardEventStyles.btnContainer}>
          <MyButton
            onPress={() => {
              setShowModal(true)
            }}
            title="Cancel"
            btnContainer={cardEventStyles.btnCancel}
          />
        </View>
        <View style={cardEventStyles.btnContainer}>
          <MyButton
            onPress={handleJoinMeeting}
            title="Join meeting"
            btnContainer={cardEventStyles.btnAccept}
          />
        </View>
      </View>
    </View>
  )
}

const cardEventStyles = StyleSheet.create({
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
  titleContainer: { padding: 8 },
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
  btnCancel: {
    borderRadius: 10,
    backgroundColor: "red",
    paddingVertical: 8,
    marginEnd: 8,
  },
  btnAccept: {
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    marginStart: 8,
  },
})

export default CardSchedule

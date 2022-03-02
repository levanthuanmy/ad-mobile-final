import React, { FC } from "react"
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { PRIMARY_COLOR } from "../../../constants"

const CardDatetime: FC<{
  content: string
  onPress?: (event: GestureResponderEvent) => void
}> = ({ content, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={cardDatetimeStyles.container}>
        <Text style={cardDatetimeStyles.text}>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}

const cardDatetimeStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    padding: 8,
    marginBottom: 8,
  },
  text: {
    textAlign: "center",
    color: PRIMARY_COLOR,
    fontWeight: "500",
  },
})

export default CardDatetime

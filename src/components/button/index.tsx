import React, { FC } from "react"
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import { PRIMARY_COLOR } from "../../../constants"

const defaultBtnContainer: StyleProp<ViewStyle> = {
  elevation: 8,
  backgroundColor: PRIMARY_COLOR,
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  marginBottom: 16,
}

const defaultBtnText: StyleProp<TextStyle> = {
  color: "#fff",
  alignSelf: "center",
  paddingVertical: 1,
}

const MyButton: FC<{
  title: string
  onPress: (event: GestureResponderEvent) => void
  btnContainer?: StyleProp<ViewStyle>
  btnText?: StyleProp<TextStyle>
}> = ({
  title,
  onPress,
  btnContainer = defaultBtnContainer,
  btnText = defaultBtnText,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={btnContainer}>
      <Text style={btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

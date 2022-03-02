import React, { FC } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { PRIMARY_COLOR, TITLE_TEXT_WEIGHT } from "../../../constants"

const CardLesson: FC<{ index: number; name: string }> = ({ index, name }) => {
  return (
    <TouchableOpacity style={cardLessonStyles.container}>
      <Text style={cardLessonStyles.index}>{index}</Text>
      <Text numberOfLines={1} style={cardLessonStyles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

const cardLessonStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 16,
    marginBottom: 8,
    alignItems: "center",
    borderRadius: 10,
  },
  index: {
    flexDirection: "column",
    width: 40,
    height: 40,
    borderRadius: 40,
    color: "#fff",
    backgroundColor: PRIMARY_COLOR,
    textAlign: "center",
    marginEnd: 10,
    paddingTop: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: TITLE_TEXT_WEIGHT,
  },
})

export default CardLesson

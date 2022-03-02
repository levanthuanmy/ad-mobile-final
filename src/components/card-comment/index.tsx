import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SECONDARY_COLOR } from "../../../constants"
import RatingBadge from "../rating-badge"

const CardComment: FC = () => {
  return (
    <View style={cardCommentStyles.container}>
      <View style={cardCommentStyles.header}>
        <Text style={cardCommentStyles.avatar}>img</Text>
        <Text style={cardCommentStyles.name}>Khoa Dang</Text>
      </View>
        <View style={cardCommentStyles.ratingContainer}>
          <RatingBadge rating={4} />
        </View>
    </View>
  )
}

const cardCommentStyles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: SECONDARY_COLOR,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginBottom: 16,
    position: "relative",
  },
  header: {
    flexDirection: "row",
  },
  ratingContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
})

export default CardComment

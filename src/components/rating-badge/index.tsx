import { AntDesign } from "@expo/vector-icons"
import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SECONDARY_COLOR } from "../../../constants"

const RatingBadge: FC<{ rating: string | number }> = ({ rating }) => {
  return (
    <View style={ratingBadgeStyles.ratingContainer}>
      <Text style={ratingBadgeStyles.textRating}>
        {rating} <AntDesign name="star" size={14} color="gold" />
      </Text>
    </View>
  )
}

const ratingBadgeStyles = StyleSheet.create({
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  textRating: {
    backgroundColor: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: "600",
  },
})

export default RatingBadge

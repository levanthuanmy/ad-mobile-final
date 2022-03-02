import React, { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { SECONDARY_COLOR } from "../../../constants"
import avatar from "../../../assets/img/avatar-2.jpg"
import RatingBadge from "../rating-badge"

const CardComment: FC = () => {
  return (
    <View style={cardCommentStyles.container}>
      <View style={cardCommentStyles.header}>
        <Image source={avatar} style={cardCommentStyles.avatar} />
        <View>
          <Text style={cardCommentStyles.name}>Khoa Dang</Text>
          <Text style={cardCommentStyles.dateTime}>13:55 22/02/2022</Text>
        </View>
      </View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        aut architecto consectetur aperiam cum maiores laborum itaque ab placeat
        accusamus nihil reiciendis inventore esse, delectus fugiat? Veniam rerum
        placeat aperiam!
      </Text>
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
    marginBottom: 8,
  },
  ratingContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    paddingStart: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 80,
  },
  dateTime: {
    fontSize: 11,
    paddingStart: 16,
    color: SECONDARY_COLOR,
  },
})

export default CardComment

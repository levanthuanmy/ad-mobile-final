import React, { FC } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import courseBanner from "../../../assets/img/course-banner.png"
import { SECONDARY_COLOR } from "../../../constants"

const CardCourse: FC = () => {
  return (
    <TouchableOpacity>
      <View style={courseStyles.container}>
        <Image source={courseBanner} style={courseStyles.banner} />
        <View style={courseStyles.infoContainer}>
          <Text style={courseStyles.textName}>How to become a Youtuber</Text>
          <View style={courseStyles.descriptionContainer}>
            <Text>Beginner</Text>
            <Text>12 Lessons</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const courseStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: SECONDARY_COLOR,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginBottom: 16,
  },
  banner: {
    width: "100%",
    height: 160,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  infoContainer: {
    padding: 16,
  },
  textName: {
    fontWeight: "500",
    fontSize: 16,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4,
  },
})

export default CardCourse

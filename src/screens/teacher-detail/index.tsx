import React, { FC } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import banner from "../../../assets/img/course-banner.png"
import avatar from "../../../assets/img/avatar-2.jpg"

const TeacherDetailScreen: FC = () => {
  return (
    <SafeAreaView style={teacherDetailStyles.container}>
      <ScrollView style={teacherDetailStyles.scrollViewContainer}>
        <Image source={banner} style={teacherDetailStyles.banner} />
        <View style={teacherDetailStyles.main}>
          <View>
            <Image source={avatar} style={teacherDetailStyles.avatar} />
            <View>
              <Text>John Dove</Text>
              <Text>English teacher</Text>
              <Text>Vietnam</Text>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const teacherDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {},
  banner: {
    height: 200,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  main: {
    padding: 16,
  },
})

export default TeacherDetailScreen

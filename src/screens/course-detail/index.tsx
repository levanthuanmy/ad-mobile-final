import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import banner from "../../../assets/img/course-banner.png"
import { RootStackParamList } from "../../../App"
import { TITLE_TEXT_SIZE, TITLE_TEXT_WEIGHT } from "../../../constants"
import CardLesson from "../../components/card-lesson"

type Props = NativeStackScreenProps<RootStackParamList, "Sign In">

const CourseDetailScreen: FC<Props> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={24}
            color="black"
            style={{ marginStart: 8 }}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <SafeAreaView style={courseDetailStyles.container}>
      <ScrollView style={courseDetailStyles.scrollViewContainer}>
        <Image source={banner} style={courseDetailStyles.banner} />
        <View style={courseDetailStyles.mainContent}>
          <Text style={courseDetailStyles.courseName}>
            How to become a youtuber
          </Text>

          <Text style={courseDetailStyles.title}>Overview</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            consequuntur ipsa eligendi officia rem, earum facere, nam ratione
            aspernatur nesciunt asperiores dolore aliquid temporibus error
            ducimus. Ut, id vel.
          </Text>

          <Text style={courseDetailStyles.title}>Teacher</Text>
          <Text>John Doe, Hanah</Text>

          <Text style={courseDetailStyles.title}>Level</Text>
          <Text>Beginner</Text>

          <Text style={courseDetailStyles.title}>Lessons</Text>
          <CardLesson index={1} name="What will you learn" />
          <CardLesson
            index={2}
            name="This is a long texttttttttttttttttttttttttttttttttttttttttttttttttttt"
          />
          <CardLesson index={3} name="What will you learn" />
          <CardLesson index={4} name="What will you learn" />
          <CardLesson index={5} name="What will you learn" />
          <CardLesson index={6} name="What will you learn" />
          <CardLesson index={7} name="What will you learn" />
          <CardLesson index={8} name="What will you learn" />
          <CardLesson index={9} name="What will you learn" />
          <CardLesson index={10} name="What will you learn" />
          <CardLesson index={11} name="What will you learn" />
          <CardLesson index={12} name="What will you learn" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const courseDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {},
  banner: {
    height: 200,
  },
  mainContent: {
    padding: 16,
  },
  courseName: {
    fontWeight: TITLE_TEXT_WEIGHT,
    fontSize: TITLE_TEXT_SIZE,
  },
  title: {
    marginTop: 16,
    marginBottom: 4,
    fontWeight: TITLE_TEXT_WEIGHT,
    fontSize: 16,
  },
})

export default CourseDetailScreen

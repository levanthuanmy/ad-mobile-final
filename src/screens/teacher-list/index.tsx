import React, { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const TeacherListScreen: FC = () => {
  return (
    <View style={teacherListStyles.container}>
      <View>
        <View>
          {/* card component */}
          <View>
            {/* <Image ></Image> */}
            <Text>name</Text>
            <Text>rating</Text>
          </View>
          <View>
            <Text>Toán</Text>
            <Text>Lý</Text>
            <Text>Hoá</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const teacherListStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
})

export default TeacherListScreen

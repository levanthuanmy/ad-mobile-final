import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { FC } from "react"
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import { SECONDARY_COLOR, TITLE_TEXT_WEIGHT } from "../../../constants"

const BottomSheetModal: FC<{
  show: boolean
  handleClose: () => void
  size: 0.5 | 0.7
  children?: React.ReactNode
  title?: string
}> = ({ show, handleClose, size, children, title }) => {
  const modalHeight = Dimensions.get("window").height * size
  const screenHeight = Dimensions.get("window").height

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={handleClose}
    >
      <View style={bottomSheetModalStyles.container}>
        <Text
          onPress={handleClose}
          style={[
            bottomSheetModalStyles.overlay,
            {
              height: screenHeight - modalHeight,
            },
          ]}
        ></Text>
        <View
          style={[
            bottomSheetModalStyles.modalContainer,
            { height: modalHeight },
          ]}
        >
          <View style={bottomSheetModalStyles.titleContainer}>
            <Text></Text>
            <Text style={bottomSheetModalStyles.textTitle}>{title}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="window-close"
                size={24}
                color="black"
                onPress={handleClose}
              />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  )
}

const bottomSheetModalStyles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  overlay: {},
  modalContainer: {
    shadowColor: SECONDARY_COLOR,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: TITLE_TEXT_WEIGHT,
  },
})

export default BottomSheetModal

import React, { FC } from "react"
import { Modal, StyleSheet, Text, View } from "react-native"
import { SECONDARY_COLOR, PRIMARY_COLOR } from "../../../constants"
import MyButton from "../button"

const PopupModal: FC<{ show: boolean; handleCloseModal: () => void }> = ({
  show,
  handleCloseModal,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={handleCloseModal}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <Text style={modalStyles.modalText}>
            Are you sure to cancel this meeting?
          </Text>
          <View style={modalStyles.actionContainer}>
            <MyButton
              onPress={handleCloseModal}
              title="Yes"
              btnContainer={modalStyles.btnYes}
            />
            <MyButton
              onPress={handleCloseModal}
              title="No"
              btnContainer={modalStyles.btnNo}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SECONDARY_COLOR + "88", //opacity
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: SECONDARY_COLOR,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  modalText: {
    padding: 16,
    fontWeight: "500",
    fontSize: 16,
  },
  actionContainer: {
    flexDirection: "row",
    paddingBottom: 8,
  },
  btnYes: {
    backgroundColor: PRIMARY_COLOR,
    margin: 4,
    width: 60,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnNo: {
    backgroundColor: SECONDARY_COLOR,
    margin: 4,
    width: 60,
    paddingVertical: 8,
    borderRadius: 8,
  },
})

export default PopupModal

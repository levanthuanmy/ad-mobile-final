import { Dimensions, StyleSheet } from "react-native"
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TITLE_TEXT_SIZE,
  TITLE_TEXT_WEIGHT,
} from "../../../constants"
import { BANNER_PART_TOOK } from "./constants"

export const signInStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / BANNER_PART_TOOK,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    paddingHorizontal: 12,
    marginBottom: 18,
    borderRadius: 8,
  },
  formContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height:
      Dimensions.get("window").height -
      Dimensions.get("window").height / BANNER_PART_TOOK +
      20,
    position: "absolute",
    top: Dimensions.get("window").height / BANNER_PART_TOOK - 20,
    padding: 30,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  title: {
    fontSize: TITLE_TEXT_SIZE,
    fontWeight: TITLE_TEXT_WEIGHT,
    paddingBottom: 16,
  },
  textSecondary: {
    color: SECONDARY_COLOR,
    fontWeight: "500",
  },
  textSignUpContainer: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: Dimensions.get("window").width - 60,
    paddingBottom: 18,
  },
  textPrimary: {
    color: PRIMARY_COLOR,
    fontWeight: "500",
  },
})

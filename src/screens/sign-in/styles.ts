import { Dimensions, StyleSheet } from "react-native"
import { BANNER_PART_TOOK } from "./constants"

export const styles = StyleSheet.create({
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
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 16,
  },
  textSecondary: {
    color: "#a4a4a4",
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
    color: "#5352ed",
    fontWeight: "500",
  },
})

import React, { FC } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TINT_PRIMARY_COLOR,
  TINT_SECONDARY_COLOR,
} from "../../../constants"

const SubjectBadge: FC<{ name: string; active: boolean }> = ({
  name,
  active,
}) => {
  return (
    <TouchableOpacity>
      <Text
        style={[
          subjectBadgeStyles.container,
          active ? subjectBadgeStyles.active : subjectBadgeStyles.inactive,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}

const subjectBadgeStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    fontWeight: "600",
    borderRadius: 100,
    paddingVertical: 4,
    fontSize: 11,
    paddingHorizontal: 8,
    marginEnd: 4,
  },
  active: {
    backgroundColor: TINT_PRIMARY_COLOR,
    borderColor: PRIMARY_COLOR,
    color: PRIMARY_COLOR,
  },
  inactive: {
    backgroundColor: TINT_SECONDARY_COLOR,
    borderColor: SECONDARY_COLOR,
    color: SECONDARY_COLOR,
  },
})

export default SubjectBadge

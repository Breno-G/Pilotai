import { Pressable, StyleSheet, Text } from "react-native";

export const DefaultButton = ({ onPress, display, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonSignUp, { backgroundColor: color }]}
    >
      <Text style={styles.buttonText}>
        {display}
      </Text>
    </Pressable>
  )
};
const styles = StyleSheet.create({
  buttonSignUp: {
    paddingHorizontal: 37,
    paddingVertical: 23,
    fontWeight: 40,
    borderRadius: 20,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
  }
})
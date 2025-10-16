import { Pressable, StyleSheet, Text } from "react-native";

export const PurpleButton = ({onPress, display}) => {
    return (
        <Pressable
            onPress = {onPress}
            style={styles.buttonSignUp}>
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
    backgroundColor: "#6E17EB",
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
import { Pressable, StyleSheet, Text } from "react-native";

export const BlackButton = ({display}) => {
    return (
        <Pressable style={styles.buttonLogIn}>
          <Text style={styles.buttonText}>
            {display}
          </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
  buttonLogIn: {
    paddingHorizontal: 37,
    paddingVertical: 23,
    backgroundColor: "#000",
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
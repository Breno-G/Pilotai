import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BlackButton } from "../components/BlackButton.jsx";
import { PurpleButton } from "../components/PurpleButton.jsx";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PILOTAÍ
      </Text>
      <View style={styles.actions}>
        <PurpleButton 
        onPress={() => router.navigate('/cadastro')}
        display= "Cadastre-se"/>
        <Text style={{ color: "#909090", fontSize: 30, textAlign: "center" }}>
          ou
        </Text>
        <BlackButton display = "Entrar"></BlackButton>
      </View>
        <Image source={require("../assets/images/map-and-car.png")} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  title: {
    fontSize: 50,
    textAlign: "center",

  },
  actions: {
    width: "60%",
    gap: 20,
  },


});


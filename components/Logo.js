import React from "react";
import { Image, StyleSheet } from "react-native";

export function Logo() {
  return (
    <Image
      source={require("./assets/LogoRetromaniacos.png")}
      style={styles.logo}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
});
